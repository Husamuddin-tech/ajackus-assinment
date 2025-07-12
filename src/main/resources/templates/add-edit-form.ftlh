<section id="employee-form-section" hidden>
    <h2 id="formTitle">Add / Edit Employee</h2>

    <form id="employeeForm" autocomplete="on">
        <input type="hidden" id="employeeId" name="employeeId">

        <div class="form-group">
            <label for="firstName">First Name:</label>
            <input type="text" id="firstName" name="firstName" placeholder="Enter first name" required autocomplete="given-name">
        </div>

        <div class="form-group">
            <label for="lastName">Last Name:</label>
            <input type="text" id="lastName" name="lastName" placeholder="Enter last name" required autocomplete="family-name">
        </div>

        <div class="form-group">
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" placeholder="Enter email" required autocomplete="email">
        </div>

        <div class="form-group">
            <label for="department">Department:</label>
            <input type="text" id="department" name="department" placeholder="Enter department" required autocomplete="organization">
        </div>

        <div class="form-group">
            <label for="role">Role:</label>
            <input type="text" id="role" name="role" placeholder="Enter role" required autocomplete="organization-title">
        </div>

        <div class="form-buttons">
            <button type="submit" class="save-btn btn-primary">Save</button>
            <button type="button" class="btn btn-secondary cancel-btn" onclick="cancelForm()">Cancel</button>
        </div>
    </form>
</section>
