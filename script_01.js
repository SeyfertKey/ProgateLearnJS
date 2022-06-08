
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

// Deklarasikan constant language
const language = "Prancis";

// Cetak nilai constant language
console.log(language);

// Gunakan constant language untuk mencetak "Saya bisa berbicara bahasa ____"
console.log("Saya bisa berbicara bahasa " + language);

// Template Literal
// Hingga saat ini, kita hanya menggunakan simbol tanda tambah (+) untuk menggabungkan string dan constant. Di ES6, Anda bisa melakukan hal ini dengan menggunakan fitur baru yang disebut template literal. Dengan template literal, Anda dapat memasukkan constant (variable) di dalam string, seperti gambar dibawah. Mari kita lihat slide berikutnya untuk mempelajarinya lebih lanjut.
const name6 = "Ninja Ken";
console.log(`Halo ${name6}`);

// Cara Menulis Template Literal
// Seperti contoh dikiri, Anda dapat memasukkan constant dan variable ke string dengan menulis ${someConstant}. Saat melakukan ini, Anda harus meletakkan keseluruhan string di antara dua backtick(`) . Anda juga dapat memasukkan beberapa variable dan constant seperti yang ditampilkan pada contoh dikanan.

const name7 = "Ninja Ken";
const age = 14;
console.log(`${name7} berusia ${age} tahun`);

// Mengetikkan Backtick
// Gambar dibawah mengilustrasikan bagaimana mengetik backtick pada keyboard. Karakter ini mungkin letaknya sedikit berbeda tergantung pada komputer jenis apa yang Anda pergunakan.
// `backtick`
// 'Tanda kutip Tunggal'
// "Tanda kutip" 

const name8 = "Ninja Ken";
const age1 = 14;

// Cetak string "Nama saya adalah ____"
console.log(`Nama saya adalah ${name8}`);

// Cetak string "Hari ini saya berusia ____ tahun"
console.log(`Hari ini saya berusia ${age1} tahun`);

// Statement if
// Percabangan kondisional
// Selanjutnya, mari kita pelajari percabangan kondisional, sebuah konsep penting dalam pemrograman. Saat mempelajari pemrograman, akan ada saatnya dimana Anda ingin menentukan kapan code tertentu ingin dijalankan. Perintah ini disebut percabangan kondisional.

// Struktur Statement if
// Saat statement if digunakan, percabangan kondisional, "jika X lakukan Y", akan diaktifkan. Tulis kondisi tersebut setelah if dan tulis code untuk kapan, kondisi ini akan valid dalam tanda kurung kurawal { }. Pahami cara menulis statement if melalui gambar dibawah ini.

// Menulis Code Statement if
// Mari kita lihat cara kerja code statement if.
// Pertama, baca statement kondisional digambar kiri. Kondisi number > 10 berarti "nilai angka constant lebih besar daripada 10." Saat 12 ditetapkan ke constant number, kondisi ini berlaku, dan codenya akan dijalankan.
const number3 = 12;
if(number3 > 10) {
    console.log("number lebih besar dari 10");
}

// Indentasi untuk Statement if
// Saat menulis statement if, pastikan untuk membuat indentasi. Code yang terindentasi dengan benar akan lebih mudah di baca. Indentasi pada contoh di bawah memperjelas kapan statement if dimulai. Kami sarankan untuk membuat indentasi dengan tombol tab.

// Mencetak Conditional Expression
// Di pelajaran sebelumnya, Anda telah mempelajari cara menggunakan conditional statement if. Selanjutnya, mari kita lihat conditional expression. Seperti yang ditunjukkan di kanan, true di-print di console saat code di statement if berjalan. Apa arti "true" ini?
console.log(number3 > 10);
// Output is True (Benar)

// Boolean
// "true" yang di-print di console pada slide sebelumnya disebut boolean. Tipe data boolean memiliki dua nilai; true dan false. Conditional statement dinilai "true" jika kondisi terpenuhi dan "false" jika sebaliknya. Anda dapat melihat cara kerjanya pada contoh di bawah.
console.log(number3 > 10);
// Output is True (Benar)
console.log(number3 < 10);
// Output is False (Salah)

const number4 = 12;
if(number4 > 10) {
    console.log("Number lebih besar dari 10");
}

if(true) {
    console.log("Number lebih besar dari 10 #True");
}

// Perbandingan Nilai
// Simbol > yang digunakan di conditional statement merupakan operator perbandingan ukuran nilai. Untuk a < b berarti, jika a kurang dari b, statement-nya akan menjadi true, jika a sama dengan atau lebih besar dari b statement akan menjadi false. Sama untuk a <= b, jika a kurang atau sama dengan b, statement akan menjadi true, dan sebaliknya.

// Operator Perbandingan
// a < b adalah a lebih kecil dari b
// a > b adalah a lebih besar dari b
// a <= b adalah a lebih kecil dari atau sama dengan b
// a >= b adalah a lebih besar dari atau sama dengan b

const number5 = 12;
console.log (number5 < 30);
// Output is True (Benar)
console.log (number5 <= 12);
// Output is True (Benar)
console.log (number5 > 30);
// Output is False (Salah)

const age2 = 24;

// Cetak hasil dari age >= 18
console.log(age2 >= 18);

// Cetak hasil dari age < 18
console.log(age2 < 18);

/* Ketika nilai dari age lebih besar atau sama dengan 18
dan cetak "Saya berusia lebih dari 18 tahun" */
if(age2 >= 18) {
  console.log("Saya berusia lebih dari 18 tahun");
}

// Selain operator perbandingan yang kita pelajari sebelumnya, ada juga operator perbandingan untuk menentukan kesamaan antara dua nilai. a === b akan menjadi true jika a dan b sama, dan false jika tidak sama. a !== b adalah kebalikannya. Simbol ini dapat digunakan untuk membandingkan nilai integer dan string.
// Operator Kesetaraan
// a === b adalah a dan b sebanding
// a !== b adalah a dan b tidak sebanding
const number6 = 12;
console.log(number6 === 12);
// Output is True (Benar)
const name9 = "John";
console.log(name9 !== "John");

const password = "ninjaken";
// Ketika nilai password adalah "ninjaken", cetak "Berhasil log in"
if(password === "ninjaken") {
  console.log("Berhasil log in");
}
// Ketika nilai password bukan "ninjaken", cetak "Password salah"
if(password !== "ninjaken") {
  console.log("Password salah");
}

// else
// Jika Kondisi tidak Terpenuhi
// Ada saatnya dimana Anda harus memanggil code yang berbeda jika kondisi statement if adalah false. Seperti yang ditunjukkan dibawah, Anda harus memanggil code yang berbeda untuk mem-print "Nilai kurang dari atau sama dengan 10" jika nilai angka tidak lebih besar dari 10.

// Struktur Statement else
// Seperti pada contoh di bawah, dengan menggabungkan statement else dan if, Anda akan dapat membuat control flow (pengontrolan alur), seperti "jika X, lakukan Y, jika tidak, lakukan Z". Jika kondisi statement if adalah false, code di statement else akan berjalan.
// if (kondisi) {
//     ketika kondisinya true
// } else {
//     ketika kondisinya false
// }

// Menulis Code di Statement else
// Mari kita lihat contoh code yang menggunakan else. Digambar kiri, kita hanya menggunakan statement if untuk menentukan hasil apakah nilai constant number lebih besar dari 10. Sedangkan digambar kanan adalah contoh cara melakukan hal yang sama dengan satu expression kondisi menggunakan statement else.
const number7 = 7;
if (number7 > 10) {
    console.log("Number lebih besar dari 10");
} else {
    console.log("Number lebih kecil atau sama dengan 10");
}

const age3 = 17;
// Ketika kondisi tidak terpenuhi, cetak "Saya berusia dibawah 18 tahun"
if (age3 >= 18) {
  console.log("Saya berusia diatas 18 tahun");
} else {
  console.log("Saya berusia dibawah 18 tahun");
}

// Menambahkan Kondisi
// Mari kita lihat cara menambahkan kondisi lebih banyak ke statement if dan else. Misalnya, kita akan mempelajari cara menambahkan pengontrolan alur untuk menyertakan kondisi yang tidak "lebih besar dari 10" tetapi "lebih besar dari 5".

// else if
// Menulis Statement else if
// Seperti pada contoh di bawah, dengan menambahkan else if (kondisi) antara if dan else, Anda akan dapat menambahkan alur pengontrolan lebih banyak. Mari kita lihat slide berikutnya untuk penjelasan lebih detail.
// if (kondisi1) {
//     ketika kondisi true
// } else if (kondisi2) {
//     ketika kondisi1 false
//     dan kondisi2 true
// } else {
//     ketika tidak ada kondisi yang true
// }

// Code else if
// Mari kita lihat cara penggunaan fungsi else if. Seperti pada contoh dikiri, konten fungsi else if akan berjalan karena conditional statement kedua adalah true. Hasil ini dicetak pada console seperti yang dapat kita lihat disisi kanan.
const number8 = 7;
if (number8 > 10) { // false
    console.log("number lebih besar dari 10");
} else if (number8 > 5) { // true
    console.log("number lebih besar dari 5");
} else {
    console.log("number lebih kecil atau sama dengan 5");
}

const age4 = 17;

/* Ketika age lebih besar atau sama dengan 10, cetak:
"Saya berusia dibawah 18 tahun, namun diatas 9 tahun" */
if (age4 >= 18) {
    console.log("Saya di atas 18 tahun");
} else if (age4 >= 10) {
    console.log("Saya berusia di bawah 18 tahun, namun di atas 9 tahun");
} else {
    console.log("saya dibawah 10 tahun");
}

// Beberapa Kondisi
// Dan (AND)
// Selanjutnya kita akan pelajari cara menggabungkan beberapa kondisi. Pertama, kita akan mempelajari &&. Kondisi 1 && Kondisi 2 berarti "Kondisi 1 dan Kondisi 2" dimana hanya jika semua kondisi adalah true, maka ekspresi adalah true. Contohnya "Lebih besar dari 10 dan lebih kecil dari 30" tidak dapat ditulis sebagai 10 < x < 30. Pada kasus ini, gunakan &&!

// Operator logika- &&
// true && true -> true
// true && false -> false
// false && true -> false
// false && false -> false

// Atau (OR)
// Selanjutnya, kita akan mempelajari simbol yang berarti "OR" (Atau). Atau diekspresikan dalam bentuk ||. Kondisi 1 || Kondisi 2 berarti "Kondisi 1 atau Kondisi 2". Pada kasus ini, di antara beberapa kondisi, jika salah satunya adalah true, maka keseluruhan ekspresi menjadi true.

// Operator logika- ||
// true || true -> true
// true || false -> true
// false || true -> true
// false || false -> false

// Contoh Penggabungan
// Mari kita lihat contoh statement if menggunakan "dan". Pada contoh di kiri, number >= 10 dan number < 100 adalah true, jadi konten fungsinya dipanggil.
const number9 = 31;
if (number9 >= 10 && number < 100) {
    console.log("number berdigit 2");
}

const age5 = 24;
// Tambahkan pernyataan if dengan kondisi yang telah ditentukan
if(age5 >= 20 && age5 < 30) {
  console.log("Saya di usia 20-an tahun");
}

// Apa itu Statement switch?
// Cara lain untuk menggunakan pengontrolan alur, adalah statement switch. Gambar dibawah adalah contoh untuk mendasarkan alur pengontrolan pada nilai constant warna yang menyimpan warna lampu lalu lintas. Anda akan dapat menggunakan statement switch ketika percabangan code tergantung pada nilai tertentu. Lihat slide berikutnya untuk informasi lebih detail!

// Cara Menulis Statement switch
// Code Anda dapat dibagi dengan menambahkan case ke statement switch. Pada contoh dikanan, kata "Berhenti!" dicetak jika constant warna adalah "merah". Kami akan menjelaskan break di slide yang berbeda.

// switch (nilai kondisional) {
//     case nilai1:
//         ketika nilai kondisional sama dengan nilai 1
//         break;
// }
// tambahkan case untuk setiap nilai yang di harapkan

const color = "merah";
switch (color) {
    case "merah":
        console.log("Berhenti!"); // dijalankan ketika constant color benilai "merah"
        break;
}

// Cara Menulis Statement switch (3)
// Pada statement switch, case ditambahkan di setiap cabang logika. Pada contoh dikanan, "kuning" diberikan sebagai nilai case kedua dimana ketika nilainya true, maka "Perlahan!" akan dicetak.

// switch (nilai kondisional) {
//     case nilai1:
//         ketika nilai kondisional sama dengan nilai1
//         break;
//     case nilai2:
//         ketika nilai kondisional sama dengan nilai2
//         break;
// }
// tambahkan case untuk setiap kondisi

switch (color) {
    case "merah":
        console.log("Berhenti!"); // dijalankan ketika constant color benilai "merah"
        break;
    case "kuning":
        console.log("Perlahan"); // dijalankan ketika constant color benilai "kuning"
        break;
}

// Poin Penting Tentang Statement switch
// Selain itu, break sangat penting untuk statement switch. break adalah perintah untuk mengakhiri setiap case di statement switch. Jika tidak ada break, code dari case berikutnya yang cocok juga akan terpanggil. Jangan lupa dengan break saat menggunakan statement switch.
switch (color) {
    case "merah":
        console.log("Berhenti!"); // dijalankan ketika constant color benilai "merah"
    case "kuning":
        console.log("Perlahan"); // dijalankan ketika constant color benilai "kuning"
        break;
}

const rank = 2;
switch (rank) {
  case 1:
    console.log("Anda meraih medali emas!");
    break;

  // Tambahkan case ketika rank adalah 2
  case 2:
    console.log("Anda meraih medali perak!");
    break;
  
  // Tambahkan case ketika rank adalah 3
  case 3:
    console.log("Anda meraih medali perunggu!");
    break;   
}

// Statement switch - default
// Seperti yang telah Anda pelajari, jika nilai kondisi switch cocok dengan nilai untuk kasus tertentu, bagian code itu akan berjalan. Namun, jika nilai tidak cocok dengan kondisi apa pun, kasus default akan dipanggil. Default mirip dengan else yang digunakan untuk statement if.
// const color1 = "hitam";
// switch (color1) {
//     case "merah":
//         ...
//     case "kuning":
//         ...
//     case "hijau":
//         ...
//     default:
//         console.log("Nilai color salah"); // code ini yang dijalankan
//         break;
// }

// Dengan memanfaatkan aspek dari statement switch ini, Anda dapat menggunakannya untuk menyederhanakan control flow (alur pengontrolan) yang rumit yang akan membutuhkan banyak cabang dengan menggunakan statement if dan else if.
// switch (nilai kondisional) {
//     case nilai1:
//         // code
//         break;
//     case nilai2:
//         // code
//         break;
//     default:
//         // code
//         break;
// }

const rank1 = 5;

switch (rank1) {
  case 1:
    console.log("Anda meraih medali emas!");
    break;
  case 2:
    console.log("Anda meraih medali perak!");
    break;
  case 3:
    console.log("Anda meraih medali perunggu!");
    break;
  // Tambahkan default
  default:
    console.log("Semoga sukses dikesempatan berikutnya");
    break;
}