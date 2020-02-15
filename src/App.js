import React from 'react';
import logo from './andreis.svg';
import './App.css';
import './audioplayer.css';

import AudioPlayer from 'react-responsive-audio-player';
import songs from './songs';

import Lottie from 'lottie-react-web'
import animation from './images/logo-animation.json'

function App() {
  return (
    <div className="App">

    <header>
      <nav>
        <ul>
          <li><a href="#listen">listen</a></li>
          <li><a href="#info">info</a></li>
          <li><a href="#contact">contact</a></li>
        </ul>
      </nav>
    </header>
    <main>

        <div className="wrapper">
          <div className="content-wrapper">
            <div className="hero-logo">
              <div className="logo-animation">
                <Lottie
                  options={{
                      animationData: animation
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="text-bg">
          <h1>probably</h1>
          <h1>not</h1>
          <h1>the</h1>
          <h1>worst</h1>
          <h1>band</h1>
          <h1>in</h1>
          <h1>amsterdam</h1>
        </div>

    </main>

    <section className="section-wrapper" >
      <div className="listen" id="listen">
        <div className="listen-title">
          <h1>listen</h1>
        </div>
        <div className="listen-player">
          <AudioPlayer playlist={songs} controls={['playpause','backskip','forwardskip', 'progressdisplay', ]} />
        </div>
      </div>
    </section>

    <section>
      <div className="quote-big">
        <h1>"They're actually not that terrible"</h1>
        <h2>– Friendly stranger</h2>
      </div>
    </section>

    <section className="section-wrapper" >
      <div className="info" id="info">
        <h1>info</h1>
      </div>
    </section>

    <section className="section-wrapper">
      <div className="contact" id="contact">
        <h1>contact</h1>
      </div>
    </section>






    </div>

    /*
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-disclaimer">Probably not the worst band in Amsterdam</h1>
        <AudioPlayer playlist={songs} controls={['playpause', 'backskip','forwardskip', 'progressdisplay']} />
      </header>
    </div>
      */
  );
}

export default App;
