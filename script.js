const button = document.querySelector(".start")
button.addEventListener("click",openRandomPage)
var pages = [
  /lückentext.html
]
function openRandomPage() {
  if (pages.length === 0) {
    alert("Es wurden alle Seiten geöffnet.");
    return;
  }

  // Zufällige Indexnummer generieren
  var randomIndex = Math.floor(Math.random() * pages.length);
  
  // Zufällige Seite öffnen
  window.open(pages[randomIndex]);

  // Geöffnete Seite aus dem Array entfernen
  pages.splice(randomIndex, 1);
}