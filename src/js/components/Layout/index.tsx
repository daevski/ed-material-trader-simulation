// @ts-ignore
import * as React from 'https://cdn.skypack.dev/react';

import PageHeader from './PageHeader';
import ConversionTable from './ConversionTable/index';
import ConversionTableControls from './ConversionTableControls';
import UserDataSection from './UserDataSection';
import { getFile } from './layoutFunctions';

type LayoutProps = {
    materialData: any;
};

type LayoutState = {
    userData: any;
};

export default class Layout extends React.Component<LayoutState, LayoutProps> {
    state: LayoutState = { userData: null };
    props: LayoutProps = { materialData: null };
    // FIXME: This binding is not functional. Need to review class method binding syntax/approach
    getFile = (e: Event) => getFile.bind(this);
    render() {
        var allMaterialData = this.props.materialData;
        return (
            <div>
                <PageHeader />
                <UserDataSection getFile={this.getFile} />
                <div id="conversion-app">
                    <hr />
                    <ConversionTableControls materialData={allMaterialData} />
                    {Object.entries(allMaterialData['Materials']).map(([_, typesArray]) =>
                        Object.entries(typesArray).map(([materialType, _]) => (
                            <ConversionTable
                                userData={this.state.userData}
                                materialData={allMaterialData}
                                materialType={materialType}
                                active={materialType == 'Raw' ? true : false}
                            />
                        )),
                    )}
                </div>
            </div>
        );
    }
}
