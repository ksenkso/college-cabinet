import {Component, OnDestroy, OnInit} from "@angular/core";
import {OverlayService} from "../../services/overlay.service";
import {animate, transition, state, trigger, style} from "@angular/animations";
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'app-overlay',
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.css'],
  animations: [
    trigger('toggle', [
      state('void', style({
        display: 'none',
        opacity: 0
      })),
      state('*', style({
        display: 'block',
        opacity: 1,
        height: '*'
      })),
      transition('void <=> *', animate('300ms ease-in-out'))
    ])
  ]
})
export class OverlayComponent implements OnInit, OnDestroy {

  sub: Subscription;
  visible = false;

  constructor(private overlayService: OverlayService) {

    if (!this.sub) {

      this.sub = overlayService.visible$.subscribe(() => {
        this.visible = !this.visible;

        console.log(this.visible);
      });
    }

  }

  ngOnInit() {
    console.log('overlay');
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }


}
