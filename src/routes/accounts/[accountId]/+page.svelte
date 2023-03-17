<script lang="ts">
    import { breadCrumbStore } from '../../../breadCrumbStore';
    import {page} from '$app/stores'
    import { onMount } from 'svelte';
    import { graphqlGetAccounts, graphqlGetTransactionCount } from '../../../graphql/graphqlApi';
	import PieChart from '../../../components/PieChart.svelte';
	import LineChart from '../../../components/LineChart.svelte';
	import { transactionCategory } from '../../../graphql/transactionCategory';
	import { transactionStatus } from '../../../graphql/transactionStatus';
    let params = $page.params
    let currentAccount:{id:any,name:string} | undefined
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
    let jan:number;
    let feb:number;
    let mar:number;
    let apr:number;
    let may:number;
    let jun:number;
    let jul:number;
    let aug:number;
    let sep:number;
    let oct:number;
    let nov:number;
    let dec:number;

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
        utilities = (await graphqlGetTransactionCount({where:{accountId:{_eq:params.accountId}, categoryEnum:{_eq:transactionCategory.utilities}}})).data.transaction_aggregate.aggregate?.count ?? 0
        entertainment = (await graphqlGetTransactionCount({where:{accountId:{_eq:params.accountId}, categoryEnum:{_eq:transactionCategory.entertainment}}})).data.transaction_aggregate.aggregate?.count ?? 0
        food = (await graphqlGetTransactionCount({where:{accountId:{_eq:params.accountId}, categoryEnum:{_eq:transactionCategory.food}}})).data.transaction_aggregate.aggregate?.count ?? 0
        complete = (await graphqlGetTransactionCount({where:{accountId:{_eq:params.accountId}, statusEnum:{_eq:transactionStatus.complete}}})).data.transaction_aggregate.aggregate?.count ?? 0
        pending = (await graphqlGetTransactionCount({where:{accountId:{_eq:params.accountId}, statusEnum:{_eq:transactionStatus.pending}}})).data.transaction_aggregate.aggregate?.count ?? 0
        jan = (await graphqlGetTransactionCount({where:{accountId:{_eq:params.accountId}, transactionDate:{_gte:"2023-01-01", _lt:"2023-02-01"}}})).data.transaction_aggregate.aggregate?.count ?? 0
        feb = (await graphqlGetTransactionCount({where:{accountId:{_eq:params.accountId}, transactionDate:{_gte:"2023-02-01", _lt:"2023-03-01"}}})).data.transaction_aggregate.aggregate?.count ?? 0
        mar = (await graphqlGetTransactionCount({where:{accountId:{_eq:params.accountId}, transactionDate:{_gte:"2023-03-01", _lt:"2023-04-01"}}})).data.transaction_aggregate.aggregate?.count ?? 0
        apr = (await graphqlGetTransactionCount({where:{accountId:{_eq:params.accountId}, transactionDate:{_gte:"2023-04-01", _lt:"2023-05-01"}}})).data.transaction_aggregate.aggregate?.count ?? 0
        may = (await graphqlGetTransactionCount({where:{accountId:{_eq:params.accountId}, transactionDate:{_gte:"2023-05-01", _lt:"2023-06-01"}}})).data.transaction_aggregate.aggregate?.count ?? 0
        jun = (await graphqlGetTransactionCount({where:{accountId:{_eq:params.accountId}, transactionDate:{_gte:"2023-06-01", _lt:"2023-07-01"}}})).data.transaction_aggregate.aggregate?.count ?? 0
        jul = (await graphqlGetTransactionCount({where:{accountId:{_eq:params.accountId}, transactionDate:{_gte:"2023-07-01", _lt:"2023-08-01"}}})).data.transaction_aggregate.aggregate?.count ?? 0
        aug = (await graphqlGetTransactionCount({where:{accountId:{_eq:params.accountId}, transactionDate:{_gte:"2023-08-01", _lt:"2023-09-01"}}})).data.transaction_aggregate.aggregate?.count ?? 0
        sep = (await graphqlGetTransactionCount({where:{accountId:{_eq:params.accountId}, transactionDate:{_gte:"2023-09-01", _lt:"2023-10-01"}}})).data.transaction_aggregate.aggregate?.count ?? 0
        oct = (await graphqlGetTransactionCount({where:{accountId:{_eq:params.accountId}, transactionDate:{_gte:"2023-10-01", _lt:"2023-11-01"}}})).data.transaction_aggregate.aggregate?.count ?? 0
        nov = (await graphqlGetTransactionCount({where:{accountId:{_eq:params.accountId}, transactionDate:{_gte:"2023-11-01", _lt:"2023-12-01"}}})).data.transaction_aggregate.aggregate?.count ?? 0
        dec = (await graphqlGetTransactionCount({where:{accountId:{_eq:params.accountId}, transactionDate:{_gte:"2023-12-01", _lte:"2023-12-31"}}})).data.transaction_aggregate.aggregate?.count ?? 0
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
        <LineChart labels={months} color={blue} dataLabel={'Transactions'} graphTitle={'Transactions Over the Past Year'} graphData={[jan, feb, mar, apr, may, jun, jul, aug, sep, oct, nov, dec]}/>
    </div>
    {/await}
</div>