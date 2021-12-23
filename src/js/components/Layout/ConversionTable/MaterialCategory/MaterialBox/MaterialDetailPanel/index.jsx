import React from 'https://cdn.skypack.dev/react';

import ConversionRatio from './ConversionRatio';
import { getRarityNumber, getMaterialCount } from '../materialBoxFunctions';

export default class MaterialDetailPanel extends React.Component {
    constructor(props) {
        super(props)
        this.getRarityNumber = getRarityNumber.bind(this)
        this.getMaterialCount = getMaterialCount.bind(this)
    }
    render() {
        var material = this.props.material
        var capitalized_name = material.Name.trim().toLowerCase().replace(/\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toUpperCase())));
        var rarityNumber = this.getRarityNumber(material.Rarity)
        return (
            <div className="material-detail-panel">
                <ConversionRatio />
                <div className={`rarity-icon grade-${rarityNumber}`} data-rarity={rarityNumber}></div>
                <div className='material-count'>{this.getMaterialCount(material)}</div>
                <div className='material-name'>{capitalized_name}</div>
                <div className='cancel-selection'>Cancel</div>
            </div>
        )
    }
}