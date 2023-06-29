export default function Recipes({recipes}) {

    return (
        <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        background: "rgb(33, 33, 33)",
      }}
    >
      {recipes.map((recipe) => (
        <div
          key={recipe.idDrink}
          style={{
            flex: "1 0 25%",
            margin: "5px",
            border: "5px solid white",
            background: "rgb(33, 33, 33)",
            transition: "transform 0.3s ease-out",
            transform: "scale(1)",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.01)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
          }}
        >
          <div style={{ display: "flex", alignItems: "flex-start" }}>
            <img
              src={recipe.strDrinkThumb}
              style={{ height: "100px", width: "100px", margin: "5px", borderRadius: "5px" }}
              alt={recipe.strDrink}
            />
            <div style={{ marginLeft: "2px" }}>
              <p
                style={{
                  display: "inline-block",
                  fontFamily: "monospace",
                  fontWeight: "lighter",
                  textDecorationLine: "underline",
                  fontSize: "18px"
                }}
              >
                {recipe.strDrink}
              </p>
              <div style={{ display: "flex", alignItems: "flex-start" }}>
                <p
                  style={{
                    marginLeft: "20px",
                    display: "list-item",
                    fontFamily: "monospace",
                    fontWeight: "lighter",
                  }}
                >
                  {recipe.strMeasure1}
                </p>
                <p
                  style={{
                    display: "inline-flex",
                    fontFamily: "monospace",
                    fontWeight: "lighter",
                    marginLeft: "5px",
                  }}
                >
                  {recipe.strIngredient1}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
    );
  }