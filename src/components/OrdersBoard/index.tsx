import { useState } from 'react';
import { Order } from '../../types/Order';
import { OrderModal } from '../OrderModal';

import { Board, OrdersContainer } from './styles';

type OrdersBoardProps = {
  icon: string;
  title: string;
  orders: Order[];
}

export function OrdersBoard({icon, title, orders}: OrdersBoardProps) {

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);

  function handleOpenModal(order: Order) {
    setSelectedOrder(order);
    setIsModalVisible(true);
  }

  function handleCloseModal() {
    setSelectedOrder(null);
    setIsModalVisible(false);
  }

  return (
    <Board>

      <OrderModal onClose={handleCloseModal} order={selectedOrder || {} as Order} visible={isModalVisible}/>

      <header>
        <span>{icon}</span>
        <strong>{title}</strong>
        <span>({orders.length})</span>
      </header>

      {
        orders.length > 0 && (
          <OrdersContainer>
            {
              orders.map(order => (
                <button key={order._id} type='button' onClick={() => handleOpenModal(order)}>
                  <strong>{order.table}</strong>
                  <span>{order.products.length} itens</span>
                </button>
              ))
            }
          </OrdersContainer>


        )
      }
    </Board>
  );
}
