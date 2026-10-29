// Sverigequiz – kapitel 8
// Arbetsmarknad och privatekonomi
// Källa: Sverige i fokus 2026-1, korrigerad 2026-08-10

(() => {
  const replacementChapters = new Set([8]);

  window.SVERIGEQUIZ_QUESTIONS =
    window.SVERIGEQUIZ_QUESTIONS.filter(
      q => !replacementChapters.has(q.chapter)
    );

  const chapterQuestions = [
    {
      id: "ch8-01",
      chapter: 8,
      category: "arbetsmarknad_privatekonomi",
      topic: "offentlig_privata_sektorn",
      difficulty: "easy",
      question: "Vilka två delar kan arbetsmarknaden delas upp i?",
      options: [
        "Statlig och kommunal sektor",
        "Offentlig och privat sektor",
        "Svensk och utländsk sektor",
        "Stor och liten sektor"
      ],
      correctIndex: 1,
      explanationSv: "Arbetsmarknaden kan delas upp i offentlig och privat sektor.",
      studyTitle: "Offentlig och privat sektor",
      studyText: "Arbetsmarknaden kan delas upp i offentlig och privat sektor. Den offentliga sektorn består av verksamheter som staten, regionerna och kommunerna ansvarar för. Den privata sektorn består av privatägda företag.",
      studyRemember: "Arbetsmarknaden delas upp i offentlig och privat sektor.",
      section: "Så fungerar arbetsmarknaden",
      sourcePage: 27,
      sourceVersion: "Sverige i fokus 2026-1, korrigerad 2026-08-10",
      active: true
    },
    {
      id: "ch8-02",
      chapter: 8,
      category: "arbetsmarknad_privatekonomi",
      topic: "offentlig_sektor",
      difficulty: "easy",
      question: "Hur finansieras den offentliga sektorn?",
      options: [
        "Med medlemsavgifter",
        "Med skatter",
        "Bara med lån",
        "Bara av privata företag"
      ],
      correctIndex: 1,
      explanationSv: "Den offentliga sektorn finansieras med skatter.",
      studyTitle: "Den offentliga sektorn",
      studyText: "Den offentliga sektorn består av verksamheter som staten, regionerna och kommunerna ansvarar för. Den finansieras med skatter.",
      studyRemember: "Offentlig sektor finansieras med skatter.",
      section: "Så fungerar arbetsmarknaden",
      sourcePage: 27,
      sourceVersion: "Sverige i fokus 2026-1, korrigerad 2026-08-10",
      active: true
    },
    {
      id: "ch8-03",
      chapter: 8,
      category: "arbetsmarknad_privatekonomi",
      topic: "privat_sektor",
      difficulty: "medium",
      question: "Ungefär hur stor del av dem som arbetar i Sverige arbetar i den privata sektorn?",
      options: [
        "10 procent",
        "30 procent",
        "50 procent",
        "70 procent"
      ],
      correctIndex: 3,
      explanationSv: "Omkring 70 procent av alla som arbetar i Sverige arbetar inom den privata sektorn.",
      studyTitle: "Den privata sektorn",
      studyText: "Den privata sektorn består av företag som ägs privat. Omkring 70 procent av alla som arbetar i Sverige arbetar inom den privata sektorn.",
      studyRemember: "Cirka 70 procent arbetar i privat sektor.",
      section: "Så fungerar arbetsmarknaden",
      sourcePage: 27,
      sourceVersion: "Sverige i fokus 2026-1, korrigerad 2026-08-10",
      active: true
    },
    {
      id: "ch8-04",
      chapter: 8,
      category: "arbetsmarknad_privatekonomi",
      topic: "offentlig_sektor",
      difficulty: "easy",
      question: "Vilket av dessa yrken hör enligt Sverige i fokus till den offentliga sektorn?",
      options: [
        "Polis",
        "Butiksägare",
        "Restaurangägare",
        "Företagare inom transport"
      ],
      correctIndex: 0,
      explanationSv: "Polis är ett av de yrken som nämns som exempel på arbete inom den offentliga sektorn.",
      studyTitle: "Arbeten i offentlig sektor",
      studyText: "Sjukvårdspersonal, lärare, barnskötare, polis och brandman är exempel på arbeten som hör till den offentliga sektorn.",
      studyRemember: "Polis är ett exempel på arbete i offentlig sektor.",
      section: "Så fungerar arbetsmarknaden",
      sourcePage: 27,
      sourceVersion: "Sverige i fokus 2026-1, korrigerad 2026-08-10",
      active: true
    },
    {
      id: "ch8-05",
      chapter: 8,
      category: "arbetsmarknad_privatekonomi",
      topic: "arbetsmarknadens_parter",
      difficulty: "easy",
      question: "Vad gör en arbetsgivare?",
      options: [
        "Anställer och betalar lön till arbetstagare",
        "Bestämmer skatten i kommunen",
        "Betalar ut A-kassa",
        "Bestämmer alla löner i Sverige"
      ],
      correctIndex: 0,
      explanationSv: "Arbetsgivare anställer och betalar lön till arbetstagare.",
      studyTitle: "Arbetsgivare och arbetstagare",
      studyText: "På arbetsmarknaden finns arbetsgivare och arbetstagare. Arbetsgivare anställer och betalar lön till arbetstagarna.",
      studyRemember: "Arbetsgivaren anställer och betalar lön.",
      section: "Arbetsmarknadens parter",
      sourcePage: 28,
      sourceVersion: "Sverige i fokus 2026-1, korrigerad 2026-08-10",
      active: true
    },
    {
      id: "ch8-06",
      chapter: 8,
      category: "arbetsmarknad_privatekonomi",
      topic: "arbetsgivarorganisationer",
      difficulty: "medium",
      question: "Vilken organisation representerar privata företag?",
      options: [
        "LO",
        "TCO",
        "Svenskt Näringsliv",
        "SACO"
      ],
      correctIndex: 2,
      explanationSv: "Svenskt Näringsliv är en arbetsgivarorganisation för privata företag.",
      studyTitle: "Arbetsgivarorganisationer",
      studyText: "Arbetsgivarorganisationerna representerar arbetsgivarna. Svenskt Näringsliv representerar privata företag.",
      studyRemember: "Svenskt Näringsliv representerar privata företag.",
      section: "Organisationer",
      sourcePage: 28,
      sourceVersion: "Sverige i fokus 2026-1, korrigerad 2026-08-10",
      active: true
    },
    {
      id: "ch8-07",
      chapter: 8,
      category: "arbetsmarknad_privatekonomi",
      topic: "fackliga_organisationer",
      difficulty: "easy",
      question: "Vilka representerar de fackliga organisationerna?",
      options: [
        "Arbetsgivarna",
        "Arbetstagarna",
        "Kommunerna",
        "Bankerna"
      ],
      correctIndex: 1,
      explanationSv: "Fackliga organisationer representerar arbetstagarna.",
      studyTitle: "Fackliga organisationer",
      studyText: "Fackliga organisationer representerar arbetstagarna. Fackförbunden arbetar för att de anställda ska få det bättre.",
      studyRemember: "Fackliga organisationer representerar arbetstagarna.",
      section: "Organisationer",
      sourcePage: 28,
      sourceVersion: "Sverige i fokus 2026-1, korrigerad 2026-08-10",
      active: true
    },
    {
      id: "ch8-08",
      chapter: 8,
      category: "arbetsmarknad_privatekonomi",
      topic: "fackliga_organisationer",
      difficulty: "medium",
      question: "Vilka är Sveriges tre största fackliga centralorganisationer?",
      options: [
        "LO, TCO och SACO",
        "LO, SKR och Svenskt Näringsliv",
        "TCO, SKR och Arbetsgivarverket",
        "SACO, Skatteverket och LO"
      ],
      correctIndex: 0,
      explanationSv: "De största fackliga centralorganisationerna är LO, TCO och SACO.",
      studyTitle: "De fackliga centralorganisationerna",
      studyText: "De största fackliga centralorganisationerna är Landsorganisationen i Sverige (LO), Tjänstemännens centralorganisation (TCO) och Sveriges akademikers centralorganisation (SACO).",
      studyRemember: "LO – TCO – SACO.",
      section: "Organisationer",
      sourcePage: 28,
      sourceVersion: "Sverige i fokus 2026-1, korrigerad 2026-08-10",
      active: true
    },
    {
      id: "ch8-09",
      chapter: 8,
      category: "arbetsmarknad_privatekonomi",
      topic: "kollektivavtal",
      difficulty: "easy",
      question: "Vad är ett kollektivavtal?",
      options: [
        "Ett avtal om skatter",
        "Ett avtal om löner och arbetsvillkor",
        "Ett privat banklån",
        "Ett avtal mellan staten och kommunen"
      ],
      correctIndex: 1,
      explanationSv: "Fackförbund och arbetsgivarorganisationer tecknar kollektivavtal om löner och arbetsvillkor.",
      studyTitle: "Kollektivavtal",
      studyText: "Fackförbunden och arbetsgivarorganisationerna förhandlar om och tecknar kollektivavtal om löner och arbetsvillkor.",
      studyRemember: "Kollektivavtal handlar om löner och arbetsvillkor.",
      section: "Organisationer",
      sourcePage: 28,
      sourceVersion: "Sverige i fokus 2026-1, korrigerad 2026-08-10",
      active: true
    },
    {
      id: "ch8-10",
      chapter: 8,
      category: "arbetsmarknad_privatekonomi",
      topic: "loner",
      difficulty: "medium",
      question: "Vem bestämmer lönerna i Sverige enligt Sverige i fokus?",
      options: [
        "Riksdagen",
        "Regeringen",
        "Arbetsmarknadens parter genom förhandlingar",
        "Skatteverket"
      ],
      correctIndex: 2,
      explanationSv: "Löner bestäms genom förhandlingar mellan arbetsmarknadens parter, inte av staten.",
      studyTitle: "Hur löner bestäms",
      studyText: "I Sverige bestäms löner genom förhandlingar mellan arbetsmarknadens parter. Staten bestämmer alltså inte lönerna.",
      studyRemember: "Löner bestäms av arbetsmarknadens parter – inte av staten.",
      section: "Organisationer",
      sourcePage: 28,
      sourceVersion: "Sverige i fokus 2026-1, korrigerad 2026-08-10",
      active: true
    },
    {
      id: "ch8-11",
      chapter: 8,
      category: "arbetsmarknad_privatekonomi",
      topic: "lagar_arbetsmarknaden",
      difficulty: "easy",
      question: "Varför finns det lagar på arbetsmarknaden?",
      options: [
        "För att staten ska bestämma alla löner",
        "För att skydda de anställdas rättigheter och skapa en trygg arbetsmiljö",
        "För att alla ska arbeta lika många timmar",
        "För att företag inte ska kunna anställa"
      ],
      correctIndex: 1,
      explanationSv: "Lagarna ska bland annat skydda de anställdas rättigheter och skapa en trygg arbetsmiljö.",
      studyTitle: "Lagar på arbetsmarknaden",
      studyText: "Det finns lagar om bland annat arbetstider, arbetsmiljö och semester för att skydda de anställdas rättigheter och skapa en trygg arbetsmiljö.",
      studyRemember: "Arbetsmarknadslagar skyddar anställda och arbetsmiljön.",
      section: "Lagar och regler på arbetsmarknaden",
      sourcePage: 29,
      sourceVersion: "Sverige i fokus 2026-1, korrigerad 2026-08-10",
      active: true
    },
    {
      id: "ch8-12",
      chapter: 8,
      category: "arbetsmarknad_privatekonomi",
      topic: "skatt_pa_arbete",
      difficulty: "easy",
      question: "Vem betalar skatt på sin lön?",
      options: [
        "Bara offentliganställda",
        "Bara höginkomsttagare",
        "Alla som arbetar",
        "Bara företagare"
      ],
      correctIndex: 2,
      explanationSv: "Alla som arbetar betalar skatt på sin lön.",
      studyTitle: "Skatt på arbete",
      studyText: "Alla som arbetar betalar skatt på sin lön. Hur mycket man betalar beror på inkomsten.",
      studyRemember: "Alla som arbetar betalar skatt på sin lön.",
      section: "Skatt på arbete",
      sourcePage: 29,
      sourceVersion: "Sverige i fokus 2026-1, korrigerad 2026-08-10",
      active: true
    },
    {
      id: "ch8-13",
      chapter: 8,
      category: "arbetsmarknad_privatekonomi",
      topic: "a_kassa",
      difficulty: "easy",
      question: "Vad är A-kassans uppgift?",
      options: [
        "Att ge bostadslån",
        "Att betala ut pengar till arbetslösa medlemmar",
        "Att bestämma löner",
        "Att betala barnbidrag"
      ],
      correctIndex: 1,
      explanationSv: "A-kassan betalar ut pengar till arbetslösa medlemmar som uppfyller villkoren.",
      studyTitle: "A-kassan",
      studyText: "Arbetslöshetskassan, A-kassan, är en ekonomisk förening som betalar ut pengar till arbetslösa medlemmar.",
      studyRemember: "A-kassan kan ge arbetslösa medlemmar en inkomst.",
      section: "A-kassan – en försäkring vid arbetslöshet",
      sourcePage: 29,
      sourceVersion: "Sverige i fokus 2026-1, korrigerad 2026-08-10",
      active: true
    },
    {
      id: "ch8-14",
      chapter: 8,
      category: "arbetsmarknad_privatekonomi",
      topic: "a_kassa",
      difficulty: "medium",
      question: "Vad krävs bland annat för att få ersättning från A-kassan?",
      options: [
        "Att man äger en bostad",
        "Att man är aktivt arbetssökande",
        "Att man har barn",
        "Att man arbetar i offentlig sektor"
      ],
      correctIndex: 1,
      explanationSv: "Man måste bland annat vara aktivt arbetssökande.",
      studyTitle: "Villkor för A-kassa",
      studyText: "För att få ersättning måste man ha arbetat tillräckligt många timmar under en bestämd period och vara aktivt arbetssökande.",
      studyRemember: "För A-kassa måste man bland annat vara aktivt arbetssökande.",
      section: "A-kassan – en försäkring vid arbetslöshet",
      sourcePage: 29,
      sourceVersion: "Sverige i fokus 2026-1, korrigerad 2026-08-10",
      active: true
    },
    {
      id: "ch8-15",
      chapter: 8,
      category: "arbetsmarknad_privatekonomi",
      topic: "privatekonomi",
      difficulty: "easy",
      question: "Vad handlar privatekonomi om?",
      options: [
        "Statens inkomster och utgifter",
        "Företagens skatter",
        "Människors privata inkomster och utgifter",
        "Kommunernas budget"
      ],
      correctIndex: 2,
      explanationSv: "Privatekonomi handlar om människors privata inkomster och utgifter.",
      studyTitle: "Privatekonomi",
      studyText: "Privatekonomi handlar om människors privata inkomster och utgifter. Inkomster kan vara lön eller bidrag. Utgifter kan till exempel vara boende, mat och kläder.",
      studyRemember: "Privatekonomi = privata inkomster och utgifter.",
      section: "Privatekonomi i Sverige",
      sourcePage: 29,
      sourceVersion: "Sverige i fokus 2026-1, korrigerad 2026-08-10",
      active: true
    },
    {
      id: "ch8-16",
      chapter: 8,
      category: "arbetsmarknad_privatekonomi",
      topic: "lon",
      difficulty: "medium",
      question: "Vad kan påverka hur mycket en person tjänar?",
      options: [
        "Yrke, utbildning, erfarenhet och bransch",
        "Bara personens ålder",
        "Bara var personen bor",
        "Bara hur länge personen har bott i Sverige"
      ],
      correctIndex: 0,
      explanationSv: "Lönen kan bland annat bero på yrke, utbildning, erfarenhet och bransch.",
      studyTitle: "Vad påverkar lönen?",
      studyText: "Hur mycket man tjänar beror enligt Sverige i fokus på yrke, utbildning, erfarenhet och bransch.",
      studyRemember: "Yrke, utbildning, erfarenhet och bransch kan påverka lönen.",
      section: "Privatekonomi i Sverige",
      sourcePage: 29,
      sourceVersion: "Sverige i fokus 2026-1, korrigerad 2026-08-10",
      active: true
    },
    {
      id: "ch8-17",
      chapter: 8,
      category: "arbetsmarknad_privatekonomi",
      topic: "socialforsakringar",
      difficulty: "easy",
      question: "Vilket av följande är ett exempel på en socialförsäkring som nämns i Sverige i fokus?",
      options: [
        "Bostadslån",
        "Kreditkort",
        "Sjukpenning",
        "Sparkonto"
      ],
      correctIndex: 2,
      explanationSv: "Sjukpenning nämns som ett exempel tillsammans med pension och barnbidrag.",
      studyTitle: "Socialförsäkringar",
      studyText: "Staten ger pengar genom socialförsäkringar som till exempel pension, sjukpenning och barnbidrag.",
      studyRemember: "Pension, sjukpenning och barnbidrag är exempel som nämns.",
      section: "Privatekonomi i Sverige",
      sourcePage: 29,
      sourceVersion: "Sverige i fokus 2026-1, korrigerad 2026-08-10",
      active: true
    },
    {
      id: "ch8-18",
      chapter: 8,
      category: "arbetsmarknad_privatekonomi",
      topic: "sparande",
      difficulty: "easy",
      question: "Var kan människor enligt Sverige i fokus spara pengar?",
      options: [
        "Bara på bankkonto",
        "På bankkonton, i fonder eller aktier",
        "Bara i aktier",
        "Bara i bostäder"
      ],
      correctIndex: 1,
      explanationSv: "Människor kan spara pengar på bankkonton, i fonder eller aktier.",
      studyTitle: "Att spara pengar",
      studyText: "Sverige i fokus nämner bankkonton, fonder och aktier som sätt att spara pengar.",
      studyRemember: "Sparande kan ske på bankkonto, i fonder eller aktier.",
      section: "Privatekonomi i Sverige",
      sourcePage: 29,
      sourceVersion: "Sverige i fokus 2026-1, korrigerad 2026-08-10",
      active: true
    },
    {
      id: "ch8-19",
      chapter: 8,
      category: "arbetsmarknad_privatekonomi",
      topic: "bostadslan",
      difficulty: "medium",
      question: "Varför är bostadslån ofta en stor del av privatekonomin?",
      options: [
        "För att alla måste köpa en bostad",
        "För att bostadspriserna har stigit kraftigt i många delar av Sverige",
        "För att bostadslån saknar ränta",
        "För att staten betalar alla bostadslån"
      ],
      correctIndex: 1,
      explanationSv: "Bostadspriserna har stigit kraftigt i många delar av Sverige, och därför är bostadslån ofta en stor del av privatekonomin.",
      studyTitle: "Bostadslån",
      studyText: "Under de senaste decennierna har bostadspriserna i många delar av Sverige stigit kraftigt. Bostadslån är därför ofta en stor del av privatekonomin.",
      studyRemember: "Höga bostadspriser gör bostadslån viktiga i privatekonomin.",
      section: "Privatekonomi i Sverige",
      sourcePage: 29,
      sourceVersion: "Sverige i fokus 2026-1, korrigerad 2026-08-10",
      active: true
    },
    {
      id: "ch8-20",
      chapter: 8,
      category: "arbetsmarknad_privatekonomi",
      topic: "kronofogden",
      difficulty: "easy",
      question: "Vad gör Kronofogdemyndigheten?",
      options: [
        "Bestämmer människors löner",
        "Ser till att skulder blir betalda",
        "Betalar ut pension",
        "Bestämmer bankernas räntor"
      ],
      correctIndex: 1,
      explanationSv: "Kronofogdemyndigheten är en statlig myndighet som ser till att skulder blir betalda.",
      studyTitle: "Kronofogdemyndigheten",
      studyText: "Kronofogdemyndigheten är en statlig myndighet som ser till att skulder blir betalda.",
      studyRemember: "Kronofogdemyndigheten arbetar med skulder.",
      section: "Privatekonomi i Sverige",
      sourcePage: 29,
      sourceVersion: "Sverige i fokus 2026-1, korrigerad 2026-08-10",
      active: true
    },
    {
      id: "ch8-21",
      chapter: 8,
      category: "arbetsmarknad_privatekonomi",
      topic: "skuldsanering",
      difficulty: "easy",
      question: "Vad kallas det när en person med stora skulder får hjälp att få ordning på ekonomin?",
      options: [
        "Kollektivavtal",
        "Skuldsanering",
        "Arbetslöshetsförsäkring",
        "Deklaration"
      ],
      correctIndex: 1,
      explanationSv: "Det kallas skuldsanering.",
      studyTitle: "Skuldsanering",
      studyText: "Kronofogdemyndigheten kan hjälpa personer med stora skulder att få ordning på ekonomin. Det kallas skuldsanering.",
      studyRemember: "Hjälp med stora skulder kan kallas skuldsanering.",
      section: "Privatekonomi i Sverige",
      sourcePage: 29,
      sourceVersion: "Sverige i fokus 2026-1, korrigerad 2026-08-10",
      active: true
    },
    {
      id: "ch8-22",
      chapter: 8,
      category: "arbetsmarknad_privatekonomi",
      topic: "deklaration",
      difficulty: "easy",
      question: "Vem ska deklarera sin inkomst till Skatteverket?",
      options: [
        "Bara företagare",
        "Bara personer med hög lön",
        "Alla som har haft en inkomst under året",
        "Bara offentliganställda"
      ],
      correctIndex: 2,
      explanationSv: "Alla som har haft en inkomst under året ska deklarera sin inkomst till Skatteverket.",
      studyTitle: "Deklaration",
      studyText: "Alla som har haft en inkomst under året ska deklarera sin inkomst till Skatteverket.",
      studyRemember: "Har du haft inkomst under året ska inkomsten deklareras.",
      section: "Privatekonomi i Sverige",
      sourcePage: 29,
      sourceVersion: "Sverige i fokus 2026-1, korrigerad 2026-08-10",
      active: true
    }
  ];

  window.SVERIGEQUIZ_QUESTIONS.push(...chapterQuestions);
})();
