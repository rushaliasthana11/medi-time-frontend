import React from "react";
import ReactDOM from "react-dom";

function MainMenuCard(menuItem) {
    return (
        <a href={menuItem.cardUrl}>
        <div className="card main-menu-card px-4 menu-card-border">
            <div className="card-body">
            <div className="row">
                <div className="col-3 img-thumbnail p-3 card-img-shadow" >
                <img className="img-fluid card-img" src={menuItem.imgUrl}/>
                </div>
                <div className="col-9  my-auto">
                    <span className="card-text"><b>{menuItem.cardName}</b></span>
                </div>
            </div>
            </div>
        </div>
</a>
    );

}
export default MainMenuCard;