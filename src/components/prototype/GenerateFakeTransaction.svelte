<script lang="ts">
	import { env } from '$env/dynamic/public';
	import { faker } from '@faker-js/faker';

	function generateTransaction() {
		const transactionDate = faker.date.between('2023-02-13', '2023-04-13');
		const status = faker.helpers.arrayElement(['pending', 'completed']);
		let postDate: Date | null = null;
		if (status === 'completed') {
			postDate = transactionDate;
			postDate.setDate(transactionDate.getDate() + faker.datatype.number({ min: 1, max: 3 }));
		}

		const category = faker.helpers.arrayElement(['food', 'entertainment', 'utilities']);
		const description = faker.helpers.arrayElement(
			{
				food: ['coffee', 'groceries', 'burritos'],
				entertainment: ['streaming', 'movies', 'pickleball'],
				utilities: ['electricity', 'water', 'gas']
			}[category]
		);
		return {
			amount: faker.finance.amount(),
			description,
			categoryEnum: {utilities:1, entertainment:2, food:3}[category] ,
			statusEnum: {pending:1, completed:2}[status],
			transactionDate,
			postDate,
			accountId
		};
	}

	let result = '';
	let statusCode = '';
	let disabled = false;
	let accountId = '';
	$: disabled = accountId === '';
	async function generate() {
		disabled = true;
		const body = JSON.stringify({
			query:	'mutation insertTransactions($objects: [transaction_insert_input!]!){\n  insert_transaction(objects: $objects){\n    affected_rows\n  }\n}',
			variables: {
				objects: [...Array(10).keys()].map(generateTransaction)
			}
		});
		const response = await fetch(env.PUBLIC_HASURA_URL, {
			body: body,
			cache: 'default',
			credentials: 'omit',
			headers: {
				Accept: '*/*',
				'Accept-Language': 'en-US,en;q=0.9',
				'Content-Type': 'application/json',
				'User-Agent':
					'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.3 Safari/605.1.15',
				'x-hasura-admin-secret': env.PUBLIC_HASURA_ADMIN_SECRET
			},
			method: 'POST',
			mode: 'cors',
			redirect: 'follow',
			referrer: 'https://cloud.hasura.io/',
			referrerPolicy: 'strict-origin'
		});

		statusCode = response.status.toString();
		const json = await response.json();
		if (json.errors) {
			result = 'GraphQL Errors :(. Please see console';
			console.error('Genertion error - open me!', json.errors);
		} else {
			result = JSON.stringify(json);
		}
		disabled = false;
	}
</script>

<div class="m-1 p-2 rounded-lg border border-cyan-500">
	<span>Acccount Id</span><input
		bind:value={accountId}
		class="border border-blue-500 rounded-lg p-1"
	/>
	<button
		class="rounded-lg border border-blue-600 bg-blue-500 p-2 m-1 text-white {disabled
			? 'opacity-50 cursor-not-allowed'
			: ''}"
		on:click={generate}
		{disabled}>Generate 10 Transactions</button
	>
	<div>
		<div>Response</div>
		<div>Status Code: {statusCode}</div>
		<div>{result}</div>
	</div>
</div>
