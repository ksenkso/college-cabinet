import { Component, OnInit } from '@angular/core';
import {ProtocolService} from "../../../../../shared/services/protocol.service";
import {Protocol} from "../../../../../shared/classes/protocol";
import {IProtocol} from "../../../../../shared/interfaces/protocol";

@Component({
  selector: 'app-protocols-parent-meetings',
  templateUrl: './protocols-parent-meetings.component.html',
  styleUrls: ['./protocols-parent-meetings.component.css']
})
export class ProtocolsParentMeetingsComponent implements OnInit {

  protocols: IProtocol[];

  constructor(private ps: ProtocolService) { }

  ngOnInit() {
    this.ps
      .getAll(Protocol.PROTOCOL_PARENTS)
      .then(protocols => this.protocols = protocols);
  }

}
