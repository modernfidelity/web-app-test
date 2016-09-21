import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EventsComponent} from './events.component';
import {eventsRouting} from './events.routing';

@NgModule({
    imports: [
        CommonModule,
        eventsRouting
    ],
    declarations: [EventsComponent]
})
export class EventsModule {
}
