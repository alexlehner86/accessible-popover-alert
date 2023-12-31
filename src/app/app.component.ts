import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { AlertService } from './services/alert.service';
import { FormsModule } from '@angular/forms';
import { AlertConfig, AlertPosition } from './services/alert.interface';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [CommonModule, RouterOutlet, FormsModule],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
})
export class AppComponent {
    public readonly positionValue = AlertPosition;

    public alertDurationInSeconds = 4;
    public alertMessage = 'This is a very important message';
    public alertPosition = AlertPosition.BottomCenter;

    constructor(private alertService: AlertService) {}

    public showAlert(): void {
        const alertConfig: AlertConfig = {
            duration: this.alertDurationInSeconds * 1000,
            position: this.alertPosition,
        };
        this.alertService.showAlert(this.alertMessage, alertConfig);
    }
}
