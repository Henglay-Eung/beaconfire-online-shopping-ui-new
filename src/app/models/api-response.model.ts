export interface ApiResponse<T> {
  message: string;
  data: T;
}

export interface PagableApiResponse<T> extends ApiResponse<T> {
    currentPage: number;
    totalItems: number;
    totalPages: number
    pageSize: number;
}


