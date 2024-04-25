var cardIran = [
  {
    img: "../img/4.webp",
    title: "بی بدن",
    des: " بدن نخستین ساخته‌ی مزتضی علیزاده به‌عنوان کارگردان با بازی نوید پورفرج، نویسندگی کاظم دانشی و تهیه‌کنندگی سیدمصطفی احمدی است که .."
  },
  {
    img: "../img/5.webp",
    title: "آسمان غرب",
    des: "فیلم آسمان غرب به کارگردانی محمد عسگری و تهیه‌کنندگی حبیب‌الله والی‌نژاد است که در چهل و دومین جشنواره فجر حضور دارد و ادامه داستان..."
  },
  {
    img: "../img/7.webp",
    title: "پرویز خان",
    des: "فیلم پرویزخان به کارگردانی علی ثقفی و تهیه‌کنندگی عطا پناهی است که در چهل و دومین جشنواره فجر حضور دارد. دیگر عوامل فیلم عبارت‌اند از:  مدیر تولید: رضا زنجانیان،.."
  }
]
var cardCinema = [
  {
    title: "cinema1",
    des: " بدن نخستین ساخته‌ی مزتضی علیزاده به‌عنوان کارگردان با بازی نوید پورفرج، نویسندگی کاظم دانشی و تهیه‌کنندگی سیدمصطفی احمدی است که .."
  },
  {
    title: "cinema2",
    des: "فیلم آسمان غرب به کارگردانی محمد عسگری و تهیه‌کنندگی حبیب‌الله والی‌نژاد است که در چهل و دومین جشنواره فجر حضور دارد و ادامه داستان..."
  },
  {
    title: "cinema3",
    des: "فیلم پرویزخان به کارگردانی علی ثقفی و تهیه‌کنندگی عطا پناهی است که در چهل و دومین جشنواره فجر حضور دارد. دیگر عوامل فیلم عبارت‌اند از:  مدیر تولید: رضا زنجانیان،.."
  }
]

var allData = {
  'cinema': cardCinema,
  'iran': cardIran,
}

var allData2 = [
  {
    'value': 'cinema',
    "title": "cinema",
    "data": cardCinema
  },
  {
    'value': 'iran',
    "title": "iran",
    "data": cardIran
  }
]

//seelct 
// value title data

// function showCardIran(arr) {
//   var cards1 = ''
//   for (let i = 0; i < arr.length; i++) {
//     cards1 += `
//         <li class="cards_item">
//         <div class="card">
//           <div class="card_image"><img src="${cardIran[i].img}"></div>
//           <div class="card_content">
//             <h2 class="card_title">${cardIran[i].title}</h2>
//             <p class="card_text">${cardIran[i].des}</p>
//             <button class="btn card_btn">خرید بلیط</button>
//           </div>
//         </div>
//       </li>
//         `
//   }
//   document.getElementById('click2').innerHTML = cards1
// }
// function showCardCinema() {
//   var cards1 = ''
//   for (let i = 0; i < cardCinema.length; i++) {
//     cards1 += `
//         <li class="cards_item">
//         <div class="card">
//           <div class="card_image"><img src="${cardCinema[i].img}"></div>
//           <div class="card_content">
//             <h2 class="card_title">${cardCinema[i].title}</h2>
//             <p class="card_text">${cardCinema[i].des}</p>
//             <button class="btn card_btn">خرید بلیط</button>
//           </div>
//         </div>
//       </li>
//         `
//   }
//   document.getElementById('click2').innerHTML = cards1
// }
// test2();

function makeCard(data) {
  var cards1 = ''
  for (let i = 0; i < data.length; i++) {
    cards1 += `
        <li class="cards_item">
        <div class="card">
          <div class="card_image"><img src="${data[i].img}"></div>
          <div class="card_content">
            <h2 class="card_title">${data[i].title}</h2>
            <p class="card_text">${data[i].des}</p>
            <button class="btn card_btn">خرید بلیط</button>
          </div>
        </div>
      </li>
        `
  }
  document.getElementById('click2').innerHTML = cards1
}

function makeOptionInSelect(datas) {
  datas.foreach((data) => {
    document.querySelector(".select-bahare").innerHTML +=
      `<option value="${data.value}">${data.title}</option>`;
  });
}

function showCard(id) {
  makeCard(allData[`${id}`])
  switch (id) {
    case 'cinema':
      makeCard(allData.cinema);
      break;
    case 'iran':
      makeCard(allData.iran)
      break;
    default:
      break;
  }
}

document.querySelector(".press").addEventListener("click", () => {
  var value2 = document.querySelector(".select-bahare").value;
  console.log(value2);
  showCard(value2);
});


/* Code 

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>example</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
        crossorigin="anonymous"></script>
    <link rel="stylesheet" href="css/index.css">
</head>

<body>
    <select class="form-select" aria-label="Default select example">
        <option selected>Open this select menu</option>
    </select>
    <button class="showCard">press</button>
    <div id="cards">

    </div>
    <!-- <script src="js/index.js"></script> -->
    <script>
        function makeData(title, value, data = null) {
            var temp = {
                title: title,
                value: value,
                data: data
            }
            return temp;
        }

        var cardFilm = [
            {
                img: "../img/4.webp",
                title: "بی بدن",
                des: " بدن نخستین ساخته‌ی مزتضی علیزاده به‌عنوان کارگردان با بازی نوید پورفرج، نویسندگی کاظم دانشی و تهیه‌کنندگی سیدمصطفی احمدی است که .."
            },
            {
                img: "../img/5.webp",
                title: "آسمان غرب",
                des: "فیلم آسمان غرب به کارگردانی محمد عسگری و تهیه‌کنندگی حبیب‌الله والی‌نژاد است که در چهل و دومین جشنواره فجر حضور دارد و ادامه داستان..."
            },
            {
                img: "../img/7.webp",
                title: "پرویز خان",
                des: "فیلم پرویزخان به کارگردانی علی ثقفی و تهیه‌کنندگی عطا پناهی است که در چهل و دومین جشنواره فجر حضور دارد. دیگر عوامل فیلم عبارت‌اند از:  مدیر تولید: رضا زنجانیان،.."
            }
        ]
        var cardCinema = [
            {
                title: "cinema1",
                des: " بدن نخستین ساخته‌ی مزتضی علیزاده به‌عنوان کارگردان با بازی نوید پورفرج، نویسندگی کاظم دانشی و تهیه‌کنندگی سیدمصطفی احمدی است که .."
            },
            {
                title: "cinema2",
                des: "فیلم آسمان غرب به کارگردانی محمد عسگری و تهیه‌کنندگی حبیب‌الله والی‌نژاد است که در چهل و دومین جشنواره فجر حضور دارد و ادامه داستان..."
            },
            {
                title: "cinema3",
                des: "فیلم پرویزخان به کارگردانی علی ثقفی و تهیه‌کنندگی عطا پناهی است که در چهل و دومین جشنواره فجر حضور دارد. دیگر عوامل فیلم عبارت‌اند از:  مدیر تولید: رضا زنجانیان،.."
            }
        ]

        var data = [
            makeData("cinema", "cinema", cardCinema),
            makeData("film", "film", cardFilm),
            makeData("theater", "theater", null)
        ]

        // data : value title
        function makeOption(data, elementId) {
            data.forEach(oneData => {
                document.querySelector(`.${elementId}`).innerHTML +=
                    `<option value="${oneData.value}">${oneData.title}</option>`;
            });
        }


        function makeCardHtml(data, elementId) {
            var temp = ''
            for (let i = 0; i < data.length; i++) {
                temp += `
        <li class="cards_item">
        <div class="card">
          <div class="card_image"><img src="${data[i].img}"></div>
          <div class="card_content">
            <h2 class="card_title">${data[i].title}</h2>
            <p class="card_text">${data[i].des}</p>
            <button class="btn card_btn">خرید بلیط</button>
          </div>
        </div>
      </li>
        `
            }
            document.getElementById(`${elementId}`).innerHTML = temp
        }

        // data : title description img
        // it should decide what title is
        // then show the data
        function makeCard(datas, value) {
            datas.forEach(data => {
                if (data.value == value) {
                    makeCardHtml(data.data, "cards");
                }
            });
        }


        makeOption(data, "form-select");
        document.querySelector(".showCard").addEventListener("click", () => {
            var value = document.querySelector(".form-select").value;
            makeCard(data, value);
        });
    </script>
</body>

</html>
*/
