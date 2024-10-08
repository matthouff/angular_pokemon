import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ListPokemonComponent } from './pokemon/list-pokemon/list-pokemon.component';
import { EditPokemonComponent } from './pokemon/form/edit-pokemon/edit-pokemon.component';
import { AddPokemonComponent } from './pokemon/form/add-pokemon/add-pokemon.component';
import { DetailPokemonComponent } from './pokemon/detail-pokemon/detail-pokemon.component';
import { LoginComponent } from './authentication/login/login.component';
import { RegisterComponent } from './authentication/register/register.component';
import { AuthGuard } from './authentication/authguard';

export const routes: Routes = [
  { path: "pokemon/edit/:id", component: EditPokemonComponent, canActivate: [AuthGuard] },
  { path: "pokemon/add", component: AddPokemonComponent, canActivate: [AuthGuard] },
  { path: "pokemon/:id", component: DetailPokemonComponent, canActivate: [AuthGuard] },
  { path: "pokemon-list", component: ListPokemonComponent, canActivate: [AuthGuard] },
  { path: "", redirectTo: "/pokemon-list", pathMatch: 'full' },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "**", component: PageNotFoundComponent },
];
