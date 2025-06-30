console.log(" Module 6: Employee Management System");

// Step 2: Create a base class called Employee with the following properties: name and department.
// And a method called desribe that returns a formatted string about the employee.

class Employee {
  constructor(name, department) {
    this.name = name;
    this.department = department;
  }

  describe() {
    return `Employee Name: ${this.name}, Department: ${this.department}`;
  }
}

// Step 3: Create a subclass called Manager that extends Employee. Use super to inherit name and department, and add: teamSize. 
// Also include a describe method that overrrides the parent method and adds manager-specific information.

class Manager extends Employee {
  constructor(name, department, teamSize) {
    super(name, department);
    this.teamSize = teamSize;
  }

  describe() {
    return `${super.describe()}, Team Size: ${this.teamSize}`;
  }
}

// Step 4: Create a few smaple employees and managers using new Employee and new Manager. 

const emp1 = new Employee("Dan", "Engineering");
const emp2 = new Employee("Bob", "Marketing");
const mgr1 = new Manager("Charles", "Engineering", 5);
const mgr2 = new Manager("Diana", "Marketing", 3);

// Step 5: Create a class called Company with a property employees (an array). 
// Add methods: addEmployee and listEmployees.

class Company {
  constructor() {
    this.employees = [];
  }

  addEmployee(employee) {
    this.employees.push(employee);
  }

  listEmployees() {
    return this.employees.map(emp => emp.describe()).join("\n");
  }
}

// Step 6: Instantiate a Compnay object, add both employee and manager instances, and call listEmployees. 

const company = new Company();
company.addEmployee(emp1);
company.addEmployee(emp2);
company.addEmployee(mgr1);
company.addEmployee(mgr2);  

console.log(company.listEmployees());

// Module 6: Employee Management System