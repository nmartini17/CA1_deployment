var boys = ["Peter", "lars", "Ole"];
var girls = ["Janne", "hanne", "Sanne"];

const all = boys.concat(girls);
console.log(all);

console.log(all.join())
console.log(all.join('-'))

all.push("Lone", "Gitte")
all.unshift("Hans", "Kurt")
all.shift()
all.pop(all)
all.splice(3, 2)
all.reverse();
all.sort(function (a, b){
    let x = a.toLowerCase();
    let y = b.toLowerCase();
    if(x > y) {
        return 1;
    }
    if (y > x) {
        return - 1;
    }
    return 0;
});

const upperCase = all.map(all => all.toUpperCase());
function filteredItems(arr, query){
    return arr.filter(function(el){
        return el.toLowerCase().indexOf(query.toLowerCase()) !== -1
    }
    )}


console.log(all)
console.log(upperCase)
console.log(filteredItems(all, 'l'));
console.log(filteredItems(all, 'L'));