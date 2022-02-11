// @ts-ignore
import React from 'https://cdn.skypack.dev/react';

import MaterialCategory from './MaterialCategory/index';
import { generateCategorySet } from './conversionTableFunctions';
import { materialBoxHover } from './MaterialCategory/MaterialBox/materialBoxFunctions';

type ConversionTableProps = {
  materialType: string;
  materialData: any;
  active: boolean;
  userData: any;
};

type ConversionTableState = {
  categories: Set<string>;
};

export default class ConversionTable extends React.Component<ConversionTableProps, ConversionTableState> {
  state: ConversionTableState = { categories: new Set() };
  props: ConversionTableProps = {
    materialType: '',
    materialData: null,
    active: false,
    userData: null,
  };
  thisMaterialType = this.props.materialType;
  allMaterialData = this.props.materialData;
  userData = this.props.userData;

  generateCategorySet = (categories: Set<string>, data: any, type: string) =>
    generateCategorySet(categories, data, type);

  // componentDidMount() {
  //   let firstMaterials: (Element | null)[] = [
  //     document.querySelector('#carbon'),
  //     document.querySelector('#exceptional scrambled emission data'),
  //     document.querySelector('#chemical storage units'),
  //   ];
  //   let firstVisibleMaterial = null;

  //   for (let el in firstMaterials) {
  //     if (document.querySelector('.conversion-table.active')?.contains(firstMaterials[el])) {
  //       firstVisibleMaterial = firstMaterials[el];
  //       break;
  //     }
  //   }

  //   if (firstVisibleMaterial != null) {
  //     let forcedEvent = new MouseEvent('forced');
  //     forcedEvent.target = firstVisibleMaterial;
  //     materialBoxHover(forcedEvent, this);
  //   }
  // }

  render() {
    this.generateCategorySet(this.state.categories, this.props.materialData, this.props.materialType);
    return (
      <div id={this.props.materialType} className={`conversion-table${this.props.active == true ? ' active' : ''}`}>
        {Object.entries(Array.from(this.state.categories)).map(([_, category]) => (
          <MaterialCategory
            userData={this.props.userData}
            materialData={this.props.materialData}
            materialType={this.props.materialType}
            materialCategory={category}
          />
        ))}
      </div>
    );
  }
}
