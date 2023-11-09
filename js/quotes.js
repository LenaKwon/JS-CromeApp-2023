const quotes = [
    {
        quote: "You’ve got to be in it to win it.",
        author: "Tony Robbins"
    },
    {
        quote:"It does not matter how slowly you go, as long as you do not stop.",
        author:"Confucius"
    },
    {
        quote:"Confident people have a way of carrying themselves that makes others attracted to them.",
        author:"Sofia Vergara"
    },
    {
        quote:"Do one thing every day that scares you.",
        author:"Eleanor Roosevelt"
    },
    {
        quote:"If you cannot do great things, do small things in a great way.",
        author:"Napoleon Hill"
    },
    {
        quote:"A problem is a chance for you to do your best.",
        author:"Duke Ellington"
    },
    {
        quote:"Keep your face towards the sunshine and shadows will fall behind you.",
        author:"Walt Whitman"
    },
    {
        quote:"We become what we think about most of the time.",
        author:"Earl Nightingale"
    },
    {
        quote:"Life is very interesting…in the end, some of your greatest pains become your greatest strengths.",
        author:"Drew Barrymore"
    },
    {
        quote:"For the great doesn’t happen through impulse alone, and is a succession of little things that are brought together.",
        author:"Vincent Van Gogh"
    },
]

const quote = document.querySelector("#quote h4");
const author = document.querySelector("#quote h5");

const todayQuote=quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;