import { useState, useEffect } from "react";
import { Route, Routes, useNavigate, useLocation } from "react-router-dom";
import "./sideLayout.scss";
// import ProtectedRoute from "../../utils/Protected";
import { Layout, Menu } from "antd";
import { customItems } from "./CustomMenu";
import { Header } from "antd/es/layout/layout";
import { MovieDetails } from "../../Pages/details";
import { Dashboard, Logout } from "../../Pages";
import { TvSeries } from "../../Pages/tv";

function SideLayout() {
  const [selectedKey, setSelectedKey] = useState("/dashboard");
  const { Sider, Content } = Layout;
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const getid = localStorage.getItem("movieid");
  console.log(getid,"getid")
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
              <Route path="/tv-series" element={<TvSeries/>}/>
            </Routes>
          </Content>
          <Header>
            <Logout />
          </Header>
        </Layout>
      </Layout>

      {/* ):(
      <Routes>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/Signup" element={<SignUp />}></Route>
    </Routes>
    )} */}
    </>
  );
}

export default SideLayout;

// {
/* <Routes>
    <Route path="/" element={<Login />} />
    <Route
      path="/countryUser"
      element={
        <ProtectedRoute>
          <CountryUsers />
        </ProtectedRoute>
      }
    />
    <Route
      path="/revenue"
      element={
        <ProtectedRoute>
          <Revenue />
        </ProtectedRoute>
      }
    />
    <Route
      path="/blockedUsers"
      element={
        <ProtectedRoute>
          <BlockedUsers />
        </ProtectedRoute>
      }
    />
    <Route
      path="/payments"
      element={
        <ProtectedRoute>
          <PaymentHistory />
        </ProtectedRoute>
      }
    />
    <Route
      path="/serverDashboard"
      element={
        <ProtectedRoute>
          <ServerDashboard />
        </ProtectedRoute>
      }
    />
    <Route
      path="/dashboard"
      element={
        <ProtectedRoute>
          <Dashboard />
        </ProtectedRoute>
      }
    />
  </Routes> */
// }
// {
/* </BrowserRouter> */
// }
//
// let token = localStorage.getItem("token");
//   return (
//     <Router>
//       {!token ? (
//         <>
//           <Routes>
//             <Route path="/" element={<Navigate to="/sign-up" replace />} />
//             <Route path="sign-up" element={<Register />} />
//             <Route path="login" element={<Login />} />
//             <Route path="verify/:userId/:token" element={<CodeConfirmation />} />
//           </Routes>
//         </>
//       ) : (
//         <DefaultLayout />
//       )}
//     </Router>
//   );

// {
/* mycode using react usecontext authProvider Function for protected routes */
// }
// {
/* <AuthProvider>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login/>} />
      <Route path="/dashboard" element={<RequireAuth><Dashboard/></RequireAuth>} />
    </Routes>
    </BrowserRouter>
    </AuthProvider> */
// }
// {
/* mycode using react usecontext authProvider Function for protected routes */
// }

// {
/* <BrowserRouter> */
// }
// {
/* <ProtectedRoute>
          <Dashboard/>
        </ProtectedRoute>
        <Routes>
          <Route path="/" element={<Navigate to="/Login" replace />} />
          <Route path="/Login" element={<Login />} />
          <Route path ='/dashboard'element={<Navigate to="/Login" replace/>}/>
    
        </Routes> */
// }
// {
/* MyCode for Routes */
// }
// {
/* {token ? (
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/" element={<Navigate to="/Login" replace />} />
          <Route path="/Login" element={<Login />} />
          <Route
            path="/dashboard"
            element={<Navigate to="/Login" replace />}
          />
        </Routes>
      )}
    </BrowserRouter> */
// }
// {
/* MyCodeFor Protected Routes */
// }
// {
/* <Router /> */
// }

// {
//   /* Set up your routes using react-router-dom */
// }
// {
//   /* <Routes>
//               <Route path="/dashboard" element={<div>Dashboard</div>} />
//               <Route path="/serverDashboard" element={<div>serverDashboard</div>} />
//               <Route path="/uploads" element={<div>uploads</div>} />
//             </Routes> */
// }
// {
//   /* data */
// }

// // const handleLogout = () => {
// //   localStorage.removeItem("token");
// //   navigate("/");
// // };
