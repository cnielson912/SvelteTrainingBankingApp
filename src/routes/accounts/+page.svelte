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

<div class="space-x-10 h-1/2">
    Accounts
    {#each accounts as account}
    <a href={"/accounts/" + account.id + "/transactions"}><Card account={account.name.toString()}/></a>
    {/each}
</div>