// local reviews data
const reviews = [
  {
    id: 1,
    name: "susan smith",
    job: "web developer",
    img: "https://www.course-api.com/images/people/person-1.jpeg",
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "anna johnson",
    job: "web designer",
    img: "https://www.course-api.com/images/people/person-2.jpeg",
    text: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "peter jones",
    job: "intern",
    img: "https://www.course-api.com/images/people/person-4.jpeg",
    text: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "bill anderson",
    job: "the boss",
    img: "https://www.course-api.com/images/people/person-3.jpeg",
    text: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];



let img = document.getElementById("person-img");
let author = document.getElementById("author");
let job = document.getElementById("job");
let info = document.getElementById("info");

let buttons = document.querySelector(".button-container");
let arr = [...buttons.children];

let index = 0;

arr.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    let classList = e.currentTarget.classList;
    if (classList.contains("prev-btn")) {
      index === 0 ? (index = reviews.length - 1) : index--;
      showReview(index);
    } else {
      index === reviews.length - 1 ? (index = 0) : index++;
      showReview(index);
    }
  });
});

let random = document.querySelector(".random-btn");

random.addEventListener("click", function () {
  index = Math.floor(Math.random() * reviews.length);
  console.log(index);

  showReview(index);
});

function showReview(index) {
  img.src = reviews[index].img;
  author.textContent = reviews[index].name;
  job.textContent = reviews[index].job;
  info.textContent = reviews[index].text;
}
