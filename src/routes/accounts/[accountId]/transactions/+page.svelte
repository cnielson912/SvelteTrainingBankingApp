<script lang='ts'>
    import { page } from '$app/stores';
    import { breadCrumbStore } from '../../../../breadCrumbStore';
    import { onMount } from "svelte";
	import { graphqlGetAccounts, graphqlGetTotalSum, graphqlGetTransactions } from "../../../../graphql/graphqlApi";
    import type { GetTransactionsQuery } from "../../../../graphql/graphql";
	import TableRow from '../../../../components/TableRow.svelte';
	import { transactionStatus } from '../../../../graphql/transactionStatus';
    
    let params = $page.params;
    let transactions:GetTransactionsQuery["transaction"] = [];
    let totalAll:number
    let totalComplete:number
    let totalPending:number
    let currentAccount:{id:any,name:string} | undefined
    let numResults:number = 10
    let currentpage:number = 0
    let selectedDate:Date
    let value:number
    let datevalue:Date

    let buttonStyle = "rounded rounded-md bg-blue-500 text-white text-sm h-[40px] w-[100px] hover:bg-blue-400 hover:outline hover:outline-black disabled:opacity-50 disabled:cursor-not-allowed";
    
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
        transactions = (await graphqlGetTransactions({where:{accountId:{_eq:params.accountId}, transactionDate:{_gte:selectedDate}}, limit:numResults, offset:currentpage*numResults})).data.transaction;
        totalAll = (await graphqlGetTotalSum({where:{accountId:{_eq:params.accountId}}})).data.transaction_aggregate.aggregate?.sum?.amount
        totalComplete = (await graphqlGetTotalSum({where:{accountId:{_eq:params.accountId}, statusEnum:{_eq:transactionStatus.complete}}})).data.transaction_aggregate.aggregate?.sum?.amount
        totalPending = (await graphqlGetTotalSum({where:{accountId:{_eq:params.accountId}, statusEnum:{_eq:transactionStatus.pending}}})).data.transaction_aggregate.aggregate?.sum?.amount
    })

    async function updateTable(argument:'increment'|'decrement'|'changeamount'| 'setdate', amount?:number, datepicked?:Date){
        if(argument === 'increment'){
            currentpage++
        }
        else if(argument === 'decrement'){
            currentpage--
        }
        else if(argument === 'changeamount' && amount !== undefined){
            numResults = amount
        }
        else if(argument === 'setdate' && datepicked !== undefined){
            selectedDate = datepicked
        }
        transactions = (await graphqlGetTransactions({where:{accountId:{_eq:params.accountId}, transactionDate:{_gte:selectedDate}},limit:numResults,offset:currentpage*numResults})).data.transaction;
    }
</script>

<div class="w-full space-y-2 m-2">
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
    <p>Transaction Date Range</p>
    <input bind:value={datevalue} on:change={()=>updateTable('setdate', undefined ,datevalue)} class="outline rounded-md" type="date"/>
    <table class="outline rounded-md min-w-full text-left">
        <thead class="outline rounded">
            <tr>
                <th>Amount</th>
                <th>Description</th>
                <th>Category</th>
                <th>Transaction Date</th>
                <th>Status</th>
                <th>Post Date</th>
                <th>Edit</th>
            </tr>
        </thead>
        <tbody>
            {#each transactions as transaction}
            <TableRow transaction={transaction}/>
            {/each}
        </tbody>
    </table>
    <div class="w-full flex space-x-2 py-2 items-center">
        <p>Results per page</p>
        <select bind:value on:change={()=>updateTable('changeamount',+value)} class="outline rounded-md">
            <option value=10>10</option>
            <option value=25>25</option>
            <option value=100>100</option>
        </select>
        <button disabled={currentpage === 0} on:click={()=>updateTable('decrement')} class={buttonStyle}>Previous Page</button>
        <p>Page: {currentpage + 1}</p>
        <button on:click={()=>updateTable('increment')} class={buttonStyle}>Next Page</button>
    </div>
</div>