import { Box, Button, FormControl, InputAdornment, TextField } from '@mui/material';
import React from 'react';

const LoanApplicationDetails = ({switchTab}) => {
    const handleSubmit = (event) => {
        event.preventDefault();
        const loanAmount = event.target.loanAmount.value;
        const interestRate = event.target.interestRate.value;
        const loanTenure = event.target.loanTenure.value;
        
        sessionStorage.setItem('loanAmount', loanAmount);
        sessionStorage.setItem('interestRate', interestRate);
        sessionStorage.setItem('loanTenure', loanTenure);

        if(event.nativeEvent.submitter.innerText === 'SUBMIT'){
            handleFormSubmit();
            event.target.reset();
            sessionStorage.clear();
            switchTab(0);
        }
        
        if(event.nativeEvent.submitter.innerText === 'PREVIOUS'){
            switchTab(1);
        }
    };

    const handleFormSubmit = () => {
        const formDetails = {
            firstName: sessionStorage.getItem('firstName'),
            lastName: sessionStorage.getItem('lastName'),
            age: sessionStorage.getItem('age'),
            phoneNumber: sessionStorage.getItem('phoneNumber'),
            businessName: sessionStorage.getItem('businessName'),
            gstNo: sessionStorage.getItem('gstNo'),
            address: sessionStorage.getItem('address'),
            loanAmount: sessionStorage.getItem('loanAmount'),
            interestRate: sessionStorage.getItem('interestRate'),
            loanTenure: sessionStorage.getItem('loanTenure')            
        };

        fetch('https://server-orpin-psi.vercel.app/formDetails', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formDetails)
            })
            .then(res => res.json())
            .then(data => console.log(data))
    };

    return (
        <div className='grid justify-center'>
            <h1 className='text-4xl font-bold mb-10'>Loan Application Details</h1>
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
                            label="Loan Amount"
                            id="loanAmount"
                            variant='outlined'
                            InputProps={{
                                startAdornment: <InputAdornment position="start">$</InputAdornment>,
                              }}
                            defaultValue={sessionStorage.getItem('loanAmount')}
                            inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                            helperText='Please enter numbers only'
                            />
                    </FormControl>
                    <FormControl>
                        <TextField
                            required
                            label="Interest Rate"
                            id="interestRate"
                            variant='outlined'
                            InputProps={{
                                endAdornment: <InputAdornment position="end">%</InputAdornment>,
                              }}
                            defaultValue={sessionStorage.getItem('interestRate')}
                            inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                            helperText='Please enter numbers only'
                            />
                    </FormControl>
                </div>
                <div>
                    <FormControl>
                        <TextField
                            required
                            label="Loan Tenure"
                            id="loanTenure"
                            variant='outlined'
                            defaultValue={sessionStorage.getItem('loanTenure')}
                            inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                            helperText='Please enter numbers only'
                            />
                    </FormControl>
                </div>
                <div className='flex justify-between gap-4'>
                    <Button type="submit" fullWidth variant="contained" size="large">Previous</Button>
                    <Button type="submit" fullWidth variant="contained" size="large">Submit</Button>
                </div>
            </Box>
        </div>
    );
};

export default LoanApplicationDetails;