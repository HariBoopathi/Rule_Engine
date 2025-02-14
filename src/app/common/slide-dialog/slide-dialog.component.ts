import {
  animate,
  state,
  style,
  transition,
  trigger,
} from "@angular/animations";
import {
  Component,
  EventEmitter,
  Inject,
  OnInit,
  TemplateRef,
} from "@angular/core";
import { SLIDE_DIALOG_DATA } from "./slide-dialog-interface";
import { SlideDialogOverlayRef } from "./slide-dialog-overlay";
const ANIMATION_TIMINGS = "400ms cubic-bezier(0.25, 0.8, 0.25, 1)";
@Component({
  selector: "app-slide-dialog",
  templateUrl: "./slide-dialog.component.html",
  styleUrls: ["./slide-dialog.component.scss"],
  animations: [
    trigger("slideContent", [
      state(
        "void",
        style({ transform: "translate3d(100%, 0, 0)", opacity: 0 })
      ),
      state("enter", style({ transform: "none", opacity: 1 })),
      state(
        "leave",
        style({ transform: "translate3d(100%, 0, 0)", opacity: 0 })
      ),
      transition("* => *", animate(ANIMATION_TIMINGS)),
    ]),
  ],
})
export class SlideDialogComponent implements OnInit {
  currentTemplate: TemplateRef<any>;
  animationState: "void" | "enter" | "leave" = "enter";
  animationStateChanged = new EventEmitter<AnimationEvent>();
  constructor(
    public dialogRef: SlideDialogOverlayRef,
    @Inject(SLIDE_DIALOG_DATA) public data: any
  ) {
    // setTimeout(() => {
    this.currentTemplate = this.data.template;
    // }, 100);
  }

  ngOnInit(): void {}

  onAnimationStart(event: AnimationEvent) {
    this.animationStateChanged.emit(event);
  }

  onAnimationDone(event: AnimationEvent) {
    this.animationStateChanged.emit(event);
  }
}
