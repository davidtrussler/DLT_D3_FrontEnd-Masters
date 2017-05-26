var SelectionData = function() {}

SelectionData.prototype.rects = function() {
  console.log('rects!');

  var data = [17, 100, 215, 320, 25];
  var rectWidth = 100;
  var height = 350;

  d3.selectAll('rect')                  // select all rect elements that exist
    .data(data)                         // bind data to the selections
    .attr('x', (d, i) => i * rectWidth) // set x axis
    .attr('y', d => height - d)         // set y axis
    .attr('width', rectWidth)           // set width
    .attr('height', d => d)             // set height
    .attr('fill', 'blue')
    .attr('stroke', '#fff');
}

