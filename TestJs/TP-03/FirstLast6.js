let tab = [6, 5, 35 , 12, 7, 9];
let  bool = false;

for (let i = 0; i < tab.length; i++) {
    if (tab.length >= 1 && (tab[0] === 6 || tab[tab.length - 1] === 6)) {
        bool = true;
    }
}

console.log(bool);