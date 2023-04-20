import React from "react"
import { Link } from "gatsby"
import { AiOutlineInstagram, AiOutlineYoutube } from "react-icons/ai"
import { FaFacebookF } from "react-icons/fa"
import Logo from "../images/Logowhite.png"

import {
  container,
  brand,
  wrapper,
  logo,
  brandDescription,
  socials,
  socialTitle,
  social,
} from "../css/footer.module.css"
import Seo from "./seo"
const Footer = () => {
  return (
    <div className={container}>
      <div className={wrapper}>
        <div className={brand}>
          <div className={logo}>
            <Link to="/">
              <img src={Logo} alt="logo of sea senora" />
            </Link>
          </div>
          <div className={brandDescription}>
            The website ends here, but your journey to the beautiful
            destinations begins with Sv Sea Senora. Explore with us.
          </div>
        </div>
        <div className={socials}>
          <div className={socialTitle}>social</div>
          <div className={social}>
            <a
              href="https://www.instagram.com/svseasenora/"
              target="_blank"
              rel="noopener noreferrer"
              alt="instagram"
            >
              <AiOutlineInstagram />
            </a>
            <a
              href="https://www.youtube.com/channel/UCpaA07tlk3PA44WApp8oKDw"
              target="_blank"
              rel="noopener noreferrer"
              alt="youtube"
            >
              <AiOutlineYoutube />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100085674495009"
              target="_blank"
              rel="noopener noreferrer"
              alt="facebook"
            >
              <FaFacebookF />
            </a>
          </div>
          <div>Copyright © 2022 - {new Date().getFullYear()} SV Sea Senora</div>
        </div>
      </div>
    </div>
  )
}
export const Head = () => <Seo title="footer" />
export default Footer
