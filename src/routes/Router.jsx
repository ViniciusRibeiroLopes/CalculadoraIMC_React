import { useState, useEffect } from "react";

export const Router = ({ children }) => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  const navigate = (path) => {
    window.history.pushState({}, "", path);
    setCurrentPath(path);
  };

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const routes = children.props.children.filter(
    (child) => child.type.name === "Route"
  );

  const currentRoute = routes.find((route) => {
    if (route.props.path === "*") return false;
    return route.props.path === currentPath;
  });

  const notFoundRoute = routes.find((route) => route.props.path === "*");

  return (
    <div>
      {currentRoute
        ? typeof currentRoute.props.element === "function"
          ? currentRoute.props.element({ navigate })
          : currentRoute.props.element
        : notFoundRoute
        ? typeof notFoundRoute.props.element === "function"
          ? notFoundRoute.props.element({ navigate })
          : notFoundRoute.props.element
        : null}
    </div>
  );
};

export const Routes = ({ children }) => <div>{children}</div>;
export const Route = () => null;
