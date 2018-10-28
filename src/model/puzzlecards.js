import request  from '../util/request';
import { message } from 'antd';
const delay = (millisecond) => {
    return new Promise((resolve) => {
      setTimeout(resolve, millisecond);
    });
  };
export default {
    namespace: 'puzzlecards',
    state: {
        data: [],
        counter: 0,
    },
    effects: {
        *queryInitCards(_, sagaEffects) {
          const { call, put } = sagaEffects;
          const endPointURI  = '/dev/random_joke';
          try { // 加入 try catch 捕获抛错
            const puzzle = yield call(request, endPointURI);
            yield put({ type: 'addNewCard', payload: puzzle });
        
            yield call(delay, 3000);
        
            const puzzle2 = yield call(request, endPointURI);
            yield put({ type: 'addNewCard', payload: puzzle2 });
          } catch (e) {
            message.error('数据获取失败'); // 打印错误信息
          }
        },
        *addNewCards(_, sagaEffects) {
            const { call, put } = sagaEffects;
            const endPointURI = 'https://08ad1pao69.execute-api.us-east-1.amazonaws.com/dev/random_joke';
      
            const puzzle = yield call(request, endPointURI);
            yield put({ type: 'addNewCard', payload: puzzle });
          }
      },
    reducers: {
        addNewCard(state, { payload: newCard }) {
            const nextCounter = state.counter + 1;
            const newCardWithId = { ...newCard, id: nextCounter };
            const nextData = state.data.concat(newCardWithId);
            return {
                data: nextData,
                counter: nextCounter,
            };
        }
    },
};