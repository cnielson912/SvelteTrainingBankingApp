require('dotenv').config();
module.exports = {
	schema: [
		{
			[process.env.PUBLIC_HASURA_URL]: {
				headers: {
					'x-hasura-admin-secret': process.env.PUBLIC_HASURA_ADMIN_SECRET
				}
			}
		}
	],
	documents: ['./src/**/*.graphql'],
	overwrite: true,
	generates: {
		'./src/graphql/graphql.ts': {
			plugins: ['typescript', 'typescript-operations', 'typescript-generic-sdk'],
			config: {
				useTypeImports: true
			}
		}
	}
};

generateStatusEnum();
generateCategoryEnum();
async function generateStatusEnum(){
	const enumName = 'transactionStatus';
	const request = {
		query: `{ ${enumName}(order_by: [{enum: asc}]){ enum description }}`
	};
	const response = await fetch(process.env.PUBLIC_HASURA_URL, {
		body: JSON.stringify(request),
		headers: {
			'Content-Type': 'application/json',
			'User-Agent':
				'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.3 Safari/605.1.15',
			'x-hasura-admin-secret': process.env.PUBLIC_HASURA_ADMIN_SECRET
		},
		method: 'POST'
	});

	let data = [];
	try {
		data = await response.json().data[enumName];
	} catch {}
	if(data.length === 0) throw new Error(`Failed to get data for enum ${enumName}`);

	let result = `export enum ${enumName} {${EOL}`;
	data.forEach((x) => {
		if (x.description.includes(' '))
			throw new Error(`White space not allowed; change ${x.description}`);
		result += `  ${x.description}=${x.enum},${EOL}`;
	});
	result += '}';
	fs.writeFileSync(`./src/graphql/${enumName}.ts`, result);
}

async function generateCategoryEnum(){
	const enumName = 'transactionCategory';
	const request = {
		query: `{ ${enumName}(order_by: [{enum: asc}]){ enum description }}`
	};
	const response = await fetch(process.env.PUBLIC_HASURA_URL, {
		body: JSON.stringify(request),
		headers: {
			'Content-Type': 'application/json',
			'User-Agent':
				'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.3 Safari/605.1.15',
			'x-hasura-admin-secret': process.env.PUBLIC_HASURA_ADMIN_SECRET
		},
		method: 'POST'
	});

	let data = [];
	try {
		data = await response.json().data[enumName];
	} catch {}
	if(data.length === 0) throw new Error(`Failed to get data for enum ${enumName}`);

	let result = `export enum ${enumName} {${EOL}`;
	data.forEach((x) => {
		if (x.description.includes(' '))
			throw new Error(`White space not allowed; change ${x.description}`);
		result += `  ${x.description}=${x.enum},${EOL}`;
	});
	result += '}';
	fs.writeFileSync(`./src/graphql/${enumName}.ts`, result);
}