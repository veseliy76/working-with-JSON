const dataProduct = `[
    {
        "image": "img/productCard6.png",
        "title": "ELLERY X M'O CAPSULE",
        "text": "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
        "price": "$52.00"
    },
    {
        "image": "img/productCard5.png",
        "title": "ELLERY X M'O CAPSULE",
        "text": "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
        "price": "$52.00"
    },
    {
        "image": "img/productCard4.png",
        "title": "ELLERY X M'O CAPSULE",
        "text": "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
        "price": "$52.00"
    },
    {
        "image": "img/productCard3.png",
        "title": "ELLERY X M'O CAPSULE",
        "text": "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
        "price": "$52.00"
    },
    {
        "image": "img/productCard2.png",
        "title": "ELLERY X M'O CAPSULE",
        "text": "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
        "price": "$52.00"
    },
    {
        "image": "img/productCard1.jpg",
        "title": "ELLERY X M'O CAPSULE",
        "text": "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
        "price": "$52.00"
    }
]`;

let mainBox = document.createElement("div");
mainBox.classList.add("products__shop");
mainBox.style.display = "grid";
// mainBox.style.flexDirection = "column-reverse";
mainBox.style.gridTemplateColumns = "repeat(3, 360px)";
mainBox.style.gap = "30px";
mainBox.style.padding = "0px calc(50% - 570px)";
document.body.prepend(mainBox);

let productContent = JSON.parse(dataProduct);
productContent.forEach(element => {

    let cardEl = document.createElement("div");
    cardEl.classList.add("products__shop__card");
    cardEl.style.background = "#f8f8f8";
    cardEl.style.padding = "0px 0px 20px 0px";
    mainBox.prepend(cardEl);

    let cardImgEl = document.createElement("div");
    cardEl.prepend(cardImgEl);

    let imgEl = document.createElement("img");
    imgEl.setAttribute("width", "360px");
    imgEl.setAttribute("height", "420px");
    imgEl.setAttribute("alt", "photo");
    imgEl.src = element.image;
    cardImgEl.prepend(imgEl);

    let cardTitleEl = document.createElement("h3");
    cardTitleEl.classList.add("card__title");
    cardTitleEl.style.margin = "24px 0px 0px 18px";
    cardTitleEl.style.textTransform = "uppercase";

    cardTitleEl.style.fontWeight = "400";
    cardTitleEl.style.fontSize = "13px";
    cardTitleEl.style.lineHeight = "16px";
    cardTitleEl.style.color = "#000000";
    cardTitleEl.textContent = element.title;
    cardEl.appendChild(cardTitleEl);

    let cardTxtEl = document.createElement("P");
    cardTxtEl.classList.add("card__txt");
    cardTxtEl.style.margin = "13px 0px 0px 16px";
    cardTxtEl.style.width = "100%";
    cardTxtEl.style.maxWidth = "315px";
    cardTxtEl.style.fontWeight = "300";
    cardTxtEl.style.fontSize = "14px";
    cardTxtEl.style.lineHeight = "17px";
    cardTxtEl.style.color = "#5D5D5D";
    cardTxtEl.textContent = element.text;
    cardEl.appendChild(cardTxtEl);

    let cardPriceEl = document.createElement("p");
    cardPriceEl.classList.add("card__price");
    cardPriceEl.style.margin = "18px 0px 0px 18px";
    cardPriceEl.style.fontWeight = "400";
    cardPriceEl.style.fontSize = "16px";
    cardPriceEl.style.lineHeight = "19px";
    cardPriceEl.style.color = "#F16D7F";
    cardPriceEl.textContent = element.price;
    cardEl.appendChild(cardPriceEl);

});
mainBox.firstElementChild.nextElementSibling.firstElementChild.style.background = "#F7E4E2";
mainBox.firstElementChild.nextElementSibling.firstElementChild.style.textAlign = "center";
mainBox.firstElementChild.nextElementSibling.firstElementChild.style.height = "420px";

mainBox.firstElementChild.nextElementSibling.firstElementChild.firstElementChild.style.width = "142px";
mainBox.firstElementChild.nextElementSibling.firstElementChild.firstElementChild.style.height = "400px";
