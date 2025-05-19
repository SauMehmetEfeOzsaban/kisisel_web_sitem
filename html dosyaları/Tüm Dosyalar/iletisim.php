<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $adsoyad = $_POST["adsoyad"] ?? "";
    $email = $_POST["email"] ?? "";
    $telefon = $_POST["telefon"] ?? "";
    $cinsiyet = $_POST["cinsiyet"] ?? "";
    $ilgi = $_POST["ilgi"] ?? [];
    $sehir = $_POST["sehir"] ?? "";
    $mesaj = $_POST["mesaj"] ?? "";

    echo "<h2>Form Başarıyla Gönderildi!</h2>";
    echo "<p><strong>Ad Soyad:</strong> " . htmlspecialchars($adsoyad) . "</p>";
    echo "<p><strong>E-posta:</strong> " . htmlspecialchars($email) . "</p>";
    echo "<p><strong>Telefon:</strong> " . htmlspecialchars($telefon) . "</p>";
    echo "<p><strong>Cinsiyet:</strong> " . htmlspecialchars($cinsiyet) . "</p>";
    echo "<p><strong>İlgi Alanları:</strong> " . implode(", ", array_map('htmlspecialchars', $ilgi)) . "</p>";
    echo "<p><strong>Şehir:</strong> " . htmlspecialchars($sehir) . "</p>";
    echo "<p><strong>Mesaj:</strong> " . nl2br(htmlspecialchars($mesaj)) . "</p>";
} else {
    echo "<p>Form gönderilmedi!</p>";
}
?>