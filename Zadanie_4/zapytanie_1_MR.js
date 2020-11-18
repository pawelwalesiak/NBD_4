function map() {
    var people = { 
                averageHeight : this.newHeight,
                averageWeight : this.newWeight
            }
    emit(this.sex, people);
}

function reduce(key, value){
    var heights = value.map(x => x.averageHeight);
    var weights = value.map(x => x.averageWeight);
    var people = { 
                averageHeight : Array.avg(heights),
                averageWeight : Array.avg(weights) 
            }
    return people;
}
db.people.mapReduce(map, reduce, { out : 'zapytanie_1_mr' })

printjson(db.zapytanie_1_mr.find({}).toArray());