import React from 'react';
import Item from "./Item";
import {useDropdown} from "./context/DropdownContext";


const List: React.FC<React.PropsWithChildren> = ({ children }) => {
	const context = useDropdown()
	return (
		context.isShow && (
			<ul className='absolute top-full left-0 w-full'>
				{children}
			</ul>
		)
	);
}

export default List;
