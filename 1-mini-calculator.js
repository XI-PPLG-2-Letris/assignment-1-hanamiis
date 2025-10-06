//mini calculator
//requirement
/*
    1.Menggunakan Concept Arrow Function
    2.Menggunkan 2 Variabel Fitur ES6 (eg. let a = 10)
    3.Menggunakan semua operator aritmatika
*/

/* expected output
    a = 10
    b = 20

    tambah(a, b)
    log : Penjumlahan 10 + 20 = 30

    kali(a, b)
    log : Penjumlahan 10 x 20 = 200
*/

const tambah = (a, b)=>{
    console.log(`log: jumlahnya nih ${a + b}`);
    
}

tambah(10, 20)

const kali = (a, b)=>{
    console.log(`log: jumlahnya nih ${a * b}`);

}

kali(10, 20)

const kurang = (a, b)=>{
    console.log(`log: jumlahnya nih ${a - b}`);

}

kurang(10, 20)