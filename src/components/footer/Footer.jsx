import React from "react";
import styles from "./Footer.module.css";
// import {useLocation} from "react-router-dom";
import Pin from "../../assets/Pin.png";
import Mail from "../../assets/Mail.png";
import Phone from "../../assets/Phone.png";
import Instagram from "../../assets/Instagram.png";
import Viber from "../../assets/Viber.png";
import Whatsapp from "../../assets/Whatsapp.png";
import Vk from "../../assets/Vk.png";
import Facebook from "../../assets/Facebook.png";
import Skype from "../../assets/Skype.png";

const Footer = () => {
  // const location = useLocation();

  // if(location.pathname !== '/' && location.pathname !== '/About'){
  //   return null;
  // }

  return (
    <div className={styles.container}>
      {/* <div className={styles.footer}> */}

      <div className={styles.contactsInfo}>
        <h1>Contacts:</h1>
        <div className={styles.contacts}>
          <div className={styles.a1SocialMedia}>
            <img className={styles.phone} src={Phone} alt="phone" />
            <p>A1:87878484878855</p>
            <a href="https://www.instagram.com">
              <img
                className={styles.instagram}
                src={Instagram}
                alt="instagram"
              />
            </a>
            <a href="https://www.vk.com">
              <img className={styles.vk} src={Vk} alt="vk" />
              <a href="https://www.facebook.com">
                <img
                  className={styles.facebook}
                  src={Facebook}
                  alt="facebook"
                />
              </a>
            </a>
          </div>

          <div className={styles.mTCMessengers}>
            <img className={styles.phone} src={Phone} alt="phone" />
            <p>MTC:87878484878855</p>
            <a href="https://www.viber.com">
              <img className={styles.viber} src={Viber} alt="viber" />
            </a>
            <a href="https://www.whatsapp.com">
              <img className={styles.whatsapp} src={Whatsapp} alt="whatsapp" />
            </a>
            <a href="https://www.skype.com">
              <img className={styles.skype} src={Skype} alt="skype" />
            </a>
          </div>

          <div className={styles.emailPlace}>
            <a href="mailto:example@email.com" target="_self">
              <img className={styles.email} src={Mail} alt="email" />
            </a>
            <p>Email</p>
          </div>
        </div>
      </div>





      <div className={styles.addressInfo}>
         <h1>Address:</h1>

         <div className={styles.address}>
              <div className={styles.mapPlace}>
              <a
                href="https://www.google.com/maps?q=Minsk/ Visotskogo"
                target="_self">
                <img className={styles.map} src={Pin} alt="map" />
              </a>
              <p>Belarus, Minsk, Visotskovo Str. 3</p>
            </div>
            <div className={styles.impressum}>
              <p>Impressum</p>
            </div>
          </div>
      </div>



      <div className={styles.copyrightInfo}>
          <h1>Copyright:</h1>

          <div className={styles.copyright}>
            <div className={styles.bankData}>
              <p>BANK IBAN</p>
            </div>
            <div className={styles.licence}>
              <p>Licence</p>
            </div>
          </div>
          </div>
    </div>
  );
};

export default Footer;
