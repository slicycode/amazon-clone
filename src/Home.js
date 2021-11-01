import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <div className="home__image">
          <img
            src="https://m.media-amazon.com/images/I/61FBA0SZkiL._SX3000_.jpg"
            alt=""
          />
        </div>

        <div className="home__row">
          <Product
            id="16583495"
            title="Hbada Office Chair with Folding Armrests and Lumbar Support, for Study or Work, Ergonomic Computer Chair, White"
            price={119.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/416S-bO6NRL._AC_SY200_.jpg"
          />
          <Product
            id="10243594"
            title="AOC 27G2ZU 68cm (27') Curved Gaming Monitor, 240Hz, 1920 x 1080, black / red"
            price={249.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/61365rx4YrL._AC_SX679_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="18205483"
            title="TC Helicon GoXLR - Mixer, Sampler and Vocal Effects for Streamers lorem lorem lorem"
            price={431.0}
            rating={5}
            image="https://m.media-amazon.com/images/I/61sALJYr8TL._AC_SX679_.jpg"
          />
          <Product
            id="18402635"
            title="Shure SM7B Dynamic Voice Microphone for Broadcasting, Podcasting and Recording"
            price={368.0}
            rating={5}
            image="https://m.media-amazon.com/images/I/81HUhNEQusS._AC_SX425_.jpg"
          />
          <Product
            id="12340236"
            title="2020 Apple MacBook Air (13-inch, 8 GB RAM, 256 GB SSD) - Space Grey"
            price={1059.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/71jG+e7roXL._AC_SX679_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="17439564"
            title="Elgato Stream Deck MK.2 - Touch Control Interface, 15 Customizable LCD Keys, Trigger Actions in Apps, OBS, Twitch, Youtube and More"
            price={149.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/71iyeNLzUKS._AC_SX425_.jpg"
          />
        </div>
      </div>
    </div>
  )
}

export default Home
