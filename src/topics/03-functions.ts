// function sum(a: number, b: number): number {
//     return a + b;
// }


// const addNumbers = (a: number, b: number): string => {
//     return `${a + b}`;
// };

// function multiply(firstNumber: number, secondNumber?: number, base: number = 2): number {
//     return firstNumber * base;
// }

// const result: number = sum(1, 2);
// const result2: string = addNumbers(1, 2);
// const result3: number = multiply(2);

// console.log({ result, result2, result3 });

interface Character {
    name: string;
    hp: number;
    showHp: () => void;
}


const stolas: Character = {
    name: 'Strolas',
    hp: 100,
    showHp() {
        console.log(`HP: ${this.hp}`);
    }
}

const healCharacter = (character: Character, amount: number  ) => {
    if (character.hp === 100) {
        console.warn(`${character.name} is already at full health.`);
        return;
    } else {
        character.hp += amount;
    }
}

healCharacter(stolas, 0);

stolas.showHp(); 
