
// Apa yang dimaksud dengan Function?
// Function adalah kumpulan instruksi. Seperti contoh dibawah ini, function dengan nama introduce memiliki dua operasi yang dapat memprint Halo dan Menyebut nama. Mari kita pelajari cara membuat function di slide berikutnya.

// Introduksi
// 1. Perkenalan
console.log("Halo");
// 2. Menyebut nama
console.log("Nama saya Ninja Ken");

// Mendefinisikan Function
// Untuk membuat function, Anda harus mendefinisikannya. Untuk mendefinisikan function, ketik function(), lalu tulis hal yang Anda ingin function tersebut lakukan didalam {} (tanda kurung kurawal). Kita akan mempelajari lebih dalam tentang definisi function kedepannya.

// const FunctionName = function() {
//     // code ...
// };

console.log(`\n`);
// Memanggil Function
// Definisi function itu penting, namun Anda harus memanggil function untuk benar-benar menggunakannya. Untuk memanggil function dalam contoh di bawah ini, tulis introduce();. Anda dapat melihat cara kerjanya dengan menulis code Anda sendiri dalam latihan ini.
const introduce = function() {
    console.log("Halo");
    console.log("Nama saya Ninja Ken");
};

introduce(); // memanggil function

console.log(`\n`);
const greet = function() {
    console.log("Halo!");
    console.log("Ayo belajar function!");
};
  
// Panggil function greet dibawah
greet();

// Menetapkan Function
// Mari kita pelajari lebih lanjut tentang function. Didalam gambar dibawah, code didalam kotak oranye adalah code function itu sendiri, dimana kita mendefinisikan function tersebut dengan mengunakan constant. Dalam latihan berikutnya, mari kita coba mendefinisikan sebuah function dan memanggilnya.
// Tetapkan function ke constant hello

console.log(`\n`);
const hello = function() {
    console.log("Halo!");
    console.log("Saya Ied Andro Medha");
};
  
// Panggil function yang ditetapkan di constant hello
hello();

console.log(`\n`);
// Arrow Function (1)
// Seperti yang ditampilkan pada contoh dikanan, Anda juga dapat mendefinisikan function dengan () =>, ketimbang dengan function(). Ini adalah fitur baru ES6 dan cara yang lebih mudah untuk mendefinisikan sebuah function. Function yang didefinisikan dengan cara ini disebut Arrow Function (function panah).
const introduce1 = () => { // => arrow function pengganti function()
    console.log("Halo");
    console.log("Nama saya Ninja Ken");
};
introduce1();

// Arrow Function (2)
// Cara pengetikan arrow function tidak memerlukan perubahan apapun selain menggantikan function() dengan () =>. Tidak ada perbedaan juga saat Anda memanggil function yang didefinisikan dengan cara ini. Jadi, mulai dari latihan ini, mari kita gunakan arrow function.

console.log(`\n`);
// Tetapkan arrow function ke constant greet
const greet1 = () => {
    console.log("Halo!");
};
// Panggil function greet
greet1();

// Apa yang dimaksud dengan Argument?
// Nilai data yang diteruskan ke function disebut argument.
// Anda dapat menggunakan nilai function tersebut dengan meneruskan nilainya saat Anda memanggil function tersebut.

// Mendefinisikan Function dengan Argument
// Mari kita definisikan function yang dapat menerima argument.
// Nilai yang diteruskan saat Anda memanggil function disebut argument, namun variable yang tertulis dalam definisi disebut parameter.
// Seperti yang ditampilkan di bawah ini, argument dapat diteruskan ke function dengan menuliskan nama parameter dalam tanda kurung, seperti ini (parameter) =>.

// const FunctionName = (parameter) => {
//     //code
// };

// Memanggil Function dengan Argument
// Untuk memanggil function yang menerima argument, tulis functionName (nilai). Function akan menerima nilai yang ditunjuk dan nilai tersebut akan diberikan untuk parameter. Pada gambar di sebelah kanan, nilai "Ninja Ken" diberikan untuk parameter name saat memanggil function introduce.

console.log(`\n`);
// Menggunakan Nilai Argument Didalam Function
// Anda dapat menggunakan argument didalam function seperti constant dan variable. Pelajari cara function menerima argument melalui gambar dibawah ini.
const introduce2 = (name) => {
    console.log("Halo");
    console.log(`Saya ${name}`); // parameter dapat digunakan sebagai constant didalam function
};
introduce2("Ninja Ken");
introduce2("Guru Domba");

console.log(`\n`);
// Tambahkan parameter name ke function
const greet2 = (name) => {
    // Print pesan "Halo, ____"
    console.log(`Halo, ${name}`);
};
// Panggil function greet dengan "Guru Domba" sebagai argument
greet2("Guru Domba");

// Function dengan Beberapa Argument
// Function dapat menerima beberapa argument. Anda dapat meneruskan beberapa argument dengan menuliskannya bersama dalam tanda kurung dan memisahkannya dengan koma ,. Dalam definisi function pada contoh gambar dikiri, parameter ditulis sebagai parameter1, parameter2, ....

// Menggunakan Beberapa Argument
// Seperti saat Anda mendefinisikan beberapa parameter, gunakan koma , untuk memisahkan beberapa argument saat Anda memanggil function. Penerusan argument harus dalam urutan yang sama seperti parameter, karena cara pendefinisian function akan digunakan untuk pemanggilan fungsi.
console.log(`\n`);
const introduce3 = (name, age) => {
    console.log("Halo");
    console.log(`Saya ${name}`);
    console.log(`Saya berusia ${age} tahun`);
}
introduce3("Ninja Ken", 14);

console.log(`\n`);
// Tambahkan parameter number1 dan number2 kedalam function 
const add = (number1, number2) => {
    // Print penjumlahaan number1 dan number2
    console.log(number1 + number2);
};

// Panggil function dengan 5 dan 7 sebagai argument
add(5, 7);
  
// Apa yang dimaksud dengan Nilai Return?
// Selanjutnya, kita akan mempelajari cara menggunakan hasil function di tempat function tersebut dipanggil. Nilai yang dihasilkan setelah function dipanggil, disebut nilai return. Sebagian besar function digunakan untuk mengirim nilai return kembali ke tempat function tersebut dipanggil. Di bawah ini, function add akan menerima 3 dan 7, lalu nilai return 10 akan dihasilkan.

// Function dengan Nilai Return
// Anda dapat mengembalikan nilai dengan menempatkan statement return di dalam function dengan menulis nilai return. Hal ini akan memungkinkan function menghasilkan output sebagai nilai return.

console.log(`\n`);
// Menggunakan Nilai Return
// Jika function memiliki nilai return, pemanggilan function akan digantikan oleh nilai return setelah function selesai dijalankan. Seperti yang ditampilkan dibawah ini, Anda juga dapat memberikan pemanggilan function untuk constant.
const add1 = (a, b) => {
    return a + b;
};
const sum = add1(1, 3);
console.log(sum);

console.log(`\n`);
const half = (number) => {
    // Return nilai dari variable number dibagi 2
    return number / 2;
};

// Defenisikan constant result
const result = half(130);

// Print pesan "Separuh dari 130 adalah ____"
console.log(`Separuh dari 130 adalah ${result}`);

console.log(`\n`);
// Jenis Nilai Return
// Seperti halnya argument, Anda dapat menggunakan jenis nilai yang berbeda untuk nilai return. Misalnya, nilai boolean (true atau false) akan dikembalikan (return) jika anda menggunakan statement kondisional. Ini sama seperti kondisi di statement if.
const check = (number) => {
    return number % 2 === 0;
};
console.log(check(6)); // True
console.log(check(7)); // False

// Mengakhiri Function dengan Return
// Mari kita pelajari secara lebih terperinci tentang statement return. Anda juga dapat menggunakan return untuk keluar dari sebuah function. Namun, penting diketahui bahwa code dalam tanda kurung kurawal yang sama {}, yang terletak setelah return tidak akan dijalankan.

console.log(`\n`);
const check1 = (number) => {
    // periksa apakah number adalah kelipatan dari 3 dan return-kan hasilnya
    return number % 3 === 0;
};

// Panggil function check dalam kondisi statement if
if ( check(123) ) {
    console.log("Multiple of 3");
} else {
    console.log("Not a multiple of 3");
}

// Constant di Dalam Function
// Argument dari function dan constant yang didefinisikan di dalam sebuah function hanya dapat digunakan didalam function tersebut. Dalam contoh dibawah ini, constant name hanya dapat digunakan didalam function introduce, karena name didefinisikan di dalam function tersebut. Jika Anda mencoba menggunakan constant name diluar functionnya, error akan terjadi.

// Constant di Luar Function
// Jika constant didefinisikan di luar function, constant dapat digunakan didalam dan diluar function. Dalam contoh dibawah ini, constant name didefinisikan di luar function introduce, sehingga dapat digunakan didalam dan diluar function.

// Scope Sebuah Constant
// Setiap constant memiliki bagian yang dapat diakses, dan bagian constant ini kita sebut sebagai constant scope.

console.log(`\n`);
// Definisikan constant name
const name = "Ninja Ken";

const introduce4 = (name) => {
  // Print "Saya ____" diconsole
  console.log(`Saya ${name}`);
};

// Panggil function introduce
introduce4("Guru Domba");

// Print nilai dari constant name
console.log(name);

// Latihan Akhir
// Dilatihan ini kita akan membuat function yang benama getMax, yang berfungsi untuk menemukan nilai tertinggi/maksimum. Seperti contoh dibawah, function getMax menerima tiga angka sebagai argument-nya dan me-return nilai maksimum dari ketiga angka tersebut.

console.log(`\n`);
const number1 = 103;
const number2 = 72;
const number3 = 189;

// Ketik sebuah function getMax untuk mendapatkan nilai maksimum
const getMax = (a, b, c) => {
    let max = a;
    
    if (b > max) {
      max = b;
    }
    if (c > max) {
      max = c;
    }
    
    return max;
  };
  
  // Print "Nilai maksimum adalah __"
  const max = getMax(number1, number2, number3);
  console.log(`Nilai maksimum adalah ${max}`);