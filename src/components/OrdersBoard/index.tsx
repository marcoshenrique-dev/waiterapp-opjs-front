/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { useState } from 'react';
import { toast } from 'react-toastify';
import { Order } from '../../types/Order';
import { api } from '../../utils/api';
import { OrderModal } from '../OrderModal';

import { Board, OrdersContainer } from './styles';

type OrdersBoardProps = {
  icon: string;
  title: string;
  orders: Order[];
  onCancelOrder: (orderId: string) => void;
  onChangeOrderStatus: (orderId: string, status: Order['status']) => void;
}

export function OrdersBoard({icon, title, orders, onCancelOrder, onChangeOrderStatus}: OrdersBoardProps) {

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);

  function handleOpenModal(order: Order) {
    setSelectedOrder(order);
    setIsModalVisible(true);
  }

  function handleCloseModal() {
    setSelectedOrder(null);
    setIsModalVisible(false);
  }

  async function handleChangeOrderStatus() {
    setIsLoading(true);

    const status = selectedOrder?.status === 'WAITING' ? 'IN_PRODUCTION' : 'DONE';

    await api.patch(`/orders/${selectedOrder?._id}`, {status});


    toast.success(`O pedido da mesa ${selectedOrder?.table} teve o status alterado!`);

    onChangeOrderStatus(selectedOrder!._id, status);
    setIsLoading(false);
    setIsModalVisible(false);

  }

  async function handleCancelOrder() {
    setIsLoading(true);

    await api.delete(`/orders/${selectedOrder?._id}`);

    toast.success(`O pedido da mesa ${selectedOrder?.table} foi cancelado`);

    onCancelOrder(selectedOrder!._id);
    setIsLoading(false);
    setIsModalVisible(false);
  }

  return (
    <Board>

      <OrderModal onChangeOrderStatus={handleChangeOrderStatus} isLoading={isLoading} onCancelOrder={handleCancelOrder} onClose={handleCloseModal} order={selectedOrder || {} as Order} visible={isModalVisible}/>

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
