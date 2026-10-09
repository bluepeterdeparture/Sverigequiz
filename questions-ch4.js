// Sverigequiz – kapitel 4
// Politiska val och partier
// Källa: Sverige i fokus 2026-1, korrigerad 2026-08-10

(() => {
  const replacementChapters = new Set([4]);

  window.SVERIGEQUIZ_QUESTIONS =
    window.SVERIGEQUIZ_QUESTIONS.filter(
      q => !replacementChapters.has(q.chapter)
    );

  const chapterQuestions = [
    {
      id: "ch4-01",
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
      id: "ch4-02",
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
      studyRemember: "EU-parlamentet = vart femte år.",
      section: "Val och röstning",
      sourcePage: 14,
      sourceVersion: "Sverige i fokus 2026-1, korrigerad 2026-08-10",
      active: true
    },
    {
      id: "ch4-03",
      chapter: 4,
      category: "val",
      topic: "rostratt-riksdag",
      difficulty: "easy",
      question: "Vad krävs enligt Sverige i fokus för att få rösta i riksdagsvalet?",
      options: [
        "Man ska ha fyllt 18 år och vara svensk medborgare",
        "Man ska ha fyllt 18 år och vara folkbokförd i Sverige",
        "Man ska ha fyllt 21 år och vara svensk medborgare",
        "Man ska vara medlem i ett politiskt parti"
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
      id: "ch4-04",
      chapter: 4,
      category: "val",
      topic: "rostratt-kommun-region",
      difficulty: "medium",
      question: "Vad gäller för den som inte är svensk medborgare och vill rösta i kommun- och regionval?",
      options: [
        "Man kan ha rösträtt om reglerna om bosättning och folkbokföring är uppfyllda",
        "Man kan aldrig rösta i kommun- och regionval",
        "Man får bara rösta i kommunval",
        "Man får bara rösta i regionval"
      ],
      correctIndex: 0,
      explanationSv: "Svenskt medborgarskap krävs inte för kommun- och regionval, men reglerna om bosättning och folkbokföring måste vara uppfyllda.",
      studyTitle: "Kommun- och regionval",
      studyText: "För att rösta i kommun- och regionvalen behöver man inte vara svensk medborgare men ska ha bott och varit folkbokförd i Sverige under sammanlagt tre år. EU-medborgare eller medborgare i Norden behöver endast vara folkbokförda i landet.",
      studyRemember: "Svenskt medborgarskap krävs inte alltid för kommun- och regionval.",
      section: "Val och röstning",
      sourcePage: 14,
      sourceVersion: "Sverige i fokus 2026-1, korrigerad 2026-08-10",
      active: true
    },
    {
      id: "ch4-05",
      chapter: 4,
      category: "val",
      topic: "trearsregel",
      difficulty: "medium",
      question: "Hur länge ska den som omfattas av treårsregeln ha bott och varit folkbokförd i Sverige för att få rösta i kommun- och regionval?",
      options: [
        "Sammanlagt tre år",
        "Ett år",
        "Fyra år",
        "Fem år"
      ],
      correctIndex: 0,
      explanationSv: "Enligt Sverige i fokus ska personen ha bott och varit folkbokförd i Sverige under sammanlagt tre år.",
      studyTitle: "Treårsregeln",
      studyText: "För kommun- och regionval gäller att den som inte är svensk medborgare ska ha bott och varit folkbokförd i Sverige under sammanlagt tre år. EU-medborgare och medborgare i Norden behöver endast vara folkbokförda i landet.",
      studyRemember: "Treårsregeln: sammanlagt tre år.",
      section: "Val och röstning",
      sourcePage: 14,
      sourceVersion: "Sverige i fokus 2026-1, korrigerad 2026-08-10",
      active: true
    },
    {
      id: "ch4-06",
      chapter: 4,
      category: "val",
      topic: "eu-norden-kommun-region",
      difficulty: "medium",
      question: "Vad behöver EU-medborgare och medborgare i Norden enligt Sverige i fokus för att få rösta i kommun- och regionval?",
      options: [
        "De behöver endast vara folkbokförda i Sverige",
        "De måste ha bott i Sverige i fem år",
        "De måste vara svenska medborgare",
        "De måste vara medlemmar i ett svenskt parti"
      ],
      correctIndex: 0,
      explanationSv: "EU-medborgare och medborgare i Norden behöver endast vara folkbokförda i Sverige.",
      studyTitle: "EU- och nordiska medborgare",
      studyText: "EU-medborgare eller medborgare i Norden behöver endast vara folkbokförda i landet för att rösta i kommun- och regionval.",
      studyRemember: "EU och Norden: folkbokföring räcker enligt materialet.",
      section: "Val och röstning",
      sourcePage: 14,
      sourceVersion: "Sverige i fokus 2026-1, korrigerad 2026-08-10",
      active: true
    },
    {
      id: "ch4-07",
      chapter: 4,
      category: "val",
      topic: "eu-rostratt",
      difficulty: "medium",
      question: "I vilket land röstar en EU-medborgare till EU-parlamentet enligt Sverige i fokus?",
      options: [
        "I det land där personen är folkbokförd",
        "Alltid i det land där personen föddes",
        "I vilket EU-land som helst",
        "Alltid i Sverige"
      ],
      correctIndex: 0,
      explanationSv: "EU-medborgare röstar till EU-parlamentet i det land där de är folkbokförda.",
      studyTitle: "Rösta till EU-parlamentet",
      studyText: "EU-medborgare röstar till EU-parlamentet i det land där de är folkbokförda.",
      studyRemember: "EU-val: landet där EU-medborgaren är folkbokförd.",
      section: "Val och röstning",
      sourcePage: 14,
      sourceVersion: "Sverige i fokus 2026-1, korrigerad 2026-08-10",
      active: true
    },
    {
      id: "ch4-08",
      chapter: 4,
      category: "val",
      topic: "folkomrostning",
      difficulty: "medium",
      question: "Vad betyder det att folkomröstningar i Sverige är rådgivande?",
      options: [
        "Politikerna måste inte följa resultatet",
        "Bara politiker får rösta",
        "Resultatet hålls hemligt",
        "De får bara hållas i kommuner"
      ],
      correctIndex: 0,
      explanationSv: "Folkomröstningar är rådgivande, vilket betyder att politikerna inte måste följa resultatet.",
      studyTitle: "Folkomröstningar",
      studyText: "Folkomröstningar kan hållas nationellt, i en region eller i en kommun. De är rådgivande, så politikerna måste inte följa resultatet.",
      studyRemember: "Rådgivande = politikerna måste inte följa resultatet.",
      section: "Folkomröstningar",
      sourcePage: 14,
      sourceVersion: "Sverige i fokus 2026-1, korrigerad 2026-08-10",
      active: true
    },
    {
      id: "ch4-09",
      chapter: 4,
      category: "val",
      topic: "folkomrostning-euro",
      difficulty: "medium",
      question: "Vad blev resultatet av folkomröstningen om euro år 2003?",
      options: [
        "Folket röstade nej och Sverige behöll kronan",
        "Folket röstade ja och Sverige införde euro",
        "Folket röstade för att ha både kronan och euro",
        "Omröstningen avbröts"
      ],
      correctIndex: 0,
      explanationSv: "Folket röstade nej till att byta ut den svenska kronan mot euro. Sverige behöll kronan.",
      studyTitle: "Folkomröstningen om euro",
      studyText: "År 2003 höll Sverige en folkomröstning om valutan euro. Folket röstade nej till att byta ut den svenska kronan mot euro och Sverige behöll den svenska kronan.",
      studyRemember: "2003: nej till euro – kronan behölls.",
      section: "Folkomröstningar",
      sourcePage: 14,
      sourceVersion: "Sverige i fokus 2026-1, korrigerad 2026-08-10",
      active: true
    },
    {
      id: "ch4-10",
      chapter: 4,
      category: "val",
      topic: "rostkort",
      difficulty: "easy",
      question: "Vad får den som har rätt att rösta hemskickat före valet?",
      options: [
        "Ett röstkort",
        "En valsedel från regeringen",
        "Ett medlemskort",
        "Ett pass"
      ],
      correctIndex: 0,
      explanationSv: "Den som har rätt att rösta får ett röstkort hemskickat före valet.",
      studyTitle: "Röstkort",
      studyText: "De som har rätt att rösta får ett röstkort hemskickat före valet. Där står vilken vallokal man ska gå till.",
      studyRemember: "Före valet får den röstberättigade ett röstkort.",
      section: "Så här går det till att rösta",
      sourcePage: 14,
      sourceVersion: "Sverige i fokus 2026-1, korrigerad 2026-08-10",
      active: true
    },
    {
      id: "ch4-11",
      chapter: 4,
      category: "val",
      topic: "fortidsrostning",
      difficulty: "easy",
      question: "Kan man rösta före valdagen?",
      options: [
        "Ja, det går att rösta i förväg på särskilda platser",
        "Nej, man får bara rösta på valdagen",
        "Ja, men bara i riksdagsval",
        "Ja, men bara i EU-val"
      ],
      correctIndex: 0,
      explanationSv: "Det går att rösta i förväg på särskilda platser.",
      studyTitle: "Rösta i förväg",
      studyText: "Det går att rösta i förväg på särskilda platser. I vallokalen finns valsedlar till de olika partierna.",
      studyRemember: "Det går att förtidsrösta.",
      section: "Så här går det till att rösta",
      sourcePage: 15,
      sourceVersion: "Sverige i fokus 2026-1, korrigerad 2026-08-10",
      active: true
    },
    {
      id: "ch4-12",
      chapter: 4,
      category: "val",
      topic: "hemliga-val",
      difficulty: "easy",
      question: "Varför röstar man bakom en skärm?",
      options: [
        "För att ingen annan ska kunna se vilket val man gör",
        "För att valpersonalen ska välja åt den som röstar",
        "För att partierna ska kunna kontrollera rösten",
        "För att rösten ska bli offentlig efter valet"
      ],
      correctIndex: 0,
      explanationSv: "Valen är hemliga. Därför röstar man bakom en skärm så att ingen annan kan se vilket val man gör.",
      studyTitle: "Hemliga val",
      studyText: "Valen är hemliga. Alla röstar bakom en skärm så att ingen annan ska kunna se vilket val man gör.",
      studyRemember: "Valet är hemligt.",
      section: "Så här går det till att rösta",
      sourcePage: 15,
      sourceVersion: "Sverige i fokus 2026-1, korrigerad 2026-08-10",
      active: true
    },
    {
      id: "ch4-13",
      chapter: 4,
      category: "partier",
      topic: "politiska-partier",
      difficulty: "easy",
      question: "Vad är en viktig uppgift för politiska partier?",
      options: [
        "Att samla människor med gemensamma idéer om hur samhället ska styras",
        "Att bestämma vilka domar domstolar ska ge",
        "Att bestämma hur alla väljare ska rösta",
        "Att ersätta riksdagen mellan valen"
      ],
      correctIndex: 0,
      explanationSv: "Politiska partier samlar människor med gemensamma idéer om hur samhället ska styras.",
      studyTitle: "Politiska partier",
      studyText: "Politiska partier samlar människor med gemensamma idéer om hur samhället ska styras. De föreslår olika lösningar och driver frågor som de tycker är viktiga.",
      studyRemember: "Partier samlar människor med gemensamma politiska idéer.",
      section: "Politiska partier",
      sourcePage: 15,
      sourceVersion: "Sverige i fokus 2026-1, korrigerad 2026-08-10",
      active: true
    },
    {
      id: "ch4-14",
      chapter: 4,
      category: "partier",
      topic: "politiskt-engagemang",
      difficulty: "easy",
      question: "Vad kan den som vill påverka innehållet i politiken göra?",
      options: [
        "Bli medlem i ett politiskt parti",
        "Bestämma vilka lagar som ska gälla på egen hand",
        "Utse regeringen utan val",
        "Bestämma hur andra ska rösta"
      ],
      correctIndex: 0,
      explanationSv: "Alla som vill kan bli medlemmar i ett politiskt parti för att påverka innehållet i politiken.",
      studyTitle: "Engagera sig politiskt",
      studyText: "Alla som vill kan bli medlemmar i ett politiskt parti för att påverka innehållet i politiken. Det går även att starta ett nytt parti tillsammans med andra.",
      studyRemember: "Man kan engagera sig i ett parti och påverka politiken.",
      section: "Politiska partier",
      sourcePage: 15,
      sourceVersion: "Sverige i fokus 2026-1, korrigerad 2026-08-10",
      active: true
    },
    {
      id: "ch4-15",
      chapter: 4,
      category: "partier",
      topic: "valkampanj",
      difficulty: "medium",
      question: "Hur försöker partierna övertyga väljarna under valrörelsen?",
      options: [
        "Genom bland annat debatter, möten, politisk reklam och kampanjer",
        "Genom att bestämma vad väljarna måste rösta på",
        "Genom att låta domstolar välja parti",
        "Genom att ställa in politiska möten"
      ],
      correctIndex: 0,
      explanationSv: "Under valrörelsen försöker partierna övertyga väljarna genom debatter, möten, politisk reklam och kampanjer.",
      studyTitle: "Valrörelsen",
      studyText: "Under valrörelsen inför valen försöker partierna övertyga väljarna genom debatter, möten, politisk reklam och kampanjer.",
      studyRemember: "Valrörelse: partierna försöker övertyga väljarna.",
      section: "Politiska partier",
      sourcePage: 15,
      sourceVersion: "Sverige i fokus 2026-1, korrigerad 2026-08-10",
      active: true
    },
    {
      id: "ch4-16",
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
      studyText: "Proportionella val betyder att partierna får platser i riksdagen eller i region- och kommunfullmäktige utifrån den andel röster de fått.",
      studyRemember: "Andel röster påverkar andelen platser.",
      section: "Proportionella val",
      sourcePage: 15,
      sourceVersion: "Sverige i fokus 2026-1, korrigerad 2026-08-10",
      active: true
    },
    {
      id: "ch4-17",
      chapter: 4,
      category: "val",
      topic: "partisamarbete",
      difficulty: "medium",
      question: "Varför behöver partier ofta samarbeta?",
      options: [
        "För att få majoritet för sina politiska förslag",
        "För att alla partier måste ha samma politik",
        "För att valen annars blir ogiltiga",
        "För att fyraprocentsspärren förbjuder ensamma partier"
      ],
      correctIndex: 0,
      explanationSv: "Partier behöver ofta samarbeta för att få majoritet för sina politiska förslag.",
      studyTitle: "Samarbete mellan partier",
      studyText: "Eftersom platserna fördelas proportionellt behöver partier ofta samarbeta för att få majoritet för sina politiska förslag.",
      studyRemember: "Samarbete kan behövas för att få majoritet.",
      section: "Proportionella val",
      sourcePage: 15,
      sourceVersion: "Sverige i fokus 2026-1, korrigerad 2026-08-10",
      active: true
    },
    {
      id: "ch4-18",
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
      studyRemember: "Riksdagen = minst fyra procent.",
      section: "Proportionella val",
      sourcePage: 15,
      sourceVersion: "Sverige i fokus 2026-1, korrigerad 2026-08-10",
      active: true
    },
    {
      id: "ch4-19",
      chapter: 4,
      category: "partier",
      topic: "riksdagspartier",
      difficulty: "medium",
      question: "Vilken grupp består bara av partier som enligt Sverige i fokus sitter i riksdagen fram till valet 2026?",
      options: [
        "Centerpartiet, Kristdemokraterna, Liberalerna och Miljöpartiet",
        "Centerpartiet, Feministiskt initiativ, Liberalerna och Miljöpartiet",
        "Kristdemokraterna, Piratpartiet, Moderaterna och Vänsterpartiet",
        "Moderaterna, Socialdemokraterna, Medborgerlig Samling och Vänsterpartiet"
      ],
      correctIndex: 0,
      explanationSv: "Centerpartiet, Kristdemokraterna, Liberalerna och Miljöpartiet finns alla i materialets lista över riksdagspartier fram till valet 2026.",
      studyTitle: "Partier i riksdagen",
      studyText: "Sverige i fokus listar följande partier i riksdagen fram till valet 2026: Centerpartiet, Kristdemokraterna, Liberalerna, Miljöpartiet, Moderaterna, Socialdemokraterna, Sverigedemokraterna och Vänsterpartiet.",
      studyRemember: "Materialet listar åtta riksdagspartier fram till valet 2026.",
      section: "Politiska partier i riksdagen",
      sourcePage: 15,
      sourceVersion: "Sverige i fokus 2026-1, korrigerad 2026-08-10",
      active: true
    },
    {
      id: "ch4-20",
      chapter: 4,
      category: "partier",
      topic: "lokala-partier",
      difficulty: "medium",
      question: "Vad kan finnas i region- och kommunval utöver partier med politik på riksnivå?",
      options: [
        "Särskilda partier med politik bara för den egna regionen eller kommunen",
        "Partier som utses av domstolar",
        "Partier som bara får röster från riksdagen",
        "Partier som inte får delta i valrörelsen"
      ],
      correctIndex: 0,
      explanationSv: "I region- och kommunval brukar det finnas särskilda partier som bara har politik för sin region eller kommun och inte på riksnivå.",
      studyTitle: "Regionala och lokala partier",
      studyText: "I region- och kommunvalen brukar det finnas särskilda partier som endast har en politik för just sin region eller kommun, inte på riksnivå.",
      studyRemember: "Det kan finnas särskilda regionala och lokala partier.",
      section: "Politiska partier i riksdagen",
      sourcePage: 15,
      sourceVersion: "Sverige i fokus 2026-1, korrigerad 2026-08-10",
      active: true
    }
  ];

  window.SVERIGEQUIZ_QUESTIONS.push(...chapterQuestions);
})();
