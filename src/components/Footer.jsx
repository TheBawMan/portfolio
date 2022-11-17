import React from "react";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillFacebook,
  AiOutlineArrowUp,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div>
        <img
          src={"https://avatars.githubusercontent.com/TheBawMan"}
          alt="Founder"
        />

        <h2>Arghadip Shee</h2>
        <p>Nothing is Impossible.</p>
      </div>

      <aside>
        <h2>Social Media</h2>

        <article>
          <a href="https://www.facebook.com/arghadip.s" target={"blank"}>
            <AiFillFacebook />
          </a>
          <a href="https://instagram.com/thebawman" target={"blank"}>
            <AiFillInstagram />
          </a>
          <a href="https://github.com/TheBawMan" target={"blank"}>
            <AiFillGithub />
          </a>
        </article>
      </aside>
      <a href="#home">
        <AiOutlineArrowUp />
      </a>
    </footer>
  );
};

export default Footer;