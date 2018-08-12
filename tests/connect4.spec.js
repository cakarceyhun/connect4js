var connect4 = require('../connect4.js')

describe('check status tests', function() {
    it('test 1', function() {
        expect(connect4.check_status(['00101111'], '1')).toEqual(true)
    })
    it('test 2', function() {
        expect(connect4.check_status(['00101011'], '1')).toEqual(false)
    })
    it('test 3', function() {
	expect(connect4.check_status(['00100001'], '0')).toEqual(true)
    })
    it('test 4', function() {
	expect(connect4.check_status(['00101101', '01011110'], '1')).toEqual(true)
    })
})
