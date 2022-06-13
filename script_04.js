
// Definisikan constant animal
const animalLeo = {
    name: "Leo",
    age: 3,
    greet: () => {
        console.log("Halo"); 
    }
};

// Print property name milik constant animal
console.log(animalLeo.name);

// Panggil greet method property milik animal
animalLeo.greet();

// Membuat Object secara Efisien
// Object, seperti yang kita buat sebelumnya, biasanya digunakan saat membuat situs web. Misalnya, layanan web yang memerlukan fungsi log in, seperti Progate, menggunakan object untuk membuat data pengguna. Bayangkan jika kita harus membuat ini dari awal setiap permintaan login, tidak efisien kan? Oleh sebab itu, Anda akan mempelajari cara membuat data yang serupa dengan mudah.

// Blueprint Object
// Untuk membuat object secara efisien, kita harus membuat "blueprint" (kerangka) object tersebut. Misalnya, saat membuat data pengguna, data dapat dibuat dan disusun berdasarkan "blueprint pengguna" yang telah disiapkan sebelumnya.

// Class
// Blueprint yang disebut dalam slide sebelumnya disebut class dalam JavaScript. Dengan menulis class ClassName, seperti yang ditunjukkan di bawah ini, class baru dapat dibuat. Nama class biasanya diawali dengan huruf kapital.
// Definisikan class Animal
class Animal {
  
};

// Membuat Instance
// Karena kita sudah menyiapkan blueprint object, mari kita coba untuk membuat object dari blueprint tersebut. Untuk membuat object dari class, tulis new ClassName(), seperti yang ditunjukkan dibawah ini. Object dibuat dari class yang disebut instance. Instance dari class "Animal" disebut "instance Animal".

// Tetapkan instance class Animal ke constant animal
const animal = new Animal();

// Memeriksa Instance
// Dipelajaran ini, mari kita print instance Animal yang dibuat dari class Animal ke console, untuk memastikan bahwa instance adalah object kosong seperti yang ditunjukkan di bawah ini. Jangan khawatir tentang nama class "Animal" yang di-print sebelum tanda kurung kurawal {}.

// Tampilkan nilai milik constant animal
console.log(animal);

// Menambahkan Konten ke Blueprint
// Sejauh ini, Anda telah mempelajari cara membuat instance berdasarkan blueprint (class). Namun, karena kita belum menambahkan konten apa pun ke class, blueprint ini masih kosong. Selanjutnya, kita akan menambahkan konten ke blueprint.

// Apa yang dimaksud dengan Constructor?
// Class sering memiliki method khusus yang disebut constructor. constructor digunakan untuk memberikan nilai awal ke instance baru. Untuk menambahkan constructor ke class, tulis constructor() { } di dalam tanda kurung kurawal {} class Animal seperti yang ditunjukkan di bawah ini.

// Code di Dalam Constructor
// Seperti yang ditunjukkan digambar dibawah ini, instruksi dan code juga dapat ditulis didalam {} constructor. Code yang ditulis disana akan dipanggil saat instance dibuat. Hal penting untuk diingat adalah code akan dipanggil untuk setiap instance. Karena new Animal() dipanggil dua kali dalam gambar dibawah ini, konten dalam constructor akan dipanggil untuk keduanya.

console.log(`\n`);
class Animal2 {
  constructor() {
    console.log("Halo!");
  }
};
const animal1 = new Animal2();
const animal2 = new Animal2();

console.log(`\n`);
class Animal3 {
    // Tambahkan constructor
    constructor() {
        console.log("Membuat instance baru");
    }
};
  
const animal3 = new Animal3();

// Menambahkan Property & Nilai
// Dalam constructor, mari kita tambahkan informasi terkait instance yang dibuat. Untuk menambahkan property dan nilai kedalam constructor, tulis this.property = nilai.

console.log(`\n`);
class Animal4 {
    constructor() {
        this.name = "Leo";
    }
};
const animal4 = new Animal4();
console.log(animal4.name); // Gunakan nilai yang di tentukan constructor

console.log(`\n`);
class Animal5 {
  constructor() {
    // Tetapkan nilai string「Leo」ke property name
    this.name = "Leo";
    this.age = 3;
    // Tetapkan nilai「3」ke property age
    
  }
};

const animal5 = new Animal5();

// Print「Nama: ____」
console.log(`Nama: ${animal5.name}`);

// Print「Usia: __」
console.log(`Usia: ${animal5.age}`);

// Mengubah Nilai untuk Semua Instance
// Dengan menambahkan constructor, instance baru akan diberi nilai awal saat dibuat. Namun, code di bawah ini akan memberi semua instance nilai yang sama, yakni, "Leo" dan "3", saat instance tersebut dibuat. Mari kita pelajari cara mengubah nilai untuk setiap instance secara bebas di slide berikutnya!

// Argument Constructor (1)
// Sama seperti function, constructor juga dapat menerima argument. Dengan menulis nama argument di dalam tanda kurung () setelah constructor, argument yang ditetapkan dapat digunakan didalam proses pemanggilan constructor terkait.

// Argument Constructor (2)
// Saat nilai diteruskan ke constructor sebagai argument, nilai akan ditambahkan dalam tanda kurung () milik new className(). Dalam contoh di bawah ini, nilai string "Leo" diteruskan sebagai argument dan dapat diakses sebagai name dalam constructor.

console.log(`\n`);
class Animal6 {
    constructor(constName, constAge) {
        this.name = constName;
        this.age = constAge;
    }
};

const animal6 = new Animal6("Leo", 14);
console.log(animal6);

console.log(`\n`);
class Animal7 {
  // Tambahkan argument「name」dan「age」
  constructor(name, age) {
    // Gantikan nilai string "Leo" dengan nilai milik argument name
    this.name = name;
    
    // Gantikan「3」dengan nilai milik argument age
    this.age = age;
  }
}

// Teruskan argument「"Mocha"」「8」ke constant animal dibawah
const animal7 = new Animal7("Mocha", 8);

console.log(`Nama: ${animal7.name}`);
console.log(`Usia: ${animal7.age}`);

// Apa yang dimaksud dengan Method?
// Function yang berada didalam sebuah class disebut Method. Method bisa dibilang seperti "aksi" milik sebuah instance. Jika data seperti name dan age dapat ditambahkan menggunakan property, method dapat mengekspresikan seluruh kumpulan instruksi seperti memberikan salam dan menghitung nilai.

// Mendefinisikan Method
// Method dideklarasikan dalam class dengan menulis methodName() { }.
// Sama seperti function, code dalam method harus dituliskan didalam {}.

// Cara menggunakan Method
// Method dipanggil untuk instance yang dibuat didalam class. Misalnya, dengan menuliskan instance.methodName() seperti contoh di bawah ini, method greet didalam object Animal, akan dipanggil dan dijalankan untuk instance animal.

console.log(`\n`);
class Animal8 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    // Tambahkan method greet
    greet() { //Nama Method "greet"
        console.log("Halo"); // code milik method
    }
}
  
const animal8 = new Animal8("Leo", 3);

console.log(`Nama: ${animal8.name}`);
console.log(`Usia: ${animal8.age}`);

// Panggil method greet milik animal instance
animal8.greet(); // memanggil method

console.log(`\n`);
// Menggunakan Nilai dalam Method
// Selanjutnya, dengan menggunakan nilai name, ayo kita buat method untuk mem-print string Nama saya adalah ____. Saat Anda ingin menggunakan nilai instance didalam method, tulis this.propertyName, menggunakan nilai khusus this.

class Animal9 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log("Halo");
    }

    // Tambahkan method info
    info() {
        console.log(`Nama saya adalah ${this.name}`);
        console.log(`Saya berusia ${this.age} tahun`);
    }    
}
  
const animal9 = new Animal9("Leo", 3);
animal9.greet();

// Panggil method info menggunakan constant animal
animal9.info();

// Menggunakan Method dalam MethodAnda juga dapat memanggil method dalam method lain.
// Seperti contoh di bawah ini, method lain dalam class yang sama dapat digunakan dengan menuliskan this.methodName() dalam method tersebut.

console.log(`\n`);
class Animal10 {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
    
    greet() {
      console.log("Halo");
    }
    
    info() {
      // Panggil method greet
      this.greet();
      
      console.log(`Nama saya adalah ${this.name}`);
      console.log(`Saya berumur ${this.age} tahun`);
    }
}
  
const animal10 = new Animal10("Leo", 3);
// Hapus baris dibawah
animal10.info();
  
// Apa yang dimaksud dengan Inheritance?
// Membuat Class Dog
// Kita telah membuat class Animal yang dapat menangani data hewan. Sekarang, mari kita buat class Dog khusus untuk menangani data jenis anjing. Saat class yang akan Anda buat sama seperti class yang sudah ada, inheritance akan menjadi sangat berguna!

// Apa yang dimaksud dengan Inheritance?
// Inheritance adalah cara membuat class baru berdasarkan class yang sudah ada. Misalnya, bila class Dog diwariskan dari class Animal, class Dog juga akan memiliki semua method yang didefinisikan dalam class Animal.

// Cara Menggunakan Inheritance
// Saat membuat class menggunakan inheritance, gunakan extends. Agar class Dog dapat menerima warisan data dari class Animal, tulis class Dog extends Animal seperti gambar dibawah. Untuk terminologi pemrograman, class yang digunakan sebagai dasar disebut class induk (disini adalah class Animal), sedangkan class penerima warisan data disebut class anak (class Dog)

console.log(`\n`);
class Animal11 {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
    
    greet() {
      console.log("Halo");
    }
    
    info() {
      this.greet();
      console.log(`Nama saya adalah ${this.name}`);
      console.log(`Saya berumur ${this.age} tahun`);
    }
}
  
// Definisikan class Dog agar dapat menerima warisan dari class Animal
class Dog extends Animal11 {

}
  
const animal11 = new Animal11("Leo", 3);
animal11.info();    

// Method Yang Diwariskan
// Class Dog akan mewarisi semua method class Animal. Karena itu, meskipun tidak ada method yang dideklarasikan dalam class Dog, class ini dapat menggunakan method info yang didefinisikan dalam class Animal.

console.log(`\n`);
class Animal12 {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
    
    greet() {
      console.log("Halo");
    }
    
    info() {
      this.greet();
      console.log(`Nama saya adalah ${this.name}`);
      console.log(`Saya berusia ${this.age} tahun`);
    }
}
  
class Dog12 extends Animal12 {
}
  
// Terapkan instance class Dog ke constant dog
const dog12 = new Dog12("Leo", 4);

// Panggil method info dari constant dog
dog12.info();

// Menambah Method
// Method Class Anak
// Method dapat ditambahkan ke class yang dibuat menggunakan inheritance dengan cara yang sama seperti class normal. Di bawah ini, Anda dapat melihat method getHumanAge yang dapat mengkonversikan umur anjing ke umur manusia.

// Nilai Return dalam Method
// Dalam method, nilai return dapat digunakan sama seperti function.
// Dibawah ini, nilai return method getHumanAge diberikan untuk constant humanAge.

// Mengakses Method Class Anak
// Method yang hanya didefinisikan dalam class anak tidak dapat dipanggil dari class induk. Seperti yang dapat Anda lihat di bawah ini, hal tersebut akan menyebabkan kesalahan saat Anda mencoba memanggil method getHumanAge dengan instance dari class Animal.

console.log(`\n`);
class Animal13 {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
    
    greet() {
      console.log("Halo");
    }
    
    info() {
      this.greet();
      console.log(`Nama saya adalah ${this.name}`);
      console.log(`Saya berusia ${this.age} tahun`);
    }
  } 
  
  class Dog13 extends Animal13 {
    // Tambahkan method getHumanAge
    getHumanAge() {
      return this.age * 7;
    }
  }
  
  const dog13 = new Dog13("Leo", 4);
  dog13.info();
  
  // Panggil method getHumanAge milik instance dog
  const humanAge = dog13.getHumanAge();
  
  // Print 「Saya berusia __ tahun dalam umur manusia」
  console.log(`Saya berusia ${humanAge} tahun dalam umur manusia`);
  