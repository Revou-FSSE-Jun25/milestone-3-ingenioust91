export function setCookie(name:string, value:string, minuites:number=30){
    const expired = new Date();
    expired.setTime(expired.getTime()+ (minuites * 60 * 1000))
    //setTime ubah waktu dalam milidetik,
    //getTime ambil waktu sekarang +(30menit*60detik*1000milidetik)
    //Jadi hasilnya = waktu sekarang + 1800000 Milidetik
    document.cookie = `${name}=${value}; path=/; expires=${expired.toUTCString()}`;
    //tulis ke cookie -> (seperti localStorage.setItem)
}

export function getCookie(name : string):string | null{
    return document.cookie
    .split('; ')                                  //document.cookie dipisah jadi array, setelah tanda ;
    .find(row => row.startsWith(`${name}=`))      //cari cookie dengan ${name}
    ?.split('=')[1] || null                       //ambil nilainya, setelah tanda = atau kalau ga ketemu : null
}