let value = 2
const numbers = [ 0, 1, 2 ]

describe('my test', () => {
	it('first test', () => {
		expect(value).toBe(2)
		expect(value).toEqual(2)
		expect(value).toBeGreaterThan(1)
		expect(value).toBeLessThen(5)
	})
})

beforeEach(() => {
	console.log('before test')
})

afterEach(() => {
	console.log('after test')
})

beforeAll(() => {
	console.log('beafore all')
})

afterAll(() => {
	console.log('after all')
})

// test.only('test', () => {
// 	expect(value).toBe(1)
// 	value++
// 	expect(value).toBe(2)
// })

test.skip('test', () => {
	expect(value).toBe(1)
	value++
	expect(value).toBe(2)
})

test.each(numbers)('arr test', (number) => {
	expect(number).toBe(number)
})
