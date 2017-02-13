import { FormControl } from '@angular/forms'

//custom validator: returns null if valid, returns an error if invalid
export function restrictedWords(words) {

    return (control: FormControl): {[key: string]: any} => //this means it will return any object
    {   
        if(!words) return null //if no words are passed in, no errors are found

        var invalidWords = words
            .map(w => control.value.includes(w) ? w : null)
            .filter(w => w != null)

        return invalidWords && invalidWords.length > 0
            ? {'restrictedWords': invalidWords.join(', ')} //error object. key matches validator function name
            : null
    }
}