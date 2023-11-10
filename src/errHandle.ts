import * as core from '@actions/core';

function handleError(err: Error | unknown) {
	if (err instanceof Error) {
		core.error(err);
		core.setFailed(err.message);
	}
	else {
		core.error('Unknown error has occurred!');
	}
}

export default handleError;
