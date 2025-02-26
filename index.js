const { faker } = require('@faker-js/faker');
const fs = require('fs');
const readline = require('readline');

// generate data
const jsonToCsv = (jsonArray) => {
    const csvHeader = Object.keys(jsonArray[0]).join(',') + '\n';
    let csvRows = '';
    for (let i = 0; i < jsonArray.length; i++) {
        let csvRow = Object.values(jsonArray[i]).join(',') + '\n';
        csvRows += csvRow;
    }
    return csvHeader + csvRows;

}

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
    return {
        "title": faker.company.name(),
    }
}
//terminal reading
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Kiek duomenu noretumete suvesti i failus?\n', (dataCount) => {
    


const users = Array.from({ length: dataCount }, generateUser);
const products = Array.from({ length: dataCount }, generateProduct);
const categories = Array.from({ length: dataCount }, generateCategory);
const companies = Array.from({ length: dataCount }, generateCompany);

// save data to  json file

fs.writeFileSync('json/users.json', JSON.stringify(users, null, 2));
fs.writeFileSync('json/products.json', JSON.stringify(products, null, 2));
fs.writeFileSync('json/categories.json', JSON.stringify(categories, null, 2));
fs.writeFileSync('json/companies.json', JSON.stringify(companies, null, 2));

// save data to csv

fs.writeFileSync('csv/users.csv', jsonToCsv(users));
fs.writeFileSync('csv/products.csv', jsonToCsv(products));
fs.writeFileSync('csv/categories.csv', jsonToCsv(categories));
fs.writeFileSync('csv/companies.csv', jsonToCsv(companies));

console.log('Data generated successfully'  + dataCount);


rl.close();
})
