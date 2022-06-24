// Buat agar constant dog dapat diakses dari file berikut
import Dog from "./dog.mjs";
import readlineSync from "readline-sync";

const name = readlineSync.question("Ketik nama Anda : ");
const age = readlineSync.questionInt("Ketik umur Anda : ");
const breed = readlineSync.question("Ketik ras Anda : ");
console.log('\n');

const dog1 = new Dog(name, age, breed);
const dog2 = new Dog("Ben", 2, "Poodle");

// Export constant dog
export {dog1, dog2};

// Export default hanya dapat digunakan untuk satu nilai dalam satu file. Karena nilai export default akan secara otomatis di-import saat file tersebut di-import, maka hanya satu nilai yang diperbolehkan. Jika Anda ingin meng-export beberapa nilai, gunakan export bernama yang akan kita bahas di slide berikutnya.
