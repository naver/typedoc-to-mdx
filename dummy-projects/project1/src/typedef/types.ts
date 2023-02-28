/**
 * String or Number
 * @ko 문자열 또는 숫자
 * @example
 * ```ts
 * type Number = number;
 * ```
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number
 */
export type StringOrNumber = string | number;

export type ReferencingGenericType<T extends StringOrNumber> = T & object;
