/* eslint-disable @next/next/no-img-element */
export default function Recipes({ recipes }) {
  return (
    <>
      {recipes.map((recipe) => (
        <div key={recipe.idDrink}
          className="max-w-sm rounded-xl overflow-hidden m-2 bg-black hover:shadow-lg hover:shadow-yellow-500/50 border border-white-500 relative">
          <img className="w-full" src={recipe.strDrinkThumb + '/preview'} alt={recipe.strDrink} />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 text-yellow-600 underline">{recipe.strDrink}</div>
            <p className="text-base text-white overflow-hidden text-ellipsis line-clamp-3">
              {recipe.strMeasure1} {recipe.strIngredient1} <br />
              {recipe.strMeasure2} {recipe.strIngredient2} <br />
              {recipe.strMeasure3} {recipe.strIngredient3} <br />
              {recipe.strMeasure4} {recipe.strIngredient4} <br />
              {recipe.strInstructions}
            </p>
          </div>
          <div className="px-6 pt-4 pb-2">
           { recipe.strGlass && <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #{recipe.strGlass}
            </span> }
            { recipe.strTags &&<span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #{recipe.strTags}
            </span> }
          </div>
          {/* THIS IS FOR THE HIDDEN OVERLAY, WHEN YOU HOVERE, IT APPEARS. SHOWS RECIPE. */}
          <div className="text-white overflow-auto px-3 absolute top-0 left-0 w-full h-full bg-black opacity-0 hover:opacity-100 block items-center justify-center transition duration-300 ease-in-out hover:cursor-pointer">
            <p className="text-center text-3xl text-yellow-600 py-3 underline">{recipe.strDrink}</p>
            {/* <p className="text-center text-lg text-white px-3 overflow-auto max-h-full"> */}
              <ul className="list-disc">
                {recipe.strIngredient1 && (
                  <>
                    <li> {recipe.strMeasure1} {recipe.strIngredient1}</li>
                  </>
                )}
                {recipe.strIngredient2 && (
                  <>
                    <li> {recipe.strMeasure2} {recipe.strIngredient2}</li>
                  </>
                )}
                {recipe.strIngredient3 && (
                  <>
                    <li>  {recipe.strMeasure3} {recipe.strIngredient3}</li>
                  </>
                )}
                {recipe.strIngredient4 && (
                  <>
                    <li>   {recipe.strMeasure4} {recipe.strIngredient4}</li>
                  </>
                )}
                {recipe.strIngredient5 && (
                  <>
                    <li>   {recipe.strMeasure5} {recipe.strIngredient5}</li>
                  </>
                )}
                {recipe.strIngredient6 && (
                  <>
                    <li>   {recipe.strMeasure6} {recipe.strIngredient6}</li>
                  </>
                )}
                {recipe.strIngredient7 && (
                  <>
                    <li>   {recipe.strMeasure7} {recipe.strIngredient7}</li>
                  </>
                )}
                {recipe.strIngredient8 && (
                  <>
                    <li> {recipe.strMeasure8} {recipe.strIngredient8}</li>
                  </>
                )}
              </ul>
              <br />
              {recipe.strInstructions}
            {/* </p> */}
          </div>
        </div>
      ))}
    </>
  );
}