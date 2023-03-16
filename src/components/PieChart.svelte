<script lang='ts'>
    import {Pie} from 'svelte-chartjs';
    import {Chart as ChartJS, Title, Tooltip, Legend, ArcElement, CategoryScale, } from 'chart.js';
	import { graphqlGetTransactionCount } from '../graphql/graphqlApi';
	import { onMount } from 'svelte';

    ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale);

    export let accountId:string;

    let total:number;
    let utilities:number; 
    let entertainment:number;
    let food:number;
    let data = {
        labels: [
            'Utilities',
            'Entertainment',
            'Food'
        ],
        datasets: [{
            label: 'Number of Transactions',
            data: [0,0,0],
            backgroundColor: [
                '#F7464A',
                '#46BFBD',
                '#FDB45C'
            ],
            hoverOffset: 4
        }]
    }

    onMount(async()=>{
        total = (await graphqlGetTransactionCount({where:{accountId:{_eq:accountId}}})).data.transaction_aggregate.aggregate?.count ?? 0
        utilities = (await graphqlGetTransactionCount({where:{accountId:{_eq:accountId}, category:{_eq:"utilities"}}})).data.transaction_aggregate.aggregate?.count ?? 0
        entertainment = (await graphqlGetTransactionCount({where:{accountId:{_eq:accountId}, category:{_eq:"entertainment"}}})).data.transaction_aggregate.aggregate?.count ?? 0
        food = (await graphqlGetTransactionCount({where:{accountId:{_eq:accountId}, category:{_eq:"food"}}})).data.transaction_aggregate.aggregate?.count ?? 0
        
        data = {
        labels: [
            'Utilities',
            'Entertainment',
            'Food'
        ],
        datasets: [{
            label: 'Number of Transactions',
            data: [utilities,entertainment,food],
            backgroundColor: [
                '#F7464A',
                '#46BFBD',
                '#FDB45C'
            ],
            hoverOffset: 4
        }]
    };
    })

    

</script>

<div>
    <div class="flex justify-center">
        <p>Spending Analysis</p>
    </div>
    <div class="flex justify-center">
        <Pie {data} options={{responsive:true}}/>
    </div>
</div>
