const text = "Semoga lekas sembuh buat mu <3";
const messageEl = document.getElementById("message");

let i = 0;
function typeWriter() {
  if (i < text.length) {
    messageEl.innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, 70);
  }
}

window.onload = typeWriter;
