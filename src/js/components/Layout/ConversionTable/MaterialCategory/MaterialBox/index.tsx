// @ts-ignore
import React, { Component, MouseEvent } from 'https://cdn.skypack.dev/react';

import MaterialDetailPanel from './MaterialDetailPanel/index';
import MaterialOfferPanel from './MaterialOfferPanel/index';

import { toggleStatusMessaging } from '../../../ConversionTableControls/conversionTableControlFunctions';
import {
  materialBoxHover,
  materialBoxClick,
  setSelectedBoxes,
  toggleRatioElements,
  calculateRatios,
  getRarityNumber,
  getMaterialCount,
} from './materialBoxFunctions';

type MaterialBoxProps = {
  material: any;
  materialBoxHover: any;
  materialBoxClick: any;
  calculateRatios: any;
  getRarityNumber: any;
  getMaterialCount: any;
  setSelectedBoxes: any;
  toggleRatioElements: any;
  toggleStatusMessaging: any;
};

export default class MaterialBox extends Component<MaterialBoxProps> {
  props = {
    material: null,
    materialBoxHover: null,
    materialBoxClick: null,
    calculateRatios: null,
    getRarityNumber: null,
    getMaterialCount: null,
    setSelectedBoxes: null,
    toggleRatioElements: null,
    toggleStatusMessaging: null,
  };
  materialBoxHover = (e: MouseEvent, thisComponent: Component) => materialBoxHover(e, thisComponent);
  materialBoxClick = (e: MouseEvent, thisComponent: Component) => materialBoxClick(e, thisComponent);
  calculateRatios = (e: MouseEvent) => calculateRatios(e);
  getRarityNumber = (rarityName: string) => getRarityNumber(rarityName);
  getMaterialCount = (material: any, thisComponent: Component) => getMaterialCount(material, thisComponent);
  setSelectedBoxes = (e, custom: any) => setSelectedBoxes(e, custom);
  toggleRatioElements = (e) => toggleRatioElements(e);
  toggleStatusMessaging = () => toggleStatusMessaging();
  render() {
    var material = this.props.material;
    var rarityNumber = this.getRarityNumber(material.Rarity);
    return (
      <div
        id={material.Name}
        className={`material-box faded rarity-${rarityNumber}`}
        onClick={(e) => {
          this.materialBoxClick(e, this);
        }}
        onMouseEnter={(e) => {
          this.materialBoxHover(e, this);
        }}
        onMouseLeave={(e) => {
          this.materialBoxHover(e, this);
        }}
      >
        <MaterialDetailPanel
          userData={this.props.userData}
          material={this.props.material}
          rarityNumber={rarityNumber}
        />
        <MaterialOfferPanel />
      </div>
    );
  }
}
