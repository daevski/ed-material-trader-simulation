export function getFile(e: Event) {
  e.preventDefault();
  const reader = new FileReader();
  reader.onload = (e: ProgressEvent<FileReader>) => {
    if (e.target && e.target.result) {
      const text = e.target.result;

      if (text == typeof 'string') {
        var journalData = text.split(/\r\n|\n/);
        for (var lineNum = 0; lineNum < journalData.length - 1; lineNum++) {
          if (journalData[lineNum].includes('"event":"Materials"')) {
            this.setState({ userData: JSON.parse(journalData[lineNum]) });
          }
        }
      }
    }
  };

  if (e.target) {
    let inputElement = e.target as HTMLInputElement;

    if (inputElement.files) {
      let fileList: FileList = inputElement.files;
      reader.readAsText(fileList[0] as File);
    }
  }

  let journalButton = document.getElementById('journal-button');
  let conversionApp = document.getElementById('conversion-app');

  toggleUserDataOptions(null, true);

  if (journalButton && conversionApp) {
    journalButton.classList.add('active');
    conversionApp.style.visibility = 'visible';
  }

  var userMaterialButtons = document.getElementsByClassName('user-material-button');
  for (let button of userMaterialButtons as any) {
    button.style.display = 'none';
  }

  let carbonMaterialBox = document.getElementById('carbon');

  if (carbonMaterialBox) {
    carbonMaterialBox.focus();
  }
}

export function toggleUserDataOptions(e: React.MouseEvent, reset = false) {
  var userMaterialButtons = document.getElementsByClassName('user-material-button');
  var userMaterialSections = document.getElementsByClassName('user-material-section');
  var journalButton = document.getElementById('journal-button');
  var journalUploadSection = document.getElementById('journal-section');

  if (reset == true) {
    for (let button of userMaterialButtons as any) {
      button.classList.remove('active');
    }
    for (let section of userMaterialSections as any) {
      section.style.display = 'none';
    }
    return;
  }

  if (journalButton && journalUploadSection) {
    if (e.target == journalButton) {
      if (journalUploadSection.style.display == 'none' || journalUploadSection.style.display == '') {
        journalButton.classList.add('active');
        journalUploadSection.style.display = 'block';
      } else {
        journalButton.classList.remove('active');
        journalUploadSection.style.display = 'none';
      }
    }
  }
}
