const magik = magikcraft.io;

function teleport() {
     const memory = magik.exmemento();
     if (memory[where]) {
         magik.ianuae(memory[where]);
     } else {
         magik.dixit(`I don't remember ${where}!`);
     }
}
