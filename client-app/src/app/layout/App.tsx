import { Container } from "semantic-ui-react";
import NavBar from "./NavBar";
import { observer } from "mobx-react-lite";
import { Outlet, useLocation } from "react-router-dom";
import Homepage from "../../features/home/HomePage";
import { ToastContainer } from "react-toastify";

function App() {
  const loaction = useLocation();

  return (
    <>
      <ToastContainer position='bottom-right' hideProgressBar theme="colored" />
      {location.pathname === '/' ? <Homepage /> : (
        <>
          <NavBar />
          <Container style={{ marginTop: '7em' }}>
            <Outlet />
          </Container>
        </>
      )}

    </>
  )
}

export default observer(App);
