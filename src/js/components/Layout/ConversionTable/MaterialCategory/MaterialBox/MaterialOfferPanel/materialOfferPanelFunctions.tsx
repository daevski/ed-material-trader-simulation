import { setSelectedBoxes } from "../materialBoxFunctions"

export function initOfferInputs() {
    var allOfferInputs = document.querySelectorAll('.offer-input')

    for (let offerInputElem of allOfferInputs) {
        var parentMaterialBox = offerInputElem.closest('.material-box')
        var conversionNumerator = parentMaterialBox.querySelector('.conversion-ratio .input')

        offerInputElem.innerHTML = conversionNumerator.innerHTML

    }
}

export function initOfferOutputs() {
    var allOfferOutputs = document.querySelectorAll('.offer-output')

    for (let offerOutputElem of allOfferOutputs) {
        var parentMaterialBox = offerOutputElem.closest('.material-box')
        var conversionDenominator = parentMaterialBox.querySelector('.conversion-ratio .output')

        offerOutputElem.innerHTML = conversionDenominator.innerHTML

    }
}

export function initOfferMaterialTotals() {
    var allOfferTotalElems = document.querySelectorAll('.offer-material-total')

    for (let offerTotalElem of allOfferTotalElems) {
        var parentMaterialBox = offerTotalElem.closest('.material-box')
        var materialCount = parentMaterialBox.querySelector('.material-count')

        offerTotalElem.innerHTML = materialCount.innerHTML

    }
}

export function incrementOffer(e) {
    var thisElement = e.target
    var parentPanel = thisElement.closest('.material-offer-panel')
    var offerCounter = parentPanel.querySelector('input.offer-counter')
    var offerInput = parentPanel.querySelector('.offer-input')
    var offerOutput = parentPanel.querySelector('.offer-output')
    var parentMaterialBox = thisElement.closest('.material-box')
    var conversionNumeratorValue = parentMaterialBox.querySelector('.conversion-ratio .input').innerText
    var conversionDenominatorValue = parentMaterialBox.querySelector('.conversion-ratio .output').innerText

    var currentCount = parseInt(offerCounter.value)
    var offerInputMax = parentMaterialBox.querySelector('.material-count').innerText
    var wouldBeNextInputValue = (currentCount + 1) * conversionNumeratorValue

    if (wouldBeNextInputValue <= offerInputMax) {
        currentCount += 1
        offerCounter.value = currentCount
        offerInput.innerText = currentCount * conversionNumeratorValue
        offerOutput.innerText = currentCount * conversionDenominatorValue
    }
}

export function decrementOffer(e) {
    var thisElement = e.target
    var parentPanel = thisElement.closest('.material-offer-panel')
    var offerCounter = parentPanel.querySelector('input.offer-counter')
    var offerInput = parentPanel.querySelector('.offer-input')
    var offerOutput = parentPanel.querySelector('.offer-output')
    var parentMaterialBox = thisElement.closest('.material-box')
    var conversionNumeratorValue = parentMaterialBox.querySelector('.conversion-ratio .input').innerText
    var conversionDenominatorValue = parentMaterialBox.querySelector('.conversion-ratio .output').innerText

    var currentCount = parseInt(offerCounter.value)
    var wouldBeNextInputValue = (currentCount - 1) * conversionNumeratorValue

    if (wouldBeNextInputValue > 0) {
        currentCount -= 1
        offerCounter.value = currentCount
        offerInput.innerText = currentCount * conversionNumeratorValue
        offerOutput.innerText = currentCount * conversionDenominatorValue
    }
}

export function confirmTrade(e) {
    var thisElement = e.target
    var parentMaterialBox = thisElement.closest('.material-box')
    var parentPanel = thisElement.closest('.material-offer-panel')
    var offerOutput = parentPanel.querySelector('.offer-output')
    var offerCounter = parentPanel.querySelector('input.offer-counter')
    var inputMaterialCount = parentMaterialBox.querySelector('.material-count')
    var outputMaterialBox = document.querySelector('[data-selected-output]')
    var outputMaterialCount = outputMaterialBox.querySelector('.material-count')

    var offerInputValue = parseInt(parentPanel.querySelector('.offer-input').innerText)
    var inputMaterialCountValue = parseInt(inputMaterialCount.innerText)
    var newInputMaterialCount = inputMaterialCountValue - offerInputValue
    var newOutputMaterialCount = parseInt(outputMaterialCount.innerText) + parseInt(offerOutput.innerText)

    offerCounter.value = 1
    inputMaterialCount.innerText = newInputMaterialCount
    inputMaterialCount.classList.add('modified')
    outputMaterialCount.innerText = newOutputMaterialCount
    outputMaterialCount.classList.add('modified')

    initOfferInputs()
    initOfferOutputs()
    initOfferMaterialTotals()
    setSelectedBoxes(null, 'reset')
}