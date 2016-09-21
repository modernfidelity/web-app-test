import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';


import {FrontpageComponent} from './frontpage/frontpage.component';
import {NewsComponent} from './news/news.component';


const eventRoutes: Routes = [
    {
        path: 'events',
        loadChildren: 'app/events/events.module#EventsModule'

    }
];

const appRoutes: Routes = [
    {
        path: '',
        component: FrontpageComponent
    },
    {
        path: 'news', component: NewsComponent
    },
    ...eventRoutes

];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);