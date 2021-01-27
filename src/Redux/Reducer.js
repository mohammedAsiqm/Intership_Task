import {
  ADD_TASK,
  COMPLETED_TASK,
  INCREAMENT_COMPLETED_TASK,
  DECREAMENT_COMPLETED_TASK,
  INCREAMENT_TOTAL_TASK,
  DECREAMENT_TOTAL_TASK,
  REMOVE_TASK,
} from "./ActionTypes";

const init = {
  tasks: [],
  TotalTask: 0,
  completed: 0,
};

export const Reducers = (state = init, data) => {
  switch (data.type) {
    case ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, data.payload],
      };

    case COMPLETED_TASK:
      return {
        ...state,
        completed: state.completed,
      };

    case INCREAMENT_COMPLETED_TASK:
      return {
        ...state,
        completed: state.completed + 1,
      };

    case DECREAMENT_COMPLETED_TASK:
      return {
        ...state,
        completed: state.completed - 1,
      };

    case INCREAMENT_TOTAL_TASK:
      return {
        ...state,
        TotalTask: state.TotalTask + 1,
      };

    case DECREAMENT_TOTAL_TASK:
      return {
        ...state,
        TotalTask: state.TotalTask - 1,
      };

    case REMOVE_TASK:
      return {
        ...state,
        removed: state.tasks.splice(data.payload, 1),
        tasks: state.tasks,
      };

    default:
      return state;
  }
};
