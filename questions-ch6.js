// Sverigequiz – kapitel 6
// Mediernas roll
// Källa: Sverige i fokus 2026-1, korrigerad 2026-08-10

(() => {
  const chapter6Questions = [
    {
      id: "ch6-001",
      category: "mediernas_roll",
      topic: "fria_medier",
      difficulty: "easy",
      question: "Vad betyder det att medierna är fria i Sverige?",
      options: [
        "Staten bestämmer vilka nyheter som får publiceras",
        "Staten kan inte bestämma eller påverka vad som sägs i medierna",
        "Bara journalister får uttrycka åsikter",
        "Alla medier måste ägas av staten"
      ],
      correctIndex: 1,
      explanationSv: "I Sverige är medierna fria. Staten kan inte bestämma eller påverka vad som sägs i medierna.",
      chapter: 6,
      section: "Fria medier",
      sourcePage: 20,
      studyText: "I en demokrati som Sverige är medierna fria. Staten kan inte bestämma eller påverka vad som sägs i medierna.",
      sourceVersion: "Sverige i fokus 2026-1, korrigerad 2026-08-10",
      active: true
    },
    {
      id: "ch6-002",
      category: "mediernas_roll",
      topic: "fria_medier",
      difficulty: "medium",
      question: "Vilka två grundlagar skyddar rätten att fritt säga vad vi tycker och sprida åsikter?",
      options: [
        "Regeringsformen och successionsordningen",
        "Tryckfrihetsförordningen och yttrandefrihetsgrundlagen",
        "Kommunallagen och vallagen",
        "Brottsbalken och regeringsformen"
      ],
      correctIndex: 1,
      explanationSv: "Tryckfrihetsförordningen och yttrandefrihetsgrundlagen skyddar rätten att fritt säga vad vi tycker och sprida åsikter.",
      chapter: 6,
      section: "Fria medier",
      sourcePage: 20,
      studyText: "Grundlagarna tryckfrihetsförordningen och yttrandefrihetsgrundlagen skyddar rätten att fritt få säga det vi tycker och att sprida åsikter.",
      sourceVersion: "Sverige i fokus 2026-1, korrigerad 2026-08-10",
      active: true
    },
    {
      id: "ch6-003",
      category: "mediernas_roll",
      topic: "offentlighetsprincipen",
      difficulty: "medium",
      question: "Varför är offentlighetsprincipen viktig för journalister?",
      options: [
        "Den underlättar deras granskning av personer som har makt",
        "Den ger journalister rätt att bestämma över myndigheter",
        "Den gör alla handlingar hemliga",
        "Den förbjuder myndigheter att använda e-post"
      ],
      correctIndex: 0,
      explanationSv: "Offentlighetsprincipen underlättar journalisters granskning av politiker och andra personer som har makt.",
      chapter: 6,
      section: "Fria medier",
      sourcePage: 20,
      studyText: "Journalisterna ska kunna granska politiker och andra personer som har makt. Därför finns offentlighetsprincipen som underlättar denna granskning.",
      sourceVersion: "Sverige i fokus 2026-1, korrigerad 2026-08-10",
      active: true
    },
    {
      id: "ch6-004",
      category: "mediernas_roll",
      topic: "offentlighetsprincipen",
      difficulty: "easy",
      question: "Vem har rätt att ta del av allmänna handlingar från myndigheter?",
      options: [
        "Bara journalister",
        "Bara svenska medborgare",
        "Vem som helst, om handlingarna inte är hemliga",
        "Bara personer som arbetar på myndigheten"
      ],
      correctIndex: 2,
      explanationSv: "Vem som helst har rätt att ta del av allmänna handlingar om de inte är hemliga, alltså under sekretess.",
      chapter: 6,
      section: "Fria medier",
      sourcePage: 20,
      studyText: "Allmänna handlingar från myndigheter är offentliga. Vem som helst har rätt att ta del av dem om de inte är hemliga (under sekretess).",
      sourceVersion: "Sverige i fokus 2026-1, korrigerad 2026-08-10",
      active: true
    },
    {
      id: "ch6-005",
      category: "mediernas_roll",
      topic: "fria_medier",
      difficulty: "easy",
      question: "Vilken rätt har den som lämnar uppgifter till medier?",
      options: [
        "Rätt att alltid få betalt",
        "Rätt att vara anonym",
        "Rätt att bestämma vad tidningen ska skriva",
        "Rätt att stoppa andra nyheter"
      ],
      correctIndex: 1,
      explanationSv: "Den som meddelar uppgifter till medier har rätt att vara anonym.",
      chapter: 6,
      section: "Fria medier",
      sourcePage: 20,
      studyText: "En person har rätt att lämna uppgifter till tidningar, radio och tv utan att straffas för det. Den som meddelar uppgifter till media har också rätt att vara anonym.",
      sourceVersion: "Sverige i fokus 2026-1, korrigerad 2026-08-10",
      active: true
    },
    {
      id: "ch6-006",
      category: "mediernas_roll",
      topic: "ansvarig_utgivare",
      difficulty: "easy",
      question: "Vem är juridiskt ansvarig för vad som publiceras i tidningar, radio och tv?",
      options: [
        "Statsministern",
        "Polisen",
        "Den ansvariga utgivaren",
        "Alla läsare och tittare"
      ],
      correctIndex: 2,
      explanationSv: "Tidningar, radio och tv har en ansvarig utgivare som är juridiskt ansvarig för vad som publiceras.",
      chapter: 6,
      section: "Fria medier",
      sourcePage: 20,
      studyText: "Tidningar, radio och tv har en ansvarig utgivare som är juridiskt ansvarig för vad som publiceras.",
      sourceVersion: "Sverige i fokus 2026-1, korrigerad 2026-08-10",
      active: true
    },
    {
      id: "ch6-007",
      category: "mediernas_roll",
      topic: "journalistik",
      difficulty: "medium",
      question: "Hur ska journalister kontrollera uppgifter?",
      options: [
        "Med flera oberoende och pålitliga källor",
        "Genom att bara använda sociala medier",
        "Genom att fråga en enda person",
        "Genom att alltid lita på den första uppgiften"
      ],
      correctIndex: 0,
      explanationSv: "Journalister ska kontrollera uppgifter med flera oberoende källor och kontrollera att källorna är pålitliga.",
      chapter: 6,
      section: "Fria medier",
      sourcePage: 21,
      studyText: "Journalister ska kontrollera uppgifter med flera oberoende källor och kontrollera att källorna är pålitliga.",
      sourceVersion: "Sverige i fokus 2026-1, korrigerad 2026-08-10",
      active: true
    },
    {
      id: "ch6-008",
      category: "mediernas_roll",
      topic: "olika_medier",
      difficulty: "easy",
      question: "Hur kan kommersiella radio- och tv-kanaler få inkomster?",
      options: [
        "Genom reklam eller genom att människor betalar för en särskild tv-kanal",
        "Bara genom skatt",
        "Bara genom bidrag från kommunerna",
        "Genom böter"
      ],
      correctIndex: 0,
      explanationSv: "Kommersiella radio- och tv-kanaler kan få inkomster från reklam eller genom att människor betalar för en särskild tv-kanal.",
      chapter: 6,
      section: "Olika slags medier",
      sourcePage: 21,
      studyText: "Kommersiella radio- och tv-kanaler får sina inkomster från att sälja reklamplats eller genom att människor betalar för att kunna se en särskild tv-kanal.",
      sourceVersion: "Sverige i fokus 2026-1, korrigerad 2026-08-10",
      active: true
    },
    {
      id: "ch6-009",
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
      explanationSv: "Sveriges Radio (SR), Sveriges Television (SVT) och Utbildningsradion (UR) kallas public service.",
      chapter: 6,
      section: "Public service",
      sourcePage: 21,
      studyText: "Sveriges Radio (SR), Sveriges Television (SVT) och Utbildningsradion (UR) kallas för public service.",
      sourceVersion: "Sverige i fokus 2026-1, korrigerad 2026-08-10",
      active: true
    },
    {
      id: "ch6-010",
      category: "mediernas_roll",
      topic: "public_service",
      difficulty: "medium",
      question: "Hur ska public service förhålla sig till politiska och andra intressen?",
      options: [
        "De ska stödja regeringen",
        "De ska stödja det största partiet",
        "De ska vara oberoende",
        "De ska undvika att rapportera om samhället"
      ],
      correctIndex: 2,
      explanationSv: "Public service-företagen ska vara oberoende av politiska och andra intressen.",
      chapter: 6,
      section: "Public service",
      sourcePage: 21,
      studyText: "Public service-företagen ska vara oberoende av politiska och andra intressen. De ska rapportera om samhället och låta olika åsikter komma till tals utan att välja sida.",
      sourceVersion: "Sverige i fokus 2026-1, korrigerad 2026-08-10",
      active: true
    },
    {
      id: "ch6-011",
      category: "mediernas_roll",
      topic: "public_service",
      difficulty: "easy",
      question: "Hur finansieras public service enligt Sverige i fokus?",
      options: [
        "Genom reklam",
        "Genom en avgift som tas ut via skatten",
        "Genom medlemsavgifter",
        "Bara genom frivilliga gåvor"
      ],
      correctIndex: 1,
      explanationSv: "Public service finansieras genom en avgift som tas ut via skatten.",
      chapter: 6,
      section: "Public service",
      sourcePage: 21,
      studyText: "Public service-företagen får inte tjäna pengar på reklam. De finansieras istället genom en avgift som tas ut via skatten.",
      sourceVersion: "Sverige i fokus 2026-1, korrigerad 2026-08-10",
      active: true
    },
    {
      id: "ch6-012",
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
      explanationSv: "Syftet är att alla i landet ska ha tillgång till saklig information, oavsett var man bor eller hur mycket pengar man har.",
      chapter: 6,
      section: "Public service",
      sourcePage: 21,
      studyText: "Syftet är att alla i landet ska ha tillgång till saklig information, oavsett var man bor eller hur mycket pengar man har.",
      sourceVersion: "Sverige i fokus 2026-1, korrigerad 2026-08-10",
      active: true
    },
    {
      id: "ch6-013",
      category: "mediernas_roll",
      topic: "webb_sociala_medier",
      difficulty: "easy",
      question: "Vad är speciellt med innehåll på webben och i sociala medier?",
      options: [
        "Bara journalister får skapa innehåll",
        "Allt innehåll kontrolleras av staten",
        "Vem som helst kan skapa innehåll",
        "Allt måste först godkännas av public service"
      ],
      correctIndex: 2,
      explanationSv: "Vem som helst kan skapa innehåll på webben och i sociala medier.",
      chapter: 6,
      section: "Webb och sociala medier",
      sourcePage: 21,
      studyText: "Vem som helst kan skapa innehåll på webben och i sociala medier. Innehållet som sprids där kontrolleras inte på samma sätt som innehållet i andra medier.",
      sourceVersion: "Sverige i fokus 2026-1, korrigerad 2026-08-10",
      active: true
    },
    {
      id: "ch6-014",
      category: "mediernas_roll",
      topic: "kallkritik",
      difficulty: "easy",
      question: "Vad betyder det att vara källkritisk?",
      options: [
        "Att tro på allt man läser",
        "Att bara använda sociala medier",
        "Att ifrågasätta och kontrollera om information är korrekt",
        "Att aldrig läsa nyheter"
      ],
      correctIndex: 2,
      explanationSv: "Att vara källkritisk innebär att ifrågasätta och kontrollera om det man läser, ser eller hör är korrekt.",
      chapter: 6,
      section: "Källkritik",
      sourcePage: 21,
      studyText: "Att kontrollera och granska information kallas för att vara källkritisk. Det innebär att ifrågasätta och kontrollera om det man läser, ser eller hör är korrekt.",
      sourceVersion: "Sverige i fokus 2026-1, korrigerad 2026-08-10",
      active: true
    },
    {
      id: "ch6-015",
      category: "mediernas_roll",
      topic: "kallkritik",
      difficulty: "medium",
      question: "Varför är det viktigt att vara källkritisk?",
      options: [
        "För att falska uppgifter kan spridas snabbt och påverka människors åsikter",
        "För att all information på internet är förbjuden",
        "För att bara böcker innehåller korrekt information",
        "För att myndigheter bestämmer vad människor får läsa"
      ],
      correctIndex: 0,
      explanationSv: "Falska uppgifter kan spridas snabbt och påverka människors åsikter.",
      chapter: 6,
      section: "Källkritik",
      sourcePage: 21,
      studyText: "Allt som publiceras i medierna är inte alltid korrekt. Falska uppgifter kan spridas snabbt och påverka människors åsikter.",
      sourceVersion: "Sverige i fokus 2026-1, korrigerad 2026-08-10",
      active: true
    }
  ];

  window.SVERIGEQUIZ_QUESTIONS.push(...chapter6Questions);
})();
