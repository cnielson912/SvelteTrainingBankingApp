<script lang='ts'>
    import { page } from '$app/stores';
    import { breadCrumbStore } from '../../../../breadCrumbStore';
    import { onMount } from "svelte";
	import { graphqlGetTotalSum, graphqlGetTransactions } from "../../../../graphql/graphqlApi";
    import type { GetTransactionsQuery } from "../../../../graphql/graphql";
    let params = $page.params;
    let route = $page.route.id;

    $breadCrumbStore = [
        { name: 'home', url: '/' },
        { name: 'accounts', url: '/accounts' },
        {
            name:'',
            url:'/accounts/ '
        },
        { name: 'transactions', url: '/accounts/ /transactions' }
    ];

    let transactions:GetTransactionsQuery["transaction"] = [];
    let totalAll:number
    let totalComplete:number
    let totalPending:number

    onMount(async ()=>{
        transactions = (await graphqlGetTransactions({})).data.transaction;
        totalAll = (await graphqlGetTotalSum({})).data.transaction_aggregate.aggregate?.sum?.amount
        totalComplete = (await graphqlGetTotalSum({where:{status:{_eq:"completed"}}})).data.transaction_aggregate.aggregate?.sum?.amount
        totalPending = (await graphqlGetTotalSum({where:{status:{_eq:"pending"}}})).data.transaction_aggregate.aggregate?.sum?.amount
    })
</script>

<div>Params:</div>
<pre>{JSON.stringify(params, null, 2)}</pre>
<hr/>
<div>Route:</div>
<pre>{JSON.stringify(route, null, 2)}</pre>

//Need to add in account name

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