import { Component } from '@angular/core'
import { AlertFormComponent } from './components/alert-form/alert-form.component';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [AlertFormComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
})
export class AppComponent {}
