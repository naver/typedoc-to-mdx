import DummyInterface from "../interface/DummyInterface";
import ParentClass from "./ParentClass";

/**
 * Description of DummyClass
 * @ko 더미 클래스
 * @see ParentClass
 * @since 1.0.0
 * @example
 * Dummy Class Example (markdown supported)
 * ```js
 * const some_meaningless_code = true;
 * ```
 *
 * |table1|table2|
 * |---|---|
 * |{@link ParentClass}|B|
 */
class DummyClass extends ParentClass implements DummyInterface {
  /**
   * Static class property A
   * @ko 정적 클래스 프로퍼티 A
   * @readonly
   * @since 1.2.0
   * @example
   * ```ts
   * DummyClass.staticPropA;
   * ```
   */
  public static staticPropA: number = 1000;

  /**
   * Class Property A
   * @ko 클래스 프로퍼티 A
   * @readonly
   * @since 1.1.0
   * @example
   * ```ts
   * new DummyClass("b").propA === "b";
   * ```
   */
  public readonly propA: string;

  /**
   * Override definition in {@link DummyInterface}
   * @ko {@link DummyInterface}내의 정의를 오버라이드
   */
  public get propB() { return { prop: { a: 1, b: "b" } } }

  /**
   * Absolute URL {@link http://naver.com NAVER}
   * And {@link DummyInterface Dummy-Interface}
   * @ko 절대 URL 참조 {@link http://naver.com NAVER}
   * 그리고 {@link DummyInterface Dummy-Interface}
   * @since 1.4.0
   */
  public propC: DummyInterface[];

  /**
   * A constructor of DummyClass
   * @ko 더미 클래스의 생성자
   * @param paramA - Param A {@ko 패러미터 A}
   */
  public constructor(paramA: string) {
    super();

    this.propA = paramA;
  }

  /**
   * Method A
   * @param a - description of param a {@ko 패러미터 A의 설명}
   * @param b - description of param b {@ko 패러미터 B의 설명}
   * @since 1.3.0
   */
  public methodA(a: number, b: string = "DUMMY_TEXT") {

  }
}

export default DummyClass;
