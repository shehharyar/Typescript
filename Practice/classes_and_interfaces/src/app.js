var Department = /** @class */ (function () {
    function Department(n) {
        this.name = n;
    }
    Department.prototype.describe = function () {
        console.log("Department: " + this.name);
    };
    return Department;
}());
var info_Tech = new Department("Information Tech");
info_Tech.describe();
var accounting = new Department("Accounting");
accounting.describe();
var finance = new Department("Finance");
finance.describe();
