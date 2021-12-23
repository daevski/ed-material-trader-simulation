import React from 'https://cdn.skypack.dev/react';

import { toggleStatusMessaging } from './conversionTableControlFunctions';

export default class StatusReadout extends React.Component {
    constructor(props) {
        super(props)
        this.toggleStatusMessaging = toggleStatusMessaging
    }
    componentDidMount() {
        this.toggleStatusMessaging()
    }
    render() {
        return (
            <div>
                <div id="idle-status-readout" className='quoted-message'>Welcome to the Material Trader Simulation, CMDR. What material are you looking for?</div>
                <div id="material-choice-msg" className='status-msg quoted-message'>Okay, what will you trade for it?</div>
                <div id="material-offer-msg" className='status-msg quoted-message'>You just need to decide on the quantity...</div>
                <div id="material-choice-readout">
                    <span id="choice-material-info">Phospherous</span><span className="rarity-icon">[?]</span><span id="choice-material-count">13</span>
                </div>
            </div>
        );
    }
}
