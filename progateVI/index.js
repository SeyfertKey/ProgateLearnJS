// Push
// Method push digunakan untuk menambahkan nilai baru ke akhir array. Caranya seperti gambar dibawah, ketik arrayName.push(nilai), dImana anda dapat memasukkan nilai baru yang ingin Anda tambahkan ke akhir array didalam () tepat setelah kata push.

const numbers = [1, 2, 3];
console.log(numbers);
numbers.push(10); // tambahakan element array yang baru
console.log(numbers);
console.log('\n');

const characters = ["Ninja Ken", "Baby Ben", "Guru Domba"];
console.log(characters);
// Tambahkan string "Birdie" ke array characters dengan method push
characters.push("Birdie");
// Print array characters
console.log(characters);

// forEach
// Method forEach digunakan untuk memanggil setiap nilai disebuah array secara berurutan. Dibawah ini adalah contoh cara mem-print setiap nilai dalam array numbers sesuai urutannya. Mari kita lihat lebih lanjut cara kerjanya pada slide berikutnya.
console.log('\n');
numbers.forEach((number) => {
    console.log(number);
}) // setiap nilai di array dapat di print dengan console.log 

// Cara kerja forEach
// Argument method forEach adalah Arrow Function yang telah kita pelajari dalam ES6 Study III. Dengan method forEach, setiap nilai array akan diberikan kepada argument arrow function, satu per satu, secara berurutan, dan code dalam arrow function akan diterapkan untuk setiap nilai tersebut. Catatan: sebagian besar method yang akan Anda pelajari dalam pelajaran ini digunakan dengan arrow function.

// Cara Menggunakan forEach
// Berikut adalah contoh cara menggunakan method forEach. Setiap nilai dalam array numbers diberikan untuk argument number dalam arrow function secara satu per satu. Lalu, code didalam arrow function console.log(number) akan diulang untuk setiap nilai tersebut.

// Callback Function
// Function yang di tulis sebagai argument di function lain yang dipanggil di sebut callback function. Kita akan banyak menggunakan callback function di kursus ini, jadi pastikan untuk memahaminya.

// Callback Function Beberapa Baris
// Saat Callback function ditempatkan dalam argument seperti dalam method forEach, code dapat menjadi terlalu panjang. Dalam kasus ini, lebih baik Anda menulis code seperti yang ditunjukkan di bawah ini. Menggunakan beberapa baris setelah { akan membuat code Anda lebih mudah dibaca dan dipahami.

console.log('\n');
// Cetak semua element didalam array characters dengan menggunakan method forEach
characters.forEach((character) => {
  console.log(character);
});

// find
// Method find akan mengembalikan nilai pertama dari sebuah array yang sesuai dengan conditional expression yang ditetapkan. Seperti contoh dibawah, nilai pertama yang lebih besar dari 3, dalam kasus ini adalah 5, akan di berikan ke foundNumber, dan akan di print ke console. Kita akan mempelajari mengenai hal ini di slide berikutnya.
console.log('\n');
const foundNumber = numbers.find((number) => {
    return number > 3;
});
console.log(foundNumber);

// Cara Menggunakan find (1)
// Berikut ini adalah contoh penggunaan method find. Untuk setiap element dari array numbers, nilainya akan ditetapkan pada argument number kemudian dilakukan perulangan code. Baris code { return condition } akan menghasilkan nilai return pertama yang sesuai dengan syarat. find akan berhenti ketika nilai yang sesuai telah ditemukan dan hanya akan menghasilkan return dari nilai tersebut.

// Cara Menggunakan find (2)
// Anda juga dapat menggunakan method find dengan array object. Seperti yang ditunjukkan di bawah ini, property object dapat digunakan dalam kondisi tersebut. Dalam kasus ini, find mengembalikan seluruh object yang berisi property yang sesuai.
console.log('\n');
const characters1 = [
    {id: 1, name: "Ninja Ken"},
    {id: 2, name: "Guru Domba"}
];
const foundCharacter = characters1.find((character) => {
    return character.id === 2;
});
console.log(foundCharacter);

console.log('\n');

const numbers1 = [1, 3, 5, 7, 9];
// Temukan kelipatan 3 dari array numbers dengan menggunakan method find
// dan tetapkan hasilnya ke constant foundNumber 
const foundNumber1 = numbers1.find((number1) => {
  return number1 % 3 === 0;
});
// Print foundNumber
console.log(foundNumber1);

const characters2 = [
  {id: 1, name: "Ninja Ken", age: 6},
  {id: 2, name: "Baby Ben", age: 2},
  {id: 3, name: "Guru Domba", age: 100},
  {id: 4, name: "Birdie", age: 21}
];
// Temukan object dengan id = 3 dari constant characters,
// dan tetapkan nilainya ke constant foundCharacter
const foundCharacter2 = characters2.find((character2) => {
  return character2.id === 3;
});
// Print foundCharacter
console.log(foundCharacter2);

console.log(`\n`);
// Method filter
// Untuk mendapatkan semua nilai yang sesuai dengan kondisi tertentu, gunakan method filter. Method ini membuat dan mengembalikan array baru dengan semua nilai yang sesuai. Contoh di bawah ini menunjukkan cara mendapatkan semua nilai dari array numbers yang "lebih besar dari 3".
const filteredNumbers = numbers1.filter((number) => {
  return number > 3;
});
console.log(filteredNumbers);

// Cara Menggunakan filter
// Dalam contoh berikut, nilai dari array numbers diberikan untuk argument number. Selanjutnya, nilai tersebut akan diperiksa oleh method filter dengan kondisi "angka lebih besar dari 3". Lalu, nilai yang sesuai akan diberikan untuk constant filteredNumbers dalam bentuk array.

// Cara Menggunakan filter 
// Anda juga dapat menggunakan method filter untuk array yang berisi object, seperti method find. Dalam contoh di bawah ini, property object digunakan dalam kondisi tersebut. Dalam kasus ini, object dikumpulkan kapan pun kondisi benar.

console.log(`\n`);
const filteredCharacters = characters2.filter((character) => {
  return character.age > 10;
});
console.log(filteredCharacters);

console.log(`\n`);
const numbers2 = [1, 2, 3, 4];

// Dapatkan semua nomor genap dari array numbers dengan menggunakan method filter,
// dan tetapkan hasilnya ke constant evenNumbers 
const evenNumbers = numbers2.filter((number) => {
  return number % 2 === 0;
});

// Print nilai evenNumbers
console.log(evenNumbers);


const characters3 = [
  {id: 1, name:"Ninja Ken", age: 14},
  {id: 2, name:"Baby Ben", age: 5},
  {id: 3, name:"Guru Domba", age: 100}
];

// Dapatkan characters berumur lebih muda dari 20,
// dan tetapkan hasilnya ke constant underTwenty 
const underTwenty = characters3.filter((character) => {
  return character.age < 20 ;
});

// Print nilai underTwenty
console.log(underTwenty);

// Cara Kerja map
// Method map menerapkan function yang sama untuk setiap nilai didalam array dan me-return hasilnya sebagai array baru. Seperti yang dapat Anda lihat di bawah ini, function doubledNumbers menghasilkan array baru yang berisi nilai hasil perkalian 2 dengan semua nilai didalam array numbers.
console.log(`\n`);
const numbers3 = [1, 2, 3];
console.log(numbers3);
const doubledNumbers = numbers3.map((number) => {
  return number * 2;
});
console.log(doubledNumbers);

// Menggunakan Method map
// Pelajari gambar dibawah, setiap nilai didalam array numbers dimasukan ke argument number secara bergantian. Setelah itu, code return "number * 2" didalam method map akan diterapkan untuk setiap nilai tersebut. Kemudian, hasil perkalian tersebut akan dikembalikan dan diberikan ke constant doubledNumbers sebagai array. Di dalam function map, anda harus memasukkan { nilai return }.

// Menggunakan Method map
// Seperti method yang lainnya, Anda juga dapat menggunakan map dengan array object. Dalam contoh dibawah ini, code dalam function map akan menggabungkan property firstName dan lastName (nilai string) menggunakan method map.
console.log(`\n`);
const names = [
  {firstName: "Kate", lastName: "Jones"},
  {firstName: "Brian", lastName: "Smith"}
];
const fullnames = names.map((name) => {
  return name.firstName + " " + name.lastName;
});
console.log(fullnames);

console.log(`\n`);
const numbers4 = [1, 2, 3, 4];

// Buatlah array baru di constant numbers dengan menggunakan method map,
// dan tetapkan hasilnya ke constant doubledNumbers 
const doubledNumbers1 = numbers4.map((number) => {
  return number * 2;
});

// Print constant doubledNumbers
console.log(doubledNumbers1);


const names1 = [
  {firstName: "Kate", lastName: "Jones"},
	{firstName: "John", lastName: "Smith"},
	{firstName: "Dennis", lastName: "Williams"},
	{firstName: "David", lastName: "Black"}
];

// Buatlah array baru didalam constant names dengan menggunakan method map,
// dan tetapkan sebagai constant fullNames
const fullNames1 = names1.map((name) => {
  return name.firstName + " " + name.lastName;
});

// Print constant fullNames
console.log(fullNames1);
