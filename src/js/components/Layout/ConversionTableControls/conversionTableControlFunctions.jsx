export function toggleStatusMessaging() {
    var selectedOutputBox = document.querySelector('[data-selected-output]')
    var selectedInputBox = document.querySelector('[data-selected-input]')
    var statusMessages = document.querySelectorAll('.status-msg')
    var idleStatusReadout = document.getElementById('idle-status-readout')
    var materialChoiceReadout = document.getElementById('material-choice-readout')
    var materialChoiceMsg = document.getElementById('material-choice-msg')
    var materialOfferMsg = document.getElementById('material-offer-msg')

    idleStatusReadout.style.display = 'none'
    materialChoiceReadout.style.display = 'none'
    for (let message of statusMessages) {
        message.style.display = 'none'
    }

    if (!selectedOutputBox && !selectedInputBox) {
        idleStatusReadout.style.display = 'inline-block'
    }

    else if (selectedOutputBox) {
        var selectedMaterialName = selectedOutputBox.querySelector('.material-name')
        var selectedMaterialGrade = selectedOutputBox.querySelector('.material-name')
        var selectedMaterialCount = selectedOutputBox.querySelector('.material-name')

        if (!selectedInputBox) {
            materialChoiceMsg.style.display = 'block'
            materialChoiceReadout.style.display = 'block'
        }
        else if (selectedInputBox) {
            materialOfferMsg.style.display = 'block'
            materialChoiceReadout.style.display = 'block'
        }
    }
}