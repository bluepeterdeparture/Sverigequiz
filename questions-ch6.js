// Sverigequiz – kapitel 6
// Mediernas roll
// Källa: Sverige i fokus 2026-1, korrigerad 2026-08-10

(() => {
  const replacementChapters = new Set([6]);

  // Ta bort alla äldre kapitel 6-frågor innan de nya läggs till
  window.SVERIGEQUIZ_QUESTIONS = (window.SVERIGEQUIZ_QUESTIONS || []).filter(
    q => !replacementChapters.has(q.chapter)
  );

  const chapter6Questions = [
    {
      id: "ch6-001",
      chapter: 6,
      category: "Mediernas roll",
      question: "Vad betyder det att medierna är fria i Sverige?",
      options: [
        "Staten bestämmer vilka nyheter som får publiceras",
        "Staten kan inte bestämma eller påverka vad som sägs i medierna",
        "Bara journalister får uttrycka åsikter",
        "Alla medier måste ägas av staten"
      ],
      correct: 1,
      explanation:
        "I en demokrati som Sverige är medierna fria. Staten kan inte bestämma eller påverka vad som sägs i medierna.",
      studyTitle: "Fria medier",
      studyText:
        "I en demokrati som Sverige är medierna fria. Grundlagarna tryckfrihetsförordningen och yttrandefrihetsgrundlagen skyddar rätten att fritt få säga det vi tycker och att sprida åsikter. Staten kan inte bestämma eller påverka vad som sägs i medierna.",
      source: "Sverige i fokus 2026-1, kapitel 6, Fria medier",
      active: true
    },

    {
      id: "ch6-002",
      chapter: 6,
      category: "Mediernas roll",
      question: "Vilka två grundlagar skyddar rätten att fritt säga vad vi tycker och sprida åsikter?",
      options: [
        "Regeringsformen och successionsordningen",
        "Tryckfrihetsförordningen och yttrandefrihetsgrundlagen",
        "Kommunallagen och vallagen",
        "Brottsbalken och offentlighetslagen"
      ],
      correct: 1,
      explanation:
        "Tryckfrihetsförordningen och yttrandefrihetsgrundlagen skyddar rätten att fritt säga vad vi tycker och sprida åsikter.",
      studyTitle: "Fria medier",
      studyText:
        "Grundlagarna tryckfrihetsförordningen och yttrandefrihetsgrundlagen skyddar rätten att fritt få säga det vi tycker och att sprida åsikter.",
      source: "Sverige i fokus 2026-1, kapitel 6, Fria medier",
      active: true
    },

    {
      id: "ch6-003",
      chapter: 6,
      category: "Mediernas roll",
      question: "Varför är offentlighetsprincipen viktig för journalister?",
      options: [
        "Den gör att journalister kan granska myndigheter och personer med makt",
        "Den ger journalister rätt att bestämma över myndigheter",
        "Den gör alla privata brev offentliga",
        "Den förbjuder myndigheter att använda e-post"
      ],
      correct: 0,
      explanation:
        "Offentlighetsprincipen underlättar journalisters granskning eftersom allmänna handlingar från myndigheter är offentliga om de inte omfattas av sekretess.",
      studyTitle: "Fria medier – offentlighetsprincipen",
      studyText:
        "Journalisterna ska kunna granska politiker och andra personer som har makt. Därför finns offentlighetsprincipen som underlättar denna granskning. Den betyder att allmänna handlingar från myndigheter är offentliga. Vem som helst har rätt att ta del av dem om de inte är hemliga (under sekretess).",
      source: "Sverige i fokus 2026-1, kapitel 6, Fria medier",
      active: true
    },

    {
      id: "ch6-004",
      chapter: 6,
      category: "Mediernas roll",
      question: "Vem har rätt att ta del av allmänna handlingar från myndigheter?",
      options: [
        "Bara journalister",
        "Bara svenska medborgare",
        "Vem som helst, om handlingarna inte är hemliga",
        "Bara personer som arbetar på myndigheten"
      ],
      correct: 2,
      explanation:
        "Vem som helst har rätt att ta del av allmänna handlingar från myndigheter om de inte är hemliga, alltså omfattas av sekretess.",
      studyTitle: "Fria medier – offentlighetsprincipen",
      studyText:
        "Allmänna handlingar från myndigheter är offentliga. Vem som helst har rätt att ta del av dem om de inte är hemliga (under sekretess).",
      source: "Sverige i fokus 2026-1, kapitel 6, Fria medier",
      active: true
    },

    {
      id: "ch6-005",
      chapter: 6,
      category: "Mediernas roll",
      question: "Vilken rätt har en person som lämnar uppgifter till medier?",
      options: [
        "Rätt att alltid få betalt",
        "Rätt att vara anonym",
        "Rätt att bestämma vad tidningen ska skriva",
        "Rätt att stoppa andra nyheter"
      ],
      correct: 1,
      explanation:
        "Den som meddelar uppgifter till medier har rätt att vara anonym.",
      studyTitle: "Fria medier – lämna uppgifter",
      studyText:
        "En person har rätt att lämna uppgifter till tidningar, radio och tv utan att straffas för det. Den som meddelar uppgifter till media har också rätt att vara anonym.",
      source: "Sverige i fokus 2026-1, kapitel 6, Fria medier",
      active: true
    },

    {
      id: "ch6-006",
      chapter: 6,
      category: "Mediernas roll",
      question: "Vem är juridiskt ansvarig för vad som publiceras i tidningar, radio och tv?",
      options: [
        "Statsministern",
        "Polisen",
        "Den ansvariga utgivaren",
        "Alla läsare och tittare"
      ],
      correct: 2,
      explanation:
        "Tidningar, radio och tv har en ansvarig utgivare som är juridiskt ansvarig för vad som publiceras.",
      studyTitle: "Fria medier – ansvarig utgivare",
      studyText:
        "Tidningar, radio och tv har en ansvarig utgivare som är juridiskt ansvarig för vad som publiceras. Det innebär att utgivaren måste följa lagar som skyddar mot förtal och kränkningar.",
      source: "Sverige i fokus 2026-1, kapitel 6, Fria medier",
      active: true
    },

    {
      id: "ch6-007",
      chapter: 6,
      category: "Mediernas roll",
      question: "Hur ska journalister kontrollera uppgifter?",
      options: [
        "Genom att bara använda sociala medier",
        "Genom flera oberoende och pålitliga källor",
        "Genom att fråga en enda person",
        "Genom att alltid lita på den första uppgiften"
      ],
      correct: 1,
      explanation:
        "Journalister ska kontrollera uppgifter med flera oberoende källor och kontrollera att källorna är pålitliga.",
      studyTitle: "Fria medier – kontroll av uppgifter",
      studyText:
        "Journalister ska kontrollera uppgifter med flera oberoende källor och kontrollera att källorna är pålitliga.",
      source: "Sverige i fokus 2026-1, kapitel 6, Fria medier",
      active: true
    },

    {
      id: "ch6-008",
      chapter: 6,
      category: "Mediernas roll",
      question: "Hur får reklamfinansierade medier inkomster?",
      options: [
        "Bara genom skatt",
        "Genom att sälja reklamplats",
        "Bara genom bidrag från kommunerna",
        "Genom böter"
      ],
      correct: 1,
      explanation:
        "Reklamfinansierade medier får inkomster genom att sälja plats för reklam.",
      studyTitle: "Privat- och reklamfinansierade medier",
      studyText:
        "Medier som finansieras med reklam drivs ofta av privata företag. Tidningarna får också inkomster genom att sälja plats för reklam.",
      source: "Sverige i fokus 2026-1, kapitel 6, Privat- och reklamfinansierade medier",
      active: true
    },

    {
      id: "ch6-009",
      chapter: 6,
      category: "Mediernas roll",
      question: "Vilka tre medieföretag kallas public service i Sverige?",
      options: [
        "SR, SVT och UR",
        "SVT, TV4 och DN",
        "SR, TV4 och Aftonbladet",
        "UR, Expressen och SVT"
      ],
      correct: 0,
      explanation:
        "Sveriges Radio (SR), Sveriges Television (SVT) och Utbildningsradion (UR) kallas public service.",
      studyTitle: "Public service",
      studyText:
        "Det finns tre medieföretag som har ett speciellt uppdrag i Sverige. Dessa medieföretag är Sveriges Radio (SR), Sveriges Television (SVT) och Utbildningsradion (UR). SR, SVT och UR kallas för public service.",
      source: "Sverige i fokus 2026-1, kapitel 6, Public service",
      active: true
    },

    {
      id: "ch6-010",
      chapter: 6,
      category: "Mediernas roll",
      question: "Hur ska public service förhålla sig till politiska och andra intressen?",
      options: [
        "De ska stödja regeringen",
        "De ska stödja det största partiet",
        "De ska vara oberoende",
        "De ska undvika att rapportera om politik"
      ],
      correct: 2,
      explanation:
        "Public service-företagen ska vara oberoende av politiska och andra intressen.",
      studyTitle: "Public service – oberoende",
      studyText:
        "Public service-företagen ska vara oberoende av politiska och andra intressen. De ska rapportera om samhället och låta olika åsikter komma till tals utan att välja sida.",
      source: "Sverige i fokus 2026-1, kapitel 6, Public service",
      active: true
    },

    {
      id: "ch6-011",
      chapter: 6,
      category: "Mediernas roll",
      question: "Hur finansieras public service i Sverige?",
      options: [
        "Genom reklam",
        "Genom en avgift som tas ut via skatten",
        "Genom medlemsavgifter",
        "Bara genom frivilliga gåvor"
      ],
      correct: 1,
      explanation:
        "Public service får inte tjäna pengar på reklam utan finansieras genom en avgift som tas ut via skatten.",
      studyTitle: "Public service – finansiering",
      studyText:
        "Public service-företagen får inte tjäna pengar på reklam. De finansieras istället genom en avgift som tas ut via skatten.",
      source: "Sverige i fokus 2026-1, kapitel 6, Public service",
      active: true
    },

    {
      id: "ch6-012",
      chapter: 6,
      category: "Mediernas roll",
      question: "Vad är ett syfte med public service?",
      options: [
        "Att alla i landet ska ha tillgång till saklig information",
        "Att sälja så mycket reklam som möjligt",
        "Att bara sända underhållning",
        "Att bara människor i stora städer ska få nyheter"
      ],
      correct: 0,
      explanation:
        "Syftet är att alla i landet ska ha tillgång till saklig information, oavsett var man bor eller hur mycket pengar man har.",
      studyTitle: "Public service – syfte",
      studyText:
        "Syftet är att alla i landet ska ha tillgång till saklig information, oavsett var man bor eller hur mycket pengar man har.",
      source: "Sverige i fokus 2026-1, kapitel 6, Public service",
      active: true
    },

    {
      id: "ch6-013",
      chapter: 6,
      category: "Mediernas roll",
      question: "Vad är speciellt med innehåll på webben och i sociala medier?",
      options: [
        "Bara journalister får skapa innehåll",
        "Allt innehåll kontrolleras av staten",
        "Vem som helst kan skapa innehåll",
        "Allt innehåll måste först godkännas av public service"
      ],
      correct: 2,
      explanation:
        "Vem som helst kan skapa innehåll på webben och i sociala medier.",
      studyTitle: "Webb och sociala medier",
      studyText:
        "Vem som helst kan skapa innehåll på webben och i sociala medier. Det innebär att innehållet som sprids där inte kontrolleras på samma sätt som innehållet i andra medier.",
      source: "Sverige i fokus 2026-1, kapitel 6, Webb och sociala medier",
      active: true
    },

    {
      id: "ch6-014",
      chapter: 6,
      category: "Mediernas roll",
      question: "Vad betyder det att vara källkritisk?",
      options: [
        "Att tro på allt man läser",
        "Att bara använda sociala medier",
        "Att ifrågasätta och kontrollera om information är korrekt",
        "Att aldrig läsa nyheter"
      ],
      correct: 2,
      explanation:
        "Att vara källkritisk innebär att ifrågasätta och kontrollera om det man läser, ser eller hör är korrekt.",
      studyTitle: "Källkritik",
      studyText:
        "Att kontrollera och granska information kallas för att vara källkritisk. Det innebär att ifrågasätta och kontrollera om det man läser, ser eller hör är korrekt.",
      source: "Sverige i fokus 2026-1, kapitel 6, Källkritik",
      active: true
    },

    {
      id: "ch6-015",
      chapter: 6,
      category: "Mediernas roll",
      question: "Varför är det viktigt att vara källkritisk?",
      options: [
        "För att falska uppgifter kan spridas snabbt och påverka människors åsikter",
        "För att all information på internet är förbjuden",
        "För att bara böcker innehåller korrekt information",
        "För att myndigheter bestämmer vad människor får läsa"
      ],
      correct: 0,
      explanation:
        "Allt som publiceras i medierna är inte alltid korrekt. Falska uppgifter kan spridas snabbt och påverka människors åsikter.",
      studyTitle: "Källkritik",
      studyText:
        "Allt som publiceras i medierna är inte alltid korrekt. Falska uppgifter kan spridas snabbt och påverka människors åsikter. Att kontrollera och granska information kallas för att vara källkritisk.",
      source: "Sverige i fokus 2026-1, kapitel 6, Källkritik",
      active: true
    }
  ];

  window.SVERIGEQUIZ_QUESTIONS.push(...chapter6Questions);
})();
