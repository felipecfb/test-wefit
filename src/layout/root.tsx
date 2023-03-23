import { Outlet } from 'react-router-dom';
import { Header } from '../components/Header';
import { Container } from './styles';

export default function Root() {
  return (
    <>
      <Header />
      <div id="detail">
        <Container>
          <Outlet />
        </Container>
      </div>
    </>
  );
}
