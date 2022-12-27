import { Box, Button, FormControl, TextField } from '@mui/material';
import React from 'react';

const PersonalDetails = ({switchTab}) => {

    const handleSubmit = (event) => {
        event.preventDefault();
        const firstName = event.target.firstName.value;
        const lastName = event.target.lastName.value;
        const age = event.target.age.value;
        const phoneNumber = event.target.phoneNumber.value;

        sessionStorage.setItem('firstName', firstName);
        sessionStorage.setItem('lastName', lastName);
        sessionStorage.setItem('age', age);
        sessionStorage.setItem('phoneNumber', phoneNumber);

        switchTab(1);
    };

    return (
        <div className='grid justify-center'>
            <h1 className='text-4xl font-bold mb-10'>Personal Details</h1>
            <Box 
                component="form"
                onSubmit={handleSubmit}
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '24ch' }
                }}
            >
                <div className='flex'>
                    <FormControl>
                        <TextField
                            required
                            label="First Name"
                            id="firstName"
                            variant='outlined'
                            defaultValue={sessionStorage.getItem('firstName')}
                            />
                    </FormControl>
                    <FormControl>
                        <TextField
                            required
                            label="Last Name"
                            id="lastName"
                            variant='outlined'
                            defaultValue={sessionStorage.getItem('lastName')}
                        />
                    </FormControl>
                </div>
                <div className='flex'>
                    <FormControl>
                        <TextField
                            required
                            label="Age"
                            id="age"
                            variant='outlined'
                            defaultValue={sessionStorage.getItem('age')}
                            inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                            helperText='Please enter numbers only'
                            />
                    </FormControl>
                    <FormControl>
                        <TextField
                            required
                            label='Phone Number'
                            id='phoneNumber'
                            variant='outlined'
                            defaultValue={sessionStorage.getItem('phoneNumber')}
                            inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                            helperText='Please enter numbers only'
                        />
                    </FormControl>
                </div>
                <div className='flex justify-end'>
                    <Button type="submit" variant="contained" size="large" sx={{width: '48%'}}>Next</Button>
                </div>
            </Box>
        </div>
    );
};

export default PersonalDetails;