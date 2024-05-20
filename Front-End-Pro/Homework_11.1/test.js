function createTable(size) {
    let table = '<table>';
    for (let i = 0; i <= 9; i++) {
        table += '<tr>';
        for (let j = 0; j <= 9; j++) {
            if (i === 0 && j === 0) {
                table += '<th></th>';
            } else if (i === 0) {
                table += `<th>${j}</th>`;
            } else if (j === 0) {
                table += `<th>${i}</th>`;
            } else {
                table += `<td>${i * j}</td>`;
            }
        }
        table += '</tr>';
    }
    table += '</table>';
    return table;
}

document.addEventListener('DOMContentLoaded', () => {
document.getElementById('table').innerHTML = createTable(10);
});