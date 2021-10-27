import calculadora from '../pageobjects/calculadora.page';

describe('teste divisao', () => {    
    it('testar 10,978 / 9,7', async () => {
        await calculadora.abrir();
        
        await calculadora.btn1.click()
        await calculadora.btn0.click()
        await calculadora.btnVirgula.click()
        await calculadora.btn9.click()
        await calculadora.btn7.click()
        await calculadora.btn8.click()
        await calculadora.btnDivisao.click()
        await calculadora.btn9.click()
        await calculadora.btnVirgula.click()
        await calculadora.btn7.click()
        await calculadora.btnResultado.click()

        await expect(calculadora.visor).toHaveValue('1,132');
    })
})