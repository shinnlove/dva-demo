import jsonp from 'fetch-jsonp';
import querystring from 'querystring';

let timeout;
let currentValue;

export default {

  namespace:'SearchInput',
  state: {
    value: "请输入",
    data: [{
      value: "apple",
      text: "苹果"
    }]
  },
  effects: {
    handleChange: function* (action, {call, put}) {
      timeout = setTimeout(() => {
        if (timeout) {
          clearTimeout(timeout);
          timeout = null;
        }
        currentValue = action.value;

        const str = querystring.encode({
          code: 'utf-8',
          q: action.value,
        });
        jsonp(`https://suggest.taobao.com/sug?${str}`)
          .then(response => response.json())
          .then((d) => {
            if (currentValue === action.value) {
              const result = d.result;
              const data = [];
              result.forEach((r) => {
                data.push({
                  value: r[0],
                  text: r[0],
                });
              });

              // 更新数据
              put({
                type: 'updateSelect',
                result: data
              });

            }
          });
      }, 300);

    }
  },
  reducers: {
    updateSelect: function (state, action) {
      return {
        data: action.result
      }
    }
  }
};
