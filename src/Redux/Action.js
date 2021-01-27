import {
  ADD_TASK,
  COMPLETED_TASK,
  INCREAMENT_COMPLETED_TASK,
  DECREAMENT_COMPLETED_TASK,
  INCREAMENT_TOTAL_TASK,
  DECREAMENT_TOTAL_TASK,
  REMOVE_TASK,
} from "./ActionTypes";

export const ADDTASK = (Tasks) => {
  return {
    type: ADD_TASK,
    payload: Tasks,
  };
};

export const COMPLETEDTASK = () => {
  return {
    type: COMPLETED_TASK,
  };
};

export const INCREAMENTTASK = () => {
  return {
    type: INCREAMENT_COMPLETED_TASK,
  };
};

export const DECREAMENTTASK = () => {
  return {
    type: DECREAMENT_COMPLETED_TASK,
  };
};

export const INCREAMENTTOTALTASK = () => {
  return {
    type: INCREAMENT_TOTAL_TASK,
  };
};
export const DECREAMENTTOTALTASK = () => {
  return {
    type: DECREAMENT_TOTAL_TASK,
  };
};

export const REMOVETASK = (index) => {
  return {
    type: REMOVE_TASK,
    payload: index,
  };
};
