import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { AlertPosition, AlertConfig } from '../../services/alert.interface'
import { AlertService } from '../../services/alert.service'

@Component({
    selector: 'app-alert-form',
    standalone: true,
    imports: [CommonModule, FormsModule],
    templateUrl: './alert-form.component.html',
    styleUrl: './alert-form.component.css',
})
export class AlertFormComponent {
    public readonly positionValue = AlertPosition

    public alertDurationInSeconds = 4
    public alertMessage = 'This is a very important message'
    public alertPosition = AlertPosition.BottomCenter

    constructor(private alertService: AlertService) {}

    public showAlert(): void {
        const alertConfig: AlertConfig = {
            duration: this.alertDurationInSeconds * 1000,
            position: this.alertPosition,
        }
        this.alertService.showAlert(this.alertMessage, alertConfig)
    }
}
