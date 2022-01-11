window.addEventListener("load",iniciar);

function iniciar() {
    var para = document.createElement('p');
    var txt1 = document.createTextNode('txt1');  
    para.appendChild(txt1);
    
    var enfasis = document.createElement('em');
    var txt2 = document.createTextNode('txt2');  
    enfasis.appendChild(txt2);

    para.appendChild(enfasis);

    var txt3 = document.createTextNode('txt3');  
    para.appendChild(txt3);


    document.getElementById(testdiv).appendChild(para);
}