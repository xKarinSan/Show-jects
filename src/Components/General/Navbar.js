import React, { useEffect, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";

import {
    AppBar,
    Box,
    Divider,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    Toolbar,
    Typography,
    Button,
} from "@mui/material";

import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const drawerWidth = 240;
const loggedInPages = [
    {
        label: "Home",
        to: "/home",
    },
    {
        label: "Browse Projects",
        to: "/projects",
    },
    {
        label: "Add Project",
        to: "/projects/create",
    },
    {
        label: "Manage Projects",
        to: "/user/projects",
    },
    {
        label: "Chat",
        to: "/chat",
    },
    {
        label: "View Profile",
        to: "/user/profile",
    },
    {
        label: "Logout",
        to: "/logout",
    },
];
const notLoggedInPages = [
    {
        label: "Browse Projects",
        to: "/projects",
    },
    {
        label: "Register",
        to: "/register",
    },
    {
        label: "Login",
        to: "/login",
    },
];

function Navbar(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = useState(false);
    const username = useSelector((state) => state.username);
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
            <Typography variant="h6" sx={{ my: 2 }}>
                ShowJect
            </Typography>
            <Divider />
            <List>
                {username ? (
                    <>
                        {loggedInPages.map((item, index) => {
                            const { label, to } = item;
                            return (
                                <ListItem disablePadding key={index}>
                                    <Link
                                        to={to}
                                        sx={{
                                            textDecoration: "none",
                                            color: "black",
                                        }}
                                    >
                                        <ListItemButton
                                            sx={{ textAlign: "center" }}
                                        >
                                            <ListItemText primary={label} />
                                        </ListItemButton>
                                    </Link>
                                </ListItem>
                            );
                        })}
                    </>
                ) : (
                    <>
                        {notLoggedInPages.map((item, index) => {
                            const { label, to } = item;

                            return (
                                <ListItem disablePadding key={index}>
                                    <Link
                                        to={to}
                                        sx={{
                                            textDecoration: "none",
                                            color: "black",
                                        }}
                                    >
                                        <ListItemButton
                                            sx={{ textAlign: "center" }}
                                        >
                                            <ListItemText primary={label} />
                                        </ListItemButton>
                                    </Link>
                                </ListItem>
                            );
                        })}
                    </>
                )}
            </List>
        </Box>
    );

    const container =
        window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: "flex" }}>
            <AppBar
                component="nav"
                sx={{ background: "white", color: "black" }}
            >
                <Toolbar>
                    <IconButton
                        color="black"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: "none" } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{
                            flexGrow: 1,
                            display: { xs: "none", sm: "flex" },
                        }}
                    >
                        ShowJect
                    </Typography>
                    <Box sx={{ display: { xs: "none", sm: "block" } }}>
                        {username ? (
                            <>
                                {loggedInPages.map((item, index) => {
                                    const { label, to } = item;
                                    return (
                                        <Link
                                            to={to}
                                            sx={{
                                                textDecoration: "none",
                                                color: "black",
                                            }}
                                        >
                                            <Button
                                                sx={{ color: "black" }}
                                                key={index}
                                            >
                                                {label}
                                            </Button>
                                        </Link>
                                    );
                                })}
                            </>
                        ) : (
                            <>
                                {notLoggedInPages.map((item, index) => {
                                    const { label, to } = item;
                                    return (
                                        <Link
                                            to={to}
                                            sx={{
                                                textDecoration: "none",
                                                color: "black",
                                            }}
                                        >
                                            <Button
                                                sx={{ color: "black" }}
                                                key={index}
                                            >
                                                {label}
                                            </Button>
                                        </Link>
                                    );
                                })}
                            </>
                        )}
                    </Box>
                </Toolbar>
            </AppBar>
            <Box component="nav">
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: "block", sm: "none" },
                        "& .MuiDrawer-paper": {
                            boxSizing: "border-box",
                            width: drawerWidth,
                        },
                    }}
                >
                    {drawer}
                </Drawer>
            </Box>
        </Box>
    );
}

export default Navbar;
