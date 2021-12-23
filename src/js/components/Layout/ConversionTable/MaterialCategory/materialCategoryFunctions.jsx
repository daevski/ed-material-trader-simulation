export function getMaterialList(materialData, currentMaterialCategory) {
    Object.entries(materialData['Materials'])
        .map(([_, typeMaterials]) =>
            Object.entries(typeMaterials)
                .map(([_, arr]) => {
                    Object.entries(arr)
                        .map(([_, material]) => {
                            var materialCategory = material.Category.trim().toLowerCase().replace(/\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toUpperCase())));
                            if (materialCategory == currentMaterialCategory) {
                                this.state.materials.push(material)
                            }
                        }
                        )
                }
                )
        )
}

export function getCategoryNumber(categoryName) {
    switch (categoryName) {
        case 'chemical':
            return '1'
        case 'thermic':
            return '2'
        case 'heat':
            return '3'
        case 'conductive':
            return '4'
        case 'mechanical components':
            return '5'
        case 'capacitors':
            return '6'
        case 'shielding':
            return '7'
        case 'composite':
            return '8'
        case 'crystals':
            return '9'
        case 'alloys':
            return '10'
        case 'emission data':
            return '1'
        case 'wake scans':
            return '2'
        case 'shield data':
            return '3'
        case 'encryption files':
            return '4'
        case 'data archives':
            return '5'
        case 'encoded firmware':
            return '6'
        default:
            return '0'
    }
}