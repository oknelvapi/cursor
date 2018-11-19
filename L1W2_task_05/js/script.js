var x = prompt ('Enter a number');
    function fibonacci(x){
        var fib1 = 1;
        var fib2 = 1;
        document.write(fib1,'\n');  
        for (let i=2; i<=x; i++){
            document.write(fib2,'\n');
            let fib3 = fib2 + fib1;
            fib1 = fib2;
            fib2 = fib3;       
        }
    }
    fibonacci(x)