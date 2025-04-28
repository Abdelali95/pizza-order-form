// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    const table = document.querySelector('table');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        // Get form values
        const name = document.getElementById('name').value;
        const size = document.getElementById('size').value;
        const instructions = document.getElementById('instructions').value;

        // Get all selected toppings
        const toppings = [];
        const toppingsInputs = document.querySelectorAll('input[name="toppings"]:checked');
        toppingsInputs.forEach(topping => {
            toppings.push(topping.value);
        });

        // Create a new table row
        const newRow = document.createElement('tr');

        // Create table data cells
        const nameCell = document.createElement('td');
        nameCell.textContent = name;

        const sizeCell = document.createElement('td');
        sizeCell.textContent = size;

        const toppingsCell = document.createElement('td');
        toppingsCell.textContent = toppings.join(', ');

        const instructionsCell = document.createElement('td');
        instructionsCell.textContent = instructions;

        // Append cells to the row
        newRow.appendChild(nameCell);
        newRow.appendChild(sizeCell);
        newRow.appendChild(toppingsCell);
        newRow.appendChild(instructionsCell);

        // Append the row to the table
        table.appendChild(newRow);

        // Optionally, reset the form
        form.reset();
    });
});
