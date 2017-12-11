import React from 'react';
import { Select } from 'antd';

const Option = Select.Option;

const SearchInput = (props) => {

  const options = props.data.map(d => <Option key={d.value}>{d.text}</Option>);

  return (
    <Select
      mode="combobox"
      // value={props.value}
      // placeholder={this.props.placeholder}
      notFoundContent=""
      style={{width: "200px"}}
      defaultActiveFirstOption={false}
      showArrow={false}
      filterOption={false}
      onChange={props.handleChange}
    >
      {options}
    </Select>
  );
}

SearchInput.prototype = {
};

export default SearchInput;
