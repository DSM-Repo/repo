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

export const fuzzySearch = (input: string, target: string) => {
  const searchFunction = (ch: string) => {
    const offset = 44032; /* '가'의 코드 */
    // 한국어 음절
    if (/[가-힣]/.test(ch)) {
      const chCode = ch.charCodeAt(0) - offset;
      // 종성이 있으면 문자 그대로를 찾는다.
      if (chCode % 28 > 0) {
        return ch;
      }
      const begin = Math.floor(chCode / 28) * 28 + offset;
      const end = begin + 27;
      return `[\\u${begin.toString(16)}-\\u${end.toString(16)}]`;
    }
    // 한글 자음
    if (/[ㄱ-ㅎ]/.test(ch)) {
      const con2syl = {
        ㄱ: "가".charCodeAt(0),
        ㄲ: "까".charCodeAt(0),
        ㄴ: "나".charCodeAt(0),
        ㄷ: "다".charCodeAt(0),
        ㄸ: "따".charCodeAt(0),
        ㄹ: "라".charCodeAt(0),
        ㅁ: "마".charCodeAt(0),
        ㅂ: "바".charCodeAt(0),
        ㅃ: "빠".charCodeAt(0),
        ㅅ: "사".charCodeAt(0)
      };
      const begin =
        con2syl[ch] ||
        (ch.charCodeAt(0) - 12613) /* 'ㅅ'의 코드 */ * 588 + con2syl["ㅅ"];
      const end = begin + 587;
      return `[${ch}\\u${begin.toString(16)}-\\u${end.toString(16)}]`;
    }
  };

  const reg = new RegExp(
    input
      .split("")
      .map((i) => searchFunction(i))
      .join("")
  );
  return { success: reg.test(target), index: reg.exec(target)?.index || 10000 };
}; // https://taegon.kim/archives/9919, 해당 URL 참고했고 세세한 부분은 직접 공부해야 함
