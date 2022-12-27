import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import PersonalDetails from './PersonalDetails';
import BusinessDetails from './BusinessDetails';
import LoanApplicationDetails from './LoanApplicationDetails';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index, value) {
  return {
    id: `tab-${index}`,
    'aria-controls': `tabpanel-${index}`,
    disableRipple: true,
  };
}

export default function FormTabs() {
  const [value, setValue] = useState(0);

  const switchTab = (tabIndex) => {
    setValue(tabIndex);
  };

  return (
    <Box sx={{ width: '100%'}}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider', display: 'flex', justifyContent: 'center' }}>
        <Tabs value={value} aria-label="tabs">
          <Tab label="personal details" {...a11yProps(0, value)} />
          <Tab label="business details" {...a11yProps(1)} />
          <Tab label="loan application details" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <PersonalDetails switchTab={switchTab}></PersonalDetails>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <BusinessDetails switchTab={switchTab}></BusinessDetails>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <LoanApplicationDetails switchTab={switchTab}></LoanApplicationDetails>
      </TabPanel>
    </Box>
  );
}