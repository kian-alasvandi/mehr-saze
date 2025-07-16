<?php
session_start();

// پاک کردن session
$_SESSION = [];
session_unset();
session_destroy();

// حذف کوکی session در مرورگر
if (ini_get("session.use_cookies")) {
    $params = session_get_cookie_params();
    setcookie(session_name(), '', time() - 42000,
        $params["path"], $params["domain"],
        $params["secure"], $params["httponly"]
    );
}

// ریدایرکت به login.php در همین پوشه
header("Location: login.php");
exit;
?>
