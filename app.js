//Sonradan kullanacagim elementleri ekleme

let liste = [];
let toplam = 0;
let completedTaskTotal = 0;

const addButton = document.querySelector("#todo-button");
let kullaniciInput = document.querySelector("#todo-input");
let totalKismi = document.querySelector("#toplam");
let completed = document.querySelector("#tamamlanan");

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
        //  console.log(i);
        a.parentElement.remove();
        toplam--;
        totalKismi.textContent = toplam;
        //Listeden silinmesini istedigim elemanin indisini bu sekilde buluyorum
        //console.log(silinecekIndis);
        //liste.splice(silinecekIndis + 1, 1);
        //console.log(liste);
      };
    });

  //Yeni Class Ekleme
  const checkTik = document.querySelectorAll(".check-tiki").forEach((a) => {
    a.addEventListener("click", () => {
      if (a.style.color != "green") {
        a.parentElement.classList.toggle("checked");
        completedTaskTotal++; //completedTaskTotal sürekli artiyor. Onu düzelt
      }
    });
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
