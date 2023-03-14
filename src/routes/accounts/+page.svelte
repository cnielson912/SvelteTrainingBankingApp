<script lang="ts">
    import { onMount } from 'svelte';
    import { breadCrumbStore } from '../../breadCrumbStore';
import type { GetAccountsQuery } from '../../graphql/graphql';
import { graphqlGetAccounts } from '../../graphql/graphqlApi';

    $breadCrumbStore = [
        {name: 'home', url: '/'},
        {name: 'accounts', url: '/accounts'}
    ];

    let accounts:GetAccountsQuery['account'];
    onMount(async ()=>{
        accounts = (await graphqlGetAccounts({})).data.account
    })
</script>

<div>
    Accounts
</div>
{#each accounts as account}
    <a href={"/accounts/" + {account}} class="underline text-blue-500">{account.name}</a>
{/each}