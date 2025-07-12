// static/js/EmployeeManager.js
import { mockEmployees } from './data.js';

let employees = [...mockEmployees];

export function getEmployees() {
    return [...employees];
}

export function deleteEmployee(id) {
    const index = employees.findIndex(emp => emp.id === id);
    if (index !== -1) {
        employees.splice(index, 1);
        return true;
    }
    return false;
}

export function updateEmployee(id, updatedData) {
    const index = employees.findIndex(emp => emp.id === id);
    if (index !== -1) {
        employees[index] = { id, ...updatedData };
        return true;
    }
    return false;
}

export function addEmployee(data) {
    const newEmployee = { id: Date.now(), ...data };
    employees.push(newEmployee);
    return newEmployee;
}

export function getEmployeeById(id) {
    return employees.find(emp => emp.id === id);
}
