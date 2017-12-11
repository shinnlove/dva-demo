import { connect } from 'dva';
import MyButton from '../components/MyButton';

const mapStateToProps = function (state) {
  return {
    text: state.MyButton.value,
    data: state.MyButton.data
  };
};

const mapDispatchToProps = function (dispatch) {
  return {
    onClick: () => {
      dispatch({ type: 'MyButton/click' });
    }
  };
};

const MyButtonContainer = connect(mapStateToProps, mapDispatchToProps)(MyButton);

export default MyButtonContainer;
