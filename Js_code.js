function put_in_order() {
        for (let i = 1; i < numbers.length; i++) {
            let current = numbers[i];
            let j = i - 1;
        
            while (j >= 0 && numbers[j] > current) {
              numbers[j + 1] = numbers[j];
              j--;
            }
        
            numbers[j + 1] = current;
          }
}   
    put_in_order()
    console.log(numbers);