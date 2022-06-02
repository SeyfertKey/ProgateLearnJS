
// JavaScript (disingkat JS) adalah bahasa skrip yang menjadi element penting dalam pengembangan web. Saat ini, hampir semua situs web menggunakan JS. 
// JavaScript ES2015 (ES6), yang akan kita bahas pada pelajaran ini, adalah versi terbaru JS yang menjadi populer karena memungkinkan orang untuk coding dengan lebih efisien.

console.log("Selamat datang di ES6 Study I!");
console.log("Ayo belajar bersama Ninja Ken!");
// cara menjalankan (mengeksekusi) code ES6 dan mencetak (menampilkan) rangkaian kata di layar yang disebut console

// Menulis // di awal baris akan menjadikan baris tersebut sebagai komentar. Artinya, baris ini akan diabaikan saat code dijalankan.
// Komentar berguna untuk memberikan catatan dan menjelaskan code Anda, sebagai pengingat pada saat anda mau memperbaruinya ataupun untuk mempermudah tim anda dalam melanjutkan code Anda.

// Cetak hasil 5 tambah 3
console.log(5+3);

// Cetak hasil 20 kurang 8
console.log(20-8);

// Cetak string "4 + 5"
console.log("4 + 5");

// Cetak hasil 8 kali 4 di console.
console.log(8*4);

// Cetak hasil 24 bagi 4 di console.
console.log(24/4);

// Cetak sisa setelah membagi 7 dengan 2 di console.
console.log(7%2);

// Cetak kombinasi dari string "Guru " dan "Domba"
console.log("Guru" + "Domba");

// Cetak kombinasi dari "20" dan "15" (dan jadikan sebagai string)
console.log("20" + "15");

// Variable
// Selanjutnya, kita akan mempelajari variable.
// Anda dapat menganggap variable sebagai "kotak" yang berisi nilai data (string, integer, dsb). Mari kita lihat lebih detail pada slide berikutnya.

// Mendeklarasikan Variable
// Untuk mendeklarasikan variable, cukup tulis let variableName = nilai. Simbol = dalam pemrograman tidak berarti "sama dengan". Ini berarti menetapkan yang ada di sisi kanan ke sisi kiri. let adalah deklarasi bahwa "kita akan menentukan sebuah variable", nama variable ditulis setelah kata kunci ini dan kemudian diberi nilai.

// Cara Menggunakan Variable
// Variable sangatlah mudah untuk digunakan. Seperti yang Anda lihat di bawah, saat variable name diberi nilai, "John", console.log(name) akan mencetak John. Anda dapat menggunakan variable seperti menggunakan nilai di dalamnya.

// Variable dan String
// Seperti gambar dibawah, pada saat mau mencetak variable, Anda tidak perlu meletakkan nama variable dalam tanda kutip. Jika nama variable diletakkan dalam tanda kutip, seperti console.log("name");, name akan ditafsirkan sebagai string dan akan dicetak sebagai name.

// Deklarasikan nama variable dengan nilai string "Ninja Ken"
let name1 = "Ninja Ken";

// Cetakan nilai nama variable
console.log(name1);

// Karakteristik Variable
// Variable dapat digunakan seperti string dan integer yang sudah kita pelajari. Nilai yang diberikan ke variable dapat digabungkan dengan string lain atau digunakan dalam kalkulasi dengan integer lain.

let name2 = "Kite";
console.log("Mr. " + name2);

let number = 11;
console.log(number + 5);

// Kenapa Menggunakan Variable?
// Dalam praktiknya, Anda harus menggunakan banyak nilai yang berbeda saat menulis code. Variable membantu Anda terhindar dari melakukan kesalahan saat menangani dan memperbarui nilai. Manfaat ini tercantum pada gambar di bawah.
// 1. Mudah mengetahui apa yang dipresentasikan nilainya
// 2. Datanya dapat digunakan diberbagai tempat
// 3. Datanya dapat dengan mudah diganti

// Manfaat Variable
// Mari kita lihat contoh "menggunakan data di beberapa tempat" dan "membuat perubahan pada data". Daripada mengulang teks yang sama tiga kali seperti pada contoh di kiri, kita dapat menggunakan variable untuk mengelolanya. Dengan demikian, jika kita ingin mengubah "Selamat Pagi," menjadi "Halo,", kita hanya perlu mengubahnya sekali.
console.log("Selamat pagi, Mr. Kite");
console.log("Selamat pagi, Mr. Kite");
console.log("Selamat pagi, Mr. Kite");

let text = "Selamat pagi,";
console.log(text + " Mr. Kite");
console.log(text + " Mrs. Robinson");
console.log(text + " Ms. Jackson");

// Aturan Penamaan Variable
// Anda dapat memilih nama apa pun untuk variable, namun sebaiknya buatlah nama yang sederhana dan mudah dipahami. Anda juga dapat mengikuti beberapa aturan untuk pengetikan nama variable dalam JS, seperti format penulisan camel case (oddNumber, goodMorning). Merujuk contoh di bawah, coba gunakan nama yang sesuai.
// Benar = sum, oddNumber (Sederhana dan gunakan huruf besar untuk setiap kata kecuali yang pertama)
// Salah = 1number, thing (Menyebabkan Eror dan tidak ideal)

// Deklarasikan variable length
let length = 5;

// Cetak nilai variable length
console.log(length);

// Gunakan variable length untuk mencetak hasil area lingkaran
console.log(length * length * 3);

// Mengupdate Variable
// Anda dapat mengupdate nilai variable Anda. Ketika Anda menetapkan nilai baru ke variable yang telah Anda berikan nilainya, nilai baru tersebut akan menggantikan nilai yang lama. Untuk memberikan nilai baru, Anda tidak perlu menggunakan let, cukup dengan menulis variableName=nilai.

let name3 = "Ninja Ken";
console.log(name3);

// Update nilai variable ke "Birdie"
name2 = "Birdie";

// Cetak nilai dari variable name
console.log(name2);

// Mengupdate Variable Menggunakan Nilainya
// Bagaimana cara menambahkan 3 ke nilai variable number yang telah dideklarasikan? Seperti gambar dibawah, Anda dapat melakukan ini dengan menetapkan number + 3 ke variable number. Dengan cara ini, hasil kalkulasi akan ditetapkan ke variable di sisi kiri.

let number1 = 2;
console.log(number1);
// Nilai number1 menjadi 2

number1 = number1 + 3;
console.log(number1);
// Nilai number1 menjadi 5 karena 2 + 3

// Shorthand (Penulisan Singkat)
// Ada shorthand untuk code seperti number = number + 10. Shorthand ini sering digunakan, jadi coba ingat format-nya sesuai contoh di bawah!
// Penulisan normal -> Penulisan singkat
// x = x + 10 -> x += 10
// x = x - 10 -> x -= 10
// x = x * 10 -> x *= 10
// x = x / 10 -> x /= 10
// x = x % 10 -> x %= 10

let number2 = 7;
console.log(number2);

// Tambahkan 3 ke nilai variable number
number2 += 3;
console.log(number2);

// Bagi nilai variable number dengan 2
number2 /= 2;
console.log(number2);

// Constant
// Apa itu Constant?
// Constant mirip dengan variable, tetapi tidak dideklarasikan dengan let. Cara menentukan constant adalah dengan menggunakan kata kunci const. Lihat lebih lanjut perbedaan antara keduanya pada slide berikutnya.
const name4 = "John";

// Perbedaan Antara Constant & Variable
// Seperti yang dapat Anda lihat pada contoh dikiri, variable (let) dapat di update. Namun, constant tidak dapat di update. Jika Anda mencoba untuk mengupdate nilai constant, seperti di tunjukkan di sini kanan, Anda akan mendapatkan pesan error.
let name5 = "John";
console.log(name5);
// Output : John
name5 = "Kate";
console.log(name5)
// Output : Kate
// Nilai variabel name5 bisa di update karena LET

// name4 = "Kate"; // Eror kalau dijalankan
// console.log(name4);
// Nilai variable name4 TIDAK BISA di update karena CONST