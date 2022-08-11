const quotes = [
  {
    quote: "Always do what you are afraid to do.",
    author: "Ralph Waldo Emerson",
  },
  {
    quote: "I'm going to live every minute of it.",
    author: "Pixar-Soul",
  },
  {
    quote: "To infinity and beyond!",
    author: "Pixar-ToyStory",
  },
  {
    quote: "Every thing is relative.",
    author: "Albert Einstein",
  },
  {
    quote: "Imagination is more important than knowledge.",
    author: "Albert Einstein",
  },
  {
    quote: "Sometimes the smallest things take up the most room in your heart.",
    author: "Winnie the Pooh",
  },
  {
    quote: "The noblest art is that of making others happy.",
    author: "P.T. Barnum",
  },
  {
    quote: "Life is a series of building, testing, changing and iterating.",
    author: "Lauren Mosenthal",
  },
];

const quote = document.querySelector(".quotes span:first-child");
const author = document.querySelector(".quotes span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
