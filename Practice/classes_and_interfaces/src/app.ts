class Department {
    name: string;


    constructor(n: string){
        this.name= n;
    }
    describe(this : Department){
        console.log("Department: " + this.name);
    }
}

const info_Tech=new Department("Information Tech");
info_Tech.describe();
const accounting= new Department("Accounting");
const accountingCopy={name : "Sheharyar",describe: accounting.describe};
accountingCopy.name;
accountingCopy.describe()

