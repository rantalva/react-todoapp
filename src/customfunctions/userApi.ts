import type { ApiResponse } from "../types";

export const fetchUsers = (): Promise<ApiResponse> => {
  return fetch(import.meta.env.VITE_API_URL, {
    headers: { 'x-api-key': 'reqres-free-v1' }
  })
  .then((response) => {
    if (!response.ok) {
      throw new Error(`Error in fetch: ${response.status}`);
    }
    return response.json();
  });
}