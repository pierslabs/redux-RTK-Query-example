import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const postsApi = createApi({
  reducerPath: 'posts',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com',
  }),
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => '/posts',
    }),
    getPostById: builder.query({
      query: (id) => `/posts/${id}`,
    }),
  }),
});

// Cuando utilizamos createApi nos crea customHooks por ejemplo getPost crearia useGetPostsQuery al ser un GET le pondria useGetPostsMutation si fuera un POST, PUT,DELETE
export const { useGetPostsQuery, useGetPostByIdQuery } = postsApi;
