import React, { useEffect } from 'https://cdn.skypack.dev/react';

import MaterialDetailPanel from './MaterialDetailPanel/index'
import MaterialOfferPanel from './MaterialOfferPanel/index'

import { toggleStatusMessaging } from '../../../ConversionTableControls/conversionTableControlFunctions';
import {
    materialBoxHover,
    materialBoxClick,
    setSelectedBoxes,
    toggleRatioElements,
    calculateRatios,
    getRarityNumber,
    getMaterialCount
} from './materialBoxFunctions';

export default class MaterialBox extends React.Component {
    constructor(props) {
        super(props)
        this.materialBoxHover = materialBoxHover.bind(this)
        this.materialBoxClick = materialBoxClick.bind(this)
        this.calculateRatios = calculateRatios.bind(this)
        this.getRarityNumber = getRarityNumber.bind(this)
        this.getMaterialCount = getMaterialCount.bind(this)
        this.setSelectedBoxes = setSelectedBoxes.bind(this)
        this.toggleRatioElements = toggleRatioElements.bind(this)
        this.toggleStatusMessaging = toggleStatusMessaging.bind(this)
    }
    render() {
        var material = this.props.material
        var capitalized_name = material.Name.trim().toLowerCase().replace(/\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toUpperCase())));
        var rarityNumber = this.getRarityNumber(material.Rarity)
        return (
            <div id={material.Name} className={`material-box faded rarity-${rarityNumber}`} onClick={(e) => { this.materialBoxClick(e) }} onMouseEnter={(e) => { this.materialBoxHover(e) }} onMouseLeave={(e) => { this.materialBoxHover(e) }}>
                <MaterialDetailPanel userData={this.props.userData} material={this.props.material} rarityNumber={rarityNumber} />
                <MaterialOfferPanel />
            </div >
        )
    }
}