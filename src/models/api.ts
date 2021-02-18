export interface IApi {
  get(url: string): Promise<any>;
}