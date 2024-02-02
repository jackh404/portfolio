"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const links = [
    {
      href: "/",
      label: "Homepage",
    },
    {
      href: "/projects",
      label: "Projects",
    },
    {
      href: "/about",
      label: "About",
    },
  ];
  return (
    <nav className="navbar bg-base-300">
      <div className="navbar-start">
        <label className="btn btn-circle swap swap-rotate">
          {/* this hidden checkbox controls the state */}
          <input
            type="checkbox"
            name="menuOpen"
            id="menuOpen"
            checked={menuOpen}
            onChange={() => setMenuOpen(() => !menuOpen)}
          />

          {/* hamburger icon */}
          <svg
            className="swap-off fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 512 512"
          >
            <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
          </svg>

          {/* close icon */}
          <svg
            className="swap-on fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 512 512"
          >
            <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
          </svg>
        </label>
        <AnimatePresence>
          {menuOpen ? (
            <motion.ul
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: "auto" }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="p-2 shadow z-10 bg-base-100 rounded-box flex flex-row gap-2"
            >
              {links.map((link, i) => (
                <li key={link.href}>
                  <motion.div
                    initial={{ opacity: 0, x: -30 * (i + 1) }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -40 * (i + 1) }}
                    transition={{ duration: 0.2, delay: 0.07 * (i + 1) }}
                  >
                    <Link
                      href={link.href}
                      className={
                        pathname === link.href
                          ? "text-base-content font-bold"
                          : "text-base-content"
                      }
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                </li>
              ))}
            </motion.ul>
          ) : null}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
