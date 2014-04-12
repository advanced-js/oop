# Object Oriented Programming exercise

Make a `Circle` class with `radius` property and `getArea()` method, and add tests.  The [qunit-assert-close](https://github.com/advanced-js/qunit-assert-close) library will come in handy, which has been included.  Unfortunately [their instructions aren't quite right](https://github.com/JamesMGreene/qunit-assert-close/issues/3) for usage in a browser (vs. NodeJS), so it should look something like this:

```javascript
test("close() test", function() {
  var val = 1.205;
  close(val, 1.2, 0.01, "actual is close to expected");
});
```
