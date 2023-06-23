
export async function getServerSideProps() {
  const res = await fetch('https://www.thecocktaildb.com/api/json/v2/9973533/popular.php?s=');
  const data = await res.json();
  const recipes = data.drinks;
  return { props: { recipes } };
}

export default function Home({ recipes }) {
  console.log(recipes);

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {recipes.map(recipe => (
        <div key={recipe.idDrink} style={{ flex: '1 0 25%', margin: '5px', border: '5px solid white' }}>
          <p style={{display: "inline-block"}}>{recipe.strDrink}</p>
          <img src={recipe.strDrinkThumb} style={{ height: '100px', width: '100px'}} alt={recipe.strDrink} />
        </div>
      ))}
    </div>
  );
}
