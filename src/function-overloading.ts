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


function parseCoOrdinates(a: string): coOrdinate;
function parseCoOrdinates(a: coOrdinate): coOrdinate;
function parseCoOrdinates(a: coOrdinate['lat'], b: coOrdinate['long']): coOrdinate;
function parseCoOrdinates(a: unknown, b?: unknown) {
    if(typeof a === "object" ) {
        return {
            long: (a as coOrdinate).long,
            lat: (a as coOrdinate).lat
        }
    }
    else if(typeof a === 'string') {
        // a.split(',').map((e) => )
    }
    else {
        return {
            a, b
        }
    }
}

parseCoOrdinates({lat:1, long: 1});
parseCoOrdinates(1, 1);
parseCoOrdinates('lat:1,long: 1');
