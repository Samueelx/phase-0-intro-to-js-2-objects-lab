// Write your solution in this file!
const employee = {
    name: "Metro",
    streetAddress: "Metropolis"
};

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const updatedEmployee = {...employee};
    updatedEmployee[key] = value;
    return updatedEmployee;
}

const destructivelyUpdateEmployeeWithKeyAndValue = function(employee, key, value) {
    employee[key] = value;
    return employee;
}

const deleteFromEmployeeByKey = function(employee, key) {
    const newEmployee = {...employee};
    delete newEmployee[key];

    return newEmployee;
}

const destructivelyDeleteFromEmployeeByKey = function(employee, key) {
    delete employee[key];
    return employee;
}