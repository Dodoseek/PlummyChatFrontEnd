import { api } from "./api";
import { FriendRequest, FriendResponse, UsersFriends } from "@/types/friends";

export const friendsApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getMyRecievedRequests: builder.query<FriendResponse, { access_token: string }>({
            query: (data) => ({
                url: `/friendlist/receiver/`,
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${data.access_token}`
                }
            }),
            providesTags: (result, error, arg) =>
            result
              ? [
                ...result.results.map(({ id }) => ({ type: 'ReceivedRequest' as const, id })), 
                {type:'ReceivedRequest', id: "LIST"},
            ]
              : [{type:'ReceivedRequest', id: "LIST"}],
            
        }),
        getMySendedRequests: builder.query<FriendResponse, { access_token: string }>({
            query: (data) => ({
                url: `/friendlist/request/`,
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${data.access_token}`
                }
            }),
            extraOptions: { maxRetries: 1 },
            providesTags: (result, error, arg) =>
            result
              ? [
                ...result.results.map(({ id }) => ({ type: 'SendedRequest' as const, id })), 
                {type: 'SendedRequest', id: "LIST"}]
              : [{type: 'SendedRequest', id: "LIST"}],
        }),
        createRequest: builder.mutation<FriendRequest, { user: number, access_token: string }>({
            query: (data) => ({
                url: `/friendlist/request/`,
                method: 'POST',
                body: {
                    user: data.user
                },
                headers: {
                    Authorization: `Bearer ${data.access_token}`
                }
            }),
            extraOptions: { maxRetries: 1 },
            invalidatesTags: [{ type: 'SendedRequest', id: "LIST" }],
            // async onQueryStarted(_, { dispatch, queryFulfilled }) {
            //     await queryFulfilled;
            //     dispatch(api.util.invalidateTags(["SendedRequest"]));
            //   },
        }),
        updateRequest: builder.mutation<FriendRequest, { user: number, is_active: boolean, access_token: string }>({
            query: (data) => ({
                url: `/friendlist/update/${data.user}/`,
                method: 'PUT',
                body: {
                    is_active: data.is_active
                },
                headers: {
                    Authorization: `Bearer ${data.access_token}`
                }
            }),
            extraOptions: { maxRetries: 1 },
            invalidatesTags: [{ type: 'ReceivedRequest', id: "LIST" }, { type: 'FriendsList', id: "LIST" }],
            // async onQueryStarted(_, { dispatch, queryFulfilled }) {
            //     await queryFulfilled;
            //     dispatch(api.util.invalidateTags(["ReceivedRequest"]));
            //   },
        }),
        deleteRequest: builder.mutation<void, { user: number, access_token: string }>({
            query: (data) => ({
                url: `/friendlist/request/${data.user}/`,
                method: 'DELETE',
                headers: {
                    Authorization: `Bearer ${data.access_token}`
                }
            }),
            extraOptions: { maxRetries: 1 },
            invalidatesTags: [{ type: 'SendedRequest', id: "LIST" }],
            // async onQueryStarted(_, { dispatch, queryFulfilled }) {
            //     await queryFulfilled;
            //     dispatch(api.util.invalidateTags(["SendedRequest"]));
            //   },
        }),

        getFriendListById: builder.query<UsersFriends, { user: number }>({
            query: (data) => ({
                url: `/friendlist/friends/${data.user}/`,
                method: 'GET',
            }),
            extraOptions: { maxRetries: 1 },
            providesTags: (result, error, arg) =>
            result
              ? [
                ...result.friends.map(({ id }) => ({ type: 'FriendsList' as const, id })), 
                {type: 'FriendsList', id: "LIST"}]
              : [{type: 'FriendsList', id: "LIST"}],
        }),
        deleteFriend: builder.mutation<UsersFriends, { user: number, access_token: string }>({
            query: (data) => ({
                url: `/friendlist/friends/${data.user}/`,
                method: 'DELETE',
                headers: {
                    Authorization: `Bearer ${data.access_token}`
                }
            }),
            extraOptions: { maxRetries: 1 },
            invalidatesTags: [{ type: 'FriendsList', id: "LIST" }],
            // async onQueryStarted(_, { dispatch, queryFulfilled }) {
            //     await queryFulfilled;
            //     dispatch(api.util.invalidateTags(["FriendsList"]));
            //   },
        }),
    }),
})


export const {
    useLazyGetMyRecievedRequestsQuery,
    useGetMyRecievedRequestsQuery,
    useLazyGetMySendedRequestsQuery,
    useGetMySendedRequestsQuery,

    useCreateRequestMutation,
    useUpdateRequestMutation,
    useDeleteRequestMutation,

    useLazyGetFriendListByIdQuery,
    useGetFriendListByIdQuery,

    useDeleteFriendMutation,
    
} = friendsApi