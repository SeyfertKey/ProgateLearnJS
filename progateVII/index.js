const printKen = () => {
    console.log("Ninja Ken");
};

const printMaster = () => {
    console.log("Guru Domba");
};

const call = (callback) => {
    console.log("Memanggil function callback.");
    callback();
};

// Ketik ulang argument ini sebagai printMaster dan konfirmasikan output-nya
call(printMaster);

// Apa yang dimaksud dengan Callback Function?
// Jenis Argument
// Dalam JavaScript, function dapat diteruskan sebagai argument. Function yang diteruskan sebagai argument disebut callback function.

// Meneruskan Callback Function
// Seperti yang dapat Anda lihat dalam gambar di bawah ini, function printKen diteruskan sebagai argument saat function call dipanggil.

// Memanggil dan Meneruskan Function
// Function dipanggil dengan menempatkan () setelah nama function. Tanpa (), function hanya akan menunjukkan definisinya. Karena itu, seperti yang dapat Anda lihat di kedua gambar dibawah, memanggil dan meneruskan function ditulis secara berbeda.

// Alur Callback Function
// Mari kita lihat proses pemanggilan function printKen, yang diteruskan sebagai argument function call.

console.log(`\n`);
const printKen1 = () => {
    console.log("Ninja Ken");
};

// Tambahkan parameter callback ke function call
const call1 = (callback1) => {
    console.log("Memanggil function callback.");
    // Panggil callback function
    callback1();
};

// Teruskan printKen sebagai argument dan jalankan function call
call1(printKen1);

console.log(`\n`);
// Mendeklarasikan Function dalam Argument
// Sebelumnya, kita sudah belajar cara meneruskan callback function yang telah didefinisikan, namun function juga dapat didefinisikan langsung didalam argument.

// Alur saat Mendeklarasikan Function dalam Argument
// Alurnya sama dengan saat sebelum function dideklarasikan.
// Deklarasikan function didalam argument dan teruskan
call1(() => {
    console.log("Guru Domba");
});

// Meneruskan Argument
// Seperti halnya function biasa, callback function juga dapat menerima argument.
// Meneruskan Beberapa Argument, Lebih dari dua argument dapat diteruskan.

// Function normal
console.log(`\n`);
const introduce = (name, age) => {
    console.log(`${name} berusia ${age} tahun`);
};
introduce("Ninja Ken", 14);

// Callback Function
console.log(`\n`);
const introduce1 =  (callback) => {
    callback("Ninja Ken", 14);
};
introduce1((name, age) => {
    console.log(`${name} berusia ${age} tahun`);
});

// Hal-Hal yang Harus Diperhatikan untuk Argument
// Pastikan jumlah parameter callback function sama dengan jumlah argument yang diteruskan saat memanggilnya.
