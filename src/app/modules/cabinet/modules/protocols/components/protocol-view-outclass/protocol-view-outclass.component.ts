import {Component, Input, OnInit} from '@angular/core';
import {IProtocol} from "../../../../../shared/interfaces/protocol";

@Component({
  selector: 'app-protocol-view-outclass',
  templateUrl: './protocol-view-outclass.component.html',
  styleUrls: ['./protocol-view-outclass.component.css']
})
export class ProtocolViewOutclassComponent implements OnInit {

  @Input() protocol: IProtocol;

  constructor() { }

  ngOnInit() {

  }

}
