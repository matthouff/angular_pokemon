interface PokemonI {
  id: number;
  name: string;
  hp: number;
  cp: number;
  picture: string;
  types: Type[];
  created: Date;
}

interface TypeI {
  id: number;
  name: string;
  color: string;
}

export class Pokemon implements PokemonI {
  id!: number;
  name: string;
  hp: number;
  cp: number;
  picture: string;
  types: Type[];
  created: Date;

  constructor(
    name: string = "",
    hp: number = 100,
    cp: number = 10,
    picture: string = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/xxx.png",
    types: Type[] = [],
    created: Date = new Date()
  ) {
    this.hp = hp
    this.cp = cp
    this.name = name
    this.picture = picture
    this.types = types
    this.created = created
  }
}


export class Type implements TypeI {
  id!: number;
  name: string;
  color: string;

  constructor(name: string, color: string) {
    this.name = name
    this.color = color
  }
}