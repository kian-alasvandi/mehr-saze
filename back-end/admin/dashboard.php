<?php
session_start();
require_once '../config/db.php';

// جلوگیری از دسترسی بدون لاگین
if (!isset($_SESSION['admin'])) {
    header("Location: login.php");
    exit;
}

// پیام موفق یا خطا برای حذف
$success = isset($_GET['success']) ? $_GET['success'] : '';
$error = isset($_GET['error']) ? $_GET['error'] : '';

// گرفتن اطلاعات از جدول مشاوره‌ها
$stmt = $conn->prepare("SELECT * FROM consultations ORDER BY created_at DESC");
$stmt->execute();
$result = $stmt->get_result();
$consultations = $result->fetch_all(MYSQLI_ASSOC);
?>

<!DOCTYPE html>
<html lang="fa" dir="rtl">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>داشبورد مدیریت | مهرسازه</title>
  <style>
    body {
      font-family: 'Vazirmatn', sans-serif;
      margin: 0;
      background-color: #f1f5f9;
      padding: 2rem;
    }

    h1 {
      text-align: center;
      color: #0f172a;
      margin-bottom: 2rem;
    }

    .message {
      padding: 1rem;
      border-radius: 8px;
      text-align: center;
      margin-bottom: 1.5rem;
      font-weight: bold;
    }

    .success { background-color: #d1fae5; color: #065f46; }
    .error { background-color: #fee2e2; color: #991b1b; }

    table {
      width: 100%;
      border-collapse: collapse;
      background: white;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
      border-radius: 12px;
      overflow: hidden;
    }

    th, td {
      padding: 1rem;
      border-bottom: 1px solid #e2e8f0;
      text-align: center;
      font-size: 0.95rem;
    }

    th {
      background-color: #e2e8f0;
      font-weight: bold;
      color: #1e293b;
    }

    tr:last-child td {
      border-bottom: none;
    }

    .delete-btn {
      background-color: #ef4444;
      color: white;
      padding: 6px 12px;
      border: none;
      border-radius: 6px;
      font-size: 0.9rem;
      cursor: pointer;
      transition: background 0.3s;
    }

    .delete-btn:hover {
      background-color: #b91c1c;
    }

    @media (max-width: 768px) {
      table, thead, tbody, th, td, tr {
        display: block;
      }

      thead {
        display: none;
      }

      tr {
        margin-bottom: 1.5rem;
        background: #fff;
        padding: 1rem;
        border-radius: 8px;
      }

      td {
        text-align: right;
        position: relative;
        padding-right: 50%;
      }

      td::before {
        position: absolute;
        right: 1rem;
        top: 1rem;
        font-weight: bold;
        color: #475569;
        content: attr(data-label);
      }
    }
  </style>
</head>
<body>
    <div style="text-align: left; margin-bottom: 1rem;">
  <a href="./logout.php" style="
      display: inline-block;
      background-color: #f87171;
      color: white;
      padding: 8px 16px;
      text-decoration: none;
      border-radius: 6px;
      font-weight: bold;
      transition: background 0.3s ease;
  " onmouseover="this.style.backgroundColor='#dc2626'" onmouseout="this.style.backgroundColor='#f87171'">
    خروج
  </a>
</div>
  <h1>داشبورد فرم‌های مشاوره</h1>

  <?php if ($success): ?>
    <div class="message success"><?= htmlspecialchars($success) ?></div>
  <?php endif; ?>

  <?php if ($error): ?>
    <div class="message error"><?= htmlspecialchars($error) ?></div>
  <?php endif; ?>

  <?php if (count($consultations) === 0): ?>
    <p style="text-align:center;">هنوز هیچ فرم مشاوره‌ای ثبت نشده است.</p>
  <?php else: ?>
    <table>
      <thead>
        <tr>
          <th>نام</th>
          <th>شماره تماس</th>
          <th>خدمات</th>
          <th>توضیحات</th>
          <th>منبع</th>
          <th>زمان ثبت</th>
          <th>عملیات</th>
        </tr>
      </thead>
      <tbody>
        <?php foreach ($consultations as $row): ?>
          <tr>
            <td data-label="نام"><?= htmlspecialchars($row['name']) ?></td>
            <td data-label="شماره تماس"><?= htmlspecialchars($row['phone']) ?></td>
            <td data-label="خدمات"><?= htmlspecialchars($row['service']) ?></td>
            <td data-label="توضیحات"><?= nl2br(htmlspecialchars($row['message'])) ?></td>
            <td data-label="منبع"><?= htmlspecialchars($row['source']) ?></td>
            <td data-label="زمان"><?= htmlspecialchars($row['created_at']) ?></td>
            <td data-label="عملیات">
              <form action="delete.php" method="POST" onsubmit="return confirm('آیا از حذف مطمئن هستید؟');" style="display:inline;">
                <input type="hidden" name="id" value="<?= $row['id'] ?>">
                <button type="submit" class="delete-btn">حذف</button>
              </form>
            </td>
          </tr>
        <?php endforeach; ?>
      </tbody>
    </table>
  <?php endif; ?>
</body>
</html>
