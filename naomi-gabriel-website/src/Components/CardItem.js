import React, { Component } from 'react';
import {Link} from 'react-router-dom';

function CardItems(props){
        return (
            <>
            <div className="li cards__item">
                <Link className="cards__item-link" to={props.path}>
                    <figure className="cards__item__pic-wrap" data-category={props.label}>
                        <img src={props.src} alt="Travel" className="cards__item__img"/>
                    </figure>
                    <div className="cards__item__info">
                        <h5 className="cards__item__text">
                            {props.text}
                        </h5>
                    </div>
                </Link>
                 
            </div>
            </>
        )
    }


export default CardItems
