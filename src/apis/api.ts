import { IApi } from '@/models';
import { AxiosApi } from './axiosApi';
import { BaseApi } from './baseApi';

export class Api extends BaseApi implements IApi {
  private provider: any = new AxiosApi()
  async fetch(url: string): Promise<any> {
    return await this.provider.fetch(url)
  }

}
