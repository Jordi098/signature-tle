import React from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'

const chapters = [
  {
    id: 'tle-3',
    number: 'TLE 3',
    title: 'TLE 3 - Het woud van verhalen en waarden',
    atmosphere: 'Bosachtig, onderzoekend en mysterieus',
    tone: 'forest',
    intro:
      'De reis begint tussen hoge bomen, zachte mist en kleine tekens langs het pad. In TLE 3 leerde ik beter luisteren, kijken en samenwerken door verhalen visueel te maken en waarden zichtbaar te bespreken.',
    methods: [
      {
        icon: 'sketch',
        title: 'Metaforen tekenen tijdens interviews',
        text:
          'Tijdens interviews tekende ik metaforen bij wat iemand vertelde. Hierdoor bleef het interview beter in mijn hoofd zitten. Door er een beeld bij te maken, kon ik de antwoorden beter begrijpen en onthouden. Ik ontdekte dat visueel werken goed bij mij past en ik wil deze methode vaker gebruiken tijdens toekomstig onderzoek.'
      },
      {
        icon: 'compass',
        title: 'Make Me Think',
        text:
          'Met Make Me Think ontdekte ik welke waarden teamleden belangrijk vinden. Iedereen heeft andere waarden, normen en perspectieven. Hierdoor begreep ik beter waarom mensen binnen een team verschillende keuzes maken. Ik leerde om niet alleen vanuit mijn eigen perspectief te kijken. Deze methode hielp mij om bewuster samen te werken.'
      }
    ],
    reflectionTitle: 'Wat ik leerde in TLE 3',
    reflection:
      'In TLE 3 ontdekte ik dat onderzoek niet alleen bestaat uit luisteren en informatie opschrijven. Door metaforen te tekenen kreeg ik een duidelijker beeld van wat iemand bedoelde. Met Make Me Think leerde ik dat iedereen vanuit andere waarden naar een probleem kijkt. Hierdoor ben ik bewuster gaan luisteren en samenwerken.',
    visualNotes: ['Schetsboek', 'Gedachtenwolken', 'Kompas', 'Waarden-symbolen']
  },
  {
    id: 'tle-4',
    number: 'TLE 4',
    title: 'TLE 4 - De vallei van waarde en ondernemerschap',
    atmosphere: 'Opbouwend, concreet en ondernemend',
    tone: 'valley',
    intro:
      'Het pad opent zich naar een vallei waar ideeën worden getest, aangepast en opgebouwd. In TLE 4 kreeg ik meer grip op waarde, ondernemerschap en de redenen achter keuzes van gebruikers.',
    methods: [
      {
        icon: 'blueprint',
        title: 'Businessmodel',
        text:
          'Ik had in het begin veel moeite met het businessmodel. Het was nieuw en voelde eerst nogal vaag. Hoe vaker ik ermee werkte, hoe duidelijker het werd. We hebben het businessmodel ongeveer drie keer veranderd. Door die aanpassingen begreep ik steeds beter hoe de onderdelen met elkaar verbonden zijn. Uiteindelijk vind ik dat we een goed en duidelijk businessmodel hebben gemaakt. Ik leerde dat een eerste versie niet meteen perfect hoeft te zijn.'
      },
      {
        icon: 'lens',
        title: 'Jobs to Be Done',
        text:
          'Ik begrijp nu beter wat Jobs to Be Done betekent. De methode gaat over wat een doelgroep echt probeert te bereiken. Het kijkt niet alleen naar wat een gebruiker doet, maar vooral naar de reden erachter. Ik wil Jobs to Be Done toevoegen aan mijn professionele toolkit. Ik kan deze methode gebruiken om beter te begrijpen wat de doelen, behoeften en motivaties van een doelgroep zijn. Ik heb geleerd dat sommige jobs elkaar kunnen overlappen. Daarom is het belangrijk om hoofdjobs en kleinere subjobs van elkaar te onderscheiden.'
      },
      {
        icon: 'crystal',
        title: 'Waardepropositie',
        text:
          'Door met de waardepropositie te werken kreeg ik steeds meer inzicht in hoe je een behoefte vertaalt naar waarde voor een gebruiker. Ik leerde voor wie een oplossing bedoeld is, welk probleem je oplost en waarom iemand voor een bepaalde oplossing zou kiezen. De waardepropositie hielp mij om de verbinding te maken tussen de behoefte van de doelgroep en onze oplossing.'
      },
      {
        icon: 'book',
        title: 'How I Built This',
        text:
          'Uit het boek heb ik minder gehaald dan ik vooraf had verwacht. Het belangrijkste begrip dat ik heb geleerd is bootstrapping. Dit betekent dat iemand een onderneming opbouwt met eigen middelen, zonder meteen afhankelijk te zijn van grote investeerders. Achteraf had ik actiever aantekeningen kunnen maken en het boek beter kunnen koppelen aan ons project.'
      }
    ],
    reflectionTitle: 'Wat ik leerde in TLE 4',
    reflection:
      'In TLE 4 leerde ik dat nieuwe methodes niet meteen duidelijk hoeven te zijn. Door ze meerdere keren toe te passen, feedback te gebruiken en onderdelen opnieuw uit te werken, kreeg ik steeds meer grip op het businessmodel, Jobs to Be Done en de waardepropositie. Ik begrijp nu beter hoe je een behoefte van een doelgroep kunt vertalen naar een passende en waardevolle oplossing.',
    visualNotes: ['Blauwdruk', 'Drie versies', 'Vergrootglas', 'Kristal', 'Boek']
  }
]

function CompassMap() {
  return (
    <svg className="map-illustration" viewBox="0 0 760 420" role="img" aria-label="Een kaart met een kronkelend pad van TLE 3 naar TLE 4">
      <defs>
        <linearGradient id="pathGold" x1="0" x2="1">
          <stop offset="0%" stopColor="#d8b55f" />
          <stop offset="55%" stopColor="#7fa782" />
          <stop offset="100%" stopColor="#8d78b8" />
        </linearGradient>
      </defs>
      <path className="map-paper" d="M38 60c85-31 131 19 214-4 103-29 153-38 250-8 69 22 135 6 199-20l22 325c-78 21-145 43-228 17-89-27-154-24-245 7-73 24-130-18-213 8z" />
      <path className="mountains" d="M515 134l47-64 42 64m-76 0l26-36 29 36m-415 56l38-49 42 49m-67 0l22-28 22 28" />
      <path className="route" d="M96 293c64-72 118-17 166-76 41-51 12-92 78-111 76-22 107 54 156 74 55 23 91-11 153-59" />
      <circle className="map-pin forest-pin" cx="175" cy="251" r="14" />
      <circle className="map-pin valley-pin" cx="583" cy="139" r="14" />
      <path className="compass" d="M94 110l18-50 18 50-18-8zm18-50v42m-26-16h52" />
      <path className="crystal-map" d="M626 262l28-39 29 39-29 48z" />
    </svg>
  )
}

function MethodIcon({ type }) {
  const iconMap = {
    sketch: (
      <>
        <path d="M18 18h54v48H18z" />
        <path d="M28 32h30M28 44h20M54 58l14-14 8 8-14 14h-8z" />
      </>
    ),
    compass: (
      <>
        <circle cx="45" cy="45" r="28" />
        <path d="M45 22v8M45 60v8M22 45h8M60 45h8M39 51l6-22 6 22-6 10z" />
      </>
    ),
    blueprint: (
      <>
        <path d="M16 22h58v46H16z" />
        <path d="M25 32h20v14H25zM51 32h13M51 43h13M25 55h39" />
      </>
    ),
    lens: (
      <>
        <circle cx="38" cy="38" r="20" />
        <path d="M53 53l20 20M32 38h12M38 32v12" />
      </>
    ),
    crystal: (
      <>
        <path d="M45 12l25 30-25 38-25-38z" />
        <path d="M20 42h50M45 12v68M31 42l14 38 14-38" />
      </>
    ),
    book: (
      <>
        <path d="M18 20h24c8 0 12 4 12 12v42c0-8-4-12-12-12H18z" />
        <path d="M54 32c0-8 4-12 12-12h6v42h-6c-8 0-12 4-12 12z" />
      </>
    )
  }

  return (
    <svg className="method-icon" viewBox="0 0 90 90" aria-hidden="true" focusable="false">
      {iconMap[type]}
    </svg>
  )
}

function Chapter({ chapter, index }) {
  return (
    <section className={`chapter ${chapter.tone}`} id={chapter.id} aria-labelledby={`${chapter.id}-title`}>
      <div className="chapter-marker">
        <span>{chapter.number}</span>
      </div>
      <div className="chapter-panel">
        <p className="kicker">{chapter.atmosphere}</p>
        <h2 id={`${chapter.id}-title`}>{chapter.title}</h2>
        <p className="chapter-intro">{chapter.intro}</p>

        <div className="method-grid">
          {chapter.methods.map((method) => (
            <article className="method-card" key={method.title}>
              <MethodIcon type={method.icon} />
              <div>
                <h3>{method.title}</h3>
                <p>{method.text}</p>
              </div>
            </article>
          ))}
        </div>

        <aside className="reflection">
          <h3>{chapter.reflectionTitle}</h3>
          <p>{chapter.reflection}</p>
        </aside>

        <div className="visual-notes" aria-label={`Visuele elementen bij ${chapter.number}`}>
          {chapter.visualNotes.map((note) => (
            <span key={note}>{note}</span>
          ))}
        </div>
      </div>
      {index === 0 && <div className="path-connector" aria-hidden="true" />}
    </section>
  )
}

function App() {
  return (
    <main className="page-shell">
      <section className="hero" aria-labelledby="page-title">
        <div className="hero-copy">
          <p className="eyebrow">Portfolio one-pager</p>
          <h1 id="page-title">Mijn ontwikkeling als Creative Technologist</h1>
          <p className="subtitle">Een reis door TLE 3 en TLE 4</p>
          <p className="hero-text">
            Deze one-pager volgt een kronkelend pad langs twee leergebieden: eerst het woud van verhalen en waarden, daarna de vallei waarin waarde en ondernemerschap steeds concreter worden.
          </p>
        </div>
        <div className="hero-map">
          <CompassMap />
        </div>
      </section>

      <div className="journey-line" aria-hidden="true" />

      {chapters.map((chapter, index) => (
        <Chapter chapter={chapter} index={index} key={chapter.id} />
      ))}

      <section className="summit" aria-label="Afsluiting van de reis">
        <div className="summit-art" aria-hidden="true">
          <span className="sun" />
          <span className="peak peak-one" />
          <span className="peak peak-two" />
          <span className="lookout" />
        </div>
        <div className="summit-grid">
          <article>
            <h3>Mijn groei als professional</h3>
            <p>
              Tijdens TLE 3 en TLE 4 heb ik geleerd om nieuwe methodes uit te proberen, ook wanneer ik ze nog niet volledig begrijp. Ik ben visueler gaan onderzoeken, bewuster gaan samenwerken en beter gaan kijken naar de behoeften van gebruikers. Mijn toolkit is uitgebreid met metaforen tekenen, Make Me Think, het businessmodel, Jobs to Be Done en de waardepropositie.
            </p>
          </article>
          <article>
            <h3>Wat ik anders zou doen</h3>
            <p>
              Bij een volgend project zou ik mijn ontwikkeling eerder en beter vastleggen. Na iedere methode zou ik kort opschrijven wat ik heb gedaan, wat het resultaat was en wat ik de volgende keer anders wil doen. Ook zou ik meer bewijsmateriaal verzamelen, zoals tekeningen, feedback en verschillende versies van mijn werk.
            </p>
          </article>
        </div>
        <blockquote>
          Professionele groei ontstaat niet doordat alles meteen duidelijk is, maar doordat ik blijf proberen, aanpassen en reflecteren.
        </blockquote>
      </section>
    </main>
  )
}

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
