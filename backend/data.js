import bcrypt from 'bcryptjs';

const data ={
    users: [
        {
            name: 'Fizza',
            email: 'fizzasurahio98@gmail.com',
            password: bcrypt.hashSync('1234', 8),
            isAdmin: true,
        },
        {
            name: 'Zainab',
            email: 'k181191@nu.edu.pk',
            password: bcrypt.hashSync('1234', 8),
            isAdmin: false,
        },
    ],
    products: 
    [
        {
            
            name: 'Crushed Ice',
            category: 'Ice',
            image:'/img/prod-crushed-ice-300x240.jpg',
            price:3.50,
            countInStock: 10,
            description:'$3.50 per bag',
            dimension:'20lb bag',
        },
        {
            
            name: 'Rock',
            category: 'Ice',
            image:'/img/prod-rock.jpg',
            price:0.65,
            countInStock: 20,
            description:'0.65 per cube/$13 bag of 20/standard',
            dimension:'2.5" x 2" x 2"',
        },
        {
            
            name: 'Skinny Rock',
            category: 'Ice',
            image:'/img/prod-skinny-rock.jpg',
            price:0.55,
            countInStock: 0,
            description:'0.55 per cube/$11 bag of 20/standard rock glass',
            dimension:'2.5" x 1.75" x 1.75"',
        },
        {
            
            name: 'Cube',
            category: 'Ice',
            image:'/img/prod-cube-300x240.jpg',
            price:0.55,
            countInStock: 40,
            description:'0.55 per cube/$11 bag of 20/standard rock glass',
            dimension:'2" x 2" x 2"',
        },
        {
            
            name: 'Mini Cube',
            category: 'Ice',
            image:'/img/prod-mini-cube-300x240.jpg',
            price:0.50,
            countInStock: 15,
            description:'0.50 per cube/$10 bag of 20/small or sloped rock glass',
            dimension:'1.75" x 1.75" x 1.75"',
        },
        {
            
            name: '3" Punch Block',
            category: 'Ice',
            image:'/img/prod-P.jpg',
            price:1.65,
            countInStock: 55,
            description:'$1.65 per block/Hand-carved spheres or diamonds',
            dimension:'3" x 3" x 3"',
        },
        {
            
            name: '4" Punch Block',
            category: 'Ice',
            image:'/img/prod-Punchblock.jpg',
            price:3.00,
            countInStock: 65,
            description:'$3.00 per block',
            dimension:' 4" x 4" x 4"',
        },
        {
            
            name: '5" Punch Block',
            category: 'Ice',
            image:'/img/prod-Punch.jpg',
            price:5.00,
            countInStock: 10,
            description:'$5.00 per block',
            dimension:'5" x 5" x 5"',
        },
        {
            
            name: '6" Punch Block',
            category: 'Ice',
            image:'/img/prod-Punchblock-300x240.jpg',
            price:8.00,
            countInStock: 30,
            description:'$8.00 per block',
            dimension:'6" x 6" x 6"',
        },
        {
            
            name: 'Spear',
            category: 'Ice',
            image:'/img/prod-Spear.jpg',
            price:0.65,
            countInStock: 50,
            description:'0.65 per cube/$6.50 bag of 10/collins glass',
            dimension:'4.5" x 1.5" x 1.5"',

        },
        {
            
            name: 'Small "Globe"',
            category: 'Ice',
            image:'/img/prod-sm-globe.jpg',
            price:1.50,
            countInStock: 60,
            description:'$1.50 per globe/$15 bag of 10',
            dimension:'2.25" diameter',
        },
        {
            
            name: 'Large "Globe"',
            category: 'Ice',
            image:'/img/prod-sm-globe-300x240.jpg',
            price:2.50,
            countInStock: 30,
            description:'$2.50 per globe/$25 bag of 10',
            dimension:'2.75" diameter',
        },
    ],
};

export default data;