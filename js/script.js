/* CONSEGNA

Inseriamo in pagina l’immagine della lampadina spenta che trovate in allegato e accanto un bottone con la scritta “Accendi”.

Al click del bottone, la lampadina dovrà accendersi (dovremo quindi utilizzare l’immagine della lampadina accesa, sempre in allegato)

BONUS

Facciamo accendi e spegni:

Al primo click la lampadina si accende e nel bottone compare la scritta "Spegni"
Al secondo click la lampadina si spegne e nel bottone compare la scritta "Accendi"
E così via...
Rendete il tutto un po più bello e creativo
/* TODO
 *
 * X creare pagina index.html
 * X inserire img [lightbulb]
 * X inserire button [click-btn]
 * X inserire script js
 * - quando clicchiamo l'elemento [click-btn]
 * - sostituire l'immagine di [lightbulb]
 */
//* seleziona il primo elemento del dom che corrisponde ad un selettore
const lightbulb = document.querySelector("#lightbulb");
const clickBtn = document.querySelector("#click-btn");

clickBtn.addEventListener('click', function() {
    lightbulb.src = "./img/yellow_lamp.png";
});






