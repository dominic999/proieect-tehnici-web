window.onload = ()=>{
    var numePoza = document.getElementById("poza");
    var container = document.getElementById("zonaUpload");
    var afisPoza = document.createElement("img");
    var formular = document.getElementById("formular")
    var buton = document.getElementById("sub");
    formular.addEventListener("submit", e => {
        e.preventDefault();
        container.style.display = "none";
        afisPoza.src = URL.createObjectURL(numePoza.files[0]);
        document.body.appendChild(afisPoza);
        afisPoza.style.width = "100%";



    })


}