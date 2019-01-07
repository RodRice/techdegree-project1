
// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing


var quotes = [
  {
    quote: "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    source: "Martin Fowler",
    citation: " ",
    year: " "
  },
  {
    quote: "Life moves pretty fast. If you don't stop and look around once in a while, you could miss it.",
    source: "Ferris Bueller",
    citation: " ",
    year: " "
  },
  {
    quote: "Bye, Felicia.",
    source: "Ice Cube",
    citation: " ",
    year: " "
  },
  {
    quote: "Life is something you do when you can't get to sleep.",
    source: "Fran Lebowitz",
    citation: " ",
    year: " "

  },
  {
    quote: "I feel like I'm taking crazy pills (when learning JS).",
    source: "Zoolander",
    citation: " ",
    year: " "
  },
  {
    quote: "You're only as good as your last haircut.",
    source: "Fran Lebowitz",
    citation: " ",
    year: " "
  },
]
function random_bg_color() {
  var x = Math.floor(Math.random() * 256);
  var y = Math.floor(Math.random() * 256);
  var z = Math.floor(Math.random() * 256);
  var bgColor = "rgb(" + x + y + z + ")";
  document.body.style.background = bgColor;
}


function getRandomQuote(){
  var randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  return randomQuote;
}

function printQuote() {
  var displayedQuote = getRandomQuote();
  var message = "";
  if (displayedQuote.citation === undefined || displayedQuote.year === undefined) {
    message += "<p class='quote'>" + displayedQuote.quote + "</p>";
    message += "<p class='source'>" + displayedQuote.source;
}
  else {
    message += "<p class = 'quote'>" + displayedQuote.quote + "</p>";
    message += "<p class = 'source'>" + displayedQuote.source;
    message += "<span class='citation'>" + displayedQuote.citation + "</span>";
    message += "<span class = 'year'>" + displayedQuote.year + "</span>" + "</p>";
}
  random_bg_color();

  document.getElementById('quote-box').innerHTML = message;

}
 printQuote();


document.getElementById('loadQuote').addEventListener("click", printQuote, false);
