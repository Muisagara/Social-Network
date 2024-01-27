const faker = require('faker');

// Generate random people's names, usernames, and emails
const numberOfPeople = 5; // Change this number to generate more or fewer people

const people = [];

for (let i = 0; i < numberOfPeople; i++) {
    const person = {
        name: faker.name.findName(),
        username: faker.internet.userName(),
        email: faker.internet.email()
    };
    people.push(person);
}

console.log(people);
