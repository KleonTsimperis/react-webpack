import "./styles/index.scss";

const elvenShieldRecipe = {
    leatherStrips: 2,
    ironIngot: 1,
    refinedMoonstone: 4
};

const elevenGauntletsRecipe = {
    ...elvenShieldRecipe,
    leahter: 1,
    refinedMoonstone: 4,
}

console.log(elvenShieldRecipe);
console.log(elevenGauntletsRecipe);
