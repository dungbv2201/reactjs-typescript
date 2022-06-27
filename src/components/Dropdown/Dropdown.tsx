import React from 'react';
import {Select} from "./Select";
import List from "./List";
import DropdownProvider from "./context/DropdownContext";

interface IDropdownComposition {
	Select: React.FC<React.PropsWithChildren>
	List: React.FC<React.PropsWithChildren>
}

const Dropdown: React.FC<React.PropsWithChildren> & IDropdownComposition = ({ children}) =>{
	return (
		<DropdownProvider>
			<div className='max-w-[300px] w-full relative border border-slate-100 rounded-lg p-3 cursor-pointer'>
				{ children }
			</div>
		</DropdownProvider>
	);
}

Dropdown.Select = Select;
Dropdown.List = List;

export {Dropdown};
