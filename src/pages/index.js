import { useState } from "react";
import Header from "../components/header"
import Recipes from "../components/recipes"

export async function getStaticProps() {
  const res = await fetch(
    "https://www.thecocktaildb.com/api/json/v2/9973533/search.php?s="
  );
  const data = await res.json();
  const recipes = data.drinks // Sort recipes alphabetically by strDrink;
  return { props: { recipes }, revalidate: false };
}

export default function Home({ recipes }) {
  const [filteredRecipes, setFilteredRecipes] = useState(recipes)
  const handleSearch = (query) => {
    const filtered = recipes.filter((recipe) =>
      recipe.strDrink.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredRecipes(filtered);
  }
  // console.log(recipes);

  return (
    <div className="bg-black">
    <Header recipes={filteredRecipes} handleSearch={handleSearch}></Header>
    <div class="grid lg:grid-cols-4 gap-5 md:grid-cols-3 p-8">
    <Recipes recipes={filteredRecipes}></Recipes>
    </div>
    </div>
  );
}
