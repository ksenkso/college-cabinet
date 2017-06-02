import { Injectable } from '@angular/core';
import {ApiClientService} from "../../shared/services/api-client.service";
import {Response} from "@angular/http";

@Injectable()
export class DocumentsService {

  static TYPE_ANALYSIS = 1;
  static TYPE_DIARY = 2;
  static TYPE_PORTFOLIO = 3;

  private endpoint = '/document';

  constructor(
    private apiClient: ApiClientService
  ) { }

  getDocument(typeId: number, userId?: number) {

    let url = `${this.endpoint}/${typeId}`;

    if (userId) url += `/${userId}`;

    this.
    apiClient
      .getFile(url)
      .then((response: Response) => {

        const disposition = response.headers.get('Content-Disposition');
        console.log(disposition);

        let name = disposition.match(/filename\*=utf-8''([%\w]+)\.docx/)[1];
        console.log(name);

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
