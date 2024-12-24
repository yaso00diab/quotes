var Quotes = [
    {"quote": "Be yourself, everyone else is already taken.",
    "author": "Oscar Wilde"
    },
    {"quote": "A room without books is like a body without a soul.",
    "author": "Marcus Tullius Cicero"
    },
    {"quote": "You only live once, but if you do it right, once is enough.",
    "author": "Mae West"
    },
    {"quote": "Be the change that you wish to see in the world.",
    "author": "Mahatma Gandhi"
    },
    {"quote": "Don't walk in front of me… I may not follow Don't walk behind me… I may not lead Walk beside me… just be my friend",
    "author": "Albert Camus"
    },
    {"quote": "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.",
    "author": "Maya Angelou"
    },
    {"quote": "A friend is someone who knows all about you and still loves you.",
    "author": "Elbert Hubbard"
    },
    {"quote": "You know you're in love when you can't fall asleep because reality is finally better than your dreams",
    "author": "Dr. Seuss"
    },
];

function generateQuote(){
    var randomQuote = Math.floor(Math.random() * Quotes.length);
    document.getElementById("quote").innerHTML = `"${Quotes[randomQuote].quote}"`;
    document.getElementById("author").innerHTML = `--${Quotes[randomQuote].author}`;
}