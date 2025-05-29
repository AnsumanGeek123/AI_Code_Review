Issue: Missing variable declarations for `a` and `b`.

Reason: Without declaring `a` and `b`, JavaScript will throw a `ReferenceError` because it doesn't know what these
variables are.

Fix: Declare and initialize `a` and `b` before using them.

```javascript
let a = 5;
let b = 10;
console.log(a + b);
```