
import logo from '../../assets/images/logo.svg';
import { Container, Content } from './styled';

export function Header() {
  return(
    <Container>
      <Content>
        <div className="page-details">
          <h1>Pedidos</h1>
          <h2>Acompanhe o pedido dos clientes</h2>
        </div>

        <img src={logo} alt="WAITERAPP" />
      </Content>
    </Container>
  );
}
