import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SlideDialogComponent } from "./slide-dialog.component";
import { OverlayModule } from "@angular/cdk/overlay";
import { PortalModule } from "@angular/cdk/portal";

@NgModule({
  declarations: [SlideDialogComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [CommonModule, PortalModule,OverlayModule],
  exports: [SlideDialogComponent],
})
export class SlideDialogModule {}
