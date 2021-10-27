import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class CalculadoraPage extends Page {
    get body() { return $('body') }
    get btn3() { return $('#btn3') }
    get visor() { return $('#visor') }
    /**
     * overwrite specifc options to adapt it to page object
     */
    open() {
        return super.open();
    }
}

export default new CalculadoraPage();
