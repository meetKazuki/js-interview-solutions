function sortByParity(a) {
    var evenCount = 0;
    for (var i = 0; i < a.length; i++) {
        a[i] & 1 ? [a[i], a[i-evenCount]] = [a[i-evenCount],a[i]] : evenCount++ // swap if odd || increment if even
    }
    return a;
}
// function test
console.log(sortByParity(12));