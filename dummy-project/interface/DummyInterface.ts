import OtherInterface from "./OtherInterface";
import ParentInterface from "./ParentInterface";

/**
 * Description of DummyInterface
 * @ko DummyInterface의 설명
 */
interface DummyInterface extends ParentInterface {
  /**
   * Property A
   * @ko 프로퍼티 A
   */
  propA: string;
  /**
   * Property B
   * @ko 프로퍼티 B
   * @since 1234.0.1
   */
  propB: OtherInterface;
}

export default DummyInterface;
