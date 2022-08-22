import Link from "next/link";
import css from "./NavBar.module.scss";

function NavBar() {
  return (
    <div className={css.navBar}>
      <Link href={"#"}>
        <h4>Home</h4>
      </Link>
      <Link href={"#"}>
        <h4>Services</h4>
      </Link>
      <Link href={"#"}>
        <h4>About Us</h4>
      </Link>
      <Link href={"#"}>
        <h4>Price List</h4>
      </Link>
      <Link href={"#"}>
        <h4>Gallery</h4>
      </Link>
      <Link href={"#"}>
        <h4>Contact Us</h4>
      </Link>
    </div>
  );
}

export default NavBar;
