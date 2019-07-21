////////////////////////////////////////
////  Your Roku's local IP Address  ////
var rokus_ip = '1.1.1.1';
////////////////////////////////////////

window.addEventListener('keydown', handleKeyboard);

function handleKeyboard(e) {
  // console.log(e.code);

  // Arrow Left
  if ( e.code == 'ArrowLeft' ) {
    sendCommand('Left');
  }
  // Arrow Right
  if ( e.code == 'ArrowRight' ) {
    sendCommand('Right')
  }
  // Arrow Up
  if ( e.code == 'ArrowUp' ) {
    sendCommand('Up')
  }
  // Arrow Down
  if ( e.code == 'ArrowDown' ) {
    sendCommand('Down')
  }
  // Enter
  if ( e.code == 'Enter' ) {
    sendCommand('Select')
  }
  // Space
  if ( e.code == 'Space' ) {
    sendCommand('Play');
  }
  // Backspace
  if ( e.code == 'Backspace' ) {
    sendCommand('Back')
  }
  // Escape
  if ( e.code == 'Escape' ) {
    sendCommand('Home');
  }

}

function sendCommand(command) {
  var xhr = new XMLHttpRequest();
  var postAddress = 'http://' + rokus_ip + ':8060/keypress/' + command;
  xhr.open("POST", postAddress);
  xhr.send();
}
