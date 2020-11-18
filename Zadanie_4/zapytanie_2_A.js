printjson(db.people.aggregate([
	{ $unwind : "$credit" },
	{ $group : 
		{ _id : "$credit.currency", averageBalance : {$sum : "$credit.newBalance"}}
	}
]).toArray());  