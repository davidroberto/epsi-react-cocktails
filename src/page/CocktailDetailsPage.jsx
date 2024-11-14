import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CocktailDetailsPage = () => {
  const { id } = useParams();

  const [cocktail, setCocktail] = useState(null);

  useEffect(() => {
    (async () => {
      fetch("http://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" + id)
        .then((response) => response.json())
        .then((data) => {
          setCocktail(data.drinks[0]);
        });
    })();
  }, []);

  return (
    <main>
      {cocktail ? (
        <article>
          <h2>{cocktail.strDrink}</h2>
          <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
        </article>
      ) : (
        <p>En cours de chargement...</p>
      )}
    </main>
  );
};

export default CocktailDetailsPage;
