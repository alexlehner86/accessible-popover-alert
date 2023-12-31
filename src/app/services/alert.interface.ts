export enum AlertPosition {
    BottomCenter = 'bottom-center',
    TopRight = 'top-right',
}

export interface AlertConfig {
    /**
     * Alert duration in milliseconds.
     */
    duration: number;
    /**
     * Where the alert should be shown.
     */
    position: AlertPosition;
}
