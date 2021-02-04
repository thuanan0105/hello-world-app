import { IApi } from '@/models';

export class BaseApi implements IApi {
  protected baseUrl: string = 'https://jsonplaceholder.typicode.com/'
  async fetch(url: string): Promise<any> { }
}
