import { createServer, Model, Factory } from "miragejs"
import { faker } from '@faker-js/faker';
import { nanoid } from 'nanoid';

import user from './src/assets/imgs/user.png'


createServer({
    models: {
        customer: Model,
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


        this.get("/customers", (schema, request) => {
            return schema.customers.all(); 
          });

        this.get("/customers/:id", (schema, request) => {
            const id = request.params.id
            return schema.customers.find(id)
        })

        this.post("/customers", (schema, request) => {
            let attrs = JSON.parse(request.requestBody)
            console.log(attrs)
            return schema.customers.create(attrs)
        })

        this.patch("/customers/:id", (schema, request) => {
            let newAttrs = JSON.parse(request.requestBody)
            let id = request.params.id
            let customer = schema.customers.find(id)

            return customer.update(newAttrs)
        })

        this.delete("/customers/:id", (schema, request) => {
            let id = request.params.id

            return schema.customers.find(id).destroy()
        })

        this.passthrough('https://fakestoreapi.com/**') // to pass API requests go to an external domain
        this.passthrough('https://identitytoolkit.googleapis.com/**')  // Allow all requests containing /firebase


    },

    seeds(server) {
        // Seed some initial data (optional)
        server.create("customer", { userName: "Habib", email: "someone@example.com", amountOfSale: 1000 });
        server.create("customer", { email: "someoneelse@example.com", amountOfSale: 2000 });
        server.create("customer", { amountOfSale: 3000 });
        server.create("customer")
    }
})
