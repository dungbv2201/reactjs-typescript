import React, {useState} from 'react';

interface ContextDropdown {
	isShow: Boolean;
	setIsShow: (status: boolean) => void;
}
export const DropdownContext = React.createContext<ContextDropdown | undefined>(undefined)

const DropdownProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
	const [isShow, setIsShow] = useState<Boolean>(false);
	return (
		<DropdownContext.Provider value={{isShow, setIsShow}}>
			{ children }
		</DropdownContext.Provider>
	)
}

export const useDropdown = (): ContextDropdown => {
	const context = React.useContext(DropdownContext);
	if (!context) {
		throw new Error('This component must be used within a <Dropdown> component.');
	}
	return context;
};
export default DropdownProvider;
