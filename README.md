# Object Oriented Programming exercise

Make a `Circle` class with `radius` property and `getArea()` method, and add tests using [QUnit](https://qunitjs.com/).  The [qunit-assert-close](https://github.com/advanced-js/qunit-assert-close) library will come in handy, which has been included.  Unfortunately [their syntax examples are a bit different than those recommended on the QUnit site](https://github.com/JamesMGreene/qunit-assert-close/issues/3), so it can be used like so:

```javascript
test("close() test", function() {
  var val = 1.205;
  close(val, 1.2, 0.01, "actual is close to expected");
});
```
