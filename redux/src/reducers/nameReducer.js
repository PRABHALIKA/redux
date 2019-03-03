import {initValues} from '../utils/init';
const nameReducer=(state=initValues,actionData)=>{
   debugger;
   state={
       ...state,
       'name':actionData.payload
   }
   return state;
}

export default nameReducer;

