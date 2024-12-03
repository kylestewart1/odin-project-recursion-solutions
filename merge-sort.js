function mergeSort(array) {
    const n = array.length;
    if (n <= 1) {
        return array;
    }
    const left = mergeSort(array.slice(0, Math.floor(n/2)));
    const right = mergeSort(array.slice(Math.floor(n/2)));
    const merged = mergeHelper(left, right, []);
    return merged;

}

// Recursive solution to the merge step (for fun, probably worse than iterative version)
function mergeHelper(left, right, sorted) {
    const a = left[0];
    const b = right[0];
    if (!a && ! b) {
        return sorted;
    }
    if (!a) {
        sorted.push(b);
        return mergeHelper(left, right.slice(1), sorted);
    } else if (!b) {
        sorted.push(a);
        return mergeHelper(left.slice(1), right, sorted);
    } else {
        if (a<=b) {
            sorted.push(a);
            return mergeHelper(left.slice(1), right, sorted);
        } else {
            sorted.push(b);
            return mergeHelper(left, right.slice(1), sorted);
        }
    }
}