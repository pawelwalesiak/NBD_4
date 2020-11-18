function map() {
    for(i = 0; i < this.credit.length; i++) {
        var n = this.credit[i];
        emit(n.currency, parseFloat(n.balance));
    }
}

function reduce(key, value) {
    var array = value.filter(n => !isNaN(n));
    return Array.sum(array)
}

db.people.mapReduce(map, reduce, { out : 'zapytanie_2_mr' })

printjson(db.zapytanie_12_mr.find({}).toArray());