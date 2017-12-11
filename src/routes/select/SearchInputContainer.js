import {connect} from 'dva';
import SearchInput from '../../components/select/SearchInput';

const mapStateToProps = function (state) {
  return {
    value: state.SearchInput.value,
    data: state.SearchInput.data
  };
};

const mapDispatchToProps = function (dispatch) {
  return {
    handleChange: () => {
      dispatch({
        type: 'SearchInput/handleChange'
      });
    },
  };
};

const SearchInputContainer = connect(mapStateToProps, mapDispatchToProps)(SearchInput);
export default SearchInputContainer;
