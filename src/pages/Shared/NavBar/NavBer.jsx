const NavBer = () => {

    const navOptions = <>
      <li>Home</li>
      <li>CONTACT us</li>
      <li>DASHBOARD</li>
      <li>Our Menu</li>
      <li>Our Shop</li>
    </>

  return (
    <div className="">
      <div className="navbar fixed z-10 opacity-30  bg-black text-white">
        <div className="navbar-start">
          <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-6 cursor-pointer">
           {navOptions}
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
    </div>
  );
};

export default NavBer;
