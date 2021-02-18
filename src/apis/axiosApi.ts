import { BaseApi } from '@/apis';
import { IApi } from '@/models';
import axios from 'axios';


export class AxiosApi extends BaseApi implements IApi {
  async fetch(url: string): Promise<any> {
    const { data } = await axios.get(`${this.baseUrl}/${url}`)
    return data
  }
}
