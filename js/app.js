document.addEventListener('DOMContentLoaded', init, false);

function init() {
  console.log('init!')

  var selectionData = new SelectionData();

  console.log('selectionData: ', selectionData);

  selectionData.scaleAxes();
}
