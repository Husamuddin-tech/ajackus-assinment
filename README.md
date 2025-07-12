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





## Reflection:
Challenges Faced:
Error Messaging and Debugging
When FreeMarker templates failed (due to a missing variable or incorrect include), the errors were often vague or thrown at runtime. Debugging required scanning logs and verifying that all model.addAttribute(...) in the Spring controller matched what the template expected.

## Improvements:
If I would have time I'll improve these things:
1. More robust error handeling.
2. Add Animations.
3. Make UI Design More Professional.

## Screenshots




<img width="1469" height="831" alt="Screenshot 2025-07-12 at 5 28 41 PM" src="https://github.com/user-attachments/assets/e312998f-8acc-4068-9eb5-ed08b79f32a1" />




<img width="1454" height="756" alt="Screenshot 2025-07-12 at 5 28 53 PM" src="https://github.com/user-attachments/assets/8f898696-bc6d-4d54-9480-9ec0806ea43e" />











