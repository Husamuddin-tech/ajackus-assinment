export const UI = {
    employeeListContainer: document.getElementById('employee-list-container'),
    formSection: document.getElementById('employee-form-section'),
    form: document.getElementById('employeeForm'),
    formTitle: document.getElementById('formTitle'),

    idField: document.getElementById('employeeId'),
    firstNameField: document.getElementById('firstName'),
    lastNameField: document.getElementById('lastName'),
    emailField: document.getElementById('email'),
    departmentField: document.getElementById('department'),
    roleField: document.getElementById('role'),

    renderEmployeeList(data, onEdit, onDelete) {
        this.employeeListContainer.innerHTML = '';

        data.forEach(emp => {
            const card = document.createElement('div');
            card.className = 'employee-card';
            card.setAttribute('data-employee-id', emp.id);

            card.innerHTML = `
                <h3>${emp.firstName} ${emp.lastName}</h3>
                <p><strong>ID:</strong> ${emp.id}</p>
                <p><strong>Email:</strong> ${emp.email}</p>
                <p><strong>Department:</strong> ${emp.department}</p>
                <p><strong>Role:</strong> ${emp.role}</p>
                <button class="edit-btn" data-id="${emp.id}">Edit</button>
                <button class="delete-btn" data-id="${emp.id}">Delete</button>
            `;

            card.querySelector('.edit-btn').addEventListener('click', () => onEdit(emp.id));
            card.querySelector('.delete-btn').addEventListener('click', () => onDelete(emp.id));

            this.employeeListContainer.appendChild(card);
        });
    },

    fillForm(employee) {
        this.idField.value = employee.id;
        this.firstNameField.value = employee.firstName;
        this.lastNameField.value = employee.lastName;
        this.emailField.value = employee.email;
        this.departmentField.value = employee.department;
        this.roleField.value = employee.role;
        this.formTitle.textContent = 'Edit Employee';

        // ✅ Just hide list and show form
        this.employeeListContainer.style.display = 'none';
        this.formSection.style.display = 'block';
    },

    resetForm() {
        this.form.reset();
        this.idField.value = '';
        this.formSection.style.display = 'none';
        this.employeeListContainer.style.display = 'block';
    }
};
