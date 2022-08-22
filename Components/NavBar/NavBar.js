import Image from "next/image";
import Link from "next/link";
import css from "./NavBar.module.scss";

function NavBar() {
  return (
    <div className={css.navBar}>
      <div className={css.logo}>
        <Link href={"#"}>
          <Image
            src={"/icons/barber-pole-svgrepo-com.svg"}
            alt={"Shop Logo"}
            width={"100%"}
            height={"100%"}
          />
        </Link>
      </div>
      <div className={css.navOptions}>
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
    </div>
  );
}

export default NavBar;
