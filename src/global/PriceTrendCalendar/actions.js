export const SET_SELECTED_MONTH = 'SET_SELECTED_MONTH';
export const SET_SELECTED_DAY = 'SET_SELECTED_DAY';

export const setSelectedMonth = selectedMonth => ({
  type:SET_SELECTED_MONTH,
  selectedMonth:selectedMonth
})

export const setSelectedDay = selectedDay => ({
  type:SET_SELECTED_DAY,
  selectedDay:selectedDay
})
