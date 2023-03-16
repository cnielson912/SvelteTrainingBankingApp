<script lang="ts">
    import { breadCrumbStore } from '../../../breadCrumbStore';
    import {page} from '$app/stores'
    import { onMount } from 'svelte';
    import { graphqlGetAccounts, graphqlGetTransactionCount } from '../../../graphql/graphqlApi';
	import PieChart from '../../../components/PieChart.svelte';
	import LineChart from '../../../components/LineChart.svelte';
    let params = $page.params
    let currentAccount:{id:any,name:string} | undefined
    let total:number;
    let utilities:number; 
    let entertainment:number;
    let food:number;
    let complete:number;
    let pending:number;
    let red:string = '#F7464A'
    let blue:string = '#02BCD6'
    let green:string = '#59ED09'
    let months:string[] = ["January","February","March","April","May","June","July","August","September","October","November","December"]
    //make number objects for each month so they can be given to the line graph as data points

    $breadCrumbStore = [
        {name:'home', url: '/'},
        {name:'accounts', url: '/accounts'},
        {name: '...loading' ,url:'/accounts/' + params.accountId}
    ]
    onMount(async ()=>{
        currentAccount = (await graphqlGetAccounts({where:{id:{_eq:params.accountId}}})).data.account.at(0);
        $breadCrumbStore = [
            { name: 'home', url: '/' },
            { name: 'accounts', url: '/accounts' },
            { name:currentAccount?.name ?? '', url:('/accounts/' + params.accountId) }
        ];
        
    })
    async function getInfo(){
        total = (await graphqlGetTransactionCount({where:{accountId:{_eq:params.accountId}}})).data.transaction_aggregate.aggregate?.count ?? 0
        utilities = (await graphqlGetTransactionCount({where:{accountId:{_eq:params.accountId}, category:{_eq:"utilities"}}})).data.transaction_aggregate.aggregate?.count ?? 0
        entertainment = (await graphqlGetTransactionCount({where:{accountId:{_eq:params.accountId}, category:{_eq:"entertainment"}}})).data.transaction_aggregate.aggregate?.count ?? 0
        food = (await graphqlGetTransactionCount({where:{accountId:{_eq:params.accountId}, category:{_eq:"food"}}})).data.transaction_aggregate.aggregate?.count ?? 0
        complete = (await graphqlGetTransactionCount({where:{accountId:{_eq:params.accountId}, status:{_eq:"completed"}}})).data.transaction_aggregate.aggregate?.count ?? 0
        pending = (await graphqlGetTransactionCount({where:{accountId:{_eq:params.accountId}, status:{_eq:"pending"}}})).data.transaction_aggregate.aggregate?.count ?? 0
    }
</script>

<div class="space-y-2 grid grid-cols-2">
    <p class="text-5xl col-span-2 text-left">Account Page</p>
    <a href={"/accounts/" + params.accountId + '/transactions'} class="underline text-blue-500 text-2xl">Transactions</a>
    <p class="text-3xl col-span-2 text-center">Transaction Analysis</p>
    {#await getInfo() then}
    <div class="col-span-1">
        <p class="text-center text-2xl">Transaction Types</p>
            <PieChart labels={['Utilities','Entertainment','Food']} values={[utilities,entertainment,food]} colors={[red, blue, green]} />
    </div>
    <div class="col-span-1">
        <p class="text-center text-2xl">Transaction Statuses</p>
            <PieChart labels={['Completed', 'Pending']} values={[complete,pending]} colors={[red, blue]}/>
    </div>
    <div class="col-span-2">
        <LineChart labels={months} color={blue} dataLabel={'Transactions'} graphTitle={'Transactions Over the Past Year'}/>
    </div>
    {/await}
</div>