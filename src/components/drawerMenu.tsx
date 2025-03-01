import { useState } from "react";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import {
  Box,
  IconButton,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import StoreIcon from "@mui/icons-material/Store";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import RecentActorsIcon from "@mui/icons-material/RecentActors";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import GroupsIcon from "@mui/icons-material/Groups";

const DrawerMenu = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [introParagraph, setIntroParagraph] = useState("");

  // Toggle Drawer Menu
  const toggleDrawerMenu = (open: boolean) => () => {
    setOpenMenu(open);
  };

  const menuItems = [
    { label: "Home", icon: <HomeIcon /> },
    { label: "About", icon: <AutoStoriesIcon /> },
    { label: "Shop", icon: <StoreIcon /> },
    { label: "Donation", icon: <VolunteerActivismIcon /> },
    { label: "Contact", icon: <RecentActorsIcon /> },
    { label: "Career", icon: <GroupsIcon /> },
    { label: "Login / Register", icon: <HowToRegIcon /> },
  ];

  const list = (
    <Box
      sx={{ width: 270 }}
      role="presentation"
      onClick={toggleDrawerMenu(false)}
      onKeyDown={toggleDrawerMenu(false)}
    >
      <List
        sx={{
          maxWidth: 240,
        }}
      >
        {menuItems.map((item, index) => (
          <ListItem sx={{ margin: 2 }} key={index} component="button">
            {/* Display Icon inside ListItem */}
            <ListItemIcon sx={{ color: "text.primary" }}>
              {item.icon}
            </ListItemIcon>
            <ListItemText
              sx={{
                alignContent: "center",
                alignItems: "center",
                height: 30,
              }}
              primary={item.label}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <IconButton
        onClick={toggleDrawerMenu(true)}
        sx={{ marginTop: -2, marginRight: 5, fontSize: "3rem", color: "black" }}
      >
        <MenuIcon sx={{ fontSize: "inherit" }} /> {/* Adjust icon size here */}
      </IconButton>
      <SwipeableDrawer
        anchor="right"
        open={openMenu}
        onClose={toggleDrawerMenu(false)}
        onOpen={toggleDrawerMenu(true)}
      >
        {list}
      </SwipeableDrawer>
    </>
  );
};

export default DrawerMenu;
