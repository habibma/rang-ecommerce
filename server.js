import { createServer, Model, Factory, Response } from "miragejs"
import { faker } from '@faker-js/faker';
import { nanoid } from 'nanoid';

import user from './src/assets/imgs/user.png'

createServer({
    models: {
        customer: Model,
        product: Model,
        user: Model
    },

    factories: {
        customer: Factory.extend({
            id() {
                return `ID-${nanoid(4)}`
            },
            userName() {
                return faker.internet.userName()
            },

            email() {
                return faker.internet.email()
            },

            avatar() {
                return faker.image.avatar() || user
            },

            amountOfSale() {
                return Math.floor(Math.random() * 1000) + 1
            },

            isVerified() {
                return false
            }
        }),
    },

    routes() {
        this.namespace = "/api"
        this.logging = false
        this.timing = 1000;

        this.get("/customers", (schema, request) => {
            return schema.customers.all();
        });
        this.get("/products", (schema, request) => {
            return schema.products.all();
        });

        this.get("/customers/:id", (schema, request) => {
            const id = request.params.id
            return schema.customers.find(id)
        })
        this.get("/products/:id", (schema, request) => {
            const id = request.params.id
            return schema.products.find(id)
        })

        this.post("/customers", (schema, request) => {
            let attrs = JSON.parse(request.requestBody)
            console.log(attrs)
            return schema.customers.create(attrs)
        })
        this.post("/products", (schema, request) => {
            let attrs = JSON.parse(request.requestBody)
            console.log(attrs)
            return schema.products.create(attrs)
        })

        this.patch("/customers/:id", (schema, request) => {
            let newAttrs = JSON.parse(request.requestBody)
            let id = request.params.id
            let customer = schema.customers.find(id)

            return customer.update(newAttrs)
        })
        this.patch("/products/:id", (schema, request) => {
            let newAttrs = JSON.parse(request.requestBody)
            let id = request.params.id
            let product = schema.customers.find(id)
            return product.update(newAttrs)
        })

        this.delete("/customers/:id", (schema, request) => {
            let id = request.params.id
            return schema.customers.find(id).destroy()
        })
        this.delete("/products/:id", (schema, request) => {
            let id = request.params.id
            return schema.products.find(id).destroy()
        })

        this.post("/login", (schema, request) => {
            const { username, password } = JSON.parse(request.requestBody)
            const foundUser = schema.users.findBy({ username, password })
            if (!foundUser) {
                return new Response(401, {}, { message: "No user with those credentials found!" })
            }

            foundUser.password = undefined
            return {
                user: foundUser,
                token: "Enjoy your pizza, here's your tokens."
            }
        })

        this.passthrough('https://fakestoreapi.com/**') // to pass API requests go to an external domain
        this.passthrough('https://identitytoolkit.googleapis.com/**')  // Allow all requests containing /firebase
        this.passthrough("https://firestore.googleapis.com/**")
    },

    seeds(server) {
        // Seed some initial data (optional)
        server.create("customer", { userName: "Habib", email: "someone@example.com", amountOfSale: 1000 });
        server.create("customer", { email: "someoneelse@example.com", amountOfSale: 2000 });
        server.create("customer", { amountOfSale: 3000 });
        server.create("customer")

        for (let i = 2; i <= Math.floor(Math.random()* 10) +2 ; i++) {
            server.create("product", {
                id: i,
                productName: faker.commerce.productName(),
                price: Math.floor(Math.random() * 1000) + 0.01,
                image: faker.image.url(640, 480, 'technics', true),
                category: faker.commerce.department(),
                color: "red",
                inStock: true,
                description: faker.lorem.paragraphs(2),
            });
        }

        server.create("user", { id: "123", email: "b@b.com", username:"admin", password: "123", name: "Bob" })
    }
})
