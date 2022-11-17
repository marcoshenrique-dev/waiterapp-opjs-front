import styled from 'styled-components';

export const Overlay = styled.div`
  left: 0px;
  top: 0px;

  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(4.5px);
  width: 100%;
  height: 100%;

  position: fixed;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalBody = styled.div`
  display: flex;
  flex-direction: column;
  padding: 32px;


  width: 480px;

  background: #FFFFFF;
  border-radius: 8px;

  header {

    display: flex;
    align-items: center;
    justify-content: space-between;

    strong {
      font-size: 24px;
    }

    button {
      line-height: 0;
      border: 0;
      background-color: transparent;
    }
  }

  .status-container {
    margin-top: 32px;

    small {
      font-size: 14px;
      opacity: 0.8;
    }

    div {
      margin-top: 8px;
      display: flex;
      align-items: center;
      gap: 8px;
    }
  }
`;

export const OrderDetails = styled.div`
  margin-top: 32px;

  > strong {
    color: #333333;
    font-weight: 500;
    opacity: 0.8;
    font-size: 14px;
  }

  .order-items {
    margin-top: 16px;

    .item {
      display: flex;

      & + .item {
        margin-top: 16px;
      }

      img {
        border-radius: 6px;
      }

      .quantity {
        font-size: 14px;
        color: #666;
        display: block;
        min-width: 20px;

        margin-left: 12px;
      }

      .product-details {
        strong {
          display: block;
          margin-left: 4px;
          margin-bottom: 4px;
        }

        span {
          font-size: 14px;
          color: #666;
        }
      }
    }
  }

  .total {

    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 24px;

    span {
      font-weight: 500;
      font-size: 14px;
      opacity: 0.8;
    }

  }
`;

export const Actions = styled.footer`

  display: flex;
  flex-direction: column;
  margin-top: 32px;

  .primary {
    background-color: #333333;
    border-radius: 48px;
    border: 0;
    color: #fff;
    font-size: 16px;
    padding: 12px 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
  }

  .secondary {
    padding: 14px 24px;
    color: rgba(215, 48, 53, 1);
    border: 0;
    background-color: transparent;
    margin-top: 12px;
  }
`;
