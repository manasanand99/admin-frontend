import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SetClaimComponent } from './set-claim/set-claim.component';
import { ViewAllClaimsComponent } from './view-all-claims/view-all-claims.component';

const routes: Routes = [
  {
    path:'claimLink',component:SetClaimComponent
  },
  {
    path:'homeLink',component:HomeComponent
  },
  {path:'login',component:LoginComponent},
  {path:'dashBoard',component:DashBoardComponent},
  {path:'viewClaims',component:ViewAllClaimsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
