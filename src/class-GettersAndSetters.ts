let passcode = "secret passcode";

class Employees {
  private _fullName: string;
  get fullName(): string {
    return this._fullName;
  }

  set fullName(newName: string) {
    if (passcode && passcode === "secret passcode") {
      this._fullName = newName;
    } else {
      console.log("Error: Unauthorized update of employee!");
    }
  }
}

let employee = new Employees();

employee.fullName = "Eric Lee";

if (employee.fullName) {
  console.log(employee.fullName);
}
