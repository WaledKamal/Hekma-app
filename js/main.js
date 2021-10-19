// Run function to dispaly qoutes
window.onload = generateQoute;
// Mp3 Audio to play sound in auto mode
var audioReading = new Audio("assets/audio/reading.mp3");
// Change qoutes evrey 5000 seconds
document.querySelector(".auto-swipe").onclick = function () {
  if (this.classList.contains("active")) {
    for (var i = 1; i < 99999; i++) window.clearInterval(i);
    this.classList.remove("active");
    this.style.backgroundColor = "green";
    this.innerText = "تشغيل";
    audioReading.pause();
  } else {
    setInterval(generateQoute, 8000);
    audioReading.play();
    this.classList.add("active");
    this.style.backgroundColor = "red";
    this.innerText = "ايقاف";
    console.log("is false");
  }
};
// Index counter
var counter = 0;
async function generateQoute() {
  // Fetch qoutes from ("quotes.json")
  let response = await fetch("quotes.json");
  // Set response as a variable
  let data = await response.json();
  // Check if counter not break ( 0 || < data.length) & + or rest counter
  counter === data.length - 1 ? (counter = 0) : (counter += 1);
  // Rest innerHTML qoutes Div
  document.querySelector(".quote").innerHTML = "";
  // Create a template qoute
  let quote = `
<div class="quote-text">
${data[counter].QouteText}
</div>
<div class="author"><a href="${data[counter].ALink}">${data[counter].Author}@</a></div>
`;
  document.querySelector(".quote").innerHTML = quote;
}
