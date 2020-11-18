printjson(db.people.aggregate([
	{ $unwind : "$credit" },
	{ $match : { nationality : "Poland", sex : "Female", }},
	{$group : 
		{ _id : "$credit.currency", averageBalance : { $avg : "$credit.newBalance"}, balanceSum : { $sum : "$credit.newBalance"}}
	}
]).toArray());