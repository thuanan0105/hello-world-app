import { IApi } from '@/models';
import { AxiosApi } from './axiosApi';
import { BaseApi } from './baseApi';

export class Api extends BaseApi implements IApi {
  private provider: any = new AxiosApi()

  async get(url: string): Promise<any> {
    return await this.provider.get(url)
  }

  async patch(url: string, params: any): Promise<any> {
    return await this.provider.patch(url, params)
  }

  async delete(url: string): Promise<any> {
    return await this.provider.delete(url);
  }

  async post(url: string, params: any): Promise<any> {
    return await this.provider.post(url, params);
  }

}
