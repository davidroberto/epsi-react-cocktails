import { useEffect, useState } from "react";

const RandomCocktailPage = () => {
  const [cocktail, setCocktail] = useState(null);

  useEffect(() => {
    (async () => {
      fetch("http://www.thecocktaildb.com/api/json/v1/1/random.php")
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

export default RandomCocktailPage;
