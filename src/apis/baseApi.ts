import { IApi } from '@/models';

export class BaseApi implements IApi {
  protected baseUrl: string = 'https://jsonplaceholder.typicode.com'

  async get(url: string): Promise<any> { }

  async post(url: string, params: any): Promise<any> { }

  async patch(url: string, params: any): Promise<any> { }

  async delete(url: string): Promise<any> { }
}
