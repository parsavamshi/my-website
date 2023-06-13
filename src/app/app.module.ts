import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StickyNavModule } from 'ng2-sticky-nav';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavComponent } from './components/common/nav/nav.component';
import { FooterComponent } from './components/common/footer/footer.component';
import { AgentsComponent } from './components/common/agents/agents.component';
import { BuildersComponent } from './components/common/builders/builders.component';
import { ProperitesComponent } from './components/common/properites/properites.component';
import { LoansComponent } from './components/common/loans/loans.component';
import { ServicesComponent } from './components/common/services/services.component';
import { LoginComponent } from './components/common/login/login.component';
import { FormsModule } from '@angular/forms';
import { FeedbackComponent } from './components/common/feedback/feedback.component';
import { BlogComponent } from './components/common/blog/blog.component';
import { NgxScrollTopModule } from 'ngx-scrolltop';
import {NgxPaginationModule} from 'ngx-pagination';
import { SubscribeComponent } from './components/common/subscribe/subscribe.component';
import { NewsletterComponent } from './components/common/newsletter/newsletter.component';
import { OurGalleryComponent } from './components/common/our-gallery/our-gallery.component';
import { AgentsLoginComponent } from './components/common/agents-login/agents-login.component';
import { BuildersLoginComponent } from './components/common/builders-login/builders-login.component';
import { BuyersLoginComponent } from './components/common/buyers-login/buyers-login.component';
import { SellersLoginComponent } from './components/common/sellers-login/sellers-login.component';
import { LoginNavbarComponent } from './components/common/login-navbar/login-navbar.component';
import { HappyLivingComponent } from './components/common/happy-living/happy-living.component';
import { PrimeLocationsComponent } from './components/common/prime-locations/prime-locations.component';
import { PriceTrandsComponent } from './components/common/price-trands/price-trands.component';
import { TechnologyComponent } from './components/common/technology/technology.component';
import { InvestmentsComponent } from './components/common/investments/investments.component';
import { PressRelasesComponent } from './components/common/press-relases/press-relases.component';
import { EventsComponent } from './components/common/events/events.component';
import { GalleryComponent } from './components/common/gallery/gallery.component';
import { BlogNavComponent } from './components/common/blog-nav/blog-nav.component'; 
import { WelcomeComponent } from './components/common/welcome/welcome.component';
import { OpenLandsComponent } from './components/common/open-lands/open-lands.component';
import { OpenLandsInnerComponent } from './components/common/open-lands-inner/open-lands-inner.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    FooterComponent,
    AgentsComponent,
    BuildersComponent,
    ProperitesComponent,
    LoansComponent,
    ServicesComponent,
    LoginComponent,
    FeedbackComponent,
    BlogComponent,
    SubscribeComponent,
    NewsletterComponent,
    OurGalleryComponent,
    AgentsLoginComponent,
    BuildersLoginComponent,
    BuyersLoginComponent,
    SellersLoginComponent,
    LoginNavbarComponent,
    HappyLivingComponent,
    PrimeLocationsComponent,
    PriceTrandsComponent,
    TechnologyComponent,
    InvestmentsComponent,
    PressRelasesComponent,
    EventsComponent,
    GalleryComponent,
    BlogNavComponent,
    WelcomeComponent,
    OpenLandsComponent,
    OpenLandsInnerComponent
  ],
  imports: [
    BrowserModule,
    StickyNavModule,
    AppRoutingModule,
    FormsModule,
    NgxScrollTopModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
