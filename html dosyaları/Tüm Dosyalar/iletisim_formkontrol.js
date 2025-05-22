window.onload = function () {
  document.getElementById("kontrolBtn").addEventListener("click", function () {  // kontrolBtn id li butona tıklanınca çalısan kodlarım burada
    let adsoyad = document.getElementById("adsoyad").value.trim(); //ad soyad kısmı için değer aldım
    let email = document.getElementById("email").value.trim(); //email kısmı için değer aldım
    let telefon = document.getElementById("telefon").value.trim();//telefon kısmı için değer aldım
    let sehir = document.getElementById("sehir").value;   //Şehir kısmı için değer aldım
    let mesaj = document.getElementById("mesaj").value.trim(); // mesaj için (textarea) kısmı için değer aldım

    let errors = [];  //hata kısmı için bir errors adlı dizi oluşturdum bu dizi hataları tutacak

    if (adsoyad === "") {            //ad soyad kısmı boş mu diye kontrol eder
      errors.push("Ad Soyad boş olamaz.");
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;   //regex yapısı ile emailin doğruluğu kontrol edilir
    if (!emailRegex.test(email)) {
      errors.push("Geçerli bir e-posta adresi giriniz.");
    }

    const telefonRegex = /^[0-9]{10,15}$/;   // telefon kısmının rakamlardan oluştuğunu ve 10-15 arası karakter içermesi kontrolunu yapıyor
    if (!telefonRegex.test(telefon)) {
      errors.push("Telefon sadece rakamlardan oluşmalı ve 10-15 haneli olmalı.");
    }

    if (sehir === "") {   // şehir kısmı boşluğunu kontrol eder
      errors.push("Lütfen bir şehir seçiniz.");
    }

    if (mesaj === "") {  //mesaj kısmının boşluğunu kontrol ediyor
      errors.push("Mesaj alanı boş bırakılamaz.");
    }

    // cinsiyet kısmının boş olu olmamısnı kontrol ediyor
    let cinsiyetSecildi = document.querySelector('input[name="cinsiyet"]:checked');  
    if (!cinsiyetSecildi) {
      errors.push("Lütfen bir cinsiyet seçiniz.");
    }

    // ilgi alanı kısmının boşluğunu kontrol ediyor
    let ilgiSecili = document.querySelectorAll('input[name="ilgi[]"]:checked');
    if (ilgiSecili.length === 0) {
      errors.push("En az bir ilgi alanı seçiniz.");
    }

    //eğer hata varsa errors adlı diziye ekler ve sıralar hata yoksa mesaj verdim
    if (errors.length > 0) {
      alert("Form Hataları:\n" + errors.join("\n"));
    } else {
      alert("Form JavaScript kontrolünden başarıyla geçti!");
    }
  });



  document.getElementById("gonderbtn").addEventListener("click", function (e) {  // gonderbtn id'li butona tıklanınca çalışan kodlar burada
  let adsoyad = document.getElementById("adsoyad").value.trim(); // ad soyad kısmı için değer aldım
  let email = document.getElementById("email").value.trim(); // email kısmı için değer aldım
  let telefon = document.getElementById("telefon").value.trim(); // telefon kısmı için değer aldım
  let sehir = document.getElementById("sehir").value; // şehir kısmı için değer aldım
  let mesaj = document.getElementById("mesaj").value.trim(); // mesaj (textarea) kısmı için değer aldım

  let errors = []; // hata mesajlarını tutmak için errors adında boş bir dizi oluşturdum

  if (adsoyad === "") { // ad soyad kısmı boş mu diye kontrol eder
    errors.push("Ad Soyad boş olamaz.");
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // regex yapısıyla e-posta adresi geçerli mi kontrol ettim
  if (!emailRegex.test(email)) {
    errors.push("Geçerli bir e-posta adresi giriniz.");
  }

  const telefonRegex = /^[0-9]{10,15}$/; // telefon sadece rakamlardan oluşmalı ve 10-15 hane arasında olmalı
  if (!telefonRegex.test(telefon)) {
    errors.push("Telefon sadece rakamlardan oluşmalı ve 10-15 haneli olmalı.");
  }

  if (sehir === "") { // şehir seçilmiş mi kontrol ediyor
    errors.push("Lütfen bir şehir seçiniz.");
  }

  if (mesaj === "") { // mesaj alanı boş mu diye kontrol eder
    errors.push("Mesaj alanı boş bırakılamaz.");
  }

  let cinsiyetSecildi = document.querySelector('input[name="cinsiyet"]:checked'); // cinsiyet radiobuttonlarından biri seçilmiş mi kontrol eder
  if (!cinsiyetSecildi) {
    errors.push("Lütfen bir cinsiyet seçiniz.");
  }

  let ilgiSecili = document.querySelectorAll('input[name="ilgi[]"]:checked'); // ilgi alanı checkboxlarından en az biri seçilmiş mi kontrol eder
  if (ilgiSecili.length === 0) {
    errors.push("En az bir ilgi alanı seçiniz.");
  }

  if (errors.length > 0) { // hata varsa ekranda uyarı olarak gösterdim, form gönderimini engelledim
    e.preventDefault(); // formun php sayfasına gitmesini engelledim
    alert("Form Hataları:\n" + errors.join("\n")); // her hatayı alt alta yazdırdım
  } else {
    alert("Form JavaScript kontrolünden başarıyla geçti!"); // form sorunsuzsa başarılı mesajı verdim, form submit olur
    // bu durumda formun action'ı ile php sayfasına yönlendirme olur (örneğin: iletisim.php)
    // burada extra e.preventDefault(); yazmadığım için form otomatik olarak php'ye yönlenir
  }
});
}