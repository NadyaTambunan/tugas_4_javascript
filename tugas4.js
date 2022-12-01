var siswa1 = 170;
var siswa2 = 160;
var siswa3 = 145;

if (siswa1>siswa2){
    if(siswa1>siswa3){
        console.log("Siswa 1 adalah siswa yang memiliki tinggi badan tertinggi");
        console.log("Urutan tertinggi ke yang terpendek: Siswa 1, Siswa 2, Siswa 3")
    }else {
        console.log("Siswa 1 adalah siswa kedua tertinggi");
    }
}else{
    if(siswa1<siswa3){
        console.log("Siswa 1 adalah siswa terpendek");
    }else {
        console.log("Siswa 1 adalah siswa dengan tinggi badan terpendek kedua");
    }
    
}

