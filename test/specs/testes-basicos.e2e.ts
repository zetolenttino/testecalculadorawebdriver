import calculadora from '../pageobjects/calculadora.page';

describe('Testes básicos', () => {
    it('Deve abrir a pagina corretamente', async () => {
        await calculadora.abrir();

        await expect(calculadora.body).toBeExisting();
        await expect(calculadora.body).toHaveTextContaining('Calculadora');
    });
    it('Tenta clicar no botao 3', async () => {
        await calculadora.abrir();

        await calculadora.btn3.click()
        await expect(calculadora.visor).toBeExisting();
        await expect(calculadora.visor).toHaveValue('3');
    });
});
