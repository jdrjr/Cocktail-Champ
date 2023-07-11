import Header from "../components/header"
import Recipes from "../components/recipes"

export async function getServerSideProps() {
  const res = await fetch(
    "https://www.thecocktaildb.com/api/json/v2/9973533/popular.php?s="
  );
  const data = await res.json();
  const recipes = data.drinks.sort((a, b) =>
    a.strDrink.localeCompare(b.strDrink)
  ); // Sort recipes alphabetically by strDrink;
  return { props: { recipes } };
}

export default function Home({ recipes }) {
  console.log(recipes);

  return (
    <div className="bg-black">
    <Header></Header>
    <div class="grid lg:grid-cols-4 gap-5 md:grid-cols-3 p-8">
    <Recipes recipes={recipes}></Recipes>
    </div>
    </div>
  );
}
