function forLoop(arr) {

    for(var i = 0; i < 25; i++) {
      arr.push( (`I am ${i} strange loops.`) );
    }

    return arr;
}

function whileLoop(num) {
    while (num > 0) {
        console.log(num);
        num--;
    }
    return 'done';
}

function doWhileLoop(array) {
    function maybeTrue() {
      return Math.random() >= 0.5
    }

    do {
      array.pop();
    } while ( maybeTrue() );

    return array;
}
