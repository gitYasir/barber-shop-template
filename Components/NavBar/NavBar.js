import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import css from "./NavBar.module.scss";

function NavBar() {
  const [state, setState] = useState(false);
  function toggleMenu() {
    setState(!state);
  }
  return (
    <nav className={css.navBar}>
      <div className={css.logoArea}>
        <Link href={"/"}>
          <a>
            <Image
              src={"/icons/barber-pole-svgrepo-com.svg"}
              alt={"Shop Logo"}
              width={"100%"}
              height={"100%"}
            />
          </a>
        </Link>
      </div>
      <Link href={""}>
        <a
          href=""
          className={state ? `${css.span} ${css.cross}` : css.span}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </a>
      </Link>
      <div className={state ? `${css.menu} ${css.active}` : css.menu}>
        <ul>
          <li>
            <Link href={"/"}>
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href={"/services"}>
              <a>Services & Prices</a>
            </Link>
          </li>
          <li>
            <Link href={"/gallery"}>
              <a>Gallery</a>
            </Link>
          </li>
          <li>
            <Link href={"/about"}>
              <a>About Us</a>
            </Link>
          </li>
          <li>
            <Link href={"/contact"}>
              <a>Contact Us</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
