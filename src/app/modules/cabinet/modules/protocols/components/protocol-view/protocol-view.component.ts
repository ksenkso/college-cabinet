import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {IProtocol} from "../../../../../shared/interfaces/protocol";
import {Subscription} from "rxjs/Subscription";
import {ProtocolService} from "../../../../../shared/services/protocol.service";

@Component({
  selector: 'app-protocol-view',
  templateUrl: './protocol-view.component.html',
  styleUrls: ['./protocol-view.component.css']
})
export class ProtocolViewComponent implements OnInit, OnDestroy {

  protocol: IProtocol;
  sub: Subscription;

  constructor(
    private route: ActivatedRoute,
    private ps: ProtocolService
  ) { }

  ngOnInit() {
    this.sub = this.route.params
      .switchMap(params => this.ps.get(+params['id']))
      .subscribe(protocol => this.protocol = protocol);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
