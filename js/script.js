var specialKeys = new Array();
specialKeys.push(8); //Backspace
specialKeys.push(9); //Tab
specialKeys.push(13); //Enter
const btnLuas = document.getElementById("btn-luas");
const btnKeliling = document.getElementById("btn-keliling");
let formatter = Intl.NumberFormat("id");




function IsNumeric(e) {
    var keyCode = e.which ? e.which : e.keyCode
    var ret = ((keyCode >= 48 && keyCode <= 57) || specialKeys.indexOf(keyCode) != -1);
    return ret;
}

function luas(e){
    e.preventDefault();
    if (alas === '' && tinggi === ''){
        btnLuas.setAttribute('disabled');
        return false;
    }else {
        let alas = document.getElementById("alas").value;
        let tinggi = document.getElementById("tinggi").value;
        const luas = parseInt(alas)*parseInt(tinggi)/2;
        document.getElementById("rumusLuas").innerHTML = `L = 1/2 x a x t`
        document.getElementById("hasil-luas").innerHTML = `L = 1/2 x ${formatter.format(alas)} x ${formatter.format(tinggi)}`
        document.getElementById("hasil-luas2").innerHTML = `L = ${formatter.format(luas)}` 
    }
}

function hapusLuas(){
    document.getElementById("hasil-luas").innerHTML = "";
    document.getElementById("rumusLuas").innerHTML = "";
    document.getElementById("hasil-luas2").innerHTML = "";
    alas.focus();
    alas.value = '';
    tinggi.value = '';
}
function keliling(e){
    e.preventDefault();
    if (ab === '' && bc === '' && ac === ''){
        btnKeliling.setAttribute('disabled');
        return false;
    } else {
    let ab = document.getElementById("ab").value;
    let bc = document.getElementById("bc").value;
    let ac = document.getElementById("ac").value;
    const keliling = parseInt(ab)+parseInt(bc)+parseInt(ac);
    document.getElementById("rumusKeliling").innerHTML = `Keliling = panjang AB + panjang BC + panjang AC`; 
    document.getElementById("hasil-keliling").innerHTML = `Keliling = ${formatter.format(ab)} + ${formatter.format(bc)} + ${formatter.format(ac)}`; 
    document.getElementById("hasil-keliling2").innerHTML = `Keliling = ${formatter.format(keliling)}`;
    }
}

function hapusKeliling(){
    document.getElementById("hasil-keliling").innerHTML = "";
    document.getElementById("rumusKeliling").innerHTML = "";
    document.getElementById("hasil-keliling2").innerHTML = "";
    ab.focus();
    ab.value = '';
    bc.value = '';
    ac.value = '';

}