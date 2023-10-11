import { Box, Menu, MenuItem, Typography, styled } from "@mui/material";
import { useState } from "react";
import PowerSettingNewIcon from "@mui/icons-material/PowerSettingsNew";

const Component = styled(Menu)`
  margin-top: 5px;
`;

const Logout = styled(Typography)`
  font-size: 14px;
  margin-left: 20px;
`;

const Profile = ({ account, setAccount }) => {
  const [open, setOpen] = useState(false);
  const handleClick = (event) => {
    setOpen(event.currentTarget);
  };
  const handleClose = (event) => {
    setOpen(null);
  };
  const logoutUser = () => {
    setAccount("");
  };

  return (
    <>
      <Box sx={{ marginLeft: 2 }}>
        <Typography 
          id="profile" 
          style={{ marginTop: 2, cursor: "pointer" }} 
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
        >
          {account}
        </Typography>
        <Component id="basic-menu" anchorEl={open} open={(open)} onClick={handleClose} MenuListProps={{
          'aria-labelledby': 'profile',
        }}
>
          <MenuItem
            onClick={() => {
              handleClose();
              logoutUser();
            }}
            
            onClose={handleClose}
          >
            <PowerSettingNewIcon color="primary" fontSize="small" />
            <Logout>Logout</Logout>
          </MenuItem>
        </Component>
      </Box>
    </>
  );
};

export default Profile;
