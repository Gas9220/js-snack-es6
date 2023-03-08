SNACK 2
Abbiamo un elenco degli studenti di una facoltà, identificati da _id_, _Nome_ e _somma totale_ dei loro voti di esame...
1. Per preparare l’aula di un nuovo corso, dobbiamo stampare le targhe col nome degli studenti: creare una lista contenente il loro nome tutto in maiuscolo
ES (Marco della Rovere => MARCO DELLA ROVERE);
2. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70
3. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70 e id superiore a 120

1
1. Creo una funzione che facilita la creazione di uno studente
2. Creo gli oggetti studenti
3. Li appendo ad un array
4. Uso il metodo .map per attraversare l'array di studenti e scrivere in maiuscolo la proprietà name

2
1. Uso .filter per selezionare soltanto gli studenti che hanno grade superiore a 70

3
// Soluzione 1
1. Uso l'array filtrato creato al punto due e uso un .filter per selezionare solo quelli con id > a 120
// Soluzione 2
1. Creo una funzione che verifica se grade > 70 e id > 120 e ritorno true altrimenti ritorno false
2. Applico la funzione creata al filter sull'array originale