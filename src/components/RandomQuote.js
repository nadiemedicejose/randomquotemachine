import React, { useState, useEffect } from 'react';
import '../styles/App.scss';
import { FaTwitter } from 'react-icons/fa';

export default function RandomQuote() {
  let quotesDBurl = 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json';
  const [quote, setQuote] = useState('Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.');
  const [author, setAuthor] = useState('Martin Luther King Jr.');
  const [quotesArray, setQuotesArray] = useState(null);
  
  const fetchQuotes = async (url) => {
    const response = await fetch(url)
    const parsedJSON = await response.json()
    setQuotesArray(parsedJSON.quotes)
  }

  useEffect(() => {
    fetchQuotes(quotesDBurl)
  }, [quotesDBurl])
  
  const getRandomQuote = () => {
    let randomInteger = Math.floor(quotesArray.length * Math.random())
    setQuote(quotesArray[randomInteger].quote)
    setAuthor(quotesArray[randomInteger].author)
  }
  
  return (
    <div>
      <div id='quote-box'>
        <div id='text-container'>
          <p id='text'>{ quote }</p>
        </div>
        <p id='author'>{ author }</p>
        <div id='buttons-container'>
          <button id='new-quote' onClick={getRandomQuote}>New quote</button>
          <a id='tweet-quote'
            href={encodeURI(`https://twitter.com/intent/tweet?text=“${quote}” —${author}`)} target='_blank'
            rel='noreferrer'><FaTwitter /> Tweet</a>
        </div>
      </div>

      <div class="footer">
        <p>Designed and developed by</p>
        <p><a href="https://nadiemedicejose.web.app">Jose Estrada</a> &copy; 2021</p>
      </div>
    </div>
  )
}
