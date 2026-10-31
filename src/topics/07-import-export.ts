import { type Product, taxCalculation } from './06-function-destructuring';

const shoppingCart: Product[] = [
    {
        description: 'iPhone 13',
        price: 700
    },
    {
        description: 'Samsung Galaxy S22',
        price: 650
    }
];

const [ total, taxAmount ] = taxCalculation({ tax: 0.15, products: shoppingCart });

console.log('Total: ', total);
console.log('Tax: ', taxAmount);