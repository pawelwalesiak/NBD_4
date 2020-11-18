function map() {
    var bmi = this.newWeight / (this.newHeight/100 * this.newHeight/100);
    if(bmi < 1) return;
    emit(this.nationality,  {maxBmi : bmi, minBmi : bmi, avegareBmi : bmi});
}

function reduce(key, value) {
    var result = {};
	result.maxBmi = value[0].maxBmi;
    result.minBmi = value[0].minBmi;
    result.avegareBmi = 0;
    var amount = 0;
    value.forEach(function(item){
        result.maxBmi = Math.max(result.maxBmi, item.maxBmi);
		result.minBmi = Math.min(result.minBmi, item.minBmi);
        result.avegareBmi += item.avegareBmi;
        amount++;
    });
    result.avegareBmi = result.avegareBmi / amount;
    return result;
}

db.people.mapReduce(map, reduce, { out : 'zapytanie_4_mr' })

printjson(db.zapytanie_4_mr.find({}).toArray());