import { Routes } from '@angular/router';
// import { RouterModule } from '@angular/router';
import { TodosComponent } from './MyComponents/todos/todos.component';
import { AboutComponent } from './MyComponents/about/about.component';
import { LoginComponent } from '../app/login/login.component';
import { ErrorComponent } from '../app/error/error.component';





export const routes: Routes = [
    { path: 'dashboard', component: TodosComponent },
  { path: 'about', component: AboutComponent},
  { path: 'login', component: LoginComponent},
  { path: '', component: LoginComponent },
  { path: 'error', component: ErrorComponent},

];
