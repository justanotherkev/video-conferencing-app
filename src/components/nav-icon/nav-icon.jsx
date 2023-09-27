import s from "./nav-icon.module.css"
import { AccountCircle, Home } from "@mui/icons-material";

function NavIcon() {
  return ( 
  
  <div className={s.nav_icon}>
    <Home />
    <AccountCircle />

  </div> );
}

export default NavIcon;