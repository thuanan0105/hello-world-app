import { BaseApi } from '@/apis';
import { IApi } from '@/models';
import axios from 'axios';


export class AxiosApi extends BaseApi implements IApi {
  async get(url: string): Promise<any> {
    const { data } = await axios.get(`${this.baseUrl}/${url}`);
    return data;
  }

  async post(url: string, params: any): Promise<any> {
    const { data } = await axios.post(`${this.baseUrl}/${url}`, params);
    return data;
  }

  async patch(url: string, params: any): Promise<any> {
    const { data } = await axios.patch(`${this.baseUrl}/${url}`, params);
    return data;
  }

  async delete(url: string): Promise<any> {
    const { status } = await axios.delete(`${this.baseUrl}/${url}`);
    return status;
  }
}
