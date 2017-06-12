import {Component, Input, OnInit} from '@angular/core';
import {IProtocol} from "../../../../../shared/interfaces/protocol";
import {Protocol} from "../../../../../shared/classes/protocol";

@Component({
  selector: 'app-protocol-view-parents',
  templateUrl: './protocol-view-parents.component.html',
  styleUrls: ['./protocol-view-parents.component.css']
})
export class ProtocolViewParentsComponent implements OnInit {

  @Input() protocol: Protocol;

  constructor() { }

  ngOnInit() {
  }

}
