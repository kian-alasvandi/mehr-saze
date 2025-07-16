<?php
// تنظیمات اتصال به دیتابیس
$host = "localhost";
$dbname = "mehrsaze";
$user = "root";         // در WAMP معمولاً root بدون رمز است
$pass = "";             // اگر رمز تعریف نکردی خالی بگذار

// ساخت اتصال
$conn = new mysqli($host, $user, $pass, $dbname);

// بررسی اتصال
if ($conn->connect_error) {
    die("خطا در اتصال به دیتابیس: " . $conn->connect_error);
}

// تنظیم کاراکتر UTF-8 برای پشتیبانی از فارسی
$conn->set_charset("utf8mb4");
?>
