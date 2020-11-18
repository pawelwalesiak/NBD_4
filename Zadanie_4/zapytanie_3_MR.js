function map() {
    if(!this.job) return;
    emit('jobs', {jobs : this.job});
}

function reduce(key, value) {
    var result = [];
    var func = function(item, pos) {
        if(Array.isArray(item)) {
            item.forEach(func);
        }
        else if(result.indexOf(item) === -1) {
            result.push(item);
        }
    }
    temp = value.map(p => p.jobs);
    temp.forEach(func);
    return {jobs : result};
}

function finalize(key, value) {
    return value.jobs;
}

db.people.mapReduce(map, reduce, { out : 'zapytanie_3_mr', finalize: finalize })

printjson(db.zapytanie_3_mr.find({}).toArray());