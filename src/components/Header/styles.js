import styled from "styled-components";
import headerBackgroundImage from "../../figures/images/ImageBackground.svg";

export const GradiantLayer = styled.div`
  width: 100%;
  height: 40rem;
  background-image: linear-gradient(
    314.72deg,
    #c86dd7 -1.5%,
    #7e49c3 39.43%,
    #5912ac 86.02%
  );
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center 0;
`;

export const Container = styled.header`
  width: 100%;
  height: 40rem;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center 0;
  background-image: url(${headerBackgroundImage});
  header {
    display: flex;
    align-items: center;

    a {
      font-size: 14px;
      color: var(--white);
      margin-left: 2.5rem;
      transition: filter 0.2s ease;
      &:hover {
        filter: brightness(0.8);
      }
    }

    .logo {
      margin-left: 1.25rem;
    }
  }
`;