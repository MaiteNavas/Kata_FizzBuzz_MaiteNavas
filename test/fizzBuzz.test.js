const FizzBuzz = require('../fizzBuzz')


describe (
    'verificar que cuando 3 y 5 tengas divisores retornen FizzBuzz y si no nos devuelva el numero', () => {
        
        test('devuelve Fizz cuando sea divisible por 3', () => {
            /*
             * GHERKING TEST
             * Given/Dado un numero
             * When/Cuando sea divisible por 3
             * Then/entonces devuelva "Fizz"
            */
            
            const fizz_buzz = new FizzBuzz()
            let numero = 6;
            let respuesta_esperada = "Fizz";

           
            const respuesta = fizz_buzz.retornarFizzBuzz(numero);
            
            expect(respuesta).toBe(respuesta_esperada)
        })
        test('devuelve Buzz cuando sea divisible por 5', () => {
            /**GHERKING TEST
             * Given/Dado un numero
             * When/Cuando sea divisible por 5
             * Then/entonces devuelva "Buzz"
            */
            
            const fizz_buzz = new FizzBuzz()
            let numero = 10;
            let respuesta_esperada = "Buzz";

            
            const respuesta = fizz_buzz.retornarFizzBuzz(numero);
            
            expect(respuesta).toBe(respuesta_esperada)
        })
        test('devuelve el numero cuando no sea divisible por 5 y 3', () => {
            /**GHERKING TEST
             * Given/Dado un numero
             * When/Cuando no sea divisible por 5 y por 3
             * Then/entonces devuelva "FizzBuzz"
            */
            
            const fizz_buzz = new FizzBuzz()
            let numero = 15;
            let respuesta_esperada = "FizzBuzz";

            
            const respuesta = fizz_buzz.retornarFizzBuzz(numero);
            
            expect(respuesta).toBe(respuesta_esperada)
        })
}
)