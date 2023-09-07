var wholeWheatBun = 10;
var ingredients = {
  Patty: 80,
  Cheese: 10,
  Tomatoes: 20,
  Onions: 20,
  Lettuce: 20
};

var state = {
  Patty: true,
  Cheese: true,
  Tomatoes: true,
  Onions: true,
  Lettuce: true
};
renderIngredientsBoard();
renderPrice();
function renderAll() {
  renderPatty();
  renderCheese();
  renderTomatoes();
  renderOnions();
  renderLettuce();
  renderIngredientsBoard();
  renderPrice();
}

function renderPatty() {
  let patty = document.querySelector("#patty");
  if (state.Patty) {
    patty.style.display = "inherit";
  } else {
    patty.style.display = "none";
  }
}

function renderCheese() {
  let patty = document.querySelector("#cheese");
  if (state.Cheese) {
    cheese.style.display = "inherit";
  } else {
    cheese.style.display = "none";
  }
}

function renderTomatoes() {
  let patty = document.querySelector("#tomatoes");
  if (state.Tomatoes) {
    tomato.style.display = "inherit";
  } else {
    tomato.style.display = "none";
  }
}

function renderOnions() {
  let patty = document.querySelector("#onions");
  if (state.Onions) {
    onion.style.display = "inherit";
  } else {
    onion.style.display = "none";
  }
}

function renderLettuce() {
  let patty = document.querySelector("#lettuce");
  if (state.Lettuce) {
    lettuce.style.display = "inherit";
  } else {
    lettuce.style.display = "none";
  }
}

document.querySelector(".btn-patty").onclick = function () {
  state.Patty = !state.Patty;
  renderAll();
};
document.querySelector(".btn-cheese").onclick = function () {
  state.Cheese = !state.Cheese;
  renderAll();
};
document.querySelector(".btn-tomatoes").onclick = function () {
  state.Tomatoes = !state.Tomatoes;
  renderAll();
};
document.querySelector(".btn-onions").onclick = function () {
  state.Onions = !state.Onions;
  renderAll();
};
document.querySelector(".btn-lettuce").onclick = function () {
  state.Lettuce = !state.Lettuce;
  renderAll();
};


function renderPrice() {
  var total = wholeWheatBun; 

  if (state.Patty) {
    total += ingredients.Patty;
  }
  if (state.Cheese) {
    total += ingredients.Cheese;
  }
  if (state.Tomatoes) {
    total += ingredients.Tomatoes;
  }
  if (state.Onions) {
    total += ingredients.Onions;
  }
  if (state.Lettuce) {
    total += ingredients.Lettuce;
  }
  total="INR "+total
  document.getElementById("price").innerHTML = total;
}


function renderIngredientsBoard() {
  const ingredientsBoard = document.getElementById('ingredients-board');
  ingredientsBoard.innerHTML = '';

  if (state.Patty) renderIngredient('Patty');
  if (state.Cheese) renderIngredient('Cheese');
  if (state.Tomatoes) renderIngredient('Tomatoes');
  if (state.Onions) renderIngredient('Onions');
  if (state.Lettuce) renderIngredient('Lettuce');
}
function renderIngredient(ingredientName) {
  const ingredientDiv = document.createElement('div');
  ingredientDiv.textContent = ingredientName;
  document.getElementById('ingredients-board').appendChild(ingredientDiv);
}


  if (state.patty){
    document.getElementById("p").style.display = "block"
  }




