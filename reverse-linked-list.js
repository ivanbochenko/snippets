// reverse a linked list
const reverseLinkedList = function(linkedlist) {
  let node = linkedlist;
  let previous = null;

  while(node) {
    let save = node.next
    // reverse pointer
    node.next = previous
    previous = node
    node = save
  }
  return previous
}

const linkedlist = {
  value: 6,
  next: {
      value: 10,
      next: {
          value: 12,
          next: {
              value: 3,
              next: null
              }
          }
      }
  }


console.log(reverseLinkedList(linkedlist));