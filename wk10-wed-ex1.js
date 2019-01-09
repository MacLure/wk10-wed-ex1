function longestConsecutive(arr, k) {

    if (arr.length === 0 || k < 1) return '';

    let stringList = [];
    let stringGroup = '';

    for (i = 0 ; i < arr.length ; i++) {
        stringGroup = '';
        for (j = 0 ; j < k ; j++) {
            if (arr[i+j]) {
                stringGroup += (arr[i+j]);
            } else {
                return stringList.sort((a, b) => b.length - a.length)[0];
            }
        }
        stringList.push(stringGroup)
    }
    return stringList.sort((a, b) => b.length - a.length)[0];
}

console.log(longestConsecutive(['hi', 'marbles', 'mittens', 'bye', 'lorem', 'ipsum', 'to', 'a', 'hippocampus'], 3))  // -> 'marblesmittensbye')
