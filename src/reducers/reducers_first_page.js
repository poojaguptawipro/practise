import actions from '../actions';
export default function(state=[],actions){
switch (actions.type) {
  case 'fetch':
    return actions.payload;

}

return state;
}
