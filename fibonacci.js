// Iterative solution. Returns array up to n'th element in sequence.
function fibs(n) {
    if (n === 0) {
        return [0];
    }
    const sequence = [0, 1];
    for (let i = 2; i < n; i++) {
        sequence.push(sequence[i-2] + sequence[i-1]);
    }
    return sequence;
}

// Memoized recursive solution
function fibsRecHelper(n, cache={0: 0, 1: 1}) {
    if (!(n in cache)){
        cache[n] = fibsRecHelper(n-2, cache)[0] + fibsRecHelper(n-1, cache)[0];
    }
    return [cache[n], cache];
}

// Wrapper function for fibsRecHelper, returns array of fibonacci values
function fibsRec(n) {
    return Object.values(fibsRecHelper(n)[1]);
}

// Standard recursive solution
function alternateFibsRec(n) {
    if (n === 0) {
        return [0];
    }
    if (n === 1) {
        return [0, 1];
    }
    let s = alternateFibsRec(n-1);
    s.push(s[s.length - 1] + s[s.length - 2]);
    return s;
}

