import calculadora from '../pageobjects/calculadora.page';

describe('teste limpar', () => {    
    it('testar 978 / 578 ac 5+9', async () => {
        await calculadora.abrir();
        
        await calculadora.btn9.click()
        await calculadora.btn7.click()
        await calculadora.btn8.click()
        await calculadora.btnDivisao.click()
        await calculadora.btn5.click()
        await calculadora.btn7.click()
        await calculadora.btn8.click()
        await calculadora.btnResultado.click()

        await expect(calculadora.visor).toHaveValue('1,692');

        await calculadora.btnAC.click()

        await calculadora.btn5.click()
        await calculadora.btnSoma.click()
        await calculadora.btn9.click()
        await calculadora.btnResultado.click()

        await expect(calculadora.visor).toHaveValue('14');
    })
})