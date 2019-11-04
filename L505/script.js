let x = prompt('რისი ყიდვა გსურთ?');


if (x === 'desktop') {
    document.querySelector(".desktop").style.backgroundColor = "blue";
}

else if (x === 'laptop') {
    document.querySelector(".latop").style.backgroundColor = "green";
}


//მეორე ვარიანტი 

// if (x = 'desktop')
// {
//     var d, i; 
//     d =  document.querySelectorAll(".desktop-item");
//     for (i = 0; i < d.length; i++)
//     {
//         d[i].style.backgroundColor = "blue";
//     }
// }

// else if (x = 'laptop')
// {
//     var l, i; 
//     l =  document.querySelectorAll(".latop-item");
//     for (i = 0; i < l.length; i++)
//     {
//         l[i].style.backgroundColor = "green";
//     }
// }