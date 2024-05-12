
let span = document.createElement("div");

span.style.border = "solid";
span.style.height = "49px"

span.addEventListener("mouseover" ,  (e) => {
                                    let x = Math.floor(Math.random()*256);
                                    let y = Math.floor(Math.random()*256);
                                    let z = Math.floor(Math.random()*256);
                                    e.target.style.background = "rgb(" + x + "," + y + "," + z + ")";
})
span.style.flex = "1";
let n = parseInt(prompt("", ""));
for(i=0;i<n;i++) {
    let div = document.createElement("span");
    div.style.display = "flex";
    for(j=0;j<n;j++) {
    div.append(span.cloneNode(true));
}
document.querySelector("body").append(div.cloneNode(true))
}
for(i=0;i<n;i++) {
document.querySelectorAll("span")[i].addEventListener("mouseover", function bg(e) {
    console.log(e);
    let x = Math.floor(Math.random()*256);
    let y = Math.floor(Math.random()*256);
    let z = Math.floor(Math.random()*256);
    e.target.style.background = "rgb(" + x + "," + y + "," + z + ")";
})
document.querySelectorAll("div")[i].addEventListener("mouseleave", function bg(e) {
    console.log(e);
    let x = Math.floor(Math.random()*256);
    let y = Math.floor(Math.random()*256);
    let z = Math.floor(Math.random()*256);
    e.target.style.background = "rgb(" + x + "," + y + "," + z + ")";
})
}

