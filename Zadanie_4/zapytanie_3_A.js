printjson(db.people.aggregate([
	{$group : 
		{ _id : "jobs", jobs : {"$addToSet" : "$job"}}
	}
]).toArray());