import { materialBoxHover } from "./ConversionTable/MaterialCategory/MaterialBox/materialBoxFunctions";

export async function getFile(e) {
    e.preventDefault()
    const reader = new FileReader()
    reader.onload = async (e) => {
        const text = (e.target.result)
        var journalData = text.split(/\r\n|\n/)
        for (var lineNum = 0; lineNum < journalData.length - 1; lineNum++) {
            if (journalData[lineNum].includes('"event":"Materials"')) {
                this.setState({ userData: JSON.parse(journalData[lineNum]) })
            }
        }
    };
    reader.readAsText(e.target.files[0])
    toggleUserDataOptions(null, true)
    document.getElementById('journal-button').classList.add('active')
    document.getElementById('conversion-app').style.visibility = 'visible'
    var userMaterialButtons = document.getElementsByClassName('user-material-button')
    for (let button of userMaterialButtons) {
        button.style.display = 'none'
    }
    document.getElementById('carbon').focus()
}

export function toggleUserDataOptions(e, reset = false) {
    var userMaterialButtons = document.getElementsByClassName('user-material-button')
    var userMaterialSections = document.getElementsByClassName('user-material-section')
    var journalButton = document.getElementById('journal-button')
    var inaraButton = document.getElementById('inara-button')
    var journalUploadSection = document.getElementById('journal-section')
    var inaraConnectionSection = document.getElementById('inara-connection-section')

    if (reset == true) {
        for (let button of userMaterialButtons) {
            button.classList.remove('active')
        }
        for (let section of userMaterialSections) {
            section.style.display = 'none'
        }
        return
    }


    if (e.target == journalButton) {

        if ((journalUploadSection.style.display == 'none') || (journalUploadSection.style.display == '')) {
            inaraButton.classList.remove('active')
            inaraConnectionSection.style.display = 'none'
            journalButton.classList.add('active')
            journalUploadSection.style.display = 'block'
        }
        else {
            journalButton.classList.remove('active')
            journalUploadSection.style.display = 'none'
        }
    }

    else if (e.target == inaraButton) {

        if ((inaraConnectionSection.style.display == 'none') || (inaraConnectionSection.style.display == '')) {
            journalButton.classList.remove('active')
            journalUploadSection.style.display = 'none'
            inaraButton.classList.add('active')
            inaraConnectionSection.style.display = 'block'
        }
        else {
            inaraButton.classList.remove('active')
            inaraConnectionSection.style.display = 'none'
        }
    }
}