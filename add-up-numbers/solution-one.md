# [Roman](https://github.com/kovbinka/)

```js
export const addUp = (num) => {
  return (num * (num + 1)) / 2;
};
```

## Strategy

This function solves the problem of calculating the sum of all integers from 1
to a given number `num`. I chose a mathematical approach using the formula for
the sum of an arithmetic sequence, `(num * (num + 1)) / 2`, instead of iterating
through numbers. This strategy is efficient and elegant, leveraging a well-known
mathematical property to avoid loops or recursive calculations.

## Implementation

I implement the solution as a concise, two-lines function:

**Arrow Function**: Simple arrow function has the parameter `num`, that's what
makes it understandable and reusable. **Mathematical formula**: The expression
`(num * (num + 1)) / 2` computes the sum of integers from 1 to num. This formula
comes from the arithmetic series sum: `S = n * (first + last) / 2`, where the
first term is 1, the last term is `num`, and the number of terms is `num`.
**Explicit return**: The return keyword is used to send the result back, keeping
the implementation straightforward. The function assumes `num` is a positive
integer or zero, as this is the typical context for summing a sequence of
numbers starting from 1.

## Possible Refactors

The same strategy could be implemented differently

- traditional Function with Implicit Return
- iterative Approach
- with Input Validation

## References

This solution was written only according to a mathematical formula:

- derivation of Sum of Arithmetic Series Formula:
- [Cuemath](https://www.cuemath.com/sum-of-arithmetic-sequence-formula/)
