<script lang='ts'>
    import {Pie} from 'svelte-chartjs';
    import {Chart as ChartJS, Title, Tooltip, Legend, ArcElement, CategoryScale, } from 'chart.js';
	import { onMount } from 'svelte';

    ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale);

    //export let accountId:string;
    export let labels:string[];
    export let values:number[];

    
    let data = {
        labels: labels,
        datasets: [{
            label: 'Number of Transactions',
            data: values,
            backgroundColor: [
                '#F7464A',
                '#46BFBD',
                '#FDB45C'
            ],
            hoverOffset: 4
        }]
    }

    

    

</script>

<div>
    <div class="flex justify-center">
        <Pie {data} options={{responsive:true}}/>
    </div>
</div>
