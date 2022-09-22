//Sonradan kullanacagim elementleri ekleme

let liste = [];
let toplam = 0;

const addButton = document.querySelector("#todo-button");
let kullaniciInput = document.querySelector("#todo-input");
let totalKismi = document.querySelector("#toplam");

let silinecekIndis; //Cöp kutusuyla bir eleman sildikten sonra kendi olusturdugumuz listeden de silmek icin hangi elemani silcegimizi bulabilmek adina indis belirledim

//================================================================
//Butona tiklandiginda Yeni eleman ekleme
//================================================================
const elemanEkleme = (addButton.onclick = () => {
  if (liste.includes(kullaniciInput.value)) {
    alert("Ayni isi iki defa ekleyemezsiniz...");
  } else {
    toplam++;
    liste.push(kullaniciInput.value);
    console.log(liste);

    document.querySelector("#todo-ul").innerHTML += `<li>
              <i class="check-tiki fa-sharp fa-solid fa-check"></i>
              <p>${kullaniciInput.value}</p>
              <i class="cöp-kutusu fa-sharp fa-solid fa-trash"></i>
              </li>`;

    totalKismi.textContent = toplam; //Her yeni eleman eklendiginde total kismini 1 arttirdik
    kullaniciInput.value = "";
  }
  //GENEL SILME ISLEMI
  //Hangisine tiklarsak o elemanin parentini silmesi icin forEach ile özel olarak hepsinin üzerinde gezindik

  console.log("hello");
  const cöpKutusu = document
    .querySelectorAll(".cöp-kutusu") //all ile sectik hepsinin gelmesi icin
    .forEach((a, i, array) => {
      a.onclick = () => {
        a.parentElement.remove();
        toplam--;
        totalKismi.textContent = toplam;
        //  silinecekIndis = i;
        // console.log(silinecekIndis);
        //liste.splice(i, 1);
        //console.log(liste);
        //????????????????????????Burda elemanlarin indis numarasi silindikten sonra degismiyor onu ayarla
      };
    });
});

//ENTERA BASILDIGINDA GIRDI OLARAK KABUL EDILMESI

document.querySelector("#todo-input").onkeydown = (tus) => {
  //Yani entera basilirsa anlamina geliyor
  //enter keyCoe= 13
  if (tus.keyCode === 13) {
    document.querySelector("#todo-button").click(); //Sanki .ekle ye tiklanmis gibi olsun anlami

    //Yani ekleye tiklandiginda yukarda ne gerceklesmesini istiyorsak burada da aynisi olacak
  }
};
