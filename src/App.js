import './styles/App.css';

import { FaTwitter } from 'react-icons/fa';

export default function App() {
  return (
    <div id='quote-box'>
      <div id='text-container'>
        <p id='text'>Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.</p>
      </div>
      <p id='author'>Martin Luther King Jr.</p>
      <div id='buttons-container'>
        <a id='new-quote' href='/'>New quote</a>
        <a id='tweet-quote'
          href='https://twitter.com/intent/tweet' target='_blank'
          rel='noreferrer'><FaTwitter /> Tweet</a>
      </div>
    </div>
  )
}
