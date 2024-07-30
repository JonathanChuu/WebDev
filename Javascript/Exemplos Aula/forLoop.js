function fibonacciGenerator (n) {
    //Do NOT change any of the code above 👆
        
        //Write your code here:
        let primeiroNumero = 0
        let segundoNumero = 1
        let reservaNumero = 0
        let arrResultado = [0, 1]
        if (n >= 2) {
            for (let i = 2; i < n; i++) {
                reservaNumero = segundoNumero
                segundoNumero = segundoNumero + primeiroNumero
                primeiroNumero = reservaNumero
                arrResultado.push(segundoNumero)
            }
        } else if (n === 1) {
            return arrResultado = [0];
        } else {
            return [0]
        }
        return arrResultado
        
        
        
        
        //Return an array of fibonacci numbers starting from 0.
        
    //Do NOT change any of the code below 👇
    }
    
    