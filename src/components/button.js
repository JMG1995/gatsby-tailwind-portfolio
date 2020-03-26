import React from 'react';

const Button = ({ text, type }) => {
	return (
		<div className="text-center">
			<button
				className="font-semibold text-honeydew bg-space-cadet rounded-full py-2 px-4 shadow-md hover:bg-queen-blue transition-quick"
				type={type}>
				{text}
			</button>
		</div>
	);
};

export default Button;
