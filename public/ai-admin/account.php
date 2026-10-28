<?php
/** Ojiva AI admin — my account: change my own password. */
require (require dirname(__DIR__) . '/private-dir.php') . '/admin/bootstrap.php';

$user = require_admin();
$db = ojiva_db();
$error = '';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    csrf_check();
    $q = $db->prepare('SELECT password_hash FROM admin_users WHERE id = ?');
    $q->execute([$user['id']]);
    $new = (string)($_POST['new'] ?? '');
    if (!password_verify((string)($_POST['current'] ?? ''), (string)$q->fetchColumn())) $error = 'Your current password is wrong.';
    elseif (strlen($new) < 10) $error = 'The new password needs at least 10 characters.';
    elseif ($new !== (string)($_POST['again'] ?? '')) $error = 'The two new passwords don’t match.';
    else {
        $db->prepare('UPDATE admin_users SET password_hash = ? WHERE id = ?')->execute([password_hash($new, PASSWORD_DEFAULT), $user['id']]);
        session_regenerate_id(true);
        flash('Password changed.');
        redirect('account.php');
    }
}

layout_start('My account', $user);
?>
<div class="page-head">
  <h1>My account</h1>
  <p class="muted"><?= h($user['name']) ?> · <?= h($user['email']) ?> · <?= $user['role'] === 'owner' ? 'Owner' : 'Sales agent' ?></p>
</div>

<form class="card login account" method="post">
  <h2>Change password</h2>
  <?php if ($error): ?><p class="error" role="alert"><?= h($error) ?></p><?php endif; ?>
  <?= csrf_field() ?>
  <label>Current password<input type="password" name="current" autocomplete="current-password" required></label>
  <label>New password <small>(at least 10 characters)</small><input type="password" name="new" minlength="10" autocomplete="new-password" required></label>
  <label>New password again<input type="password" name="again" minlength="10" autocomplete="new-password" required></label>
  <button class="btn">Change password</button>
</form>

<form method="post" action="logout.php" class="signout">
  <?= csrf_field() ?>
  <button class="btn btn-ghost">Sign out</button>
</form>
<?php layout_end();
