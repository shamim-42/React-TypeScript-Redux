import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import { useDispatch, useSelector } from "react-redux";
import {
  getDarkMood,
  toggleDarkMood,
} from "../../features/rickAndMorty/charecterSlice";
interface LayoutProps {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

const drawerWidth = 240;
const navItems = ["Characters", "location", "episode"];

export default function DrawerAppBar(
  props: React.PropsWithChildren<LayoutProps>
) {
  const { window, children } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const dispatch = useDispatch();
  const darkMoodStatus = useSelector(getDarkMood);

  const handleDrawerToggle = () => {
    setMobileOpen((isOpen) => !isOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Rick & Morty Wiki
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  const appBarStyle = React.useMemo(() => {
    if (darkMoodStatus) {
      return { backgroundColor: "#282828", borderBottom: "1px solid #9e9e9e" };
    }

    return { backgroundColor: "#f5f5f5" };
  }, [darkMoodStatus]);

  return (
    <Box sx={{ display: "flex", width: "100%", height: "100%" }}>
      <AppBar component="nav" style={appBarStyle} elevation={0}>
        <Toolbar sx={{ width: "100%", maxWidth: 1320, margin: "0 auto" }}>
          <IconButton
            color="inherit"
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
            color="#9e9e9e"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            Rick & Morty<span style={{ color: "#2979ff" }}> Wiki</span>
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item, idx) => (
              <Button
                key={item}
                sx={{ color: idx === 0 ? "#2979FF" : "#9e9e9e" }}
                variant={"text"}
              >
                {item}
              </Button>
            ))}
            {/* Dark Mood toggler */}
            <IconButton
              aria-label="Dark mood"
              onClick={() => dispatch(toggleDarkMood())}
              sx={{
                ...(darkMoodStatus
                  ? { color: "#2979FF" }
                  : {
                      color: "#9e9e9e",
                    }),
              }}
            >
              <DarkModeOutlinedIcon />
            </IconButton>
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
      <Box
        component="main"
        sx={{
          marginTop: "1.25rem",
          width: "100%",
          height: "100%",
          backgroundColor: darkMoodStatus ? "#282828" : "#fff",
          paddingBottom: "5rem",
        }}
      >
        <Toolbar />
        <div style={{ maxWidth: 1320, margin: "0 auto", width: "100%", }}>
          {children}
        </div>
      </Box>
    </Box>
  );
}
