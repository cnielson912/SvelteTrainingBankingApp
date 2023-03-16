<script lang="ts">
	import type { Transaction_Insert_Input } from "../graphql/graphql";
	import { graphqlUpdateTransaction } from "../graphql/graphqlApi";

	
    export let transaction:{
        id: number;
        createdAt: any;
        updatedAt?: any;
        description: string;
        amount: any;
        status: string;
        category: string;
        transactionDate: any;
        postDate?: any;
        accountId?: any;
    }

    let amount:number = transaction.amount;
    let description:string = transaction.description;
    let category:string = transaction.category;
    let transactionDate:Date = transaction.transactionDate;
    let postDate:Date = transaction.postDate;

    let editMode:boolean = false;
    let buttonStyle = "rounded rounded-md bg-blue-500 text-white text-sm h-[40px] w-[100px] hover:bg-blue-400 hover:outline hover:outline-black";
    let cancelButtonStyle = "rounded rounded-md bg-red-500 text-white text-sm h-[40px] w-[100px] hover:bg-red-400 hover:outline hover:outline-black";

    function toggleEditMode(){
        if(editMode === true){
            editMode = false
        }else if(editMode === false){
            editMode = true
        }
    }

    function submitUpdate(){
        let set:Transaction_Insert_Input = {}
        if(amount !== transaction.amount){
            set.amount = transaction.amount
        }
        if(description !== transaction.description){
            set.description = transaction.description
        }
        if(category !== transaction.category){
            set.category = transaction.category
        }
        if(transactionDate !== transaction.transactionDate){
            set.transactionDate = transaction.transactionDate
        }
        if(postDate !== transaction.postDate){
            set.postDate = transaction.postDate
        }
        graphqlUpdateTransaction({where:{id:{_eq:transaction.id}},_set:set})
        editMode = false;
    }
</script>

<tr class="even:bg-gray-100 odd:bg-blue-100">
    <td><input disabled={editMode === false} bind:value={transaction.amount}/></td>
    <td><input disabled={editMode === false} bind:value={transaction.description}/></td>
    <td><input disabled={editMode === false} bind:value={transaction.category}/></td>
    <td><input disabled={editMode === false} bind:value={transaction.transactionDate} type="date"/></td>
    <td><input disabled value={transaction.status}/></td>
    <td><input disabled={editMode === false} bind:value={transaction.postDate} type="date"/></td>
    {#if editMode === false}
        <td><button on:click={toggleEditMode} class={buttonStyle}>Edit</button></td>
    {:else if editMode === true}
        <td>
            <button on:click={submitUpdate} class={buttonStyle}>Submit</button>
            <button on:click={toggleEditMode} class={cancelButtonStyle}>Cancel</button>
        </td>
    {/if}
</tr>