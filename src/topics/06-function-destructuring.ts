export interface Product {
    description: string;
    price: number;
}

// const iPhone: Product = {
//     description: 'iPhone 13',
//     price: 700
// }

// const Samsung: Product = {
//     description: 'Samsung Galaxy S22',
//     price: 650
// }

interface TaxCalculationOptions {
    tax: number;
    products: Product[];
}



export function taxCalculation( options: TaxCalculationOptions ): [number, number] {

    let total = 0;

    const { tax, products } = options;

    products.forEach( ({price}) => {
        total += price;
    });
    return [total, total * tax];
}


// const shoppingCart: Product[] = [iPhone, Samsung];
// const tax = 0.15;

// const result = taxCalculation({ 
//     products: shoppingCart,
//     tax: tax
// });

// const [total, taxAmount] = result;
// const [product1, product2] = shoppingCart;

// console.log('Product 1: ', product1);
// console.log('Product 2: ', product2);
// console.log('Total: ', total);
// console.log('Tax: ', taxAmount);

