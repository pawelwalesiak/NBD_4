printjson(db.people.aggregate([
	{$addFields: 
		{ bmi : 
			{ $divide : ["$newWeight", { $pow: [{ $divide : ["$newHeight", 100]}, 2]}]}
		}
	},
	{$group : 
		{ _id : "$nationality", maxBmi : { $max : "$bmi"}, minBmi : { $min : "$bmi"}, averageBmi : { $avg : "$bmi"}}
	}
]).toArray());