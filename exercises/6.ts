/*
    Utwórz typ, zwracany przez funkcję `message`, który będzie aktualny niezależny od ciała funkcji `message`.
*/

const message = (t: unknown) => {
    if(typeof t === 'string') {
        return `message: ${t}`;
    }else if(typeof t === 'number') {
        return t;
    }else{
        return new Error('Invalid type');
    }
}