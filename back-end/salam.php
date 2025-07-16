<?php
require_once 'Config/db.php';
if ($conn) {
    echo "✅ اتصال به دیتابیس موفق بود!";
} else {
    echo "❌ اتصال برقرار نشد.";
}
?>
