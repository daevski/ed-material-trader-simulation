export async function generateCategorySet(categoriesSet, materialData, currentMaterialType) {
  Object.entries(materialData['Materials']).map(([_, typeMaterials]) =>
    Object.entries(typeMaterials).map(([_, materialList]) =>
      Object.entries(materialList).map(([_, material]) => {
        if (material.Type == currentMaterialType) {
          categoriesSet.add(material.Category);
        }
      }),
    ),
  );
}

export async function tableHeightToggle(reset = false) {
  var button = document.querySelector('button.table-height');
  var activeTable = document.querySelector('.conversion-table.active');
  var fullHeightTable = document.querySelector('.conversion-table.full-height');

  if (fullHeightTable || reset == true) {
    if (fullHeightTable) {
      fullHeightTable.classList.remove('full-height');
    }
    button.innerHTML = ' ↧ ';
  } else {
    activeTable.classList.add('full-height');
    button.innerHTML = ' ↥ ';
  }
}
