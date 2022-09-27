import { FIXME } from "../../shared/types";

const getFromStorage = (key: string) => {
  const data = localStorage.getItem(key)
  return data && JSON.parse(data);
}
const setToStorage = (key: string, data: FIXME) => {
  if (!key || !data) return;
  localStorage.setItem(key, JSON.stringify(data));
}
export {
  getFromStorage,
  setToStorage,
}