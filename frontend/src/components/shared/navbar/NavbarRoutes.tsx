import { navbarRoutes } from "./navbar-routes.data";
import NavbarRoute from "./NavbarRoute";

function NavbarRoutes() {
  return (
    <nav>
      <ul className="hidden md:flex gap-x-6">
        {navbarRoutes.map((route) => (
          <li key={route.id} className="">
            <NavbarRoute label={route.label} path={route.path} />
          </li>
        ))}
      </ul>
    </nav>
  );
}
export default NavbarRoutes;
