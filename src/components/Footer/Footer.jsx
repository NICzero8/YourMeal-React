import "./Footer.scss";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer_wrapper">
          <div className="footer-logo_wrapper">
            <a href="#!" className="footer-logo">
              <img src="./img/footer/logo-footer.svg" alt="YourMeal" />
            </a>
          </div>

          <div className="footer-contacts_wrapper">
            <h3 className="footer-title">Номер для заказа</h3>
            <a href="#!" type="tel">
              <img src="./img/footer/call.svg" alt="Phone" />
              {`+7(930)833-38-11`}
            </a>
          </div>

          <div className="footer-socials_wrapper">
            <h3 className="footer-title">Мы в соцсетях</h3>
            <a href="#!">
              <img src="./img/footer/socials/vk.svg" alt="VK" />
            </a>
            <a href="#!">
              <img src="./img/footer/socials/telegram.svg" alt="Telegram" />
            </a>
          </div>

          <div className="footer-copyright">
            <p>
              © YouMeal, 2022 <br/>Design: Anastasia Ilina
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
