/**
 * Created by yazun on 20.04.2017.
 */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {NotFoundComponent} from "./modules/shared/compoents/not-found/not-found.component";
import {AuthGuard} from "./modules/shared/services/auth-guard.service";

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'students',
        loadChildren: './modules/students/students.module#StudentsModule',
        canActivate: [AuthGuard],
        data: {name: 'users'}
      },
      {
        path: 'users',
        loadChildren: './modules/users/users.module#UsersModule',
        canActivate: [AuthGuard],
        data: {name: 'users'}
      },
      {
        path: 'calendar',
        loadChildren: './modules/calendar/calendar.module#CalendarModule',
        canActivate: [AuthGuard],
        data: {name: 'calendar'}
      },
      {
        path: 'groups',
        loadChildren: './modules/groups/groups.module#GroupsModule',
        canActivate: [AuthGuard],
        data: {name: 'groups'}
      },
      {
        path: 'documents',
        loadChildren: './modules/documents/documents.module#DocumentsModule',
        canActivate: [AuthGuard],
        data: {name: 'documents'}
      },
      {
        path: 'portfolio',
        loadChildren: './modules/portfolio/portfolio.module#PortfolioModule',
        canActivate: [AuthGuard],
        data: {name: 'portfolio'}
      },
    ]
  },
  {
    path: 'auth',
    loadChildren: './modules/auth/auth.module#AuthModule',
    data: {name: 'login'}
  },
  {
    path: '**',
    component: NotFoundComponent
  }

];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
})
export class RoutingModule { }
