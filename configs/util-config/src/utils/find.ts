export const findKeyWithValueArray = <T>(
  list: object[],
  filter: string,
  value: T
) => {
  const item = list.find((i) => i[filter] === value);
  return item;
};

export const findKeyWithValue = <T>(object: object, value: T) => {
  const keys = Object.keys(object);
  return keys.find((i) => object[i] === value);
};
