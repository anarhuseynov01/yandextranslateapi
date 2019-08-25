function Translate(word,language){
    this.apikey = 'your api key';
    this.word = word;
    this.language = language;


    this.xhr = new XMLHttpRequest();
}

Translate.prototype.translateWord = function(callback){

    if(this.word == ""){
        console.error('What will you thinking happen?:)');
    }else{
        const endpoint =
            `https://translate.yandex.net/api/v1.5/tr.json/translate?lang=az-${this.language}&key=${this.apikey}&text=${this.word}`;


        this.xhr.open("GET", endpoint);


        var self = this;

        this.xhr.onload = function () {
            if (self.xhr.status === 200) {
                const json = JSON.parse(self.xhr.responseText);
                const text = json.text[0];
                callback(null, text);
            } else {
                callback("Error defined", null);
            }
        }

        this.xhr.send()
    }

    

}



Translate.prototype.changeParametrs = function(newWord,newLanguage){
    this.word = newWord;
    this.language = newLanguage;
}