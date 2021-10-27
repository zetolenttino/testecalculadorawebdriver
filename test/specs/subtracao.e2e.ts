import calculadora from '../pageobjects/calculadora.page';

describe('teste subtracao', () => {    
    it('testar 400 - 115', async () => {
        await calculadora.abrir();
        
        await calculadora.btn4.click()
        await calculadora.btn0.click()
        await calculadora.btn0.click()
        await calculadora.btnMenos.click()
        await calculadora.btn1.click()
        await calculadora.btn1.click()
        await calculadora.btn5.click()
        await calculadora.btnResultado.click()

        await expect(calculadora.visor).toHaveValue('285');
    })
})