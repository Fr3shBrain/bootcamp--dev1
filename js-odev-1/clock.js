function askName() {
  let name = prompt("What's Your Name?");

  name != ""
    ? ((document.querySelector("#myName").innerHTML = name), window.onload()) //window.onload sayfanın hazır olduğunu ve artık işlem yapabileceğini gösterir.
    : alert("Please, Enter Your Name!"),
    window.location.reload();
}

function showTime() {
  var date = new Date();
  var h = date.getHours(); // Saat bilgisini verir (0-23)
  var m = date.getMinutes(); // Dakika bilgisin verir (0-59)
  var s = date.getSeconds(); // Saniye bilgisini verir (0-59)
  var day = date.getDay(); // Haftanın gününü verir (0-6)

  if (day == 1) {
    day = "Pazartesi";
  } else if (day == 2) {
    day = "Salı";
  } else if (day == 3) {
    day = "Çarşamba";
  } else if (day == 4) {
    day = "Perşembe";
  } else if (day == 5) {
    day = "Cuma";
  } else if (day == 6) {
    day = "Cumartesi";
  } else if (day == 7) {
    day = "Pazar";
  }

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  var time = h + ":" + m + ":" + s + " " + day;

  let myClock = document.querySelector("#myClock");
  myClock.innerHTML = `${time}`;

  setTimeout(showTime, 1000); // setTimeout => Birinci parametre olarak çalışması istenilen ikinci parametre olarak ne kadar süre sonra çalışması gerektiğini alır.
}
showTime();
askName();
