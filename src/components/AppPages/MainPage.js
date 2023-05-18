import React from 'react';
import ReactDOM from 'react-dom';
import cardInfo from '../CardsInfo';
import MainMenuCard from '../MainMenuCard';
import { Router } from 'react-router-dom';

function MainPage () {
return (
    <div className='container my-4'>
        <div className='row'>
            {cardInfo.map(menuCard)}
        </div>
    </div>);
}

function menuCard(menuItem) {
    return  (<div className='col-lg-6 my-5'>
                <MainMenuCard id={menuItem.id} cardName={menuItem.card_name} imgUrl={menuItem.img_url} cardUrl={menuItem.card_url} />
             </div>);
}


export default MainPage;