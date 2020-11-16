/**
 * Drag and Drop Basic
 */

let dragSource = document.querySelector('#drag-source')
dragSource.addEventListener('dragstart', dragStart)
dragSource.addEventListener('ontouchstart', dragStart)

let dragSource2 = document.querySelector('#drag-source2')
dragSource2.addEventListener('dragstart', dragStart)

let dragSource3 = document.querySelector('#drag-source3')
dragSource3.addEventListener('dragstart', dragStart)

let dragSource4 = document.querySelector('#drag-source4')
dragSource4.addEventListener('dragstart', dragStart)

let dropTarget = document.querySelector('#target-container')
dropTarget.addEventListener('drop', dropped)
dropTarget.addEventListener('dragenter', cancelDefault)
dropTarget.addEventListener('dragover', cancelDefault)

let dropTarget2 = document.querySelector('#target-container2')
dropTarget2.addEventListener('drop', dropped)
dropTarget2.addEventListener('dragenter', cancelDefault)
dropTarget2.addEventListener('dragover', cancelDefault)

let dropTarget3 = document.querySelector('#target-container3')
dropTarget3.addEventListener('drop', dropped)
dropTarget3.addEventListener('dragenter', cancelDefault)
dropTarget3.addEventListener('dragover', cancelDefault)

let dropTarget4 = document.querySelector('#target-container4')
dropTarget4.addEventListener('drop', dropped)
dropTarget4.addEventListener('dragenter', cancelDefault)
dropTarget4.addEventListener('dragover', cancelDefault)

var this_id
var this_drap

function cancelDefault (e) {
  e.preventDefault()
  e.stopPropagation()
  return false
}

function dragStart (e) {
  // console.log('dragStart')
  e.dataTransfer.setData('text/plain', e.target.id)
  this_id = $(this).attr('id');
  this_drap = this
}

function dropped (e) {
  // console.log('dropped')
  cancelDefault(e)
  let this_class = $(this).attr('class')
  if(this_class == this_id){
    let id = e.dataTransfer.getData('text/plain')
    e.target.appendChild(document.querySelector('#' + id))
    this_drap.classList.add('hover')
  } else {
    return false
  }
}
// End of Drag and Drop Basic