<script lang="ts">
    import { breadCrumbStore } from '../../../breadCrumbStore';
    import {page} from '$app/stores'
    let params = $page.params
    $breadCrumbStore = [
        {name:'home', url: '/'},
        {name:'accounts', url: '/accounts'},
        {name: params.accountId ,url:'/accounts/' + params.accountId}
    ]
</script>

<div>
    nothing to see here 😎
</div>