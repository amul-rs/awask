import React from "react";
import Link from "next/link";
import { mobile_menu_data } from "@/data/menu-data";

export default function MobileMenusTwo() {
  const [navTitle, setNavTitle] = React.useState<string>("");

  //openMobileMenu
  const openMobileMenu = (menu: string) => {
    if (navTitle === menu) {
      setNavTitle("");
    } else {
      setNavTitle(menu);
    }
  };
  return (
    <nav className="tp-main-menu-content">
      <ul>
        {mobile_menu_data.map((menu) => (
          <li key={menu.id} className={menu.dropdown_menus && menu.dropdown_menus.length > 0 ? "has-dropdown" : ""}>
            <Link
              href={menu.link}
              className="pointer"
              onClick={(e) => {
                if (menu.link === '#calendly') {
                  e.preventDefault();
                  if (typeof window !== 'undefined' && (window as any).Calendly) {
                    (window as any).Calendly.initPopupWidget({
                      url: 'https://calendly.com/awask-official/30min'
                    });
                  }
                }
              }}
            >
              {menu.title}
              {menu.dropdown_menus && menu.dropdown_menus.length > 0 && (
                <button
                  className="dropdown-toggle-btn"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    openMobileMenu(menu.title);
                  }}
                >
                  <i className="fa-light fa-plus"></i>
                </button>
              )}
            </Link>
            {menu.dropdown_menus && menu.dropdown_menus.length > 0 && (
              <ul
                className="tp-submenu submenu"
                style={{ display: navTitle === menu.title ? "block" : "none" }}
              >
                {menu.dropdown_menus &&
                  menu.dropdown_menus.map((dm, i) => (
                    <li key={i}>
                      <Link href={dm.link}>{dm.title}</Link>
                    </li>
                  ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
