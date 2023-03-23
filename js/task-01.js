// const allCategoriesEl = document.querySelectorAll(`.item`);

// console.log("Number of categories:", allCategoriesEl.length);

// allCategoriesEl.forEach((item) => {
//   const titleOfCategories = item.querySelector(`h2`).textContent;
//   const numberofCategories = item.querySelectorAll(`li`).length;
//   console.log(`${titleOfCategories}: ${numberofCategories}`);
// });

const list = document.querySelector(`#categories`);
console.log(`Number of categories:`, list.children.length);
[...list.children].forEach((item) => {
  console.log(`Category:`, item.firstElementChild.textContent);
  console.log(`Elements:`, item.lastElementChild.children.length);
});
