// @ts-ignore typescript error for remote import
import React from 'https://cdn.skypack.dev/react';

import { toggleUserDataOptions } from './layoutFunctions';

type UserDataSectionProps = {
    getFile: any
}

type UserDataSectionState = {
    toggleUserDataOptions: any
}

export default class UserDataSection extends React.Component {
    props: UserDataSectionProps = { getFile: null }
    state: UserDataSectionState = { toggleUserDataOptions: null }
    // FIXME: This class method likely won't work. See 'fixme' todo on getFile function...
    toggleUserDataOptions = () => toggleUserDataOptions.bind(this)
    render() {
        return (
            <div id='user-data-section'>
                <div id="journal-button" className='user-material-button' onClick={(e) => this.toggleUserDataOptions(e)}>Upload journal file</div>
                <div id="inara-button" className='user-material-button' onClick={(e) => this.toggleUserDataOptions(e)}>Connect to Inara.cz</div>
                <div id="journal-section" className='user-material-section'>
                    <p>You can choose your game's most recent Journal LOG file to use your current material levels. Typically, this file is located in your user directory: <b>C:\Users\USERNAME\Saved Games\Frontier Developments\Elite Dangerous\<u>Journal.*.log</u></b>. (If there are multiple, make sure it's the most recent one!</p>
                    <input type="file" onChange={(e) => this.props.getFile(e)} />
                </div>
                <div id="inara-connection-section" className='user-material-section'>
                    <p>The ability to connect to inara.cz is not done being developed...</p>
                </div>
            </div>
        )
    }
}