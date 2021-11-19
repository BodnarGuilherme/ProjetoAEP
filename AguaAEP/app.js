function refreshPage() {
  window.location.reload();
}

function calculate() {
  let quantPessoas = document.getElementById("qP").value;
  let quantAgua = document.getElementById("qA").value;

  let consuM = quantAgua / 30 / quantPessoas;
  let consuL = Math.ceil((quantAgua * 1000) / 30 / quantPessoas);

  const tl4 = document.getElementById("tl4");
  const tl2 = document.getElementById("tl2");
  const tl3 = document.getElementById("tl3");

  tl4.style.display = "flex";
  tl2.style.display = "none";
  tl3.style.display = "none";

  const icon = document.getElementById("icon");
  const t1 = document.getElementById("t1");
  const t2 = document.getElementById("t2");

  let txt1 = `SEU CONSUMO DE PESSOA/DIA FOI DE ${consuM.toFixed(
    2
  )} M3 OU ${consuL} LITROS`;
  t1.innerHTML = txt1;

  if (consuL <= 110) {
    icon.style.background = 'url("./assets/icon-sim.svg")';
    t2.innerHTML = "PARABÉNS, USUÁRIO CONSCIENTE!!!";
  } else {
    icon.style.background = 'url("./assets/icon-nao.svg")';
    t2.innerHTML =
      "A MEDIÇÃO INDIVIDUALIZADA AJUDA VOCÊ A CORRIGIR ISSO. FAZ BEM PARA VOCÊ, FAZ BEM PARA O MUNDO.";
    t2.style.color = "#fb1";
  }
}

function goToTl2() {
  const tl1 = document.getElementById("tl1");
  const tl2 = document.getElementById("tl2");
  const tl3 = document.getElementById("tl3");

  tl1.style.transform = "translateX(-100%)";
  setTimeout(() => {
    tl1.style.height = "0px";
    tl2.style.height = "100vh";
    tl3.style.height = "0px";
  }, 300);
}

function goToTl3() {
  const tl1 = document.getElementById("tl1");
  const tl2 = document.getElementById("tl2");
  const tl3 = document.getElementById("tl3");

  tl1.style.transform = "translateX(-100%)";
  setTimeout(() => {
    tl1.style.height = "0px";
    tl2.style.height = "0vh";
    tl3.style.height = "100vh";
  }, 300);
}