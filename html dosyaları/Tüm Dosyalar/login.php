<?php
// Kullanıcıdan gelen verileri al
$email = $_POST["email"]; // HTML formundan "email" verisini aldım ve email değişkenine atadım
$password = $_POST["password"]; // html formundan password verisini aldım ve password değişkenine atadım

// Doğru kullanıcı bilgileri (örnek)
$dogru_email = "b241210058@sakarya.edu.tr"; // burada değişkenlerime doğru değeri atadım
$dogru_sifre = "b241210058"; 


// eğer email kısmı veya şifre kısmı boş ise kullanıcıya alert ile uyarı verdim ve tekrardan login.html e yönlendirdim
if (empty($email) || empty($password)) {   
    echo "<script>alert('Kullanıcı adı ve şifre boş bırakılamaz!'); window.location.href = 'login.html';</script>";
    exit; // kodun çalışmasını durdurur
}

// eğer email geçerli formatta değilise bu hata verilir ve kodun çalışması durdurulur
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {  
    echo "<script>alert('Geçerli bir e-posta adresi giriniz!'); window.location.href = 'login.html';</script>";
    exit;
}

// Bilgiler doğruysa kullanıcıya alert ile hoşgelidiniz (numara) mesajını verdirttim ve sitemdeki anasayfaya (index.html) yönlendirdim
if ($email == $dogru_email && $password == $dogru_sifre) {
    echo "<script>alert('Hoşgeldiniz $password'); window.location.href = 'index.html';</script>";
    exit;
} 
else {  // doğru değilse kullanıcıya alert ile mseaj verdim ve tekrardan login.html e yönlendirdim. 
    echo "<script>alert('Kullanıcı adı veya şifre hatalı!'); window.location.href = 'login.html';</script>";
    exit;
}
?>