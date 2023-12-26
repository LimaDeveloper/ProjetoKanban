const input_group = document.getElementById('input-group');
const campos = document.querySelectorAll('.required');
const spans = document.querySelectorAll('.span-required');
const btnSearch = document.querySelector("#btnSearch");



const kanban = [
    {
    kanbam:"COM358",
    PN:"KB01A001-NAS9303B5-2",
    PN:  "KB01F010-MS20470AD4-4",
    Cemb: "123456"
},
{
    kanbam:"COM358",
    PN:"KB02E003-NAS9301B5-2",
    Cemb: "123454"
},
{
    kanbam:"COM351",
    PN: "KB03C001-MS20470AD5-5",
    Cemb: "654321"
},
{
    kanbam:"COM355",
    PN:"KB02E003-NAS9301B5-2",
    Cemb: "123454"
}    
]
btnSearch.addEventListener('click',
function validar(){
    let inputKanban = document.getElementById('kanban').value
    let inputCemb = document.getElementById('cemb').value
    let inputPn = document.getElementById('pnl').value
    let validakanban = false

    for(let i in kanban){
        if(inputKanban == kanban[i].kanbam && inputCemb == kanban[i].Cemb && inputPn == kanban[i].PN){
           validakanban = true;
           alert('certo')
            break
        }
    }
    if(validakanban == true){
       location.href = 'index.html'
    }else{
       alert('Erro')
    }
}
)



function setError(index){
    campos[index].style.border = '2px solid #e63636';
    spans[index].style.display = 'block';
}
function removeError(index){
    campos[index].style.border = '';
    spans[index].style.display = 'none';
}

function kanbanValidate(){
  
    if(campos [0].value.length<3){
        setError(0);
    }
    else{
      removeError(0);
    }
}

