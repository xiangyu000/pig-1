const string = `
html {
    height: 100%;
    background: linear-gradient(top, #cff0ed 0%, #9fe1db 100%);
  }
  body {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  #pig {
    height: 20em;
    width: 20em;
    margin: 5em auto;
    position: relative;
    border-radius: 50%;
    box-shadow: 0 0.125em 1em #fca inset, 0 -1.5em 5em #923 inset;
    background: radial-gradient(50% 30%, #fa9 20%, #f46 100%);
    animation: float ease-in-out 1.5s infinite;
  }
  #pig:before {
    animation: shadow ease-in-out 1.5s infinite;
    content: "";
    display: block;
    position: relative;
    top: 10em;
    height: 0.5em;
    margin: 0 2em;
    border-radius: 80% 60%;
    box-shadow: 0 14em 1em 1em rgba(0, 0, 0, 0.7);
    background: rgba(0, 0, 0, 0);
    opacity: 0.5;
  }
  
  .ear {
    height: 8em;
    width: 5em;
    position: absolute;
    top: 2em;
    background: radial-gradient(50% 30%, #923 20%, #612 100%);
  }
  .ear.left {
    left: -1em;
    border-radius: 250% 50% 250% 20%;
    box-shadow: 0.125em 0.125em 0.5em rgba(90, 0, 0, 0.25),
      0 -0.0625em 0.25em rgba(0, 0, 0, 0.5) inset;
  }
  .ear.right {
    right: -1em;
    border-radius: 50% 250% 20% 250%;
    box-shadow: -0.125em 0.125em 0.5em rgba(90, 0, 0, 0.25),
      0 -0.0625em 0.25em rgba(0, 0, 0, 0.5) inset;
  }
  
  .eye {
    height: 7em;
    width: 3.5em;
    position: absolute;
    top: 5em;
    box-shadow: 0 -1em 1em rgba(0, 0, 100, 0.15) inset,
      0 -0.25em 0.25em rgba(0, 0, 100, 0.2) inset,
      0 0.125em 0.75em rgba(90, 0, 0, 0.2), 0 0.25em 1em rgba(90, 0, 0, 0.3);
    background: #fff;
  }
  
  .eye.left {
    left: 28%;
    border-radius: 100% 50%;
  }
  .eye.right {
    right: 28%;
    border-radius: 50% 100%;
  }
  .eye:after {
    height: 3em;
    width: 2em;
    position: absolute;
    top: 1em;
    border-radius: 100%;
    box-shadow: 0 -0.25em 0.5em #111 inset;
    content: "";
    background: #333;
  }
  .eye.left:after {
    left: 35%;
  }
  .eye.right:after {
    right: 35%;
  }
  
  .nose {
    height: 4em;
    width: 6em;
    position: absolute;
    top: 60%;
    left: 36%;
    border-radius: 80% 80% 70% 70%;
    box-shadow: 0 0.25em 1em rgba(90, 0, 0, 0.5), 0 -0.0625em #fff;
    background: radial-gradient(50% 30%, #fca 20%, #fa9 100%);
  }
  .nose:before,
  .nose:after {
    height: 2em;
    width: 0.5em;
    position: absolute;
    top: 1em;
    border-radius: 100%;
    box-shadow: 0 0.0625em #fff, 0 0 0.5em rgba(90, 0, 0, 0.5);
    content: "";
    background: #612;
  }
  .nose:before {
    left: 1.75em;
  }
  .nose:after {
    right: 1.75em;
  }
  
  @keyframes float {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(1em);
    }
    100% {
      transform: translateY(0);
    }
  }
  
  @keyframes shadow {
    0% {
      transform: translateY(0);
      opacity: 0.5;
    }
    50% {
      transform: translateY(1em) scale(0.9);
      opacity: 1;
    }
    100% {
      transform: translateY(0);
      opacity: 0.5;
    }
  }`;
export default string;
