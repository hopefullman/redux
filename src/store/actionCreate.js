import {ONCHANGE, ONSUBCLICK, ONDELCLICK} from './actionType.js';
export const ONCHANGE_VALUE=(value)=>({
	type:ONCHANGE,
	value:value
})

export const ONSUBCLICK_VALUE=()=>({
	type:ONSUBCLICK
})

export const ONDELCLICK_VALUE=(index)=>({
	type:ONDELCLICK,
	index:index
})