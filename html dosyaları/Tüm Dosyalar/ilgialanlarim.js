document.addEventListener("DOMContentLoaded", function () {

  // Tarihsel Yerler API'den Veri Çekme
  //yerler adında dizi oluşturdum ve Ülkemizdeki bazı antik yerleri ekledim
  var yerler = ["Ayasofya", "Topkapı_Sarayı", "Truva_Antik_Kenti"];  
  
  // yerler dizisinin her bir öğesi için bir döngü başlatılıyor.
  //yeradi sırasıyla ayasofya troya ve topkaı değerini alıyor
  for (var i = 0; i < yerler.length; i++) {
    var yerAdi = yerler[i];

    // Her yer için ayrı API çağrısı yap
    //fetch fonksiyonu, her bir tarihsel yer için Wikipedia API'sinden bilgi almak amacıyla bir HTTP isteği gönderiyor. 
    fetch("https://tr.wikipedia.org/api/rest_v1/page/summary/" + yerAdi)
      .then(function(response) {
        return response.json();
      })
      .then(function(veri) {
        // Verileri HTML içine ekledim
        var kutu = "<div class='col-md-4'>";
        kutu += "<div class='card mb-3'>";
        
        // apiden gelen bilgide resim olup olmamasına göre resim ekledim
        if (veri.thumbnail && veri.thumbnail.source) {
          kutu += "<img src='" + veri.thumbnail.source + "' class='card-img-top' alt='" + veri.title + "'>";
        }
        
        kutu += "<div class='card-body'>";
        kutu += "<h5 class='card-title'>" + veri.title + "</h5>";
        kutu += "<p>" + veri.extract + "</p>";
        kutu += "<a href='" + veri.content_urls.desktop.page + "' target='_blank' class='btn btn-primary'>Devamını Oku</a>";
        kutu += "</div></div></div>";

        // Oluşturulan HTML kutusu, id="gezi" olan elementin içine eklenir.
        document.getElementById("gezi").innerHTML += kutu;
      })
      //eğer hata varsa bu mesajı verir.
      .catch(function(error) {
        console.log('Tarihsel yer verisi alınırken hata oluştu:', error);
      });
  }


  // Beşiktaş Futbol Takımı Bilgisi
  // Beşiktaş ile ilgili bilgileri apiden aldım ve sonrasında bilgileri işledim ,(data extract=genel bilgi kısmı,title=başlık)
  fetch('https://tr.wikipedia.org/api/rest_v1/page/summary/Beşiktaş_J.K.')
    .then(response => response.json())
    .then(data => {
      var besiktasHTML = "<div class='col-md-4'>";
      besiktasHTML += "<div class='card mb-3'>";
      if (data.thumbnail && data.thumbnail.source) {
        besiktasHTML += "<img src='" + data.thumbnail.source + "' class='card-img-top' alt='Beşiktaş' style='width: 300px; height: 300px;'>";
      }
      besiktasHTML += "<div class='card-body'>";
      besiktasHTML += "<h5 class='card-title'>Beşiktaş</h5>";
      besiktasHTML += "<p>" + data.extract + "</p>";
      besiktasHTML += "<a href='" + data.content_urls.desktop.page + "' target='_blank' class='btn btn-primary'>Devamını Oku</a>";
      besiktasHTML += "</div></div></div>";

      // bilgileri html sayfama aktardım
      document.getElementById("futbol").innerHTML = besiktasHTML;
    })
    //eğer bir hata oluşusa mesaj verdim
    .catch(error => console.error("Hata oluştu:", error));

  // Los Angeles Lakers Basketbol Takımı Bilgisi
// bilgilerimi Wikipedia API'den alıyorum
fetch('https://tr.wikipedia.org/api/rest_v1/page/summary/Los_Angeles_Lakers') // İngilizce sayfa adı kullanılır
  .then(response => response.json()) // gelen cevabı JSON formatına çeviriyorum
  .then(data => {
    // gelen verileri işliyorum (data.extract = genel bilgi kısmı, data.title = başlık)
    var lakersHTML = "<div class='col-md-4'>"; // sütun yapısı için Bootstrap kullanıyorum
    lakersHTML += "<div class='card mb-3'>"; // kart görünümü için card div'i başlatıyorum

    // Eğer görsel varsa, resmi karta ekliyorum
    if (data.thumbnail && data.thumbnail.source) {
      lakersHTML += "<img src='" + data.thumbnail.source + "' class='card-img-top' alt='Los Angeles Lakers' style='width: 300px; height: 300px;'>";
    }

    lakersHTML += "<div class='card-body'>"; // kart içeriğini başlatıyorum
    lakersHTML += "<h5 class='card-title'>" + data.title + "</h5>"; // başlığı ekliyorum
    lakersHTML += "<p>" + data.extract + "</p>"; // kısa açıklamayı ekliyorum
    lakersHTML += "<a href='" + data.content_urls.desktop.page + "' target='_blank' class='btn btn-primary'>Devamını Oku</a>"; // Wikipedia sayfasına bağlantı
    lakersHTML += "</div></div></div>"; // tüm divleri kapatıyorum

    // html dosyamdaki 'basketbol' id'li bölüme bu içeriği gönderiyorum
    document.getElementById("basketbol").innerHTML = lakersHTML;
  })
  .catch(error => console.error("Los Angeles Lakers bilgisi alınırken hata oluştu:", error)); // hata varsa konsola yazdır
   
});