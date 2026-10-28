<?php
/** Ojiva AI admin — sign in. Locks an IP out after LOGIN_LIMIT wrong passwords in 15 minutes. */
require (require dirname(__DIR__) . '/private-dir.php') . '/admin/bootstrap.php';

if (!empty($_SESSION['uid'])) redirect(ADMIN_BASE);

$error = '';
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    csrf_check();
    $db = ojiva_db();
    $ip = ojiva_ip_hash();
    $q = $db->prepare('SELECT COUNT(*) FROM admin_login_attempts WHERE ip_hash = ? AND attempted_at > NOW() - INTERVAL 15 MINUTE');
    $q->execute([$ip]);
    if ($q->fetchColumn() >= LOGIN_LIMIT) {
        $error = 'Too many wrong attempts. Try again in 15 minutes.';
    } else {
        $q = $db->prepare('SELECT id, password_hash FROM admin_users WHERE email = ? AND is_active = 1');
        $q->execute([strtolower(trim((string)($_POST['email'] ?? '')))]);
        $user = $q->fetch();
        // Verify against a dummy hash when the email is unknown, so timing gives nothing away
        $hash = $user['password_hash'] ?? password_hash('no-such-user', PASSWORD_DEFAULT);
        if (password_verify((string)($_POST['password'] ?? ''), $hash) && $user) {
            session_regenerate_id(true);
            $_SESSION['uid'] = (int)$user['id'];
            $db->prepare('UPDATE admin_users SET last_login_at = NOW() WHERE id = ?')->execute([$user['id']]);
            $db->prepare('DELETE FROM admin_login_attempts WHERE ip_hash = ?')->execute([$ip]);
            redirect(ADMIN_BASE);
        }
        $db->prepare('INSERT INTO admin_login_attempts (ip_hash) VALUES (?)')->execute([$ip]);
        $error = 'Wrong email or password.';
    }
}

layout_start('Sign in');
?>
<form class="card login" method="post">
  <h1>Sign in</h1>
  <p class="muted">AI chat leads for the Ojiva AI team.</p>
  <?php if ($error): ?><p class="error" role="alert"><?= h($error) ?></p><?php endif; ?>
  <?= csrf_field() ?>
  <label>Email<input type="email" name="email" autocomplete="username" required autofocus value="<?= h($_POST['email'] ?? '') ?>"></label>
  <label>Password<input type="password" name="password" autocomplete="current-password" required></label>
  <button class="btn">Sign in</button>
</form>
<?php layout_end();
