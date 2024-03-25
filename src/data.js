import { faker } from '@faker-js/faker';
import { nanoid } from 'nanoid';


// Sales
export const sales = [];
for (let i = 1; i <= 5; i++) {
    sales.push({
        id: i,
        userName: faker.internet.userName(),
        email: faker.internet.email(),
        avatar: faker.image.avatar(),
        amountOfSale: Math.floor(Math.random() * 1000) + 1, // Random amount between $1 and $1000
    });
}


// Products
export const products = [
    {
        id: 1,
        productName: faker.commerce.productName(), // Random product name
        price: Math.floor(Math.random() * 1000) + 0.01, // Random price between $0.01 and $999.99 (two decimals)
        image: faker.image.url(640, 480, 'technics', true), // Random image URL (640x480, technics category, placeholder)
        category: faker.commerce.department(), // Random category (e.g., Electronics, Clothing)
        description: faker.lorem.paragraphs(2), // Random description (two paragraphs)
    },
    // ... repeat for products 2-10 by a for loop underneath
];

for (let i = 2; i <= 10; i++) {
    products.push({
        id: i,
        productName: faker.commerce.productName(),
        price: Math.floor(Math.random() * 1000) + 0.01,
        image: faker.image.url(640, 480, 'technics', true),
        category: faker.commerce.department(),
        description: faker.lorem.paragraphs(2),
    });
}

//single product

//producing fake activities
const activities = [];
for (let i = Math.floor(Math.random() * 10); i < 10; i++) {
    const newItem = {
        text: `Purchased by ${faker.commerce.productName()}`,
        time: "2024-03-19T10:00:00Z",
    };
    activities.push(newItem);
}

export const singleProduct = {
    id: nanoid(),
    title: faker.commerce.productName(),
    img: faker.image.url(480, 480, 'technics', true),
    info: {
        title: faker.commerce.productName(),
        price: 99.99, // Replace with actual price
        category: faker.commerce.department(),
        description: faker.lorem.paragraphs(2), // Replace with actual description
    },
    activities: activities
    // more purchase history objects will be added here
    ,
};

//single customer
export const singleCustomer = {
    id: nanoid(),
    title: faker.internet.userName(),
    img: faker.image.url(480, 480, 'animals', true),
    info: {
        userName: faker.internet.userName(),
        amount: 99.99, // Replace with actual price
    },
    activities: [
        {
            text: "Purchased by John Doe",
            time: "2024-03-19T10:00:00Z",
        },
        {
            text: "Purchased by John Doe",
            time: "2024-03-19T10:00:00Z",
        },
        {
            text: "Purchased by John Doe",
            time: "2024-03-19T10:00:00Z",
        },
        // more purchase history objects will be added here
    ],
};