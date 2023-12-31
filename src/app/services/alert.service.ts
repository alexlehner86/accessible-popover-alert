import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class AlertService {
    private readonly _customAlertCssClass = 'custom-alert';

    private _alertContainer: HTMLDivElement;
    private _currentAlert: HTMLElement | undefined;
    private _hideAlertTimeout: NodeJS.Timeout | undefined;

    constructor(@Inject(DOCUMENT) private document: Document) {
        this._alertContainer = this.document.createElement('div');
        this._alertContainer.setAttribute('id', 'alert-container');
        this.document.body.appendChild(this._alertContainer);
    }

    public showAlert(message: string): void {
        if (this._currentAlert) {
            this._alertContainer.removeChild(this._currentAlert);
            clearTimeout(this._hideAlertTimeout);
        }
        this._currentAlert = this.createAlert(message);
        this._alertContainer.appendChild(this._currentAlert);
        this._currentAlert.showPopover();
        this._hideAlertTimeout = setTimeout(() => this._currentAlert?.hidePopover(), 4000);
    }

    private createAlert(message: string): HTMLElement {
        const alertElement = this.document.createElement('div');
        alertElement.setAttribute('popover', 'manual');
        alertElement.setAttribute('role', 'alert');
        alertElement.classList.add(this._customAlertCssClass);
        alertElement.innerText = message;
        return alertElement;
    }
}
