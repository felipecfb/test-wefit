import { Button } from '../../../../components/Button';
import { convertToBRL } from '../../../../utils/convertToBRL';
import * as S from './styles';
import { TableProductsProps } from './types';

export function TableProducts({
  cart,
  total,
  removeProduct,
  handleProductIncrement,
  handleProductDecrement,
  handleConfirmOrder
}: TableProductsProps) {
  return (
    <>
      <S.Table>
        <S.Head>
          <S.HeadRow>
            <S.HeadColumn>Produto</S.HeadColumn>
            <S.HeadColumn>Qtd</S.HeadColumn>
            <S.HeadColumn>Subtotal</S.HeadColumn>
            <S.HeadColumn></S.HeadColumn>
          </S.HeadRow>
        </S.Head>
        <S.Body>
          {cart.map((item) => (
            <S.BodyRow key={item.id}>
              <S.BodyColumn>
                <S.ProductWrap>
                  <S.Image src={item.image} />
                  <S.Info>
                    <S.Name>{item.title}</S.Name>
                    <S.ProductPrice>{convertToBRL(item.price)}</S.ProductPrice>
                  </S.Info>
                </S.ProductWrap>
              </S.BodyColumn>
              <S.BodyColumn>
                <S.QuantityWrap>
                  <S.MinusIcon onClick={() => handleProductDecrement(item.id)}>
                    <img src="./minus.svg" />
                  </S.MinusIcon>
                  <S.Quantity type="text" readOnly value={item.quantity} />
                  <S.PlusIcon onClick={() => handleProductIncrement(item.id)}>
                    <img src="./plus.svg" />
                  </S.PlusIcon>
                </S.QuantityWrap>
              </S.BodyColumn>
              <S.BodyColumn>
                <S.Subtotal>
                  {convertToBRL(item.price * item.quantity)}
                </S.Subtotal>
              </S.BodyColumn>
              <S.BodyColumn>
                <S.RemoveIcon onClick={() => removeProduct(item.id)}>
                  <img src="./thrash.svg" alt="" />
                </S.RemoveIcon>
              </S.BodyColumn>
            </S.BodyRow>
          ))}
        </S.Body>
      </S.Table>
      <S.Divider></S.Divider>
      <S.Footer>
        <Button title="Finalizar pedido" onClick={handleConfirmOrder} />
        <S.TotalWrap>
          <span>Total</span>
          <S.Total>{total}</S.Total>
        </S.TotalWrap>
      </S.Footer>
    </>
  );
}
