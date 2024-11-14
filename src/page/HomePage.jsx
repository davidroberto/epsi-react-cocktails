import { useEffect, useState } from "react";

const HomePage = () => {
  const [firstCocktails, setFirstCocktails] = useState([]);

  useEffect(() => {
    (async () => {
      fetch("http://www.thecocktaildb.com/api/json/v1/1/search.php?f=a")
        .then((response) => response.json())
        .then((data) => {
          const dataSliced = data.drinks.slice(0, 5);
          setFirstCocktails(dataSliced);
        });
    })();
  }),
    [];

  return (
    <main>
      <h1>Home Page</h1>
      <ul>
        {firstCocktails.map((cocktail) => (
          <article key={cocktail.idDrink}>
            <h2>{cocktail.strDrink}</h2>
            <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
          </article>
        ))}
      </ul>
    </main>
  );
};

export default HomePage;
