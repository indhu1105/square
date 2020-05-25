let indhu = require("./node_modules/indhu-test/indhu");
let square = require("./square");

let result = square(4);
let expected = 16;

indhu.test(result).toBeEqualTo(expected);

result = square(28);
expected = 784;

indhu.test(result).toBeEqualTo(expected);

/*Fail case*/
result = square(8);
expected = 200;

indhu.test(result).toBeEqualTo(expected);
