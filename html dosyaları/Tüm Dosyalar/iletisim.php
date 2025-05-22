<?php
// Eğer form POST yöntemiyle gönderildiyse bu bloğa gir
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    // Gelen form verilerini alıyoruz, eğer yoksa boş bırakıyoruz
    $adsoyad = $_POST["adsoyad"] ?? "";      // Ad Soyad alanı
    $email = $_POST["email"] ?? "";          // E-posta alanı
    $telefon = $_POST["telefon"] ?? "";      // Telefon alanı
    $cinsiyet = $_POST["cinsiyet"] ?? "";    // Cinsiyet (Radio button)
    $ilgi = $_POST["ilgi"] ?? [];            // İlgi alanları (Checkbox'lar bir dizi olarak gelir)
    $sehir = $_POST["sehir"] ?? "";          // Şehir (Seçim kutusu - select)
    $mesaj = $_POST["mesaj"] ?? "";          // Mesaj kutusu (textarea)

    // Ekrana verileri güvenli bir şekilde yazdırıyoruz (XSS'e karşı önlem için htmlspecialchars kullanıldı)
    echo "<h2>Form Başarıyla Gönderildi!</h2>";

    // Her bir form alanı ekrana yazdırılıyor
    echo "<p><strong>Ad Soyad:</strong> " . htmlspecialchars($adsoyad) . "</p>";
    echo "<p><strong>E-posta:</strong> " . htmlspecialchars($email) . "</p>";
    echo "<p><strong>Telefon:</strong> " . htmlspecialchars($telefon) . "</p>";
    echo "<p><strong>Cinsiyet:</strong> " . htmlspecialchars($cinsiyet) . "</p>";

    // İlgi alanları dizi olarak geldiği için implode ile birleştiriyoruz, ayrıca güvenlik için htmlspecialchars uygulanıyor
    echo "<p><strong>İlgi Alanları:</strong> " . implode(", ", array_map('htmlspecialchars', $ilgi)) . "</p>";

    // Şehir bilgisi
    echo "<p><strong>Şehir:</strong> " . htmlspecialchars($sehir) . "</p>";

    // Mesaj kutusundaki yazıyı hem güvenli hale getiriyoruz hem de satır başlarını korumak için nl2br kullanıyoruz
    echo "<p><strong>Mesaj:</strong> " . nl2br(htmlspecialchars($mesaj)) . "</p>";

} else {
    // Eğer form POST ile gelmediyse kullanıcıya uyarı mesajı göster
    echo "<p>Form gönderilmedi!</p>";
}
?>