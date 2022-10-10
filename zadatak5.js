var tekst = 'ima samo jedna zelja';

function camelcase() {
    return tekst.replace(/(?:^\w|[A-Z]|\b\w)/g, function(word, index) {
      return index === 0 ? word.toLowerCase() : word.toUpperCase();
    }).replace(/\s+/g, '');
  }

console.log(camelcase(tekst));