<?php
/** Ojiva AI admin — team (owners only): add people, roles, switch off, reset passwords. */
require (require dirname(__DIR__) . '/private-dir.php') . '/admin/bootstrap.php';

$user = require_admin();
require_owner($user);
$db = ojiva_db();

const ROLES = ['agent' => 'Sales agent', 'owner' => 'Owner (also manages the team)'];
const MIN_PASSWORD = 10;

$error = '';
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    csrf_check();
    $action = $_POST['action'] ?? '';
    $id = (int)($_POST['id'] ?? 0);
    $owners = fn() => (int)$db->query("SELECT COUNT(*) FROM admin_users WHERE role = 'owner' AND is_active = 1")->fetchColumn();
    $target = null;
    if ($id) {
        $q = $db->prepare('SELECT * FROM admin_users WHERE id = ?');
        $q->execute([$id]);
        $target = $q->fetch();
    }

    if ($action === 'add') {
        $email = strtolower(trim((string)($_POST['email'] ?? '')));
        $name = trim(mb_substr((string)($_POST['name'] ?? ''), 0, 80));
        $role = array_key_exists($_POST['role'] ?? '', ROLES) ? $_POST['role'] : 'agent';
        $pw = (string)($_POST['password'] ?? '');
        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) $error = 'Enter a valid email.';
        elseif ($name === '') $error = 'Enter a name.';
        elseif (strlen($pw) < MIN_PASSWORD) $error = 'The password needs at least ' . MIN_PASSWORD . ' characters.';
        else {
            try {
                $db->prepare('INSERT INTO admin_users (email, name, password_hash, role) VALUES (?, ?, ?, ?)')
                   ->execute([$email, $name, password_hash($pw, PASSWORD_DEFAULT), $role]);
                flash("$name can now sign in with $email. Share the password with them privately.");
                redirect('team.php');
            } catch (PDOException $e) {
                $error = 'Someone with that email already exists.';
            }
        }
    } elseif ($target && $action === 'role') {
        $role = array_key_exists($_POST['role'] ?? '', ROLES) ? $_POST['role'] : $target['role'];
        if ($target['role'] === 'owner' && $role !== 'owner' && $owners() <= 1) $error = 'There must always be at least one owner.';
        else {
            $db->prepare('UPDATE admin_users SET role = ? WHERE id = ?')->execute([$role, $id]);
            flash('Role updated.');
            redirect('team.php');
        }
    } elseif ($target && $action === 'toggle') {
        if ((int)$target['id'] === (int)$user['id']) $error = 'You can’t switch yourself off.';
        elseif ($target['is_active'] && $target['role'] === 'owner' && $owners() <= 1) $error = 'There must always be at least one owner.';
        else {
            $db->prepare('UPDATE admin_users SET is_active = 1 - is_active WHERE id = ?')->execute([$id]);
            flash($target['is_active'] ? "{$target['name']} can no longer sign in. Their leads stay assigned to them." : "{$target['name']} can sign in again.");
            redirect('team.php');
        }
    } elseif ($target && $action === 'password') {
        $pw = (string)($_POST['password'] ?? '');
        if (strlen($pw) < MIN_PASSWORD) $error = 'The password needs at least ' . MIN_PASSWORD . ' characters.';
        else {
            $db->prepare('UPDATE admin_users SET password_hash = ? WHERE id = ?')->execute([password_hash($pw, PASSWORD_DEFAULT), $id]);
            flash("New password set for {$target['name']}.");
            redirect('team.php');
        }
    }
}

$people = $db->query("SELECT u.*,
      (SELECT COUNT(*) FROM ai_chat_leads l WHERE l.assigned_to = u.id AND l.status IN ('new','contacted','follow_up')) AS open_leads,
      (SELECT COUNT(*) FROM ai_chat_leads l WHERE l.assigned_to = u.id AND l.status = 'converted') AS won
    FROM admin_users u ORDER BY u.is_active DESC, u.name")->fetchAll();

layout_start('Team', $user);
?>
<div class="page-head">
  <h1>Team</h1>
  <p class="muted">Who can sign in to this panel. Sales agents work leads and conversations; owners can also manage the team and delete conversations.</p>
</div>
<?php if ($error): ?><p class="error" role="alert"><?= h($error) ?></p><?php endif; ?>

<div class="card table-wrap">
<table class="leads">
  <thead><tr><th>Name</th><th>Role</th><th>Open leads</th><th>Converted</th><th>Last sign-in</th><th>Access</th><th>Reset password</th></tr></thead>
  <tbody>
  <?php foreach ($people as $p): ?>
    <tr class="<?= $p['is_active'] ? '' : 'is-off' ?>">
      <td><span class="person"><?= avatar($p['name']) ?><span><b><?= h($p['name']) ?></b><?= (int)$p['id'] === (int)$user['id'] ? ' <span class="tag">you</span>' : '' ?><small><?= h($p['email']) ?></small></span></span></td>
      <td>
        <form method="post" class="inline">
          <?= csrf_field() ?><input type="hidden" name="action" value="role"><input type="hidden" name="id" value="<?= (int)$p['id'] ?>">
          <select name="role" aria-label="Role for <?= h($p['name']) ?>">
            <?php foreach (ROLES as $k => $label): ?><option value="<?= $k ?>" <?= $p['role'] === $k ? 'selected' : '' ?>><?= h($k === 'owner' ? 'Owner' : 'Sales agent') ?></option><?php endforeach; ?>
          </select>
          <button class="btn btn-xs btn-ghost">Save</button>
        </form>
      </td>
      <td><a href="leads.php"><?= (int)$p['open_leads'] ?></a></td>
      <td><?= (int)$p['won'] ?></td>
      <td class="nowrap"><?= h(time_ago($p['last_login_at'])) ?></td>
      <td>
        <?php if ((int)$p['id'] !== (int)$user['id']): ?>
        <form method="post" class="inline">
          <?= csrf_field() ?><input type="hidden" name="action" value="toggle"><input type="hidden" name="id" value="<?= (int)$p['id'] ?>">
          <button class="btn btn-xs <?= $p['is_active'] ? 'btn-ghost' : '' ?>"><?= $p['is_active'] ? 'Switch off' : 'Switch on' ?></button>
        </form>
        <?php else: ?><span class="muted">—</span><?php endif; ?>
      </td>
      <td>
        <form method="post" class="inline">
          <?= csrf_field() ?><input type="hidden" name="action" value="password"><input type="hidden" name="id" value="<?= (int)$p['id'] ?>">
          <input type="password" name="password" minlength="<?= MIN_PASSWORD ?>" placeholder="New password" autocomplete="new-password" aria-label="New password for <?= h($p['name']) ?>" required>
          <button class="btn btn-xs btn-ghost">Set</button>
        </form>
      </td>
    </tr>
  <?php endforeach; ?>
  </tbody>
</table>
</div>

<section class="card add-person">
  <h2>Add a team member</h2>
  <form method="post" class="update">
    <?= csrf_field() ?>
    <input type="hidden" name="action" value="add">
    <label>Name<input name="name" required maxlength="80" value="<?= h(($_POST['action'] ?? '') === 'add' ? ($_POST['name'] ?? '') : '') ?>"></label>
    <label>Email<input type="email" name="email" required value="<?= h(($_POST['action'] ?? '') === 'add' ? ($_POST['email'] ?? '') : '') ?>"></label>
    <label>Role
      <select name="role"><?php foreach (ROLES as $k => $label): ?><option value="<?= $k ?>"><?= h($label) ?></option><?php endforeach; ?></select>
    </label>
    <label>Temporary password <small>(min <?= MIN_PASSWORD ?>; they can change it under their name)</small>
      <input type="password" name="password" minlength="<?= MIN_PASSWORD ?>" autocomplete="new-password" required>
    </label>
    <button class="btn btn-sm">Add</button>
  </form>
</section>
<?php layout_end();
