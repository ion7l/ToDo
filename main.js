let EleTass = document.querySelector(".tasks");
let EleTas = document.querySelectorAll(".task");
let EleBut = document.querySelector(".but");
let Eleops = document.querySelector(".opst");
let EleFor = document.querySelector(".add");
let EleCan = document.querySelector(".can");
let cheLis = [];

// Add New Task In List
function newTask() {
    let ElenamTas = document.querySelector(".name");
    EleTass.innerHTML += `
    <div class="task" id="task${cheLis.length}">
        <div class="check" onclick="chek(${cheLis.length})">
            <i class="fa-solid fa-check" id="check${cheLis.length}"></i>
        </div>
        <p id="p${cheLis.length}">${ElenamTas.value}</p>
        <i class="fa-solid fa-trash" onclick="del(${cheLis.length})"></i>
    </div>`;
    ElenamTas.value = ""
    cheLis.push(false);
    cancl();
};

// check Done Task In List
function chek(key) {
    if(cheLis[key] === false){
        cheLis[key] = true;
    }
    else {
        cheLis[key] = false;
    }
    if(cheLis[key] === true){
        document.getElementById(`check${key}`).style.display = "inline-block";
        document.getElementById(`p${key}`).style.textDecoration = "line-through";
    }
    else if(cheLis[key] === false){
        document.getElementById(`check${key}`).style.display = "none";
        document.getElementById(`p${key}`).style.textDecoration = "none";
    }
};

// Delete Task From List
function del(key){
    document.getElementById(`task${key}`).remove();
}

// remove Form Add Tasks
EleCan.onclick = function () {
    Eleops.style.display = "none";
    EleFor.style.display = "none";
};

// remove Form Add Tasks
function cancl() {
    Eleops.style.display = "none";
    EleFor.style.display = "none";
};

// Display Form Add Tasks
EleBut.onclick = function () {
    Eleops.style.display = "block";
    EleFor.style.display = "flex";
};