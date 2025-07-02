import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { lightTheme, darkTheme } from "./globalStyles.js";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./globalStyles.js";
import { useContext } from "react";
import { ThemeContext } from "./ui/themeContext.jsx";
import { Toaster } from "react-hot-toast";
import { CirclesWithBar } from "react-loader-spinner";

const ResetPassowrd = lazy(() =>
  import("./Components/Login/components/ResetPassword.jsx")
);
const VerfyEmail = lazy(() => import("./Components/VerfyEmail/VerfyEmail.jsx"));
const Login = lazy(() => import("./Components/Login/components/Login.jsx"));
const AccountCreation = lazy(() =>
  import("./Components/Login/components/CreateAccount.jsx")
);
const ForgotPassowrd = lazy(() =>
  import("./Components/Login/components/ForgotPassword.jsx")
);
const ProtectedRoute = lazy(() =>
  import("./Components/ProtectedRoute/ProtectRoute.jsx")
);
const PublicRoute = lazy(() =>
  import("./Components/ProtectedRoute/PublicRoute.jsx")
);
const AppLayout = lazy(() => import("./Components/AppLayout/AppLayout.jsx"));
const TicketComponent = lazy(() =>
  import("./Components/Ticket/TicketComponent.jsx")
);
const OverView = lazy(() => import("./Components/Overview/Overview.jsx"));
const TicketRaise = lazy(() =>
  import("./Components/TicketRaise/TicketRaise.jsx")
);
const UserManagement = lazy(() =>
  import("./Components/UserManagement/UserManagement.jsx")
);
const PlantManagement = lazy(() =>
  import("./Components/PlantManagement/PlantManagement.jsx")
);
const ApprovalRequest = lazy(() =>
  import("./Components/Approval Request/ApprovalRequest.jsx")
);
const NotFound = lazy(() => import("./Components/NotFound/NotFound.jsx"));
const Downloads = lazy(() => import("./Components/Downloads/Downloads.jsx"));
const Settings = lazy(() => import("./Components/Settings/Settings.jsx"));
const PlantAdd = lazy(() =>
  import("./Components/PlantManagement/PlantAdd.jsx")
);
const PlantEdit = lazy(() =>
  import("./Components/PlantManagement/PlantEdit.jsx")
);
const IssuesUpdate = lazy(() =>
  import("./Components/IssuesUpdate/IssuesUpdate.jsx")
);

function App() {
  const { isDark } = useContext(ThemeContext);

  const suspenceFallBack = () => {
    return (
      <div
        style={{
          width: "100%",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "transparent",
          backgroundColor: "rgba(255, 255, 255, 0.2)", // ✅ semi-transparent
          backdropFilter: "blur(6px)", // ✅ adds background blur
          WebkitBackdropFilter: "blur(6px)", // ✅ Safari support
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: 9999,
        }}
      >
        <CirclesWithBar
          height="100"
          width="100"
          color="#4fa94d"
          outerCircleColor="#4fa94d"
          innerCircleColor="#4fa94d"
          barColor="#4fa94d"
          ariaLabel="circles-with-bar-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      </div>
    );
  };
  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <GlobalStyles />
      <Toaster
        position="top-center"
        toastOptions={{ style: { fontSize: "1.5rem" } }}
      />
      <BrowserRouter>
        <Suspense fallback={suspenceFallBack()}>
          <Routes>
            <Route element={<PublicRoute />}>
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<AccountCreation />} />
              <Route path="/forgot-password" element={<ForgotPassowrd />} />
            </Route>
            <Route
              path="/"
              element={
                <ProtectedRoute>
                  <AppLayout />
                </ProtectedRoute>
              }
            >
              <Route index element={<OverView />} />
              <Route path="user-management" element={<UserManagement />} />
              <Route path="raise-tickets" element={<TicketRaise />} />
              <Route path="approval-requests" element={<ApprovalRequest />} />
              <Route path="manage-plants" element={<PlantManagement />}>
                <Route index element={<PlantAdd />} />
                <Route path="add-plant" element={<PlantAdd />} replace />
                <Route path="assign-engineer" element={<PlantEdit />} />
              </Route>
              <Route path="downloads" element={<Downloads />} />
              <Route path="tickets" element={<TicketComponent />} />
              <Route path="settings" element={<Settings />} />
              <Route path="issue-update/:id" element={<IssuesUpdate />} />
              <Route path="/verify-email/:token" element={<VerfyEmail />} />
              <Route
                path="/reset-password/:token"
                element={<ResetPassowrd />}
              />
              <Route path="*" element={<Navigate to="/not-found" />} />
              <Route path="not-found" element={<NotFound />} />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
