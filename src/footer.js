import React from "react";

const FooterComponent = () => {
  let d = new Date();
  return (
    <footer className="footer">
      <div>Copyright © {d.getFullYear()} XYZ Inc. All rights reserved..</div>
      <nav className="navbar_bottom">
        <ul>
          <li className="delimeter">
            <a href="/compute/support/" className="abc" alt="crumb">
              Support
            </a>
          </li>
          <li>
            <a href="/file/case">File a Case </a>
          </li>
        </ul>
      </nav>
    </footer>
  );
};
export default FooterComponent;
