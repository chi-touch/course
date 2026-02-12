import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const courseApi = createApi({
    reducerPath: 'courseApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
    endpoints: (builder) => ({
        createCourse: builder.mutation({
            query: (body) => ({
                url: 'posts',
                method: 'POST',
                body,
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            }),
        }),
        getCourses: builder.query<any[], void>({
            query: () => 'posts',
        }),

    }),
});

export const { useCreateCourseMutation, useGetCoursesQuery } = courseApi;
