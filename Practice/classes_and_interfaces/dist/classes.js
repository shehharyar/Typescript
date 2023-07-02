"use strict";
class Department {
    //id should be initialized onece ----
    constructor(id, name) {
        this.id = id;
        this.name = name;
        //     name: string;
        this.employees = [];
        // this.name= n;
    }
    static createEmployee(name) {
        return { name: name };
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
Department.fiscalYear = 2023;
class ITDepartment extends Department {
    constructor(id, admins) {
        super(id, "IT");
        this.admins = admins;
        this.admins = admins;
    }
    describe() {
        console.log("IT Department = id ", this.id);
    }
}
class AccountingDepartment extends Department {
    constructor(id, reports) {
        super(id, "Accounting");
        this.reports = reports;
        this.lastReport = reports[0];
    }
    static getInstance() {
        if (AccountingDepartment.instance) {
            return this.instance;
        }
        this.instance = new AccountingDepartment("acc/2", []);
        return this.instance;
    }
    describe() {
        console.log("Accounting Department = id ", this.id);
    }
    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        throw new Error("Reports not Found..");
    }
    set mostRecentReport(value) {
        if (!value) {
            throw new Error("Please Pass in a valid value!");
        }
        this.addReport(value);
    }
    addReport(text) {
        this.reports.push(text);
        this.lastReport = text;
    }
    addEmployee(name) {
        if (name === "Sheharyar") {
            return;
        }
        this.employees.push(name);
    }
    printReports() {
        console.log(this.reports);
    }
}
const employee = Department.createEmployee("Max");
const year = Department.fiscalYear;
console.log(employee, year);
// const info_Tech = new Department("IT", "Information Tech");
// info_Tech.describe();
const it = new ITDepartment("acc/1", ["Sheharyar"]);
it.describe();
it.addEmployee("Sheharyar");
it.addEmployee("Maximillian");
it.printEmployeeInformation();
console.log(it);
// const accounting = new AccountingDepartment("acc/2", []);
const accounting = AccountingDepartment.getInstance();
const accounting2 = AccountingDepartment.getInstance();
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
//# sourceMappingURL=classes.js.map