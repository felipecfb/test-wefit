import { useCart } from '../../../../hooks/useCart';
import { convertToBRL } from '../../../../utils/convertToBRL';
import * as S from './styles';

export function TableProducts() {
  const { cart } = useCart();

  return (
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
                <S.Product>
                  <S.Image src={item.image} />
                  <S.Info>
                    <S.Name>{item.title}</S.Name>
                    <S.ProductPrice>{convertToBRL(item.price)}</S.ProductPrice>
                  </S.Info>
                </S.Product>
              </S.ProductWrap>
            </S.BodyColumn>
            <S.BodyColumn>
              <S.QuantityWrap>
                <S.MinusIcon>
                  <img src="./minus.svg" />
                </S.MinusIcon>
                <S.Quantity value="1" />
                <S.PlusIcon>
                  <img src="./plus.svg" />
                </S.PlusIcon>
              </S.QuantityWrap>
            </S.BodyColumn>
            <S.BodyColumn>
              <S.Subtotal>{item.quantity * item.price}</S.Subtotal>
            </S.BodyColumn>
            <S.BodyColumn>
              <S.RemoveIcon>
                <img src="./thrash.svg" alt="" />
              </S.RemoveIcon>
            </S.BodyColumn>
          </S.BodyRow>
        ))}
      </S.Body>
    </S.Table>
  );
}
