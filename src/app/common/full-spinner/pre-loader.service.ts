import { Component, ElementRef, Injectable, OnInit, Renderer2 } from "@angular/core";
import { Overlay } from '@angular/cdk/overlay';
import { defer, finalize, NEVER, share } from "rxjs";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { ComponentPortal } from "@angular/cdk/portal";

@Component({
  selector: 'pre-loader',
  template: `<div class="p-box pt68"><mat-progress-bar mode="indeterminate" color="primary"></mat-progress-bar></div>`,
  standalone: true,
  imports: [MatProgressBarModule]
})
export class PreLoaderComponent implements OnInit {
  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
    this.renderer.setStyle(this.el.nativeElement, 'width', '100%');
  }
}


@Injectable({
  providedIn: 'root',
})
export class PreLoaderService {
  spinnerTopRefLight: any;
  constructor(private overlay: Overlay) {
    this.spinnerTopRefLight = this.cdkSpinnerCreateLight();
  }

  showSpinner() {
    this.spinnerTopRefLight.attach(new ComponentPortal(PreLoaderComponent));
  }

  stopSpinner() {
    this.spinnerTopRefLight.detach();
  }

  private cdkSpinnerCreateLight() {
    return this.overlay.create({
      width: '100%',
      hasBackdrop: true,
      backdropClass: 'no-backdrop',
      // panelClass: this.router.url === '/login' ? 'no-panel-pad' : '',
      positionStrategy: this.overlay.position().global(),
      // .centerHorizontally()
      // .centerVertically()
    });
  }

  public readonly emptySpinner = defer(() => {
    this.showSpinner();
    return NEVER.pipe(
      finalize(() => {
        this.spinnerTopRefLight.hasAttached() ? this.stopSpinner() : null;
      })
    );
  }).pipe(share());

}