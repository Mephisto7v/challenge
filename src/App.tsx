import React from 'react';
import whiteOverlay from './assets/white-overlay.svg';
import heroImage from './assets/hero-image-business-card.png';
import avatar from './assets/avatar-image-business-card.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="cardComponent">
        <div className='imgPart'>
          <img className='heroImg' src={heroImage} alt="y'a pas"></img>
          <img className='overlayImg' src={whiteOverlay} alt="y'a pas"></img>
        </div>
        <div className='infomartionPart'>
          <div className='textContainer'>
            <div className='title'>Perfect solution for small business</div>
            <div className='text'>Small businesses need to generate leads to grow.</div>
            <div className='text'>You can use tools like Ringy.</div>
          </div>
          <div className='avatarContainer'>
            <img className='avatarImg' src={avatar} alt="y'a pas"></img>
            <div className='textAvatarContainer'>
              <div className='name'>Amy Burgess</div>
              <div className='job'>Customer Manger, Solution Oy</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
