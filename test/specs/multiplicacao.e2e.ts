import calculadora from '../pageobjects/calculadora.page';

describe('teste multiplicacao', () => {    
    it('testar 999 * 8,7', async () => {
        await calculadora.abrir();
        
        await calculadora.btn9.click()
        await calculadora.btn9.click()
        await calculadora.btn9.click()
        await calculadora.btnMultiplicacao.click()
        await calculadora.btn8.click()
        await calculadora.btnVirgula.click()
        await calculadora.btn7.click()
        await calculadora.btnResultado.click()

        await expect(calculadora.visor).toHaveValue('8.691,3');
    })
})