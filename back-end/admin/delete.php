<?php
session_start();
require_once '../Config/db.php';

// فقط برای ادمین
if (!isset($_SESSION['admin'])) {
    header("Location: login.php");
    exit;
}

// بررسی وجود ID در POST
if (!isset($_POST['id']) || empty($_POST['id'])) {
    header("Location: dashboard.php?error=شناسه نامعتبر است.");
    exit;
}

$id = intval($_POST['id']); // تبدیل ایمن به عدد صحیح

// اجرای حذف
$stmt = $conn->prepare("DELETE FROM consultations WHERE id = ?");
$stmt->bind_param("i", $id);

if ($stmt->execute()) {
    header("Location: dashboard.php?success=فرم با موفقیت حذف شد.");
} else {
    header("Location: dashboard.php?error=حذف با خطا مواجه شد.");
}

$stmt->close();
$conn->close();
exit;
?>
