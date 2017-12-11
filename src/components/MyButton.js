import React from 'react';
import {Button} from 'antd';

const MyButton = (props) => {
  return (
    <div>
      <Button onClick={props.onClick}>{props.text}</Button>
      <div>{props.data}</div>
    </div>
  );
};

MyButton.propTypes = {
};

export default MyButton;
