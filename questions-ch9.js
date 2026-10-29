// Sverigequiz – kapitel 9
// Välfärdssamhället
// Källa: Sverige i fokus 2026-1, korrigerad 2026-08-10

(() => {
  const replacementChapters = new Set([9]);

  window.SVERIGEQUIZ_QUESTIONS =
    window.SVERIGEQUIZ_QUESTIONS.filter(
      q => !replacementChapters.has(q.chapter)
    );

  const chapterQuestions = [
    {
      id: "ch9-01",
      chapter: 9,
      category: "valfardssamhallet",
      topic: "grundtrygghet",
      difficulty: "easy",
      question: "Vad ska välfärdssamhället ge invånarna?",
      options: [
        "Gratis bostad",
        "Grundläggande ekonomisk och social trygghet",
        "Samma lön",
        "Gratis bil"
      ],
      correctIndex: 1,
      explanationSv: "Välfärdssamhället ska ge invånarna en grundläggande ekonomisk och social trygghet.",
      studyTitle: "Välfärdssamhället",
      studyText: "Välfärdssamhället ska ge alla invånare en grundläggande ekonomisk och social trygghet. Välfärden finansieras genom skatter.",
      studyRemember: "Välfärd handlar om ekonomisk och social trygghet.",
      section: "Välfärdssamhället",
      sourcePage: 30,
      sourceVersion: "Sverige i fokus 2026-1, korrigerad 2026-08-10",
      active: true
    },
    {
      id: "ch9-02",
      chapter: 9,
      category: "valfardssamhallet",
      topic: "skatter",
      difficulty: "easy",
      question: "Hur finansieras en stor del av Sveriges välfärd?",
      options: [
        "Genom skatter",
        "Genom medlemsavgifter",
        "Bara genom banklån",
        "Bara genom gåvor"
      ],
      correctIndex: 0,
      explanationSv: "En stor del av pengarna till välfärden kommer från skatter.",
      studyTitle: "Skatter finansierar välfärden",
      studyText: "En stor del av pengarna till välfärden kommer från skatter. Skatterna gör att viktiga tjänster kan finansieras gemensamt.",
      studyRemember: "En stor del av välfärden finansieras genom skatter.",
      section: "Skatter för Sveriges välfärd",
      sourcePage: 30,
      sourceVersion: "Sverige i fokus 2026-1, korrigerad 2026-08-10",
      active: true
    },
    {
      id: "ch9-03",
      chapter: 9,
      category: "valfardssamhallet",
      topic: "skatter",
      difficulty: "easy",
      question: "Vilket av följande finansieras gemensamt med hjälp av skatter?",
      options: [
        "Privata semesterresor",
        "Skola och sjukvård",
        "Privata bilar",
        "Restaurangbesök"
      ],
      correctIndex: 1,
      explanationSv: "Skatter används bland annat till att finansiera skola och sjukvård.",
      studyTitle: "Gemensamt finansierad välfärd",
      studyText: "Skatterna gör att många viktiga tjänster kan finansieras gemensamt, till exempel skola, sjukvård och vägar.",
      studyRemember: "Skola, sjukvård och vägar är exempel på sådant som finansieras gemensamt.",
      section: "Skatter för Sveriges välfärd",
      sourcePage: 30,
      sourceVersion: "Sverige i fokus 2026-1, korrigerad 2026-08-10",
      active: true
    },
    {
      id: "ch9-04",
      chapter: 9,
      category: "valfardssamhallet",
      topic: "skatter",
      difficulty: "medium",
      question: "Vilka betalar skatt enligt Sverige i fokus?",
      options: [
        "Bara personer som arbetar",
        "Bara företag",
        "Både personer och till exempel företag",
        "Bara pensionärer"
      ],
      correctIndex: 2,
      explanationSv: "Skatt betalas inte bara av personer som arbetar utan också till exempel av företag.",
      studyTitle: "Vem betalar skatt?",
      studyText: "Skatt betalas inte bara av personer som arbetar utan också till exempel av företag. Det finns även moms på varor och tjänster.",
      studyRemember: "Både människor och företag bidrar med skatter.",
      section: "Skatter för Sveriges välfärd",
      sourcePage: 30,
      sourceVersion: "Sverige i fokus 2026-1, korrigerad 2026-08-10",
      active: true
    },
    {
      id: "ch9-05",
      chapter: 9,
      category: "valfardssamhallet",
      topic: "moms",
      difficulty: "easy",
      question: "Vad är moms?",
      options: [
        "En skatt på varor och tjänster",
        "En avgift till facket",
        "Ett statligt bidrag",
        "En typ av pension"
      ],
      correctIndex: 0,
      explanationSv: "Moms, mervärdesskatt, är en skatt som betalas när man köper varor och tjänster.",
      studyTitle: "Moms",
      studyText: "Moms, eller mervärdesskatt, är en skatt som man betalar när man köper varor och tjänster.",
      studyRemember: "Moms är skatt på varor och tjänster.",
      section: "Exempel på olika slags skatter",
      sourcePage: 30,
      sourceVersion: "Sverige i fokus 2026-1, korrigerad 2026-08-10",
      active: true
    },
    {
      id: "ch9-06",
      chapter: 9,
      category: "valfardssamhallet",
      topic: "arbetsgivaravgifter",
      difficulty: "medium",
      question: "Vad är arbetsgivaravgifter?",
      options: [
        "Pengar som arbetstagaren betalar till arbetsgivaren",
        "Avgifter som arbetsgivare betalar till staten för sina anställda",
        "En avgift för att söka arbete",
        "En kommunal bostadsavgift"
      ],
      correctIndex: 1,
      explanationSv: "Arbetsgivare betalar arbetsgivaravgifter till staten för sina anställda, utöver deras löner.",
      studyTitle: "Arbetsgivaravgifter",
      studyText: "Arbetsgivare betalar avgifter till staten för sina anställda utöver deras löner. Pengarna går bland annat till sjukförsäkring och pensioner.",
      studyRemember: "Arbetsgivaravgifter betalas av arbetsgivaren till staten.",
      section: "Exempel på olika slags skatter",
      sourcePage: 30,
      sourceVersion: "Sverige i fokus 2026-1, korrigerad 2026-08-10",
      active: true
    },
    {
      id: "ch9-07",
      chapter: 9,
      category: "valfardssamhallet",
      topic: "statens_ansvar",
      difficulty: "easy",
      question: "Vilket av följande finansieras av staten?",
      options: [
        "Pensioner",
        "Alla restauranger",
        "Alla bostäder",
        "Alla privata företag"
      ],
      correctIndex: 0,
      explanationSv: "Staten finansierar bland annat pensioner.",
      studyTitle: "Statligt finansierad välfärd",
      studyText: "Staten finansierar bland annat pensioner, sjukförsäkring, föräldraförsäkring, arbetslöshetsförsäkring, studiestöd och barnbidrag.",
      studyRemember: "Pensioner är ett exempel på statligt finansierad välfärd.",
      section: "Statligt finansierad välfärd",
      sourcePage: 30,
      sourceVersion: "Sverige i fokus 2026-1, korrigerad 2026-08-10",
      active: true
    },
    {
      id: "ch9-08",
      chapter: 9,
      category: "valfardssamhallet",
      topic: "statens_ansvar",
      difficulty: "medium",
      question: "Vem finansierar högre utbildning och forskning inom högskolor och universitet?",
      options: [
        "Kommunerna",
        "Regionerna",
        "Staten",
        "Fackförbunden"
      ],
      correctIndex: 2,
      explanationSv: "Staten finansierar högre utbildning och forskning inom högskolor och universitet.",
      studyTitle: "Högre utbildning och forskning",
      studyText: "Staten finansierar högre utbildning och forskning inom högskolor och universitet.",
      studyRemember: "Högskolor och universitet finansieras av staten.",
      section: "Statligt finansierad välfärd",
      sourcePage: 30,
      sourceVersion: "Sverige i fokus 2026-1, korrigerad 2026-08-10",
      active: true
    },
    {
      id: "ch9-09",
      chapter: 9,
      category: "valfardssamhallet",
      topic: "regionernas_ansvar",
      difficulty: "easy",
      question: "Vad ansvarar Sveriges regioner bland annat för?",
      options: [
        "Försvaret",
        "Hälso- och sjukvården",
        "Universiteten",
        "Polisen"
      ],
      correctIndex: 1,
      explanationSv: "Regionerna ansvarar bland annat för hälso- och sjukvården.",
      studyTitle: "Regionerna och sjukvården",
      studyText: "Sveriges regioner ska bland annat erbjuda hälso- och sjukvård till alla. De driver och finansierar sjukhus och vårdcentraler.",
      studyRemember: "Regionerna ansvarar för sjukvården.",
      section: "Regionerna ansvarar för sjukvården",
      sourcePage: 30,
      sourceVersion: "Sverige i fokus 2026-1, korrigerad 2026-08-10",
      active: true
    },
    {
      id: "ch9-10",
      chapter: 9,
      category: "valfardssamhallet",
      topic: "regionernas_ansvar",
      difficulty: "easy",
      question: "Hur många regioner finns det i Sverige?",
      options: [
        "15",
        "18",
        "21",
        "25"
      ],
      correctIndex: 2,
      explanationSv: "Sverige har 21 regioner.",
      studyTitle: "Sveriges regioner",
      studyText: "Sverige har 21 regioner. Regionerna tar ut skatt av sina invånare och ska bland annat erbjuda hälso- och sjukvård.",
      studyRemember: "Sverige har 21 regioner.",
      section: "Regionerna ansvarar för sjukvården",
      sourcePage: 30,
      sourceVersion: "Sverige i fokus 2026-1, korrigerad 2026-08-10",
      active: true
    },
    {
      id: "ch9-11",
      chapter: 9,
      category: "valfardssamhallet",
      topic: "primarvard",
      difficulty: "easy",
      question: "Vilket är ett exempel på primärvård?",
      options: [
        "Vårdcentral",
        "Riksdagen",
        "Universitet",
        "Polisstation"
      ],
      correctIndex: 0,
      explanationSv: "Vårdcentraler är en del av primärvården.",
      studyTitle: "Primärvård",
      studyText: "Till primärvården hör vårdcentraler samt barnavårds- och mödravårdscentraler.",
      studyRemember: "Vårdcentralen hör till primärvården.",
      section: "Olika slags sjukvård",
      sourcePage: 31,
      sourceVersion: "Sverige i fokus 2026-1, korrigerad 2026-08-10",
      active: true
    },
    {
      id: "ch9-12",
      chapter: 9,
      category: "valfardssamhallet",
      topic: "sjukhusvard",
      difficulty: "easy",
      question: "Var utförs till exempel operationer och avancerad behandling?",
      options: [
        "På bibliotek",
        "Inom sjukhusvården",
        "På kommunhuset",
        "På Arbetsförmedlingen"
      ],
      correctIndex: 1,
      explanationSv: "Operationer och avancerad behandling utförs inom sjukhusvården.",
      studyTitle: "Sjukhusvård",
      studyText: "Sjukhusvård omfattar akutsjukhus, länssjukhus och universitetssjukhus där till exempel operationer och avancerad behandling utförs.",
      studyRemember: "Operationer och avancerad behandling hör till sjukhusvården.",
      section: "Olika slags sjukvård",
      sourcePage: 31,
      sourceVersion: "Sverige i fokus 2026-1, korrigerad 2026-08-10",
      active: true
    },
    {
      id: "ch9-13",
      chapter: 9,
      category: "valfardssamhallet",
      topic: "kommunernas_ansvar",
      difficulty: "easy",
      question: "Vem ansvarar för att det finns tillgång till skolor och utbildning i kommunen?",
      options: [
        "Regionen",
        "Kommunen",
        "EU",
        "Fackförbunden"
      ],
      correctIndex: 1,
      explanationSv: "Kommunen ansvarar för att det finns tillgång till skolor och utbildning.",
      studyTitle: "Kommunernas ansvar",
      studyText: "Det är kommunen som ser till att det finns tillgång till skolor och utbildning.",
      studyRemember: "Kommunen ansvarar för tillgången till skolor och utbildning.",
      section: "Kommunerna har ett stort ansvar",
      sourcePage: 31,
      sourceVersion: "Sverige i fokus 2026-1, korrigerad 2026-08-10",
      active: true
    },
    {
      id: "ch9-14",
      chapter: 9,
      category: "valfardssamhallet",
      topic: "kommunal_valfard",
      difficulty: "easy",
      question: "Vilket av följande är ett exempel på kommunalt styrd välfärd?",
      options: [
        "Försvaret",
        "Barnomsorg",
        "Universitetsforskning",
        "Polisen"
      ],
      correctIndex: 1,
      explanationSv: "Barnomsorg är ett exempel på kommunalt styrd välfärd.",
      studyTitle: "Kommunalt styrd välfärd",
      studyText: "Exempel på kommunalt styrd välfärd är barnomsorg, skolor och utbildning, äldreomsorg och socialtjänst.",
      studyRemember: "Barnomsorg är kommunal välfärd.",
      section: "Kommunerna har ett stort ansvar",
      sourcePage: 31,
      sourceVersion: "Sverige i fokus 2026-1, korrigerad 2026-08-10",
      active: true
    },
    {
      id: "ch9-15",
      chapter: 9,
      category: "valfardssamhallet",
      topic: "barnomsorg",
      difficulty: "easy",
      question: "Vilka verksamheter hör till barnomsorgen?",
      options: [
        "Sjukhus och vårdcentraler",
        "Förskolor och fritidshem",
        "Universitet och högskolor",
        "Polis och räddningstjänst"
      ],
      correctIndex: 1,
      explanationSv: "Förskolor och fritidshem hör till barnomsorgen.",
      studyTitle: "Barnomsorg",
      studyText: "Barnomsorg omfattar förskolor och fritidshem.",
      studyRemember: "Förskolor och fritidshem hör till barnomsorgen.",
      section: "Kommunerna har ett stort ansvar",
      sourcePage: 31,
      sourceVersion: "Sverige i fokus 2026-1, korrigerad 2026-08-10",
      active: true
    },
    {
      id: "ch9-16",
      chapter: 9,
      category: "valfardssamhallet",
      topic: "grundskola",
      difficulty: "medium",
      question: "Vilka barn finns det grundskolor för i alla kommuner?",
      options: [
        "Barn mellan 3 och 10 år",
        "Barn mellan 6 och 16 år",
        "Barn mellan 10 och 18 år",
        "Barn mellan 12 och 20 år"
      ],
      correctIndex: 1,
      explanationSv: "I alla kommuner finns grundskolor för barn mellan 6 och 16 år.",
      studyTitle: "Grundskolan",
      studyText: "I alla kommuner finns grundskolor för barn mellan 6 och 16 år. Det finns också gymnasieskolor och kommunal vuxenutbildning.",
      studyRemember: "Grundskola: 6–16 år.",
      section: "Kommunerna har ett stort ansvar",
      sourcePage: 31,
      sourceVersion: "Sverige i fokus 2026-1, korrigerad 2026-08-10",
      active: true
    },
    {
      id: "ch9-17",
      chapter: 9,
      category: "valfardssamhallet",
      topic: "aldreomsorg",
      difficulty: "easy",
      question: "Vem ska enligt svensk lag erbjuda äldre stöd och hjälp?",
      options: [
        "Kommunen",
        "Polisen",
        "Universiteten",
        "Fackförbunden"
      ],
      correctIndex: 0,
      explanationSv: "Enligt svensk lag ska kommunerna erbjuda äldre stöd och hjälp.",
      studyTitle: "Äldreomsorg",
      studyText: "Enligt svensk lag ska kommuner erbjuda äldre stöd och hjälp. Kommunen kan ge vård och service så att äldre kan bo kvar hemma.",
      studyRemember: "Kommunen ansvarar för stöd och hjälp till äldre.",
      section: "Kommunerna har ett stort ansvar",
      sourcePage: 31,
      sourceVersion: "Sverige i fokus 2026-1, korrigerad 2026-08-10",
      active: true
    },
    {
      id: "ch9-18",
      chapter: 9,
      category: "valfardssamhallet",
      topic: "aldreomsorg",
      difficulty: "easy",
      question: "Vad kan hända om en äldre person inte längre kan bo kvar hemma?",
      options: [
        "Personen måste lämna kommunen",
        "Personen kan flytta till ett boende anpassat för äldre",
        "Personen måste flytta till ett sjukhus permanent",
        "Staten tar över bostaden"
      ],
      correctIndex: 1,
      explanationSv: "Om det inte fungerar att bo kvar hemma kan personen flytta till ett boende anpassat för äldre.",
      studyTitle: "Boende för äldre",
      studyText: "Kommunen kan ge vård och service så att äldre kan bo kvar hemma. Om det inte fungerar kan de flytta till ett boende anpassat för äldre personer.",
      studyRemember: "Äldre kan få hjälp hemma eller flytta till ett anpassat boende.",
      section: "Kommunerna har ett stort ansvar",
      sourcePage: 31,
      sourceVersion: "Sverige i fokus 2026-1, korrigerad 2026-08-10",
      active: true
    },
    {
      id: "ch9-19",
      chapter: 9,
      category: "valfardssamhallet",
      topic: "socialtjansten",
      difficulty: "easy",
      question: "Var finns socialtjänsten?",
      options: [
        "Bara i Stockholm",
        "I varje kommun",
        "Bara i regionerna",
        "Bara på sjukhusen"
      ],
      correctIndex: 1,
      explanationSv: "I varje kommun finns en socialtjänst.",
      studyTitle: "Socialtjänsten",
      studyText: "I varje kommun finns en socialtjänst som ansvarar för att de som behöver får stöd och skydd.",
      studyRemember: "Det finns en socialtjänst i varje kommun.",
      section: "Kommunerna har ett stort ansvar",
      sourcePage: 31,
      sourceVersion: "Sverige i fokus 2026-1, korrigerad 2026-08-10",
      active: true
    },
    {
      id: "ch9-20",
      chapter: 9,
      category: "valfardssamhallet",
      topic: "socialtjansten",
      difficulty: "easy",
      question: "Vad ansvarar socialtjänsten för?",
      options: [
        "Att bestämma räntan",
        "Att ge stöd och skydd till dem som behöver det",
        "Att sköta Sveriges försvar",
        "Att driva universitet"
      ],
      correctIndex: 1,
      explanationSv: "Socialtjänsten ansvarar för att de som behöver får stöd och skydd.",
      studyTitle: "Socialtjänstens uppgift",
      studyText: "Socialtjänsten ansvarar för att de som behöver får stöd och skydd. Det kan vara omsorg, vård och service, rådgivning, ekonomisk hjälp och annat bistånd.",
      studyRemember: "Socialtjänsten ger stöd och skydd.",
      section: "Kommunerna har ett stort ansvar",
      sourcePage: 31,
      sourceVersion: "Sverige i fokus 2026-1, korrigerad 2026-08-10",
      active: true
    },
    {
      id: "ch9-21",
      chapter: 9,
      category: "valfardssamhallet",
      topic: "socialtjansten",
      difficulty: "medium",
      question: "Vilka kan få hjälp av socialtjänsten?",
      options: [
        "Bara äldre personer",
        "Bara barn",
        "Personer och familjer som behöver stöd och skydd",
        "Bara personer som arbetar"
      ],
      correctIndex: 2,
      explanationSv: "Socialtjänsten kan hjälpa olika personer och familjer som behöver stöd och skydd.",
      studyTitle: "Vem kan socialtjänsten hjälpa?",
      studyText: "Socialtjänsten kan bland annat hjälpa familjer som saknar tillräckligt med pengar, personer utan bostad, människor med missbruksproblem och personer som utsätts för hot och våld.",
      studyRemember: "Socialtjänsten kan hjälpa människor i många olika utsatta situationer.",
      section: "Kommunerna har ett stort ansvar",
      sourcePage: 31,
      sourceVersion: "Sverige i fokus 2026-1, korrigerad 2026-08-10",
      active: true
    },
    {
      id: "ch9-22",
      chapter: 9,
      category: "valfardssamhallet",
      topic: "socialtjansten",
      difficulty: "easy",
      question: "Kan socialtjänsten hjälpa personer med funktionsnedsättning?",
      options: [
        "Ja",
        "Nej",
        "Bara om personen är pensionär",
        "Bara om personen bor på sjukhus"
      ],
      correctIndex: 0,
      explanationSv: "Ja. Socialtjänsten kan ge stöd och hjälp till personer med funktionsnedsättning.",
      studyTitle: "Socialtjänsten och funktionsnedsättning",
      studyText: "Socialtjänsten kan ge stöd och hjälp till personer med funktionsnedsättning och ge råd om och hjälp till arbete och studier.",
      studyRemember: "Socialtjänsten kan stödja personer med funktionsnedsättning.",
      section: "Kommunerna har ett stort ansvar",
      sourcePage: 31,
      sourceVersion: "Sverige i fokus 2026-1, korrigerad 2026-08-10",
      active: true
    }
  ];

  window.SVERIGEQUIZ_QUESTIONS.push(...chapterQuestions);
})();
