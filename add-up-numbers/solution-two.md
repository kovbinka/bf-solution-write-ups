# [Roman](https://github.com/kovbinka/)

```js
function addUp(num) {
  var result = 0;
  for (var i = 0; i <= num; i++) {
    result = result + i;
  }
  return result;
}
```

## Strategy

One more very nice solution to solve the problem with calculating the sum of all
integers from 1 to a given `num`. I choose a for loop instead of simple arrow
function with an arithmetic sequence. This way is very clear and simple. I just
use `result` to reassign the variable each iteration and returns final result
when the loop stops. This effect shows the same behavior as arithmetic method,
so it's efficient and elegant.

## Implementation

I implement the solution as traditional for loop function:

**Function declaration**: Traditional function has the parameter `num`. This
makes function clear and reusable. **Variable**: Variable to assign the result
value. **For Loop**: In a loop, we iterate and increment a specified number of
times and always overwrite the variable, each time adding the previous number to
the next - `result = result + 1`. **Explicit return**: The return keyword is
used to send the variable with result back. The function assumes `num` is a
positive integer or zero, as this is the typical context for summing a sequence
of numbers starting from 1.

## Possible refactor

The same strategy could be implemented differently

- arrow function with Implicit Return
- iterative Approach

## References

[MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration);
[Dev Dreamer](https://www.youtube.com/watch?v=sJZLB0p5QQk)
