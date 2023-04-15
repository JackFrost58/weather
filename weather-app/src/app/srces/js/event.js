import {changeBG, refreshData, setMeasure} from './helper';
import {speechFunc} from './speech';
import {showErrorMessage, removeElement} from './dom';

const townSearch = document.getElementById('townSearch');
const buttonsMeasure = document.querySelectorAll('.button-controls__measure');
const buttonTalk = document.getElementById('talk-button');
const buttonSearch = document.getElementById('buttonSearch');
const buttonRefresh = document.getElementById('button-refresh');
const selectLang = document.querySelector('select');

const switchMeasure = (() => {
  buttonsMeasure.forEach((item) => {
    item.addEventListener('click', (event) => {
      setMeasure(event.currentTarget.id);
    });
  });
})();

const refreshBG = (() => {
  buttonRefresh.addEventListener('click', async () => {
  changeBG(localStorage.getItem('coors'))
  })
})();

const searchCity = (() => {
  buttonSearch.addEventListener('click', () => {
  if (townSearch.value) {
    refreshData(townSearch.value);
  } else {
    showErrorMessage();
  }
   townSearch.value = '';
  })
})

buttonTalk.addEventListener('click', () => {
  speechFunc(buttonTalk)
});

selectLang.addEventListener('change', () => {
  if(selectLang.value !== localStorage.getItem('defaultLang')) {
  localStorage.setItem('defaultLang', selectLang.value);
  removeElement();
  refreshData(localStorage.getItem('city'));
  }
})

townSearch.addEventListener('keydown', (event) => {
  if (event.keyCode === 13) {
  if (townSearch.value) {
    refreshData(townSearch.value);
  } else {
    showErrorMessage();
  }
   townSearch.value = '';
  }
})
export{switchMeasure, refreshBG, searchCity};