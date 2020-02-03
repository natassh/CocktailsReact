import React from 'react';
import ExternalLink from '../../Atoms/ExternalLink/ExternalLink';
import './Footer.css';

function Footer() {
  return (
    <footer>
      <ExternalLink
        className="tw"
        href="https://twitter.com/natassh"
        text="Twitter"
      />
      <ExternalLink
        className="lk"
        href="https://www.linkedin.com/in/natacha-ivannikova-261478113/"
        text="Linkedin"
      />
      <ExternalLink
        className="gh"
        href="https://github.com/natassh"
        text="GitHub"
      />
      <ExternalLink
        className="myweb"
        href="https://natassh.github.io/myweb/"
        text="Personal web"
      />
    </footer>
  );
}

export default Footer;
