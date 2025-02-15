const DEFAULT_DELAY = 2000;

export const timeLimit = (callback: () => void, delay: number = DEFAULT_DELAY) => {
  let lock = false;
  if (!lock) {
    lock = true;
    callback();
    setTimeout(() => (lock = false), delay);
  }
};
