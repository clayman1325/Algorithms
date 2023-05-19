var asteroidCollision = function(a) {
    let i = 0, stack = [];
    while (i < a.length) {
        console.log(stack)
      if (a[i] >= 0 || !stack.length || stack[stack.length - 1] < 0) {
        stack.push(a[i++]);
      } else if (a[i] + stack[stack.length - 1] < 0) {
        stack.pop();
      } else if (a[i] + stack[stack.length - 1] === 0) {
        stack.pop();
        i++;
      } else {
        i++;
      }
      console.log(stack)
    }

    return stack;
  };