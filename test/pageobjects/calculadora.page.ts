/**
 * sub page containing specific selectors and methods for a specific page
 */
class Calculadora {
    get body() { return $('body') }
    get btn1() { return $('#btn1') }
    get btn2() { return $('#btn2') }
    get btn3() { return $('#btn3') }
    get btn4() { return $('#btn4') }
    get btn5() { return $('#btn5') }
    get btn6() { return $('#btn6') }
    get btn7() { return $('#btn7') }
    get btn8() { return $('#btn8') }
    get btn9() { return $('#btn9') }
    get btn0() { return $('#btn0') }
    get btnSoma() { return $('#btnSoma') }
    get btnMenos() { return $('#btnMenos') }
    get btnMultiplicacao() { return $('#btnMultiplicacao') }
    get btnDivisao() { return $('#btnDivisor') }
    get btnVirgula() { return $('#btnVirgula') }
    get btnPonto() { return $('#btnPonto') }
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
