describe('getDivAttribute', function() {
    var d = document.querySelector('.box');

    it('Should be bar', function() {
        expect(d.getAttribute('foo')).toBe('bar');
    });
});

describe('getDiv', function() {
    var d = document.querySelector('.box');

    it('Should exist', function() {
        expect(d.nodeName).toBe('DIV');
    });
});

// describe("The 'toBe' matcher compares with ===", function() {