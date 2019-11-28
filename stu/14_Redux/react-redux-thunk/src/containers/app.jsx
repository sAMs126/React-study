import { connect } from 'react-redux';
import Counter from '../component/counter';
import { decrement, increment } from '../redux/actions';

/**
 * 连接操作不会改变原来的组件类。
 *
 * 反而 **返回** 一个新的已与 Redux store 连接的组件类。
 */
export default connect(state => ({ count: state }), { increment, decrement })(Counter);
