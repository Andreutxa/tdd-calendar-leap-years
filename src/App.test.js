import { App } from './App';

describe('App tests', () => {
  const app = new App();

  it ('Test 1 YES: Should print => Leap year', () => {
    const response = app.calendarLeapYears(2000);
    expect(response).toBe('Leap year')
  })

  it ('Test 2 YES: Should print => Leap year', () => {
    const response = app.calendarLeapYears(2008);
    expect(response).toBe('Leap year')
  })

  it ('Test 4 YES: Should print => Leap year', () => {
    const response = app.calendarLeapYears(2012);
    expect(response).toBe('Leap year')
  })

  it ('Test 5 YES: Should print => Leap year', () => {
    const response = app.calendarLeapYears(2016);
    expect(response).toBe('Leap year')
  })

  it ('Test 1 NO: Should print => Not leap year', () => {
    const response = app.calendarLeapYears(2);
    expect(response).toBe('Not leap year')
  })
  it ('Test 2 NO: Should print => Not leap year', () => {
    const response = app.calendarLeapYears(1700);
    expect(response).toBe('Not leap year')
  })
  it ('Test 3 NO: Should print => Not leap year', () => {
    const response = app.calendarLeapYears(1800);
    expect(response).toBe('Not leap year')
  })
  it ('Test 4 NO: Should print => Not leap year', () => {
    const response = app.calendarLeapYears(1900);
    expect(response).toBe('Not leap year')
  })
  it ('Test 5 NO: Should print => Not leap year', () => {
    const response = app.calendarLeapYears(2100);
    expect(response).toBe('Not leap year')
  })
  it ('Test 6 NO: Should print => Not leap year', () => {
    const response = app.calendarLeapYears(2017);
    expect(response).toBe('Not leap year')
  })
  it ('Test 7 NO: Should print => Not leap year', () => {
    const response = app.calendarLeapYears(2018);
    expect(response).toBe('Not leap year')
  })
  it ('Test 8 NO: Should print => Not leap year', () => {
    const response = app.calendarLeapYears(2019);
    expect(response).toBe('Not leap year')
  })

})
