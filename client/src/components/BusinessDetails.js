import { Box, Button, FormControl, TextField } from '@mui/material';
import React from 'react';

const BusinessDetails = ({switchTab}) => {

    const handleSubmit = (event) => {
        event.preventDefault();
        const businessName = event.target.businessName.value;
        const gstNo = event.target.gstNo.value;
        const address = event.target.address.value;
        
        sessionStorage.setItem('businessName', businessName);
        sessionStorage.setItem('gstNo', gstNo);
        sessionStorage.setItem('address', address);

        if(event.nativeEvent.submitter.innerText === 'PREVIOUS'){
            switchTab(0);
        }

        if(event.nativeEvent.submitter.innerText === 'NEXT'){
            switchTab(2);
        }
    };

    return (
        <div className='grid justify-center'>
            <h1 className='text-4xl font-bold mb-10'>Business Details</h1>
            <Box 
                component="form"
                onSubmit={handleSubmit}
                >
                <div>
                    <FormControl 
                        sx={{
                            '& .MuiTextField-root': { m: 1, width: '24ch' }
                        }}
                    >
                        <TextField
                            required
                            label="Business Name"
                            id="businessName"
                            variant='outlined'
                            defaultValue={sessionStorage.getItem('businessName')}
                            />
                    </FormControl>
                    <FormControl
                            sx={{
                                '& .MuiTextField-root': { m: 1, width: '24ch' }
                            }}
                            >
                        <TextField
                            required
                            label="GST No"
                            id="gstNo"
                            variant='outlined'
                            defaultValue={sessionStorage.getItem('gstNo')}
                            inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                            helperText='Please enter numbers only'
                            />
                    </FormControl>
                </div>
                <FormControl
                    sx={{
                        '& .MuiTextField-root': { m: 1, width: '50ch' }
                    }}
                >
                    <TextField
                        fullWidth
                        required
                        label="Address"
                        id="address"
                        multiline
                        maxRows={4}
                        variant='outlined'
                        defaultValue={sessionStorage.getItem('address')}
                    />
                </FormControl>
                <div className='flex justify-between gap-4'>
                    <Button type="submit" fullWidth variant="contained" size="large">Previous</Button>
                    <Button type="submit" fullWidth variant="contained" size="large">Next</Button>
                </div>
            </Box>
        </div>
    );
};

export default BusinessDetails;