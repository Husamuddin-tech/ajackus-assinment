<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Employee Directory</title>
    <link rel="stylesheet" href="/css/style.css">
</head>
<body>

    <header class="app-header">
        <h1>Employee Directory</h1>
        <div class="search-bar">
            <input type="text" id="searchInput" placeholder="Search by name or email" autocomplete="off">
        </div>
    </header>

    <main>
        <!-- Controls: Filter / Sort -->
        <section class="controls">
            <label for="sortBy">Sort:</label>
            <select id="sortBy">
                <option value="">--Select--</option>
                <option value="firstName-asc">First Name (A-Z)</option>
                <option value="firstName-desc">Last Name (Z-A)</option>
                <option value="department-asc">Department (A-Z)</option>
                <option value="department-desc">Department (Z-A)</option>
            </select>

            <label for="itemsPerPage">Show:</label>
            <select id="itemsPerPage">
                <option value="5">5</option>
                <option value="10" selected>10</option>
                <option value="15">15</option>
            </select>

            <button id="toggle-filter-btn" class="btn btn-primary">Toggle Filters</button>
            <button id="addEmployeeBtn" class="btn btn-secondary">Add Employee</button>
        </section>

        <!-- Filters -->
        <section id="filter-panel" class="filter-panel" hidden>
            <h3>Filter Employees</h3>
            <input type="text" id="filter-firstName" placeholder="First Name" autocomplete="off">
            <input type="text" id="filter-department" placeholder="Department" autocomplete="off">
            <input type="text" id="filter-role" placeholder="Role" autocomplete="off">
            <button id="apply-filter-btn">Apply Filter</button>
            <button type="button" onclick="clearFilters()">Clear</button>
        </section>

        <!-- Employee List -->
        <section id="employee-list-container">
            <#list employees as employee>
                <article class="employee-card" data-employee-id="${employee.id}">
                    <h3>${employee.firstName} ${employee.lastName}</h3>
                    <p><strong>ID:</strong> ${employee.id}</p>
                    <p><strong>Email:</strong> ${employee.email}</p>
                    <p><strong>Department:</strong> ${employee.department}</p>
                    <p><strong>Role:</strong> ${employee.role}</p>
                    <button class="edit-btn" data-id="${employee.id}">Edit</button>
                    <button class="delete-btn" data-id="${employee.id}">Delete</button>
                </article>
            </#list>
        </section>

        <!-- Pagination -->
        <nav class="pagination-controls">
            <button id="prevPageBtn">Previous</button>
            <span id="pagination-info">Page 1 of 1</span>
            <button id="nextPageBtn">Next</button>
        </nav>

        <!-- Add/Edit Form -->
        <#include "add-edit-form.ftlh">
    </main>

    <footer>
        <p>&copy; 2025 Employee Directory App. All rights reserved.</p>
    </footer>

    <!-- JavaScript Modules -->
    <script type="module" src="/js/app.js"></script>
</body>
</html>
