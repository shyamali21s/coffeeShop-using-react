import React, { useState } from 'react';
import { Modal, Box, Typography, Select, MenuItem, FormControl, InputLabel, Button, TextField } from '@mui/material';
import './modals.css';

const coffeeOptions = [
    { value: 'espresso', label: 'Espresso', price: '$3' },
    { value: 'latte', label: 'Latte', price: '$4' },
    { value: 'cappuccino', label: 'Cappuccino', price: '$4.50' },
    { value: 'americano', label: 'Americano', price: '$2.50' },
];

const tableOptions = [
    { value: 'one', label: 'Table One' },
    { value: 'two', label: 'Table Two' },
    { value: 'three', label: 'Table Three' },
    { value: 'four', label: 'Table Four' },
];

function OrderModal({ openOrderModal, handleCloseOrderModal }) {
    const [selectedCoffee, setSelectedCoffee] = useState(coffeeOptions[0]);
    const [selectedTable, setSelectedTable] = useState(tableOptions[0]);
    const [name, setName] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [summaryVisible, setSummaryVisible] = useState(false);

    const handleCoffeeChange = (event) => {
        const selected = coffeeOptions.find(option => option.value === event.target.value);
        setSelectedCoffee(selected);
    };

    const handleTableChange = (event) => {
        const selected = tableOptions.find(option => option.value === event.target.value);
        setSelectedTable(selected);
    };

    const handleSubmit = () => {
        if (!name) {
            alert("Name is required.");
            return; // Exit the function if the name is empty
        }
        if (!mobileNumber) {
            alert("Number is required.");
            return; // Exit the function if the name is empty
        }
        setSummaryVisible(true);
    };

    const handleClose = () => {
        // Reset all states when closing the modal
        setSelectedCoffee(coffeeOptions[0]);
        setSelectedTable(tableOptions[0]);
        setName('');
        setMobileNumber('');
        setSummaryVisible(false);
        handleCloseOrderModal();
    };

    return (
        <Modal  open={openOrderModal} onClose={handleClose}>
            <Box className='modals' sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: 400,
                bgcolor: '#f3dc76',
                border: '2px solid #000',
                boxShadow: 24,
                p: 4,
            }}>
                <Typography variant="h6" component="h2">
                    Order Now
                </Typography>

                {!summaryVisible ? (
                    <>
                        <Typography sx={{ mt: 2 }}>
                            Please select your coffee type:
                        </Typography>

                        <FormControl fullWidth sx={{ mt: 2 }}>
                            <InputLabel>Coffee Type</InputLabel>
                            <Select value={selectedCoffee.value} onChange={handleCoffeeChange}>
                                {coffeeOptions.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label} - {option.price}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>

                        <FormControl fullWidth sx={{ mt: 2 }}>
                            <InputLabel>Table Type</InputLabel>
                            <Select value={selectedTable.value} onChange={handleTableChange}>
                                {tableOptions.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>

                        <TextField required
                            fullWidth
                            label="Name"
                            variant="outlined"
                            sx={{ mt: 2 }}
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />

                        <TextField required
                            fullWidth
                            label="Mobile Number"
                            variant="outlined"
                            sx={{ mt: 2 }}
                            value={mobileNumber}
                            onChange={(e) => setMobileNumber(e.target.value)}
                        />

                        <Button
                            variant="contained"
                            sx={{
                                bgcolor: '#b22222',
                                color: 'white',
                                borderRadius: '20px',
                                padding: '10px 20px',
                                mt: 2,
                                '&:hover': {
                                    bgcolor: '#ffffff',
                                    color: '#b22222',
                                    border: '2px solid #b22222',
                                },
                                transition: 'all 0.3s ease',
                            }}
                            onClick={handleSubmit}
                        >
                            Place Order
                        </Button>
                    </>
                ) : (
                    <Box sx={{ mt: 2 }}>
                        <Typography variant="h6">Order Summary</Typography>
                        <Typography>Coffee: {selectedCoffee.label}</Typography>
                        <Typography>Price: {selectedCoffee.price}</Typography>
                        <Typography>Table: {selectedTable.label}</Typography>
                        <Typography>Name: {name}</Typography>
                        <Typography>Mobile Number: {mobileNumber}</Typography>
                        <Button
                            variant="contained"
                            sx={{
                                bgcolor: '#e084ec',
                                color: 'white',
                                borderRadius: '20px',
                                padding: '10px 20px',
                                mt: 2,
                            }}
                            onClick={handleClose}
                        >
                            Confirm
                        </Button>
                    </Box>
                )}
            </Box>
        </Modal>
    );
}

export default OrderModal;
