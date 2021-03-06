import bcrypt from 'bcryptjs';

const data = {

    users: [
        {
            name: 'Aleksandra',
            email: "admin@gmail.com",
            password: bcrypt.hashSync("1234", 8),
            isAdmin: true,
        },
        {
            name: 'John',
            email: "user@gmail.com",
            password: bcrypt.hashSync("1234", 8),
            isAdmin: false,
        },
    ],

    products: [
        {
            name: 'Sansewieria',
            image: '/images/p1.jpg',
            price: 50,
            countInStock: 10,
            category: 'Sukulenty',
            rating: 4.5,
            numReviews: 10,
            description: 'Bardzo prosta w uprawie roślina',
        },
        {
            name: 'Monstera Deliciosa',
            image: '/images/p2.jpg',
            price: 50,
            countInStock: 0,
            category: 'Monstery',
            rating: 5,
            numReviews: 40,
            description: 'Robi wrażenie!',
        },
        {
            name: 'Coffea Arabica',
            image: '/images/p3.jpg',
            price: 50,
            countInStock: 11,
            category: 'Kawowce',
            rating: 3,
            numReviews: 13,
            description: 'Miło zerknąć na nią pijąc kawę',
        },
        {
            name: 'Trzykrotka',
            image: '/images/p4.jpg',
            price: 50,
            countInStock: 5,
            category: 'Sukulenty',
            rating: 4.5,
            numReviews: 16,
            description: 'Przepiękne ubarwienie',
        },
        {
            name: 'Figowiec sprężysty',
            image: '/images/p5.jpg',
            price: 50,
            countInStock: 3,
            category: 'Fikusy',
            rating: 5,
            numReviews: 17,
            description: 'Ma duże, zdrowe liście',
        },
        {
            name: 'Strelicja',
            image: '/images/p6.jpg',
            price: 50,
            countInStock: 5,
            category: 'Sukulenty',
            rating: 4.5,
            numReviews: 18,
            description: 'Egzotyczny akcent w mieszkaniu',
        },
    ]
}

export default data;