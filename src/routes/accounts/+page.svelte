<script lang="ts">
    import { onMount } from 'svelte';
    import { breadCrumbStore } from '../../breadCrumbStore';
import Card from '../../components/Card.svelte';
    import type { GetAccountsQuery } from '../../graphql/graphql';
    import { graphqlGetAccounts } from '../../graphql/graphqlApi';

    $breadCrumbStore = [
        {name: 'home', url: '/'},
        {name: 'accounts', url: '/accounts'}
    ];

    let accounts:GetAccountsQuery['account'] = [];
    onMount(async ()=>{
        accounts = (await graphqlGetAccounts({})).data.account
    })
</script>

<div class="space-y-2 m-2 grid grid-cols-3">
    <div class="col-span-3">
        <p class="text-5xl">Accounts</p>
    </div>
     
    {#each accounts as account}
    <div class="p-2 col-span-1"><a href={"/accounts/" + account.id}><Card account={account.name.toString()}/></a></div>
    {/each}
</div>