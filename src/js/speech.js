import{refreshData} from './helper';

const SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;

function speechFunc(buttonTalk) {
  buttonTalk.disabled = true;
  const recognition = new SpeechRecognition();
  
  recognition.interimResults = true;
  
  recognition.addEventListener("result", e => {
    const transcript = Array.from(e.results)
      .map(result => result[0])
      .map(result => result.transcript)
      .join('');
    
      document.getElementById('townSearch').value = transcript;
  })

  recognition.start();

  recognition.onspeechend = async function() {
    recognition.stop();
    buttonTalk.disabled = false;
    buttonTalk.style.backgroundImage = `url(./img/micro.svg)`;
    if (document.getElementById('townSearch').value !== '') {
      refreshData(document.getElementById('townSearch').value);
    }
  }
}

export {speechFunc};