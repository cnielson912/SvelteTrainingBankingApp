<script lang="ts">
	
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

    let editMode:boolean = false;
    let buttonStyle = "rounded rounded-md bg-blue-500 text-white text-sm h-[40px] w-[100px] hover:bg-blue-400 hover:outline hover:outline-black";
    let cancelButtonStyle = "rounded rounded-md bg-red-500 text-white text-sm h-[40px] w-[100px] hover:bg-red-400 hover:outline hover:outline-black";

    function toggleEditMode(){
        if(editMode === true){
            editMode = false
        }else if(editMode === false){
            editMode = true
        }
        console.log(editMode)
    }

    function submitUpdate(){

    }

</script>

<tr class="even:bg-gray-100 odd:bg-blue-100">
    <td><input disabled={editMode === false} value={transaction.amount}/></td>
    <td><input disabled={editMode === false} value={transaction.description}/></td>
    <td><input disabled={editMode === false} value={transaction.category}/></td>
    <td><input type="date" disabled={editMode === false} value={transaction.transactionDate}/></td>
    <td><input disabled={editMode === false} value={transaction.status}/></td>
    <td><input type="date" disabled={editMode === false} value={transaction.postDate}/></td>
    {#if editMode === false}
        <td><button on:click={toggleEditMode} class={buttonStyle}>Edit</button></td>
    {:else if editMode === true}
        <td>
            <button on:click={submitUpdate} class={buttonStyle}>Submit</button>
            <button on:click={toggleEditMode} class={cancelButtonStyle}>Cancel</button>
        </td>
    {/if}
</tr>