SNACK 1
Il Grande Gatsby ci ha chiesto di creare i segnaposto per il tavolo degli invitati alla sua mega festa vip.
Ci ha lasciato il nome del tavolo (“Tavolo Vip”) e la lista degli invitati in ordine di posto: `[ ‘Brad Pitt’, ‘Johnny Depp’, ‘Lady Gaga’, ‘Cristiano Ronaldo’, ‘Georgina Rodriguez’, ‘Chiara Ferragni’, ‘Fedez’, ‘George Clooney’, ‘Amal Clooney’, ‘Maneskin’]`
Ma la tipografia per stampare il tutto vuole che le mandiamo una lista di ospiti in cui ogni ospite sia un oggetto javascript che ha come attributi: nome del tavolo, nome dell’ospite e posto occupato.
Generiamo e stampiamo in console la lista per i segnaposto.

1. Creo una funzione che facilità la creazione dell'oggetto "Invitato"
2. Creo i vari invitati con la proprietà nome
3. Creo un array e gli assegno tutti gli invitati
4. Faccio un forEach su questo array e ad ogni iterazione, aggiungo le key tavolo e posto tranne per l'ultimo
5. Dentro il forEach creo la condizione se index è minore della lunghezza dell'array meno 1 faccio quello descritto al punto 4, altrimenti faccio un forEach sull'ultimo elemento dell'array che è un array di oggetti per aggiungere le key tavolo e posto
6. Stampo in console i dati
