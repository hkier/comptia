function sort(arr) {
    var sorted = false;
    var temp;
    while (!sorted) {
        sorted = true;
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] > arr[i+1]) {
                temp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = temp;
                sorted = false;
            }

        }
    }
    console.log(arr);
    return arr;
}
sort([5,4,3,2,1])