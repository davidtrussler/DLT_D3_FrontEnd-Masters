var SelectionData = function() {}

SelectionData.prototype.scaleAxes = function() {
  console.log('scaleAxes!');

  var data = [17, 100, 215, 320, 25, 48, 86];
  var height = 350;

  // scale
  var extent = d3.extent(data);

  console.log('extent: ', extent);

  var yScale = d3.scaleLinear()
    .domain(extent)
    .range([height, 0]);

  // axis
  var yAxis = d3.axisLeft()
    .scale(yScale);

  d3.select('svg')
    .append('g')
    .attr('transform', 'translate(40, 20)')
    .call(yAxis);
}
