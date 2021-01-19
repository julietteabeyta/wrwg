import { resolve } from 'styled-jsx/css';

const styles = () => {
  return resolve`
  @import url('https://fonts.googleapis.com/css2?family=Lato:wght@100;300&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;1,800&display=swap');
  main {
    background: #191919;
    color: #E5E5E5;
    font-family: 'Lato', sans-serif;
    overflow-x: hidden;
    margin-top: -15px;
    width: 100vw;
  }
  
  #header-logo-container {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    width: 82%;
    height: 30px;
    top: 45%;
    margin-left: -2%;
    img {
      width: 38%;
      animation-delay: 1s;
    }
    svg {
      &#w2 {
        margin-left: -3%;
      }
    }
  }
  
  .fade-in {
    opacity: 0;
  }
  
  header {
    text-align: center;
    max-width: 750px;
    margin: 0 auto;
    position: relative;
    h1 {
      font-size: 1em;
    }
  }
  .nav {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    justify-items: center;
    margin-top: 25px;
    a {
      margin-top: 5px;
      text-transform: uppercase;
      color: #E5E5E5;
      font-size: .7em;
      text-decoration: none;
    }
  }
  
  span {
    font-family: 'Playfair Display', serif;
    font-style: italic;
  }
  
  .section {
    &.section-1 {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      margin-top: 10%;
      font-size: 1.5em;
      div {
        display: flex;
        flex-direction: column;
        width: 75%;
        max-width: 590px;
        overflow: hidden;
        small {
          font-size: 50%;
          text-align: right;
          position: relative;
          margin-right: 20px;
          &:before {
            content: '';
            position: absolute;
            background-color: white;
            height: 1px;
            width: 100%;
            right: 125px;
            top: 8px;
          }
        }
      }
    }
    &.section-2 {
      margin: 150px 0;
      text-align: center;
      img {
        width: 35%;
        &.img-1, &.img-3 {
          margin-bottom: -15%;
        }
        &.img-1 {
          margin-right: -10%;
        }
        &.img-3 {
          margin-left: -10%;
        }
      }
      h1 {
        margin-top: 20%;
        font-size: 1.5em;
        font-weight: 100;
        span {
          font-style: inherit;
        }
      }
    }
    &.section-3 {
      background: #B55A4C;
      color:  #E5E5E5;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 5% 0;
      text-align: center;
      div {
        width: 75%;
        max-width: 590px;
      }
      p {
        display: block;
        font-size: 1.5em;
      }
    }
  }
  
  footer {
    padding: 45px;
    position: relative;
    img {
      height: 100px;
    }
    p {
      position: absolute;
      bottom: 0;
      right: 45px;
    }
    div {
      position: absolute;
      right: 45px;
      bottom: 50px;
      img {
        height: 30px;
        margin-left: 15px;
      }
    }
  }
  
  @media screen and (min-width: 768px) {
    .nav {
      font-size: 1.2em;
    }
    .section {
      &.section-1 {
        font-size: 2em;
        div {
          small {
            margin-right: 45px;
            &:before {
              right: 165px;
            }
          }
        }
      }
    }
  }
  
  @media screen and (min-width: 992px) {
    .nav {
      font-size: 1.5em;
    }
  }
  `
};

export default styles;