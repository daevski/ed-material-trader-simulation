// @ts-ignore
import React, { Component } from 'https://cdn.skypack.dev/react';

import ConversionRatio from './ConversionRatio';
import { getRarityNumber, getMaterialCount } from '../materialBoxFunctions';

type MaterialDetailPanelProps = {
  userData: any;
  material: Object;
};

export default class MaterialDetailPanel extends React.Component<MaterialDetailPanelProps> {
  props = {
    userData: null,
    material: {},
  };
  getRarityNumber = (rarityName: String) => getRarityNumber(rarityName);
  getMaterialCount = (material: any, thisComponent: Component) => getMaterialCount(material, thisComponent);
  render() {
    var material = this.props.material;
    var capitalized_name = material.Name.trim()
      .toLowerCase()
      .replace(/\w\S*/g, (w: String) => w.replace(/^\w/, (c: String) => c.toUpperCase()));
    var rarityNumber = this.getRarityNumber(material.Rarity);
    return (
      <div className="material-detail-panel">
        <ConversionRatio />
        <div className={`rarity-icon grade-${rarityNumber}-icon`} data-rarity={rarityNumber}></div>
        <div className="material-count">{this.getMaterialCount(material, this)}</div>
        <div className="material-name">{capitalized_name}</div>
        <div className="cancel-selection">Cancel</div>
      </div>
    );
  }
}
