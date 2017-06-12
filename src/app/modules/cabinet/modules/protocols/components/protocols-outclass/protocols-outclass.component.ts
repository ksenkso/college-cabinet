import { Component, OnInit } from '@angular/core';
import {ProtocolService} from "../../../../../shared/services/protocol.service";
import {Protocol} from "../../../../../shared/classes/protocol";
import {IProtocol} from "../../../../../shared/interfaces/protocol";

@Component({
  selector: 'app-protocols-outclass',
  templateUrl: './protocols-outclass.component.html',
  styleUrls: ['./protocols-outclass.component.css']
})
export class ProtocolsOutclassComponent implements OnInit {

  protocols: IProtocol[];

  constructor(private ps: ProtocolService) { }

  ngOnInit() {
    this.ps
      .getAll(Protocol.PROTOCOL_OUTCLASS)
      .then(protocols => this.protocols = protocols);
  }

}
