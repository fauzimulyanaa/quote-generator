const sumberKata = [
  { author: "Albert Einstein", quote: "Imagination is more important than knowledge." },
  { author: "Steve Jobs", quote: "Stay hungry, stay foolish." },
  { author: "Nelson Mandela", quote: "It always seems impossible until it's done." },
  { author: "Maya Angelou", quote: "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel." },
  { author: "Walt Disney", quote: "The way to get started is to quit talking and start doing." },
  { author: "Mahatma Gandhi", quote: "Be the change that you wish to see in the world." },
  { author: "Oprah Winfrey", quote: "Turn your wounds into wisdom." },
  { author: "Mark Twain", quote: "The secret of getting ahead is getting started." },
];

const quotes = document.querySelector(".quote-tampil");
const pencipta = document.querySelector(".pencipta");
const tombol = document.querySelector(".btn");

tombol.addEventListener("click", function () {
  let random = Math.floor(Math.random() * sumberKata.length);
  console.log(random);

  quotes.innerHTML = sumberKata[random].quote;
  pencipta.innerHTML = sumberKata[random].author;
});
