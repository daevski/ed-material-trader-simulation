// @ts-ignore typescript error for remote import
import React, { Component } from 'https://cdn.skypack.dev/react';

import { toggleUserDataOptions } from './layoutFunctions';

type UserDataSectionProps = {
  getFile: any;
};

type UserDataSectionState = {
  toggleUserDataOptions: any;
};

export default class UserDataSection extends Component<UserDataSectionProps, UserDataSectionState> {
  props: UserDataSectionProps = { getFile: null };
  state: UserDataSectionState = { toggleUserDataOptions: null };
  toggleUserDataOptions = (e: React.MouseEvent) => toggleUserDataOptions(e);
  getFile = (e: MouseEvent) => this.props.getFile(e);
  render() {
    return (
      <div id="user-data-section">
        <div id="journal-button" className="user-material-button" onClick={(e) => this.toggleUserDataOptions(e)}>
          Upload journal file
        </div>
        <div id="journal-section" className="user-material-section">
          <p>
            You can choose your game's most recent Journal LOG file to use your current material levels. Typically, this
            file is located in your user directory:{' '}
            <b>
              C:\Users\USERNAME\Saved Games\Frontier Developments\Elite Dangerous\<u>Journal.*.log</u>
            </b>
            . (If there are multiple, make sure it's the most recent one!
          </p>
          <input type="file" onChange={(e) => this.props.getFile(e)} />
        </div>
      </div>
    );
  }
}
