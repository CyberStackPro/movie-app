// src/data/mockData.js or mockData.ts
export const navItems = [
    { id: 1, name: "Home", link: "/" },
    {
        id: 2,
        name: "Products",
        link: "/products",
        subMenu: [
            { name: "Vegetables", link: "/products/vegetables" },
            { name: "Fruits", link: "/products/fruits" },
            { name: "Dairy", link: "/products/dairy" },
            { name: "Meat", link: "/products/meat" },
            { name: "Fish & Seafood", link: "/products/fish-and-seafood" },
            { name: "Beverages", link: "/products/beverages" },
            { name: "Seeds & Plants", link: "/products/seeds-and-plants" },
            { name: "Tools & Equipment", link: "/products/tools-and-equipment" }
        ]
    },
    { id: 3, name: "About Us", link: "/about" },
    { id: 4, name: "Contact", link: "/contact" },
    // { name: "Cart", link: "/cart" }
];

