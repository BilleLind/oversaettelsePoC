

 //primære methode som kalder de andre
document.addEventListener('DOMContentLoaded', () => { 
    let lang =document.documentElement.lang; // skaffer lang
    brugStrings(lang);

});
function brugStrings(lang) {
    document.querySelectorAll('html [data-key]').forEach(element => {
        let key = element.getAttribute('data-key');
        if(key) {
            let temp = element.textContent;
            element.textContent = langdata.languages[lang].strings[key];
            element.textContent += temp
        }
    });
}