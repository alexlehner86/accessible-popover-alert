import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { AlertConfig, AlertPosition } from './alert.interface';

/**
 * Service for displaying alerts on top of all page content.
 * Screenreaders automatically announce the current alert when it is shown.
 */
@Injectable({
    providedIn: 'root',
})
export class AlertService {
    private readonly _customAlertCssClass = 'alert';

    private _alertContainer: HTMLDivElement;
    private _currentAlert: HTMLElement | undefined;
    private _hideAlertTimeout: NodeJS.Timeout | undefined;

    constructor(@Inject(DOCUMENT) private document: Document) {
        this._alertContainer = this.document.createElement('div');
        this._alertContainer.setAttribute('id', 'alert-container');
        this.document.body.appendChild(this._alertContainer);
    }

    public showAlert(
        message: string,
        config: AlertConfig = {
            duration: 4000,
            position: AlertPosition.TopRight,
        }
    ): void {
        if (this._currentAlert) {
            this._alertContainer.removeChild(this._currentAlert);
            clearTimeout(this._hideAlertTimeout);
        }
        this._currentAlert = this.createAlert(message, config.position);
        this._alertContainer.appendChild(this._currentAlert);
        this._currentAlert.showPopover();
        this._hideAlertTimeout = setTimeout(
            () => this._currentAlert?.hidePopover(),
            config.duration
        );
    }

    /**
     * Creates a manual popover element with role="alert".
     * Screenreaders automatically announce the alert when the popover is shown.
     */
    private createAlert(message: string, position: AlertPosition): HTMLElement {
        const alertElement = this.document.createElement('div');
        alertElement.setAttribute('popover', 'manual');
        alertElement.setAttribute('role', 'alert');
        alertElement.classList.add(this._customAlertCssClass, position);
        alertElement.innerText = message;
        return alertElement;
    }
}
