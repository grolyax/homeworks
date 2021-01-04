/**
 *
 * Дан массив people с объектами, которые содерержат в себе имя и работу человека.
 *
 * - Добавить <h1> элемент на страницу для каждого из имени человека 
 * - Добавить <h2> элемент на страницу для каждой из работ человека
 *
 * Весь HTML должен идти в <div> с id="content"
 *
 * <div id="content">
 *      <h1>{Имя}</h1>
 *      <h2>{Работа}</h2>
 *      .....
 * </div>
 */

const arrayOfPeople = [{name: 'Smith', job: 'actor'}, {name: 'John', job: 'waiter'}];

function exerciseOne(arrayOfPeople) {
  const content = document.querySelector("#content");
    arrayOfPeople.forEach((person) => {
        const nameElement = document.createElement('h1');
        const jobElement = document.createElement('h2');
        nameElement.innerText = person.name;
        jobElement.innerText = person.job;
        content.appendChild(nameElement);
        content.appendChild(jobElement);
    })
};




/**
 *
 * Создайте список покупок. Используйте unordered list.
 *
 * Весь HTML должен идти в <div> с id="content"
 *
 */
const product = ["Milk", "Break", "Eggs", "A Dinosaur", "Cake", "Sugar", "Tea"];

function exerciseTwo(product) {
  const content = document.querySelector("#content");
  const list = document.createElement('ul');
  content.appendChild(list);
  shopping.forEach((items) => {
    const nameProduct = document.createElement('li');
    nameProduct.innerText = items;
    list.appendChild(nameProduct);
  })
};


    const MyBooks = [
        {
            title: "Faust",
            author: "Goethe",
            alreadyRead: false
        },
        {
            title: "Decameron",
            author: "Boccaccio",
            alreadyRead: true
        }
    ];

    /**
    Пройдитесь по массиву.
    - Для каждой книги создайте <p> элемент с названием книги и ее автором и добавьте на страницу.
    - Используйте <ul> и <li> для отображения книг.
    - Добавьте <img> для каждой книги с ее обложкой.
    - Измените стиль книги в зависимости от того прочитана она (зеленый) или нет (красный).
**/
function exerciseThree(books) {
  const content = document.querySelector("#content");
  const listBook = document.createElement('ul');
  content.appendChild(listBook);

  books.forEach((items) => {
    const itemBook = document.createElement('li');
    const nameElement = document.createElement('p');
    const imgElement = document.createElement('img');
    itemBook.appendChild(nameElement);
    itemBook.appendChild(imgElement);
  nameElement.innerText = items.title + '. ' + items.author;
  if (items.alreadyRead === true) {
    itemBook.style.backgroundColor = "green";
  }  else itemBook.style.backgroundColor = "red";
  
  imgElement.src = items.imgSrc;
    listBook.appendChild(itemBook);
  })
};

//
//
//
//
// НЕ РЕДАКТИРОВАТЬ ВСЕ ЧТО НИЖЕ
//
//
//
//

const people = [
  { name: "Chris", job: "Teacher" },
  { name: "Joanna", job: "Student" },
  { name: "Boris", job: "Prime Minister" }
];

exerciseOne(people);

const shopping = ["Milk", "Break", "Eggs", "A Dinosaur", "Cake", "Sugar", "Tea"];

exerciseTwo(shopping);

const books = [
  {
    title: `"The Design of Everyday Things"`,
    author: "Don Norman",
    alreadyRead: false,
    imgSrc: "./img_1.png"
  },
  {
    title: `"The Most Human Human"`,
    author: "Brian Christian",
    alreadyRead: true,
    imgSrc: "./img_2.png"
  },
  {
    title: `"The Pragmatic Programmer"`,
    author: "Andrew Hunt",
    alreadyRead: true,
    imgSrc: "./img_3.png"
  }
];

exerciseThree(books);
