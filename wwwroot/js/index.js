// url , name , desc , price
function GetCardInfo(url, name, desc, price) {
    var temp = {
        image_url: url,
        name: name,
        desc: desc,
        price: price
    };
    return temp;
}
var cards = [
    GetCardInfo("wwwroot/img/3.webp", "film1", "this the text", 12000),
    GetCardInfo("wwwroot/img/4.webp", "film2", "this the text", 13000),
    GetCardInfo("wwwroot/img/5.webp", "film3", "this the text", 1000),
    GetCardInfo("wwwroot/img/6.webp", "film4", "this the text", 15000)
]

cards.forEach((card) => {
    document.querySelector(".movies-grid-body").innerHTML += `
    <div class=" col-5 col-lg-auto p-0">
    <div class="card">
        <img src="${card.image_url}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${card.name}</h5>
            <p class="card-text">${card.desc}</p>
            <p class="card-text">${card.price}</p>
            <a href="${card.image_url}" class="btn btn-primary">ادامه مطلب</a>
        </div>
    </div>
</div>`
});

var dropDownList = [
    {

    }
]

function SetDropUp(id, data) {
    var drop = document.querySelector(`#${id} ul`);
    drop.innerHTML = "";
    data.forEach((li) => {
        drop.innerHTML +=
            `<li><a class="dropdown-item" href="${li.url}">${li.title}</a></li>`;
    });
}