

export interface Passenger {

    name: string;
    children?: string[];

}

const passenger1: Passenger = {
    name: 'Isaac',
}

const passenger2: Passenger = {
    name: 'Melissa',
    children: ['Natalia', 'Luzma'],
}

const printChilder = ( passenger: Passenger ) => {

    const { name } = passenger;
    const howManyChildren = passenger.children?.length || 0; // <- Operador Ternario

    console.log(name, howManyChildren)

}

printChilder( passenger1 );