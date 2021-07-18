# aws_dynamodb
In dynamoDb we create table with partition key and sort key.Sort key is optional. If the table has partition key only then it works as a primary key otherwise combination of partition key and sort key makes up the composite primary key. The main purpose of sort key is to sort the table according to specific attributes to avoid loop through all the elements which lead to wastage of time and money. If we want to sort to through other attributes 
other than sort key attribute we use secondary indexes
Two type of indexes are there

GLOABL SECONDARY INDEXES
LOCAL SECONDARY INDEXES 

We create a seperate index all the required attributes + primary key of the base table and create a create a new sort key to sort the elements

In GSI - We can define any key as partition key and sort key. Moreover sort key is optional
In LSI - Partition key remains same which is of base table and we can define any key as sort key. Moreover both key is compulsory to define

We can have upto 20 GSL and 5 LSI in table

