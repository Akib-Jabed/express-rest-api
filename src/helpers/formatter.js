export const createFlattenOject = (obj, keys=[], result={}) => {
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            if (typeof obj[key] === 'object' && obj[key] !== null) {
                createFlattenOject(obj[key], keys, result);
            } else {
                if (keys.indexOf(key) === -1) {
                    result[key] = obj[key];
                    keys.push(key);
                }
            }
        }
    }

    return result;
}