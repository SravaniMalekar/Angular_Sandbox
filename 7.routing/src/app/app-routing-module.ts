import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "./auth-gaurd-service";
import { AuthService } from "./auth.service";
import { ErrorPageComponent } from "./error-page-component/error-page-component.component";
import { HomeComponent } from "./home/home.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { CanDeactivateGuard } from "./servers/edit-server/can-deactivate-guard.service";
import { EditServerComponent } from "./servers/edit-server/edit-server.component";
import { ServerResolver } from "./servers/server/server-rendered.service";
import { ServerComponent } from "./servers/server/server.component";
import { ServersComponent } from "./servers/servers.component";
import { UserComponent } from "./users/user/user.component";
import { UsersComponent } from "./users/users.component";

//configuration of all the available routes
const appRoutes: Routes = [
    //array of all the routes
    //path - enters in the URL after domain
    //:id-dynamic path segment
    {path : '', component: HomeComponent },
    {path : 'users', component: UsersComponent ,children: [
      {path : ':id/:name', component: UserComponent }
    ]},
  
    {path : 'servers', 
    // canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    component: ServersComponent, children: [
      {path : ':id', component: ServerComponent, resolve: {server: ServerResolver}},
      {path : ':id/edit', component: EditServerComponent, canDeactivate: [CanDeactivateGuard] }
    ] },
    // {path: 'not-found' ,component : PageNotFoundComponent},
    {path: 'not-found' ,component : ErrorPageComponent , data: {message: 'Page Not Found!'}},
    {path: '**' , redirectTo: '/not-found'}
  
  ]

@NgModule({
    imports: [
    //adding routing functionality
    //forRoot()- registering our routes on RouterModule
    // RouterModule.forRoot(appRoutes, {useHash: true})
    RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})

export class AppRoutingModule{

}