const { faker } = require('@faker-js/faker');
const fs = require('fs');

// generate data

const generateUser = _ => {
    return {
        "firstName": faker.person.firstName(),
        "surname": faker.person.lastName(),
        "phone": faker.phone.number(),
        "email": faker.internet.email(),
        "username": faker.internet.username(),
        "password": faker.internet.password(),
        "birthdate": faker.date.birthdate()
    }
}
const generateProduct = _ => {
    return {
        "title": faker.commerce.productName(),
        "description": faker.commerce.productDescription(),
        "price": faker.commerce.price(),
        "category": faker.commerce.department(),
    }
}

const generateCategory = _ => {
    return {
        "title": faker.commerce.department(),
        "description": faker.commerce.productDescription(),
    }
}

const generateCompany = _ => {
    return{
        "title": faker.company.name(),
    }
}


const users = Array.from({ length: 1 }, generateUser);
const products = Array.from({ length: 2 }, generateProduct);
const categories = Array.from({ length: 3 }, generateCategory);
const companies = Array.from({ length: 4 }, generateCompany);

// save data to file

fs.writeFileSync('users.json', JSON.stringify(users, null, 2));
fs.writeFileSync('products.json', JSON.stringify(products, null, 2));
fs.writeFileSync('categories.json', JSON.stringify(categories, null, 2));
fs.writeFileSync('companies.json', JSON.stringify(companies, null, 2));


// save to csv file
// const json2csv = require('json2csv').parse;
// const csv = json2csv(users)
// const csv1 = json2csv(products)
// const csv2 = json2csv(categories)
// const csv3 = json2csv(companies)
// fs.writeFileSync('products.csv', csv);
// fs.writeFileSync('products.csv', csv1);
// fs.writeFileSync('categories.csv', csv2);
// fs.writeFileSync('companies.csv', csv3);

const csvHeader = Object.keys(users[0]).join(',') + '\n';
let csvRows = '';
for (let i = 0; i < users.length; i++) {
    let csvRow = Object.values(users[i]).join(',') + '\n';
    csvRows += csvRow;
    
}
fs.writeFileSync('users.csv', csvHeader + csvRows);