var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Department = /** @class */ (function () {
    //id should be initialized onece ----
    function Department(id, name) {
        this.id = id;
        this.name = name;
        //     name: string;
        this.employees = [];
        // this.name= n;
    }
    Department.createEmployee = function (name) {
        return { name: name };
    };
    Department.prototype.addEmployee = function (employee) {
        this.employees.push(employee);
    };
    Department.prototype.printEmployeeInformation = function () {
        console.log(this.employees.length);
        console.log(this.employees);
    };
    Department.fiscalYear = 2023;
    return Department;
}());
var ITDepartment = /** @class */ (function (_super) {
    __extends(ITDepartment, _super);
    function ITDepartment(id, admins) {
        var _this = _super.call(this, id, "IT") || this;
        _this.admins = admins;
        _this.admins = admins;
        return _this;
    }
    ITDepartment.prototype.describe = function () {
        console.log("IT Department = id ", this.id);
    };
    return ITDepartment;
}(Department));
var AccountingDepartment = /** @class */ (function (_super) {
    __extends(AccountingDepartment, _super);
    function AccountingDepartment(id, reports) {
        var _this = _super.call(this, id, "Accounting") || this;
        _this.reports = reports;
        _this.lastReport = reports[0];
        return _this;
    }
    AccountingDepartment.getInstance = function () {
        if (AccountingDepartment.instance) {
            return this.instance;
        }
        this.instance = new AccountingDepartment("acc/2", []);
        return this.instance;
    };
    AccountingDepartment.prototype.describe = function () {
        console.log("Accounting Department = id ", this.id);
    };
    Object.defineProperty(AccountingDepartment.prototype, "mostRecentReport", {
        get: function () {
            if (this.lastReport) {
                return this.lastReport;
            }
            throw new Error("Reports not Found..");
        },
        set: function (value) {
            if (!value) {
                throw new Error("Please Pass in a valid value!");
            }
            this.addReport(value);
        },
        enumerable: false,
        configurable: true
    });
    AccountingDepartment.prototype.addReport = function (text) {
        this.reports.push(text);
        this.lastReport = text;
    };
    AccountingDepartment.prototype.addEmployee = function (name) {
        if (name === "Sheharyar") {
            return;
        }
        this.employees.push(name);
    };
    AccountingDepartment.prototype.printReports = function () {
        console.log(this.reports);
    };
    return AccountingDepartment;
}(Department));
var employee = Department.createEmployee("Max");
var year = Department.fiscalYear;
console.log(employee, year);
// const info_Tech = new Department("IT", "Information Tech");
// info_Tech.describe();
var it = new ITDepartment("acc/1", ["Sheharyar"]);
it.describe();
it.addEmployee("Sheharyar");
it.addEmployee("Maximillian");
it.printEmployeeInformation();
console.log(it);
// const accounting = new AccountingDepartment("acc/2", []);
var accounting = AccountingDepartment.getInstance();
var accounting2 = AccountingDepartment.getInstance();
console.log(accounting, accounting2);
accounting.mostRecentReport = "You have to enlist all the procedures....";
// accounting.addReport("Something Went Wrong...");
accounting.printReports();
accounting.addEmployee("Sheharyar");
accounting.addEmployee("Manu");
accounting.printEmployeeInformation();
// accounting.addReport("Required Transactions are performed.")
console.log(accounting.mostRecentReport);
console.log(accounting);
//we can access the properties of class outside of the class because bydefault , it is public.
// accounting.employees.push("Manu")
// const accountingCopy={name : "Sheharyar",describe: accounting.describe};
// accountingCopy.name;
// accountingCopy.describe;
