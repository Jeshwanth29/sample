var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Calculator = /** @class */ (function () {
    function Calculator(a, b) {
        this.num1 = a;
        this.num2 = b;
    }
    Calculator.prototype.add = function () {
        return (this.num1 + this.num2);
    };
    Calculator.prototype.diff = function () {
        return (this.num1 - this.num2);
    };
    Calculator.prototype.pro = function () {
        return (this.num1 * this.num2);
    };
    Calculator.prototype.div = function () {
        return (this.num1 / this.num2);
    };
    return Calculator;
}());
var Sci_cal = /** @class */ (function (_super) {
    __extends(Sci_cal, _super);
    function Sci_cal(na1, na2) {
        var _this = _super.call(this, na1, na2) || this;
        _this.x = na1;
        _this.y = na2;
        return _this;
    }
    Sci_cal.prototype.sinf = function () {
        return ("first number=" + Math.sin(this.x) + " the second number=" + Math.sin(this.y));
    };
    Sci_cal.prototype.cosf = function () {
        return ("first number=" + Math.cos(this.x) + " the second number=" + Math.cos(this.y));
    };
    return Sci_cal;
}(Calculator));
var S_Cal = /** @class */ (function (_super) {
    __extends(S_Cal, _super);
    function S_Cal(j, k) {
        var _this = _super.call(this, j, k) || this;
        _this.n1 = j;
        _this.n2 = k;
        return _this;
    }
    S_Cal.prototype.power = function () {
        return (Math.pow(this.n1, this.n2));
    };
    S_Cal.prototype.minimum = function () {
        return (Math.min(this.n1, this.n2));
    };
    S_Cal.prototype.square = function () {
        return ("first number=" + Math.sqrt(this.n1) + " the second number=" + Math.sqrt(this.n2));
    };
    return S_Cal;
}(Sci_cal));
var c = new S_Cal(4, 3);
console.log("the sum=" + c.add());
console.log("the difference=" + c.diff());
console.log("the product=" + c.pro());
console.log("the quotient=" + c.div());
console.log("the sin=" + c.sinf());
console.log("the cosine=" + c.cosf());
console.log("the power of the numbers are=" + c.power());
console.log("the minimum of two numbers=" + c.minimum());
console.log("the square root is=" + c.square());
