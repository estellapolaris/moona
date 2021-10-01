import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram
  } from "@fortawesome/free-brands-svg-icons";
export default function SocialFollow() {
  return (
    <div class="social-container">
      
      <a href="https://www.youtube.com/channel/UCP0BspO_AMEe3aQqqpo89Dg"
  className="youtube social" target="_blank">
  <FontAwesomeIcon icon={faYoutube} size="3x" />
</a>
<a href="https://www.facebook.com/moonahoshinovaholoID"
  className="facebook social"target="_blank">
  <FontAwesomeIcon icon={faFacebook} size="3x" />
</a>
<a href="https://twitter.com/moonahoshinova" className="twitter social" target="_blank">
  <FontAwesomeIcon icon={faTwitter} size="3x" />
</a>
<a href="https://www.instagram.com/moonahoshinova/"
  className="instagram social" target="_blank">
  <FontAwesomeIcon icon={faInstagram} size="3x" />
</a>
</div>
  );
}