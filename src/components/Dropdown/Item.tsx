import React from 'react';

const Item: React.FC<React.PropsWithChildren> = ({children}) => {
	return (
		<li className='w-full bg-white hover:bg-slate-50 p-3 border border-slate-100'>
			{ children }
		</li>
	);
}

export default Item;
