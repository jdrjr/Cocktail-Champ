export default function Recipes({ recipes }) {
  return (
    <>
      {recipes.map((recipe) => (
        <div key={recipe.strDrink}
        className="max-w-sm rounded overflow-hidden shadow-lg m-2 bg-black-500 shadow-lg shadow-cyan-500/50">
          <img className="w-full" src={recipe.strDrinkThumb} alt="Sunset in the mountains" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{recipe.strDrink}</div>
            <p className="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis
              eaque, exercitationem praesentium nihil.
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
        </div>
      ))}
    </>
  );
}