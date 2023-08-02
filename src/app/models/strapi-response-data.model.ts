import { Meta } from "./pagination.model";

export interface StrapiResponse<T> {
  data: T;
  meta?: Meta;
}
