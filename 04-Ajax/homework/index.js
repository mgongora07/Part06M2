const amigos=document.querySelector('#boton');
const listAmigos=document.querySelector('#lista')


function verAmigos(){
    listAmigos.innerHTML='';
    fetch('http://localhost:5000/amigos')
    .then(response => response.json())
    .then(data => {
        for(let i=0; i<data.length;i++){
            const elemento=data[i].name;    
            let li=document.createElement('li');
            li.innerText=elemento;
            listAmigos.appendChild(li)
            }
        });
}

amigos.addEventListener('click',verAmigos)


    const numAmigo=document.querySelector('#input');
    const bbusca=document.querySelector('#search');
    const muestrAmigo=document.querySelector('#amigo')

    bbusca.addEventListener('click',function(){
        let idAmigo=numAmigo.value;
        numAmigo.value='';
        fetch(`http://localhost:5000/amigos/${idAmigo}`)
        .then(response => response.json())
        .then(data => {
           muestrAmigo.innerText=data.name
            });
        });
    
   const borrar=document.querySelector("#inputDelete");
   const btnBorrar=document.querySelector('#delete');
   const informe=document.querySelector('#sucess')

   btnBorrar.addEventListener('click', function(){
    let idAmigo=borrar.value;
    borrar.value='';
    fetch(`http://localhost:5000/amigos/${idAmigo}`,{
        method:'DELETE'
    })
    .then(response => response.json())
    .then(() => {
       informe.innerText='Amigo Borrado Exitosamente';
       verAmigos()
        });
   })
