// let arr = [10, 47, -30, 3]

// let yigindi = arr.reduce((sum, currentValue) => {
//     return sum + currentValue
// }, 20)

// console.log(yigindi);





// let numbers = [778, 3, 4, 15, 345, 78]

// console.log(numbers);


// numbers.sort((a,b) => a-b)
// numbers.sort((a,b) => b-a)

// console.log(numbers);





const container = document.querySelector("#product-container");

render(pokemons);

const search = document.querySelector(".search");

search.addEventListener("input", (e) => {
  let searchInput = e.target.value.toLowerCase();
  const searchArray = pokemons.filter((item) =>
    item.name.toLowerCase().includes(searchInput)
  );

  render(searchArray.length ? searchArray : pokemons);
});

function render(array) {
  container.innerHTML = "";

  array.map((item) => {
    const card = document.createElement("div");
    card.classList.add("productes");

    const id = document.createElement("strong");
    id.textContent = item.id;

    const titles = document.createElement("h1");
    titles.textContent = item.title;

    const subTitle = document.createElement("h2");
    subTitle.textContent = item.name;

    const img = document.createElement("img");
    img.src = item.img;

    const name = document.createElement("h3");
    name.textContent = item.type[0];

    const firstText = document.createElement("p");
    firstText.textContent = item.candy_count;

    const secondText = document.createElement("p");
    secondText.textContent = `Weight: ${item.weight}`;

    const bold = document.createElement("b");
    bold.textContent = `Abilities: ${item.weaknesses.forEach((element) => {
      return element;
    })}`;

    const clock = document.createElement("h4");
    clock.textContent = item.spawn_time;

    card.append(
      id,
      titles,
      subTitle,
      img,
      name,
      firstText,
      secondText,
      bold,
      clock
    );

    container.append(card);
  });
}
