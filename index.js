// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

/*es1
const autore = "Italo Calvino";
const titolo = "il Barone rampante";

const chiave = "CAlVINO";

function ricerca(a, t, c) {
  return a.concat(t).toLowerCase().includes(c.toLowerCase())

}

const ricercarrow = (a,t,c) => {
return a.concat(t).toLowerCase().includes(c.toLowerCase())
};

console.log(ricercarrow(autore,titolo,chiave));
*/
//es2

let archivio = [
  {autore: "bobo",
  titolo: "badalà"
  },
  {autore: "strano",
  titolo: "libro"
  },
  {autore: "gud",
  titolo: "libro"
  },
  {autore: "gugu",
  titolo: "badalquà"
  },
  {autore: "strano",
  titolo: "belllo"
  },
  {autore: "sivola",
  titolo: "altissimo"
  }
];

const tito = "belllo";

function risultato(ar,t) {
  const risultati = []
  ar.forEach(value => {if (value.titolo === t || value.autore === t) risultati.push("trovato '" + value.titolo + "'  scritto da: " + value.autore)});
  if (risultati.length == 1)
    return risultati;
  else if (risultati.length > 1)
    return "ci sono " + risultati.length + " risultati"
  else 
    return "non ci sono risultati"
}
console.log(risultato(archivio,tito))


