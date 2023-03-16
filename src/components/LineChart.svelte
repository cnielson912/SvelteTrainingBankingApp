<script lang="ts">
    import { Line } from 'svelte-chartjs';
    import { Chart as ChartJS, Title, Tooltip, Legend, LineElement, LinearScale, PointElement, CategoryScale, } from 'chart.js';

    ChartJS.register( Title, Tooltip, Legend, LineElement, LinearScale, PointElement, CategoryScale);

    export let labels:string[];
    export let color:string;
    export let dataLabel:string;
    export let graphTitle:string;

    let data = {
        labels:labels,
        datasets:[{
            label: dataLabel,
            data: [],
            fill: false,
            borderColor: color,
            tension: 0.1
        }]
    }
</script>


<div class="flex flex-col justify-center m-2">
    <p class="text-xl text-center">{graphTitle}</p>
    <Line {data} options={{responsive:true}}/>
</div>
