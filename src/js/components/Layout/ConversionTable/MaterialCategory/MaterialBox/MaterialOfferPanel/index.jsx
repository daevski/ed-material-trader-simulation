import React from 'https://cdn.skypack.dev/react';

import { incrementOffer, decrementOffer, confirmTrade } from './materialOfferPanelFunctions';

export default class MaterialOfferPanel extends React.Component {
    constructor(props) {
        super(props)
        this.incrementOffer = incrementOffer.bind(this)
        this.decrementOffer = decrementOffer.bind(this)
        this.confirmTrade = confirmTrade.bind(this)
    }
    render() {
        return (
            <div className="material-offer-panel">
                <div className='offer-overlay'>
                    <div className="offer-text">OFFER</div>
                    <div className="offer-input">0</div>
                    <input type="hidden" className="offer-counter" value="1" />
                    <div className="offer-material-total">000</div>
                    <hr className="offer-divider" />
                    <div className="offer-output">0</div>
                    <div className="receive-text">RECEIVE</div>
                    <div className="left-arrow" onClick={(e) => this.decrementOffer(e)}>⏴</div>
                    <div className="right-arrow" onClick={(e) => this.incrementOffer(e)}>⏵</div>
                    <div className="confirm-trade-button" onClick={(e) => this.confirmTrade(e)}>CONFIRM TRADE</div>
                    <div className="cancel-trade-button">CANCEL</div>
                </div>
            </div>
        )
    }
}