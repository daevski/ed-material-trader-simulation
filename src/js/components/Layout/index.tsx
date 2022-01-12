// @ts-ignore
import React, { Component } from 'https://cdn.skypack.dev/react';

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
export default class Layout extends Component<LayoutState, LayoutProps> {
  state: LayoutState = { userData: null };
  props: LayoutProps = { materialData: null };
  getFile = (e: Event) => getFile(e);
  render() {
    let allMaterialData = this.props.materialData;
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
