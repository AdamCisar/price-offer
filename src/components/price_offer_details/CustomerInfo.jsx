import { TextField } from "@mui/material";
import React from "react";

const CustomerInfo = React.memo(({customerInfo, handleCustomerInputChange}) => {
    return (
        <>
        <TextField
            fullWidth
            variant="outlined"
            label="Meno"
            name="name"
            value={customerInfo?.name || ''}
            onChange={handleCustomerInputChange}
            sx={{ marginBottom: 2 }}
        />
        <TextField
            fullWidth
            variant="outlined"
            label="Mesto/Obec"
            name="city" 
            value={customerInfo?.city || ''}
            onChange={handleCustomerInputChange}
            sx={{ marginBottom: 2 }}
        />
        <TextField
            fullWidth
            variant="outlined"
            label="Adresa"
            name="address" 
            value={customerInfo?.address || ''}
            onChange={handleCustomerInputChange}
            sx={{ marginBottom: 2 }}
        />
        <TextField
            fullWidth
            variant="outlined"
            label="PSČ"
            name="zip" 
            value={customerInfo?.zip || ''}
            onChange={handleCustomerInputChange}
            sx={{ marginBottom: 2 }}
        />
        </>
    )
}, (prevProps, nextProps) => {
    return prevProps === nextProps;
})

export default CustomerInfo