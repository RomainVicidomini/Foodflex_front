// eslint-disable-next-line import/no-extraneous-dependencies
import { createAction, createReducer } from '@reduxjs/toolkit';

import { ScheduleType, Week } from '../../@types/schedule';

interface ScheduleState {
  clickAddSchedule: boolean;
  MealFavoriToAdd: Week;
  currentWeek: number;
  stateSchedule: boolean;
}

export const initialState: ScheduleState = {
  currentWeek: 1,
  clickAddSchedule: false,
  MealFavoriToAdd: {
    idMeal: 0,
    name: '',
    imageUrl: '',
    position: 0,
  },
  stateSchedule: false,
};

export const addSchedule = createAction<Week>('favori/add-planning');
export const displaySchedule = createAction<boolean>('favori/click-add-favori');
export const selectedDay = createAction<number>('favori/selected-day');
export const nextWeek = createAction<boolean>('schedule/current-week');
export const changeStateSchedule = createAction<boolean>(
  'schedule/CHANGE_STATE'
);

const scheduleReducer = createReducer(initialState, (builder) => {
  builder.addCase(changeStateSchedule, (state, action) => {
    state.stateSchedule = action.payload;
  });
  // builder
  //   .addCase(nextWeek, (state, action) => {
  //     if (action.payload && state.currentWeek < state.schedule.length) {
  //       state.currentWeek += 1;
  //     } else if (state.currentWeek > 1) {
  //       state.currentWeek -= 1;
  //     }
  //   })
  //   .addCase(addSchedule, (state, action) => {
  //     state.MealFavoriToAdd = action.payload;
  //   })
  //   .addCase(displaySchedule, (state, action) => {
  //     state.clickAddSchedule = action.payload;
  //   })
  //   .addCase(selectedDay, (state, action) => {
  //     const dayPosition = action.payload;
  //     const weekFind = state.schedule.find(
  //       (week) => week.week === state.currentWeek
  //     );
  //     const findFavori = weekFind?.meals.find(
  //       (day) => day.position === dayPosition
  //     );
  //     if (!findFavori) {
  //       state.MealFavoriToAdd.position = action.payload;
  //       weekFind?.meals.push(state.MealFavoriToAdd);
  //       // fermer la modale planning
  //       state.clickAddSchedule = false;
  //     }
  //   });
});

export default scheduleReducer;