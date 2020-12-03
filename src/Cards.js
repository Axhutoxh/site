import React from 'react'
import CardItem from './CardItem'
import './Cards.css'
import PIC from '../src/images/1.jpg'
import PIC1 from '../src/images/4.jpg'
import PIC2 from '../src/images/3.jpg'
function Cards() {
    return (
        <div className="cards">
          <h1> Check Out these EPIC Destinations</h1>  
            <div className="cards_container">
                <div className="cards_wrapper">
                  <ul className="cards_items">
                  <CardItem 
                      src={PIC2}
                      text="Explore the hidden water drop in Winter"
                      label="Adventure"
                      path='/services'
                      />
                      <CardItem 
                      src={PIC1}
                      text="Explore the the Sun-set in beach "
                      label="Adventure"
                      path='/services'
                      />
                      <CardItem 
                      src={PIC}
                      text="Explore the hidden water drop inside the Jungle"
                      label="Adventure"
                      path='/services'
                      />

                    </ul>  
                </div>
                </div> 
        </div>
    )
}


 export default Cards
