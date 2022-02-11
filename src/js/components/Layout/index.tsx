// @ts-ignore
import React, { Component } from 'https://cdn.skypack.dev/react';

import PageHeader from './PageHeader';
import ConversionTable from './ConversionTable/index';
import ConversionTableControls from './ConversionTableControls';
import UserDataSection from './UserDataSection';
import { getFile } from './layoutFunctions';

interface LayoutProps {
  materialData: any;
}

interface LayoutState {
  userData: any;
}

export default class Layout extends Component {
  state: LayoutState = { userData: null };
  props: LayoutProps = { materialData: null };
  getFile = (e: Event, thisComponent: Component, stateKeyName: string) => getFile(e, thisComponent, stateKeyName);
  render() {
    let allMaterialData = this.props.materialData;
    return (
      <div>
        <PageHeader />
        <UserDataSection getFile={this.getFile} layoutComponent={this} />
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
