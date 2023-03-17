import { print } from 'graphql';
import { GetAccountsDocument, GetCategoriesDocument, GetStatusesDocument, GetTotalSumDocument, GetTransactionCountDocument, GetTransactionsDocument, InsertTransactionDocument, UpdateTransactionDocument, type GetAccountsQuery, type GetAccountsQueryVariables, type GetCategoriesQuery, type GetCategoriesQueryVariables, type GetStatusesQuery, type GetStatusesQueryVariables, type GetTotalSumQuery, type GetTotalSumQueryVariables, type GetTransactionCountQuery, type GetTransactionCountQueryVariables, type GetTransactionsQuery, type GetTransactionsQueryVariables, type InsertTransactionMutation, type InsertTransactionMutationVariables, type UpdateTransactionMutation, type UpdateTransactionMutationVariables } from './graphql';
import { env } from '$env/dynamic/public'; 

const url = env.PUBLIC_HASURA_URL;
const headers = {
    'Content-Type': 'application/json',
    'x-hasura-admin-secret': env.PUBLIC_HASURA_ADMIN_SECRET
}

type GraphQLResponse<T> = {
    errors: any;
    data: T;
}

export async function graphqlGetTransactions(variables: GetTransactionsQueryVariables) {
    const request = await fetch(url, {
        method:"POST",
        headers,
        body: JSON.stringify({
            query: print(GetTransactionsDocument),
            variables
       })
    })
    return await request.json() as GraphQLResponse<GetTransactionsQuery>;
}

export async function graphqlInsertTransaction(variables: InsertTransactionMutationVariables){
    const request = await fetch(url, {
        method:"POST",
        headers,
        body: JSON.stringify({
            query: print(InsertTransactionDocument),
            variables
        })
    })
    return await request.json() as GraphQLResponse<InsertTransactionMutation>;
}

export async function graphqlGetTotalSum(variables:GetTotalSumQueryVariables) {
    const request = await fetch(url, {
        method:'POST',
        headers,
        body: JSON.stringify({
            query:print(GetTotalSumDocument),
            variables
        })
    })
    return await request.json() as GraphQLResponse<GetTotalSumQuery>;
}

export async function graphqlGetAccounts(variables:GetAccountsQueryVariables){
    const request = await fetch(url, {
        method: "POST",
        headers,
        body: JSON.stringify({
            query:print(GetAccountsDocument),
            variables
        })
    })
    return await request.json() as GraphQLResponse<GetAccountsQuery>;
}

export async function graphqlGetTransactionCount(variables:GetTransactionCountQueryVariables) {
    const request = await fetch(url,{
        method: "POST",
        headers,
        body: JSON.stringify({
            query:print(GetTransactionCountDocument),
            variables
        })
    })
    return await request.json() as GraphQLResponse<GetTransactionCountQuery>;
}

export async function graphqlUpdateTransaction(variables:UpdateTransactionMutationVariables) {
    const request = await fetch(url,{
        method:"POST",
        headers,
        body: JSON.stringify({
            query:print(UpdateTransactionDocument),
            variables
        })
    })
    return await request.json() as GraphQLResponse<UpdateTransactionMutation>;
}

export async function graphqlGetCategories(variables:GetCategoriesQueryVariables) {
    const request = await fetch(url,{
        method:'POST',
        headers,
        body: JSON.stringify({
            query:print(GetCategoriesDocument),
            variables
        })
    })
    return await request.json() as GraphQLResponse<GetCategoriesQuery>;
}

export async function graphqlGetStatuses(variables:GetStatusesQueryVariables) {
    const request = await fetch(url,{
        method:'POST',
        headers,
        body: JSON.stringify({
            query:print(GetStatusesDocument),
            variables
        })
    })
    return await request.json() as GraphQLResponse<GetStatusesQuery>;
}