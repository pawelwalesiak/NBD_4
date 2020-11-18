printjson(db.people.aggregate(
    [
        {$match : 
			{ newHeight : {$gt : -1}, newWeight : {$gt : -1}}
		},
        {$group : 
			{ _id : "$sex", averageHeight : {$avg : "$newHeight"}, averageWeight : {$avg : "$newWeight"}}
		}
    ]
).toArray())