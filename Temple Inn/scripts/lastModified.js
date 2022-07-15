/*code for getting last modified*/
let d = new Date(document.lastModified)
let date = `Last Updated: ${d.getMonth()+1}/${d.getDate()}/${d.getFullYear()} ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`;
let modList = document.querySelectorAll(".lastModified")
console.log(modList)

modList.forEach(function(item) {
    item.textContent=date;
    console.log(item);
})

//.textContent = date