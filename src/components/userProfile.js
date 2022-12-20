import * as React from "react";
import {
    Card,
    CardContent,
    Typography,
    Box,
    IconButton
} from "@mui/material";
import { Mail,
         Lock,
         EnergySavingsLeaf,
         Notifications,
         SendToMobile,
         Settings
        } from "@mui/icons-material";
const UserProfile = () => {
  return (
    <>
        <Card style={{backgroundColor:"black"}}>
            <CardContent>
                <Box>
                <Typography variant="h6" color='white'>Profile & Settings</Typography>
                </Box>
                <Box style={{display:"flex",
                            flexDirection:"row",
                            flexWrap:"wrap",
                            justifyContent:"space-around"
                              }}>
                    <Card style={{width:"30%",marginTop:30}}>
                        <CardContent>
                            <Typography variant="h5" textAlign="center" className="txt-clr">Your Contact Info</Typography>
                            <div style={{display:"flex",justifyContent:"center"}}>
                            <IconButton sx={{flexGrow:"inherit"}}>
                                <Mail />
                            </IconButton>
                            </div>
                            <Typography variant="subtitle1" textAlign="center" className="txt-clr">
                                Manage addresses, phone/mobile numbers,
                                email addresses and contact preferences.
                            </Typography>
                        </CardContent>
                    </Card>
                    <Card style={{width:"30%",marginTop:30}}>
                    <CardContent>
                            <Typography variant="h5" textAlign="center" className="txt-clr">Security Center</Typography>
                            <div style={{display:"flex",justifyContent:"center"}}>
                            <IconButton>
                                <Lock />
                            </IconButton>
                            </div>
                            <Typography variant="subtitle1" textAlign="center" className="txt-clr">
                                Manage your security and increase your 
                                protection by enabling extra features.
                            </Typography>
                        </CardContent>
                    </Card>
                    <Card style={{width:"30%",marginTop:30}}>
                    <CardContent>
                            <Typography variant="h5" textAlign="center" className="txt-clr">Paperless</Typography>
                            <div style={{display:"flex",justifyContent:"center"}}>
                            <IconButton>
                                <EnergySavingsLeaf />
                            </IconButton>
                            </div>
                            <Typography variant="subtitle1" textAlign="center" className="txt-clr">
                                Set up Paperless account notices,
                                electronic statements, more.
                            </Typography>
                        </CardContent>
                    </Card>
                    <Card style={{width:"30%",marginTop:30}}>
                    <CardContent>
                            <Typography variant="h5" textAlign="center" className="txt-clr">Alerts</Typography>
                            <div style={{display:"flex",justifyContent:"center"}}>
                            <IconButton>
                                <Notifications />
                            </IconButton>
                            </div>
                            <Typography variant="subtitle1" textAlign="center" className="txt-clr">
                                Set up alerts for available balance, 
                                payment due, more.
                            </Typography>
                        </CardContent>
                    </Card>
                    <Card style={{width:"30%",marginTop:30}}>
                    <CardContent>
                            <Typography variant="h5" textAlign="center" className="txt-clr">Additional Settings</Typography>
                            <div style={{display:"flex",justifyContent:"center"}}>
                            <IconButton>
                                <Settings />
                            </IconButton>
                            </div>
                            <Typography variant="subtitle1" textAlign="center" className="txt-clr">
                                Account nicknames Overdraft protection Language
                                preferences Income update.
                            </Typography>
                        </CardContent>
                    </Card>
                    <Card style={{width:"30%",marginTop:30}}>
                    <CardContent>
                            <Typography variant="h5" textAlign="center" className="txt-clr">Mobile Banking</Typography>
                            <div style={{display:"flex",justifyContent:"center"}}>
                            <IconButton>
                                <SendToMobile />
                            </IconButton>
                            </div>
                            <Typography variant="subtitle1" textAlign="center" className="txt-clr">
                                Get the Mobile Banking App and other mobile settings
                            </Typography>
                        </CardContent>
                    </Card>
                </Box>

            </CardContent>
        </Card>
    </>
  )

}

export default UserProfile;