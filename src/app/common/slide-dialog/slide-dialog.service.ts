import { Overlay, OverlayConfig, OverlayRef } from "@angular/cdk/overlay";
import { ComponentPortal } from "@angular/cdk/portal";
import { ComponentRef, Injectable, Injector } from "@angular/core";
import { MessageData, SLIDE_DIALOG_DATA } from "./slide-dialog-interface";
import { SlideDialogOverlayRef } from "./slide-dialog-overlay";
import { SlideDialogComponent } from "./slide-dialog.component";

interface messagePortalDialogConfig {
  panelClass?: string;
  hasBackdrop?: boolean;
  backdropClass?: string;
  width?: string;
  data?: MessageData | any;
}

const DEFAULT_CONFIG: messagePortalDialogConfig = {
  width: "100%",
  hasBackdrop: true,
  // backdropClass: "bg-transparent",
  panelClass: "slide-dialog",
  data: null,
};

@Injectable({
  providedIn: "root",
})
export class SlideDialogService {
  constructor(private overlay: Overlay, private injector: Injector) { }

  open(config: messagePortalDialogConfig = {}, bottom?: any) {
    console.log(config);
    const dialogConfig = { ...DEFAULT_CONFIG, ...config };
    const overlayRef = this.createOverlay(dialogConfig);

    // Instantiate remote control
    const dialogRef = new SlideDialogOverlayRef(overlayRef);

    const messagePortal = this.attachDialogContainer(
      overlayRef,
      dialogConfig,
      dialogRef
    );
    // overlayRef.attach(messagePortal);
    overlayRef.backdropClick().subscribe();
    return dialogRef;
    // (_) => dialogRef.close()
  }

  private getOverlayConfig(config: messagePortalDialogConfig): OverlayConfig {
    const positionStrategy = this.overlay
      .position()
      .global()
      .top("16px")
      .left("0")
      .right("17px");

    const overlayConfig = new OverlayConfig({
      hasBackdrop: config.hasBackdrop,
      backdropClass: config.backdropClass,
      panelClass: config.panelClass,
      scrollStrategy: this.overlay.scrollStrategies.block(),
      positionStrategy,
    });

    return overlayConfig;
  }
  private createOverlay(config: messagePortalDialogConfig) {
    // Returns an OverlayConfig
    const overlayConfig = this.getOverlayConfig(config);

    // Returns an OverlayRef
    return this.overlay.create(overlayConfig);
  }

  private attachDialogContainer(
    overlayRef: OverlayRef,
    config: messagePortalDialogConfig,
    dialogRef: SlideDialogOverlayRef
  ) {
    const injector = this.createInjector(config, dialogRef);

    const containerPortal = new ComponentPortal(
      SlideDialogComponent,
      null,
      injector
    );
    const containerRef: ComponentRef<SlideDialogComponent> = overlayRef.attach(
      containerPortal
    );

    return containerRef.instance;
  }

  private createInjector(
    config: messagePortalDialogConfig,
    dialogRef: SlideDialogOverlayRef
  ): Injector {
    return Injector.create({
      providers: [
        { provide: SlideDialogOverlayRef, useValue: dialogRef },
        { provide: SLIDE_DIALOG_DATA, useValue: config.data },
      ],
    });
  }
}
