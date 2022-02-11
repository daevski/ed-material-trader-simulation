// @ts-ignore
import React from 'https://cdn.skypack.dev/react';

import MaterialBox from './MaterialBox/index';
import { getCategoryNumber, getMaterialList } from './materialCategoryFunctions';

type MaterialCategoryProps = {
  materialData: any;
  materialCategory: string;
  getMaterialList: any;
  getCategoryNumber: any;
};

type MaterialCategoryState = {
  materials: string[];
};
export default class MaterialCategory extends React.Component<MaterialCategoryProps, MaterialCategoryState> {
  props = {
    materialData: null,
    materialCategory: '',
    getMaterialList: null,
    getCategoryNumber: null,
  };
  state = { materials: [''] };
  getCategoryNumber = (categoryName: string) => getCategoryNumber(categoryName);
  getMaterialList = (materialData: any, currentMaterialCategory: string) =>
    getMaterialList(materialData, currentMaterialCategory);
  render() {
    var allMaterialData = this.props.materialData;
    var thisMaterialCategory = this.props.materialCategory
      .trim()
      .toLowerCase()
      .replace(/\w\S*/g, (w) => w.replace(/^\w/, (c) => c.toUpperCase()));
    var categoryNumber = this.getCategoryNumber(this.props.materialCategory);
    var modifiedCategoryName = null;

    if (thisMaterialCategory.length == 1) {
      modifiedCategoryName = 'Category ' + thisMaterialCategory;
      categoryNumber = thisMaterialCategory;
    }

    this.state.materials = this.getMaterialList(allMaterialData, thisMaterialCategory);

    return (
      <div className={`category-container category-${categoryNumber}`}>
        <div className="category-name">{modifiedCategoryName ? modifiedCategoryName : thisMaterialCategory}</div>
        <div className="category" data-category={thisMaterialCategory}>
          {Object.entries(this.state.materials).map(([i, material]) => (
            <MaterialBox userData={this.props.userData} material={material} materialData={allMaterialData} />
          ))}
        </div>
      </div>
    );
  }
}
