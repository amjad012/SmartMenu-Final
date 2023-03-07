import { Container } from 'semantic-ui-react';
import NavBar from './NavBar';
import { observer } from 'mobx-react-lite';
import { Outlet, useLocation } from 'react-router-dom';
import HomePage from '../../features/home/HomePage';
import { ToastContainer,toast } from 'react-toastify';
import { useEffect } from 'react';
import LoadingComponent from './LoadingComponent';
import { useStore } from '../stores/store';

function App() {
  const location = useLocation();
  const {commonStore,userStore} = useStore();

  useEffect(() => {
    if(commonStore.token) {
      userStore.getUser().finally(() => commonStore.setAppLoaded())
    } else {
      commonStore.setAppLoaded()
    }
  },[commonStore, userStore])
  if(!commonStore.appLoaded) return <LoadingComponent content='Loading app...'/>
  return (
    <>
      <ToastContainer position='bottom-right' hideProgressBar theme='colored'/>
      {location.pathname === '/' ? <HomePage /> : (
        <>
          <NavBar />
          <Container style={{ marginTop: '7em' }}>
            <Outlet />
          </Container>
        </>
      )}
    </>
  );
}

export default observer(App);
