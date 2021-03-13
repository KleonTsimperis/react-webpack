import { useState } from 'react'


const elvenShieldRecipe = {
    leatherStrips: 2,
    ironIngot: 1,
    refinedMoonstone: 4
};

const elventGauntletRecipe = {
    ...elvenShieldRecipe,
    leahter: 1,
    refinedMoonstone: 4,
}

const Recipes = () => {
    const [recipe, setRecipe] = useState(elvenShieldRecipe);
    console.log(VERSION, PRODUCTION, process.env.NODE_ENV);
    return (
        <div>
            <h3>Current Recipe:</h3>
            <button onClick={() => setRecipe(elvenShieldRecipe)}>Eleven Shield Recipe</button>
            <button onClick={() => setRecipe(elventGauntletRecipe)}>Eleven Gauntlet Recipe</button>

            <ul>
                {Object.keys(recipe).map(material => (
                    <li>
                        {material}: {recipe[material]}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Recipes

console.log(elvenShieldRecipe);
console.log(elventGauntletRecipe);
