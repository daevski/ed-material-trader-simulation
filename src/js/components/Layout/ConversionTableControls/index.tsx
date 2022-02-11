// @ts-ignore typescript error for remote import
import React from 'https://cdn.skypack.dev/react';

import MaterialTypeSelector from '../ConversionTableControls/MaterialTypeSelector';
import StatusReadout from './StatusReadout';
import { tableHeightToggle } from '../ConversionTable/conversionTableFunctions';

type ConversionTableControlProps = {
  materialData: any;
};

export default class ConversionTableControls extends React.Component<ConversionTableControlProps> {
  props = { materialData: null };
  tableHeightToggle = () => tableHeightToggle();

  render() {
    var allMaterialData = this.props.materialData;
    return (
      <div id="conversion-table-controls">
        <MaterialTypeSelector materialData={allMaterialData} />
        <StatusReadout />
        <button
          className="table-height"
          name="table-height"
          title="Table Height"
          onClick={() => this.tableHeightToggle()}
        >
          {' '}
          ↧{' '}
        </button>
      </div>
    );
  }
}
