import { Container } from './styles';
import { OrdersBoard } from '../OrdersBoard';
import { Order } from '../../types/Order';

const orders: Order[] = [
  {
    '_id': '6372e48cbcd195b0d3d0f7f3',
    'table': '123',
    'status': 'WAITING',
    'products': [
      {
        'product': {
          'name': 'Pizza quatro queijos',
          'imagePath': '1668472962071-quatro-queijos.png',
          'price': 40,
        },
        'quantity': 3,
        '_id': '6372e48cbcd195b0d3d0f7f4'
      },
      {
        'product': {
          'name': 'Coca cola',
          'imagePath': '1668536137340-coca-cola.png',
          'price': 7,
        },
        'quantity': 2,
        '_id': '6372e48cbcd195b0d3d0f7f5'
      }
    ],
  }
];

export function Orders() {
  return (
    <Container>

      <OrdersBoard orders={orders} icon='🕑' title='Fila de espera'/>
      <OrdersBoard orders={[]} icon='👩‍🍳' title='Em produção'/>
      <OrdersBoard orders={[]} icon='✅' title='Pronto!'/>

    </Container>
  );
}
