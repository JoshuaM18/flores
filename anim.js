// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "No me puedo imaginar mi vida,", time: 28 },
  { text: "sin ti", time: 34 },
  { text: "No me puedo imaginar, mis horas;", time: 36 },
  { text: "Sin tu silueta en mi memoria, ", time: 43 },
  { text: "te has vuelto parte de mi historia", time: 45 },
  { text: "No me puedo imaginar los años, ", time: 53 },
  { text: " que vendran", time: 58 }, 
  { text: "No lo puedo imaginar, si tu no estas", time: 62 },
  { text: "Sin tu mirada y tu sonrisa, ", time: 68 },
  { text: "mi vida no seria la misma", time: 69 },
  { text: "Contigo me siento que puedo llegar,", time: 77 },
  { text: "tan alto y tan lejos como superman...", time: 83 },
  { text: "Contigo yo me siento como heroe", time: 89 },
  { text: "Tu amor es mi energia mi motor", time: 96 },
  { text: "Y mi mayor hazaña es conquistarte", time: 102 }, 
  { text: "Y darte a ti mi amor por siempre ", time: 105 },
  { text: "y proteger tu corazon", time: 107 },
  { text: "Contigo yo me siento como heroe", time: 115 },
  { text: "Tu amor es mi energia mi motor", time: 121 },
  { text: "Y mi mayor hazaña es conquistarte", time: 128 },
  { text: "Y darte a ti mi amor por siempre ", time: 129 },
  { text: "y proteger tu corazon", time: 135 },
  { text: "No me puedo imaginar mi vida,", time: 157 },
  { text: "sin ti", time: 162 },
  { text: "No me puedo imaginar, mis horas;", time: 166 },
  { text: "Sin tu silueta en mi memoria, ", time: 171 },
  { text: "te has vuelto parte de mi historia", time: 174 },
  { text: "No me puedo imaginar los años, ", time: 181 },
  { text: " que vendran", time: 186 },
  { text: "No los puedo imaginar, si tu no estas", time: 190 },
  { text: "Sin tu mirada y tu sonrisa, ", time: 194 },
  { text: "mi vida no seria la misma", time: 199 },
  { text: "Contigo me siento que puedo llegar,", time: 205 },
  { text: "tan alto y tan lejos como superman...", time: 212 },
  { text: "Contigo yo me siento como heroe", time: 218 },
  { text: "Tu amor es mi energia mi motor", time: 224 },
  { text: "Y mi mayor hazaña es conquistarte", time: 231 }, 
  { text: "Y darte a ti mi amor por siempre ", time: 234 },
  { text: "y proteger tu corazon", time: 238 },
  { text: "Contigo yo me siento como heroe", time: 244 },
  { text: "Tu amor es mi energia mi motor", time: 250 },
  { text: "Y mi mayor hazaña es conquistarte", time: 257 },
  { text: "Y darte a ti mi amor por siempre ", time: 260 },
  { text: "y proteger tu corazon", time: 264 },
  { text: "TE QUIERO CON TODO MI CORAZÓN", time: 272 },
  { text: "ESPERO TE HAYA GUSTADO TODO", time: 277 },
  { text: "ES CON MUCHO AMOR Y CON TODO MI CORAZÓN", time: 282 },
  { text: "Hice esto con mucho amor porque eres alguien muy especial para mí.", time: 287 },
  { text: "Espero que te guste tanto como yo disfruto cada momento contigo. ", time: 292 },
  { text: "eres y siempre serás el amor de mi vida.", time: 297 },
  { text: "TE AMO MUCHO, FELIZ DIA DEL CARIÑO MI AMOR", time: 300 },
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 4.5
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
/* function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; 
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
} 
*/

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);