# A.C.U Gulliver - Sito statico Elezioni universitarie 2020

<p align="center">
   <img src="https://avatars2.githubusercontent.com/u/54901942?s=200&v=4" alt="Gulliver Logo"/>
</p>

<a name="Introduction"></a>

Questa repository contiene il codice relativo al sito web statico sviluppato per le **Elezioni 2020** dell'Università
Politecnica delle Marche (UnivPM). <br>
Questo progetto utilizza [Yarn](https://yarnpkg.com/) come gestore delle dipendenze, per cui, tutti i comandi
relativi alle dipendenze saranno effettuati con Yarn. <br>
È comunque possibile utilizzare NPM dando questo comando:

```
rm -f yarn.lock
npm update
```


<a name="Setup"></a>
## Setup

È necessario installare le dipendenze attraverso questo comando:

```
yarn install
```

### Compilare i components

È possibile compilare i components in tre modalita: dev, watch, prod.

#### Dev

La modalità dev (o development) genera una versione di sviluppo dei vari assets.
In questa modalità, vue restituisce warning di sviluppo e l'output non è minificato.

```
yarn run dev
```

**ATTENZIONE!**

Per ogni modifica (anche minima) ad uno dei component *é necessario* rilanciare il comando

#### Watch

La modalità watch è identica alla modalità dev. L'unica differenza risiede nel fatto che una volta lanciato il comando, non occorre rilanciarlo ad ogni singola modifica.

```
yarn run watch
```

#### Prod

La modalità prod (o production) genera una versione di produzione dei vari assets.
In questa modalità, vue non restituisce warning di sviluppo e l'output  è minificato.

```
yarn run prod
```

### Lanciare il server

All'interno di questa repository è incluso un web-server. Il suo utilizzo è totalmente opzionale

```
yarn run serve (lancia il server http)
```

## Struttura

Il progetto è strutturato nelle seguenti directory

```
├───assets
├───images
├───build
└──index.html
```

Le cartelle `assets` e `images` contengono tutti gli assets del sito (fogli css, script js). Sono stati lasciati **non**
minificati, perchè il processo di minificazione avviene tramite webpack.

La cartella `build` contiene tutti gli assets minificati e/o compilati, che sono direttamente richiamati dalla pagina 
index.html


<a name="Contributors"></a>

## Contributing

Questo codice è sotto licenza MIT, il che significa che puoi scaricarlo e riutilizzarlo a tuo piacere. 
Sentiti libero di migliorarlo e di inviarci i tuoi cambiamenti attraverso una Pull Request. Saremo felici di validare
ed accettare le tue migliorie all'interno del nostro progetto.

### Come posso contribuire?

Non sai da dove iniziare? Guarda le [Issues](https://github.com/acu-gulliver/elezioni-2020/issues/) e prova a correggere quelle aperte.

Hai in mente una feature da introdurre nel nostro codice? Fai un fork di questo progetto e sottoponici la tua feature.

### Developers

<table>
  <tbody>
     <tr>
        <td align="center" valign="top">
            <img width="125" height="125" src="https://github.com/andreacivita.png?s=150">
            <br>
            <br>
            <strong>Andrea Civita</strong>
            <br>
            <a href="https://github.com/andreacivita">@andreacivita</a>
            <br>
        </td>
	  </tr>
  </tbody>
</table>


## License

[MIT](https://github.com/acu-gulliver/elezioni-2020/blob/master/LICENSE) © A.C.U Gulliver