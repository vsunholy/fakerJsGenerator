import { faker } from '@faker-js/faker';

// const randomName = faker.person.fullName(); 
// const randomFirstName = faker.person.firstName(); 
// const randomSurname = faker.person.lastName();

// console.log(randomName)
// console.log(randomFirstName)
// console.log(randomSurname)
// sugeneruoti 100 netikru users/people su siais duomenimias: fist name,surname,phone,email,password,birthdate
// su faker js

const user = {
    "firstName": faker.person.firstName(),
    "surname": faker.person.lastName(),
    "phone": faker.phone.number(),
    "email": faker.internet.email(),
    "username": faker.internet.username(),
    "password": faker.internet.password(),
    "birthdate": faker.date.birthdate()
}

const product= {
    "title": faker.commerce.productName(),
    "description": faker.commerce.productDescription(),
    "price": faker.commerce.price(),
    "category": faker.commerce.department(),
    
}











console.log(product);
console.log(user);

