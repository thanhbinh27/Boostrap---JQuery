/**
 * * Using ES6 to progress
 */

//? Query Object form HTML
const recipeForm = document.querySelector('#recipe-form');
const recipeContainer = document.querySelector('#recipe-container');

let listItems = [];

//? BUS functions
const handlersFromSubmit = (e) => {
    e.preventDefault();

    const name = recipeForm.name.value;
    const method = recipeForm.method.value;
    const roast = recipeForm.roast.value;
    const grind = recipeForm.grind.value;
    const raito = recipeForm.raito.value;
    const note = recipeForm.note.value;

    const newRecipe = { name, method, roast, grind, raito, note, id: Date.now() };
    listItems.push(newRecipe);

    e.target.reset();
    recipeForm.name.focus();
    recipeContainer.dispatchEvent(new CustomEvent('refreshRecipes'));
}

const handlerDisplayRecipes = () => {
    const tempRecipeUI = listItems.map(recipe => `
        <div class="col">
            <div class="card mb-4 rounded-3 shadow-sm border-primary">
                <div class="card-header py-3 text-white bg-primary border-primary">
                    <h4 class="my-0">${recipe.name}</h4>
                </div>
                <div class="card-body">
                    <ul class="text-start">
                        <li><strong>Medthod: </strong>${recipe.method}</li>
                        <li><strong>Roast: </strong>${recipe.roast}</li>
                        <li><strong>Grind Size: </strong>${recipe.grind}</li>
                        <li><strong>Raito: </strong>${recipe.raito}</li>
                        ${!recipe.note.length ? "" : `<li><strong>Note: </strong>${recipe.note}</li>`}
                    </ul>

                    <div class="form-group mt-4">
                    <button class="btn btn-lg btn-outline-danger" aria-label="Delete ${recipe.name}" value="${recipe.id}">Delete Recipe</button>
                    </div>
                </div>
            </div>
        </div>
    `).join('');
    recipeContainer.innerHTML = tempRecipeUI;
}

const deleteRecipeFromList = (id) => {
    listItems = listItems.filter(recipe => recipe.id !== id);
    recipeContainer.dispatchEvent(new CustomEvent('refreshRecipes'));
}

//? Event handlers
recipeForm.addEventListener('submit', handlersFromSubmit);
recipeContainer.addEventListener('refreshRecipes', handlerDisplayRecipes);
recipeContainer.addEventListener('click', (e) => {
    if (e.target.matches('.btn-outline-danger')) {
        deleteRecipeFromList(Number(e.target.value));
    };
})