import calculadora from '../pageobjects/calculadora.page';

describe('Testes básicos', () => {    
    it('testar 3 + 1', async () => {
        await calculadora.abrir();
        
        await calculadora.btn3.click()
        await calculadora.btnSoma.click()
        await calculadora.btn1.click()
        await calculadora.btnResultado.click()

        await expect(calculadora.visor).toHaveValue('4');
    });
});