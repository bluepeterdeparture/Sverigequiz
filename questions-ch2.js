// Sverigequiz – kapitel 2
// Sveriges demokratiska system
// Källa: Sverige i fokus 2026-1, korrigerad 2026-08-10

(() => {
  const replacementChapters = new Set([2]);

  window.SVERIGEQUIZ_QUESTIONS =
    window.SVERIGEQUIZ_QUESTIONS.filter(
      q => !replacementChapters.has(q.chapter)
    );

  const chapterQuestions = [
    {
      id: "ch2-01",
      chapter: 2,
      category: "demokrati",
      topic: "folkstyre",
      difficulty: "easy",
      question: "Vad betyder ordet demokrati?",
      options: [
        "Folkstyre",
        "Kungastyre",
        "Militärstyre",
        "Enpartistyre"
      ],
      correctIndex: 0,
      explanationSv: "Ordet demokrati kommer från grekiskan och betyder folkstyre.",
      studyTitle: "Demokrati",
      studyText: "Demokrati är ett politiskt system där makten utgår från folket och medborgarna har möjlighet att påverka beslut.",
      studyRemember: "Demokrati = folkstyre.",
      section: "Demokrati betyder folkstyre",
      sourcePage: 10,
      sourceVersion: "Sverige i fokus 2026-1, korrigerad 2026-08-10",
      active: true
    },
    {
      id: "ch2-02",
      chapter: 2,
      category: "demokrati",
      topic: "folkstyre",
      difficulty: "medium",
      question: "Vad ska medborgarna kunna göra i en demokrati?",
      options: [
        "Välja mellan flera olika politiska alternativ",
        "Bara rösta på det parti som redan styr",
        "Låta myndigheterna välja regering utan val",
        "Rösta bara om de är medlemmar i ett parti"
      ],
      correctIndex: 0,
      explanationSv: "I en demokrati ska medborgarna kunna välja mellan flera olika politiska alternativ.",
      studyTitle: "Politiska alternativ",
      studyText: "I en demokrati ska medborgarna kunna välja mellan flera olika politiska alternativ. De som får makten ska kunna bytas ut.",
      studyRemember: "I en demokrati ska makthavare kunna bytas ut.",
      section: "Demokrati betyder folkstyre",
      sourcePage: 10,
      sourceVersion: "Sverige i fokus 2026-1, korrigerad 2026-08-10",
      active: true
    },
    {
      id: "ch2-03",
      chapter: 2,
      category: "demokrati",
      topic: "fria_val",
      difficulty: "easy",
      question: "Vad betyder fria val?",
      options: [
        "De som har rösträtt har en röst var och kan uttrycka sina åsikter utan hot eller tvång",
        "Alla måste rösta på samma parti",
        "Regeringen bestämmer hur varje person ska rösta",
        "Bara politiker får rösta"
      ],
      correctIndex: 0,
      explanationSv: "I fria val har alla som har rösträtt en röst var och kan uttrycka sina åsikter utan hot eller tvång.",
      studyTitle: "Fria val",
      studyText: "Alla som har rätt att rösta har en röst var och ska kunna uttrycka sina åsikter utan hot eller tvång. Det ska också finnas flera partier att rösta på.",
      studyRemember: "Fria val = en röst var, utan hot eller tvång.",
      section: "Demokrati betyder folkstyre",
      sourcePage: 10,
      sourceVersion: "Sverige i fokus 2026-1, korrigerad 2026-08-10",
      active: true
    },
    {
      id: "ch2-04",
      chapter: 2,
      category: "demokrati",
      topic: "hemliga_val",
      difficulty: "easy",
      question: "Vad betyder det att valen är hemliga?",
      options: [
        "Ingen behöver avslöja hur han eller hon röstar",
        "Valresultatet får inte offentliggöras",
        "Ingen får prata om politik före valet",
        "Bara valmyndigheten får veta vilka partier som deltar"
      ],
      correctIndex: 0,
      explanationSv: "Hemliga val betyder att ingen behöver avslöja hur han eller hon röstar.",
      studyTitle: "Hemliga val",
      studyText: "Valen ska vara hemliga så att ingen behöver avslöja hur de röstar.",
      studyRemember: "Du behöver inte avslöja hur du röstar.",
      section: "Demokrati betyder folkstyre",
      sourcePage: 10,
      sourceVersion: "Sverige i fokus 2026-1, korrigerad 2026-08-10",
      active: true
    },
    {
      id: "ch2-05",
      chapter: 2,
      category: "demokrati",
      topic: "fria_val",
      difficulty: "medium",
      question: "Måste en person som har rösträtt delta i valet?",
      options: [
        "Nej, man har också rätt att inte delta",
        "Ja, alla med rösträtt måste rösta",
        "Ja, men bara i riksdagsval",
        "Nej, men bara om man är medlem i ett parti"
      ],
      correctIndex: 0,
      explanationSv: "I Sverige har man rätt att rösta, men man har också rätt att inte delta i valet.",
      studyTitle: "Rätten att välja",
      studyText: "I ett demokratiskt samhälle har människor rätt att rösta i fria val. Man har också rätt att inte delta i valet.",
      studyRemember: "Att rösta är en rättighet – man har också rätt att avstå.",
      section: "Demokrati betyder folkstyre",
      sourcePage: 10,
      sourceVersion: "Sverige i fokus 2026-1, korrigerad 2026-08-10",
      active: true
    },
    {
      id: "ch2-06",
      chapter: 2,
      category: "demokrati",
      topic: "yttrandefrihet",
      difficulty: "easy",
      question: "Vad innebär yttrandefrihet enligt materialet?",
      options: [
        "Rätt att skriva och säga vad man tycker",
        "Rätt att bestämma över domstolar",
        "Rätt att slippa följa lagar",
        "Rätt att hindra andra från att uttrycka sina åsikter"
      ],
      correctIndex: 0,
      explanationSv: "Yttrandefrihet innebär rätten att skriva och säga vad man tycker.",
      studyTitle: "Yttrandefrihet",
      studyText: "Alla människor, grupper och partier har rätt att försöka övertyga andra om sina politiska idéer. Alla har yttrandefrihet, alltså rätt att skriva och säga vad de tycker.",
      studyRemember: "Yttrandefrihet = rätt att uttrycka sina åsikter.",
      section: "Demokrati betyder folkstyre",
      sourcePage: 10,
      sourceVersion: "Sverige i fokus 2026-1, korrigerad 2026-08-10",
      active: true
    },
    {
      id: "ch2-07",
      chapter: 2,
      category: "demokrati",
      topic: "rattssakerhet",
      difficulty: "easy",
      question: "Vad är en viktig del av rättssäkerheten?",
      options: [
        "Lagarna gäller för alla och ingen får dömas utan en rättvis rättegång",
        "Politiker kan döma människor utan domstol",
        "Olika lagar gäller för olika människor",
        "Den som misstänks för ett brott är alltid skyldig"
      ],
      correctIndex: 0,
      explanationSv: "Rättssäkerhet innebär bland annat att lagarna gäller för alla och att ingen får dömas utan en rättvis rättegång.",
      studyTitle: "Rättssäkerhet",
      studyText: "En viktig förutsättning för demokrati är att lagarna gäller för alla i Sverige. Ingen får dömas utan en rättvis rättegång. Det kallas rättssäkerhet.",
      studyRemember: "Lagen gäller alla och rättegången ska vara rättvis.",
      section: "Demokrati betyder folkstyre",
      sourcePage: 10,
      sourceVersion: "Sverige i fokus 2026-1, korrigerad 2026-08-10",
      active: true
    },
    {
      id: "ch2-08",
      chapter: 2,
      category: "demokrati",
      topic: "deltagande",
      difficulty: "medium",
      question: "Vad kan bidra till att demokratin blir starkare?",
      options: [
        "Att många röstar, engagerar sig och skaffar sig kunskap om samhällsfrågor",
        "Att bara politiker diskuterar samhällsfrågor",
        "Att färre människor deltar i val",
        "Att människor undviker föreningar och politiska frågor"
      ],
      correctIndex: 0,
      explanationSv: "Demokratin blir starkare när många röstar, engagerar sig och skaffar sig kunskap om samhällsfrågor.",
      studyTitle: "En stark demokrati",
      studyText: "För att en demokrati ska fungera behöver alla ta ansvar. Demokratin blir starkare när många röstar, engagerar sig och skaffar sig kunskap om samhällsfrågor.",
      studyRemember: "Kunskap och deltagande stärker demokratin.",
      section: "En stark demokrati",
      sourcePage: 10,
      sourceVersion: "Sverige i fokus 2026-1, korrigerad 2026-08-10",
      active: true
    },
    {
      id: "ch2-09",
      chapter: 2,
      category: "demokrati",
      topic: "deltagande",
      difficulty: "easy",
      question: "Vilket är ett demokratiskt sätt att påverka samhället?",
      options: [
        "Kontakta politiker",
        "Hota journalister",
        "Förbjuda andra människors åsikter",
        "Tvinga andra att rösta på ett visst parti"
      ],
      correctIndex: 0,
      explanationSv: "Att kontakta politiker är ett av flera sätt att påverka och delta i samhället.",
      studyTitle: "Påverka samhället",
      studyText: "Man kan påverka på många sätt, till exempel genom att rösta, bli medlem i en förening eller ett parti, kontakta politiker, demonstrera eller skriva på en namninsamling.",
      studyRemember: "Det finns många demokratiska sätt att påverka.",
      section: "En stark demokrati",
      sourcePage: 10,
      sourceVersion: "Sverige i fokus 2026-1, korrigerad 2026-08-10",
      active: true
    },
    {
      id: "ch2-10",
      chapter: 2,
      category: "demokrati",
      topic: "deltagande",
      difficulty: "medium",
      question: "Hur kan en person enligt materialet påverka på sin arbetsplats?",
      options: [
        "Genom fackföreningar",
        "Genom att besluta om nya lagar",
        "Genom att utse statsministern",
        "Genom att styra domstolarna"
      ],
      correctIndex: 0,
      explanationSv: "Ett sätt att påverka på sin arbetsplats är genom fackföreningar.",
      studyTitle: "Delta och påverka",
      studyText: "Materialet nämner flera sätt att delta i samhället. På arbetsplatsen kan människor till exempel påverka genom fackföreningar.",
      studyRemember: "På arbetsplatsen kan man påverka genom fackföreningar.",
      section: "En stark demokrati",
      sourcePage: 10,
      sourceVersion: "Sverige i fokus 2026-1, korrigerad 2026-08-10",
      active: true
    },
    {
      id: "ch2-11",
      chapter: 2,
      category: "demokrati",
      topic: "hot_mot_demokratin",
      difficulty: "medium",
      question: "Varför kan ett lågt valdeltagande vara ett problem för demokratin?",
      options: [
        "Det kan ge människor mindre möjligheter att påverka politiska beslut i vardagen",
        "Det gör automatiskt alla val ogiltiga",
        "Det gör att riksdagen får fler ledamöter",
        "Det gör att kommunerna upphör"
      ],
      correctIndex: 0,
      explanationSv: "Ett lågt valdeltagande kan leda till att människor får mindre möjligheter att påverka politiska beslut i sin vardag.",
      studyTitle: "Lågt valdeltagande",
      studyText: "Lågt valdeltagande kan bero på att människor inte litar på politiker eller känner att deras röst inte gör någon skillnad. Det kan öka skillnader mellan grupper i samhället.",
      studyRemember: "Lågt valdeltagande kan försvaga möjligheten att påverka.",
      section: "Hot mot demokratin",
      sourcePage: 11,
      sourceVersion: "Sverige i fokus 2026-1, korrigerad 2026-08-10",
      active: true
    },
    {
      id: "ch2-12",
      chapter: 2,
      category: "demokrati",
      topic: "hot_mot_demokratin",
      difficulty: "medium",
      question: "Hur kan falsk information och hat hota demokratin?",
      options: [
        "Det kan skapa konflikter och skrämma människor från att delta i den demokratiska debatten",
        "Det gör att fler människor automatiskt röstar",
        "Det gör alla myndigheter oberoende",
        "Det ger alla människor samma politiska åsikt"
      ],
      correctIndex: 0,
      explanationSv: "Falsk information och hat kan skapa konflikter, och hot kan skrämma människor från att delta i den demokratiska debatten.",
      studyTitle: "Hot mot demokratin",
      studyText: "Falsk information och hat kan spridas för att skapa konflikter. Politiker, journalister och andra som pratar om samhällsfrågor kan också hotas och bli rädda för att delta i debatten.",
      studyRemember: "Falsk information, hat och hot kan försvaga demokratin.",
      section: "Hot mot demokratin",
      sourcePage: 11,
      sourceVersion: "Sverige i fokus 2026-1, korrigerad 2026-08-10",
      active: true
    },
    {
      id: "ch2-13",
      chapter: 2,
      category: "demokrati",
      topic: "hot_mot_demokratin",
      difficulty: "medium",
      question: "Vad är viktigt för att demokratin ska fungera bra?",
      options: [
        "Att många kan påverka, att informationen är sann och att deltagare i den allmänna debatten skyddas",
        "Att bara politiker får delta i samhällsdebatten",
        "Att människor inte får kritisera makthavare",
        "Att bara ett politiskt alternativ tillåts"
      ],
      correctIndex: 0,
      explanationSv: "Många ska kunna påverka, informationen ska vara sann och de som deltar i den allmänna debatten ska skyddas.",
      studyTitle: "Skydda demokratin",
      studyText: "För att demokratin ska fungera bra är det viktigt att många kan vara med och påverka, att informationen de får är sann och att samhället skyddar dem som deltar i den allmänna debatten.",
      studyRemember: "Deltagande, sann information och skydd för debatten är viktigt.",
      section: "Hot mot demokratin",
      sourcePage: 11,
      sourceVersion: "Sverige i fokus 2026-1, korrigerad 2026-08-10",
      active: true
    },
    {
      id: "ch2-14",
      chapter: 2,
      category: "demokrati",
      topic: "segregation",
      difficulty: "easy",
      question: "Vad innebär segregation enligt materialet?",
      options: [
        "Att människor lever åtskilda beroende på till exempel ekonomi eller etnisk bakgrund",
        "Att människor med olika bakgrund lever närmare varandra",
        "Att alla människor har samma inkomst",
        "Att alla röstar på samma parti"
      ],
      correctIndex: 0,
      explanationSv: "Segregation innebär bland annat att människor lever åtskilda beroende på ekonomi eller etnisk bakgrund.",
      studyTitle: "Segregation",
      studyText: "Segregation innebär bland annat att människor lever åtskilda beroende på hur mycket pengar de tjänar eller vilken etnisk bakgrund de har.",
      studyRemember: "Segregation = grupper lever mer åtskilda.",
      section: "Segregation och integration",
      sourcePage: 11,
      sourceVersion: "Sverige i fokus 2026-1, korrigerad 2026-08-10",
      active: true
    },
    {
      id: "ch2-15",
      chapter: 2,
      category: "demokrati",
      topic: "integration",
      difficulty: "easy",
      question: "Vad betyder integration enligt materialet?",
      options: [
        "Att människor med olika bakgrund och ekonomi lever närmare varandra och känner sig delaktiga",
        "Att människor delas upp efter bakgrund och inkomst",
        "Att alla människor måste ha samma åsikter",
        "Att bara staten får delta i samhällsdebatten"
      ],
      correctIndex: 0,
      explanationSv: "Integration betyder att människor med olika bakgrund och ekonomi lever närmare varandra och känner sig delaktiga i samhället.",
      studyTitle: "Integration",
      studyText: "Integration betyder att människor med olika bakgrund och ekonomi lever närmare varandra och känner sig delaktiga i samhället.",
      studyRemember: "Integration = närhet och delaktighet.",
      section: "Segregation och integration",
      sourcePage: 11,
      sourceVersion: "Sverige i fokus 2026-1, korrigerad 2026-08-10",
      active: true
    },
    {
      id: "ch2-16",
      chapter: 2,
      category: "demokrati",
      topic: "segregation",
      difficulty: "medium",
      question: "Hur kan ett segregerat samhälle påverka demokratin?",
      options: [
        "Det kan minska förtroendet för myndigheter och det politiska engagemanget",
        "Det gör automatiskt valdeltagandet hundraprocentigt",
        "Det gör att alla får samma tillgång till samhällsservice",
        "Det gör att politiska partier inte längre behövs"
      ],
      correctIndex: 0,
      explanationSv: "Segregation kan bidra till minskat förtroende för myndigheter och mindre politiskt engagemang och kan därför försvaga demokratin.",
      studyTitle: "Segregation och demokrati",
      studyText: "I ett segregerat samhälle kan människor få mindre kontakt med resten av samhället. Det kan minska förtroendet för myndigheter och det politiska engagemanget.",
      studyRemember: "Segregation kan försvaga demokratin.",
      section: "Segregation och integration",
      sourcePage: 11,
      sourceVersion: "Sverige i fokus 2026-1, korrigerad 2026-08-10",
      active: true
    },
    {
      id: "ch2-17",
      chapter: 2,
      category: "demokrati",
      topic: "integration",
      difficulty: "medium",
      question: "Vilka åtgärder nämns för att motverka segregation och underlätta integration?",
      options: [
        "Språkutbildning och olika typer av bostäder i ett område",
        "Färre skolor och mindre kollektivtrafik",
        "Att människor med olika bakgrund bor mer åtskilda",
        "Att färre människor deltar i föreningar"
      ],
      correctIndex: 0,
      explanationSv: "Språkutbildning och olika typer av bostäder i ett område nämns som exempel.",
      studyTitle: "Underlätta integration",
      studyText: "För att motverka segregation och underlätta integration brukar politiker till exempel föreslå språkutbildning och olika typer av bostäder i ett område.",
      studyRemember: "Språkutbildning och blandade bostadstyper kan underlätta integration.",
      section: "Segregation och integration",
      sourcePage: 11,
      sourceVersion: "Sverige i fokus 2026-1, korrigerad 2026-08-10",
      active: true
    }
  ];

  window.SVERIGEQUIZ_QUESTIONS.push(...chapterQuestions);
})();
