import { Injectable } from '@angular/core';
import {ApiClientService} from "../../shared/services/api-client.service";
import {Response} from "@angular/http";

@Injectable()
export class DocumentsService {

  private endpoint = '/document';

  constructor(
    private apiClient: ApiClientService
  ) { }

  getDocument(typeId: number) {




    this.
    apiClient
      .getFile(`${this.endpoint}/${typeId}`)
      .then((response: Response) => {

        const disposition = response.headers.get('Content-Disposition');
        console.log(disposition);

        let name = disposition.match(/filename\*=utf-8''([%\w]+)\.docx/)[1];

        name = decodeURIComponent(name);

        const blob = (<any>response)._body;
        console.log(blob);
        const link = document.createElement('a');
        link.href = window.URL.createObjectURL(blob);
        link.download = `${name}.docx`;
        link.click();

      });
  }

}
