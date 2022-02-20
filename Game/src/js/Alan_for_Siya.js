const constructBox = {name:'Construct Box', id: 'constructbox'}

// intent(`My name is $(NAME)`, `This is $(NAME)`, `$(NAME) this side`, p => {
//     p.play(`Hello $(NAME)! Wellcome to the game of Sia's Quantum Oddessy`)       
// })

intent('(Start|Initiate|) Level 1', p => {
    p.play('Initiating Level 1, hello! I am Alan, Sia\'s personal AI. In a night full of star showers, Sia is out on an adventure to explore the beguiling world of Quantum Computers. But, an evil demon Raka, with his Super-Quantum Gun wants to rule the planet by not letting anyone in this world know about powerful Quantum Technology.');
    p.play('Let\’s help Sia beat Raka by upgrading her Classical Gun into a super Quantum Gun. Sia has a small broken quantum gun. Let\’s help her first to repair the Quantum Circuit of her gun.  To do this first we have to know what Qubit is and what is Quantum Circuit?')
    p.play({command: 'highlight', item: constructBox.id})
    p.play(' A qubit is the fundamental unit of information in a quantum computer. Quantum Circuit is a set of operations done on a qubit to change their states. You can make a quantum circuit with 1000 qubits to shoot by writing \‘QuantumCircuit(1000)\’ in the Construct Box.')
})
 
projectAPI.xgate = function(p, param, callback) {
    p.play('That\'s great! Now lets add a X-Gate to the gun. This will change the initial state of qubit from 0 to 1 or from white to black.')
}

fallback('Sorry!', 'Sorry, I can\'t understand.')