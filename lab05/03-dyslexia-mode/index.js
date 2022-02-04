const dys = () => {
  if (document.querySelector('.container').className == "container dyslexia-mode") {
    document.querySelector('.container').className = "container";
    document.querySelector("p").style.width = "100%";
    document.querySelector("p").style.paddingLeft = "0px";
    document.querySelector("h2").style.paddingLeft = "0px";
  } else {
    document.querySelector('.container').className = "container dyslexia-mode";
    //adjusted line width
    document.querySelector("p").style.paddingLeft = "10%";
    document.querySelector("h2").style.paddingLeft = "10%";
  }
};

// Event listeners
document.querySelector("#dyslexia-toggle").addEventListener('click', dys);
