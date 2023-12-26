const txtSearch = document.querySelector("#txtSearch");
const btnSearch = document.querySelector("#btnSearch");
const resp = document.querySelector("#resp");

const element_array = [
    "KB01A001-NAS9303B5-2",
    "KB02E003-NAS9301B5-2",
    "KB03C001-MS20470AD5-5",
    "KB01F010-MS20470AD4-4",
    "KB04F001-MS14218AD4-4",
    "KB02D009-MS20470E5-5",
    "KB01A003-NAS1149F0816P"
]
btnSearch.addEventListener("click",(evt)=>{
    resp.innerHTML = "Nada Encontrado.";
    
    const ret = element_array.find((e,i)=>{
        if(txtSearch.value.toUpperCase() == ""){
            resp.innerHTML = " Nada Digitado.";
        }
        else if(e.toUpperCase().includes(txtSearch.value.toUpperCase())){
            resp.innerHTML = "Resultado: <br>" + e;
            txtSearch.value = "";
            txtSearch.focus();
            return e;
        }
    })
})
