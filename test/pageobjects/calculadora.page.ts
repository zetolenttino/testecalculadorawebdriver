/**
 * sub page containing specific selectors and methods for a specific page
 */
class Calculadora {
    get body() { return $('body') }
    get btn1() { return $('#btn1') }
    get btn3() { return $('#btn3') }
    get btnSoma() { return $('#btnSoma') }
    get btnResultado() { return $('.resultado') }
    get visor() { return $('#visor') }
    /**
     * overwrite specifc options to adapt it to page object
     */
     abrir () {
        return browser.url(`https://zetolenttino.github.io/calculadora-js`)
    }
}

export default new Calculadora();
