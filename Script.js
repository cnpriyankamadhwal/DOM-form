document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('studentForm');
    const addBtn = document.getElementById('addBtn');
    const removeBtn = document.getElementById('removeBtn');
    const resetBtn = document.getElementById('resetBtn');
    const tableBody = document.getElementById('tableBody');

    addBtn.addEventListener('click', function () {
        const fullName = document.getElementById('fullName').value;
        const age = document.getElementById('age').value;
        const email = document.getElementById('email').value;

        if (fullName && age && email) {
            const newRow = document.createElement('tr');
            newRow.innerHTML = `
                        <td>${fullName}</td>
                        <td>${email}</td>
                        <td>${age}</td>
                    `;
            tableBody.appendChild(newRow);
            form.reset();
        }
        else {
            alert('Please fill up all fields correctly.');
        }
    });

    // removeBtn...
    removeBtn.addEventListener('click', function () {
        if (tableBody.lastChild) {
            tableBody.removeChild(tableBody.lastChild);
        }
    });

    // resetBtn...
    resetBtn.addEventListener('click', function () {
        form.reset();
    });
});
