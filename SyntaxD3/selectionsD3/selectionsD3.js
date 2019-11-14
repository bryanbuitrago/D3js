// ===== Selection Methods =====

// d3.select - single element
// d3.selectAll - multiple elements
// Both accept a valid CSS selector
d3.select('#page-title')
d3.selectAll('li')

// If you want to select all <li>'s as raw HTML elements or nodes()
  // Selects All <li>'s
d3.selectAll('li').nodes()
  // Selects 1st <li>
d3.select('li').node()

// To access the elements directly use D3 selection Object, Instead of node()
d3.select('#page-title')
    .style('background-color', '00feab')
// Other seletion Object methods
d3.select('#page-title')
    .style('background-color', '000000')
    .style('color', '#fffff')
    // To manipulate the element's attributes
    .attr('class', 'new-class')
    // To Manipulates the element's text
    .text('d3 is cool')
    .html('d3 is really cool')

// When no value is passed to the methods the current element's value is returned
d3.select('#page-title').text() // Returns the text of the element
d3.select('#page-title').style('color') // Returns the color of the element

// Classed Method
// The classed methods is used to manipulate the elements class
// anatomy of a classed method
  // selection.classed(classList[, shouldClassesBeSet])
  // classList -> space separated list
  // shouldClassesBeSet -> checkes whether classes should be added or removed
d3.select('#page-title')
    .classed('new-class', true)

// ===============================
