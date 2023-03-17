import type { DocumentNode } from 'graphql';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  date: any;
  money: any;
  timestamptz: any;
  uuid: any;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']>;
  _gt?: InputMaybe<Scalars['Int']>;
  _gte?: InputMaybe<Scalars['Int']>;
  _in?: InputMaybe<Array<Scalars['Int']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Int']>;
  _lte?: InputMaybe<Scalars['Int']>;
  _neq?: InputMaybe<Scalars['Int']>;
  _nin?: InputMaybe<Array<Scalars['Int']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']>;
};

/** columns and relationships of "account" */
export type Account = {
  __typename?: 'account';
  id: Scalars['uuid'];
  name: Scalars['String'];
  /** An array relationship */
  transactions: Array<Transaction>;
  /** An aggregate relationship */
  transactions_aggregate: Transaction_Aggregate;
};


/** columns and relationships of "account" */
export type AccountTransactionsArgs = {
  distinct_on?: InputMaybe<Array<Transaction_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Transaction_Order_By>>;
  where?: InputMaybe<Transaction_Bool_Exp>;
};


/** columns and relationships of "account" */
export type AccountTransactions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Transaction_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Transaction_Order_By>>;
  where?: InputMaybe<Transaction_Bool_Exp>;
};

/** aggregated selection of "account" */
export type Account_Aggregate = {
  __typename?: 'account_aggregate';
  aggregate?: Maybe<Account_Aggregate_Fields>;
  nodes: Array<Account>;
};

/** aggregate fields of "account" */
export type Account_Aggregate_Fields = {
  __typename?: 'account_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Account_Max_Fields>;
  min?: Maybe<Account_Min_Fields>;
};


/** aggregate fields of "account" */
export type Account_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Account_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "account". All fields are combined with a logical 'AND'. */
export type Account_Bool_Exp = {
  _and?: InputMaybe<Array<Account_Bool_Exp>>;
  _not?: InputMaybe<Account_Bool_Exp>;
  _or?: InputMaybe<Array<Account_Bool_Exp>>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  transactions?: InputMaybe<Transaction_Bool_Exp>;
  transactions_aggregate?: InputMaybe<Transaction_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "account" */
export enum Account_Constraint {
  /** unique or primary key constraint on columns "id" */
  AccountPkey = 'account_pkey'
}

/** input type for inserting data into table "account" */
export type Account_Insert_Input = {
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  transactions?: InputMaybe<Transaction_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Account_Max_Fields = {
  __typename?: 'account_max_fields';
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Account_Min_Fields = {
  __typename?: 'account_min_fields';
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "account" */
export type Account_Mutation_Response = {
  __typename?: 'account_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Account>;
};

/** input type for inserting object relation for remote table "account" */
export type Account_Obj_Rel_Insert_Input = {
  data: Account_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Account_On_Conflict>;
};

/** on_conflict condition type for table "account" */
export type Account_On_Conflict = {
  constraint: Account_Constraint;
  update_columns?: Array<Account_Update_Column>;
  where?: InputMaybe<Account_Bool_Exp>;
};

/** Ordering options when selecting data from "account". */
export type Account_Order_By = {
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  transactions_aggregate?: InputMaybe<Transaction_Aggregate_Order_By>;
};

/** primary key columns input for table: account */
export type Account_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "account" */
export enum Account_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "account" */
export type Account_Set_Input = {
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "account" */
export type Account_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Account_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Account_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
};

/** update columns of table "account" */
export enum Account_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

export type Account_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Account_Set_Input>;
  /** filter the rows which have to be updated */
  where: Account_Bool_Exp;
};

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC'
}

/** Boolean expression to compare columns of type "date". All fields are combined with logical 'AND'. */
export type Date_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['date']>;
  _gt?: InputMaybe<Scalars['date']>;
  _gte?: InputMaybe<Scalars['date']>;
  _in?: InputMaybe<Array<Scalars['date']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['date']>;
  _lte?: InputMaybe<Scalars['date']>;
  _neq?: InputMaybe<Scalars['date']>;
  _nin?: InputMaybe<Array<Scalars['date']>>;
};

/** Boolean expression to compare columns of type "money". All fields are combined with logical 'AND'. */
export type Money_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['money']>;
  _gt?: InputMaybe<Scalars['money']>;
  _gte?: InputMaybe<Scalars['money']>;
  _in?: InputMaybe<Array<Scalars['money']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['money']>;
  _lte?: InputMaybe<Scalars['money']>;
  _neq?: InputMaybe<Scalars['money']>;
  _nin?: InputMaybe<Array<Scalars['money']>>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "account" */
  delete_account?: Maybe<Account_Mutation_Response>;
  /** delete single row from the table: "account" */
  delete_account_by_pk?: Maybe<Account>;
  /** delete data from the table: "transaction" */
  delete_transaction?: Maybe<Transaction_Mutation_Response>;
  /** delete data from the table: "transactionCategory" */
  delete_transactionCategory?: Maybe<TransactionCategory_Mutation_Response>;
  /** delete single row from the table: "transactionCategory" */
  delete_transactionCategory_by_pk?: Maybe<TransactionCategory>;
  /** delete data from the table: "transactionStatus" */
  delete_transactionStatus?: Maybe<TransactionStatus_Mutation_Response>;
  /** delete single row from the table: "transactionStatus" */
  delete_transactionStatus_by_pk?: Maybe<TransactionStatus>;
  /** delete single row from the table: "transaction" */
  delete_transaction_by_pk?: Maybe<Transaction>;
  /** insert data into the table: "account" */
  insert_account?: Maybe<Account_Mutation_Response>;
  /** insert a single row into the table: "account" */
  insert_account_one?: Maybe<Account>;
  /** insert data into the table: "transaction" */
  insert_transaction?: Maybe<Transaction_Mutation_Response>;
  /** insert data into the table: "transactionCategory" */
  insert_transactionCategory?: Maybe<TransactionCategory_Mutation_Response>;
  /** insert a single row into the table: "transactionCategory" */
  insert_transactionCategory_one?: Maybe<TransactionCategory>;
  /** insert data into the table: "transactionStatus" */
  insert_transactionStatus?: Maybe<TransactionStatus_Mutation_Response>;
  /** insert a single row into the table: "transactionStatus" */
  insert_transactionStatus_one?: Maybe<TransactionStatus>;
  /** insert a single row into the table: "transaction" */
  insert_transaction_one?: Maybe<Transaction>;
  /** update data of the table: "account" */
  update_account?: Maybe<Account_Mutation_Response>;
  /** update single row of the table: "account" */
  update_account_by_pk?: Maybe<Account>;
  /** update multiples rows of table: "account" */
  update_account_many?: Maybe<Array<Maybe<Account_Mutation_Response>>>;
  /** update data of the table: "transaction" */
  update_transaction?: Maybe<Transaction_Mutation_Response>;
  /** update data of the table: "transactionCategory" */
  update_transactionCategory?: Maybe<TransactionCategory_Mutation_Response>;
  /** update single row of the table: "transactionCategory" */
  update_transactionCategory_by_pk?: Maybe<TransactionCategory>;
  /** update multiples rows of table: "transactionCategory" */
  update_transactionCategory_many?: Maybe<Array<Maybe<TransactionCategory_Mutation_Response>>>;
  /** update data of the table: "transactionStatus" */
  update_transactionStatus?: Maybe<TransactionStatus_Mutation_Response>;
  /** update single row of the table: "transactionStatus" */
  update_transactionStatus_by_pk?: Maybe<TransactionStatus>;
  /** update multiples rows of table: "transactionStatus" */
  update_transactionStatus_many?: Maybe<Array<Maybe<TransactionStatus_Mutation_Response>>>;
  /** update single row of the table: "transaction" */
  update_transaction_by_pk?: Maybe<Transaction>;
  /** update multiples rows of table: "transaction" */
  update_transaction_many?: Maybe<Array<Maybe<Transaction_Mutation_Response>>>;
};


/** mutation root */
export type Mutation_RootDelete_AccountArgs = {
  where: Account_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Account_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_TransactionArgs = {
  where: Transaction_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_TransactionCategoryArgs = {
  where: TransactionCategory_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_TransactionCategory_By_PkArgs = {
  enum: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_TransactionStatusArgs = {
  where: TransactionStatus_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_TransactionStatus_By_PkArgs = {
  enum: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Transaction_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootInsert_AccountArgs = {
  objects: Array<Account_Insert_Input>;
  on_conflict?: InputMaybe<Account_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Account_OneArgs = {
  object: Account_Insert_Input;
  on_conflict?: InputMaybe<Account_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_TransactionArgs = {
  objects: Array<Transaction_Insert_Input>;
  on_conflict?: InputMaybe<Transaction_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_TransactionCategoryArgs = {
  objects: Array<TransactionCategory_Insert_Input>;
  on_conflict?: InputMaybe<TransactionCategory_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_TransactionCategory_OneArgs = {
  object: TransactionCategory_Insert_Input;
  on_conflict?: InputMaybe<TransactionCategory_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_TransactionStatusArgs = {
  objects: Array<TransactionStatus_Insert_Input>;
  on_conflict?: InputMaybe<TransactionStatus_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_TransactionStatus_OneArgs = {
  object: TransactionStatus_Insert_Input;
  on_conflict?: InputMaybe<TransactionStatus_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Transaction_OneArgs = {
  object: Transaction_Insert_Input;
  on_conflict?: InputMaybe<Transaction_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_AccountArgs = {
  _set?: InputMaybe<Account_Set_Input>;
  where: Account_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Account_By_PkArgs = {
  _set?: InputMaybe<Account_Set_Input>;
  pk_columns: Account_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Account_ManyArgs = {
  updates: Array<Account_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_TransactionArgs = {
  _inc?: InputMaybe<Transaction_Inc_Input>;
  _set?: InputMaybe<Transaction_Set_Input>;
  where: Transaction_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_TransactionCategoryArgs = {
  _inc?: InputMaybe<TransactionCategory_Inc_Input>;
  _set?: InputMaybe<TransactionCategory_Set_Input>;
  where: TransactionCategory_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_TransactionCategory_By_PkArgs = {
  _inc?: InputMaybe<TransactionCategory_Inc_Input>;
  _set?: InputMaybe<TransactionCategory_Set_Input>;
  pk_columns: TransactionCategory_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_TransactionCategory_ManyArgs = {
  updates: Array<TransactionCategory_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_TransactionStatusArgs = {
  _inc?: InputMaybe<TransactionStatus_Inc_Input>;
  _set?: InputMaybe<TransactionStatus_Set_Input>;
  where: TransactionStatus_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_TransactionStatus_By_PkArgs = {
  _inc?: InputMaybe<TransactionStatus_Inc_Input>;
  _set?: InputMaybe<TransactionStatus_Set_Input>;
  pk_columns: TransactionStatus_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_TransactionStatus_ManyArgs = {
  updates: Array<TransactionStatus_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Transaction_By_PkArgs = {
  _inc?: InputMaybe<Transaction_Inc_Input>;
  _set?: InputMaybe<Transaction_Set_Input>;
  pk_columns: Transaction_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Transaction_ManyArgs = {
  updates: Array<Transaction_Updates>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "account" */
  account: Array<Account>;
  /** fetch aggregated fields from the table: "account" */
  account_aggregate: Account_Aggregate;
  /** fetch data from the table: "account" using primary key columns */
  account_by_pk?: Maybe<Account>;
  /** fetch data from the table: "transaction" */
  transaction: Array<Transaction>;
  /** fetch data from the table: "transactionCategory" */
  transactionCategory: Array<TransactionCategory>;
  /** fetch aggregated fields from the table: "transactionCategory" */
  transactionCategory_aggregate: TransactionCategory_Aggregate;
  /** fetch data from the table: "transactionCategory" using primary key columns */
  transactionCategory_by_pk?: Maybe<TransactionCategory>;
  /** fetch data from the table: "transactionStatus" */
  transactionStatus: Array<TransactionStatus>;
  /** fetch aggregated fields from the table: "transactionStatus" */
  transactionStatus_aggregate: TransactionStatus_Aggregate;
  /** fetch data from the table: "transactionStatus" using primary key columns */
  transactionStatus_by_pk?: Maybe<TransactionStatus>;
  /** fetch aggregated fields from the table: "transaction" */
  transaction_aggregate: Transaction_Aggregate;
  /** fetch data from the table: "transaction" using primary key columns */
  transaction_by_pk?: Maybe<Transaction>;
};


export type Query_RootAccountArgs = {
  distinct_on?: InputMaybe<Array<Account_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Account_Order_By>>;
  where?: InputMaybe<Account_Bool_Exp>;
};


export type Query_RootAccount_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Account_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Account_Order_By>>;
  where?: InputMaybe<Account_Bool_Exp>;
};


export type Query_RootAccount_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootTransactionArgs = {
  distinct_on?: InputMaybe<Array<Transaction_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Transaction_Order_By>>;
  where?: InputMaybe<Transaction_Bool_Exp>;
};


export type Query_RootTransactionCategoryArgs = {
  distinct_on?: InputMaybe<Array<TransactionCategory_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<TransactionCategory_Order_By>>;
  where?: InputMaybe<TransactionCategory_Bool_Exp>;
};


export type Query_RootTransactionCategory_AggregateArgs = {
  distinct_on?: InputMaybe<Array<TransactionCategory_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<TransactionCategory_Order_By>>;
  where?: InputMaybe<TransactionCategory_Bool_Exp>;
};


export type Query_RootTransactionCategory_By_PkArgs = {
  enum: Scalars['Int'];
};


export type Query_RootTransactionStatusArgs = {
  distinct_on?: InputMaybe<Array<TransactionStatus_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<TransactionStatus_Order_By>>;
  where?: InputMaybe<TransactionStatus_Bool_Exp>;
};


export type Query_RootTransactionStatus_AggregateArgs = {
  distinct_on?: InputMaybe<Array<TransactionStatus_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<TransactionStatus_Order_By>>;
  where?: InputMaybe<TransactionStatus_Bool_Exp>;
};


export type Query_RootTransactionStatus_By_PkArgs = {
  enum: Scalars['Int'];
};


export type Query_RootTransaction_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Transaction_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Transaction_Order_By>>;
  where?: InputMaybe<Transaction_Bool_Exp>;
};


export type Query_RootTransaction_By_PkArgs = {
  id: Scalars['Int'];
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "account" */
  account: Array<Account>;
  /** fetch aggregated fields from the table: "account" */
  account_aggregate: Account_Aggregate;
  /** fetch data from the table: "account" using primary key columns */
  account_by_pk?: Maybe<Account>;
  /** fetch data from the table in a streaming manner: "account" */
  account_stream: Array<Account>;
  /** fetch data from the table: "transaction" */
  transaction: Array<Transaction>;
  /** fetch data from the table: "transactionCategory" */
  transactionCategory: Array<TransactionCategory>;
  /** fetch aggregated fields from the table: "transactionCategory" */
  transactionCategory_aggregate: TransactionCategory_Aggregate;
  /** fetch data from the table: "transactionCategory" using primary key columns */
  transactionCategory_by_pk?: Maybe<TransactionCategory>;
  /** fetch data from the table in a streaming manner: "transactionCategory" */
  transactionCategory_stream: Array<TransactionCategory>;
  /** fetch data from the table: "transactionStatus" */
  transactionStatus: Array<TransactionStatus>;
  /** fetch aggregated fields from the table: "transactionStatus" */
  transactionStatus_aggregate: TransactionStatus_Aggregate;
  /** fetch data from the table: "transactionStatus" using primary key columns */
  transactionStatus_by_pk?: Maybe<TransactionStatus>;
  /** fetch data from the table in a streaming manner: "transactionStatus" */
  transactionStatus_stream: Array<TransactionStatus>;
  /** fetch aggregated fields from the table: "transaction" */
  transaction_aggregate: Transaction_Aggregate;
  /** fetch data from the table: "transaction" using primary key columns */
  transaction_by_pk?: Maybe<Transaction>;
  /** fetch data from the table in a streaming manner: "transaction" */
  transaction_stream: Array<Transaction>;
};


export type Subscription_RootAccountArgs = {
  distinct_on?: InputMaybe<Array<Account_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Account_Order_By>>;
  where?: InputMaybe<Account_Bool_Exp>;
};


export type Subscription_RootAccount_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Account_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Account_Order_By>>;
  where?: InputMaybe<Account_Bool_Exp>;
};


export type Subscription_RootAccount_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootAccount_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Account_Stream_Cursor_Input>>;
  where?: InputMaybe<Account_Bool_Exp>;
};


export type Subscription_RootTransactionArgs = {
  distinct_on?: InputMaybe<Array<Transaction_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Transaction_Order_By>>;
  where?: InputMaybe<Transaction_Bool_Exp>;
};


export type Subscription_RootTransactionCategoryArgs = {
  distinct_on?: InputMaybe<Array<TransactionCategory_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<TransactionCategory_Order_By>>;
  where?: InputMaybe<TransactionCategory_Bool_Exp>;
};


export type Subscription_RootTransactionCategory_AggregateArgs = {
  distinct_on?: InputMaybe<Array<TransactionCategory_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<TransactionCategory_Order_By>>;
  where?: InputMaybe<TransactionCategory_Bool_Exp>;
};


export type Subscription_RootTransactionCategory_By_PkArgs = {
  enum: Scalars['Int'];
};


export type Subscription_RootTransactionCategory_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<TransactionCategory_Stream_Cursor_Input>>;
  where?: InputMaybe<TransactionCategory_Bool_Exp>;
};


export type Subscription_RootTransactionStatusArgs = {
  distinct_on?: InputMaybe<Array<TransactionStatus_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<TransactionStatus_Order_By>>;
  where?: InputMaybe<TransactionStatus_Bool_Exp>;
};


export type Subscription_RootTransactionStatus_AggregateArgs = {
  distinct_on?: InputMaybe<Array<TransactionStatus_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<TransactionStatus_Order_By>>;
  where?: InputMaybe<TransactionStatus_Bool_Exp>;
};


export type Subscription_RootTransactionStatus_By_PkArgs = {
  enum: Scalars['Int'];
};


export type Subscription_RootTransactionStatus_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<TransactionStatus_Stream_Cursor_Input>>;
  where?: InputMaybe<TransactionStatus_Bool_Exp>;
};


export type Subscription_RootTransaction_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Transaction_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Transaction_Order_By>>;
  where?: InputMaybe<Transaction_Bool_Exp>;
};


export type Subscription_RootTransaction_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootTransaction_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Transaction_Stream_Cursor_Input>>;
  where?: InputMaybe<Transaction_Bool_Exp>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']>;
  _gt?: InputMaybe<Scalars['timestamptz']>;
  _gte?: InputMaybe<Scalars['timestamptz']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['timestamptz']>;
  _lte?: InputMaybe<Scalars['timestamptz']>;
  _neq?: InputMaybe<Scalars['timestamptz']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']>>;
};

/** columns and relationships of "transaction" */
export type Transaction = {
  __typename?: 'transaction';
  /** An object relationship */
  account?: Maybe<Account>;
  accountId?: Maybe<Scalars['uuid']>;
  amount: Scalars['money'];
  /** An object relationship */
  category: TransactionCategory;
  categoryEnum: Scalars['Int'];
  createdAt: Scalars['date'];
  description: Scalars['String'];
  id: Scalars['Int'];
  postDate?: Maybe<Scalars['date']>;
  /** An object relationship */
  status: TransactionStatus;
  statusEnum: Scalars['Int'];
  transactionDate: Scalars['date'];
  updatedAt?: Maybe<Scalars['date']>;
};

/** columns and relationships of "transactionCategory" */
export type TransactionCategory = {
  __typename?: 'transactionCategory';
  created_at: Scalars['timestamptz'];
  description: Scalars['String'];
  enum: Scalars['Int'];
  updated_at: Scalars['timestamptz'];
};

/** aggregated selection of "transactionCategory" */
export type TransactionCategory_Aggregate = {
  __typename?: 'transactionCategory_aggregate';
  aggregate?: Maybe<TransactionCategory_Aggregate_Fields>;
  nodes: Array<TransactionCategory>;
};

/** aggregate fields of "transactionCategory" */
export type TransactionCategory_Aggregate_Fields = {
  __typename?: 'transactionCategory_aggregate_fields';
  avg?: Maybe<TransactionCategory_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<TransactionCategory_Max_Fields>;
  min?: Maybe<TransactionCategory_Min_Fields>;
  stddev?: Maybe<TransactionCategory_Stddev_Fields>;
  stddev_pop?: Maybe<TransactionCategory_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<TransactionCategory_Stddev_Samp_Fields>;
  sum?: Maybe<TransactionCategory_Sum_Fields>;
  var_pop?: Maybe<TransactionCategory_Var_Pop_Fields>;
  var_samp?: Maybe<TransactionCategory_Var_Samp_Fields>;
  variance?: Maybe<TransactionCategory_Variance_Fields>;
};


/** aggregate fields of "transactionCategory" */
export type TransactionCategory_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<TransactionCategory_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type TransactionCategory_Avg_Fields = {
  __typename?: 'transactionCategory_avg_fields';
  enum?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "transactionCategory". All fields are combined with a logical 'AND'. */
export type TransactionCategory_Bool_Exp = {
  _and?: InputMaybe<Array<TransactionCategory_Bool_Exp>>;
  _not?: InputMaybe<TransactionCategory_Bool_Exp>;
  _or?: InputMaybe<Array<TransactionCategory_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  enum?: InputMaybe<Int_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "transactionCategory" */
export enum TransactionCategory_Constraint {
  /** unique or primary key constraint on columns "enum" */
  TransactionCategoryPkey = 'transactionCategory_pkey'
}

/** input type for incrementing numeric columns in table "transactionCategory" */
export type TransactionCategory_Inc_Input = {
  enum?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "transactionCategory" */
export type TransactionCategory_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  description?: InputMaybe<Scalars['String']>;
  enum?: InputMaybe<Scalars['Int']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type TransactionCategory_Max_Fields = {
  __typename?: 'transactionCategory_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  enum?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type TransactionCategory_Min_Fields = {
  __typename?: 'transactionCategory_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  enum?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "transactionCategory" */
export type TransactionCategory_Mutation_Response = {
  __typename?: 'transactionCategory_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<TransactionCategory>;
};

/** input type for inserting object relation for remote table "transactionCategory" */
export type TransactionCategory_Obj_Rel_Insert_Input = {
  data: TransactionCategory_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<TransactionCategory_On_Conflict>;
};

/** on_conflict condition type for table "transactionCategory" */
export type TransactionCategory_On_Conflict = {
  constraint: TransactionCategory_Constraint;
  update_columns?: Array<TransactionCategory_Update_Column>;
  where?: InputMaybe<TransactionCategory_Bool_Exp>;
};

/** Ordering options when selecting data from "transactionCategory". */
export type TransactionCategory_Order_By = {
  created_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  enum?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: transactionCategory */
export type TransactionCategory_Pk_Columns_Input = {
  enum: Scalars['Int'];
};

/** select columns of table "transactionCategory" */
export enum TransactionCategory_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  Enum = 'enum',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "transactionCategory" */
export type TransactionCategory_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  description?: InputMaybe<Scalars['String']>;
  enum?: InputMaybe<Scalars['Int']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type TransactionCategory_Stddev_Fields = {
  __typename?: 'transactionCategory_stddev_fields';
  enum?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type TransactionCategory_Stddev_Pop_Fields = {
  __typename?: 'transactionCategory_stddev_pop_fields';
  enum?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type TransactionCategory_Stddev_Samp_Fields = {
  __typename?: 'transactionCategory_stddev_samp_fields';
  enum?: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "transactionCategory" */
export type TransactionCategory_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: TransactionCategory_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type TransactionCategory_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  description?: InputMaybe<Scalars['String']>;
  enum?: InputMaybe<Scalars['Int']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate sum on columns */
export type TransactionCategory_Sum_Fields = {
  __typename?: 'transactionCategory_sum_fields';
  enum?: Maybe<Scalars['Int']>;
};

/** update columns of table "transactionCategory" */
export enum TransactionCategory_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  Enum = 'enum',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type TransactionCategory_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<TransactionCategory_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<TransactionCategory_Set_Input>;
  /** filter the rows which have to be updated */
  where: TransactionCategory_Bool_Exp;
};

/** aggregate var_pop on columns */
export type TransactionCategory_Var_Pop_Fields = {
  __typename?: 'transactionCategory_var_pop_fields';
  enum?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type TransactionCategory_Var_Samp_Fields = {
  __typename?: 'transactionCategory_var_samp_fields';
  enum?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type TransactionCategory_Variance_Fields = {
  __typename?: 'transactionCategory_variance_fields';
  enum?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "transactionStatus" */
export type TransactionStatus = {
  __typename?: 'transactionStatus';
  created_at: Scalars['timestamptz'];
  description: Scalars['String'];
  enum: Scalars['Int'];
  updated_at: Scalars['timestamptz'];
};

/** aggregated selection of "transactionStatus" */
export type TransactionStatus_Aggregate = {
  __typename?: 'transactionStatus_aggregate';
  aggregate?: Maybe<TransactionStatus_Aggregate_Fields>;
  nodes: Array<TransactionStatus>;
};

/** aggregate fields of "transactionStatus" */
export type TransactionStatus_Aggregate_Fields = {
  __typename?: 'transactionStatus_aggregate_fields';
  avg?: Maybe<TransactionStatus_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<TransactionStatus_Max_Fields>;
  min?: Maybe<TransactionStatus_Min_Fields>;
  stddev?: Maybe<TransactionStatus_Stddev_Fields>;
  stddev_pop?: Maybe<TransactionStatus_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<TransactionStatus_Stddev_Samp_Fields>;
  sum?: Maybe<TransactionStatus_Sum_Fields>;
  var_pop?: Maybe<TransactionStatus_Var_Pop_Fields>;
  var_samp?: Maybe<TransactionStatus_Var_Samp_Fields>;
  variance?: Maybe<TransactionStatus_Variance_Fields>;
};


/** aggregate fields of "transactionStatus" */
export type TransactionStatus_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<TransactionStatus_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type TransactionStatus_Avg_Fields = {
  __typename?: 'transactionStatus_avg_fields';
  enum?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "transactionStatus". All fields are combined with a logical 'AND'. */
export type TransactionStatus_Bool_Exp = {
  _and?: InputMaybe<Array<TransactionStatus_Bool_Exp>>;
  _not?: InputMaybe<TransactionStatus_Bool_Exp>;
  _or?: InputMaybe<Array<TransactionStatus_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  enum?: InputMaybe<Int_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "transactionStatus" */
export enum TransactionStatus_Constraint {
  /** unique or primary key constraint on columns "enum" */
  TransactionStatusPkey = 'transactionStatus_pkey'
}

/** input type for incrementing numeric columns in table "transactionStatus" */
export type TransactionStatus_Inc_Input = {
  enum?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "transactionStatus" */
export type TransactionStatus_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  description?: InputMaybe<Scalars['String']>;
  enum?: InputMaybe<Scalars['Int']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type TransactionStatus_Max_Fields = {
  __typename?: 'transactionStatus_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  enum?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type TransactionStatus_Min_Fields = {
  __typename?: 'transactionStatus_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  enum?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "transactionStatus" */
export type TransactionStatus_Mutation_Response = {
  __typename?: 'transactionStatus_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<TransactionStatus>;
};

/** input type for inserting object relation for remote table "transactionStatus" */
export type TransactionStatus_Obj_Rel_Insert_Input = {
  data: TransactionStatus_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<TransactionStatus_On_Conflict>;
};

/** on_conflict condition type for table "transactionStatus" */
export type TransactionStatus_On_Conflict = {
  constraint: TransactionStatus_Constraint;
  update_columns?: Array<TransactionStatus_Update_Column>;
  where?: InputMaybe<TransactionStatus_Bool_Exp>;
};

/** Ordering options when selecting data from "transactionStatus". */
export type TransactionStatus_Order_By = {
  created_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  enum?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: transactionStatus */
export type TransactionStatus_Pk_Columns_Input = {
  enum: Scalars['Int'];
};

/** select columns of table "transactionStatus" */
export enum TransactionStatus_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  Enum = 'enum',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "transactionStatus" */
export type TransactionStatus_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  description?: InputMaybe<Scalars['String']>;
  enum?: InputMaybe<Scalars['Int']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type TransactionStatus_Stddev_Fields = {
  __typename?: 'transactionStatus_stddev_fields';
  enum?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type TransactionStatus_Stddev_Pop_Fields = {
  __typename?: 'transactionStatus_stddev_pop_fields';
  enum?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type TransactionStatus_Stddev_Samp_Fields = {
  __typename?: 'transactionStatus_stddev_samp_fields';
  enum?: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "transactionStatus" */
export type TransactionStatus_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: TransactionStatus_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type TransactionStatus_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  description?: InputMaybe<Scalars['String']>;
  enum?: InputMaybe<Scalars['Int']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate sum on columns */
export type TransactionStatus_Sum_Fields = {
  __typename?: 'transactionStatus_sum_fields';
  enum?: Maybe<Scalars['Int']>;
};

/** update columns of table "transactionStatus" */
export enum TransactionStatus_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  Enum = 'enum',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type TransactionStatus_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<TransactionStatus_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<TransactionStatus_Set_Input>;
  /** filter the rows which have to be updated */
  where: TransactionStatus_Bool_Exp;
};

/** aggregate var_pop on columns */
export type TransactionStatus_Var_Pop_Fields = {
  __typename?: 'transactionStatus_var_pop_fields';
  enum?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type TransactionStatus_Var_Samp_Fields = {
  __typename?: 'transactionStatus_var_samp_fields';
  enum?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type TransactionStatus_Variance_Fields = {
  __typename?: 'transactionStatus_variance_fields';
  enum?: Maybe<Scalars['Float']>;
};

/** aggregated selection of "transaction" */
export type Transaction_Aggregate = {
  __typename?: 'transaction_aggregate';
  aggregate?: Maybe<Transaction_Aggregate_Fields>;
  nodes: Array<Transaction>;
};

export type Transaction_Aggregate_Bool_Exp = {
  count?: InputMaybe<Transaction_Aggregate_Bool_Exp_Count>;
};

export type Transaction_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Transaction_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Transaction_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "transaction" */
export type Transaction_Aggregate_Fields = {
  __typename?: 'transaction_aggregate_fields';
  avg?: Maybe<Transaction_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Transaction_Max_Fields>;
  min?: Maybe<Transaction_Min_Fields>;
  stddev?: Maybe<Transaction_Stddev_Fields>;
  stddev_pop?: Maybe<Transaction_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Transaction_Stddev_Samp_Fields>;
  sum?: Maybe<Transaction_Sum_Fields>;
  var_pop?: Maybe<Transaction_Var_Pop_Fields>;
  var_samp?: Maybe<Transaction_Var_Samp_Fields>;
  variance?: Maybe<Transaction_Variance_Fields>;
};


/** aggregate fields of "transaction" */
export type Transaction_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Transaction_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "transaction" */
export type Transaction_Aggregate_Order_By = {
  avg?: InputMaybe<Transaction_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Transaction_Max_Order_By>;
  min?: InputMaybe<Transaction_Min_Order_By>;
  stddev?: InputMaybe<Transaction_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Transaction_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Transaction_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Transaction_Sum_Order_By>;
  var_pop?: InputMaybe<Transaction_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Transaction_Var_Samp_Order_By>;
  variance?: InputMaybe<Transaction_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "transaction" */
export type Transaction_Arr_Rel_Insert_Input = {
  data: Array<Transaction_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Transaction_On_Conflict>;
};

/** aggregate avg on columns */
export type Transaction_Avg_Fields = {
  __typename?: 'transaction_avg_fields';
  amount?: Maybe<Scalars['Float']>;
  categoryEnum?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  statusEnum?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "transaction" */
export type Transaction_Avg_Order_By = {
  amount?: InputMaybe<Order_By>;
  categoryEnum?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  statusEnum?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "transaction". All fields are combined with a logical 'AND'. */
export type Transaction_Bool_Exp = {
  _and?: InputMaybe<Array<Transaction_Bool_Exp>>;
  _not?: InputMaybe<Transaction_Bool_Exp>;
  _or?: InputMaybe<Array<Transaction_Bool_Exp>>;
  account?: InputMaybe<Account_Bool_Exp>;
  accountId?: InputMaybe<Uuid_Comparison_Exp>;
  amount?: InputMaybe<Money_Comparison_Exp>;
  category?: InputMaybe<TransactionCategory_Bool_Exp>;
  categoryEnum?: InputMaybe<Int_Comparison_Exp>;
  createdAt?: InputMaybe<Date_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  postDate?: InputMaybe<Date_Comparison_Exp>;
  status?: InputMaybe<TransactionStatus_Bool_Exp>;
  statusEnum?: InputMaybe<Int_Comparison_Exp>;
  transactionDate?: InputMaybe<Date_Comparison_Exp>;
  updatedAt?: InputMaybe<Date_Comparison_Exp>;
};

/** unique or primary key constraints on table "transaction" */
export enum Transaction_Constraint {
  /** unique or primary key constraint on columns "id" */
  TransactionsPkey = 'transactions_pkey'
}

/** input type for incrementing numeric columns in table "transaction" */
export type Transaction_Inc_Input = {
  amount?: InputMaybe<Scalars['money']>;
  categoryEnum?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  statusEnum?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "transaction" */
export type Transaction_Insert_Input = {
  account?: InputMaybe<Account_Obj_Rel_Insert_Input>;
  accountId?: InputMaybe<Scalars['uuid']>;
  amount?: InputMaybe<Scalars['money']>;
  category?: InputMaybe<TransactionCategory_Obj_Rel_Insert_Input>;
  categoryEnum?: InputMaybe<Scalars['Int']>;
  createdAt?: InputMaybe<Scalars['date']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  postDate?: InputMaybe<Scalars['date']>;
  status?: InputMaybe<TransactionStatus_Obj_Rel_Insert_Input>;
  statusEnum?: InputMaybe<Scalars['Int']>;
  transactionDate?: InputMaybe<Scalars['date']>;
  updatedAt?: InputMaybe<Scalars['date']>;
};

/** aggregate max on columns */
export type Transaction_Max_Fields = {
  __typename?: 'transaction_max_fields';
  accountId?: Maybe<Scalars['uuid']>;
  amount?: Maybe<Scalars['money']>;
  categoryEnum?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['date']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  postDate?: Maybe<Scalars['date']>;
  statusEnum?: Maybe<Scalars['Int']>;
  transactionDate?: Maybe<Scalars['date']>;
  updatedAt?: Maybe<Scalars['date']>;
};

/** order by max() on columns of table "transaction" */
export type Transaction_Max_Order_By = {
  accountId?: InputMaybe<Order_By>;
  amount?: InputMaybe<Order_By>;
  categoryEnum?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  postDate?: InputMaybe<Order_By>;
  statusEnum?: InputMaybe<Order_By>;
  transactionDate?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Transaction_Min_Fields = {
  __typename?: 'transaction_min_fields';
  accountId?: Maybe<Scalars['uuid']>;
  amount?: Maybe<Scalars['money']>;
  categoryEnum?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['date']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  postDate?: Maybe<Scalars['date']>;
  statusEnum?: Maybe<Scalars['Int']>;
  transactionDate?: Maybe<Scalars['date']>;
  updatedAt?: Maybe<Scalars['date']>;
};

/** order by min() on columns of table "transaction" */
export type Transaction_Min_Order_By = {
  accountId?: InputMaybe<Order_By>;
  amount?: InputMaybe<Order_By>;
  categoryEnum?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  postDate?: InputMaybe<Order_By>;
  statusEnum?: InputMaybe<Order_By>;
  transactionDate?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "transaction" */
export type Transaction_Mutation_Response = {
  __typename?: 'transaction_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Transaction>;
};

/** on_conflict condition type for table "transaction" */
export type Transaction_On_Conflict = {
  constraint: Transaction_Constraint;
  update_columns?: Array<Transaction_Update_Column>;
  where?: InputMaybe<Transaction_Bool_Exp>;
};

/** Ordering options when selecting data from "transaction". */
export type Transaction_Order_By = {
  account?: InputMaybe<Account_Order_By>;
  accountId?: InputMaybe<Order_By>;
  amount?: InputMaybe<Order_By>;
  category?: InputMaybe<TransactionCategory_Order_By>;
  categoryEnum?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  postDate?: InputMaybe<Order_By>;
  status?: InputMaybe<TransactionStatus_Order_By>;
  statusEnum?: InputMaybe<Order_By>;
  transactionDate?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** primary key columns input for table: transaction */
export type Transaction_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "transaction" */
export enum Transaction_Select_Column {
  /** column name */
  AccountId = 'accountId',
  /** column name */
  Amount = 'amount',
  /** column name */
  CategoryEnum = 'categoryEnum',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  PostDate = 'postDate',
  /** column name */
  StatusEnum = 'statusEnum',
  /** column name */
  TransactionDate = 'transactionDate',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "transaction" */
export type Transaction_Set_Input = {
  accountId?: InputMaybe<Scalars['uuid']>;
  amount?: InputMaybe<Scalars['money']>;
  categoryEnum?: InputMaybe<Scalars['Int']>;
  createdAt?: InputMaybe<Scalars['date']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  postDate?: InputMaybe<Scalars['date']>;
  statusEnum?: InputMaybe<Scalars['Int']>;
  transactionDate?: InputMaybe<Scalars['date']>;
  updatedAt?: InputMaybe<Scalars['date']>;
};

/** aggregate stddev on columns */
export type Transaction_Stddev_Fields = {
  __typename?: 'transaction_stddev_fields';
  amount?: Maybe<Scalars['Float']>;
  categoryEnum?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  statusEnum?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "transaction" */
export type Transaction_Stddev_Order_By = {
  amount?: InputMaybe<Order_By>;
  categoryEnum?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  statusEnum?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Transaction_Stddev_Pop_Fields = {
  __typename?: 'transaction_stddev_pop_fields';
  amount?: Maybe<Scalars['Float']>;
  categoryEnum?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  statusEnum?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "transaction" */
export type Transaction_Stddev_Pop_Order_By = {
  amount?: InputMaybe<Order_By>;
  categoryEnum?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  statusEnum?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Transaction_Stddev_Samp_Fields = {
  __typename?: 'transaction_stddev_samp_fields';
  amount?: Maybe<Scalars['Float']>;
  categoryEnum?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  statusEnum?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "transaction" */
export type Transaction_Stddev_Samp_Order_By = {
  amount?: InputMaybe<Order_By>;
  categoryEnum?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  statusEnum?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "transaction" */
export type Transaction_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Transaction_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Transaction_Stream_Cursor_Value_Input = {
  accountId?: InputMaybe<Scalars['uuid']>;
  amount?: InputMaybe<Scalars['money']>;
  categoryEnum?: InputMaybe<Scalars['Int']>;
  createdAt?: InputMaybe<Scalars['date']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  postDate?: InputMaybe<Scalars['date']>;
  statusEnum?: InputMaybe<Scalars['Int']>;
  transactionDate?: InputMaybe<Scalars['date']>;
  updatedAt?: InputMaybe<Scalars['date']>;
};

/** aggregate sum on columns */
export type Transaction_Sum_Fields = {
  __typename?: 'transaction_sum_fields';
  amount?: Maybe<Scalars['money']>;
  categoryEnum?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  statusEnum?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "transaction" */
export type Transaction_Sum_Order_By = {
  amount?: InputMaybe<Order_By>;
  categoryEnum?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  statusEnum?: InputMaybe<Order_By>;
};

/** update columns of table "transaction" */
export enum Transaction_Update_Column {
  /** column name */
  AccountId = 'accountId',
  /** column name */
  Amount = 'amount',
  /** column name */
  CategoryEnum = 'categoryEnum',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  PostDate = 'postDate',
  /** column name */
  StatusEnum = 'statusEnum',
  /** column name */
  TransactionDate = 'transactionDate',
  /** column name */
  UpdatedAt = 'updatedAt'
}

export type Transaction_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Transaction_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Transaction_Set_Input>;
  /** filter the rows which have to be updated */
  where: Transaction_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Transaction_Var_Pop_Fields = {
  __typename?: 'transaction_var_pop_fields';
  amount?: Maybe<Scalars['Float']>;
  categoryEnum?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  statusEnum?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "transaction" */
export type Transaction_Var_Pop_Order_By = {
  amount?: InputMaybe<Order_By>;
  categoryEnum?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  statusEnum?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Transaction_Var_Samp_Fields = {
  __typename?: 'transaction_var_samp_fields';
  amount?: Maybe<Scalars['Float']>;
  categoryEnum?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  statusEnum?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "transaction" */
export type Transaction_Var_Samp_Order_By = {
  amount?: InputMaybe<Order_By>;
  categoryEnum?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  statusEnum?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Transaction_Variance_Fields = {
  __typename?: 'transaction_variance_fields';
  amount?: Maybe<Scalars['Float']>;
  categoryEnum?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  statusEnum?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "transaction" */
export type Transaction_Variance_Order_By = {
  amount?: InputMaybe<Order_By>;
  categoryEnum?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  statusEnum?: InputMaybe<Order_By>;
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['uuid']>;
  _gt?: InputMaybe<Scalars['uuid']>;
  _gte?: InputMaybe<Scalars['uuid']>;
  _in?: InputMaybe<Array<Scalars['uuid']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['uuid']>;
  _lte?: InputMaybe<Scalars['uuid']>;
  _neq?: InputMaybe<Scalars['uuid']>;
  _nin?: InputMaybe<Array<Scalars['uuid']>>;
};

export type InsertTransactionMutationVariables = Exact<{ [key: string]: never; }>;


export type InsertTransactionMutation = { __typename?: 'mutation_root', insert_transaction?: { __typename?: 'transaction_mutation_response', affected_rows: number } | null };

export type UpdateTransactionMutationVariables = Exact<{
  where: Transaction_Bool_Exp;
  _set?: InputMaybe<Transaction_Set_Input>;
}>;


export type UpdateTransactionMutation = { __typename?: 'mutation_root', update_transaction?: { __typename?: 'transaction_mutation_response', affected_rows: number } | null };

export type GetAccountsQueryVariables = Exact<{
  where?: InputMaybe<Account_Bool_Exp>;
}>;


export type GetAccountsQuery = { __typename?: 'query_root', account: Array<{ __typename?: 'account', id: any, name: string }> };

export type GetTotalSumQueryVariables = Exact<{
  where?: InputMaybe<Transaction_Bool_Exp>;
}>;


export type GetTotalSumQuery = { __typename?: 'query_root', transaction_aggregate: { __typename?: 'transaction_aggregate', aggregate?: { __typename?: 'transaction_aggregate_fields', sum?: { __typename?: 'transaction_sum_fields', amount?: any | null } | null } | null } };

export type GetTransactionCountQueryVariables = Exact<{
  where?: InputMaybe<Transaction_Bool_Exp>;
}>;


export type GetTransactionCountQuery = { __typename?: 'query_root', transaction_aggregate: { __typename?: 'transaction_aggregate', aggregate?: { __typename?: 'transaction_aggregate_fields', count: number } | null } };

export type GetTransactionsQueryVariables = Exact<{
  where?: InputMaybe<Transaction_Bool_Exp>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
}>;


export type GetTransactionsQuery = { __typename?: 'query_root', transaction: Array<{ __typename?: 'transaction', id: number, createdAt: any, updatedAt?: any | null, description: string, amount: any, statusEnum: number, categoryEnum: number, transactionDate: any, postDate?: any | null, accountId?: any | null, status: { __typename?: 'transactionStatus', description: string, enum: number }, category: { __typename?: 'transactionCategory', description: string, enum: number } }> };


export const InsertTransactionDocument = gql`
    mutation insertTransaction {
  insert_transaction(
    objects: {amount: "", description: "", categoryEnum: 0, statusEnum: 0, transactionDate: "", postDate: "", accountId: ""}
  ) {
    affected_rows
  }
}
    `;
export const UpdateTransactionDocument = gql`
    mutation updateTransaction($where: transaction_bool_exp!, $_set: transaction_set_input) {
  update_transaction(_set: $_set, where: $where) {
    affected_rows
  }
}
    `;
export const GetAccountsDocument = gql`
    query getAccounts($where: account_bool_exp) {
  account(where: $where) {
    id
    name
  }
}
    `;
export const GetTotalSumDocument = gql`
    query getTotalSum($where: transaction_bool_exp) {
  transaction_aggregate(where: $where) {
    aggregate {
      sum {
        amount
      }
    }
  }
}
    `;
export const GetTransactionCountDocument = gql`
    query getTransactionCount($where: transaction_bool_exp) {
  transaction_aggregate(where: $where) {
    aggregate {
      count(columns: accountId)
    }
  }
}
    `;
export const GetTransactionsDocument = gql`
    query GetTransactions($where: transaction_bool_exp, $limit: Int, $offset: Int) {
  transaction(
    where: $where
    limit: $limit
    offset: $offset
    order_by: {transactionDate: asc}
  ) {
    id
    createdAt
    updatedAt
    description
    amount
    statusEnum
    categoryEnum
    status {
      description
      enum
    }
    category {
      description
      enum
    }
    transactionDate
    postDate
    accountId
  }
}
    `;
export type Requester<C = {}, E = unknown> = <R, V>(doc: DocumentNode, vars?: V, options?: C) => Promise<R> | AsyncIterable<R>
export function getSdk<C, E>(requester: Requester<C, E>) {
  return {
    insertTransaction(variables?: InsertTransactionMutationVariables, options?: C): Promise<InsertTransactionMutation> {
      return requester<InsertTransactionMutation, InsertTransactionMutationVariables>(InsertTransactionDocument, variables, options) as Promise<InsertTransactionMutation>;
    },
    updateTransaction(variables: UpdateTransactionMutationVariables, options?: C): Promise<UpdateTransactionMutation> {
      return requester<UpdateTransactionMutation, UpdateTransactionMutationVariables>(UpdateTransactionDocument, variables, options) as Promise<UpdateTransactionMutation>;
    },
    getAccounts(variables?: GetAccountsQueryVariables, options?: C): Promise<GetAccountsQuery> {
      return requester<GetAccountsQuery, GetAccountsQueryVariables>(GetAccountsDocument, variables, options) as Promise<GetAccountsQuery>;
    },
    getTotalSum(variables?: GetTotalSumQueryVariables, options?: C): Promise<GetTotalSumQuery> {
      return requester<GetTotalSumQuery, GetTotalSumQueryVariables>(GetTotalSumDocument, variables, options) as Promise<GetTotalSumQuery>;
    },
    getTransactionCount(variables?: GetTransactionCountQueryVariables, options?: C): Promise<GetTransactionCountQuery> {
      return requester<GetTransactionCountQuery, GetTransactionCountQueryVariables>(GetTransactionCountDocument, variables, options) as Promise<GetTransactionCountQuery>;
    },
    GetTransactions(variables?: GetTransactionsQueryVariables, options?: C): Promise<GetTransactionsQuery> {
      return requester<GetTransactionsQuery, GetTransactionsQueryVariables>(GetTransactionsDocument, variables, options) as Promise<GetTransactionsQuery>;
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;