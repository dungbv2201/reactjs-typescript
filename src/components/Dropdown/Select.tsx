import React from 'react';
import { useDropdown } from "./context/DropdownContext";
import {
	ArrowDown
} from "../icons";

export const Select: React.FC<React.PropsWithChildren> = ({children})=>{
	const context = useDropdown();
	const handleToggle = () => {
		context.setIsShow(!context.isShow);
	}
	return (
		<div className='flex justify-between' onClick={handleToggle}>
			{children}
			<ArrowDown />
		</div>
	);
}
