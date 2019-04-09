const defaultState={
	value:'',
	list:[]
}
export default (state=defaultState,action)=>{
	if (action.type==='onchange') {
		const newState=JSON.parse(JSON.stringify(state));
		      newState.value=action.value;
		      return newState;
	};
	if (action.type==='onsubclick') {
		const newState=JSON.parse(JSON.stringify(state));
		      newState.list.push(newState.value);
		      newState.value='';
		      return newState;
	};
	if (action.type==='ondelclick') {
		const newState=JSON.parse(JSON.stringify(state));
		      newState.list.splice(action.index,1);
		      return newState;
	};
	return state;
}