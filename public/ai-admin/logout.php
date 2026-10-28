<?php
/** Ojiva AI admin — sign out (POST only, with CSRF). */
require (require dirname(__DIR__) . '/private-dir.php') . '/admin/bootstrap.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    csrf_check();
    $_SESSION = [];
    session_regenerate_id(true);
}
redirect(ADMIN_BASE . 'login.php');
