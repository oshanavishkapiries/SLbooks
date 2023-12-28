import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="footer items-center p-4 text-color-dark bg-slate-300">
        <aside className="items-center grid-flow-col">
          <img src="./src/assets/Logo.svg" height="24"  width="24" alt="Logo"></img>
          <p>Copyright © 2023 - Made by Oshan Avishka</p>
        </aside>
        <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
          <a href="https://github.com/OshanAvishkaDev/SLbooks">
            <img src="./src/assets/github.svg" width="60" alt="github"></img>
          </a>
         
        </nav>
      </footer>
    </>
  );
};

export default Footer;
