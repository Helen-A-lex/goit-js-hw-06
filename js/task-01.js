const allCategoriesEl = document.querySelectorAll(`.item`);

console.log("Number of categories:", allCategoriesEl.length);

allCategoriesEl.forEach((item) => {
  const titleOfCategories = item.querySelector(`h2`).textContent;
  const numberofCategories = item.querySelectorAll(`li`).length;
  console.log(`${titleOfCategories}: ${numberofCategories}`);
});
