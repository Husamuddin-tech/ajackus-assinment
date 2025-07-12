// static/js/app.js
import { UI } from './UIController.js';
import * as Manager from './EmployeeManager.js';
import { initFilterModule, clearFilters } from './filters.js';

let currentEmployees = Manager.getEmployees();

function refreshView(data) {
    UI.renderEmployeeList(data, handleEdit, handleDelete);
}

function handleDelete(id) {
    if (Manager.deleteEmployee(id)) {
        currentEmployees = Manager.getEmployees();
        refreshView(currentEmployees);
    } else {
        alert("Employee not found.");
    }
}

function handleEdit(id) {
    const emp = Manager.getEmployeeById(id);
    if (emp) {
        UI.fillForm(emp);
    } else {
        alert("Employee not found.");
    }
}

UI.form.addEventListener('submit', e => {
    e.preventDefault();

    const data = {
        firstName: UI.firstNameField.value.trim(),
        lastName: UI.lastNameField.value.trim(),
        email: UI.emailField.value.trim(),
        department: UI.departmentField.value.trim(),
        role: UI.roleField.value.trim()
    };

    if (!data.firstName || !data.lastName || !data.email || !data.department || !data.role) {
        alert("All fields are required.");
        return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
        alert("Invalid email format.");
        return;
    }

    const id = UI.idField.value;
    if (id) {
        Manager.updateEmployee(Number(id), data);
    } else {
        Manager.addEmployee(data);
    }

    currentEmployees = Manager.getEmployees();
    UI.resetForm();
    refreshView(currentEmployees);
});

document.getElementById('addEmployeeBtn').addEventListener('click', () => {
    UI.formTitle.textContent = "Add Employee";
    UI.form.reset();
    UI.idField.value = '';
    UI.dashboardSection.style.display = 'none';
    UI.formSection.style.display = 'block';
});

window.cancelForm = () => UI.resetForm();
window.clearFilters = clearFilters;

refreshView(currentEmployees);
initFilterModule(currentEmployees, refreshView);
