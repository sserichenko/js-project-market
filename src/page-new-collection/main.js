import '../scss/main.scss';
import './page.scss';
import list from './list.hbs';
const featuresList = document.querySelector('.features-list');


const picArr = [
    {
      "id": "pkXzyRp1P",
      "name": "Томатный",
      "description": "Томатный магрибский суп особенно распространен в Марокко и Тунисе. Он весьма прост в приготовлении и сам по себе легкий — в основе томаты и куриный бульон. Кроме них в супе только необходимые специи, мед и лимон, которые все вместе и передают тот самый восточный колорит. Вкус супа всецело зависит от качества томатов. Дополнят блюдо свежая кинза и отдельные дольки лимона.",
      "image": "https://avatars.mds.yandex.net/get-pdb/38069/eec6be2c-700e-40ae-847c-d6f5178b1e17/s1200",
      "price": 150,

    },
    {
      "id": "QMom9q4Ku",
      "name": "Крем",
      "description": "Портрет этой оранжевой похлебки украшает обложку книги «La Cuisine du Marché» Поля Бокюза. Бокюз, придумавший так называемую новую кухню, считал тыкву одной из основ этого миропорядка, а тыквенный суп — эдакой околоплодной водой гастрономии.",
      "image": "https://s1.eda.ru/StaticContent/Photos/121114213720/151024152626/p_O.png",
      "price": 100,
      "ingredients": ["Тыква", "Петрушка", "Сливки", "Бренди", "Куриный бульон"]
    },
    {
      "id": "k2k0UrjZG",
      "name": "Салат",
      "description": "Тосканский салат, выдержанный в колористике итальянского флага. Буквально нескольких ложек хватает, чтобы в желудке образовалась приятная тяжесть. Очень полезная штука с точки зрения утра, когда трудно запихнуть в себя крупные дозы биомассы, а есть при этом хочется.",
      "image": "https://s.mediasole.ru/cache/content/data/images/1393/1393226/original.jpg",
      "price": 150,

    },
    {
      "id": "k2k0UrjZG",
      "name": "Салат",
      "description": "Тосканский салат, выдержанный в колористике итальянского флага. Буквально нескольких ложек хватает, чтобы в желудке образовалась приятная тяжесть. Очень полезная штука с точки зрения утра, когда трудно запихнуть в себя крупные дозы биомассы, а есть при этом хочется.",
      "image": "https://s.mediasole.ru/cache/content/data/images/1393/1393226/original.jpg",
      "price": 150,

    },
    {
      "id": "k2k0UrjZG",
      "name": "Салат",
      "description": "Тосканский салат, выдержанный в колористике итальянского флага. Буквально нескольких ложек хватает, чтобы в желудке образовалась приятная тяжесть. Очень полезная штука с точки зрения утра, когда трудно запихнуть в себя крупные дозы биомассы, а есть при этом хочется.",
      "image": "https://s.mediasole.ru/cache/content/data/images/1393/1393226/original.jpg",
      "price": 150,

    },
    {
      "id": "k2k0UrjZG",
      "name": "Салат",
      "description": "Тосканский салат, выдержанный в колористике итальянского флага. Буквально нескольких ложек хватает, чтобы в желудке образовалась приятная тяжесть. Очень полезная штука с точки зрения утра, когда трудно запихнуть в себя крупные дозы биомассы, а есть при этом хочется.",
      "image": "https://s.mediasole.ru/cache/content/data/images/1393/1393226/original.jpg",
      "price": 150,

    },


  ]

  const markDishes = list(picArr);
  console.log('markDishes', list());

  featuresList.insertAdjacentHTML('afterbegin', markDishes);

const addToCart = document.querySelector('.calash');
const listListener = document.querySelector('.features-list');
listListener.addEventListener('click', addingToCart);

const chart = [];

  console.log('chart', chart);
function addingToCart(e){

  if(e.target.nodeName === 'BUTTON'){
    const el = picArr.find(el => el.id === e.target.dataset.id)
    console.log('el', el);
  if(chart.includes(el)){
   return
  } else {
     chart.push(el);
    console.log('chart', chart);
    localStorage.setItem('goods', chart)
  }
  }
};


