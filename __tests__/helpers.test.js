const { format_date } = require('../utils/helpers');
test('format_date() returns a date string', () => {
    const date = new Date('2022-01-30 16:12:03');
    expect(format_date(date)).toBe('1/30/2022');
});