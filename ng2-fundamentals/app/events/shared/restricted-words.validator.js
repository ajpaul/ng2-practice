"use strict";
//custom validator: returns null if valid, returns an error if invalid
function restrictedWords(words) {
    return function (control) {
        if (!words)
            return null; //if no words are passed in, no errors are found
        var invalidWords = words
            .map(function (w) { return control.value.includes(w) ? w : null; })
            .filter(function (w) { return w != null; });
        return invalidWords && invalidWords.length > 0
            ? { 'restrictedWords': invalidWords.join(', ') } //error object. key matches validator function name
            : null;
    };
}
exports.restrictedWords = restrictedWords;
//# sourceMappingURL=restricted-words.validator.js.map