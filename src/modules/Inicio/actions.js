import {
  CLICK_OPEN_REGISTER,
  CLICK_LOGIN
} from './constants';


export function clickOpenRegister() {
  return {
    type: CLICK_OPEN_REGISTER
  };
}
export function clickLogin() {
  return {
    type: CLICK_LOGIN
  };
}