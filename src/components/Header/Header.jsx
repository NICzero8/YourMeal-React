import "./Header.scss"

export default function Header() {
    return (
      <header>
          <div className="background-circle"></div>
  
          <div className="container">
              <div className="header_wrapper">
  
                  <div className="header-logo_wrapper">
                      <img src="./img/header/logo-header.svg" alt="YourMeal Logo"/>
                  </div>
  
                  <div className="header-content_wrapper">
  
                      <div className="header-img_wrapper">
                          <img src="./img/header/header-img.png" alt="Бургер"/>
                      </div>
  
                      <div className="header-message_wrapper">
                          <h1 className="header_title">Только самые<br/><span>сочные бургеры!</span></h1>
                          <p>Бесплатная доставка от <span>599₽</span></p>
                      </div>
  
                  </div>
  
              </div>
          </div>
      </header>
    )
  }