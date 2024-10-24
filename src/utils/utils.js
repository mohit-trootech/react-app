/**React Utilities */

const updateLocalStorage = (key, value) => {
  /**Update Browser's LocalStorage Value */
  window.localStorage.setItem(key, value);
};

const getLocalStorage = (key) => {
  /**Get Browser's Local Storage Item */
  return window.localStorage.getItem(key);
};

export default { updateLocalStorage, getLocalStorage };
