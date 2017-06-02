import { Injectable } from '@angular/core';
import {ApiClientService} from "../../shared/services/api-client.service";
import {Attachment} from "../interfaces/attachment";

@Injectable()
export class PortfolioService {

  private endpoint = '/portfolio';

  _toUpdate: any[];
  _toCreate: any[];
  _toDelete: any[];


  static TYPE_GRADE = 1;
  static TYPE_WORK = 2;
  static TYPE_COURSE = 3;
  static TYPE_ADDITIONAL = 4;
  static TYPE_OLYMPIADS = 5;
  static TYPE_CONF = 6;
  static TYPE_SPORT = 7;
  static TYPE_CREATIVE = 8;
  static ATTACHMENT_PHOTO = 100;
  static ATTACHMENT_DOC = 101;

  constructor(private apiClient: ApiClientService) { }

  getList(): Promise<any[]> {
    return this.apiClient
      .get('/student');
  }

  getSection(user_id: number, sectionType: number): Promise<any[]> {
    return this.apiClient
      .get(`${this.endpoint}/${user_id}/${sectionType}`)

  }

  updatePart(data: any) {
    return this.apiClient
      .post(this.endpoint, data);
  }


  set(params: { create: number[]; update: number[]; delete: number[] }) {
    this._toCreate = params.create;
    this._toUpdate = params.update;
    this._toDelete = params.delete;
  }

  save(params: { create: any[]; update: any[]; delete: number[] }) {
    this.apiClient
      .post(this.endpoint, params)
  }

  getAttachments(userId: number, type: number): Promise<Attachment[]> {

    return this.apiClient
      .get<Attachment[]>(`${this.endpoint}/attachment/${userId}/${type}`);
  }

  getAttachment(attachmentId: number): Promise<Attachment> {
    return this.apiClient
      .get<Attachment>(`${this.endpoint}/attachment/${attachmentId}`);
  }


  saveAttachment(attachment: File, type: number): Promise<Attachment> {

    const fd = new FormData();
    fd.append('attachment', attachment);

    return this.apiClient
      .post<Attachment>(`${this.endpoint}/attachment/${type}`, fd)

  }


}
