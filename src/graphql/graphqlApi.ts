import { print } from 'graphql';
import { GetTotalCompleteDocument, GetTotalPendingDocument, GetTotalSumDocument, GetTransactionsDocument, InsertTransactionDocument, type GetTotalCompleteQueryVariables, type GetTotalPendingQueryVariables, type GetTotalSumQuery, type GetTotalSumQueryVariables, type GetTransactionsQuery, type GetTransactionsQueryVariables, type InsertTransactionMutation, type InsertTransactionMutationVariables } from './graphql';
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

export async function graphqlGetTotalComplete(variables:GetTotalCompleteQueryVariables) {
    const request = await fetch(url, {
        method: 'POST',
        headers,
        body: JSON.stringify({
            query:print(GetTotalCompleteDocument),
            variables
        })
    })
    return await request.json() as GraphQLResponse<GetTotalCompleteQueryVariables>;
}

export async function graphlqGetTotalPending(variables:GetTotalPendingQueryVariables) {
    const request = await fetch(url, {
        method:'POST',
        headers,
        body: JSON.stringify({
            query:print(GetTotalPendingDocument),
            variables
        })
    })
    return await request.json() as GraphQLResponse<GetTotalPendingQueryVariables>;
}