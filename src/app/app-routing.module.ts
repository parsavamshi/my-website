import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgentsLoginComponent } from './components/common/agents-login/agents-login.component';
import { AgentsComponent } from './components/common/agents/agents.component';
import { BlogComponent } from './components/common/blog/blog.component';
import { BuildersLoginComponent } from './components/common/builders-login/builders-login.component';
import { BuildersComponent } from './components/common/builders/builders.component';
import { BuyersLoginComponent } from './components/common/buyers-login/buyers-login.component';
import { ContactUsComponent } from './components/common/contact-us/contact-us.component';
import { EventsComponent } from './components/common/events/events.component';
import { FeedbackComponent } from './components/common/feedback/feedback.component';
import { GalleryComponent } from './components/common/gallery/gallery.component';
import { HappyLivingComponent } from './components/common/happy-living/happy-living.component';
import { InvestmentsComponent } from './components/common/investments/investments.component';
import { LoansComponent } from './components/common/loans/loans.component';
import { LoginComponent } from './components/common/login/login.component';
import { PressRelasesComponent } from './components/common/press-relases/press-relases.component';
import { PriceTrandsComponent } from './components/common/price-trands/price-trands.component';
import { PrimeLocationsComponent } from './components/common/prime-locations/prime-locations.component';
import { ProperitesComponent } from './components/common/properites/properites.component';
import { SellersLoginComponent } from './components/common/sellers-login/sellers-login.component';
import { ServicesComponent } from './components/common/services/services.component';
import { TechnologyComponent } from './components/common/technology/technology.component';
import { HomeComponent } from './components/home/home.component';
import { OpenLandsComponent } from './components/common/open-lands/open-lands.component';
import { OpenLandsInnerComponent } from './components/common/open-lands-inner/open-lands-inner.component';
const routes: Routes = [

  {path:'',component:HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'smart-deals', component:AgentsComponent},
  {path:'legal', component:BuildersComponent},
  // {path: 'properties', component:ProperitesComponent},
  {path:'properties', component:ProperitesComponent},
  {path: 'loans', component:LoansComponent},
  {path: 'services', component:ServicesComponent},
  {path: "users-login", component: LoginComponent},
  {path: 'contact-us', component:ContactUsComponent},
  {path: 'feedback', component:FeedbackComponent},
  {path: 'blog', component:BlogComponent},
  {path:'agents-login',component:AgentsLoginComponent},
  {path:'builders-login',component:BuildersLoginComponent},
  {path:'sellers-login',component:SellersLoginComponent},
  {path:'buyers-login',component:BuyersLoginComponent},
  {path:'happy-living', component:HappyLivingComponent},
  {path:'prime-locations', component:PrimeLocationsComponent},
  {path:'price-trands',component:PriceTrandsComponent},
  {path:'technology', component:TechnologyComponent},
  {path:'investments', component:InvestmentsComponent},
  {path:'press-relases',component:PressRelasesComponent},
  {path:'events', component:EventsComponent},
  {path:'gallery', component:GalleryComponent},
  {path:'open-lands', component:OpenLandsComponent},
  {path:'open-lands-inner', component:OpenLandsInnerComponent}

];


@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }