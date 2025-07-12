# AJACKUS Employee Directory Assignment

This project is a **responsive employee directory web interface**, developed as part of the AJACKUS frontend-backend assignment. It allows users to **add, edit, delete, search, filter, sort, and paginate** through a list of employees.

---

## 🛠 Technologies Used

- **HTML5**
- **CSS3** (Modular structure: `base.css`, `layout.css`, `components.css`, `responsive.css`)
- **JavaScript (ES6 Modules)**
- **Spring Boot** (Java backend)
- **Freemarker Templates (.ftlh)** for rendering HTML
- **Git** for version control

---

## 🚀 Features

- 🔍 **Search** by name or email
- 🎯 **Filter** by first name, department, and role
- 🧭 **Sort** by first name or department (A-Z, Z-A)
- 📄 **Pagination** with page controls and items-per-page options
- 📝 **Add/Edit/Delete** employees
- 📱 **Responsive Design** (Mobile & Tablet friendly)
- 🎨 **Modern UI** with blue-black-white theme

---

## 📁 Project Structure

employee-directory/

├── src/
│ ├── main/
│ │ ├── java/com/example/yourproject/
│ │ │ └── EmployeeDirectoryApplication.java
│ │ │ └── EmployeeController.java
│ │ ├── resources/
│ │ │ ├── static/
│ │ │ │ ├── css/
│ │ │ │ ├── js/
│ │ │ ├── templates/
│ │ │ │ ├── index.ftlh
│ │ │ │ ├── add-edit-form.ftlh
│ │ │ └── application.properties
│ └── test/
│ └── java/
│ └── com/example/yourproject/
│ └── EmployeeDirectoryApplicationTests.java




---

## 🖥️ Run Locally (Spring Boot)

1. Make sure Java & Maven are installed
2. Navigate to your project root:
   ```bash
   ./mvnw spring-boot:run
