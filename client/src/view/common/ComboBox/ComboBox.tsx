import React, { useEffect, useState } from 'react';

// Define the type for the component props
interface ComboBoxProps {
    options: string[]; // Options should be an array of strings
    handleInputChange: (value: string) => void;
    totalQty: number; // Quantity of variants to enable the input
}

const ComboBox: React.FC<ComboBoxProps> = ({ options, handleInputChange, totalQty }) => {
    const [inputValue, setInputValue] = useState<string>('');
    const [filteredOptions, setFilteredOptions] = useState<string[]>(options);
    const [isOpen, setIsOpen] = useState<boolean>(false);

    // Handle input change
    const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setInputValue(value);
        const newFilteredOptions = options.filter((option) =>
            option.toLowerCase().includes(value.toLowerCase())
        );
        setFilteredOptions(newFilteredOptions);
        setIsOpen(true);
    };

    useEffect(() => {
        // Auto-select the option if there's only one match
        if (filteredOptions.length === 1) {
            onSelectOption(filteredOptions[0]);
        }
        if (totalQty == 0){
            onSelectOption('')
        }
    }, [filteredOptions]);

    // Handle option selection
    const onSelectOption = (option: string) => {
        setInputValue(option);
        setIsOpen(false);
        handleInputChange(option); // Call the prop function with the selected option
    };

    return (
        <div className="relative w-64">
            <input
                type="text"
                value={inputValue}
                onChange={onInputChange}
                onFocus={() => setIsOpen(true)}
                onBlur={() => setTimeout(() => setIsOpen(false), 200)} // Delay closing to allow click
                placeholder="Choose an Option"
                disabled={totalQty <= 0} // Disable if variantQty is 0 or less
                className={`w-full px-3 py-2 border ${
                    totalQty > 0 ? 'border-gray-300' : 'border-red-300 bg-gray-100'
                } rounded focus:outline-none focus:ring-2 focus:ring-blue-500`}
            />
            {isOpen && (
                <ul className="absolute left-0 right-0 z-10 mt-1 bg-white border border-gray-300 rounded shadow-md max-h-48 overflow-y-auto">
                    {filteredOptions.map((option, index) => (
                        <li
                            key={index}
                            onClick={() => onSelectOption(option)}
                            className="px-3 py-2 cursor-pointer hover:bg-gray-100"
                        >
                            {option}
                        </li>
                    ))}
                    {filteredOptions.length === 0 && (
                        <li className="px-3 py-2 text-gray-500">No options available</li>
                    )}
                </ul>
            )}
        </div>
    );
};

export default ComboBox;
