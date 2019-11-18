import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MemberListComponent } from './member-list/member-list.component';
import { RegisterComponent } from './register/register.component';
import { CitasComponent } from './citas/citas.component';
import { UserComponent } from './user/user.component';
import { ConsultaComponent } from './consulta/consulta.component';

export const appRoutes: Routes = [
    { path: 'home', component: HomeComponent},
    { path: 'members', component: MemberListComponent},
    { path: 'register', component: RegisterComponent},
    { path: 'citas', component: CitasComponent},
    { path: 'user', component: UserComponent},
    { path: 'consulta', component: ConsultaComponent},
    { path: '**', redirectTo: 'home', pathMatch: 'full'},
]