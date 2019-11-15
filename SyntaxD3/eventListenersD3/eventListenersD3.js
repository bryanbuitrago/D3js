// ===== Event Listeners in D3 =====
// anatomy of event Listeners in D3
  // selection.on(eventType, callback)
// Run code below in the console
d3.select('h1').on('click', function() {
    console.log('Event Listeners are sweet!!')
})

d3.select('#new-note').on('submit', function() {
  // how do we access the event object?
  d3.event.preventDefault()

  var input = d3.select('input')
  d3.select('#notes')
    .append('p')
      .classed('note', true)
      .text(input.property('value'));
    input.property('value', '')
})

// Removing Elements
// remove method. Removes elements from the dom
  // selection.remove()
d3.selectAll('p').remove()
