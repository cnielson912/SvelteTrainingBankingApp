<script lang='ts'>
    import { page } from '$app/stores';
    import { breadCrumbStore } from '../../../../breadCrumbStore';
    import { onMount } from "svelte";
	import { graphqlGetAccounts, graphqlGetTotalSum, graphqlGetTransactions } from "../../../../graphql/graphqlApi";
    import type { GetTransactionsQuery } from "../../../../graphql/graphql";
    let params = $page.params;
    let transactions:GetTransactionsQuery["transaction"] = [];
    let totalAll:number
    let totalComplete:number
    let totalPending:number
    let currentAccount:{id:any,name:string} | undefined
    
    $breadCrumbStore = [
        { name: 'home', url: '/' },
        { name: 'accounts', url: '/accounts' },
        {
            name:"loading...",
            url:('/accounts/' + params.accountId)
        },
        { name: 'transactions', url: '/transactions' }
    ];

    

    onMount(async ()=>{
        currentAccount = (await graphqlGetAccounts({where:{id:{_eq:params.accountId}}})).data.account.at(0);
        $breadCrumbStore = [
        { name: 'home', url: '/' },
        { name: 'accounts', url: '/accounts' },
        {
            name:currentAccount?.name ?? '',
            url:('/accounts/' + params.accountId)
        },
        { name: 'transactions', url: '/transactions' }
        ];
        transactions = (await graphqlGetTransactions({where:{accountId:{_eq:params.accountId}}})).data.transaction;
        totalAll = (await graphqlGetTotalSum({where:{accountId:{_eq:params.accountId}}})).data.transaction_aggregate.aggregate?.sum?.amount
        totalComplete = (await graphqlGetTotalSum({where:{accountId:{_eq:params.accountId}, status:{_eq:"completed"}}})).data.transaction_aggregate.aggregate?.sum?.amount
        totalPending = (await graphqlGetTotalSum({where:{accountId:{_eq:params.accountId}, status:{_eq:"pending"}}})).data.transaction_aggregate.aggregate?.sum?.amount
    })
</script>

<div class="w-full">
    <table class="w-1/3 text-left">
        <thead>
            <th>Total All</th>
            <th>Total Complete</th>
            <th>Total Pending</th>
        </thead>
        <tbody>
            <td>{totalAll}</td>
            <td>{totalComplete}</td>
            <td>{totalPending}</td>
        </tbody>
    </table>
    <table class="outline rounded-md min-w-full text-left">
        <thead class="outline rounded">
            <tr>
                <th>Amount</th>
                <th>Description</th>
                <th>Category</th>
                <th>Transaction Date</th>
                <th>Status</th>
                <th>Post Date</th>
            </tr>
        </thead>
        <tbody>
            {#each transactions as transaction}
            <tr class="even:bg-white odd:bg-blue-100">
                <td>{transaction.amount}</td>
                <td>{transaction.description}</td>
                <td>{transaction.category}</td>
                <td>{transaction.transactionDate}</td>
                <td>{transaction.status}</td>
                <td>{transaction.postDate}</td>
            </tr>
            {/each}
        </tbody>
    </table>
</div>