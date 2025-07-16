<?php
session_start();
require_once '../Config/db.php';

if (isset($_SESSION['admin'])) {
    header("Location: dashboard.php");
    exit;
}

$error = '';
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $username = $_POST['username'];
    $password = $_POST['password'];

    $stmt = $conn->prepare("SELECT * FROM admin_users WHERE username = ?");
    $stmt->bind_param("s", $username);
    $stmt->execute();
    $result = $stmt->get_result();
    $admin = $result->fetch_assoc();

    if ($admin && password_verify($password, $admin['password'])) {
        $_SESSION['admin'] = $admin['id'];
        header("Location: dashboard.php");
        exit;
    } else {
        $error = "نام کاربری یا رمز عبور اشتباه است.";
    }
}
?>

<!DOCTYPE html>
<html lang="fa" dir="rtl">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>ورود ادمین | مهرسازه</title>
  <style>
    * { box-sizing: border-box; }

    body {
      margin: 0;
      padding: 0;
      font-family: 'Vazirmatn', sans-serif;
      background: linear-gradient(135deg, #e0f2fe, #f0fdf4);
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 100vh;
    }

    .container {
      display: flex;
      flex-direction: row;
      max-width: 900px;
      width: 90%;
      background: #fff;
      border-radius: 16px;
      box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
      overflow: hidden;
    }

    .form-section {
      flex: 1;
      padding: 3rem 2rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    .form-section h2 {
      font-size: 1.8rem;
      color: #0f172a;
      margin-bottom: 1.5rem;
      text-align: center;
    }

    .form-section form {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    .form-section form input {
      padding: 12px;
      border: 1px solid #cbd5e1;
      border-radius: 8px;
      font-size: 1rem;
    }

    .form-section form button {
      background-color: #10b981;
      color: white;
      padding: 12px;
      border: none;
      border-radius: 8px;
      font-size: 1rem;
      cursor: pointer;
      transition: background 0.3s ease;
    }

    .form-section form button:hover {
      background-color: #059669;
    }

    .error {
      color: #dc2626;
      text-align: center;
      margin-bottom: 1rem;
      font-weight: bold;
    }

    .image-section {
      flex: 1;
      background: url('./login1.webp') no-repeat center center;
      background-size: cover;
      min-height: 100%;
    }

    @media (max-width: 768px) {
      .container {
        flex-direction: column-reverse;
      }

      .image-section {
        height: 200px;
        width: 100%;
      }

      .form-section {
        padding: 2rem 1.5rem;
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="form-section">
      <h2>ورود به پنل مدیریت</h2>
      <?php if ($error): ?>
        <div class="error"><?= $error ?></div>
      <?php endif; ?>
      <form method="POST">
        <input type="text" name="username" placeholder="نام کاربری" required />
        <input type="password" name="password" placeholder="رمز عبور" required />
        <button type="submit">ورود</button>
      </form>
    </div>
    <div class="image-section"></div>
  </div>
</body>
</html>
