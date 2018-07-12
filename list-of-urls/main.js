let arr = [
    { name: "Safari Books", link: "https://www.safaribooksonline.com"},
    { name: "Egghead", link: "https://egghead.io"},
    { name: "Lynda", link: "https://www.lynda.com"},
];

let list = document.createElement('ul');
list.id = 'myLinks';
console.log(list);
document.body.appendChild(list);

arr.forEach( item => {
    let link = document.createElement('a');
    link.textContent = item.name;
    link.href = item.link;

    let listItem = document.createElement('li');
    listItem.appendChild(link);

    list.appendChild(listItem);
});

