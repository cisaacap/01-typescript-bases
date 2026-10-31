import { Person } from './08-clases';

export function print(message: any): void {
  console.log(message);
}

export function whatsMyType<T>(argument: T): T {

    return argument;

}

let amIString = whatsMyType<string>('Hola Mundo');
let amINumber = whatsMyType<Person>(new Person('John', 30));
let amIArray = whatsMyType<number[]>([1, 2, 3, 4, 5]);

const { name, dpi } = amINumber;

print(amIString.split(' '));
print(name);
print(dpi);
print(amIArray.join(" - "));
