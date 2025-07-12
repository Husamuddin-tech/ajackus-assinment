// static/js/filters.js
export const filterState = { firstName: '', department: '', role: '', search: '', sortBy: '' };
export const paginationState = { currentPage: 1, itemsPerPage: 10 };

let employees = [];
let renderEmployees = () => {};

export function initFilterModule(data, renderFn) {
    employees = [...data];
    renderEmployees = renderFn;

    document.getElementById('searchInput').addEventListener('input', function () {
        filterState.search = this.value.trim().toLowerCase();
        paginationState.currentPage = 1;
        updateDisplay();
    });

    document.getElementById('toggle-filter-btn').addEventListener('click', () => {
        const panel = document.getElementById('filter-panel');
        panel.hidden = !panel.hidden;
    });

    document.getElementById('apply-filter-btn').addEventListener('click', () => {
        filterState.firstName = document.getElementById('filter-firstName').value.trim().toLowerCase();
        filterState.department = document.getElementById('filter-department').value.trim().toLowerCase();
        filterState.role = document.getElementById('filter-role').value.trim().toLowerCase();
        paginationState.currentPage = 1;
        updateDisplay();
    });

    document.getElementById('sortBy').addEventListener('change', function () {
        filterState.sortBy = this.value;
        updateDisplay();
    });

    document.getElementById('itemsPerPage').addEventListener('change', function (e) {
        paginationState.itemsPerPage = parseInt(e.target.value);
        paginationState.currentPage = 1;
        updateDisplay();
    });

    document.getElementById('prevPageBtn').addEventListener('click', () => {
        if (paginationState.currentPage > 1) {
            paginationState.currentPage--;
            updateDisplay();
        }
    });

    document.getElementById('nextPageBtn').addEventListener('click', () => {
        paginationState.currentPage++;
        updateDisplay();
    });

    updateDisplay();
}

export function clearFilters() {
    ['filter-firstName', 'filter-department', 'filter-role', 'searchInput'].forEach(id => document.getElementById(id).value = '');
    Object.assign(filterState, { firstName: '', department: '', role: '', search: '', sortBy: '' });
    paginationState.currentPage = 1;
    document.getElementById('sortBy').value = '';
    updateDisplay();
}

function updateDisplay() {
    let result = employees;

    result = result.filter(emp =>
        (!filterState.firstName || emp.firstName.toLowerCase().includes(filterState.firstName)) &&
        (!filterState.department || emp.department.toLowerCase().includes(filterState.department)) &&
        (!filterState.role || emp.role.toLowerCase().includes(filterState.role))
    );

    if (filterState.search) {
        const keyword = filterState.search;
        result = result.filter(emp =>
            emp.firstName.toLowerCase().includes(keyword) ||
            emp.lastName.toLowerCase().includes(keyword) ||
            emp.email.toLowerCase().includes(keyword)
        );
    }

    if (filterState.sortBy) {
        const [key, dir] = filterState.sortBy.split('-');
        result.sort((a, b) => {
            const aVal = a[key].toLowerCase();
            const bVal = b[key].toLowerCase();
            return dir === 'asc' ? aVal.localeCompare(bVal) : bVal.localeCompare(aVal);
        });
    }

    const totalItems = result.length;
    const totalPages = Math.max(1, Math.ceil(totalItems / paginationState.itemsPerPage));
    const start = (paginationState.currentPage - 1) * paginationState.itemsPerPage;
    const paginated = result.slice(start, start + paginationState.itemsPerPage);

    renderEmployees(paginated);
    document.getElementById('pagination-info').textContent = `Page ${paginationState.currentPage} of ${totalPages}`;
    document.getElementById('prevPageBtn').disabled = paginationState.currentPage <= 1;
    document.getElementById('nextPageBtn').disabled = paginationState.currentPage >= totalPages;
}
