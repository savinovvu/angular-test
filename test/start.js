var jasmine = require("jasmine");

var testableObject = {
  testableFunction: function () {
  }
}
}
jasmine.spyOn(testableObject, "testableFunction");
testableObject.testableFunction();
testableObject.testableFunction();
testableObject.testableFunction();
console.log(testableObject.testableFunction.count);
