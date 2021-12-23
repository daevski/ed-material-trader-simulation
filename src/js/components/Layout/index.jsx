import React from 'https://cdn.skypack.dev/react';

import PageHeader from './PageHeader';
import ConversionTable from './ConversionTable/index';
import ConversionTableControls from './ConversionTableControls';
import UserDataSection from './UserDataSection';
import { getFile } from './layoutFunctions';

export default class Layout extends React.Component {
    constructor(props) {
        super(props);
        this.getFile = getFile.bind(this)
        this.state = {
            userData: null
        }
    }
    render() {
        var allMaterialData = this.props.materialData
        return (
            <div>
                {/* Hello, {this.state.username}! */}
                <PageHeader />
                <UserDataSection getFile={this.getFile} />
                <div id="conversion-app">
                    <hr />
                    <ConversionTableControls materialData={allMaterialData} />
                    {
                        Object.entries(allMaterialData['Materials'])
                            .map(([_, typesArray]) =>
                                Object.entries(typesArray)
                                    .map(([materialType, _]) =>
                                        <ConversionTable userData={this.state.userData} materialData={allMaterialData} materialType={materialType} active={materialType == "Raw" ? true : false} />
                                    ))
                    }
                </div>
            </div >
        );
    }
}
