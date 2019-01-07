
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
    quote: "I feel like I'm taking crazy pills.",
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

function getRandomQuote(){
  var randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  return randomQuote;
}

function printQuote() {
  var displayedQuote = getRandomQuote(quotes);
  var message = "";
  message = "<p class = 'quote'>" + quotes.quote + "</p>";
  message += "<p class = 'source'>" + quotes.source
  message += "<span class = 'citation'>" + quotes.citation + "</span>"
  message += "<span class = 'year'>" + quotes.year + "</span>"
  message += "</p>";

  document.getElementById('quote-box').innerHTML = message;
}
 printQuote();


document.getElementById('loadQuote').addEventListener("click", printQuote, false);
