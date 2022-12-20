import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Security from './security';
import UserProfile from './userProfile';





function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
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

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function BasicTabs({value, setValue, userId}) {
   
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    
    return (
        <Box sx={{ width: '100%', marginTop: 5 }}>
            <Box sx={{ borderBottom: 1, borderColor: `#BCA568 !important` }}>
                <Tabs value={value}
                    TabIndicatorProps={{ sx: { backgroundColor: `#BCA568 !important`, height: 4 } }}
                    onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="Basic Profile"
                        sx={{
                            width: `30%`, color: `white !important`,
                            backgroundColor: value === 0 ? `#84888C !important` : `#26272E !important`,
                            // border: value === 0 ? `1px solid 84888C !important` : `1px solid #26272E !important`,
                            borderTopLeftRadius: "0.5rem",
                            borderTopRightRadius: "0.5rem",
                        }}
                        className={value !== 0 ? "tabs" : ""}
                        {...a11yProps(0)} />
                    <Tab label="Security"
                        sx={{
                            width: `30%`, color: `white !important`,
                            backgroundColor: value === 1 ? `#84888C !important` : `#26272E !important`,
                            // border: value === 1 ? `1px solid 84888C !important` : `1px solid #26272E !important`,
                            borderTopLeftRadius: "0.5rem",
                            borderTopRightRadius: "0.5rem"
                        }}
                        className={value !== 1 ? "tabs" : ""}

                        {...a11yProps(1)} />
                </Tabs>
            </Box>
            <TabPanel
                className="typography"
                value={value}
                index={0}>
                <UserProfile /> 
            </TabPanel>
            <TabPanel value={value} index={1}>
                <Security userId={userId}/>
            </TabPanel>
        </Box>
    );
}