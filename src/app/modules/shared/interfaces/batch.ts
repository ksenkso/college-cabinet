export interface Batch<T> {
  create: T[];
  update: T[];
  delete: number[];
}
