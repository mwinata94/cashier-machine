import React from 'react';
import 'bulma/css/bulma.css';

const NavigationBar = tables => {
  const navigationBarItem = (e, i) => {
    if (e.child.length) {
      return (
        <div key={i} className="navbar-item has-dropdown is-hoverable">
          <a className="navbar-link" onClick={e.onClick}>
            {e.name}
          </a>
          <div className="navbar-dropdown">
            {e.child.map((e, i) => {
              return (
                <a key={i} className="navbar-item" onClick={e.onClick}>
                  {e.name}
                </a>
              );
            })}
          </div>
        </div>
      );
    } else {
      return (
        <a key={i} className="navbar-item" onClick={e.onClick}>
          {e.name}
        </a>
      );
    }
  };

  return (
    <nav className="navbar" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item">
          <img
            src="https://seeklogo.com/images/Y/Yamaha-logo-A3BB6DB4EB-seeklogo.com.png"
            width="28"
            height="28"
            alt="yamaha logo"
          />
        </a>
      </div>
      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          {tables.filter(e => 'left' === e.align).map(navigationBarItem)}
        </div>
        <div className="navbar-end">
          {tables.filter(e => 'right' === e.align).map(navigationBarItem)}
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
