function map() {
    this.credit.forEach(function(item){
        var balance = parseFloat(item.balance);
        if(!isNaN(balance))
            emit(item.currency, {balanceSum: balance, averageBalance: balance})
    });
}

function reduce(key, value){
    var result = {};
    result.averageBalance = 0;
    result.balanceSum = 0;
    
	var amount = 0;
    value.forEach(function(item){
        result.balanceSum += item.balanceSum;
        amount++;
    });
    
	result.averageBalance = result.balanceSum / amount;
    return result;
}

db.people.mapReduce(map, reduce, { out : 'zapytanie_5_mr', query : {nationality:'Poland', sex: 'Female'} })

printjson(db.zapytanie_5_mr.find({}).toArray());