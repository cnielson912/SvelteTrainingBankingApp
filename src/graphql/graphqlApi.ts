import { print } from 'graphql';
import { GetAccountsDocument, GetTotalSumDocument, GetTransactionsDocument, InsertTransactionDocument, type GetAccountsQuery, type GetAccountsQueryVariables, type GetTotalSumQuery, type GetTotalSumQueryVariables, type GetTransactionsQuery, type GetTransactionsQueryVariables, type InsertTransactionMutation, type InsertTransactionMutationVariables } from './graphql';
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