let skills: string[] = ['Bash', 'Counter', 'Heal'];

interface Character {
    name: string;
    hp: number;
    skills: string[];
    baseDamage: 100 | 200 | 300;
}

const Stolas: Character = {
    name: 'Strolas',
    hp: 100,
    skills: skills,
    baseDamage: 200
}

Stolas.baseDamage = 300;

console.table(Stolas);

export {}

