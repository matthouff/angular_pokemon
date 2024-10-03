interface PokemonI {
  id: number;
  name: string;
  hp: number;
  cp: number;
  picture: string;
  types: Type[];
  createdAt: Date;
  updatedAt: Date;
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
  createdAt: Date;
  updatedAt: Date;

  constructor(
    name: string = "",
    hp: number = 100,
    cp: number = 10,
    picture: string = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/xxx.png",
    types: Type[] = [],
    createdAt: Date = new Date(),
    updatedAt: Date = new Date()
  ) {
    this.hp = hp
    this.cp = cp
    this.name = name
    this.picture = picture
    this.types = types
    this.createdAt = createdAt
    this.updatedAt = updatedAt
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