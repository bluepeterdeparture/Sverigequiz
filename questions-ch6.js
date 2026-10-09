// Sverigequiz – kapitel 6
// Mediernas roll
// Källa: Sverige i fokus 2026-1, korrigerad 2026-08-10

(() => {
  const replacementChapters = new Set([6]);

  window.SVERIGEQUIZ_QUESTIONS =
    window.SVERIGEQUIZ_QUESTIONS.filter(
      q => !replacementChapters.has(q.chapter)
    );

  const chapterQuestions = [
    {
      id: "ch6-01",
      chapter: 6,
      category: "mediernas_roll",
      topic: "medier",
      difficulty: "easy",
      question: "Vad sprids genom medier enligt materialet?",
      options: [
        "Nyheter, kunskap och information",
        "Bara politiska beslut",
        "Bara reklam",
        "Bara underhållning"
      ],
      correctIndex: 0,
      explanationSv: "Genom medier sprids nyheter, kunskap och information som påverkar människor i samhället.",
      studyTitle: "Mediernas roll",
      studyText: "Medier kan vara allt från tidningar, film, radio och tv till internet och sociala medier. Där sprids nyheter, kunskap och information som påverkar människor i ett samhälle.",
      studyRemember: "Medier sprider nyheter, kunskap och information.",
      section: "Mediernas roll",
      sourcePage: 20,
      sourceVersion: "Sverige i fokus 2026-1, korrigerad 2026-08-10",
      active: true
    },
    {
      id: "ch6-02",
      chapter: 6,
      category: "mediernas_roll",
      topic: "fria_medier",
      difficulty: "easy",
      question: "Vad betyder det att medierna är fria i Sverige?",
      options: [
        "Staten kan inte bestämma eller påverka vad som sägs i medierna",
        "Staten bestämmer vilka nyheter som får publiceras",
        "Alla medier måste ägas av staten",
        "Bara journalister får uttrycka åsikter"
      ],
      correctIndex: 0,
      explanationSv: "I Sverige är medierna fria. Staten kan inte bestämma eller påverka vad som sägs i medierna.",
      studyTitle: "Fria medier",
      studyText: "I en demokrati som Sverige är medierna fria. Staten kan inte bestämma eller påverka vad som sägs i medierna.",
      studyRemember: "Staten bestämmer inte vad fria medier får säga.",
      section: "Fria medier",
      sourcePage: 20,
      sourceVersion: "Sverige i fokus 2026-1, korrigerad 2026-08-10",
      active: true
    },
    {
      id: "ch6-03",
      chapter: 6,
      category: "mediernas_roll",
      topic: "fria_medier",
      difficulty: "medium",
      question: "Vilka två grundlagar skyddar rätten att fritt säga vad vi tycker och sprida åsikter?",
      options: [
        "Tryckfrihetsförordningen och yttrandefrihetsgrundlagen",
        "Regeringsformen och successionsordningen",
        "Kommunallagen och vallagen",
        "Brottsbalken och regeringsformen"
      ],
      correctIndex: 0,
      explanationSv: "Tryckfrihetsförordningen och yttrandefrihetsgrundlagen skyddar dessa rättigheter.",
      studyTitle: "Grundlagsskydd för fria medier",
      studyText: "Tryckfrihetsförordningen och yttrandefrihetsgrundlagen skyddar rätten att fritt få säga det vi tycker och att sprida åsikter.",
      studyRemember: "Tryckfrihetsförordningen och yttrandefrihetsgrundlagen skyddar fria medier.",
      section: "Fria medier",
      sourcePage: 20,
      sourceVersion: "Sverige i fokus 2026-1, korrigerad 2026-08-10",
      active: true
    },
    {
      id: "ch6-04",
      chapter: 6,
      category: "mediernas_roll",
      topic: "mediernas_funktion",
      difficulty: "easy",
      question: "Vilken funktion har medierna i samhället enligt materialet?",
      options: [
        "De informerar om nyheter och ger människor möjlighet att diskutera samhället",
        "De bestämmer vilka lagar riksdagen ska anta",
        "De bestämmer hur domstolar ska döma",
        "De ersätter politiska partier"
      ],
      correctIndex: 0,
      explanationSv: "Medierna informerar om nyheter och fungerar som en plats där människor kan diskutera samhället.",
      studyTitle: "Mediernas funktion",
      studyText: "Medierna informerar om nyheter och fungerar som en plats där människor fritt kan diskutera samhället och vad som händer där. De är också viktiga för nöje och underhållning.",
      studyRemember: "Medier informerar och ger plats för samhällsdiskussion.",
      section: "Fria medier",
      sourcePage: 20,
      sourceVersion: "Sverige i fokus 2026-1, korrigerad 2026-08-10",
      active: true
    },
    {
      id: "ch6-05",
      chapter: 6,
      category: "mediernas_roll",
      topic: "offentlighetsprincipen",
      difficulty: "medium",
      question: "Varför är offentlighetsprincipen viktig för journalister?",
      options: [
        "Den underlättar granskningen av politiker och andra personer som har makt",
        "Den gör alla myndighetshandlingar hemliga",
        "Den ger journalister rätt att bestämma över myndigheter",
        "Den gör att journalister kan ändra myndigheters beslut"
      ],
      correctIndex: 0,
      explanationSv: "Offentlighetsprincipen underlättar journalisters granskning av personer som har makt.",
      studyTitle: "Offentlighetsprincipen",
      studyText: "Journalister ska kunna granska politiker och andra personer som har makt. Offentlighetsprincipen underlättar denna granskning.",
      studyRemember: "Offentlighetsprincipen hjälper journalister att granska makten.",
      section: "Fria medier",
      sourcePage: 20,
      sourceVersion: "Sverige i fokus 2026-1, korrigerad 2026-08-10",
      active: true
    },
    {
      id: "ch6-06",
      chapter: 6,
      category: "mediernas_roll",
      topic: "offentlighetsprincipen",
      difficulty: "easy",
      question: "Vem har rätt att ta del av allmänna handlingar från myndigheter om de inte är hemliga?",
      options: [
        "Vem som helst",
        "Bara journalister",
        "Bara svenska medborgare",
        "Bara personer som arbetar på myndigheten"
      ],
      correctIndex: 0,
      explanationSv: "Vem som helst har rätt att ta del av allmänna handlingar om de inte är hemliga.",
      studyTitle: "Allmänna handlingar",
      studyText: "Allmänna handlingar från myndigheter är offentliga. Vem som helst har rätt att ta del av dem om de inte är hemliga, alltså under sekretess.",
      studyRemember: "Allmänna handlingar är offentliga om de inte omfattas av sekretess.",
      section: "Fria medier",
      sourcePage: 20,
      sourceVersion: "Sverige i fokus 2026-1, korrigerad 2026-08-10",
      active: true
    },
    {
      id: "ch6-07",
      chapter: 6,
      category: "mediernas_roll",
      topic: "mediestod",
      difficulty: "medium",
      question: "Varför ger staten ekonomiskt stöd till nyhetsmedier och dagstidningar?",
      options: [
        "För att det är viktigt att det finns många olika medier som ger nyheter",
        "För att staten ska bestämma vilka nyheter som publiceras",
        "För att alla tidningar ska ägas av staten",
        "För att förbjuda reklam i tidningar"
      ],
      correctIndex: 0,
      explanationSv: "Staten ger ekonomiskt stöd eftersom det är viktigt att det finns många olika medier som ger nyheter.",
      studyTitle: "Många olika medier",
      studyText: "Det är viktigt att det finns många olika medier som ger oss nyheter. Staten ger därför ekonomiskt stöd till nyhetsmedier och dagstidningar.",
      studyRemember: "Stöd till nyhetsmedier ska bidra till att det finns många olika medier.",
      section: "Fria medier",
      sourcePage: 20,
      sourceVersion: "Sverige i fokus 2026-1, korrigerad 2026-08-10",
      active: true
    },
    {
      id: "ch6-08",
      chapter: 6,
      category: "mediernas_roll",
      topic: "meddelarfrihet",
      difficulty: "medium",
      question: "Vilken rätt har en person som lämnar uppgifter till tidningar, radio eller tv?",
      options: [
        "Att lämna uppgifterna utan att straffas för det och att vara anonym",
        "Att bestämma vad medierna måste publicera",
        "Att alltid få betalt för uppgifterna",
        "Att bestämma vem som ska vara ansvarig utgivare"
      ],
      correctIndex: 0,
      explanationSv: "En person har rätt att lämna uppgifter till medier utan att straffas för det och har också rätt att vara anonym.",
      studyTitle: "Lämna uppgifter till medier",
      studyText: "En person har rätt att lämna uppgifter till tidningar, radio och tv utan att straffas för det. Den som meddelar uppgifter till medier har också rätt att vara anonym.",
      studyRemember: "Man får lämna uppgifter till medier och har rätt att vara anonym.",
      section: "Fria medier",
      sourcePage: 20,
      sourceVersion: "Sverige i fokus 2026-1, korrigerad 2026-08-10",
      active: true
    },
    {
      id: "ch6-09",
      chapter: 6,
      category: "mediernas_roll",
      topic: "ansvarig_utgivare",
      difficulty: "easy",
      question: "Vem är juridiskt ansvarig för vad som publiceras i tidningar, radio och tv?",
      options: [
        "Den ansvariga utgivaren",
        "Statsministern",
        "Polisen",
        "Läsarna och tittarna"
      ],
      correctIndex: 0,
      explanationSv: "Tidningar, radio och tv har en ansvarig utgivare som är juridiskt ansvarig för vad som publiceras.",
      studyTitle: "Ansvarig utgivare",
      studyText: "Tidningar, radio och tv har en ansvarig utgivare som är juridiskt ansvarig för vad som publiceras. Utgivaren måste följa lagar som skyddar mot förtal och kränkningar.",
      studyRemember: "Ansvarig utgivare har det juridiska ansvaret.",
      section: "Fria medier",
      sourcePage: 20,
      sourceVersion: "Sverige i fokus 2026-1, korrigerad 2026-08-10",
      active: true
    },
    {
      id: "ch6-10",
      chapter: 6,
      category: "mediernas_roll",
      topic: "journalistik",
      difficulty: "medium",
      question: "Hur ska journalister kontrollera uppgifter?",
      options: [
        "Med flera oberoende och pålitliga källor",
        "Genom att alltid lita på den första uppgiften",
        "Genom att bara använda sociala medier",
        "Genom att fråga en enda källa"
      ],
      correctIndex: 0,
      explanationSv: "Journalister ska kontrollera uppgifter med flera oberoende källor och kontrollera att källorna är pålitliga.",
      studyTitle: "Kontroll av uppgifter",
      studyText: "Journalister ska kontrollera uppgifter med flera oberoende källor och kontrollera att källorna är pålitliga.",
      studyRemember: "Flera oberoende och pålitliga källor.",
      section: "Fria medier",
      sourcePage: 21,
      sourceVersion: "Sverige i fokus 2026-1, korrigerad 2026-08-10",
      active: true
    },
    {
      id: "ch6-11",
      chapter: 6,
      category: "mediernas_roll",
      topic: "kommersiella_medier",
      difficulty: "easy",
      question: "Hur kan kommersiella radio- och tv-kanaler få sina inkomster?",
      options: [
        "Genom reklam eller genom att människor betalar för en särskild tv-kanal",
        "Bara genom skatt",
        "Bara genom bidrag från kommunerna",
        "Genom böter"
      ],
      correctIndex: 0,
      explanationSv: "Kommersiella radio- och tv-kanaler kan få inkomster från reklam eller betalningar för särskilda tv-kanaler.",
      studyTitle: "Kommersiella medier",
      studyText: "Kommersiella radio- och tv-kanaler får inkomster genom att sälja reklamplats eller genom att människor betalar för att kunna se en särskild tv-kanal.",
      studyRemember: "Kommersiella medier kan finansieras med reklam och betalningar.",
      section: "Olika slags medier",
      sourcePage: 21,
      sourceVersion: "Sverige i fokus 2026-1, korrigerad 2026-08-10",
      active: true
    },
    {
      id: "ch6-12",
      chapter: 6,
      category: "mediernas_roll",
      topic: "privata_medier",
      difficulty: "medium",
      question: "Vem driver ofta medier som finansieras med reklam?",
      options: [
        "Privata företag",
        "Domstolarna",
        "Polisen",
        "Riksdagen"
      ],
      correctIndex: 0,
      explanationSv: "Medier som finansieras med reklam drivs ofta av privata företag.",
      studyTitle: "Privat- och reklamfinansierade medier",
      studyText: "Medier som finansieras med reklam drivs ofta av privata företag. Tidningar kan också få inkomster genom att sälja reklamplats.",
      studyRemember: "Reklamfinansierade medier drivs ofta av privata företag.",
      section: "Privat- och reklamfinansierade medier",
      sourcePage: 21,
      sourceVersion: "Sverige i fokus 2026-1, korrigerad 2026-08-10",
      active: true
    },
    {
      id: "ch6-13",
      chapter: 6,
      category: "mediernas_roll",
      topic: "public_service",
      difficulty: "easy",
      question: "Vilka tre medieföretag kallas public service i Sverige?",
      options: [
        "SR, SVT och UR",
        "SVT, TV4 och DN",
        "SR, TV4 och Aftonbladet",
        "UR, Expressen och SVT"
      ],
      correctIndex: 0,
      explanationSv: "Sveriges Radio, Sveriges Television och Utbildningsradion kallas public service.",
      studyTitle: "Public service",
      studyText: "Sveriges Radio (SR), Sveriges Television (SVT) och Utbildningsradion (UR) kallas public service.",
      studyRemember: "Public service = SR, SVT och UR.",
      section: "Public service",
      sourcePage: 21,
      sourceVersion: "Sverige i fokus 2026-1, korrigerad 2026-08-10",
      active: true
    },
    {
      id: "ch6-14",
      chapter: 6,
      category: "mediernas_roll",
      topic: "public_service",
      difficulty: "medium",
      question: "Hur ska public service förhålla sig till politiska och andra intressen?",
      options: [
        "De ska vara oberoende",
        "De ska stödja regeringen",
        "De ska stödja det största partiet",
        "De ska undvika samhällsfrågor"
      ],
      correctIndex: 0,
      explanationSv: "Public service-företagen ska vara oberoende av politiska och andra intressen.",
      studyTitle: "Oberoende public service",
      studyText: "Public service-företagen ska vara oberoende av politiska och andra intressen. De ska rapportera om samhället och låta olika åsikter komma till tals utan att välja sida.",
      studyRemember: "Public service ska vara oberoende och inte välja sida.",
      section: "Public service",
      sourcePage: 21,
      sourceVersion: "Sverige i fokus 2026-1, korrigerad 2026-08-10",
      active: true
    },
    {
      id: "ch6-15",
      chapter: 6,
      category: "mediernas_roll",
      topic: "public_service",
      difficulty: "easy",
      question: "Hur finansieras public service enligt materialet?",
      options: [
        "Genom en avgift som tas ut via skatten",
        "Genom reklam",
        "Genom medlemsavgifter",
        "Bara genom frivilliga gåvor"
      ],
      correctIndex: 0,
      explanationSv: "Public service finansieras genom en avgift som tas ut via skatten.",
      studyTitle: "Finansiering av public service",
      studyText: "Public service-företagen får inte tjäna pengar på reklam. De finansieras istället genom en avgift som tas ut via skatten.",
      studyRemember: "Public service finansieras via skatten, inte reklam.",
      section: "Public service",
      sourcePage: 21,
      sourceVersion: "Sverige i fokus 2026-1, korrigerad 2026-08-10",
      active: true
    },
    {
      id: "ch6-16",
      chapter: 6,
      category: "mediernas_roll",
      topic: "public_service",
      difficulty: "medium",
      question: "Vad är ett syfte med public service?",
      options: [
        "Att alla i landet ska ha tillgång till saklig information",
        "Att sälja så mycket reklam som möjligt",
        "Att bara sända underhållning",
        "Att bara människor i stora städer ska få nyheter"
      ],
      correctIndex: 0,
      explanationSv: "Syftet är att alla i landet ska ha tillgång till saklig information.",
      studyTitle: "Syftet med public service",
      studyText: "Syftet är att alla i landet ska ha tillgång till saklig information, oavsett var man bor eller hur mycket pengar man har.",
      studyRemember: "Alla ska kunna få saklig information.",
      section: "Public service",
      sourcePage: 21,
      sourceVersion: "Sverige i fokus 2026-1, korrigerad 2026-08-10",
      active: true
    },
    {
      id: "ch6-17",
      chapter: 6,
      category: "mediernas_roll",
      topic: "public_service",
      difficulty: "medium",
      question: "Vilket innehåll ska public service bland annat erbjuda?",
      options: [
        "Nyheter, sport, underhållning och kultur",
        "Bara politiska debatter",
        "Bara reklam",
        "Bara nyheter"
      ],
      correctIndex: 0,
      explanationSv: "Public service ska ha ett brett utbud med bland annat nyheter, sport, underhållning och kultur.",
      studyTitle: "Public service-utbud",
      studyText: "Public service ska erbjuda många olika typer av program och ha ett brett utbud med nyheter, sport, underhållning och kultur.",
      studyRemember: "Public service ska ha ett brett programutbud.",
      section: "Public service",
      sourcePage: 21,
      sourceVersion: "Sverige i fokus 2026-1, korrigerad 2026-08-10",
      active: true
    },
    {
      id: "ch6-18",
      chapter: 6,
      category: "mediernas_roll",
      topic: "sociala_medier",
      difficulty: "easy",
      question: "Vad skiljer innehåll på webben och i sociala medier från innehåll i andra medier enligt materialet?",
      options: [
        "Vem som helst kan skapa innehåll och det kontrolleras inte på samma sätt",
        "Allt innehåll godkänns först av staten",
        "Bara journalister får skapa innehåll",
        "Allt innehåll måste komma från public service"
      ],
      correctIndex: 0,
      explanationSv: "Vem som helst kan skapa innehåll på webben och i sociala medier, och det kontrolleras inte på samma sätt som innehåll i andra medier.",
      studyTitle: "Webb och sociala medier",
      studyText: "Vem som helst kan skapa innehåll på webben och i sociala medier. Innehållet som sprids där kontrolleras inte på samma sätt som innehållet i andra medier.",
      studyRemember: "Vem som helst kan skapa innehåll på webben och i sociala medier.",
      section: "Webb och sociala medier",
      sourcePage: 21,
      sourceVersion: "Sverige i fokus 2026-1, korrigerad 2026-08-10",
      active: true
    },
    {
      id: "ch6-19",
      chapter: 6,
      category: "mediernas_roll",
      topic: "kallkritik",
      difficulty: "easy",
      question: "Vad betyder det att vara källkritisk?",
      options: [
        "Att ifrågasätta och kontrollera om information är korrekt",
        "Att tro på allt man läser",
        "Att bara använda sociala medier",
        "Att aldrig läsa nyheter"
      ],
      correctIndex: 0,
      explanationSv: "Att vara källkritisk innebär att ifrågasätta och kontrollera om information är korrekt.",
      studyTitle: "Källkritik",
      studyText: "Att kontrollera och granska information kallas att vara källkritisk. Det innebär att ifrågasätta och kontrollera om det man läser, ser eller hör är korrekt.",
      studyRemember: "Källkritik = kontrollera och ifrågasätta information.",
      section: "Källkritik",
      sourcePage: 21,
      sourceVersion: "Sverige i fokus 2026-1, korrigerad 2026-08-10",
      active: true
    },
    {
      id: "ch6-20",
      chapter: 6,
      category: "mediernas_roll",
      topic: "kallkritik",
      difficulty: "medium",
      question: "Varför är det viktigt att vara källkritisk?",
      options: [
        "Falska uppgifter kan spridas snabbt och påverka människors åsikter",
        "All information på internet är förbjuden",
        "Bara böcker innehåller korrekt information",
        "Myndigheter bestämmer vad människor får läsa"
      ],
      correctIndex: 0,
      explanationSv: "Falska uppgifter kan spridas snabbt och påverka människors åsikter.",
      studyTitle: "Varför källkritik behövs",
      studyText: "Allt som publiceras i medierna är inte alltid korrekt. Falska uppgifter kan spridas snabbt och påverka människors åsikter.",
      studyRemember: "Falsk information kan spridas snabbt.",
      section: "Källkritik",
      sourcePage: 21,
      sourceVersion: "Sverige i fokus 2026-1, korrigerad 2026-08-10",
      active: true
    }
  ];

  window.SVERIGEQUIZ_QUESTIONS.push(...chapterQuestions);
})();
