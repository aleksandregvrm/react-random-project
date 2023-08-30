import { createSlice } from "@reduxjs/toolkit";
import { data } from "../utils/data";

const initialFilterState = {
  data: data,
  activeQuestion: 0,
  questionsAmount: data.length,
  points: 0,
  hintsUsed: 0,
  hintsMax: 2,
  timePerQuestion:10,
  condition:true,
};
const initialState = {
  ...initialFilterState,
};

const questionSlice = createSlice({
  name: "questionSlice",
  initialState,
  reducers: {
    nextQuestionSwitch: (state) => {
        if(state.activeQuestion < state.questionsAmount - 1){
            let questionCount = state.activeQuestion + 1;
            return { ...state, activeQuestion: questionCount };
        }
        return {...state,activeQuestion:state.questionsAmount,condition:false}
    },
    checkForCorrectAnswers: (state,{payload}) => {
       return {...state,points:payload}
    },
    restartQuiz: (state) => {
        return {...initialFilterState}
    },
    useHint: (state,{payload}) => {
      return {...state,hintsUsed:payload}
    }
  },
});

export const { nextQuestionSwitch,checkForCorrectAnswers,restartQuiz, useHint } = questionSlice.actions;

export default questionSlice.reducer;
