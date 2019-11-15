// ===== Selection & Callbacks =====
// In D3 to set values more dynamically, by passing callbacks instead of primitives.
// This is useful when you got a selection with multiple elements because...
// The callback function will be run for each element in the selection.
// Anatomy of passing callback to Selection
  // selection.style(property[, callback])
  // selection.attr(property[, callback])
  // selection.text([callback])
  // selection.html([callback])
// The callback will be invoked once for each element in the selection
d3.selectAll('li')
    .style('background-color', function(_, idx) {
      return idx % 2 === 0 ? 'lightgrey' : 'white'
    })

d3.select('.outer')
    .style('color', 'purple')
  .select('div')
      .style('font-size', '30px')
      .style('background-color', 'orange')
  .select('div')
      .style('border', '8px solid blue')
