function chunkArrayInGroups(arr, size) {
    let chunks = [];

    while (arr.length >= size) {
        chunks.push(arr.slice(0, size));
        arr = arr.slice(size);
    }

    if (arr.length) { chunks.push(arr) }

    return chunks;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);