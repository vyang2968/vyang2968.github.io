onbeforeunload = () => { 
  window.setTimeout(function () { 
      window.location = '../index.html';
  }, 0); 
  window.onbeforeunload = null;
}

onload = () => {
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
    }, 1000);
  };
