<script lang="ts">
	import '../app.css';
import { breadCrumbStore } from '../breadCrumbStore';
	import GenerateFakeTransaction from '../components/prototype/GenerateFakeTransaction.svelte';
</script>

<div class="flex">
	<div class="w-[20rem] p-2 pt-5 h-[100vh] bg-gray-100 border-r-2 border-gray-200">
		<div class="text-blue-500 flex justify-center">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke-width="1.5"
				stroke="currentColor"
				class="w-6 h-6"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
				/>
			</svg>
			<div class="ml-2 font-bold">Hey Integritier!</div>
		</div>
		<div class="mt-8"><GenerateFakeTransaction /></div>
	</div>
	<div class="w-full">
		<div
			class="h-[4rem] w-full bg-gray-50 flex items-center align-middle border-b-2 border-gray-200"
		>
			{#each $breadCrumbStore as {name,url}, index}
				{@const isLast = index === $breadCrumbStore.length-1}
				<a class="ml-2 font-bold text-xl underline text-blue-500" href={url}>{name}</a>
				<span class="ml-2">{isLast ? '' : '>'}</span>
			{/each}
				<!-- <div class="ml-2 font-bold text-green-500  text-xl">Transactions</div> -->
		</div>

		<slot />
	</div>
</div>
