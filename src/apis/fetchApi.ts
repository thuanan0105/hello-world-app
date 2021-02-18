import { BaseApi } from '@/apis';
import { IApi } from '@/models';


export class FetchApi extends BaseApi implements IApi {
  async fetch(url: string): Promise<any> {
    const response = await fetch(`${this.baseUrl}/${url}`)
    return await response.json()
  }
}
