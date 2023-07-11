/* eslint-disable @next/next/no-img-element */
export default function Recipes({ recipes }) {
  return (
    <>
      {recipes.map((recipe) => (
        <div key={recipe.idDrink}
        className="max-w-sm rounded-xl overflow-hidden m-2 bg-black shadow-lg shadow-cyan-500/50 border border-cyan-500 relative">
          <img className="w-full" src={recipe.strDrinkThumb} alt={recipe.strDrink} />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 text-white">{recipe.strDrink}</div>
            <p className="text-base text-white overflow-hidden text-ellipsis line-clamp-3">
              {recipe.strMeasure1} {recipe.strIngredient1} <br />
              {recipe.strMeasure2} {recipe.strIngredient2} <br />
              {recipe.strMeasure3} {recipe.strIngredient3} <br />
              {recipe.strMeasure4} {recipe.strIngredient4} <br />
              {recipe.strInstructions}
            </p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #{recipe.strGlass}
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #{recipe.strTags}
            </span>
          </div>
          {/* THIS IS FOR THE HIDDEN OVERLAY, WHEN YOU HOVERE, IT APPEARS. SHOWS RECIPE. */}
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-0 hover:opacity-100 block items-center justify-center hover:cursor-pointer">
            <p className="text-center text-3xl text-cyan-500 py-3">{recipe.strDrink}</p>
            <p className="text-center text-lg text-white px-3">
              {recipe.strMeasure1} {recipe.strIngredient1} <br />
              {recipe.strMeasure2} {recipe.strIngredient2} <br />
              {recipe.strMeasure3} {recipe.strIngredient3} <br />
              {recipe.strMeasure4} {recipe.strIngredient4} <br />
              {recipe.strMeasure5} {recipe.strIngredient5} <br />
              {recipe.strMeasure6} {recipe.strIngredient6} <br />
              {recipe.strMeasure7} {recipe.strIngredient7} <br />
              {recipe.strMeasure8} {recipe.strIngredient8} <br />
              {/* <span className="text-center text-3xl text-cyan-500 py-3">Directions</span> <br /> */}
              {recipe.strInstructions}
            </p>
          </div>
        </div>
      ))}
    </>
  );
}