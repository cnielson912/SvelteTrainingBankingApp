Phase 1

Design the graphql API such that this query & mutation work:

```
query getTransactions {
  transaction {
    id
    createdAt
    updatedAt
    description
    amount
    status
    category
    transactionDate
    postDate
  }
}
```

```
mutation{
  insert_transaction(objects: [{
    amount: 12.34,
    description: "Lorem Ipsum",
    category: "utilities",
    status: "pending",
    transactionDate: "2023-03-13",
    postDate: null
  },
  {
    amount: -12.42,
    description: "Lorem Ipsum",
    category: "utilities",
    status: "comleted",
    transactionDate: "2023-03-13",
    postDate: "2023-03-15"
  }]){
    affected_rows
  }
}
```

changint the readme to test if the git repo is acutally changed