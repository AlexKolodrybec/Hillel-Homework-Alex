let company = {
    sales: [{name: 'John', salary: 1000}, {name: 'Alice', salary: 600}],
    development: {
        web: [{name: 'Peter', salary: 2000}, {name: 'Alex', salary: 1800}],
        internals: [{name: 'Jack', salary: 1300}]
    }
};

function sum(company) {
    return Object.values(company).reduce((total, department) => {
        if (Array.isArray(department)) {
            return total + department.reduce((acc, employee) => acc + employee.salary, 0);
        } else {
            return total + sum(department);
        }
    }, 0);
}

console.log(sum(company));