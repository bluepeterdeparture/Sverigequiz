# Sverigequiz

En enkel, mobilvänlig webbapp för att träna svensk samhällskunskap och svenska.

## Version 1 – mål

- 10 slumpade frågor per omgång
- fyra svarsalternativ A–D
- direkt rätt/fel-feedback
- kort förklaring
- lokal profil per enhet
- enkel resultathistorik
- inga diagram
- ingen molninloggning ännu
- arkitekturen ska kunna byggas ut senare

## Struktur

- `index.html` – appens skärmar
- `style.css` – design
- `app.js` – quizlogik
- `questions.js` – separat frågebank
- `storage.js` – lokal profil och resultathistorik

## Dataprinciper

- Varje fråga har stabilt unikt ID.
- Varje fråga har kategori, källa och källversion.
- Frågor tas inte bort vid ändringar – de kan inaktiveras.
- Resultat sparar fråge-ID:n, inte hela frågetexter.
- Användare, frågor, quiz-sessioner och resultat hålls separata.

## Integritet

- Privat som standard.
- Ingen offentlig topplista.
- Ingen personlig data utöver valt visningsnamn i v1.
- Framtida jämförelse ska kräva ömsesidigt godkännande.
- Framtida vänkoppling ska kunna tas bort när som helst.

## Källa

Frågorna ska baseras på det officiella utbildningsmaterialet *Sverige i fokus* från UHR/Skolverket.
Frågorna och förklaringarna i Sverigequiz ska vara egna formuleringar, inte kopierade stycken.

## Senare, inte nu

- 60-frågors provläge
- träna på mina fel
- thai-förklaringar
- molnlagring och inloggning
- flera användare och privat resultatjämförelse
- fler språk
