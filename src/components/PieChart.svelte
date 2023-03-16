<script lang='ts'>
    import {Pie} from 'svelte-chartjs';
    import {Chart as ChartJS, Title, Tooltip, Legend, ArcElement, CategoryScale, } from 'chart.js';

    ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale);

    export let labels:string[];
    export let values:number[];
    export let colors:string[];
    
    let data = {
        labels: labels,
        datasets: [{
            label: 'Number of Transactions',
            data: values,
            backgroundColor: colors,
            hoverOffset: 4
        }]
    }

</script>

<div>
    <div class="flex justify-center">
        <Pie {data} options={{responsive:true}}/>
    </div>
</div>
