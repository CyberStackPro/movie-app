import React from "react";
import { Props } from "./PageEco";

const NavBar = ({ getTotalCounters }: any) => {
  return (
    <div>
      NavBar <div className="badge bg-secondary">{getTotalCounters}</div>
    </div>
  );
};

export default NavBar;
