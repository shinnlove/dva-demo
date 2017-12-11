import $ from 'jquery';

export default {
  namespace: 'MyButton',
  state: {
    value: '你好，访问者',
    data: null
  },
  effects: {
    click: function*(action, {call, put}) {
      yield put({type: 'begin'});
      const url = 'https://os.alipayobjects.com/rmsportal/nnUJCKmLCyQHCex.json';
      const data = yield $.getJSON(url).then(data => data);
      yield put({
        type: 'end',
        payload: data
      });
    }
  },
  reducers: {
    begin(state, action) {
      return {
        value: '正在读取数据……'
      };
    },
    end(state, action) {
      return {
        value: '读取数据完毕',
        data: action.payload.total_count
      };
    }
  }
}
