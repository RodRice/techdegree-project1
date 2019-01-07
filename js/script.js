// Treehouse FS JS Techdegree project 1
// January 2019
// Learner: Rod Rice

// declare variable for background color function (an exceeds item)
var bgColor = "";

// An array of quote objects to display randomly with tags (an exceeds item)
var quotes = [
  {
    quote: "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    source: "Martin Fowler, Chief Scientist at Thoughtworks",
    tags: ["humor", "coding"]
  },
  {
    quote: "Just because I do a lot of thinking doesn't mean I don't like parties and getting into trouble.",
    source: "Stephen Hawking",
    citation: "Radio Times Q&A",
    year: "2016",
    tags: ["humor", "Hawking"]
  },
  {
    quote: "Every great developer you know got there by solving problems they were unqualified to solve until they actually did it.",
    source: "Patrick McKenzie, Kalkzumeus Software",
    citation: "Twitter",
    year: "2016",
    tags: ["coding", "learning"]
  },
  {
    quote: "Life moves pretty fast. If you don't stop and look around once in a while, you could miss it.",
    source: "Ferris Bueller",
    citation: "Ferris Buellers Day Off",
    year: "1986",
    tags: ["humor", "life"]
  },
  {
    quote: "Whether we're fighting climate change or going to space, everything is moved forward by computers, and we don't have enough people who can code. Teaching young people to code early on can build skills and confidence, and energize the classroom with learning-by-doing opportunities.",
    source: "Richard Branson, Founder of Virgin Group",
    tags: ["learning", "Branson"]
  },
  {
    quote: "Computer programming is quickly becoming an essential career skill. Learning to code is a fantastic opportunity equalizer- if you're good at it, it can help you achieve your dreams.",
    source: "Cory Booker, US Senator",
    tags: ["coding", "learning", "Booker"]
  },
  {
    quote: "To be prepared for the demands of the 21st century and to take advantage of its opportunities, it is essential that more of our students today learn basic computer programming skills, no matter what field of work they want to pursue.",
    source: "Todd Park, US Chief Technology Officer",
    tags: ["learning", "coding", "Park"]

  },
  {
    quote: "Think left and think right and think low and think high. Oh the thinks you can think of if only you try!",
    source: "Dr Seuss",
    tags: ["humor", "Seuss"]
  },
  {
    quote: "Whether you want to uncover the secrets of the universe, or you just want to pursue a career in the 21st century, basic computer programming is an essential skill to learn.",
    source: "Stephen Hawking",
    tags: ["learning", "coding", "Hawking"]
  },
  {
    quote: "Learning to write programs stretches your mind, helps you think better, and creates a way of thinking about things that I think is helpful in all domains.",
    source: "Bill Gates, Cofounder of Microsoft",
    tags: ["learning", "coding", "Gates"]
  },
  {
    quote: "Our policy at Facebook is literally to hire as many talented engineers as we can find. There just aren't enough people who are trained and have these skills today.",
    source: "Mark Zuckerberg, Facebook",
    tags: ["training", "Zuckerberg"]
  },
  {
    quote: "Learning to code is the single best thing anyone can do to get the most out of the amazing future in front of us.",
    source: "Marc Andreessen, cofounder of Netscape",
    tags: ["coding", "learning", "Andreessen"]
  },
  {
    quote: "Coding is today's language of creativity. All our children deserve a chance to become creators instead consumers of science.",
    source: "Maria Klawe, Computer Scientist",
    tags: ["learning", "coding", "Klawe"]
  },
  {
    quote: "Learning to code will be a huge booster for your future, no matter what your professional plans may be. Learning to code will also make you extremely cool!",
    source: "Max Levchin, Co-Founder of Paypal",
    tags: ["learning", "Levchin"]
  },
  {
    quote: "Great programming is not all that dissimilar to great art. Once you start thinking in concepts of programming it makes you a better person... as does learning a foreign language, as does learning math, as does learning how to read.",
    source: "Jack Dorsey, Creator of Twitter and Square",
    tags: ["learning", "Dorsey"]
  },
  {
    quote: "Coders change the world. They build new, amazing things faster than ever before. Anyone with imagination can learn to write code.",
    source: "Jeff Wilke, CEO Amazon",
    tags: ["coding", "Wilke"]
  }
]

// Function to create random background color (an exceeds item)
function random_bg_color() {
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  bgColor = "rgb(" + r + ", " + g + ", "+ b + ")";
  return bgColor;
}

// Function to generate a random number between 0 and array length. Uses the number to grab a random quote and return the random item
function getRandomQuote(){
  var randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  return randomQuote;
}

// Function that calls getRandomQuote function and stores as a variable; generates HTML string for displayedQuote
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

  document.getElementById('quote-box').innerHTML = message;
  random_bg_color();
  document.body.style.background = bgColor;
}

document.getElementById('loadQuote').addEventListener("click", printQuote, false);

//Auto change quote display at set interval (an exceeds item)
var quoteRefreshInterval = setInterval(printQuote, 10000);

printQuote();


/***

***/
