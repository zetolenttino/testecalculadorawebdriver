import calculadora from '../pageobjects/calculadora.page';

describe('teste soma', () => {    
    it('testar 3 + 1', async () => {
        await calculadora.abrir();
        
        await calculadora.btn3.click()
        await calculadora.btnSoma.click()
        await calculadora.btn1.click()
        await calculadora.btnResultado.click()

        await expect(calculadora.visor).toHaveValue('4');
    });
    it('testes 14 + 5', async () => {
        await calculadora.abrir();
        
        await calculadora.btn1.click()
        await calculadora.btn4.click()
        await calculadora.btnSoma.click()
        await calculadora.btn5.click()
        await calculadora.btnResultado.click()

        await expect(calculadora.visor).toHaveValue('19');
    })
    it('testes 14,5 + 4,6', async () => {
        await calculadora.abrir();
        
        await calculadora.btn1.click()
        await calculadora.btn4.click()
        await calculadora.btnVirgula.click()
        await calculadora.btn5.click()
        await calculadora.btnSoma.click()
        await calculadora.btn4.click()
        await calculadora.btnVirgula.click()
        await calculadora.btn6.click()
        await calculadora.btnResultado.click()

        await expect(calculadora.visor).toHaveValue('19,1');
    })
})