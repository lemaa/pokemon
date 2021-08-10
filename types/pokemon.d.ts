type Pokemon ={
    id: number;
    name: string;
    generation: string;
    xp: number;
    types: Array<string>;
    description: string;
    sprites: string;
    stats: Array<{ name: string, baseStat: number}>;
    height: number,
    weight: number,
    abilities: Array<string>;
    evolvesFrom: {
        name: string,
        url: string
    };
    pokemonTheme: string;
    species: string;
}
export default Pokemon
