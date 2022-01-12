import React from 'https://cdn.skypack.dev/react';

import { tableHeightToggle } from '../ConversionTable/conversionTableFunctions';
import { setSelectedBoxes } from '../ConversionTable/MaterialCategory/MaterialBox/materialBoxFunctions';

export default class MaterialTypeSelector extends React.Component {
  updateView(e) {
    var val = e.target.value;
    var tables = Array.from(document.getElementsByClassName('conversion-table'));
    var tableName = val;
    var newActiveTable = document.getElementById(tableName);

    tables.forEach((element) => {
      element.classList.remove('active');
    });
    newActiveTable.classList.add('active');
    tableHeightToggle(true);
    setSelectedBoxes(e, 'reset');
  }
  render() {
    var materialData = this.props.materialData;
    return (
      <div id="select-wrapper">
        <select name="material-type" id="material-type" onChange={this.updateView.bind(this)}>
          {Object.entries(materialData['Materials']).map(([i, typesArray]) =>
            Object.entries(typesArray).map(([materialType, _]) => <option value={materialType}>{materialType}</option>),
          )}
        </select>
        <label for="material-type">Resource Type</label>
      </div>
    );
  }
}
