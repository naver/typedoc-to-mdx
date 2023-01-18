/**
 * Some global function
 * @ko Global function
 * @param a Param A {@ko 패러미터 A}
 * @param b Param B {@ko 패러미터 B}
 * @param b.foo Param B.foo {@ko 패러미터 B.foo}
 * @param b.bar Param B.bar {@ko 패러미터 B.bar}
 */
function SomeGlobalFunction(a: number = 10, b = { foo: 123, bar: 456 }) {
  return `I'm global, ${a} ${b}`;
}

export default SomeGlobalFunction
