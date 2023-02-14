//get a specific value fron an object
function pluck<Datatype, KeyType extends keyof Datatype>(obj: Datatype, key: KeyType) {
    return obj[key];
}


pluck({name: 'hari'}, 'name');
