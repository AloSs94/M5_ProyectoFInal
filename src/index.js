import './sass/style.scss';
import './js/efectos.js';
import './js/restaurant';

if('serviceWorker' in navigator){
    window.addEventListener('load',()=>{
        navigator.serviceWorker.register('./service-worker.js').then(registration=>{
            console.log("SW registrado", registration);
        }).catch(error =>{
            console.log("SW no registrado",  error);
        });
    });
}
