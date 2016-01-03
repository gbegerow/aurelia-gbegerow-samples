

export function regexpEscape(s) {
    return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
};

export function toNumber (value) {
    //debugger;
    var f =  (typeof value === 'number')
    ? value
    : Number.parseFloat("" + value);

    return (!isNaN(f) && isFinite(f))
        ? f
        : 0;
};