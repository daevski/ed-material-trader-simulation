import React from 'https://cdn.skypack.dev/react';

import MaterialCategory from './MaterialCategory/index';
import { generateCategorySet } from './conversionTableFunctions';

export default class ConversionTable extends React.Component {
    constructor(props) {
        super(props)
        this.generateCategorySet = generateCategorySet.bind(this)
        this.state = {
            categories: new Set()
        }
        var thisMaterialType = this.props.materialType
        var allMaterialData = this.props.materialData
        this.generateCategorySet(this.state.categories, allMaterialData, thisMaterialType)
    }
    render() {
        return (
            <div id={this.props.materialType} className={`conversion-table${this.props.active == true ? ' active' : ''}`}>
                {
                    Object.entries(Array.from(this.state.categories))
                        .map(([_, category]) =>
                            <MaterialCategory userData={this.props.userData} materialData={this.props.materialData} materialType={this.props.materialType} materialCategory={category} />
                        )
                }
            </div>
        )
    }
}
