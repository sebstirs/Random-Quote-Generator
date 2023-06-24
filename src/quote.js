import React, { useState } from 'react';

// Define an array of quotes
const quotes = [
    "Stay hungry, stay foolish.",
    "Success is not the key to happiness. Happiness is the key to success.",
    "Believe you can and you're halfway there.",
    "Don't count the days, make the days count.",
    "The future belongs to those who believe in the beauty of their dreams.",
    "The only way to do great work is to love what you do.",
    "In the middle of every difficulty lies opportunity.",
    "The best way to predict the future is to create it.",
    "Every moment is a fresh beginning.",
    "Dream big and dare to fail.",
    "The harder you work, the luckier you get.",
    "You miss 100% of the shots you don't take.",
    "Life is 10% what happens to us and 90% how we react to it.",
    "Don't watch the clock; do what it does. Keep going.",
    "It does not matter how slowly you go as long as you do not stop.",
    "A journey of a thousand miles begins with a single step.",
    "The biggest risk is not taking any risk.",
    "The only limit to our realization of tomorrow will be our doubts of today.",
    "The secret of getting ahead is getting started.",
    "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    "Do what you can, with what you have, where you are.",
    "It always seems impossible until it's done.",
    "Life is either a daring adventure or nothing at all.",
    "The purpose of our lives is to be happy.",
    "Challenges are what make life interesting and overcoming them is what makes life meaningful.",
    "You are never too old to set another goal or to dream a new dream.",
    "You must be the change you wish to see in the world.",
    "The future depends on what you do today.",
    "Don't let yesterday take up too much of today.",
    "Be yourself; everyone else is already taken.",
    "You are what you believe yourself to be.",
    "The best revenge is massive success.",
    "You can't go back and change the beginning, but you can start where you are and change the ending.",
    "The only person you should try to be better than is the person you were yesterday.",
    "Life is short, and it's up to you to make it sweet.",
    "It's not about how hard you can hit; it's about how hard you can get hit and keep moving forward.",
    "Your time is limited, don't waste it living someone else's life.",
    "The biggest adventure you can take is to live the life of your dreams.",
    "Life is 10% what happens to you and 90% how you react to it.",
    "The best revenge is massive success.",
    "The best way to predict the future is to create it.",
    "Believe you can and you're halfway there.",
    "Success is not the key to happiness. Happiness is the key to success.",
    "Stay hungry, stay foolish.",
    "Don't count the days, make the days count.",
    "The future belongs to those who believe in the beauty of their dreams.",
    "The only way to do great work is to love what you do.",
    "In the middle of every difficulty lies opportunity.",
    "Every moment is a fresh beginning.",
    "Dream big and dare to fail.",
    "The harder you work, the luckier you get.",
    "You miss 100% of the shots you don't take."]

const QuoteGenerator = () => {
    const [randomQuotes, setRandomQuotes] = useState([]);

    const generateRandomQuotes = () => {
        const generatedQuotes = [];
        for (let i = 0; i < 1; i++) {
            const randomIndex = Math.floor(Math.random() * quotes.length);
            generatedQuotes.push(quotes[randomIndex]);
        }
        setRandomQuotes(generatedQuotes);
    };

    return (
        <div className="container">
            <div className="quoteList">
                {randomQuotes.map((quote, index) => (
                    <div key={index} className="quoteText">{quote}</div>
                ))}
            </div>
            <button className="generateButton" onClick={generateRandomQuotes}>
                Generate Quotes
            </button>
        </div>
    );
};

export default QuoteGenerator;
