import { Keyable } from './Keyable';

export interface Response<T> extends Keyable {
  data: T;
}
