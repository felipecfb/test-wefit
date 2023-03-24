import * as S from './styles';

export function TableProducts() {
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
        <S.BodyRow>
          <S.BodyColumn>
            <S.ProductWrap>
              <S.Product>
                <S.Image src="./productImage.svg" />
                <S.Info>
                  <S.Name>Viúva Negra</S.Name>
                  <S.ProductPrice>R$ 9,99</S.ProductPrice>
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
            <S.Subtotal>R$ 9,99</S.Subtotal>
          </S.BodyColumn>
          <S.BodyColumn>
            <S.RemoveIcon>
              <img src="./thrash.svg" alt="" />
            </S.RemoveIcon>
          </S.BodyColumn>
        </S.BodyRow>
      </S.Body>
    </S.Table>
  );
}
