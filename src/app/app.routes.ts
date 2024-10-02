import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ListPokemonComponent } from './pokemon/list-pokemon/list-pokemon.component';
import { DetailPokemonComponent } from './pokemon/detail-pokemon/detail-pokemon.component';
import { EditPokemonComponent } from './pokemon/edit-pokemon/edit-pokemon.component';

export const routes: Routes = [
  { path: "pokemon/:id", component: DetailPokemonComponent },
  { path: "pokemon/edit/:id", component: EditPokemonComponent },
  { path: "pokemon-list", component: ListPokemonComponent },
  { path: "", redirectTo: "/pokemon-list", pathMatch: 'full' },
  { path: "**", component: PageNotFoundComponent },
];
