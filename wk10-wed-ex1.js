
function longestConsecutive(arr, k) {
    return (k > 0) ? arr.filter(str => {str.length === k})[0] : '';
}

longestConsecutive(['hi', 'marbles', 'mittens', 'bye', 'lorem', 'ipsum', 'to', 'a', 'hippocampus'], 3);  // -> 'marblesmittensbye'
