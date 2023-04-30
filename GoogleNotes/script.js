const addbutton=document.querySelector("#add")

const updateLSData = () =>{
const textAreaData = document.querySelectorAll('textarea');
const notes =[];
textAreaData.forEach((note)=>{
  return notes.push(note.value);
});

localStorage.setItem('notes',JSON.stringify(notes));

}

const addNewNote=(text='')=>{
  const note=document.createElement("div");
  note.classList.add('note');
  const htmldata =`
  <div class="operation">
      <button class="edit"><i class="fa-solid fa-pen-to-square"></i></button>
      <button class="delete"><i class="fa-solid fa-trash"></i></button>
    
    </div>
    <div class="main ${text ? "" :"hidden"}"> </div>
    <textarea class="${text ? "hidden" : "" }"></textarea> `;

   note.insertAdjacentHTML('afterbegin',htmldata);

   const editbtn =note.querySelector('.edit');
   const deletebtn =note.querySelector('.delete');
   const maindiv =note.querySelector('.main');
   const txtarea =note.querySelector('textarea');

   deletebtn.addEventListener('click',() => {
    note.remove();
    updateLSData();
  });

  txtarea.value =text;
  maindiv.innerHTML =text;


   editbtn.addEventListener('click',() => {
   maindiv.classList.toggle('hidden');
   txtarea.classList.toggle('hidden');
  });




  txtarea.addEventListener('change',(event) => {
    const value = event.target.value;
    maindiv.innerHTML = value;

    updateLSData();
  })




   document.body.appendChild(note);

}

const notes =JSON.parse(localStorage.getItem('notes'));

if(notes){
  notes.forEach((note) => { addNewNote(note); });
    
  
}

addbutton.addEventListener("click",() =>{ addNewNote()})