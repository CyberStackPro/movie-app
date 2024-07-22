// src/data/mockData.ts
import { tomatoImage, potatoImage } from "../assets";

export const categories = [
    { id: "vegetables", name: "Vegetables" },
    { id: "fruits", name: "Fruits" },
    { id: "grains", name: "Grains" },
    { id: "dairy-products", name: "Dairy Products" },
    { id: "meat-and-poultry", name: "Meat and Poultry" },
    { id: "fish-and-seafood", name: "Fish and Seafood" },
    { id: "beverages", name: "Beverages" },
    { id: "seeds-and-plants", name: "Seeds and Plants" },
    { id: "tools-and-equipment", name: "Tools and Equipment" },
];

export const vendors = [
    { id: 1, name: "Farm Fresh", location: "Addis Ababa", rating: 4.5 },
    { id: 2, name: "Organic Valley", location: "Adama", rating: 4.7 },
    { id: 3, name: "Green Earth", location: "Hawassa", rating: 4.6 },
];

export const products = [
    {
        id: 1,
        name: "Tomatoes",
        category: "vegetables",
        price: 2.5,
        description: "Fresh organic tomatoes",
        images: [tomatoImage, tomatoImage],
        inStock: true,
        vendorId: 1,
        rating: {
            rate: 3.9,
            count: 120,
        },
    },
    {
        id: 2,
        name: "Bananas",
        category: "fruits",
        price: 1.2,
        description: "Ripe yellow bananas",
        images: [potatoImage, potatoImage],
        inStock: true,
        vendorId: 2,
        rating: {
            rate: 3.9,
            count: 120,
        },
    },
    {
        id: 3,
        name: "Wheat",
        category: "vegetables",
        price: 3.5,
        description: "High-quality wheat grains",
        images: [potatoImage, potatoImage],
        inStock: true,
        vendorId: 3,
        rating: {
            rate: 3.9,
            count: 120,
        },
    },
    {
        id: 4,
        name: "Milk",
        category: "dairy-products",
        price: 1.5,
        description: "Fresh organic milk",
        images: [potatoImage, potatoImage],
        inStock: true,
        vendorId: 1,
        rating: {
            rate: 3.9,
            count: 120,
        },
    },
    {
        id: 5,
        name: "Chicken Breast",
        category: "meat-and-poultry",
        price: 5.0,
        description: "Fresh chicken breast",
        images: [potatoImage, potatoImage],
        inStock: true,
        vendorId: 2,
        rating: {
            rate: 3.9,
            count: 120,
        },
    },
    {
        id: 6,
        name: "Salmon",
        category: "fish-and-seafood",
        price: 10.0,
        description: "Fresh salmon fillets",
        images: [tomatoImage, tomatoImage],
        inStock: true,
        vendorId: 3,
        rating: {
            rate: 3.9,
            count: 120,
        },
    },
    {
        id: 7,
        name: "Orange Juice",
        category: "beverages",
        price: 3.0,
        description: "Freshly squeezed orange juice",
        images: [potatoImage, potatoImage],
        inStock: true,
        vendorId: 1,
        rating: {
            rate: 4.9,
            count: 430,
        },
    },
    {
        id: 8,
        name: "Corn Seeds",
        category: "seeds-and-plants",
        price: 1.8,
        description: "High-quality corn seeds",
        images: [tomatoImage, tomatoImage],
        inStock: true,
        vendorId: 2,
        rating: {
            rate: 3.9,
            count: 120,
        },
    },
    {
        id: 9,
        name: "Gardening Tools Set",
        category: "tools-and-equipment",
        price: 20.0,
        description: "Complete gardening tools set",
        images: [potatoImage, potatoImage],
        inStock: true,
        vendorId: 3,
        rating: {
            rate: 4.9,
            count: 220,
        },
    },
];

export const users = [
    {
        id: 1,
        name: "John Doe",
        email: "john@example.com",
        address: "123 Main St, Addis Ababa",
        phone: "123-456-7890",
        orders: [
            { orderId: 1, productId: 1, quantity: 2 },
            { orderId: 2, productId: 3, quantity: 1 },
        ],
    },
    {
        id: 2,
        name: "Jane Smith",
        email: "jane@example.com",
        address: "456 Elm St, Adama",
        phone: "098-765-4321",
        orders: [
            { orderId: 3, productId: 2, quantity: 5 },
            { orderId: 4, productId: 4, quantity: 1 },
        ],
    },
];
