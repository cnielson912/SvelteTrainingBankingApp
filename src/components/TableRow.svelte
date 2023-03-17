<script lang="ts">
	import type { Transaction_Insert_Input } from "../graphql/graphql";
	import { graphqlUpdateTransaction } from "../graphql/graphqlApi";
	
    export let transaction:{
        id: number;
        createdAt: any;
        updatedAt?: any;
        description: string;
        amount: any;
        statusEnum: number;
        categoryEnum: number;
        transactionDate: any;
        postDate?: any;
        accountId?: any;
        status:{
            description:string;
            enum:number;
        };
        category:{
            description:string;
            enum:number;
        };
    }

    let amount:number = transaction.amount;
    let description:string = transaction.description;
    let category:number = transaction.categoryEnum;
    let transactionDate:Date = transaction.transactionDate;
    let postDate:Date = transaction.postDate;
    let today = new Date()
    let dd = today.getDate()
    let mm = today.getMonth() + 1
    let yyyy = today.getFullYear()
    let todayString = (yyyy + '-' + addLeadingZero(mm) + '-' + addLeadingZero(dd))
    

    let editMode:boolean = false;
    let buttonStyle = "rounded rounded-md bg-blue-500 text-white text-sm h-[40px] w-[100px] hover:bg-blue-400 hover:outline hover:outline-black disabled:opacity-50 disabled:cursor-not-allowed";
    let cancelButtonStyle = "rounded rounded-md bg-red-500 text-white text-sm h-[40px] w-[100px] hover:bg-red-400 hover:outline hover:outline-black";

    function addLeadingZero(num:number){
        let result:string
        if(num < 10){
            result = ("0" + num)
        }
        else{
            result = num.toString()
        }
        return result
    }

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
        if(category !== transaction.categoryEnum){
            set.categoryEnum = transaction.categoryEnum
        }
        if(transactionDate !== transaction.transactionDate){
            if(transaction.transactionDate < todayString){
                set.transactionDate = transaction.transactionDate
            }
            else{
                transaction.transactionDate = transactionDate
            }
        }
        if(postDate !== transaction.postDate){
            if(transaction.postDate >= transaction.transactionDate){
                set.postDate = transaction.postDate
                set.statusEnum = 2
            }
            else{
                transaction.postDate = postDate
            }
        }
        graphqlUpdateTransaction({where:{id:{_eq:transaction.id}},_set:set})
        editMode = false;
    }

    function cancelUpdate(){
        transaction.amount = amount;
        transaction.description = description;
        transaction.categoryEnum = category;
        transaction.transactionDate = transactionDate;
        transaction.postDate = postDate;
        editMode = false;
    }
</script>

<tr class="even:bg-gray-100 odd:bg-blue-100">
    <td><input disabled={editMode === false} bind:value={transaction.amount}/></td>
    <td><input disabled={editMode === false} bind:value={transaction.description}/></td>

    {#if editMode}
    <td>
        <select bind:value={transaction.categoryEnum}>
            <option value={1}>utilities</option>
            <option value={2}>entertainment</option>
            <option value={3}>food</option>
        </select>
    </td>
    {:else}
    <td><input disabled={editMode === false} value={transaction.category.description}/></td>
    {/if}

    <td><input disabled={editMode === false} max={todayString} bind:value={transaction.transactionDate} type="date"/></td>
    

    {#if editMode}
    <td>
        <select bind:value={transaction.statusEnum}>
            <option value={1}>pending</option>
            <option value={2}>completed</option>
        </select>
    </td>
    {:else}
    <td><input disabled value={transaction.status.description}/></td>
    {/if}
    <td><input disabled={editMode === false || transaction.statusEnum === 2} bind:value={transaction.postDate} type="date"/></td>

    {#if editMode === false}
        <td><button on:click={toggleEditMode} class={buttonStyle}>Edit</button></td>
    {:else if editMode === true}
        <td>
            <button disabled={transaction.postDate < transactionDate || transaction.transactionDate > todayString} on:click={submitUpdate} class={buttonStyle}>Submit</button>
            <button on:click={cancelUpdate} class={cancelButtonStyle}>Cancel</button>
        </td>
    {/if}
</tr>