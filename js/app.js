eventListeners();

function eventListeners(){

    document.getElementById('translate-form').addEventListener('submit',translateWord);

    //  select optionar secilende addeventlisnerlar brazurun desteyine gore ishlemeye bilir,
    //  onun ucun birbasha onchange funksiyasindan istifade edildi
    document.getElementById('language').onchange = function(){
        ui.changeUI();
    }
}


const translate = new Translate(document.getElementById('word').value,document.getElementById('language').value);
const ui = new UI();


function translateWord(e){
    translate.changeParametrs(document.getElementById('word').value, document.getElementById('language').value);
    translate.translateWord(function(err,response){
        if(err === null){
            ui.displayTranslate(response);
        }else {
            console.log(err)
        }
    });
    e.preventDefault();
}