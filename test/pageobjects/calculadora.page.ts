/**
 * sub page containing specific selectors and methods for a specific page
 */
class Calculadora {
    get body() { return $('body') }
    get btn3() { return $('#btn3') }
    get visor() { return $('#visor') }
    /**
     * overwrite specifc options to adapt it to page object
     */
     abrir () {
        return browser.url(`https://zetolenttino.github.io/calculadora-js`)
    }
}

export default new Calculadora();
