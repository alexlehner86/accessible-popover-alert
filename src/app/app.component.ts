import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { AlertService } from './services/alert.service';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [CommonModule, RouterOutlet],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
    constructor(private alertService: AlertService) {}

    public ngOnInit(): void {
        // this.alertService.init();
    }

    public showAlert(): void {
        this.alertService.showAlert('This is a very important message!');
    }
}
