import {
  Wrapper,
  Title,
  Img,
  Shell,
  Container,
  ShellFacade,
  Description,
  ShellDescription,
  ButtonFacade,
  ImgFacade,
  ImgWrapper,
  TItleFacade,
} from "@/components/facadesMilling/FacadesMilling.styled";
import { homeFacadesList } from "@/helpers/homeFacadesList";
import kitchen from "../../img/kitchen.png";

const FacadesMilling = () => {
  return (
    <>
      <Wrapper>
        <Title>Фасады с фрезеровкой</Title>
        <Container>
          <ImgWrapper>
            <Img src={kitchen.src} />
          </ImgWrapper>
          <Shell>
            {homeFacadesList.map((facades) => (
              <ShellFacade key={facades.title}>
                <ImgFacade src={facades.img} alt="кухня" />
                <TItleFacade>&#34;{facades.title}&#34;</TItleFacade>
              </ShellFacade>
            ))}
          </Shell>
        </Container>
        <ShellDescription>
          <div>
            <Description>
              Производство и покраска готовых фасадов с фрезеровкой
            </Description>
            <Description>Большой выбор фрезеровок</Description>
            <Description>Красиво смотрятся, легко ухаживать</Description>
          </div>
          <div>
            <ButtonFacade>Посмотреть все варианты фрезеровок</ButtonFacade>
          </div>
        </ShellDescription>
      </Wrapper>
    </>
  );
};

export default FacadesMilling;
