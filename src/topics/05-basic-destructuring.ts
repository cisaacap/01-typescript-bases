// interface AudioPlayer {
//     audioVolume: number;
//     songDuration: number;
//     song: string;
//     details: Details;
// }

// interface Details {
//     author: string;
//     year: number;
// }

// const audioPlayer: AudioPlayer = {
//     audioVolume: 90,
//     songDuration: 36,
//     song: "Dolores",
//     details: {
//         author: "Enjambre",
//         year: 2024
//     }
// }

// // Destructuring Syntax: tipoVariable { nombreVariable: nombreNuevo } = objeto;
// const {
//      song: cancion,
//      details 
// } = audioPlayer;

// const { 
//     author: autor 
// } = details;


// console.log('Canción:', cancion);
// console.log('Autor:', autor);

const dbz: string[] = ['Goku', 'Vegeta', 'Trunks'];

// Destructuring Syntax: tipoVariable [ nombreVariable, nombreVariable ] = arreglo;
const [ p1, p2, p3 ] = dbz;

console.log('Personaje 1:', p1);
console.warn('Personaje 2:', p2);
console.error('Personaje 3:', p3);