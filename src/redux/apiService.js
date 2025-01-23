import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import Cookies from 'js-cookie';

const API_URL = 'http://localhost:8080'; // Replace with your API base URL

export interface AuthResponse {
    refresh_token: string;
    access_token: string;
    role: string;
    email: string;
    full_name: string;
}

export interface Institute {
    id: number;
    name: string;
    // Add other properties as needed
}

export const apiService = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: API_URL,
    }),
    endpoints: (builder) => ({
        
    }),
});

export const {
    useFetchItemsWithAuthQuery,
    useLoginMutation,
    useFetchAssessmentWithAuthQuery,
    useSignupMutation,
    useLogoutMutation,
    useFetchInstitutesWithAuthQuery,
    useFetchUsersWithAuthQuery,
    useFetchVideoDetailsWithAuthQuery,
    useCreateVideoDetailsMutation,
    useFetchCoursesWithAuthQuery,
    useFetchModulesWithAuthQuery,
    useFetchSectionsWithAuthQuery,
    useFetchQuestionsWithAuthQuery,
    useUpdateSectionItemProgressMutation,
} = apiService;