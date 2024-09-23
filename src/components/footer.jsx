import React from "react";
import "./footer.css";

 
const Footer = () => {
  return (
   <section className="section">


<div className="copyright">
<img className="logo-pic" src="/src/img/logo-.png" alt="" />
<p>Copyright © 2023. All Rights Reserved by Rollespilsklubben.</p>
</div>
<div className="icons">
  <img src="/src/img/facebook.png" alt="" />
  <img src="/src/img/instagram.png" alt="" />
</div>
   </section>
  );
};
 
export default Footer;