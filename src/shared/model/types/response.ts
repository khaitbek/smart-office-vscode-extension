export interface BaseResponse<T> {
  error: string | null;
  message: string | null;
  timestamp: number;
  status: number;
  path: string | null;
  data: T;
  response: unknown;
}
