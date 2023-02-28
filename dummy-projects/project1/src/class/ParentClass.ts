/**
 * A dummy parent class for test
 * @ko 테스트용 더미 부모 클래스
 * @since 1.0.0
 */
class ParentClass {
  /**
   * Version info string
   * @ko 버전정보 문자열
   * @readonly
   * @example
   * ```ts
   * ParentClass.VERSION;  // ex) 4.0.0
   * ```
   */
  public static VERSION = "#__VERSION__#";

  /**
   * A property to inherit
   * @ko 상속할 프로퍼티
   */
  public inheritedProperty: number = 10;

  /**
   * Method A of ParentClass
   * @ko ParentClass의 메소드 A
   * @param param - Parameter {@ko 패러미터}
   * @param param.a - Param A {@ko 패러미터 A}
   * @param param.b - Param B {@ko 패러미터 B}
   * @returns A number {@ko 숫자}
   * @since 1.99.0
   */
  public parentMethodA(param = { a: 123, b: 456 }): number {
    return 1;
  }
}

export default ParentClass;
