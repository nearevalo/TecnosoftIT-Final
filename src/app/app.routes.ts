import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { NewsComponent } from './news/news.component';
import { ContactComponent } from './contact/contact.component';

export const ROUTES: Routes = [
    {   path: '',component: HomeComponent },
    {   path: 'home',component: HomeComponent },
    {   path: 'about',component: AboutComponent },
    {   path: 'services',component: ServicesComponent },
    {   path: 'portfolio',component: PortfolioComponent },
    {   path: 'news',component: NewsComponent },
    {   path: 'contact',component: ContactComponent },
    {   path: '**', component: HomeComponent  }
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(ROUTES);