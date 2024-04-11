/* write an algorithm that can merge two linked lists */
type typeNode = {
	value: number;
	nextNode: typeNode | null;
};
//link node class
class LinkNode implements typeNode {
	value: number;
	nextNode: typeNode | null;

	constructor(val: number, next: typeNode | null = null) {
		//declarations goes here.
		this.value = val;
		this.nextNode = next;
	}
}

//function that merge two lists
function merge(a: typeNode|null, b: typeNode|null) {

    // Create a dummy node to serve as the head of the merged list
    const dummyHead = new LinkNode(0);
    let tail = dummyHead;

    // Loop until one of the lists is exhausted
    while (a !== null && b !== null) {
        if (a.value <= b.value) {
            tail.nextNode = a;
            a = a.nextNode;
        } else {
            tail.nextNode = b;
            b = b.nextNode;
        }
        tail = tail.nextNode;
    }
   
    
    // Append the remaining nodes from the non-exhausted list
    if (a !== null) {
        tail.nextNode = a;
    } else if (b !== null) {
        tail.nextNode = b;
    }

    // Return the merged list, excluding the dummy head
    return dummyHead.nextNode;




}

//declare two lists
let L1 = new LinkNode(0);
L1.nextNode = new LinkNode(2);
L1.nextNode.nextNode = new LinkNode(4);

let L2 = new LinkNode(1);
L2.nextNode = new LinkNode(3);
L2.nextNode.nextNode = new LinkNode(5);
L2.nextNode.nextNode.nextNode = new LinkNode(55);

//call merge.
let current= merge(L1, L2);
console.log(current);
while (current!=undefined) {
    console.log(current.value, '->');
    current = current.nextNode;
  }
export{current};