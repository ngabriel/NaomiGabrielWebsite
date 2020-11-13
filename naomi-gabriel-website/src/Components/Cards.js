import React from 'react'
import CardItems from './CardItem'
import './Card.css'

function Cards() {
    return (
        <div className = 'cards'>
            <h1>Check out these epic destinations</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItems 
                        src="../../images/img-1.jpg" 
                        text = "Explore the waterfall deep inside the Amazon Jungle"
                        label = 'Adventure'
                        path='/services'/>

                         <CardItems 
                        src="../../images/img-1.jpg" 
                        text = "Explore the waterfall deep inside the Amazon Jungle"
                        label = 'Adventure'
                        path='/services'/>
                    </ul>
                    <ul className="cards__items">
                        <CardItems 
                        src="../../images/img-1.jpg" 
                        text = "Explore the waterfall deep inside the Amazon Jungle"
                        label = 'Adventure'
                        path='/services'/>
                        
                         <CardItems 
                        src="../../images/img-1.jpg" 
                        text = "Explore the waterfall deep inside the Amazon Jungle"
                        label = 'Adventure'
                        path='/services'/>
                          <CardItems 
                        src="../../images/img-1.jpg" 
                        text = "Explore the waterfall deep inside the Amazon Jungle"
                        label = 'Adventure'
                        path='/services'/>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
