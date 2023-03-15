<script lang="ts">
    import { breadCrumbStore } from '../../../breadCrumbStore';
    import {page} from '$app/stores'
    import { onMount } from 'svelte';
    import { graphqlGetAccounts } from '../../../graphql/graphqlApi';
	import Chart from '../../../components/Chart.svelte';
    let params = $page.params
    let currentAccount:{id:any,name:string} | undefined
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
</script>

<div>
    <a href={"/accounts/" + params.accountId + '/transactions'} class="underline text-blue-500">Transactions</a>

    <div class="h-60">
        <Chart accountId={params.accountId}/>
    </div>
    
</div>