import { initOfferInputs, initOfferOutputs, initOfferMaterialTotals } from "./MaterialOfferPanel/materialOfferPanelFunctions"

export function updateStatusReadout() {
    var selectedOutputBox = document.querySelector('[data-selected-output]')

    if (selectedOutputBox) {
        var materialReadout = document.getElementById('material-choice-readout')
        var readoutName = materialReadout.querySelector('#choice-material-name')
        var readoutIcon = materialReadout.querySelector('#choice-material-icon')
        var readoutQuantity = materialReadout.querySelector('#choice-material-count')
        var materialNameValue = selectedOutputBox.querySelector('.material-name').innerText
        var materialCountValue = selectedOutputBox.querySelector('.material-count').innerText
        var materialGradeValue = selectedOutputBox.querySelector('[data-rarity]').dataset.rarity

        readoutName.innerText = materialNameValue
        readoutIcon.classList.add(`grade-${materialGradeValue}-icon`)
        readoutQuantity.innerText = materialCountValue

    }
}

export function materialBoxHover(e) {
    var selectedOutputBox = document.querySelector('[data-selected-output]')
    if (!selectedOutputBox) {
        this.calculateRatios(e)
        initOfferInputs()
        initOfferOutputs()
        initOfferMaterialTotals()
    }
    this.toggleRatioElements(e)
}
export function materialBoxClick(e) {
    var isOfferPanelChild = e.target.closest('.material-offer-panel')


    if (e.target.className == 'cancel-trade-button' || !isOfferPanelChild) {
        this.setSelectedBoxes(e)
        this.toggleRatioElements(e)
        this.toggleStatusMessaging()
    }
    updateStatusReadout()
}

export function setSelectedBoxes(e, custom = null) {
    var selectedOutputBox = document.querySelector('[data-selected-output]')
    var selectedInputBox = document.querySelector('[data-selected-input]')

    if (custom == 'reset') {
        if (selectedOutputBox) {
            selectedOutputBox.removeAttribute("data-selected-output")
        }
        if (selectedInputBox) {
            selectedInputBox.removeAttribute("data-selected-input")
        }
        return
    }

    var box = e.target.closest('.material-box')

    if (box) {
        if (box.classList.contains('red')) {
            return
        }
    }

    if (!selectedOutputBox) {
        box.setAttribute("data-selected-output", "")
    }
    else if (selectedOutputBox && !selectedInputBox && (box == selectedOutputBox)) {
        box.removeAttribute("data-selected-output")
    }
    else if (selectedOutputBox && !selectedInputBox && box != selectedOutputBox) {
        box.setAttribute("data-selected-input", "")
    }
    else if (selectedOutputBox && selectedInputBox && box == selectedInputBox) {
        box.removeAttribute("data-selected-input")
    }
}

export function toggleRatioElements(e) {
    var eventMaterialBox = e.target.closest('.material-box')
    var ratioElms = document.getElementsByClassName('conversion-ratio')
    var selectedOutputBox = document.querySelector('[data-selected-output]')
    var selectedInputBox = document.querySelector('[data-selected-input]')

    for (let ratioElement of ratioElms) {
        var parentBox = ratioElement.closest('.material-box')

        if (e.type == 'click') {
            if (selectedOutputBox && !selectedInputBox && selectedOutputBox == eventMaterialBox) {
                parentBox.classList.remove('faded')
                parentBox.classList.remove('red')
            }
        }

        if (e.type == 'mouseleave') {

            if (!selectedOutputBox) {
                ratioElement.classList.remove('visible')
                parentBox.classList.add('faded')
                parentBox.classList.remove('red')
            }
        }

        if (e.type == 'mouseenter' || e.type == 'click') {

            parentBox.classList.contains('faded') ? parentBox.classList.remove('faded') : null

            // When ONE  material is selected
            if (selectedOutputBox) {
                if (!ratioElement.classList.contains('visible')) {
                    ratioElement.classList.add('visible')
                    parentBox.classList.add('red')
                }
            }
            // When ZERO materials are selected
            else if (!selectedOutputBox) {
                var ratioNumerator = parseInt(ratioElement.querySelector('.input').innerHTML)
                var materialCount = parseInt(ratioElement.closest('.material-box').querySelector('.material-count').innerHTML)

                ratioElement.classList.add('visible')
                if (materialCount < ratioNumerator) {
                    if (parentBox != eventMaterialBox) {
                        parentBox.classList.contains('faded') ? null : parentBox.classList.add('faded')
                        ratioElement.classList.remove('visible')
                    }
                    else {
                        parentBox.classList.remove('faded')
                    }
                }
            }
        }
    }
}

export function calculateRatios(e) {
    var thisElement = e.target
    var thisElementRarity = thisElement.closest('.material-box').querySelector('[data-rarity]').dataset.rarity
    var thisElementCategory = thisElement.closest('.category-container').querySelector('[data-category]').dataset.category
    var allTypeMaterialBoxes = e.target.closest('.conversion-table').getElementsByClassName('material-box')
    var downgradePattern = [1, 3, 9, 27, 81]
    var upgradePattern = [1, 6, 36, 216, 1296, 7776]

    for (let box of allTypeMaterialBoxes) {
        var thisBoxRarity = box.querySelector('[data-rarity]').dataset.rarity
        var thisBoxCategory = box.closest('.category-container').querySelector('[data-category]').dataset.category
        var thisBoxRatio = box.querySelector('.conversion-ratio')
        var ratioInput = thisBoxRatio.querySelector('.input')
        var ratioOutput = thisBoxRatio.querySelector('.output') // desired material
        var rarityDiff = 0
        var categoryMatch = thisBoxCategory == thisElementCategory ? true : false


        if (e.type == 'mouseenter') {

            if (box == thisElement) {
                ratioOutput.innerHTML = 1
                ratioInput.innerHTML = 1
            }

            else if (thisBoxRarity == thisElementRarity) {
                // rarityDiff = Math.abs((thisElementRarity - thisBoxRarity))
                // ratioOutput.innerHTML = (upgradePattern[rarityDiff])
                ratioOutput.innerHTML = 1
                ratioInput.innerHTML = 6
            }
            else if (thisBoxRarity > thisElementRarity) {
                // DOWNGRADE CONVERSION (3^n) - offering higher rarity to gain lower rarity
                rarityDiff = Math.abs((thisElementRarity - thisBoxRarity))
                if (!categoryMatch) {
                    rarityDiff += -1
                }
                ratioOutput.innerHTML = (downgradePattern[rarityDiff])
                ratioInput.innerHTML = (categoryMatch ? 1 : 2)
            }
            else if (thisBoxRarity < thisElementRarity) {
                // UPGRADE CONVERSION (6^n) - offering lower rarity to gain higher rarity
                rarityDiff = Math.abs((thisElementRarity - thisBoxRarity))
                if (!categoryMatch) {
                    rarityDiff += 1
                }
                ratioInput.innerHTML = (upgradePattern[rarityDiff])
            }
        }
        // else if (e.type == 'mouseleave') {
        //     if (selectedOutputBox.length == 0) {
        //         ratioInput.innerHTML = '0'
        //         ratioOutput.innerHTML = '0'
        //     }
        // }
    }
}

export function getMaterialCount(material) {
    if (!this.props.userData) {
        return '0'
    }
    var userData = this.props.userData
    var defaultCount = '0'

    for (let userMaterial of userData[material.Type]) {
        var pageMaterialName = material.Name.toLowerCase().replace(/\s/g, '')


        if (userMaterial.Name == pageMaterialName) {
            return userMaterial.Count.toString()
        }
    }
    return defaultCount

}

export function getRarityNumber(rarityName) {
    switch (rarityName) {
        case 'very common':
            return '1'
        case 'common':
            return '2'
        case 'standard':
            return '3'
        case 'rare':
            return '4'
        case 'very rare':
            return '5'
        default:
            return '0'
    }
}

// moveMaterialName(e) {
//     var thisBox = e.target.closest('.material-box')
//     var selectedOutputBox = document.getElementsByClassName('selectedOutput')

//     if (selectedOutputBox[0] == thisBox) {
//         var nameDiv = selectedOutputBox[0].querySelector('.material-name')
//         var nameDivHeight = window.getComputedStyle(nameDiv)['height']
//         nameDiv.style.bottom = (nameDivHeight) * -1
//     }
//     else {
//         var nameDiv = thisBox.querySelector('.material-name')
//         var nameDivHeight = window.getComputedStyle(nameDiv)['height']
//         nameDiv.style.bottom = nameDivHeight
//     }
// }