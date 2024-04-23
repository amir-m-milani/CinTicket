var arr=[
    {
        img:"/wwwroot/img/4.webp" ,
        title:"بی بدن",
        des: " بدن نخستین ساخته‌ی مزتضی علیزاده به‌عنوان کارگردان با بازی نوید پورفرج، نویسندگی کاظم دانشی و تهیه‌کنندگی سیدمصطفی احمدی است که .."
    },
    {
        img:"/wwwroot/img/5.webp" ,
        title:"آسمان غرب",
        des: "فیلم آسمان غرب به کارگردانی محمد عسگری و تهیه‌کنندگی حبیب‌الله والی‌نژاد است که در چهل و دومین جشنواره فجر حضور دارد و ادامه داستان..."
    },
    {
        img:"/wwwroot/img/7.webp" ,
        title: "پرویز خان",
        des: "فیلم پرویزخان به کارگردانی علی ثقفی و تهیه‌کنندگی عطا پناهی است که در چهل و دومین جشنواره فجر حضور دارد. دیگر عوامل فیلم عبارت‌اند از:  مدیر تولید: رضا زنجانیان،.."
    }
]

function test2(){
    var cards1=''
    for (let i = 0; i < arr.length; i++) {
     cards1  +=`
        <li class="cards_item">
        <div class="card">
          <div class="card_image"><img src="${arr[i].img}"></div>
          <div class="card_content">
            <h2 class="card_title">${arr[i].title}</h2>
            <p class="card_text">${arr[i].des}</p>
            <button class="btn card_btn">خرید بلیط</button>
          </div>
        </div>
      </li>
        `
    }
    document.getElementById('click2').innerHTML=cards1
}
test2();


