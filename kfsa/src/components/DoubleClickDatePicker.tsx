import React, { useState } from 'react';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Tooltip } from '@mui/material';

interface DoubleClickDatePickerProps {
    value?: any;
    onChange?: (value: any) => void;
    format?: string;
    slotProps?: any;
    slots?: any;
    sx?: any;
    [key: string]: any;
}

export default function DoubleClickDatePicker({ value, onChange, format = "yyyy/MM/dd", slotProps, slots, sx, ...props }: DoubleClickDatePickerProps) {
    const [open, setOpen] = useState(false);

    // Merge custom slotProps with our double-click logic
    const textFieldProps = slotProps?.textField || {};
    const inputProps = textFieldProps.InputProps || {};

    return (
        <Tooltip title="마우스를 더블클릭하면 캘린더가 보여요" arrow enterDelay={500}>
            <div style={{ display: 'inline-block' }}>
                <DatePicker
                    value={value}
                    onChange={(newValue) => {
                        if (onChange) onChange(newValue);
                        setOpen(false); // Close on selection
                    }}
                    open={open}
                    onClose={() => setOpen(false)}
                    onOpen={() => setOpen(true)}
                    format={format}
                    slots={{
                        ...slots,
                        openPickerIcon: () => null, // Explicitly render nothing for the icon
                        // Also try to hide the button itself involving the icon
                    }}
                    slotProps={{
                        ...slotProps,
                        openPickerButton: { sx: { display: 'none' } }, // Hide the button element
                        textField: {
                            ...textFieldProps,
                            size: "small",
                            sx: sx,
                            // Trigger open on double click
                            onDoubleClick: (e: any) => {
                                if (textFieldProps.onDoubleClick) textFieldProps.onDoubleClick(e);
                                setOpen(true);
                            },
                            inputProps: {
                                ...textFieldProps.inputProps,
                                placeholder: format.toLowerCase(),
                            },
                            InputProps: {
                                ...inputProps,
                                endAdornment: null // Remove default adornment
                            }
                        }
                    }}
                    {...props}
                />
            </div>
        </Tooltip>
    );
}
