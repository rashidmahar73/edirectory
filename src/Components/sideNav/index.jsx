import { useState, useEffect } from "react";
import { Route, Routes, useNavigate, useLocation } from "react-router-dom";
import "./sideLayout.scss";
// import ProtectedRoute from "../../utils/Protected";
import { Layout, Menu } from "antd";
import { customItems } from "./CustomMenu";
import { Header } from "antd/es/layout/layout";
import { MovieDetails } from "../../Pages/details";
import { Dashboard, Logout } from "../../Pages";
import { ShortView } from "../../Pages/shortView";

function SideLayout() {
  const [selectedKey, setSelectedKey] = useState("/dashboard");
  const { Sider, Content } = Layout;
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const getid = localStorage.getItem("movieid");
  const genreid = localStorage.getItem("genreId");
  const handleSideBar = (key) => {
    if (key) {
      localStorage.setItem("genreId", null);
    }
    setSelectedKey(key);
    navigate(key);
  };
  // const isAuthenticated = localStorage.getItem("token");
  const isAuthenticated = localStorage.getItem("token");

  useEffect(() => {
    // Attach a popstate event listener to handle browser back/forward buttons
    const handlePopstate = () => {
      // Check if the current path is the history component
      navigate({
        pathname: `/profile/${isAuthenticated}`,
      });
    };
    // localStorage.setItem("genreId",null)
    window.addEventListener("popstate", handlePopstate);

    return () => {
      // Clean up the event listener
      window.removeEventListener("popstate", handlePopstate);
    };
  }, [pathname]);

  const dashUrl =
    typeof genreid === null ? "/dashboard" : `/dashboard/${genreid}`;

  return (
    <>
      {/* {isAuthenticated?( */}
      <Layout>
        <div className="sideNav-container">
          <Sider
            trigger={null}
            collapsible
            collapsed={true}
            style={{ position: "relative" }}
          >
            <div className="logo"></div>
            <Menu
              theme="light"
              mode="inline"
              items={customItems}
              selectedKeys={[selectedKey]}
              _internalDisableMenuItemTitleTooltip
              onClick={({ key }) => handleSideBar(key)}
            />
          </Sider>
        </div>
        <Layout>
          <Content style={{ background: "white" }}>
            <Routes>
              <Route
                path={dashUrl.includes("null") ? "/" : dashUrl}
                element={<Dashboard />}
              />
              <Route
                path={`/${Number(getid)}/details`}
                element={<MovieDetails />}
              />
              <Route
                path={`/${getid}/detail`}
                element={<ShortView />}
              />
            </Routes>
          </Content>
          {/* <Header>
            <Logout />
          </Header> */}
        </Layout>
      </Layout>
    </>
  );
}

export default SideLayout;
