import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EventsComponent }    from './events.component';


const eventsRoutes: Routes = [
    { path: '',  component: EventsComponent },
    // { path: 'hero/:id', component: HeroDetailComponent }
];

export const eventsRouting: ModuleWithProviders = RouterModule.forChild(eventsRoutes);