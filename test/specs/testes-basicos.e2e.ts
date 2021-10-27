import calculadoraPage from '../pageobjects/calculadora.page';

describe('Testes básicos', () => {
    it('Deve abrir a pagina corretamente', async () => {
        await calculadoraPage.open();

        await expect(calculadoraPage.body).toBeExisting();
        await expect(calculadoraPage.body).toHaveTextContaining('Calculadora');
    });
    it.only('Tenta clicar no botao 3', async () => {
        await calculadoraPage.open();

        await calculadoraPage.btn3.click()
        await expect(calculadoraPage.visor).toBeExisting();
        await expect(calculadoraPage.visor).toHaveValue('3');
    });
});
