const question = ["Quale materia scolastica ti appassiona di più?",
    "Cosa ti piace di più fare in un progetto scolastico?",
    "Quale di questi lavori ti attrae di più?",
    "Come affronti una sfida complessa?",
    "Quale attività preferisci tra queste?",
    "Qual è il tuo approccio a un problema pratico?",
    "Quale film o documentario ti interessa di più?",
    "Quale di queste abilità ti piacerebbe sviluppare?",
    "Come descrivi la tua creatività?",
    "Quale di questi strumenti preferisci usare?",
    "Quale ambiente di lavoro ti attira di più?",
    "Qual è il tuo approccio al futuro?",
    "Quale di queste attività extra-scolastiche ti interessa di più?",
    "Quale tipo di lettura ti attira di più?",
    "Come ti piace affrontare un argomento nuovo?",
    "Quale di questi eventi vorresti frequentare?",
    "Cosa ti emoziona di più nel raggiungere un obiettivo?",
    "Quale di queste situazioni ti stimola di più?",
    "Che tipo di gioco o attività preferisci?",
    "Che tipo di museo preferisci visitare?",
    "Come ti immagini il tuo contributo alla società?",
    "Quale ambito di innovazione ti incuriosisce di più?",
    "Quale tipo di documentario preferisci guardare?",
    "Cosa ti motiva di più nello studio?",
    "Quale tipo di libro preferisci scegliere in libreria?"
]

const tecnico = [
    "Matematica o Informatica",
    "Occuparmi di calcoli e analisi tecniche",
    "Ingegnere o programmatore",
    "Analizzando i dettagli tecnici e logici",
    "Costruire o programmare qualcosa di utile",
    "Trovo una soluzione rapida e funzionale",
    "Quello che parla di innovazione tecnologica",
    "Programmazione o robotica",
    "Si manifesta nella risoluzione di problemi tecnici",
    "Computer o attrezzi da lavoro",
    "Un ufficio tecnologico o un laboratorio tecnico",
    "Creare soluzioni innovative e tecnologiche",
    "Partecipare a un club di robotica",
    "Manuali tecnici o libri di ingegneria",
    "Attraverso schemi e processi logici",
    "Una fiera tecnologica o di elettronica",
    "Saperlo utile e ben funzionante",
    "Lavorare con strumenti tecnologici avanzati",
    "Giochi di strategia o simulazioni tecniche",
    "Un museo di scienza e tecnologia",
    "Creando tecnologie che migliorano la vita",
    "Intelligenza artificiale o ingegneria",
    "Su grandi invenzioni o tecnologie future",
    "Capire come funzionano le cose",
    "Un manuale pratico o un libro di tecnologia"
  ];
  
  const umanistico = [
    "Letteratura o Lingue straniere",
    "Scrivere testi o interpretare brani",
    "Giornalista o scrittore",
    "Cercando di comprenderla dal punto di vista umano",
    "Scrivere un saggio o un articolo",
    "Cerco di capire le implicazioni sociali",
    "Quello che racconta storie di persone e società",
    "Scrivere in modo persuasivo o creativo",
    "Si riflette nella scrittura e nell'uso delle parole",
    "Penna e quaderno",
    "Un'aula scolastica o una redazione",
    "Influenzare la società attraverso la comunicazione",
    "Collaborare con un giornalino scolastico",
    "Romanzi o saggi",
    "Raccontando la sua storia o il suo significato",
    "Una conferenza di storytelling o comunicazione",
    "Comunicarlo in modo efficace e coinvolgente",
    "Discutere di idee e valori con altre persone",
    "Giochi di ruolo basati su narrazione",
    "Un museo letterario o etnografico",
    "Raccontando storie o trasmettendo conoscenze",
    "Nuove forme di narrazione o comunicazione",
    "Sulle vite di personaggi famosi e scrittori",
    "Scoprire nuove prospettive culturali",
    "Un romanzo o una raccolta di poesie"
  ];
  
  const artistico = [
    "Arte o Design",
    "Progettare l'aspetto estetico o creare contenuti visivi",
    "Artista o designer grafico",
    "Trovando un modo creativo per superarla",
    "Creare un dipinto o una scultura",
    "Penso a una soluzione originale e visivamente accattivante",
    "Quello che esplora la creatività visiva",
    "Disegnare o creare arte digitale",
    "È il mio punto di forza, specialmente nelle arti visive",
    "Pennelli o software di grafica",
    "Uno studio d'arte o di design",
    "Esprimere idee attraverso l'arte",
    "Lavorare su un progetto artistico",
    "Libri di design o fotografia",
    "Visualizzandolo con immagini o creazioni artistiche",
    "Una mostra d’arte o di fotografia",
    "Vederlo rappresentato in modo creativo e originale",
    "Creare un’opera o un progetto visivo",
    "Attività che richiedono creatività artistica",
    "Una galleria d’arte contemporanea",
    "Ispirando gli altri con creazioni artistiche",
    "Nuove tecniche artistiche o design innovativo",
    "Sull’arte moderna o la fotografia",
    "Esprimere idee in modo creativo",
    "Un libro illustrato o un testo di grafica",
  ];
  
  const scientifico = [
    "Scienze naturali o Chimica",
    "Analizzare dati o condurre esperimenti",
    "Ricercatore scientifico o medico",
    "Basandomi su dati e fatti concreti",
    "Fare un esperimento di laboratorio",
    "Mi baso su prove ed evidenze",
    "Quello che spiega fenomeni naturali o scientifici",
    "Analizzare dati o condurre ricerche scientifiche",
    "È legata alla scoperta di nuove conoscenze",
    "Microscopio o calcolatrice scientifica",
    "Un laboratorio scientifico o medico",
    "Fare scoperte utili per il progresso umano",
    "Fare parte di un laboratorio scientifico",
    "Riviste scientifiche o articoli di ricerca",
    "Analizzandolo con dati e osservazioni",
    "Un convegno scientifico o medico",
    "Dimostrare che è sostenuto da prove concrete",
    "Esplorare il funzionamento della natura",
    "Esperimenti o giochi scientifici",
    "Un museo di storia naturale o medicina",
    "Scoprendo nuove soluzioni per problemi globali",
    "Scoperte scientifiche o avanzamenti medici",
    "Su scoperte scientifiche o fenomeni naturali",
    "Trovare risposte concrete attraverso la ricerca",
    "Un libro di divulgazione scientifica ",
  ];
  
  const classico = [
    "Storia o Latino/Greco",
    "Fare ricerche su fonti antiche o storiche",
    "Storico o archeologo",
    "Studiandola in profondità e facendo connessioni con il passato",
    "Tradurre un testo antico",
    "Lo analizzo partendo dalle sue radici storiche",
    "Quello che tratta eventi storici o classici",
    "Studiare lingue antiche o interpretare testi storici",
    "Si esprime nell'analisi di testi o concetti complessi",
    "Libri antichi e documenti",
    "Una biblioteca o un museo",
    "Conservare e valorizzare il passato",
    "Unirsi a un gruppo di studi classici",
    "Testi classici o filosofici",
    "Collegandolo a esempi storici o letterari",
    "Una rievocazione storica o un convegno accademico",
    "Scoprire che si collega a conoscenze profonde e antiche",
    "Analizzare un testo antico o filosofico",
    "Puzzle storici o enigmi legati alla cultura classica",
    "Un museo archeologico o classico",
    "Conservando e interpretando il patrimonio storico-culturale",
    "Ricostruzioni storiche o interpretazioni classiche",
    "Su civiltà antiche o eventi storici",
    "Approfondire il passato per capire il presente",
    "Un classico greco o latino",
  ];

    let i = 0;
    let puntiTecnico = 0;
    let puntiArtistico = 0;
    let puntiScientifico = 0;
    let puntiClassico = 0;
    let puntiUmanistico = 0;

    function punteggio(x){
        switch (x) {
            case 1: {
                puntiTecnico++;
                break;
            }
            case 2: {
                puntiUmanistico++;
                break;
            }
            case 3: {
                puntiArtistico++;
                break;
            }
            case 4: {
                puntiScientifico++;
                break;
            }
            case 5: {
                puntiClassico++;
                break;
            }
        }
        
        i++;
        
        if (i < question.length) {
            document.getElementById("questions").innerHTML = question[i];
            document.getElementById("tecnico").innerHTML = tecnico[i];
            document.getElementById("umanistico").innerHTML = umanistico[i];
            document.getElementById("artistico").innerHTML = artistico[i];
            document.getElementById("scientifico").innerHTML = scientifico[i];
            document.getElementById("classico").innerHTML = classico[i];
        } else {
            let userProfile = [puntiTecnico, puntiUmanistico, puntiArtistico, puntiScientifico, puntiClassico];
            
            let facoltaAbbinata = kNN(userProfile, 1);
            
            // Reindirizza a un'altra pagina HTML con il risultato
            window.location.href = "risultato.html?facolta=" + encodeURIComponent(facoltaAbbinata + 1);
        }
    }


    const facolta = [
        [8, 1, 0, 4, 0],  // Ingegneria Informatica, Politecnico di Bari
        [4, 0, 0, 9, 0],  // Architettura, Politecnico di Bari
        [5, 0, 0, 9, 0],  // Design, Politecnico di Bari
        [6, 0, 0, 7, 0],  // Scienze Umane e Sociali, Università degli Studi di Bari "Aldo Moro"
        [6, 0, 0, 8, 0],  // Scienze Economiche e Giuridiche, Università degli Studi di Bari "Aldo Moro"
        [7, 0, 0, 9, 0],  // Ingegneria, Università degli Studi di Bari "Aldo Moro"
        [5, 0, 0, 6, 0],  // Medicina e Professioni Sanitarie, Università degli Studi di Bari "Aldo Moro"
        [9, 1, 4, 1, 0],  // Scienze della Formazione, Università degli Studi di Bari "Aldo Moro"
        [9, 1, 4, 2, 0],  // Ingegneria, Sapienza Università di Roma
        [0, 8, 4, 1, 9],  // Medicina e Professioni Sanitarie, Sapienza Università di Roma
        [0, 8, 4, 2, 9],  // Economia e Giurisprudenza, Sapienza Università di Roma
        [0, 7, 4, 3, 10], // Scienze Umane e Sociali, Sapienza Università di Roma
        [0, 5, 2, 4, 13], // Scienze economiche e statistiche
        [0, 5, 3, 3, 12]  // Scienze politiche e sociali
    ];


      
      function distanzaEuclidea(vec1, vec2) {
        let somma = 0;
        for (let i = 0; i < vec1.length; i++) {
          somma += Math.pow(vec1[i] - vec2[i], 2);
        }
        return Math.sqrt(somma);
      }
      
      function kNN(userProfile, k = 1) {
        let distanze = [];
        
        // Calcoliamo la distanza tra il profilo dell'utente e ogni facoltà
        for (let i = 0; i < facolta.length; i++) {
          const dist = distanzaEuclidea(userProfile, facolta[i]);
          distanze.push({ index: i, distanza: dist });
        }
        
        // Ordinare le facoltà in base alla distanza crescente
        distanze.sort((a, b) => a.distanza - b.distanza);
        
        // Selezioniamo le K facoltà più vicine
        const kFacolta = distanze.slice(0, k);
        
        // Calcoliamo la facoltà più vicina (la facoltà con la distanza minima)
        const votoFacolta = kFacolta.map(item => item.index);
        const facoltaPiùVicina = votoFacolta[0]; // Restituire la facoltà con la distanza minore
        
        return facoltaPiùVicina;
      }
      
      // Esempio di utilizzo:

      let facoltaAbbinata = kNN(risposteUtente, 1);
      

      
    