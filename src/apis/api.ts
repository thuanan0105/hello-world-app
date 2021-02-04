import { AxiosApi } from "@/apis/axiosApi";
import { BaseApi } from "@/apis/baseApi";
import { IApi } from "@/models";

export class Api extends BaseApi implements IApi {
  private provider: any = new AxiosApi();

  async fetch(url: string): Promise<any> {
    return await this.provider.fetch(url);
  }
}
