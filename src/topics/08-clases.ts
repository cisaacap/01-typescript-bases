export class Person {

    // --- ATRIBUTOS, CONSTRUCTOR Y METODOS ---

    public name: string;
    public dpi?: number;

    constructor(name: string, dpi?: number) {
        this.name = name;
        this.dpi = dpi;
    }
}

// export class Hero extends Person {

//     public superPower: string;

//     constructor(name: string, dpi: number, superPower: string) {
//         super(name, dpi);  // El "super" hace referencia a la clase padre, en este caso Person
//         this.superPower = superPower; // Sobrecarga de datos
//     }

// }

// const ironman = new Hero('Tony Stark', 123456789, 'Genio, Billionario, Playboy, Filántropo');

// console.log(ironman);   

export class Hero {
    constructor(
        superPower: string,
        age: number,
        realName: string,
        person: Person,
    ) {
        // this.person = new Person();
    }
}

const tony = new Person('Tony Stark', 123456789);

const ironman = new Hero('Ironman', 45, 'Tony Stark', tony);

console.log(ironman);