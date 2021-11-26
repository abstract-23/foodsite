const menu=[
    {
       id:1,
       title:"Daal makhni",
       category:"lunch",
       price: 150,
       img:"a.jpg" , 
    },
    {
        id:2,
        title:"Biriyani",
        category:"dinner",
        price: 150,
        img:"biriyani.jpg" ,
     },
     {
        id:3,
        title:"Puri",
        category:"Breakfast",
        price: 150,
        img:"puri.jpg" ,
     },
     {
        id:4,
        title:"Dhosa",
        category:"Dinner",
        price: 150,
        img:"images.jpg" ,
     },
     {
        id:5,
        title:"Fries",
        category:"Breakfast",
        price: 150,
        img:"fries.jpg" ,
     },
     {
        id:6,
        title:"Rice",
        category:"Dinner",
        price: 150,
        img:"rices.jpg",
     },
     {
        id:7,
        title:"Thali",
        category:"lunch",
        price: 150,
        img:"thali.jpg" ,
     },
];

const sectionCenter = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container");
// display all items when page loads
window.addEventListener("DOMContentLoaded", function () {
  diplayMenuItems(menu);
  displayMenuButtons();
});

function diplayMenuItems(menuItems) {
  let displayMenu = menuItems.map(function (item) {
    // console.log(item);

    return `<article class="menu-item">
          <img src=${item.img} alt=${item.title} class="photo" />
          <div class="item-info">
            <header>
              <h4>${item.title}</h4>
              <h4 class="price">$${item.price}</h4>
            </header>
            <p class="item-text">
              ${item.desc}
            </p>
          </div>
        </article>`;
  });
  displayMenu = displayMenu.join("");
  // console.log(displayMenu);

  sectionCenter.innerHTML = displayMenu;
}
function displayMenuButtons() {
  const categories = menu.reduce(
    function (values, item) {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ["all"]
  );
  const categoryBtns = categories
    .map(function (category) {
      return `<button type="button" class="filter-btn" data-id=${category}>
          ${category}
        </button>`;
    })
    .join("");

  btnContainer.innerHTML = categoryBtns;
  const filterBtns = btnContainer.querySelectorAll(".filter-btn");
  console.log(filterBtns);

  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      // console.log(e.currentTarget.dataset);
      const category = e.currentTarget.dataset.id;
      const menuCategory = menu.filter(function (menuItem) {
        // console.log(menuItem.category);
        if (menuItem.category === category) {
          return menuItem;
        }
      });
      if (category === "all") {
        diplayMenuItems(menu);
      } else {
        diplayMenuItems(menuCategory);
      }
    });
  });
}