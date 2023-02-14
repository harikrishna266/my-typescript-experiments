export type coOrdinate = {
    lat: number,
    long: number
}

function parseCoOrdinateFromObject(cord: coOrdinate): coOrdinate {
    return {
        long: cord.long,
        lat: cord.lat
    }
}

function parseCoOrdinateFromNumbers(lat: coOrdinate["lat"], long: coOrdinate['long']): coOrdinate {
     return {
        lat, long
    }
}


function parseCoOrdinates(a: coOrdinate): coOrdinate;
function parseCoOrdinates(a: coOrdinate['lat'], b: coOrdinate['long']): coOrdinate;
function parseCoOrdinates(a: unknown, b?: unknown) {
    if(typeof a === "object") {
        return  parseCoOrdinateFromObject(a as coOrdinate);
    }
    else {
        return parseCoOrdinateFromNumbers(a as number, b as number);
    }
}

parseCoOrdinates({lat:1, long: 1});
parseCoOrdinates(1, 1);
