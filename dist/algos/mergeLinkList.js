"use strict";
//link node class
class LinkNode {
    value;
    nextNode;
    constructor(val, next = null) {
        this.value = val;
        this.nextNode = next;
    }
}
//function that merge two lists
//declare two lists
let L1 = new LinkNode(0);
L1.nextNode = new LinkNode(2);
L1.nextNode.nextNode = new LinkNode(4);
let L2 = new LinkNode(1);
L2.nextNode = new LinkNode(3);
L2.nextNode.nextNode = new LinkNode(5);
L2.nextNode.nextNode.nextNode = new LinkNode(55);
//call merge.
//# sourceMappingURL=mergeLinkList.js.map