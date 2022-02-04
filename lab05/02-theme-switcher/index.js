const Default_Scene = () => {
   console.log("Deset")
   document.querySelector('.container').className = "container";
};

const Desert_Scene = () => {
   console.log("Deset")
   document.querySelector('.container').className = "container desert";
};

const Ocean_Scene = () => {
   console.log("Ocean")
   document.querySelector('.container').className = "container ocean";
};

const High_Scene = () => {
   console.log("Ocean")
   document.querySelector('.container').className = "container high-contrast";
};

// Event listeners
document.querySelector("#default").addEventListener('click', Default_Scene);
document.querySelector("#desert").addEventListener('click', Desert_Scene);
document.querySelector("#ocean").addEventListener('click', Ocean_Scene);
document.querySelector("#high-contrast").addEventListener('click', High_Scene);
