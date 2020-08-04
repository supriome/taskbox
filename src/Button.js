import React from 'react';

function Button() {
	return (
		<div>
			<input type="button" onClick={() => console.log('click button')}></input>
			button hello world!
		</div>
	);
}

export default Button;
