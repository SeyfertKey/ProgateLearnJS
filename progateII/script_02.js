// Review Study Ⅰ
// Pertama, mari kita review cara menggunakan variable, yang telah kita pelajari dalam JavaScript Study Ⅰ (ES6). Untuk me-reviewnya, mari kita coba mem-print angka dari 1 hingga 5 secara berurutan di console seperti yang ditunjukkan gambar dibawah ini.
console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);

console.log();
// Me-review Variable
// Seperti yang dapat Anda lihat digambar kiri, Anda dapat mem-print angka menggunakan console.log untuk setiap angkanya. Namun, dalam pelajaran ini, kita akan menggunakan variable number seperti yang ditunjukkan digambar kanan dan membuat variable tersebut menambahkan 1 kedirinya sendiri secara otomatis.
let number = 1;
console.log('\n' + number); // number = 1

number += 1; // tambahkan 1 ke setiap variabel number
console.log(number);

// Deklarasikan variable number
let number1 = 1;

// Print nilai dari variable number, dan tambahkan dengan 1
console.log('\n' + number1);
number1 += 1;

// Salin kedua baris diatas dan tempelkan dibaris bawah sebanyak 4 kali
console.log(number1);
number1 += 1;
console.log(number1);
number1 += 1;
console.log(number1);
number1 += 1;
console.log(number1);
number1 += 1;

// Loop while
// Apa yang dimaksud
// dengan Iterasi?
// Selanjutnya, mari kita pikirkan cara mem-print angka dari 1 hingga 100! Seperti pada halaman sebelumnya, kita dapat menulis code yang sama sebanyak 100 kali, namun hal tersebut akan sangat membosankan. Dalam kasus ini, menggunakan iterasi akan memudahkan Anda untuk melakukannya. Mari kita lihat cara kerja iterasi pada slide berikutnya.

// Salah satu cara melakukan iterasi adalah dengan menggunakan loop while. Loop ini ditulis seperti yang ditampilkan dalam contoh digambar bawah. "Selama kondisinya adalah true", code didalam tanda kurung kurawal {} akan diulang. Anda tidak perlu menempatkan titik koma diakhir code loop while.
// while (kondisi) {
    // code ...
// } // tidak membutuhkan titik koma

// Menggunakan Loop while (1)
// Perhatikan beberapa contoh loop while untuk mem-print angka dari 1 hingga 100. Pertama, kita akan menulis code yang ingin diulangkan didalam loop while (code dikotak hijau gambar kiri). Selanjutnya, kita akan menempatkannya didalam { } (tanda kurung kurawal) milik loop while seperti yang ditunjukkan digambar kanan.

// Menggunakan Loop while (2)
// Selanjutnya, mari kita tambahkan kondisi untuk menentukan kapan code berhenti diulang. Disini, kita ingin mengulang konten hingga number kurang dari atau sama dengan 100, oleh karena itu, kita akan menulis ekspresi kondisional seperti yang ditunjukkan digambar kiri. Code didalam {} akan terus diulang selama kondisi yang ditetapkan (number <= 100) adalah true.
console.log('\n');
// Deklarasikan variable number
let number2 = 1;
// Tambahkan while loop dibawa
while (number2 <= 100) {
    console.log(number2);
    number2 += 1;
}

// Catatan Penting tentang Loop while
// Anda harus berhati-hati saat menggunakan loop while karena pada akhirnya kondisi haruslah false, agar dapat mencegah pengulangan yang akan menimbulkan error. Seperti di gambar kiri, code untuk mengupdate number tidak ada, sehingga menyebabkan code diulang tanpa henti, kondisi ini disebut loop infinit (loop tak terbatas).

// Loop for
// Ada cara lain untuk melakukan iterasi: loop for. Meskipun pada dasarnya memberikan hasil yang sama, loop for dapat ditulis dalam bentuk yang lebih sederhana dibandingkan loop while. Mari kita pelajari secara lebih terperinci dalam slide berikut ini.

// Cara Menulis Loop for
// Dalam loop for, definisi variable, kondisi, dan pembaharuan variable semuanya ditulis dalam tanda kurung dan dipisahkan oleh titik koma. Contoh disebelah kiri adalah loop while dan disebelah kanan adalah loop for. Perhatikan bagian yang digarisbawahi saat Anda membandingkan keduanya
console.log('\n');
for (let number3 = 1 ; number3 <= 100 ; number3 ++) {
    console.log(number3);
}

// Penyingkatan Penulisan Operator
// Code number += 1 dapat disingkat menjadi number++ untuk kemudahan Anda. Selain itu, untuk mengurangi (pengurangan), number -= 1 dapat ditulis sebagai number--. Code untuk menulis loop while dan for dapat disingkat seperti yang ditunjukkan disini, jadi cobalah mengingatnya!

// Menerapkan Iterasi
// Terakhir, mari kita coba latihan tingkat advance menggunakan loop for. Kali ini, kita akan tetap mem-print angka dari 1 hingga 100. Namun, bila angka adalah kelipatan 3, kita akan mem-print "Kelipatan 3".
// Selesikan code loop for dibawah ini
console.log('\n');
for (let number = 1 ; number <= 100 ; number ++) {
    // Gunakan statement if untuk mem-print string "Kelipatan 3" ketika angka yang diprint adalah angka kelipatan 3
    if(number % 3 === 0) {
      console.log("Kelipatan 3");
    } else {
      console.log(number);
    }
}

// Apa yang dimaksud dengan array?
// Menangani Beberapa Nilai
// Mari kita pelajari cara menangani beberapa nilai. Misalnya, bila terdapat nama buah-buahan yang berbeda sebagai nilai, membuat istilah seperti "daftar buah" akan lebih mudah dibandingkan mendefinisikannya sebagai variable yang terpisah.
const fruit1 = "Apel";
const fruit2 = "Pisang";
const fruit3 = "Jeruk";
// semua code ini bisa dikombinasikan

// Bila Anda ingin mengelola beberapa nilai sebagai grup, array akan sangat bermanfaat. Array dibuat seperti [nilai1, nilai2, nilai3]. Setiap nilai dalam array disebut element. Saat menggunakan array, beberapa string atau integer dapat dituliskan secara bersamaan seperti yang ditampilkan digambar kanan.

// Array bernilai string
["Apel", "Pisang", "Jeruk"]

// Array bernilai integer
[21, 43, 12]

console.log('\n');
// Memberikan Array
// Karena array juga merupakan nilai, array dapat dibuat sebagai constant atau variable. Dalam kasus ini, nama constant yang akan diberikan untuk array sering kali berada dalam bentuk plural seperti, fruits, names, dsb. Bila Anda mem-print dengan console.log(constantName) seperti yang ditunjukkan di sebelah kiri, array akan di-print di console.
const fruits = ["Apel", "Pisang", "Jeruk"];
console.log(fruits);

console.log('\n');
// Tetapkan array yang diberikan sebagai constant animals
const animals = ["anjing", "kucing", "domba"];

// Print constant animals
console.log(animals);

// Nomor Index
// Setiap element array memiliki nomor index. Hal penting untuk Anda ingat: nomor index dimulai dari 0.

console.log('\n');
// Mendapatkan Element Array
// Untuk mendapatkan element array, gunakan nomor index seperti berikut: array[indexNumber]. Seperti contoh dibawah, untuk mendapatkan "apel" Anda dapat menulis fruits[0] (0 adalah nomor index "apel").
console.log(fruits[0]); // nomor index "Apel"
console.log(fruits[2]); // nomor index "Jeruk"

console.log('\n');
// Print element array pertama
console.log(animals[0]);

// Print element array ketiga
console.log(animals[2]);

console.log('\n');
// Mengupdate Element Array
// Seperti dalam contoh dikiri, memberikan nilai untuk element array akan mengupdate element.
console.log(fruits[0]);
console.log(fruits);
fruits[0] = "anggur"; // mengupdate nilai element index 0
console.log(fruits[0]);
console.log(fruits);

console.log('\n');
console.log(animals);
// Gantikan element ketiga dari array menjadi "kelinci"
animals[2] = "kelinci";

// Print array ketiga dari constant animal ke console
console.log(animals[2]);
console.log(animals);

console.log('\n');
// Melakukan Iterasi dengan Array
// Ada kalanya iterasi digunakan dengan array. Di bab ini, mari kita gunakan loop for untuk mendapatkan setiap element didalam array.

// Arrays dan Loop for
// Seperti gambar dikiri, array fruits memiliki 3 element, untuk mem-print semua nilainya kita memerlukan tiga code console.log(). Bandingkan dengan penggunaan loop for digambar kanan, hasil yang sama dapat dicapai dengan lebih efisien. Harap diingat bahwa urutan array dihitung dari 0, karena itulah kondisi loop dimulai dengan i = 0.
for (let i = 0 ; i < 3 ; i++) {
  console.log(fruits[i]);
}

console.log('\n');
// Gunakan loop for untuk mem-print nilai animals di console secara berurutan
for (let i = 0 ; i < 3 ; i++) {
  console.log(animals[i]);
}

console.log('\n');
// Property length
// Untuk mendapatkan jumlah element dalam array, Anda dapat menggunakan arrayName.length seperti gambar dibawah. Selain itu, dengan length, kita dapat merubah aturan loop for dari latihan sebelumnya ke kondisi digambar sebelah kanan. Penulisan seperti ini sangat umum digunakan pada saat menangani array dalam loop.
console.log(fruits.length);
for(let i = 0 ; i < fruits.length ; i++) {
  console.log(fruits[i]);
}

console.log('\n');

const animals1 = ["anjing", "kucing", "domba", "kelinci", "monyet", "harimau", "beruang", "gajah"];

// Gunakan property length untuk mem-print jumlah element di array
console.log(animals1.length);

// Gunakan property length untuk mengubah kondisi dibawah
for (let i = 0; i < animals1.length; i++) {
  console.log(animals1[i]);
}

// Apa yang dimaksud dengan Object?
// Selanjutnya, mari kita pelajari object JavaScript. Object, seperti array, digunakan untuk mengelompokkan dan mengelola beberapa nilai. Bila array mengatur nilai secara berurutan berdasarkan index, objects mengelola nilai dengan memberikannya nama yang disebut property.

// Array
// ["nilai1", "nilai2", "nilai3"]

// Membuat Object
// Object dibuat seperti berikut: {property1: nilai1, property2: nilai2}. Bila element array ditempatkan dalam tanda kurung petak [], object harus ditempatkan dalam tanda kurung kurawal {}. Selanjutnya, setiap property dan nilai object harus dihubungkan dengan tanda titik dua (:), dan seperti array, setiap elementnya harus dipisahkan dengan koma.

// Object
// {name : "Shuriken", price : 30}

console.log('\n');
// Memberikan Object untuk Constant
// Object juga dapat diberikan untuk constant. Selain itu, bila console.log(constantName) ditulis (seperti yang ditunjukkan digambar kiri), object dapat di-print di console.
const item = {name : "Shuriken", price : 30};
console.log(item);

console.log('\n');
// Deklarasikan constant character dan berikan object yang sudah disediakan
const character = {name:"Ninja Ken", age:14};

// Print nilai character
console.log(character);

console.log('\n');
// Mendapatkan Nilai Object
// Untuk mendapatkan nilai dari object, gunakan objectName.propertyName dengan nama object dan property yang sesuai.
console.log(item.name);

console.log('\n');
// Mengupdate Nilai Object
// Menulis objectName.propertyName = nilai baru akan mengupdate nilai yang disimpan dalam object.
console.log(item);
console.log(item.price);
item.price = 50; // Update nilai price
console.log(item);
console.log(item.price);

console.log('\n');
console.log(character);

// Print nilai property name milik character
console.log(character.name);

// Gantikan nilai age milik character ke 20 
character.age = 20;

// Print constant character ke console
console.log(character);

console.log('\n');
// Object sebagai Element Array
// Selanjutnya, mari kita pelajari tentang array yang memiliki object sebagai element. Element array tidak harus berupa string, integer atau boolean, namun bisa juga sebagai object. Berkat karakteristik ini, array seperti dalam gambar dikiri dapat dibuat. Disini, untuk mencegah code menjadi terlalu panjang, setiap element sebaiknya dimulai dibaris baru.
const items = [
  {name: "Shuriken", price: 30},
  {name: "Pedang", price: 120}
];

// Mendapatkan Object dalam Array
// Ingatkah Anda bahwa nomor index diberikan untuk setiap element didalam array? Lihatlah contoh array yang dibawah ini, nilai array-nya adalah object. Untuk mengakses object didalam array ini, caranya sama seperti pada saat Anda mau mengakses array lainya, gunakan arrayName[indexNumber].
console.log(items[1]);

console.log('\n');
// Mendapatkan Nilai Object di dalam Array
// Selain itu, arrayName[indexNumber].propertyName dapat digunakan untuk memperoleh nilai property object yang disimpan dalam array. Ini mungkin terlihat sedikit rumit, namun ini hanyalah sebuah kombinasi dari hal-hal yang telah Anda pelajari. Jika kebingungan, cobalah untuk me-review pelajaran-pelajaran sebelumnya.
console.log(items[1].price);

console.log('\n');
const characters = [
  {name: "Ninja Ken", age: 14},
  {name: "Guru Domba", age: 1000}
];

// Print element pertama milik array characters
console.log(characters[0]);

// Print nilai milik property name dari element array character kedua 
console.log(characters[1].name);

console.log('\n');
// Array & Iterasi
// Mari kita review array yang memiliki object sebagai element dan iterasi dengan menuliskan code untuk mengatasi beberapa masalah! Kita akan mem-print profil (name dan age) dari setiap karakter seperti yang ditunjukkan di bawah ini.
const characters1 = [
  {name: "Ninja Ken", age: 14},
  {name: "Guru Domba", age: 100},
  {name: "Baby Ninja Ben", age: 5},
];

// Selesaikan loop for dibawah
for (let i = 0; i < characters1.length ; i++) {
  console.log("--------------------");

  // Tentukan nilai constant character
  const character2 = characters1[i];
  
  // Print "Nama saya adalah ____"
  console.log(`Nama saya adalah ${character2.name}`);
  
  // Print "Saya berusia ____ tahun"
  console.log(`Saya berusia ${character2.age} tahun`);
}

// Mendapatkan Element yang Tidak Ada
// Anda telah mempelajari cara menggunakan array dan object. Di bab ini, mari kita lihat apa yang terjadi bila kita mencoba mengakses element dengan nomor index yang tidak terdapat didalam array, atau bila kita menentukan property yang tidak terdapat didalam object.

console.log('\n');
// Undefined (Tidak Didefinisikan)
// Seperti yang ditunjukkan dibawah ini, bila Anda mencoba mendapatkan element dengan nomor index yang tidak ada didalam array, atau bila Anda mencoba mendapatkan element dengan property yang tidak dimiliki oleh object, maka undefined akan di-print. undefined adalah nilai khusus yang berarti nilai tidak bisa didefinisikan.
const animals2 = ["anjing", "kucing", "domba"];
console.log(animals2[5]); // nomor index tidak ada
const character3 = {name: "Ninja Ken", age: 14};
console.log(character.email); // property tidak ada

console.log('\n');
const characters4 = [
  {name: "Ninja Ken", age: 14},
  {name: "Guru Domba", age: 100},
  {name: "Baby Ninja Ben", age: 5},
  // Tambahkan element dibawah
  {name: "Birdie"}
];

for (let i = 0; i < characters4.length; i++) {
  console.log("--------------------");
  
  const character = characters4[i];
  
  console.log(`Nama saya adalah ${character.name}`);
  console.log(`Saya berumur ${character.age} tahun`);
}

// Mencegah Undefined
// Dalam latihan terakhir ini, bila nilai yang tidak ada ingin kita print, maka "undefined tahun" akan di-print, seperti yang ditunjukkan dalam contoh dibawah ini. Sebagai gantinya, mari kita pastikan jika hal ini terjadi maka "Usia saya rahasia!"-lah yang akan di-print.

// Statement undefined dan if
// Mari kita gunakan undefined dalam beberapa statement kondisional (if dan else).
// Kita akan memiliki kontrol terhadap alur pada saat nilai character.age adalah undefined atau tidak.

console.log('\n');
const characters5 = [
  {name: "Ninja Ken", age: 14},
  {name: "Guru Domba", age: 100},
  {name: "Baby Ninja Ben", age: 5},
  {name: "Birdie"}
];

for (let i = 0; i < characters5.length; i++) {
  console.log("--------------------");
  
  const character = characters5[i];
  
  console.log(`Nama saya adalah ${character.name}`);
  
  // Tambahkan statement if dibawah
  if (character.age === undefined) {
    console.log("Umur saya rahasia!");
  } else {
    console.log(`Saya berumur ${character.age} tahun`);
  }
}

console.log('\n');
// Latihan Akhir
// Kita telah mempelajari tentang array, iterasi, dan object. Dengan menggunakan hal-hal yang telah kita pelajari dalam pelajaran ini, mari kita print informasi tentang sebuah kafe di console. Namun sebelum memulai latihan, mari kita pelajari teknik tingkat advance untuk object sebagai persiapan latihan.

// Menggunakan Object Bersarang
// Object dapat digunakan sebagai nilai didalam object lainya. Seperti contoh dibawah ini, object digunakan sebagai nilai untuk property favorite yang berada didalam object character.
const character4 = {
  name: "Ninja Ken",
  age: 14,
  favorite: {
    food: "Ramen",
    sports: "Ping Pong",
    color: "Hijau Muda",
    // nilai dari property favorite adalah sebuah object
  },
};

// Mengakses Object
// Object sejenis ini dapat diakses dengan syntax objectName.propertyNameA.propertyNameB. Contohnya, untuk mendapatkan nilai food di dalam object yang disimpan dalam object constant character, tulis character.favorite.food. Perhatikan bahwa penulisannya dimulai dari nama object yang terluar.
console.log(character4.favorite);
console.log(character4.favorite.food);

console.log('\n');
const cafe = {
  name: "Progate Cafe",
  businessHours: {
    // Tetapkan object yang sudah disediakan untuk businessHours
    opening: "10:00",
    closing: "20:00",
    },
};

// Printconsole` "Nama: ");
console.log(`Nama: ${cafe.name}`);

// Print "Jam: Dari jam ____ sampai jam ____"
console.log(`Jam: Dari jam ${cafe.businessHours.opening} sampai jam ${cafe.businessHours.closing} `);

console.log('\n');
// Latihan Akhir (2)
// Terakhir, kita akan menambahkan informasi tentang menu populer di kafe. Seperti yang dapat Anda lihat dalam contoh di bawah ini, Anda dapat menggunakan array sebagai nilai dalam object.
const cafe1 = {
  name: "Progate Cafe",
  businessHours: { 
    opening: "10:00",
    closing: "20:00"
  },
  // Tambahkan property menu dan berikan array yang sudah disediakan
  menu: ["Kopi", "Teh", "Kue Cokelat"],
};

console.log(`Nama: ${cafe1.name}`);
console.log(`Jam: Dari jam ${cafe1.businessHours.opening} sampai jam ${cafe1.businessHours.closing}`);
console.log(`----------------------------`);
console.log("Menu Rekomendasi");

// Gunakan loop for untuk mem-print nilai array menu 
for(let i = 0 ; i < cafe1.menu.length ; i++) {
  console.log(`${i+1}. ${cafe1.menu[i]}`);
}

