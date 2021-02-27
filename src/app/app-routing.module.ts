import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ShowcaseComponent } from './showcase/showcase.component';
import { ServicesComponent } from './services/services.component';
import { TeamComponent } from './team/team.component';
import { PricingComponent } from './pricing/pricing.component';
import { ContactComponent } from './contact/contact.component';
const routes: Routes = [
 {path:'', component:HomeComponent},
 {path:'showcase', component:ShowcaseComponent},
 {path:'services', component:ServicesComponent},
 {path:'team', component:TeamComponent},
 {path:'pricing', component:PricingComponent},
 {path:'contact', component:ContactComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
