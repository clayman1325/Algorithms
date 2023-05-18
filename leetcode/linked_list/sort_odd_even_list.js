var oddEvenList = function(head) {
    const length = getLength(head);

    if(length < 2) return head;

    const tail = getTail(head);

    moveOdds(head, tail, 0, length);

    return head;
}
function moveOdds(head, tail, count, length) {
    let newTail = tail;
    while(count <= length) {
        if(count % 2 != 0) {
            const move = head.next;
            head.next = head.next.next;
            head = head.next;
            move.next = newTail.next;
            newTail.next = move
            newTail = move;
        }
        count++
    }
}
function getLength(head) {
    let count = 0;
    while(head && head.next){
        head = head.next
        count++
    }
    return count;
}
function getTail(head) {
    while(head.next){
        head = head.next
    }
    return head;
}