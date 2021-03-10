import { App } from './App';

describe('App tests', () => {
  const app = new App();

  it ('Test 1: Should print => Leap year', () => {
    const response = app.calendarLeapYears(2000);
    expect(response).toBe('Leap year')
  })

  it ('Test 2: Should print => Leap year', () => {
    const response = app.calendarLeapYears(2008);
    expect(response).toBe('Leap year')
  })

  it ('Test 3: Should print => Leap year', () => {
    const response = app.calendarLeapYears(2012);
    expect(response).toBe('Leap year')
  })

  it ('Test 4: Should print => Leap year', () => {
    const response = app.calendarLeapYears(2016);
    expect(response).toBe('Leap year')
  })

  it ('Test 5: Should print => Not leap year', () => {
    const response = app.calendarLeapYears(2);
    expect(response).toBe('Not leap year')
  })

  it ('Test 6: Should print => Not leap year', () => {
    const response = app.calendarLeapYears(1700);
    expect(response).toBe('Not leap year')
  })

  it ('Test 7: Should print => Not leap year', () => {
    const response = app.calendarLeapYears(1800);
    expect(response).toBe('Not leap year')
  })

  it ('Test 8: Should print => Not leap year', () => {
    const response = app.calendarLeapYears(1900);
    expect(response).toBe('Not leap year')
  })

  it ('Test 9: Should print => Not leap year', () => {
    const response = app.calendarLeapYears(2100);
    expect(response).toBe('Not leap year')
  })

  it ('Test 10: Should print => Not leap year', () => {
    const response = app.calendarLeapYears(2017);
    expect(response).toBe('Not leap year')
  })

  it ('Test 11: Should print => Not leap year', () => {
    const response = app.calendarLeapYears(2018);
    expect(response).toBe('Not leap year')
  })
  
  it ('Test 12: Should print => Not leap year', () => {
    const response = app.calendarLeapYears(2019);
    expect(response).toBe('Not leap year')
  })

  it ('Test 13: Should NOT print => Leap year', () => {
    const response = app.calendarLeapYears(2);
    expect(response).not.toBe('Leap year')
  })

  it ('Test 14: Should NOT print => Leap year', () => {
    const response = app.calendarLeapYears(1700);
    expect(response).not.toBe('Leap year')
  })

  it ('Test 15: Should NOT print => Leap year', () => {
    const response = app.calendarLeapYears(1800);
    expect(response).not.toBe('Leap year')
  })

  it ('Test 16: Should NOT print => Leap year', () => {
    const response = app.calendarLeapYears(1900);
    expect(response).not.toBe('Leap year')
  })

  it ('Test 17: Should NOT print => Leap year', () => {
    const response = app.calendarLeapYears(2100);
    expect(response).not.toBe('Leap year')
  })

  it ('Test 18: Should NOT print => Leap year', () => {
    const response = app.calendarLeapYears(2017);
    expect(response).not.toBe('Leap year')
  })

  it ('Test 19: Should NOT print => Leap year', () => {
    const response = app.calendarLeapYears(2018);
    expect(response).not.toBe('Leap year')
  })

  it ('Test 20: Should NOT print => Leap year', () => {
    const response = app.calendarLeapYears(2019);
    expect(response).not.toBe('Leap year')
  })

  it ('Test 21: Should NOT print => Not leap year', () => {
    const response = app.calendarLeapYears(2000);
    expect(response).not.toBe('Not leap year')
  })

  it ('Test 22: Should NOT print => Not leap year', () => {
    const response = app.calendarLeapYears(2008);
    expect(response).not.toBe('Not leap year')
  })

  it ('Test 23: Should NOT print => Not leap year', () => {
    const response = app.calendarLeapYears(2012);
    expect(response).not.toBe('Not leap year')
  })

  it ('Test 24: Should NOT print => Not leap year', () => {
    const response = app.calendarLeapYears(2016);
    expect(response).not.toBe('Not leap year')
  })

})
