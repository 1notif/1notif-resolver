export function handle(state, action) {

	const { function_id, label } = action.input;

	ContractAssert(!(label in state.registrar), 'label registered');
	ContractAssert(/[a-z0-9_-]{43}/i.test(function_id), 'synatx error');
	ContractAssert(/^(?!-)[a-zA-Z0-9-]{1,30}(?<!-)$/.test(label), 'invalid label syntax');

	state.registrar[label] = function_id;
	return { state };
}


