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

  const cöpKutusu = document
    .querySelectorAll(".cöp-kutusu") //all ile sectik hepsinin gelmesi icin
    .forEach((a) => {
      a.onclick = () => {
        const icerik = a.previousElementSibling.textContent; //Bu sekilde yandaki element olan p nin contentini bulduk

        const silinecekIndis = liste.indexOf(icerik);
        //  Daha sonra o content ile indexOf kullanrak o yazinin kacinci indiste oldugunu bulduk

        // console.log(silinecekIndis);
        // console.log(liste);

        liste.splice(silinecekIndis, 1); //splice yöntemi ve 1 ile de listeden kalici olarak sildik. Silmemizin amaci yukarda tami,löamis oldugumuz ; Eger icerde daha önce girilmis deger varsa bi daha girilmesin oldugu icin, eger listeden silmezsek ekrandan silsek bile listede hala olacagi icin bi daha giremeyiz.

        // console.log(liste);
        if (a.parentElement.classList.contains("checked")) {
          completedTaskTotal--;
          completed.textContent = completedTaskTotal;
        }
        a.parentElement.remove(); //Burda da ekrandan sildik.
        toplam--;
        totalKismi.textContent = toplam;
      };
    });

  //Yeni Class Ekleme
  const checkTik = document.querySelectorAll(".check-tiki").forEach((a) => {
    a.addEventListener("click", () => {
      if (a.parentElement.classList.contains("checked")) {
        a.parentElement.classList.remove("checked");
        completedTaskTotal--;
      } //checked isminde bir class olup olmadigini kontrol ettik
      //varsa checked classini sildik. ve completed kismindan bir azalttik
      else {
        a.parentElement.classList.add("checked");
        completedTaskTotal++;
      }
      completed.textContent = completedTaskTotal;
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
