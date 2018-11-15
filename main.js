// Chiedi all’utente il cognome, inseriscilo in un
// array con altri cognomi e stampa la lista
// ordinata alfabeticamente. Scrivi a che
// posizione della lista il nuovo utente si trova

// chiedi all'utente il cognome

var cognome = prompt('inserisci il cognome')

// crea una lista di cognomi

var lista_cognomi = ['Verdi', 'Garibaldi', 'Mazzini', 'Nicolaci', 'Rossi', 'Russo',	'Ferrari', 'Esposito', 'Bianchi', 'Romano', 'Colombo', 'Ricci', 'Marino', 'Greco', 'Bruno', 'Parisi'];

// inserisci il cognome nella lista

lista_cognomi.push(cognome);

// mettere la lista in ordine alfabetico

lista_cognomi.sort()

console.log(lista_cognomi);

// scrivere a che posizione della lista si trova il cognome

var posizione = lista_cognomi.indexOf(cognome);
console.log(posizione + 1);
document.getElementById('posizione_n').innerHTML = posizione + 1;
