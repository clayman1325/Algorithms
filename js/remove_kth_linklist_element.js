function recFunction(head, node, k, depth) {
  if(node.next == null) {
    return 1
  }

  depth = recFunction(head, node.next, k) + 1

  if(depth == k+1) {
    const nextNode = node.next.next
    node.next = nextNode;
  }
  if(depth == k && head == node) {
    head.value = node.next.value
    head.next = node.next.next
  }

  return depth
}