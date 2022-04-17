import { FooterContainer, Divider } from "./styles";
import logo from "../../figures/images/Logo.svg";

import facebook from "../../figures/icons/Facebook.svg";
import twitter from "../../figures/icons/Twitter.svg";
import instagram from "../../figures/icons/Instagram.svg";

export function Footer() {
  return (
    <FooterContainer>
      <div>
        <img src={logo} alt="logo" />
        <div className="navBar">
          <a href="/">Share Your Nanny</a>
          <a href="/">Our Story</a>
        </div>
        <div className="icons">
          <a href="/">
            <img src={facebook} alt="button facebook icon" />
          </a>
          <a href="/">
            <img src={twitter} alt="button twitter icon" />
          </a>
          <a href="/">
            <img src={instagram} alt="button instagram icon" />
          </a>
        </div>
      </div>
      <Divider />
    </FooterContainer>
  );
}