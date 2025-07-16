<?php
header('Content-Type: application/json');
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST");

// اتصال به دیتابیس
require_once './Config/db.php';

// دریافت داده‌ها از بدنه POST
$data = json_decode(file_get_contents("php://input"), true);

// بررسی اعتبار داده‌ها
if (
    !isset($data['name']) ||
    !isset($data['phone']) ||
    !isset($data['service']) ||
    !isset($data['message']) ||
    !isset($data['source'])
) {
    echo json_encode(["success" => false, "message" => "اطلاعات ناقص ارسال شده‌اند."]);
    exit;
}

$name = trim($data['name']);
$phone = trim($data['phone']);
$service = trim($data['service']);
$message = trim($data['message']);
$source = trim($data['source']);
$created_at = date('Y-m-d H:i:s');

// آماده‌سازی و اجرای کوئری امن
$stmt = $conn->prepare("INSERT INTO consultations (name, phone, service, message, source, created_at) VALUES (?, ?, ?, ?, ?, ?)");
$stmt->bind_param("ssssss", $name, $phone, $service, $message, $source, $created_at);

if ($stmt->execute()) {
    echo json_encode(["success" => true, "message" => "فرم با موفقیت ثبت شد."], JSON_UNESCAPED_UNICODE);
} else {
    echo json_encode(["success" => false, "message" => "خطا در ثبت فرم: " . $stmt->error]);
}

$stmt->close();
$conn->close();
?>
