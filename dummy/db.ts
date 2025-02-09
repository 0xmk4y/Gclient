import { Admin, User, Course, Invoice } from "@/types/types";

const admins: Admin[] = [
    {
        id: 1,
        firstName: "John",
        lastName: "Doe",
        email: "john.doe@example.com",
        password: "password123",
        contact: "123-456-7890",
        createdAt: new Date(),
        updatedAt: new Date(),
    },
    {
        id: 2,
        firstName: "Jane",
        lastName: "Smith",
        email: "jane.smith@example.com",
        password: "password123",
        contact: "098-765-4321",
        createdAt: new Date(),
        updatedAt: new Date(),
    },
];

const users: User[] = [
    {
        id: 1,
        firstName: "Alice",
        lastName: "Johnson",
        email: "alice.johnson@example.com",
        password: "password123",
        contact: "111-222-3333",
        createdAt: new Date(),
        updatedAt: new Date(),
    },
    {
        id: 2,
        firstName: "Bob",
        lastName: "Brown",
        email: "bob.brown@example.com",
        password: "password123",
        contact: "444-555-6666",
        createdAt: new Date(),
        updatedAt: new Date(),
    },
];

const courses: Course[] = [
    {
        id: 1,
        title: "Introduction to Programming",
        price: 99.99,
        duration: "4 weeks",
        instructor: "Dr. Smith",
        learners: 100,
        createdAt: new Date(),
        updatedAt: new Date(),
    },
    {
        id: 2,
        title: "Advanced JavaScript",
        price: 149.99,
        duration: "6 weeks",
        instructor: "Prof. Johnson",
        learners: 50,
        createdAt: new Date(),
        updatedAt: new Date(),
    },
];

const invoices: Invoice[] = [
    {
        id: 1,
        learner: "Alice Johnson",
        email: "alice.johnson@example.com",
        amount: 99.99,
        date: new Date(),
        status: "Paid",
        createdAt: new Date(),
        updatedAt: new Date(),
    },
    {
        id: 2,
        learner: "Bob Brown",
        email: "bob.brown@example.com",
        amount: 149.99,
        date: new Date(),
        status: "Pending",
        createdAt: new Date(),
        updatedAt: new Date(),
    },
];

export { admins, users, courses, invoices };