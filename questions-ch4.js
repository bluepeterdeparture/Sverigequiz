// Sverigequiz – kapitel 4
// Politiska val och partier
// Källa: Sverige i fokus 2026-1, korrigerad 2026-08-10

(() => {
  const replacementChapters = new Set([4]);

  // Ta bort alla äldre kapitel 4-frågor innan de nya läggs till.
  // Detta förhindrar dubbletter från questions.js.
  window.SVERIGEQUIZ_QUESTIONS =
    window.SVERIGEQUIZ_QUESTIONS.filter(
      q => !replacementChapters.has(q.chapter)
    );

  const chapterQuestions = [
    {
      id: "q0057",
      chapter: 4,
      category: "val",
      topic: "valintervall",
      difficulty: "easy",
      question: "Hur ofta hålls val till riksdag, regionfullmäktige och kommunfullmäktige?",
      options: [
        "Vart fjärde år",
        "Vart tredje år",
        "Vart femte år",
        "Vart sjätte år"
      ],
      correctIndex: 0,
      explanationSv: "Val till riksdag, regionfullmäktige och kommunfullmäktige hålls vart fjärde år.",
      studyTitle: "Val i Sverige",
      studyText: "Val till riksdag, regionfullmäktige och kommunfullmäktige hålls vart fjärde år. Val till EU-parlamentet hålls vart femte år.",
      studyRemember: "Riksdag, region och kommun = vart fjärde år.",
      section: "Val och röstning",
      sourcePage: 14,
      sourceVersion: "Sverige i fokus 2026-1, korrigerad 2026-08-10",
      active: true
    },
    {
      id: "q0058",
      chapter: 4,
      category: "val",
      topic: "eu-val",
      difficulty: "easy",
      question: "Hur ofta hålls val till EU-parlamentet?",
      options: [
        "Vart femte år",
        "Vart fjärde år",
        "Vart tredje år",
        "Vart sjätte år"
      ],
      correctIndex: 0,
      explanationSv: "Val till EU-parlamentet hålls vart femte år.",
      studyTitle: "Val till EU-parlamentet",
      studyText: "Val till EU-parlamentet hålls vart femte år. EU-medborgare röstar till EU-parlamentet i det land där de är folkbokförda.",
      studyRemember: "EU-parlamentet = val vart femte år.",
      section: "Val och röstning",
      sourcePage: 14,
      sourceVersion: "Sverige i fokus 2026-1, korrigerad 2026-08-10",
      active: true
    },
    {
      id: "q0059",
      chapter: 4,
      category: "val",
      topic: "rostratt-riksdag",
      difficulty: "easy",
      question: "Vad krävs för att få rösta i riksdagsvalet?",
      options: [
        "Man ska ha fyllt 18 år och vara svensk medborgare",
        "Man ska ha fyllt 18 år och ha bott i Sverige i ett år",
        "Man ska ha fyllt 21 år och vara svensk medborgare",
        "Man ska ha fyllt 18 år och vara medlem i ett politiskt parti"
      ],
      correctIndex: 0,
      explanationSv: "För att rösta i riksdagsvalet ska man ha fyllt 18 år och vara svensk medborgare.",
      studyTitle: "Rösträtt till riksdagen",
      studyText: "För att ha rätt att rösta ska man ha fyllt 18 år. För att rösta i riksdagsvalet måste man även vara svensk medborgare.",
      studyRemember: "Riksdagsval: 18 år och svenskt medborgarskap.",
      section: "Val och röstning",
      sourcePage: 14,
      sourceVersion: "Sverige i fokus 2026-1, korrigerad 2026-08-10",
      active: true
    },
    {
      id: "q0060",
      chapter: 4,
      category: "val",
      topic: "rostratt-kommun-region",
      difficulty: "medium",
      question: "Måste man vara svensk medborgare för att få rösta i kommun- och regionval?",
      options: [
        "Nej, men reglerna för rösträtt måste vara uppfyllda",
        "Ja, alltid",
        "Ja, men bara i kommunval",
        "Ja, men bara i regionval"
      ],
      correctIndex: 0,
      explanationSv: "Man behöver inte vara svensk medborgare för att rösta i kommun- och regionval, men reglerna för rösträtt måste vara uppfyllda.",
      studyTitle: "Kommun- och regionval",
      studyText: "För att rösta i kommun- och regionvalen behöver man inte vara svensk medborgare men ska ha bott och varit folkbokförd i Sverige under sammanlagt tre år. EU-medborgare eller medborgare i Norden behöver endast vara folkbokförda i landet.",      studyRemember: "Svenskt medborgarskap krävs inte för kommun- och regionval.",
      studyRemember: "Svenskt medborgarskap krävs inte för kommun- och regionval.",
      section: "Val och röstning",
      sourcePage: 14,
      sourceVersion: "Sverige i fokus 2026-1, korrigerad 2026-08-10",
      active: true
    },
    {
      id: "q0061",
      chapter: 4,
      category: "val",
      topic: "folkomrostning",
      difficulty: "medium",
      question: "Vad betyder det att en folkomröstning i Sverige är rådgivande?",
      options: [
        "Politikerna måste inte följa resultatet",
        "Bara politiker får rösta",
        "Resultatet hålls hemligt",
        "Folkomröstningen gäller bara kommuner"
      ],
      correctIndex: 0,
      explanationSv: "Folkomröstningar är rådgivande, vilket betyder att politikerna inte måste följa resultatet.",
      studyTitle: "Folkomröstningar",
      studyText: "Ibland hålls folkomröstningar om en särskild fråga. De kan hållas nationellt, i en region eller i en kommun. Folkomröstningarna är rådgivande, så politikerna måste inte följa resultatet.",
      studyRemember: "Folkomröstningar är rådgivande.",
      section: "Folkomröstningar",
      sourcePage: 14,
      sourceVersion: "Sverige i fokus 2026-1, korrigerad 2026-08-10",
      active: true
    },
    {
      id: "q0062",
      chapter: 4,
      category: "val",
      topic: "folkomrostning-euro",
      difficulty: "medium",
      question: "Vad blev resultatet av folkomröstningen om euro år 2003?",
      options: [
        "Folket röstade nej och Sverige behöll kronan",
        "Folket röstade ja och Sverige införde euro",
        "Omröstningen avbröts",
        "Sverige införde både kronan och euro som valutor"
      ],
      correctIndex: 0,
      explanationSv: "År 2003 röstade folket nej till att byta ut den svenska kronan mot euro. Sverige behöll kronan.",
      studyTitle: "Folkomröstningen om euro",
      studyText: "År 2003 höll Sverige en folkomröstning om valutan euro. Folket röstade nej till att byta ut den svenska kronan mot euro och Sverige behöll den svenska kronan.",
      studyRemember: "2003: nej till euro – kronan behölls.",
      section: "Folkomröstningar",
      sourcePage: 14,
      sourceVersion: "Sverige i fokus 2026-1, korrigerad 2026-08-10",
      active: true
    },
    {
      id: "q0063",
      chapter: 4,
      category: "val",
      topic: "hemliga-val",
      difficulty: "easy",
      question: "Varför röstar man bakom en skärm i vallokalen?",
      options: [
        "För att ingen annan ska kunna se vilket val man gör",
        "För att valpersonalen ska kunna bestämma rösten",
        "För att bara partierna ska få se rösten",
        "För att rösten ska kunna ändras efter valet"
      ],
      correctIndex: 0,
      explanationSv: "Valen är hemliga. Därför röstar alla bakom en skärm så att ingen annan ska kunna se vilket val man gör.",
      studyTitle: "Hemliga val",
      studyText: "De som har rösträtt får ett röstkort hemskickat före valet. Det går också att rösta i förväg på särskilda platser. Valen är hemliga och alla röstar bakom en skärm så att ingen annan ska kunna se vilket val man gör.",
      studyRemember: "Valet är hemligt.",
      section: "Så här går det till att rösta",
      sourcePage: 14,
      sourceVersion: "Sverige i fokus 2026-1, korrigerad 2026-08-10",
      active: true
    },
    {
      id: "q0064",
      chapter: 4,
      category: "partier",
      topic: "politiska-partier",
      difficulty: "easy",
      question: "Vad gör politiska partier?",
      options: [
        "De samlar människor med gemensamma idéer om hur samhället ska styras",
        "De bestämmer vilka domar domstolar ska ge",
        "De bestämmer hur alla väljare ska rösta",
        "De ersätter riksdagen mellan valen"
      ],
      correctIndex: 0,
      explanationSv: "Politiska partier samlar människor med gemensamma idéer om hur samhället ska styras.",
      studyTitle: "Politiska partier",
      studyText: "Politiska partier samlar människor med gemensamma idéer om hur samhället ska styras. De föreslår olika lösningar och driver frågor som de tycker är viktiga. Alla som vill kan också bli medlemmar i ett politiskt parti.",
      studyRemember: "Partier samlar människor med gemensamma politiska idéer.",
      section: "Politiska partier",
      sourcePage: 15,
      sourceVersion: "Sverige i fokus 2026-1, korrigerad 2026-08-10",
      active: true
    },
    {
      id: "q0065",
      chapter: 4,
      category: "val",
      topic: "proportionella-val",
      difficulty: "medium",
      question: "Vad betyder proportionella val?",
      options: [
        "Partierna får platser utifrån den andel röster de har fått",
        "Det största partiet får alla platser",
        "Alla partier får lika många platser",
        "Platserna fördelas genom lottning"
      ],
      correctIndex: 0,
      explanationSv: "Vid proportionella val får partierna platser utifrån den andel röster de har fått.",
      studyTitle: "Proportionella val",
      studyText: "Proportionella val betyder att partierna får platser i riksdagen eller i region- och kommunfullmäktige utifrån den andel röster de fått. Därför behöver partier ofta samarbeta för att få majoritet för sina politiska förslag.",
      studyRemember: "Andel röster påverkar andelen platser.",
      section: "Proportionella val",
      sourcePage: 15,
      sourceVersion: "Sverige i fokus 2026-1, korrigerad 2026-08-10",
      active: true
    },
    {
      id: "q0066",
      chapter: 4,
      category: "val",
      topic: "fyraprocentssparr",
      difficulty: "medium",
      question: "Hur stor andel av rösterna måste ett parti minst få för att komma in i riksdagen?",
      options: [
        "Fyra procent",
        "Två procent",
        "Fem procent",
        "Tio procent"
      ],
      correctIndex: 0,
      explanationSv: "Ett parti måste få minst fyra procent av rösterna i valet för att komma in i riksdagen.",
      studyTitle: "Fyraprocentsspärren",
      studyText: "För att ett parti ska komma in i riksdagen måste det få minst fyra procent av rösterna i valet. Regeln finns för att hindra att för många partier kommer in i riksdagen, vilket skulle göra det svårare att skapa stabila majoriteter.",
      studyRemember: "Riksdagen = minst fyra procent av rösterna.",
      section: "Proportionella val",
      sourcePage: 15,
      sourceVersion: "Sverige i fokus 2026-1, korrigerad 2026-08-10",
      active: true
    }
  ];

  window.SVERIGEQUIZ_QUESTIONS.push(...chapterQuestions);
})();
