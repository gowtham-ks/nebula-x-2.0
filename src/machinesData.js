export const destinationsMeta = {
  moon: {
    id: 'moon',
    number: '01',
    label: 'MOON',
    title: 'THE MOON · LUNAR ARCHIVE',
    tagline: 'Silent monuments across the lunar maria & highlands',
    count: 4,
    color: '#38BDF8',
    glowColor: 'rgba(56, 189, 248, 0.4)',
    accentClass: 'cyan',
    orbitRadius: 6.5,
    cameraPosition: [0, 1.0, 3.4],
    intro: 'Four historic equipment families rest on the airless lunar regolith, preserved in pristine vacuum for millions of years.'
  },
  mars: {
    id: 'mars',
    number: '02',
    label: 'MARS',
    title: 'MARS · MARTIAN ARCHIVE',
    tagline: 'The rusty sands of the Red Planet where rovers & landers sleep',
    count: 5,
    color: '#FB7185',
    glowColor: 'rgba(251, 113, 133, 0.4)',
    accentClass: 'rose',
    orbitRadius: 10.5,
    cameraPosition: [0, 1.2, 3.7],
    intro: 'Five generations of stationary landers, rovers, and humanity’s first interplanetary aircraft across the ancient deserts of Mars.'
  },
  deep: {
    id: 'deep',
    number: '03',
    label: 'DEEP SPACE',
    title: 'DEEP SPACE & ASTEROIDS',
    tagline: 'Probes drifting past the planets, into the Asteroid Belt and beyond',
    count: 4,
    color: '#A78BFA',
    glowColor: 'rgba(167, 139, 250, 0.4)',
    accentClass: 'violet',
    orbitRadius: 14.5,
    cameraPosition: [0, 2.5, 7.5],
    intro: 'Four pioneering missions in unpowered heliocentric orbits, asteroid resting sites, and interstellar escape trajectories.'
  }
};

export const machines = [
  // ------------------- MOON -------------------
  {
    id: 'apollo-lm',
    destination: 'moon',
    name: 'Apollo Lunar Modules',
    shortName: 'Apollo LM Descent Stages',
    mission: 'Apollo 11, 12, 14, 15, 16, 17',
    place: 'Tranquility Base, Ocean of Storms, Fra Mauro, Hadley-Apennine, Descartes, Taurus-Littrow',
    coordinates: '0.674° N, 23.473° E (Apollo 11 Tranquility Base)',
    lat: 0.674,
    lon: 23.473,
    locations: [
      { id: 'apollo-11-tranquility', name: 'Apollo 11 · Tranquility Base', lat: 0.674, lon: 23.473, locationType: 'surface', siteDetail: 'Touchdown July 20, 1969. LM Eagle descent platform.', sourceIds: ['NSSDCA-APOLLO-11-LM'] },
      { id: 'apollo-12-storms', name: 'Apollo 12 · Ocean of Storms', lat: -3.013, lon: -23.422, locationType: 'surface', siteDetail: 'Touchdown Nov 19, 1969. Landed ~180m from Surveyor 3.', sourceIds: ['NSSDCA-APOLLO-12-LM'] },
      { id: 'apollo-14-fra-mauro', name: 'Apollo 14 · Fra Mauro', lat: -3.645, lon: -17.471, locationType: 'surface', siteDetail: 'Touchdown Feb 5, 1971. LM Antares descent stage.', sourceIds: ['NSSDCA-APOLLO-OVERVIEW'] },
      { id: 'apollo-15-hadley', name: 'Apollo 15 · Hadley-Apennine', lat: 26.132, lon: 3.633, locationType: 'surface', siteDetail: 'Touchdown July 30, 1971. First extended J-series landing site.', sourceIds: ['NSSDCA-APOLLO-OVERVIEW'] },
      { id: 'apollo-16-descartes', name: 'Apollo 16 · Descartes Highlands', lat: -8.973, lon: 15.500, locationType: 'surface', siteDetail: 'Touchdown April 21, 1972. LM Orion descent platform.', sourceIds: ['NSSDCA-APOLLO-OVERVIEW'] },
      { id: 'apollo-17-taurus', name: 'Apollo 17 · Taurus-Littrow', lat: 20.191, lon: 30.772, locationType: 'surface', siteDetail: 'Touchdown Dec 11, 1972. LM Challenger descent platform.', sourceIds: ['NSSDCA-APOLLO-OVERVIEW'] }
    ],
    status: 'Mission completed · Inactive monuments',
    tag: 'INACTIVE MONUMENT',
    color: 'cyan',
    stat: '6 Descent Stages on Lunar Surface',
    nssdcId: 'APOLLO-LM-DESCENT-STAGES',
    catalogUrl: 'https://nssdc.gsfc.nasa.gov/planetary/lunar/apollo.html',
    imageUrl: 'https://images-assets.nasa.gov/image/as11-40-5922/as11-40-5922~medium.jpg',
    lead: 'The launch platforms that carried twelve human beings off the lunar surface.',
    desc: 'Six Apollo Lunar Module descent stages remain on the Moon where astronauts used them as sturdy launch pads to fire their ascent stages back into lunar orbit.',
    fact: 'The descent stage stayed behind when the ascent stage lifted off; its golden Kapton thermal insulation and landing legs remain unweathered in the lunar vacuum.',
    cite: 'NSSDCA Master Catalog · Apollo Lunar Surface Missions (1969-059C, 1969-099C)',
    audioText: 'Hello Earth. I am the Apollo Lunar Module Descent Stage. In July 1969, Tranquility Base became my forever home. I provided the throttleable rocket thrust to touch the lunar soil, and served as the steady launch platform that fired humanity back to the stars. My gold foil still reflects the unfiltered light of the sun.',
    storyClassification: 'EDUCATIONAL DRAMATIZATION',
    evidence: {
      engineering: 'Quad-leg landing gear with crushable aluminum honeycomb shock absorbers and throttleable hypergolic descent propulsion system (DPS).',
      engineeringType: 'DOCUMENTED FACT',
      telemetry: 'Served as Apollo lunar surface habitat base station, voice relay, and extravehicular equipment hub.',
      telemetryType: 'DOCUMENTED FACT',
      science: 'Carried early surface experiment packages, solar wind composition collection foils, and field geology tools.',
      scienceType: 'DOCUMENTED FACT',
      status: 'Six inactive monuments resting at verified landing sites across the lunar near side; ascent stages were jettisoned and intentionally impacted the Moon for seismic testing.',
      statusType: 'DOCUMENTED FACT'
    },
    studentGuide: {
      targetAudience: 'Students Aged 13–18 (Secondary School)',
      whatIsIt: 'The lower half of the two-part Apollo Lunar Module (LM). It acted as both a landing craft and a launch pad on the Moon.',
      whyWasItSent: 'NASA needed a lightweight vehicle capable of taking two astronauts from lunar orbit down to the surface, supporting their moonwalks, and launching them back to orbit.',
      howDidItWork: 'It used a rocket engine that could change its thrust like an accelerator pedal, burning hypergolic propellants that ignite on contact. Its four legs absorbed the touchdown shock using crushable aluminum honeycomb.',
      whatDidItDiscover: 'It enabled astronauts to collect 382 kilograms of lunar rocks, deploy experiment packages, and measure the physical strength of the lunar surface.',
      whatHappenedToIt: 'When the astronauts were ready to leave, the top half (Ascent Stage) blasted off using the descent stage as a launch pad. The descent stages remain on the Moon today.',
      whyDoesItMatter: 'They represent humanity’s first physical footprints on another celestial body and remain unweathered because the Moon has no atmosphere or rain to erode them.',
      unexpectedDiscovery: 'During the Apollo 11 touchdown, exhaust gas blew surface dust horizontally at high speeds, creating optical illusions that made it difficult to judge vertical descent velocity.'
    },
    timeline: [
      { step: '01', title: 'DESCENT & LANDING', desc: 'Throttleable hypergolic rocket engine guided touchdown on the Sea of Tranquility on July 20, 1969.', classification: 'DOCUMENTED FACT' },
      { step: '02', title: 'CREW HABITAT & EVA', desc: 'Supported Neil Armstrong and Buzz Aldrin for 21.6 hours on the lunar surface during human history\'s first moonwalk.', classification: 'DOCUMENTED FACT' },
      { step: '03', title: 'ASCENT & ETERNAL REST', desc: 'Ascent engine fired from top of stage. Descent platform remained behind as a permanent historical monument.', classification: 'DOCUMENTED FACT' }
    ],
    earthConnection: 'Materials developed for the LM thermal blanket insulation led directly to modern fire-resistant emergency suits and building insulation on Earth.',
    sources: [
      {
        id: 'NSSDCA-APOLLO-OVERVIEW',
        title: 'The Apollo Program (1963 - 1972) Overview',
        publisher: 'NASA Goddard Space Flight Center / NSSDCA',
        url: 'https://nssdc.gsfc.nasa.gov/planetary/lunar/apollo.html',
        resourceType: 'mission-catalog',
        supports: ['mission-history', 'landing-dates', 'landing-sites', 'operational-status'],
        verificationStatus: 'VERIFIED'
      },
      {
        id: 'NSSDCA-APOLLO-11-LM',
        title: 'Apollo 11 Lunar Module / EASEP Details (1969-059C)',
        publisher: 'NASA NSSDCA Master Catalog',
        url: 'https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=1969-059C',
        resourceType: 'spacecraft-record',
        supports: ['coordinates', 'engineering-subsystems', 'descent-propulsion'],
        verificationStatus: 'VERIFIED'
      },
      {
        id: 'NSSDCA-APOLLO-12-LM',
        title: 'Apollo 12 Lunar Module / ALSEP Details (1969-099C)',
        publisher: 'NASA NSSDCA Master Catalog',
        url: 'https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=1969-099C',
        resourceType: 'spacecraft-record',
        supports: ['coordinates', 'surveyor-3-rendezvous', 'ascent-stage-impact-telemetry'],
        verificationStatus: 'VERIFIED'
      }
    ]
  },
  {
    id: 'lrv',
    destination: 'moon',
    name: 'Lunar Roving Vehicles',
    shortName: 'Apollo LRV Moon Buggies',
    mission: 'Apollo 15, 16, 17',
    place: 'Hadley-Apennine, Descartes Highlands, Taurus-Littrow Valley',
    coordinates: '26.132° N, 3.633° E (Hadley-Apennine, Apollo 15)',
    lat: 26.132,
    lon: 3.633,
    locations: [
      { id: 'lrv-1-hadley', name: 'LRV-1 · Hadley-Apennine (Apollo 15)', lat: 26.132, lon: 3.633, locationType: 'surface', siteDetail: 'Traversed 27.9 km. Parked ~100m east of LM Falcon.', sourceIds: ['NSSDCA-APOLLO-15'] },
      { id: 'lrv-2-descartes', name: 'LRV-2 · Descartes Highlands (Apollo 16)', lat: -8.973, lon: 15.500, locationType: 'surface', siteDetail: 'Traversed 26.7 km across Stone Mountain and North Ray crater.', sourceIds: ['NSSDCA-APOLLO-LRV-OPS'] },
      { id: 'lrv-3-taurus', name: 'LRV-3 · Taurus-Littrow (Apollo 17)', lat: 20.191, lon: 30.772, locationType: 'surface', siteDetail: 'Traversed 35.9 km. Parked at VIP site ~140m from LM Challenger.', sourceIds: ['NSSDCA-APOLLO-LRV-OPS'] }
    ],
    status: 'Mission completed · Parked on lunar surface',
    tag: 'PARKED ON SURFACE',
    color: 'cyan',
    stat: '3 Lunar Roving Vehicles Parked',
    nssdcId: 'APOLLO-LRV',
    catalogUrl: 'https://nssdc.gsfc.nasa.gov/planetary/lunar/apollo.html',
    imageUrl: 'https://images-assets.nasa.gov/image/as17-147-22527/as17-147-22527~medium.jpg',
    lead: 'Three electric surface vehicles, parked forever beneath the stars.',
    desc: 'The battery-powered LRVs dramatically extended the astronauts’ reach across rugged mountains, rilles, and crater plains during the final J-class Apollo missions.',
    fact: 'LRVs were parked several hundred meters from the Lunar Module so their ground-commanded color television cameras could broadcast the liftoff of the ascent stages back to television sets on Earth.',
    cite: 'NSSDCA Apollo Program Records · Catalog of Apollo Experiment Operations',
    audioText: 'I am the Lunar Roving Vehicle. Built with wire mesh tires and an electric motor in each wheel, I gave astronauts wings on the Moon. We drove across Hadley Rille and through the Taurus-Littrow Valley. When Eugene Cernan stepped away in December 1972, my camera panned to watch the ascent stage rise toward orbit.',
    storyClassification: 'EDUCATIONAL DRAMATIZATION',
    evidence: {
      engineering: 'Non-rechargeable zinc-silver oxide batteries, four 0.25-hp DC series-wound electric motors (one per wheel), 80:1 harmonic drive, and woven zinc-coated steel wire mesh chevron tires.',
      engineeringType: 'DOCUMENTED FACT',
      telemetry: 'High-gain steerable dish antenna broadcasting live color television and voice communications to Houston Mission Control.',
      telemetryType: 'DOCUMENTED FACT',
      science: 'Traversed a cumulative 90 kilometers across Apollo 15, 16, and 17, transporting over 280 kg of lunar rock and core samples.',
      scienceType: 'DOCUMENTED FACT',
      status: 'All three vehicles parked at designated standoff distances from LM ascent blast zones, facing the lunar horizons with batteries depleted.',
      statusType: 'DOCUMENTED FACT'
    },
    studentGuide: {
      targetAudience: 'Students Aged 13–18 (Secondary School)',
      whatIsIt: 'A lightweight four-wheeled electric vehicle designed for astronauts to drive on the airless surface of the Moon.',
      whyWasItSent: 'Walking in bulky, pressurized spacesuits was exhausting. The rover allowed astronauts to travel kilometers away from the lander and haul heavy geological tools and rock samples.',
      howDidItWork: 'Instead of air-filled rubber tires (which would burst in a vacuum), it used tires woven from steel piano wire with titanium treads. An electric motor inside each wheel powered the buggy.',
      whatDidItDiscover: 'It enabled astronauts to discover the famous "Genesis Rock" (anorthosite dating back over 4 billion years) and volcanic orange glass at Taurus-Littrow.',
      whatHappenedToIt: 'All three rovers were parked a safe distance away and left behind when Apollo 15, 16, and 17 ended. Their batteries are dead, but their frames remain intact.',
      whyDoesItMatter: 'It proved that wheeled electric mobility is an efficient way to explore planetary surfaces, inspiring all later robotic rovers on Mars.',
      unexpectedDiscovery: 'During Apollo 17, a hammer caught on a fender and snapped it off, showering the astronauts in abrasive lunar dust. Astronauts repaired the fender on the Moon using maps, duct tape, and clamps!'
    },
    timeline: [
      { step: '01', title: 'SPRING-LOADED DEPLOYMENT', desc: 'Unfolded from the side quadrant of Apollo 15 LM in minutes using astronaut lanyards.', classification: 'DOCUMENTED FACT' },
      { step: '02', title: 'TRAVERSING THE RILLES', desc: 'Cruised at up to 13 km/h over boulder fields, reaching distant volcanic craters and rilles.', classification: 'DOCUMENTED FACT' },
      { step: '03', title: 'FINAL ASCENT BROADCAST', desc: 'Broadcast the Apollo 17 ascent stage blastoff in December 1972, then parked permanently under the stars.', classification: 'DOCUMENTED FACT' }
    ],
    earthConnection: 'Lightweight electric drivetrain engineering and computerized harmonic drive gearings pioneered on the LRV accelerated commercial electric vehicle design.',
    sources: [
      {
        id: 'NSSDCA-APOLLO-LRV-OPS',
        title: 'Catalog of Apollo Experiment Operations - Lunar Roving Vehicle',
        publisher: 'NASA Johnson Space Center / NSSDCA',
        url: 'https://nssdc.gsfc.nasa.gov/planetary/lunar/apollo.html',
        resourceType: 'mission-record',
        supports: ['engineering-drivetrain', 'traverse-distances', 'operational-status'],
        verificationStatus: 'VERIFIED'
      },
      {
        id: 'NSSDCA-APOLLO-15',
        title: 'Apollo 15 Command and Service Module / LRV-1 (1971-063A)',
        publisher: 'NASA NSSDCA Master Catalog',
        url: 'https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=1971-063A',
        resourceType: 'spacecraft-record',
        supports: ['coordinates', 'mission-history', 'parked-locations'],
        verificationStatus: 'VERIFIED'
      }
    ]
  },
  {
    id: 'alsep',
    destination: 'moon',
    name: 'ALSEP Scientific Packages',
    shortName: 'Apollo ALSEP Experiments',
    mission: 'Apollo 12, 14, 15, 16, 17 (and Apollo 11 EASEP)',
    place: 'Apollo Surface Landing Sites across Lunar Near Side',
    coordinates: '3.0128° S, 23.4219° W (Ocean of Storms, Apollo 12)',
    lat: -3.012,
    lon: -23.422,
    locations: [
      { id: 'alsep-12', name: 'Apollo 12 ALSEP · Ocean of Storms', lat: -3.013, lon: -23.422, locationType: 'surface', siteDetail: 'Deployed Nov 1969; powered by SNAP-27; shutdown Sept 30, 1977.', sourceIds: ['NSSDCA-APOLLO-OVERVIEW'] },
      { id: 'alsep-14', name: 'Apollo 14 ALSEP · Fra Mauro', lat: -3.645, lon: -17.471, locationType: 'surface', siteDetail: 'Included active seismometer and laser ranging retroreflector (LRRR).', sourceIds: ['NSSDCA-APOLLO-OVERVIEW'] },
      { id: 'alsep-15', name: 'Apollo 15 ALSEP · Hadley-Apennine', lat: 26.132, lon: 3.633, locationType: 'surface', siteDetail: 'Deep drill core heat flow experiment and largest 300-prism LRRR.', sourceIds: ['NSSDCA-APOLLO-OVERVIEW'] },
      { id: 'alsep-16', name: 'Apollo 16 ALSEP · Descartes Highlands', lat: -8.973, lon: 15.500, locationType: 'surface', siteDetail: 'Passive seismometer and heat flow probe array in lunar highlands.', sourceIds: ['NSSDCA-APOLLO-OVERVIEW'] },
      { id: 'alsep-17', name: 'Apollo 17 ALSEP · Taurus-Littrow', lat: 20.191, lon: 30.772, locationType: 'surface', siteDetail: 'Lunar atmospheric composition and gravimeter scientific suite.', sourceIds: ['NSSDCA-APOLLO-OVERVIEW'] }
    ],
    status: 'Inactive powered instruments · Active passive retroreflectors',
    tag: 'MEASUREMENT LEGACY',
    color: 'cyan',
    stat: '5 ALSEP Stations + Laser Reflector Arrays',
    nssdcId: 'APOLLO-ALSEP',
    catalogUrl: 'https://nssdc.gsfc.nasa.gov/planetary/lunar/apollo.html',
    imageUrl: 'https://images-assets.nasa.gov/image/as12-46-6813/as12-46-6813~medium.jpg',
    lead: 'Geophysical stations that listened to the Moon long after the astronauts left.',
    desc: 'Apollo Lunar Surface Experiments Packages gathered data on moonquakes, solar wind, and lunar interior heat flow for nearly a decade until transmitters were officially terminated on September 30, 1977. Meanwhile, passive corner-cube laser retroreflectors continue to operate without power.',
    fact: 'While powered instruments were terminated in September 1977 due to budget constraints, the completely passive corner-cube Lunar Laser Ranging Retroreflectors are still pinged with laser pulses from Earth observatories today.',
    cite: 'NSSDCA Apollo Science Records & ALSEP Termination Report (b32116.pdf)',
    audioText: 'I am the ALSEP network. For eight years after human footprints stopped pressing into the dust, my nuclear-powered SNAP-27 generator gave me voice. My seismometers recorded thousands of moonquakes and mapped the thickness of the lunar crust and deep mantle. While my powered transmitters were turned off in 1977, my passive glass prisms still bounce laser beams back to observatories on Earth today.',
    storyClassification: 'EDUCATIONAL DRAMATIZATION',
    evidence: {
      engineering: 'Powered by ~70-Watt Plutonium-238 radioisotope thermoelectric generators (SNAP-27) designed for extreme day-night temperature swings.',
      engineeringType: 'DOCUMENTED FACT',
      telemetry: 'Continuous real-time scientific telemetry stream until transmitters were officially powered down on September 30, 1977, due to budget constraints.',
      telemetryType: 'DOCUMENTED FACT',
      science: 'Recorded moonquakes (deep, shallow, thermal, and artificial impacts), measured crustal thickness (30–40 km near side), and constrained deep mantle and core properties.',
      scienceType: 'SCIENTIFIC INTERPRETATION',
      status: 'Electronic packages dormant; passive corner-cube Lunar Laser Ranging Retroreflectors remain 100% operational with no power required.',
      statusType: 'DOCUMENTED FACT'
    },
    studentGuide: {
      targetAudience: 'Students Aged 13–18 (Secondary School)',
      whatIsIt: 'A set of science stations left by Apollo astronauts containing seismometers, heat sensors, and laser reflection mirrors.',
      whyWasItSent: 'To study what the inside of the Moon is like, how the Moon cools, and how often space meteorites strike its surface.',
      howDidItWork: 'Powered by a small nuclear generator (SNAP-27) using decaying plutonium heat to generate electricity. This kept instruments running through the freezing, two-week-long lunar nights.',
      whatDidItDiscover: 'It detected thousands of "moonquakes"—some caused by Earth’s gravitational tides and others by meteorites—revealing that the Moon has a crust 30 to 40 km thick and a solid mantle.',
      whatHappenedToIt: 'NASA officially switched off radio communications to the powered stations on September 30, 1977, due to budget cutbacks. The passive laser reflectors need no electricity and still work today.',
      whyDoesItMatter: 'By firing lasers from Earth at ALSEP mirrors and timing the round trip, scientists measure the Earth-Moon distance down to millimeters, proving the Moon drifts outward by 3.8 cm per year.',
      unexpectedDiscovery: 'When spent Apollo rocket stages intentionally crashed into the Moon, the seismic vibrations lasted for hours—leading scientists to describe the Moon as "ringing like a bell" because its dry crust scatters seismic waves without water absorption.'
    },
    timeline: [
      { step: '01', title: 'NUCLEAR DEPLOYMENT', desc: 'Astronauts extracted SNAP-27 fuel capsules from LM casks and aligned telemetry antennas toward Earth.', classification: 'DOCUMENTED FACT' },
      { step: '02', title: 'SEISMIC NETWORK OPERATION', desc: 'Operated from 1969 until September 30, 1977, registering thousands of natural moonquakes and booster impacts.', classification: 'DOCUMENTED FACT' },
      { step: '03', title: 'ENDURING LASER RANGING', desc: 'Earth-bound observatories in Texas, Hawaii, and France continue bouncing green laser pulses off passive retroreflectors.', classification: 'DOCUMENTED FACT' }
    ],
    earthConnection: 'Continuous Lunar Laser Ranging provides the most stringent experimental tests of Einstein’s General Theory of Relativity and measures the Moon\'s 3.8 cm/year orbital drift.',
    sources: [
      {
        id: 'NSSDCA-ALSEP-TERMINATION',
        title: 'ALSEP Termination Report (b32116.pdf)',
        publisher: 'NASA NSSDCA Miscellaneous Documents',
        url: 'ftp://nssdcftp.gsfc.nasa.gov/miscellaneous/documents/b32116.pdf',
        resourceType: 'decommissioning-report',
        supports: ['operational-status', 'termination-date', 'budget-reasons', 'power-systems'],
        verificationStatus: 'VERIFIED'
      },
      {
        id: 'NSSDCA-ALSEP-RESTORE',
        title: 'Apollo ALSEP Data Restoration',
        publisher: 'NASA Goddard Space Flight Center / NSSDCA',
        url: 'https://nssdc.gsfc.nasa.gov/planetary/lunar/apollo_alsep_restore.html',
        resourceType: 'science-dataset-record',
        supports: ['scientific-discoveries', 'side-instrument', 'solar-wind-plasma'],
        verificationStatus: 'VERIFIED'
      },
      {
        id: 'NSSDCA-APOLLO-OVERVIEW',
        title: 'The Apollo Program (1963 - 1972) - Surface Experiments',
        publisher: 'NASA GSFC / NSSDCA',
        url: 'https://nssdc.gsfc.nasa.gov/planetary/lunar/apollo.html',
        resourceType: 'mission-catalog',
        supports: ['seismology-results', 'crust-thickness', 'lunar-laser-ranging'],
        verificationStatus: 'VERIFIED'
      }
    ]
  },
  {
    id: 'surveyors',
    destination: 'moon',
    name: 'Surveyor Landers',
    shortName: 'Robotic Surveyor 1, 3, 5, 6, 7',
    mission: 'Surveyor Program (1966–1968)',
    place: 'Oceanus Procellarum, Sinus Medii, Mare Tranquillitatis, Tycho Rim',
    coordinates: '2.45° S, 43.21° W (Surveyor 1, Flamsteed P)',
    lat: -2.45,
    lon: -43.21,
    locations: [
      { id: 'surveyor-1-flamsteed', name: 'Surveyor 1 · Flamsteed P', lat: -2.45, lon: -43.21, locationType: 'surface', siteDetail: 'Touchdown June 2, 1966. First successful American soft landing.', sourceIds: ['NSSDCA-SURVEYOR-1'] },
      { id: 'surveyor-3-procellarum', name: 'Surveyor 3 · Oceanus Procellarum', lat: -3.016, lon: -23.418, locationType: 'surface', siteDetail: 'Touchdown April 20, 1967. Visited by Apollo 12 astronauts in Nov 1969.', sourceIds: ['NSSDCA-SURVEYOR-3'] },
      { id: 'surveyor-5-tranquillitatis', name: 'Surveyor 5 · Mare Tranquillitatis', lat: 1.41, lon: 23.18, locationType: 'surface', siteDetail: 'Touchdown Sept 11, 1967. First in-situ alpha-scattering chemical analysis.', sourceIds: ['NSSDCA-SURVEYOR-PROGRAM'] },
      { id: 'surveyor-6-sinus-medii', name: 'Surveyor 6 · Sinus Medii', lat: 0.49, lon: -1.40, locationType: 'surface', siteDetail: 'Touchdown Nov 10, 1967. First rocket liftoff from the Moon (hopped 2.5m).', sourceIds: ['NSSDCA-SURVEYOR-PROGRAM'] },
      { id: 'surveyor-7-tycho', name: 'Surveyor 7 · Tycho North Rim', lat: -40.86, lon: -11.47, locationType: 'surface', siteDetail: 'Touchdown Jan 10, 1968. Only Surveyor sent to rugged southern crater highlands.', sourceIds: ['NSSDCA-SURVEYOR-PROGRAM'] }
    ],
    status: 'Mission completed · Stationary robotic pioneers',
    tag: 'STATIONARY PIONEERS',
    color: 'cyan',
    stat: '5 Successful US Soft Landers (7 Launched)',
    nssdcId: 'SURVEYOR',
    catalogUrl: 'https://nssdc.gsfc.nasa.gov/planetary/lunar/surveyor.html',
    imageUrl: 'https://images-assets.nasa.gov/image/as12-48-7134/as12-48-7134~medium.jpg',
    lead: 'Robotic scouts that tested the lunar soil before Apollo touched down.',
    desc: 'Surveyor landers made the first successful American soft landings on the Moon (Surveyor 1 touched down on June 2, 1966, four months after the Soviet Union’s Luna 9), demonstrating that the lunar regolith was firm enough to support human exploration.',
    fact: 'Five of seven Surveyor missions succeeded (1, 3, 5, 6, 7). In November 1969, Apollo 12 astronauts Pete Conrad and Alan Bean landed within ~180 meters of Surveyor 3 and retrieved parts to analyze 2.5 years of space exposure.',
    cite: 'NSSDCA Surveyor to the Moon Catalog (1966-045A, 1967-035A)',
    audioText: 'I am Surveyor. Before humanity could walk on the Moon, robotic pioneers had to test the ground first. Skeptics warned that spacecraft might sink into meters of quicksand dust. On June 2, 1966, my footpads touched Oceanus Procellarum and rested firm as America\'s first soft lunar lander. I scraped trenches and analyzed minerals, confirming the Moon could support human feet.',
    storyClassification: 'EDUCATIONAL DRAMATIZATION',
    evidence: {
      engineering: 'Three-legged tubular aluminum frame equipped with terminal descent radar altimeter, three throttleable vernier rocket engines, and surface sampling claw (Surveyor 3 & 7).',
      engineeringType: 'DOCUMENTED FACT',
      telemetry: 'Transmitted over 87,000 high-resolution television photographs of lunar soil, boulders, and horizons via planar high-gain antenna.',
      telemetryType: 'DOCUMENTED FACT',
      science: 'Alpha-scattering instruments (Surveyors 5, 6, 7) proved mare rock composition was basaltic, while surface samplers tested mechanical bearing strength.',
      scienceType: 'SCIENTIFIC INTERPRETATION',
      status: 'Stationary inactive monuments at 5 distinct landing sites; Surveyor 2 and 4 crashed during descent.',
      statusType: 'DOCUMENTED FACT'
    },
    studentGuide: {
      targetAudience: 'Students Aged 13–18 (Secondary School)',
      whatIsIt: 'A series of spider-like unmanned robotic landers sent to the Moon between 1966 and 1968.',
      whyWasItSent: 'Before risking human astronauts, scientists had to prove whether the Moon was solid rock or deep, powdery quicksand that would swallow a landing capsule.',
      howDidItWork: 'It used radar to measure altitude during freefall, ignited retro-rockets to slow from thousands of kilometers per hour down to a gentle touchdown, and rested on three footpads.',
      whatDidItDiscover: 'Surveyor 1 proved the ground was solid and supported weight. Later Surveyors scraped trenches with robotic claws and used radiation backscatter to prove lunar lava plains are basaltic rock.',
      whatHappenedToIt: 'All five successful Surveyors ended operations when their solar batteries froze in the two-week lunar night. They remain stationary on the Moon.',
      whyDoesItMatter: 'Without Surveyor verifying that the lunar ground was safe, the Apollo 11 human landing would have been delayed or redesigned.',
      unexpectedDiscovery: 'Surveyor 6 fired its engines on the Moon, lifted off 4 meters into the air, and landed 2.5 meters away—performing the first rocket takeoff from another world!'
    },
    timeline: [
      { step: '01', title: 'FIRST AMERICAN SOFT LANDING', desc: 'Surveyor 1 executed closed-loop radar-controlled soft touchdown on June 2, 1966, in Oceanus Procellarum.', classification: 'DOCUMENTED FACT' },
      { step: '02', title: 'TRENCHING THE REGOLITH', desc: 'Robotic scoop on Surveyor 3 scraped trenches, measuring soil bearing strength for human boot soles.', classification: 'DOCUMENTED FACT' },
      { step: '03', title: 'APOLLO 12 RENDEZVOUS', desc: 'Apollo 12 astronauts visited Surveyor 3 in November 1969, retrieving its television camera for long-term space material analysis.', classification: 'DOCUMENTED FACT' }
    ],
    earthConnection: 'Closed-loop autonomous terminal radar descent algorithms developed for Surveyor are foundational to modern automated terrain-following and spacecraft landing systems.',
    sources: [
      {
        id: 'NSSDCA-SURVEYOR-PROGRAM',
        title: 'Surveyor to the Moon (1966 - 1968)',
        publisher: 'NASA Goddard Space Flight Center / NSSDCA',
        url: 'https://nssdc.gsfc.nasa.gov/planetary/lunar/surveyor.html',
        resourceType: 'mission-catalog',
        supports: ['mission-chronology', 'first-us-soft-landing', 'soil-mechanics', 'coordinates'],
        verificationStatus: 'VERIFIED'
      },
      {
        id: 'NSSDCA-SURVEYOR-1',
        title: 'Surveyor 1 Spacecraft Details (1966-045A)',
        publisher: 'NASA NSSDCA Master Catalog',
        url: 'https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=1966-045A',
        resourceType: 'spacecraft-record',
        supports: ['landing-date', 'touchdown-coordinates', 'television-imaging'],
        verificationStatus: 'VERIFIED'
      },
      {
        id: 'NSSDCA-SURVEYOR-3',
        title: 'Surveyor 3 Spacecraft Details (1967-035A)',
        publisher: 'NASA NSSDCA Master Catalog',
        url: 'https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=1967-035A',
        resourceType: 'spacecraft-record',
        supports: ['soil-sampler-scoop', 'apollo-12-retrieval', 'surface-bearing-strength'],
        verificationStatus: 'VERIFIED'
      }
    ]
  },

  // ------------------- MARS -------------------
  {
    id: 'sojourner',
    destination: 'mars',
    name: 'Sojourner Rover',
    shortName: 'Mars Pathfinder Sojourner',
    mission: 'Mars Pathfinder (MESUR Pathfinder, 1996–1997)',
    place: 'Ares Vallis · Carl Sagan Memorial Station',
    coordinates: '19.33° N, 33.55° W',
    lat: 19.33,
    lon: -33.55,
    locations: [
      { id: 'sojourner-ares-vallis', name: 'Sojourner · Ares Vallis', lat: 19.33, lon: -33.55, locationType: 'surface', siteDetail: 'Carl Sagan Memorial Station landing site. Traversed 100+ meters over 83 sols.', sourceIds: ['NSSDCA-MESUR-PATHFINDER'] }
    ],
    status: 'Mission completed · Permanently parked',
    tag: 'PERMANENTLY PARKED',
    color: 'orange',
    stat: '100+ Meters Traversed · 83 Sols',
    nssdcId: 'PATHFINDER-SOJOURNER',
    catalogUrl: 'https://nssdc.gsfc.nasa.gov/planetary/mesur.html',
    imageUrl: 'https://images-assets.nasa.gov/image/PIA01122/PIA01122~medium.jpg',
    lead: 'The 10.5-kilogram rover that proved Mars was traversable with wheels.',
    desc: 'Sojourner was the first wheeled vehicle to drive on another planet, traversing the ancient catastrophic flood plain of Ares Vallis and chemically analyzing rocks named Barnacle Bill and Yogi.',
    fact: 'Designed for a 7-sol prime technology demonstration, Sojourner operated for 83 sols until the Pathfinder lander battery failed on September 27, 1997.',
    cite: 'NSSDCA Mars Pathfinder Records (1996-068A, MESURPR)',
    audioText: 'I am Sojourner. On July 4, 1997, Mars Pathfinder bounced across Ares Vallis inside protective airbags and unfolded its petals. Two days later, I rolled down the ramps into the red dirt. I weighed only 10.5 kilograms, but every inch I drove made history as humanity’s first interplanetary wheeled rover.',
    storyClassification: 'EDUCATIONAL DRAMATIZATION',
    evidence: {
      engineering: 'Six-wheel rocker-bogie mobility suspension, 16-watt solar array, and non-rechargeable lithium thionyl chloride backup battery.',
      engineeringType: 'DOCUMENTED FACT',
      telemetry: 'Communicated via 9600-baud UHF radio relay with the Carl Sagan Memorial Station base lander.',
      telemetryType: 'DOCUMENTED FACT',
      science: 'Alpha Proton X-ray Spectrometer (APXS) discovered high-silica volcanic rocks resembling terrestrial andesites.',
      scienceType: 'SCIENTIFIC INTERPRETATION',
      status: 'Permanently parked in Ares Vallis beside the Pathfinder lander after communication ceased on September 27, 1997.',
      statusType: 'DOCUMENTED FACT'
    },
    studentGuide: {
      targetAudience: 'Students Aged 13–18 (Secondary School)',
      whatIsIt: 'A microwave-sized, 10.5-kilogram robotic rover—humanity\'s very first wheeled vehicle on Mars.',
      whyWasItSent: 'As a low-cost engineering experiment to test whether a robot could drive over rocks in Martian terrain and communicate through a base lander.',
      howDidItWork: 'It used a "rocker-bogie" suspension system without springs, allowing its six motorized wheels to climb over rocks bigger than the wheels themselves without tipping over.',
      whatDidItDiscover: 'It pressed an Alpha Proton X-ray Spectrometer against rocks named "Barnacle Bill" and "Yogi", discovering rocks rich in silica, proving Mars had a complex volcanic history.',
      whatHappenedToIt: 'When the Pathfinder base lander’s battery died in September 1997 after 83 sols, communication was lost. Sojourner entered its programmed circular search and parked permanently.',
      whyDoesItMatter: 'It proved rovers were the future of Mars exploration, paving the way for larger rovers like Spirit, Opportunity, Curiosity, and Perseverance.',
      unexpectedDiscovery: 'Sojourner was so popular that in July 1997, millions of people accessed NASA websites to see its daily pictures, creating one of the earliest viral events on the World Wide Web.'
    },
    timeline: [
      { step: '01', title: 'AIRBAG IMPACT & BOUNCE', desc: 'Bounced across Ares Vallis inside protective airbags on July 4, 1997, before uprighting automatically.', classification: 'DOCUMENTED FACT' },
      { step: '02', title: 'WHEELED REVOLUTION', desc: 'Investigated Barnacle Bill and Yogi rocks, transmitting chemical analyses and 550 color photographs.', classification: 'DOCUMENTED FACT' },
      { step: '03', title: 'THE SILENT SENTINEL', desc: 'After lander battery exhaustion on September 27, 1997, Sojourner executed pre-programmed search loops and parked.', classification: 'DOCUMENTED FACT' }
    ],
    earthConnection: 'The rocker-bogie mobility mechanism developed for Sojourner has become the worldwide standard for search-and-rescue robots traversing earthquake rubble and collapsed structures.',
    sources: [
      {
        id: 'NSSDCA-MESUR-PATHFINDER',
        title: 'Mars Pathfinder Project Information',
        publisher: 'NASA Goddard Space Flight Center / NSSDCA',
        url: 'https://nssdc.gsfc.nasa.gov/planetary/mesur.html',
        resourceType: 'mission-catalog',
        supports: ['landing-date', 'coordinates', 'rover-mass', 'operational-status', 'rocker-bogie'],
        verificationStatus: 'VERIFIED'
      },
      {
        id: 'NSSDCA-SOJOURNER-ROVER',
        title: 'Sojourner Rover Details (MESURPR)',
        publisher: 'NASA NSSDCA Master Catalog',
        url: 'https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=MESURPR',
        resourceType: 'spacecraft-record',
        supports: ['engineering-chassis', 'apxs-spectrometer', 'traverse-records'],
        verificationStatus: 'VERIFIED'
      },
      {
        id: 'NSSDCA-MARS-PATH-APXS',
        title: 'APXS Analysis of Rocks and Soils',
        publisher: 'NASA NSSDCA Planetary Science',
        url: 'https://nssdc.gsfc.nasa.gov/planetary/marspath/apxs.html',
        resourceType: 'science-dataset-record',
        supports: ['scientific-discoveries', 'andesitic-rock-chemistry', 'silica-composition'],
        verificationStatus: 'VERIFIED'
      }
    ]
  },
  {
    id: 'spirit-opportunity',
    destination: 'mars',
    name: 'Spirit & Opportunity Rovers',
    shortName: 'MER Twin Rovers',
    mission: 'Mars Exploration Rover (MER-A & MER-B)',
    place: 'Gusev Crater & Meridiani Planum',
    coordinates: '14.572° S, 175.478° E (Spirit) & 1.946° S, 354.473° E (5.527° W, Opportunity)',
    lat: -1.95,
    lon: -5.53,
    locations: [
      { id: 'mer-a-spirit-gusev', name: 'Spirit (MER-A) · Gusev Crater', lat: -14.572, lon: 175.478, locationType: 'surface', siteDetail: 'Touchdown Jan 4, 2004. Explored Columbia Hills; trapped at Troy sand trap in 2009; last signal March 22, 2010.', sourceIds: ['NSSDCA-MER-SPIRIT'] },
      { id: 'mer-b-opportunity-meridiani', name: 'Opportunity (MER-B) · Meridiani Planum', lat: -1.946, lon: -5.527, locationType: 'surface', siteDetail: 'Touchdown Jan 25, 2004. Roved 45.16 km; found hematite blueberries; final signal June 10, 2018 in Perseverance Valley.', sourceIds: ['NSSDCA-MER-OPPORTUNITY'] }
    ],
    status: 'Mission completed · Inactive on surface',
    tag: 'INACTIVE ON SURFACE',
    color: 'rose',
    stat: '45.16 km (Opp) + 7.73 km (Spirit)',
    nssdcId: 'MER-A-MER-B',
    catalogUrl: 'https://nssdc.gsfc.nasa.gov/planetary/planets/marspage.html',
    imageUrl: 'https://images-assets.nasa.gov/image/PIA10214/PIA10214~medium.jpg',
    lead: 'Twin robotic geologists that discovered definitive evidence of past liquid water.',
    desc: 'Designed for 90-sol missions, Spirit drove 7.73 km in Gusev Crater until getting stuck in sand in 2009 (last signal March 22, 2010), while Opportunity roved 45.16 km across Meridiani Planum until a planet-encircling dust storm in June 2018 ended communications.',
    fact: 'Opportunity discovered hematite spherules nicknamed "blueberries" and jarosite minerals, providing definitive proof of ancient standing acidic liquid water on Mars.',
    cite: 'NSSDCA Mars Exploration Rover Catalogs (2003-027A, 2003-032A)',
    audioText: 'We are Spirit and Opportunity. We were built for ninety sols, but our curiosity drove us for years. We traversed crater rims, climbed hills, and examined volcanic rocks. In Meridiani Planum, Opportunity found hematite blueberries that formed in ancient liquid water. When the great dust storm of 2018 blotted out the Sun over Perseverance Valley, Opportunity sent its final signal, leaving an enduring legacy of Martian exploration.',
    storyClassification: 'EDUCATIONAL DRAMATIZATION',
    evidence: {
      engineering: 'Six-wheel rocker-bogie rovers with triple-junction solar panels generating up to 140 W, Rock Abrasion Tool (RAT), and Pancam mast.',
      engineeringType: 'DOCUMENTED FACT',
      telemetry: 'Over 342,000 raw images relayed to Earth via Mars Odyssey and Mars Reconnaissance Orbiter UHF links and direct X-band high-gain antenna.',
      telemetryType: 'DOCUMENTED FACT',
      science: 'Discovered sulfate salts, hematite concretions, jarosite, and pure silica deposits confirming hydrothermal activity and habitable liquid water in Mars\' past.',
      scienceType: 'SCIENTIFIC INTERPRETATION',
      status: 'Spirit rests at Troy in Gusev Crater (final transmission March 22, 2010); Opportunity rests in Perseverance Valley on Endeavour Crater rim (final transmission June 10, 2018).',
      statusType: 'DOCUMENTED FACT'
    },
    studentGuide: {
      targetAudience: 'Students Aged 13–18 (Secondary School)',
      whatIsIt: 'Two identical robotic geologists, each the size of a golf cart, sent to opposite sides of Mars in 2003.',
      whyWasItSent: 'To "follow the water" and find out if Mars ever had warm, wet environments capable of supporting ancient life.',
      howDidItWork: 'Powered by solar panels and equipped with grinding tools (the Rock Abrasion Tool) and mineral cameras to inspect fresh interior layers of rocks.',
      whatDidItDiscover: 'Opportunity found tiny gray spheres of hematite (nicknamed "blueberries") that only form in liquid water, and sulphate minerals indicating ancient acidic lakes.',
      whatHappenedToIt: 'Spirit’s right-front wheel failed, and it eventually became trapped in soft sand in 2009. Opportunity drove for nearly 15 years until a planet-wide dust storm covered its solar panels in June 2018.',
      whyDoesItMatter: 'They proved conclusively that ancient Mars had standing liquid water, transforming Mars from a dead volcanic desert in textbooks into a historically habitable world.',
      unexpectedDiscovery: 'Dust devils on Mars actually saved the missions! Passing whirlwinds repeatedly swept dust off the solar panels, allowing 90-day rovers to operate for thousands of days.'
    },
    timeline: [
      { step: '01', title: 'PARACHUTE & AIRBAG LANDING', desc: 'Bounced into Gusev Crater and Meridiani Planum in January 2004, landing directly in layered bedrock.', classification: 'DOCUMENTED FACT' },
      { step: '02', title: 'OFF-WORLD MARATHON', desc: 'Opportunity crossed 45.16 km over nearly 15 years, completing humanity\'s first extraterrestrial marathon.', classification: 'DOCUMENTED FACT' },
      { step: '03', title: 'GLOBAL DUST STORM', desc: 'A catastrophic 2018 dust storm darkened the skies over Perseverance Valley; Opportunity sent its final signal on June 10, 2018.', classification: 'DOCUMENTED FACT' }
    ],
    earthConnection: 'High-efficiency multi-junction solar cells and autonomous machine vision navigation algorithms developed for MER accelerated commercial solar power systems and self-driving vehicles.',
    sources: [
      {
        id: 'NSSDCA-MER-SPIRIT',
        title: 'Spirit Mars Exploration Rover A Details (2003-027A)',
        publisher: 'NASA NSSDCA Master Catalog',
        url: 'https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=2003-027A',
        resourceType: 'spacecraft-record',
        supports: ['spirit-landing-date', 'spirit-coordinates', 'gusev-crater', 'athena-instruments', 'spirit-last-signal'],
        verificationStatus: 'VERIFIED'
      },
      {
        id: 'NSSDCA-MER-OPPORTUNITY',
        title: 'Opportunity Mars Exploration Rover B Details (2003-032A)',
        publisher: 'NASA NSSDCA Master Catalog',
        url: 'https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=2003-032A',
        resourceType: 'spacecraft-record',
        supports: ['opp-landing-date', 'opp-coordinates', 'meridiani-hematite', 'dust-storm-2018', 'opp-final-signal'],
        verificationStatus: 'VERIFIED'
      },
      {
        id: 'NSSDCA-MARS-INDEX',
        title: 'Mars Planetary Science Page',
        publisher: 'NASA GSFC / NSSDCA',
        url: 'https://nssdc.gsfc.nasa.gov/planetary/planets/marspage.html',
        resourceType: 'planetary-index',
        supports: ['water-evidence', 'traverse-marathon', 'operational-longevity'],
        verificationStatus: 'VERIFIED'
      }
    ]
  },
  {
    id: 'viking',
    destination: 'mars',
    name: 'Viking 1 & 2 Landers',
    shortName: 'Viking 1 & 2 Surface Labs',
    mission: 'Viking Program (1975–1982)',
    place: 'Chryse Planitia & Utopia Planitia',
    coordinates: '22.27° N, 47.95° W (Viking 1) & 47.64° N, 134.29° E (Viking 2)',
    lat: 22.27,
    lon: -47.95,
    locations: [
      { id: 'viking-1-chryse', name: 'Viking 1 Lander · Chryse Planitia', lat: 22.27, lon: -47.95, locationType: 'surface', siteDetail: 'Touchdown July 20, 1976. First successful US Mars landing. Operated until Nov 13, 1982.', sourceIds: ['NSSDCA-VIKING-1-LANDER'] },
      { id: 'viking-2-utopia', name: 'Viking 2 Lander · Utopia Planitia', lat: 47.64, lon: 134.29, locationType: 'surface', siteDetail: 'Touchdown Sept 3, 1976 in boulder-strewn northern plains. Operated until April 11, 1980.', sourceIds: ['NSSDCA-VIKING-2-LANDER'] }
    ],
    status: 'Mission completed · Stationary inactive laboratories',
    tag: 'STATIONARY INACTIVE LABS',
    color: 'rose',
    stat: 'First US Successful Mars Landers',
    nssdcId: 'VIKING-1-2',
    catalogUrl: 'https://nssdc.gsfc.nasa.gov/planetary/viking.html',
    imageUrl: 'https://images-assets.nasa.gov/image/PIA00563/PIA00563~medium.jpg',
    lead: 'The first American scientific laboratories to operate on the Martian surface.',
    desc: 'Viking 1 and 2 touched down in July and September 1976, returning the first color photographs from Mars’ surface, recording meteorological data, and performing complex biological and organic chemical tests on the regolith.',
    fact: 'Viking 1 operated on the surface for over 6 Earth years (2,245 sols) until November 13, 1982, when an uplink command error overwrote transmitter parameters; Viking 2 operated until April 11, 1980.',
    cite: 'NSSDCA Viking Mission Catalogs (1975-075C, 1975-083C)',
    audioText: 'I am Viking. In the summer of 1976, I descended through the thin red atmosphere and touched down on Chryse Planitia. When my mechanical facsimile scanner swept across the horizon, Earth saw Mars in color for the very first time—a salmon-pink sky over reddish volcanic boulders. I measured weather, scooped soil, and searched for biological life.',
    storyClassification: 'EDUCATIONAL DRAMATIZATION',
    evidence: {
      engineering: 'Three-legged platform powered by dual SNAP-19 Radioisotope Thermoelectric Generators (RTGs) producing ~70 W of electrical power.',
      engineeringType: 'DOCUMENTED FACT',
      telemetry: 'Direct S-band high-gain antenna link to Earth and UHF relay through orbiting Viking 1 and 2 orbiters.',
      telemetryType: 'DOCUMENTED FACT',
      science: 'Gas Chromatograph Mass Spectrometer (GCMS) found no organic compounds above detection threshold; biology experiments revealed complex oxidizing chemistry rather than living organisms.',
      scienceType: 'SCIENTIFIC INTERPRETATION',
      status: 'Stationary inactive monuments in Chryse Planitia (Viking 1 / Thomas Mutch Memorial Station) and Utopia Planitia (Viking 2).',
      statusType: 'DOCUMENTED FACT'
    },
    studentGuide: {
      targetAudience: 'Students Aged 13–18 (Secondary School)',
      whatIsIt: 'Two heavy stationary scientific laboratories that landed on Mars during the summer of 1976.',
      whyWasItSent: 'To take the first direct surface images of Mars, monitor its weather, and perform the first automated biological tests searching for Martian microbes.',
      howDidItWork: 'Powered by nuclear RTGs using radioactive decay heat, keeping them immune to dust accumulation. Mechanical arms scooped Martian dirt into miniature onboard biology test chambers.',
      whatDidItDiscover: 'They found that the sky is pinkish-red from suspended dust, the soil is an iron-rich clay, and the atmosphere has seasonal pressure swings as carbon dioxide freezes at the poles.',
      whatHappenedToIt: 'Viking 2’s batteries died in 1980. Viking 1 communicated until November 1982, when a flawed software update from Earth accidentally pointed its antenna away from ground stations.',
      whyDoesItMatter: 'Viking proved that humans could successfully land complex nuclear-powered laboratories on another planet and analyze extraterrestrial soil in real time.',
      unexpectedDiscovery: 'Initial biology experiments released gases that looked like microbial metabolism, but a sensitive chemical analyzer found no carbon-based organic molecules—revealing that strange non-biological perchlorates were reacting with the nutrients instead.'
    },
    timeline: [
      { step: '01', title: 'HISTORIC TOUCHDOWN', desc: 'Viking 1 soft-landed on July 20, 1976, on the 7th anniversary of Apollo 11; Viking 2 landed September 3, 1976.', classification: 'DOCUMENTED FACT' },
      { step: '02', title: 'THE BIOLOGY INVESTIGATION', desc: 'Conducted labeled release, gas exchange, and pyrolytic release metabolic experiments in automated test chambers.', classification: 'DOCUMENTED FACT' },
      { step: '03', title: 'FINAL TELEMETRY', desc: 'Viking 2 ended communications April 11, 1980; Viking 1 operated until November 13, 1982.', classification: 'DOCUMENTED FACT' }
    ],
    earthConnection: 'Hypersonic aerodynamic heat shield modeling and planetary quarantine sterilization protocols developed for Viking established modern spacecraft decontamination standards.',
    sources: [
      {
        id: 'NSSDCA-VIKING-OVERVIEW',
        title: 'Viking Mission to Mars Information',
        publisher: 'NASA Goddard Space Flight Center / NSSDCA',
        url: 'https://nssdc.gsfc.nasa.gov/planetary/viking.html',
        resourceType: 'mission-catalog',
        supports: ['viking-landing-dates', 'chryse-utopia-coordinates', 'surface-biology', 'communication-end-dates'],
        verificationStatus: 'VERIFIED'
      },
      {
        id: 'NSSDCA-VIKING-1-LANDER',
        title: 'Viking 1 Lander Details (1975-075C)',
        publisher: 'NASA NSSDCA Master Catalog',
        url: 'https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=1975-075C',
        resourceType: 'spacecraft-record',
        supports: ['rtg-snap19-power', 'gcms-analysis', 'mutch-memorial-station'],
        verificationStatus: 'VERIFIED'
      },
      {
        id: 'NSSDCA-VIKING-2-LANDER',
        title: 'Viking 2 Lander Details (1975-083C)',
        publisher: 'NASA NSSDCA Master Catalog',
        url: 'https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=1975-083C',
        resourceType: 'spacecraft-record',
        supports: ['seismology-attempt', 'surface-temperatures', 'operational-duration'],
        verificationStatus: 'VERIFIED'
      }
    ]
  },
  {
    id: 'phoenix-insight',
    destination: 'mars',
    name: 'Phoenix & InSight Landers',
    shortName: 'Phoenix & InSight Geophysics Labs',
    mission: 'Phoenix Mars Scout & Mars InSight',
    place: 'Vastitas Borealis & Western Elysium Planitia',
    coordinates: '68.22° N, 125.7° W (Phoenix) & 4.502° N, 135.623° E (InSight)',
    lat: 68.22,
    lon: -125.7,
    locations: [
      { id: 'phoenix-vastitas', name: 'Phoenix Lander · Vastitas Borealis', lat: 68.22, lon: -125.70, locationType: 'surface', siteDetail: 'Touchdown May 25, 2008 in arctic plains. Proved water ice 5cm below regolith. Last signal Nov 2, 2008.', sourceIds: ['NSSDCA-PHOENIX-LANDER'] },
      { id: 'insight-elysium', name: 'InSight Lander · Western Elysium Planitia', lat: 4.502, lon: 135.623, locationType: 'surface', siteDetail: 'Touchdown Nov 26, 2018. Deployed SEIS dome; detected 1,319 marsquakes; concluded Dec 21, 2022.', sourceIds: ['NSSDCA-INSIGHT-LANDER'] }
    ],
    status: 'Mission completed · Stationary inactive geophysics labs',
    tag: 'GEOPHYSICS MONUMENTS',
    color: 'orange',
    stat: '1,319 Marsquakes · Arctic Water Ice',
    nssdcId: 'PHOENIX-INSIGHT',
    catalogUrl: 'https://nssdc.gsfc.nasa.gov/planetary/planets/marspage.html',
    imageUrl: 'https://images-assets.nasa.gov/image/PIA24654/PIA24654~medium.jpg',
    lead: 'One uncovered arctic water ice. One measured the planetary pulse of Mars.',
    desc: 'Phoenix landed in the northern arctic plains in 2008 and scraped subsurface water ice that sublimated under the Sun. A decade later, InSight touched down in Elysium Planitia, operating an ultra-sensitive seismometer that detected over 1,300 marsquakes.',
    fact: 'Phoenix proved that water ice lies inches below the arctic soil; InSight determined the thickness of Mars’ crust (24–72 km) and confirmed that Mars has a large, liquid metallic iron core.',
    cite: 'NSSDCA Phoenix (2007-034A) & InSight (2018-042A) Catalogs',
    audioText: 'We are Phoenix and InSight. While rovers wandered, we remained stationary to investigate Mars beneath its surface. Phoenix scraped the arctic soil and confirmed pure water ice that sublimated into vapor. InSight placed an ultra-sensitive seismometer under a protective wind dome, feeling the pulse of meteor impacts and more than 1,300 marsquakes radiating from deep inside the planet.',
    storyClassification: 'EDUCATIONAL DRAMATIZATION',
    evidence: {
      engineering: 'Equipped with robotic deployment arms; Phoenix used TEGA ovens and MECA microscopy; InSight deployed the SEIS seismometer and RISE radio science experiment.',
      engineeringType: 'DOCUMENTED FACT',
      telemetry: 'Maintained continuous telemetry via Mars Odyssey, MRO, and Mars Express relays until power loss.',
      telemetryType: 'DOCUMENTED FACT',
      science: 'Phoenix detected perchlorate salts and subsurface water ice; InSight mapped Mars’ crustal thickness, mantle velocity, and confirmed a liquid metallic core (~1,830 km radius).',
      scienceType: 'SCIENTIFIC INTERPRETATION',
      status: 'Phoenix ceased transmissions November 2, 2008 due to winter darkness; InSight concluded operations December 21, 2022 after dust coated its solar panels.',
      statusType: 'DOCUMENTED FACT'
    },
    studentGuide: {
      targetAudience: 'Students Aged 13–18 (Secondary School)',
      whatIsIt: 'Two stationary landers designed to probe underneath the red dust: Phoenix dug into northern permafrost, while InSight measured seismic waves deep inside the planet.',
      whyWasItSent: 'Phoenix was sent to see if polar ice could create habitable micro-climates; InSight was sent to take Mars’ pulse and uncover how rocky planets form and differentiate.',
      howDidItWork: 'Phoenix used a motorized trenching claw and miniature ovens to bake soil samples; InSight used a robotic arm to set a seismometer directly on the ground under a protective vacuum dome.',
      whatDidItDiscover: 'Phoenix found bright white ice crystals that turned directly into gas (sublimated) over 4 days. InSight recorded over 1,300 marsquakes, proving Mars has an active interior and a liquid metallic core.',
      whatHappenedToIt: 'Both relied on solar panels. Phoenix froze during the dark arctic winter of 2008. InSight’s solar panels were slowly choked by windblown dust until the lander fell silent in December 2022.',
      whyDoesItMatter: 'They proved water ice is widespread and accessible on Mars for future human bases, and provided the first complete interior map (crust, mantle, core) of another planet.',
      unexpectedDiscovery: 'InSight recorded a Magnitude 5 monster marsquake in May 2022 that vibrated the entire planet for ten hours, revealing that tectonic stress inside Mars is still actively releasing energy.'
    },
    timeline: [
      { step: '01', title: 'DISCOVERING ARCTIC WATER ICE', desc: 'Phoenix scraped white ice trenches that vanished over four days in June 2008, confirming water ice sublimation.', classification: 'DOCUMENTED FACT' },
      { step: '02', title: 'MAPPING MARS’ DEEP INTERIOR', desc: 'InSight deployed the SEIS dome on the surface in 2019, recording over 1,300 seismic events including a Magnitude 5 monster quake.', classification: 'DOCUMENTED FACT' },
      { step: '03', title: 'POWER DEPLETION BY DUST', desc: 'Thick dust layers slowly reduced solar array output; InSight transmitted its final farewell data on December 15, 2022.', classification: 'DOCUMENTED FACT' }
    ],
    earthConnection: 'Ultra-sensitive broadband seismometer sensor technology developed for InSight is now deployed in deep-sea oceanographic stations monitoring Earth’s undersea earthquakes and tsunamis.',
    sources: [
      {
        id: 'NSSDCA-PHOENIX-LANDER',
        title: 'Phoenix Mars Lander Details (2007-034A)',
        publisher: 'NASA NSSDCA Master Catalog',
        url: 'https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=2007-034A',
        resourceType: 'spacecraft-record',
        supports: ['phoenix-landing-date', 'arctic-coordinates', 'water-ice-sublimation', 'meca-tega-instruments', 'phoenix-end-date'],
        verificationStatus: 'VERIFIED'
      },
      {
        id: 'NSSDCA-INSIGHT-LANDER',
        title: 'InSight Mars Lander Details (2018-042A)',
        publisher: 'NASA NSSDCA Master Catalog',
        url: 'https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=2018-042A',
        resourceType: 'spacecraft-record',
        supports: ['insight-landing-date', 'elysium-coordinates', 'seis-marsquakes', 'crust-core-geophysics', 'insight-mission-end'],
        verificationStatus: 'VERIFIED'
      }
    ]
  },
  {
    id: 'ingenuity',
    destination: 'mars',
    name: 'Ingenuity Mars Helicopter',
    shortName: 'Mars Ingenuity Helicopter',
    mission: 'Mars 2020 / Perseverance',
    place: 'Jezero Crater · Valinor Hills',
    coordinates: '18.44° N, 77.45° E (Jezero Crater)',
    lat: 18.44,
    lon: 77.45,
    locations: [
      { id: 'ingenuity-valinor-hills', name: 'Ingenuity · Valinor Hills (Jezero Crater)', lat: 18.44, lon: 77.45, locationType: 'surface', siteDetail: 'Airfield Sigma resting place after Flight 72 landing on Jan 18, 2024.', sourceIds: ['NSSDCA-MARS-2020-INGENUITY'] }
    ],
    status: 'Mission completed · Inactive flight hardware',
    tag: 'STATIONARY ARTIFACT',
    color: 'rose',
    stat: '72 Flights Completed · 17.0 km Flown',
    nssdcId: 'MARS-2020-INGENUITY',
    catalogUrl: 'https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=2020-052A',
    imageUrl: 'https://images-assets.nasa.gov/image/PIA24495/PIA24495~medium.jpg',
    lead: 'The technology demonstration that achieved the first powered flight on another planet.',
    desc: 'Weighing 1.8 kilograms, Ingenuity demonstrated that powered, controlled flight is possible in the razor-thin Martian atmosphere. Designed as a 5-flight proof-of-concept technology demonstration with no scientific instruments, it completed 72 flights before sustaining rotor blade damage on January 18, 2024.',
    fact: 'Ingenuity completed 72 flights, logged over 2 hours of flight time, and scouted routes for Perseverance. On Flight 72, rotor blade tip damage during landing ended its flight operations; it now rests as an inactive stationary artifact.',
    cite: 'NSSDCA Mars 2020 Catalog (2020-052A) · NASA JPL',
    audioText: 'I am Ingenuity. When I arrived in Jezero Crater tucked beneath Perseverance, scientists were testing whether aerodynamic flight was even possible in the thin Martian atmosphere. On April 19, 2021, my twin counter-rotating carbon fiber rotors spun at nearly 3,000 rpm and I hovered. I completed 72 flights across dunes and boulder fields. In January 2024, rotor blade tip damage ended my flight mission. My blades are still, but I proved that humanity can fly on other worlds.',
    storyClassification: 'EDUCATIONAL DRAMATIZATION',
    evidence: {
      engineering: 'Twin counter-rotating coaxial carbon-fiber rotors (1.2m diameter spinning at ~2,800–2,900 rpm), solar panel charging lithium-ion batteries, and smartphone-class Qualcomm Snapdragon processor.',
      engineeringType: 'DOCUMENTED FACT',
      telemetry: 'Air-to-ground wireless radio link relaying flight telemetry through the Perseverance rover base station.',
      telemetryType: 'DOCUMENTED FACT',
      science: 'Proof-of-concept technology demonstration (no science instruments on board); aerial cameras scouted drive paths, river deltas, and hazards for Perseverance.',
      scienceType: 'DOCUMENTED FACT',
      status: 'Stationary inactive artifact at Valinor Hills in Jezero Crater. Flight operations completed on January 18, 2024 (Sol 1042) following rotor blade damage; rover relay has moved on.',
      statusType: 'DOCUMENTED FACT'
    },
    studentGuide: {
      targetAudience: 'Students Aged 13–18 (Secondary School)',
      whatIsIt: 'A 1.8-kilogram autonomous robotic helicopter with twin carbon-fiber rotor blades, carried to Mars under the belly of the Perseverance rover.',
      whyWasItSent: 'To test a fundamental question in physics: could an aircraft generate enough lift to fly in the razor-thin Martian atmosphere (which has less than 1% of Earth\'s sea-level density)?',
      howDidItWork: 'Because the air is so thin, its blades had to be extra-stiff and spin at an astonishing 2,400 to 2,900 revolutions per minute (about 5 to 10 times faster than a helicopter on Earth).',
      whatDidItDiscover: 'It proved that aerodynamic flight is completely feasible on Mars and served as an aerial scout, spotting boulder fields and sand hazards for Perseverance.',
      whatHappenedToIt: 'Planned for just 5 short flights, it completed 72 flights! On January 18, 2024, it made an emergency landing in featureless sandy terrain, chipping the tip of a rotor blade. It is now parked permanently.',
      whyDoesItMatter: 'It is the "Wright Brothers moment" of interplanetary space exploration, opening up a future of aerial drones exploring cliff faces, lava tubes, and canyons across the Solar System.',
      unexpectedDiscovery: 'Ingenuity flew with off-the-shelf consumer smartphone processors and Linux code—proving that commercial technology can survive the deep cold and radiation of space.'
    },
    timeline: [
      { step: '01', title: 'FIRST POWERED EXTRATERRESTRIAL FLIGHT', desc: 'Hovered 3 meters above the dust on April 19, 2021 (Sol 58), carrying a piece of fabric from the 1903 Wright Flyer.', classification: 'DOCUMENTED FACT' },
      { step: '02', title: 'AERIAL RECONNAISSANCE SCOUT', desc: 'Transitioned from tech demo to operations scout, flying ahead of Perseverance across treacherous dunes and boulder fields.', classification: 'DOCUMENTED FACT' },
      { step: '03', title: 'FLIGHT 72 MONUMENT', desc: 'Sustained rotor blade tip damage during touchdown on January 18, 2024 (Sol 1042); flight mission officially concluded.', classification: 'DOCUMENTED FACT' }
    ],
    earthConnection: 'Autonomous optical navigation algorithms running on low-power commercial microprocessors accelerated search-and-rescue and agricultural drone automation on Earth.',
    sources: [
      {
        id: 'NSSDCA-MARS-2020-INGENUITY',
        title: 'Mars 2020 Spacecraft & Ingenuity Details (2020-052A)',
        publisher: 'NASA NSSDCA Master Catalog',
        url: 'https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=2020-052A',
        resourceType: 'spacecraft-record',
        supports: ['proof-of-concept-demo', '72-flights', 'rotor-rpm-spec', 'flight-72-damage-jan-18-2024', 'no-science-experiments'],
        verificationStatus: 'VERIFIED'
      }
    ]
  },

  // ------------------- DEEP SPACE & ASTEROIDS -------------------
  {
    id: 'dawn',
    destination: 'deep',
    name: 'Dawn Spacecraft',
    shortName: 'Dawn Ceres Explorer',
    mission: 'Dawn Mission (Discovery Program, 2007–2018)',
    place: 'Unpowered Planetary-Protection Orbit around Ceres',
    coordinates: 'Asteroid Belt · 2.77 AU from Sun (Ceres Orbit)',
    spacePos: [3.4, 0.5, -1.2],
    locations: [
      { id: 'dawn-ceres-orbit', name: 'Dawn · High-Altitude Ceres Quarantine Orbit', lat: 0, lon: 0, locationType: 'orbit', siteDetail: 'Unpowered stable orbit around dwarf planet Ceres (2.77 AU from Sun). Stable lifetime several hundred years.', sourceIds: ['NSSDCA-DAWN-CATALOG'] }
    ],
    status: 'Mission completed · Unpowered orbit around Ceres',
    tag: 'UNPOWERED ORBIT',
    color: 'violet',
    stat: 'Vesta & Ceres Mapped',
    nssdcId: 'DAWN',
    catalogUrl: 'https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=2007-043A',
    imageUrl: 'https://images-assets.nasa.gov/image/PIA19547/PIA19547~medium.jpg',
    lead: 'The first spacecraft to orbit two separate extraterrestrial destinations.',
    desc: 'Propelled by glowing xenon ion engines, Dawn orbited giant asteroid Vesta (2011–2012) and dwarf planet Ceres (2015–2018), discovering that Ceres is an icy ocean world with sodium carbonate deposits in Occator Crater and cryovolcanic Ahuna Mons.',
    fact: 'Dawn ceased communications on October 31, 2018, when its hydrazine attitude thruster fuel was completely depleted. It remains in an unpowered, stable quarantine orbit around Ceres documented by NSSDCA to remain stable for several hundred years.',
    cite: 'NSSDCA Dawn Catalog (2007-043A) & NASA Release 18-087',
    audioText: 'I am Dawn. Powered by the blue glow of xenon ion thrusters, I traveled across the Asteroid Belt to explore two very different protoplanetary worlds. I orbited rocky Vesta, then ignited my ion drive to rendezvous with dwarf planet Ceres. In Occator Crater, I revealed brilliant sodium carbonate salt deposits from an ancient brine reservoir. My hydrazine is gone, and I now drift in an unpowered quarantine orbit high above Ceres.',
    storyClassification: 'EDUCATIONAL DRAMATIZATION',
    evidence: {
      engineering: 'Three high-efficiency electrostatic xenon ion thrusters providing 11 km/s total velocity change, two 8.3-meter solar arrays, and hydrazine attitude-control thrusters.',
      engineeringType: 'DOCUMENTED FACT',
      telemetry: 'Over 100,000 images and spectrometric data sets relayed to the Deep Space Network until hydrazine exhaustion on October 31, 2018.',
      telemetryType: 'DOCUMENTED FACT',
      science: 'Confirmed that Ceres is an active water-rich dwarf planet with buried brine reservoirs, sodium carbonate deposits, and cryovolcanism (Ahuna Mons).',
      scienceType: 'SCIENTIFIC INTERPRETATION',
      status: 'Unpowered, stable high-altitude planetary protection orbit around Ceres. NSSDCA records document an orbital lifetime of several hundred years (exceeding planetary protection guidelines).',
      statusType: 'DOCUMENTED FACT'
    },
    studentGuide: {
      targetAudience: 'Students Aged 13–18 (Secondary School)',
      whatIsIt: 'A deep-space robotic probe powered by electric xenon ion thrusters that traveled across the Asteroid Belt.',
      whyWasItSent: 'To investigate the two largest objects in the Asteroid Belt—Vesta (a dry, rocky protoplanet) and Ceres (an icy dwarf planet)—to understand the building blocks of early Earth.',
      howDidItWork: 'Instead of chemical explosions, it used solar electricity to shoot charged xenon gas ions out of nozzles at extreme speeds, providing gentle, hyper-efficient thrust for years.',
      whatDidItDiscover: 'It discovered that Ceres is an active "ocean world" with bright reflective white spots in Occator Crater made of sodium carbonate salt crusts left by evaporated underground brine.',
      whatHappenedToIt: 'On October 31, 2018, its hydrazine fuel ran out. Without fuel to point its solar panels at the Sun, its power died. It was placed into a safe quarantine orbit around Ceres.',
      whyDoesItMatter: 'It is the only spacecraft ever built that orbited two different extraterrestrial bodies, proving ion propulsion is capable of multi-destination deep-space journeys.',
      unexpectedDiscovery: 'It discovered Ahuna Mons on Ceres—a solitary, 4-kilometer-tall volcanic mountain that erupted cold salty mud and ice instead of molten lava (a cryovolcano).'
    },
    timeline: [
      { step: '01', title: 'XENON ION CRUISE', desc: 'Continuous gentle thrust pushed Dawn past Mars and into the heart of the Asteroid Belt.', classification: 'DOCUMENTED FACT' },
      { step: '02', title: 'VESTA & CERES DUAL ORBIT', desc: 'First human probe to enter and depart orbit around two distinct extraterrestrial bodies.', classification: 'DOCUMENTED FACT' },
      { step: '03', title: 'HYDRAZINE EXHAUSTION', desc: 'Attitude control fuel ran out on October 31, 2018; parked safely in high unpowered quarantine orbit.', classification: 'DOCUMENTED FACT' }
    ],
    earthConnection: 'High-efficiency xenon ion propulsion demonstrated on Dawn enabled modern commercial satellite constellations and deep-space missions like NASA\'s DART asteroid deflection.',
    sources: [
      {
        id: 'NSSDCA-DAWN-CATALOG',
        title: 'Dawn Spacecraft Details (2007-043A)',
        publisher: 'NASA NSSDCA Master Catalog',
        url: 'https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=2007-043A',
        resourceType: 'spacecraft-record',
        supports: ['vesta-ceres-dual-orbit', 'xenon-ion-propulsion', 'oct-31-2018-end', 'several-hundred-years-lifetime'],
        verificationStatus: 'VERIFIED'
      },
      {
        id: 'NSSDCA-DAWN-PR-20181101',
        title: 'NASA\'s Dawn Mission to Asteroid Belt Comes to End (Release 18-087)',
        publisher: 'NASA Press Release / NSSDCA',
        url: 'http://nssdc.gsfc.nasa.gov/planetary/text/dawn_pr_20181101.txt',
        resourceType: 'mission-press-release',
        supports: ['hydrazine-exhaustion', 'planetary-protection', 'decades-in-orbit-claim', 'science-findings'],
        verificationStatus: 'VERIFIED'
      }
    ]
  },
  {
    id: 'near',
    destination: 'deep',
    name: 'NEAR Shoemaker',
    shortName: 'NEAR Asteroid Lander',
    mission: 'Near Earth Asteroid Rendezvous (1996–2001)',
    place: 'Asteroid 433 Eros · Southern Saddle Region',
    coordinates: 'Asteroid 433 Eros (1.45 AU from Sun)',
    spacePos: [-2.2, -0.6, 2.0],
    locations: [
      { id: 'near-eros-saddle', name: 'NEAR Shoemaker · Asteroid 433 Eros (Saddle Region)', lat: 0, lon: 0, locationType: 'surface', siteDetail: 'Touchdown Feb 12, 2001. First spacecraft to land on an asteroid. Surface science returned until Feb 28, 2001.', sourceIds: ['NSSDCA-NEAR-CATALOG'] }
    ],
    status: 'Mission completed · Resting on Asteroid 433 Eros',
    tag: 'RESTING ON EROS',
    color: 'violet',
    stat: 'First Asteroid Touchdown',
    nssdcId: 'NEAR-SHOEMAKER',
    catalogUrl: 'https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=1996-008A',
    imageUrl: 'https://images-assets.nasa.gov/image/PIA02474/PIA02474~medium.jpg',
    lead: 'The first spacecraft to orbit and softly touch down on an asteroid.',
    desc: 'NEAR Shoemaker orbited the peanut-shaped near-Earth asteroid 433 Eros for a year before executing a historic, unheralded slow touchdown on February 12, 2001, at less than 4 miles per hour.',
    fact: 'Though not designed as a lander, NEAR survived touchdown on Eros and transmitted scientific gamma-ray spectrometer data directly from the surface until final contact on February 28, 2001.',
    cite: 'NSSDCA NEAR Shoemaker Catalog (1996-008A) · JHU APL',
    audioText: 'I am NEAR Shoemaker. I was built to study asteroid 433 Eros from orbit. But after completing our primary orbital science, mission controllers guided me down in a controlled descent. On February 12, 2001, I touched the rocky regolith at less than four miles per hour. My solar panels survived, and I transmitted gamma-ray measurements directly from the surface for over two weeks.',
    storyClassification: 'EDUCATIONAL DRAMATIZATION',
    evidence: {
      engineering: 'Fixed gallium arsenide solar panels in a windmill layout, hydrazine bipropellant propulsion, and fixed 1.5m X-band high-gain antenna.',
      engineeringType: 'DOCUMENTED FACT',
      telemetry: 'Transmitted close-up approach imagery down to ~1 cm/pixel resolution during its terminal descent to the saddle region of Eros.',
      telemetryType: 'DOCUMENTED FACT',
      science: 'Determined Eros mass, bulk density (2.67 g/cm³), and primitive undifferentiated chondritic composition, linking it to ordinary chondrite meteorites.',
      scienceType: 'SCIENTIFIC INTERPRETATION',
      status: 'Resting permanently in the southern hemisphere saddle region of asteroid 433 Eros; final transmission received February 28, 2001.',
      statusType: 'DOCUMENTED FACT'
    },
    studentGuide: {
      targetAudience: 'Students Aged 13–18 (Secondary School)',
      whatIsIt: 'A low-cost robotic space probe built by Johns Hopkins Applied Physics Laboratory that became the first spacecraft to orbit and touch down on an asteroid.',
      whyWasItSent: 'To study the composition, gravity, and crater history of Near-Earth asteroid 433 Eros, helping scientists understand the primitive debris left over from the formation of our solar system.',
      howDidItWork: 'Equipped with an X-ray/gamma-ray spectrometer, a laser rangefinder, and camera to map the tumbling, peanut-shaped asteroid from close orbital distances.',
      whatDidItDiscover: 'It found that Eros is a solid, undifferentiated chunk of rock rather than a loose rubble pile, matching the exact composition of common primitive meteorites that fall to Earth.',
      whatHappenedToIt: 'After a year of orbital mapping, engineers attempted a slow controlled descent. It softly bumped down at under 4 mph on February 12, 2001, surviving on the surface and transmitting data for 16 days.',
      whyDoesItMatter: 'It proved that spacecraft can maneuver in ultra-weak microgravity fields around irregular asteroids, laying the groundwork for planetary defense asteroid-deflection missions.',
      unexpectedDiscovery: 'During its final 5-hour descent, its cameras took close-up images showing strange flat "ponds" of fine dust nestled inside small craters, suggesting electrostatic forces move dust across asteroids.'
    },
    timeline: [
      { step: '01', title: 'RENDEZVOUS WITH EROS', desc: 'Inserted into orbit around the 33-kilometer tumbling asteroid in February 2000.', classification: 'DOCUMENTED FACT' },
      { step: '02', title: 'IMPROMPTU TOUCHDOWN', desc: 'Gently braked during a 5-hour descent, surviving touchdown on February 12, 2001, at under 4 mph.', classification: 'DOCUMENTED FACT' },
      { step: '03', title: 'SURFACE GAMMA-RAY SCIENCE', desc: 'Operated its gamma-ray spectrometer on the surface for two weeks until final contact on February 28, 2001.', classification: 'DOCUMENTED FACT' }
    ],
    earthConnection: 'Precision proximity gravity field modeling around irregular bodies pioneered by NEAR provides the navigational foundation for planetary defense against hazardous asteroids.',
    sources: [
      {
        id: 'NSSDCA-NEAR-CATALOG',
        title: 'NEAR Shoemaker Details (1996-008A)',
        publisher: 'NASA NSSDCA Master Catalog',
        url: 'https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=1996-008A',
        resourceType: 'spacecraft-record',
        supports: ['feb-12-2001-touchdown', 'first-asteroid-landing', 'surface-science-feb-28', 'eros-dimensions-mass'],
        verificationStatus: 'VERIFIED'
      },
      {
        id: 'NSSDCA-ASTEROID-PAGE',
        title: 'NSSDCA Lunar & Planetary Science: Asteroids',
        publisher: 'NASA GSFC / NSSDCA',
        url: 'https://nssdc.gsfc.nasa.gov/planetary/planets/asteroidpage.html',
        resourceType: 'planetary-index',
        supports: ['eros-primitive-composition', 'gravity-modeling', 'operational-status'],
        verificationStatus: 'VERIFIED'
      }
    ]
  },
  {
    id: 'pioneer',
    destination: 'deep',
    name: 'Pioneer 10 & 11',
    shortName: 'Pioneer Interstellar Probes',
    mission: 'Pioneer Program (Pioneer F & G, 1972–1973)',
    place: 'Interstellar Escape Trajectories',
    coordinates: 'Beyond 130+ AU · Escaping Solar System',
    spacePos: [5.2, 1.8, -4.2],
    locations: [
      { id: 'pioneer-10-trajectory', name: 'Pioneer 10 · Interstellar Vector (Taurus / Aldebaran)', lat: 0, lon: 0, locationType: 'interstellar', siteDetail: 'Launched March 3, 1972. Beyond 130 AU, heading toward star Aldebaran.', sourceIds: ['NSSDCA-PIONEER-10'] },
      { id: 'pioneer-11-trajectory', name: 'Pioneer 11 · Interstellar Vector (Aquila Constellation)', lat: 0, lon: 0, locationType: 'interstellar', siteDetail: 'Launched April 6, 1973. Beyond 110 AU, heading toward constellation Aquila.', sourceIds: ['NSSDCA-PIONEER-11'] }
    ],
    status: 'Mission completed · Inactive deep-space probes on escape vectors',
    tag: 'INTERSTELLAR ESCAPE',
    color: 'violet',
    stat: 'Escaping Solar System · Over 130 AU',
    nssdcId: 'PIONEER-10-11',
    catalogUrl: 'https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=1972-012A',
    imageUrl: 'https://images-assets.nasa.gov/image/PIA01479/PIA01479~medium.jpg',
    lead: 'Humanity’s first scouts to traverse the Asteroid Belt and fly past Jupiter and Saturn.',
    desc: 'Pioneer 10 was the first spacecraft to navigate the Asteroid Belt and encounter Jupiter (December 1973). Pioneer 11 followed, discovering Saturn’s F-ring (September 1979). Both carry gold-anodized pictorial plaques depicting humanity.',
    fact: 'Pioneer 10’s final carrier signal was detected on January 23, 2003, at a distance of 80 AU; Pioneer 11 daily telemetry ended September 30, 1995. Both probes are coasting indefinitely on interstellar trajectories.',
    cite: 'NSSDCA Pioneer Catalogs (1972-012A, 1973-019A) · NASA Ames',
    audioText: 'We are Pioneer 10 and 11. Years before the Voyagers, we ventured into the unknown outer solar system. We were the first to prove spacecraft could safely traverse the Asteroid Belt and survive Jupiter’s intense radiation belts. Mounted to our frames are the Golden Plaques etched with humanity\'s message. Our transmitters are silent and our RTG generators cold, but our drift into interstellar space will endure for millions of years.',
    storyClassification: 'EDUCATIONAL DRAMATIZATION',
    evidence: {
      engineering: 'Spin-stabilized platforms (4.8 rpm) powered by SNAP-19 Radioisotope Thermoelectric Generators with 2.74-meter parabolic high-gain antennas.',
      engineeringType: 'DOCUMENTED FACT',
      telemetry: 'Communicated across tens of astronomical units; Pioneer 10 signal was last detected on January 23, 2003, before RTG power fell below transmitter threshold.',
      telemetryType: 'DOCUMENTED FACT',
      science: 'Mapped Jupiter’s intense magnetic radiation belts, discovered Saturn’s F-ring, and measured the outer heliosphere boundary.',
      scienceType: 'SCIENTIFIC INTERPRETATION',
      status: 'Pioneer 10 heading toward the star Aldebaran (Taurus); Pioneer 11 heading toward the constellation Aquila on unpowered escape trajectories.',
      statusType: 'DOCUMENTED FACT'
    },
    studentGuide: {
      targetAudience: 'Students Aged 13–18 (Secondary School)',
      whatIsIt: 'Twin robotic spacecraft launched in 1972 and 1973, built to explore the outer Solar System.',
      whyWasItSent: 'Before Pioneer, scientists did not know if a spacecraft could pass through the Asteroid Belt without being destroyed by collisions, or whether Jupiter’s radiation would fry electronics.',
      howDidItWork: 'Spinning like a gyroscope to stay pointed in space, they were powered by SNAP-19 radioisotope generators because sunlight is too weak in the outer Solar System to use solar panels.',
      whatDidItDiscover: 'They proved the Asteroid Belt is mostly empty space, sent back the first close-up photos of the Great Red Spot on Jupiter, and discovered Saturn’s narrow F-ring.',
      whatHappenedToIt: 'Their radioactive generators gradually cooled until power dropped below the minimum required for transmitters. Pioneer 11 ceased in 1995, and Pioneer 10 sent its last faint whisper in 2003.',
      whyDoesItMatter: 'They are among only five human-made objects on trajectories fast enough to escape our Sun\'s gravitational grip forever, becoming eternal interstellar wanderers.',
      unexpectedDiscovery: 'Both carry the famous Pioneer Plaque—an engraved gold-anodized plate created by Carl Sagan showing human figures, hydrogen atoms, and a pulsar map so any alien civilization finding it can pinpoint Earth.'
    },
    timeline: [
      { step: '01', title: 'ACROSS THE ASTEROID BELT', desc: 'First spacecraft to safely traverse the dense belt between Mars and Jupiter in 1972.', classification: 'DOCUMENTED FACT' },
      { step: '02', title: 'JUPITER & SATURN FLYBYS', desc: 'Used gravitational assists to accelerate beyond the solar system\'s escape velocity (Jupiter 1973/1974, Saturn 1979).', classification: 'DOCUMENTED FACT' },
      { step: '03', title: 'THE GOLDEN MESSAGE', desc: 'Carrying Carl Sagan\'s pictorial diagrams into the deep galaxy on escape trajectories.', classification: 'DOCUMENTED FACT' }
    ],
    earthConnection: 'Deep Space Network long-range weak-signal reception techniques and radioisotope thermoelectric generator systems formed the baseline for all outer planet exploration.',
    sources: [
      {
        id: 'NSSDCA-PIONEER-10',
        title: 'Pioneer 10 Spacecraft Details (1972-012A)',
        publisher: 'NASA NSSDCA Master Catalog',
        url: 'https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=1972-012A',
        resourceType: 'spacecraft-record',
        supports: ['first-asteroid-belt-crossing', 'jupiter-flyby', 'aldebaran-vector', 'jan-23-2003-last-signal', 'snap-19-rtg'],
        verificationStatus: 'VERIFIED'
      },
      {
        id: 'NSSDCA-PIONEER-11',
        title: 'Pioneer 11 Spacecraft Details (1973-019A)',
        publisher: 'NASA NSSDCA Master Catalog',
        url: 'https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=1973-019A',
        resourceType: 'spacecraft-record',
        supports: ['saturn-f-ring-discovery', 'sept-30-1995-ops-end', 'escape-trajectory', 'aquila-direction'],
        verificationStatus: 'VERIFIED'
      },
      {
        id: 'NSSDCA-PIONEER-10-LAST-SIGNAL',
        title: 'Pioneer 10\'s Last Signal (NASA Press Release 2003-02-25)',
        publisher: 'NASA Ames Research Center / NSSDCA',
        url: 'https://nssdc.gsfc.nasa.gov/planetary/text/pion10_pr_20030225.txt',
        resourceType: 'mission-press-release',
        supports: ['last-carrier-signal', 'rtg-power-decay', 'mission-decommissioning'],
        verificationStatus: 'VERIFIED'
      }
    ]
  },
  {
    id: 'kepler',
    destination: 'deep',
    name: 'Kepler Space Telescope',
    shortName: 'Kepler Exoplanet Hunter',
    mission: 'Kepler Mission & K2 (Discovery Program, 2009–2018)',
    place: 'Safe Earth-Trailing Heliocentric Orbit',
    coordinates: 'Earth-Trailing Heliocentric Orbit (~0.94–1.02 AU, 372.5-day period)',
    spacePos: [-3.8, 0.8, -2.5],
    locations: [
      { id: 'kepler-heliocentric-orbit', name: 'Kepler · Earth-Trailing Heliocentric Orbit', lat: 0, lon: 0, locationType: 'orbit', siteDetail: 'Heliocentric orbit (372.5-day period, 0.94–1.02 AU). Decommissioned Oct 30, 2018.', sourceIds: ['NSSDCA-KEPLER-CATALOG'] }
    ],
    status: 'Mission completed · Decommissioned in heliocentric orbit',
    tag: 'EARTH-TRAILING ORBIT',
    color: 'violet',
    stat: '2,662 Confirmed Exoplanets',
    nssdcId: 'KEPLER',
    catalogUrl: 'https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=2009-011A',
    imageUrl: 'https://images-assets.nasa.gov/image/PIA11438/PIA11438~medium.jpg',
    lead: 'The space telescope that revealed planets are more numerous than stars.',
    desc: 'Staring continuously at over 150,000 stars in Cygnus and Lyra, Kepler detected microscopic dips in starlight caused by transiting exoplanets, confirming over 2,600 alien worlds and proving rocky planets in habitable zones are widespread.',
    fact: 'Kepler operated in an Earth-trailing heliocentric orbit (372.5-day period). After its hydrazine propellant was exhausted, NASA officially decommissioned the telescope on October 30, 2018, disabling its onboard transmitters.',
    cite: 'NSSDCA Kepler Spacecraft Details (2009-011A) · NASA Ames',
    audioText: 'I am the Kepler Space Telescope. For nine years, drifting in orbit behind the Earth, I stared into a single field of the Milky Way without blinking. I watched for the faintest periodic dips in starlight—the transit shadow of an exoplanet crossing its sun. I confirmed 2,662 alien worlds. On October 30, 2018, when my fuel ran dry, mission control sent a final goodnight command, and I now drift peacefully in the dark.',
    storyClassification: 'EDUCATIONAL DRAMATIZATION',
    evidence: {
      engineering: '0.95-meter Schmidt telescope with 42-CCD photometer array (95 megapixels) in an Earth-trailing solar orbit free from Earth glare and gravitational torque.',
      engineeringType: 'DOCUMENTED FACT',
      telemetry: 'Downlinked light curves and high-precision stellar photometries for over 530,000 targets via high-gain X-band and Ka-band transmitters.',
      telemetryType: 'DOCUMENTED FACT',
      science: 'Discovered over 2,600 confirmed exoplanets, including the first Earth-size planet in a star\'s habitable zone (Kepler-186f) and multi-planet resonant systems.',
      scienceType: 'SCIENTIFIC INTERPRETATION',
      status: 'Decommissioned on October 30, 2018, following fuel exhaustion; drifting peacefully in an Earth-trailing heliocentric orbit.',
      statusType: 'DOCUMENTED FACT'
    },
    studentGuide: {
      targetAudience: 'Students Aged 13–18 (Secondary School)',
      whatIsIt: 'A space telescope equipped with an ultra-sensitive 95-megapixel digital photometer, orbiting the Sun behind Earth.',
      whyWasItSent: 'To find out whether planets like Earth are rare or common in our Milky Way galaxy.',
      howDidItWork: 'It used the "transit method": staring at 150,000 stars simultaneously without blinking, waiting for a planet to pass between its star and Kepler. When a planet crosses, the star’s light dims by a fraction of one percent.',
      whatDidItDiscover: 'It confirmed 2,662 exoplanets and proved that there are more planets in the galaxy than stars! It discovered rocky Earth-sized planets in "Goldilocks" habitable zones where liquid water could exist.',
      whatHappenedToIt: 'After two reaction wheels failed and its hydrazine pointing fuel was completely drained in 2018, mission control sent a final "goodnight" command and disabled its transmitters. It drifts in solar orbit.',
      whyDoesItMatter: 'It revolutionized astronomy by proving we do not live in an empty galaxy; virtually every star in the night sky has its own solar system.',
      unexpectedDiscovery: 'It discovered bizarre planetary systems never seen in our own Solar System, such as "Hot Jupiters" orbiting their suns in mere hours, and planets with two suns orbiting each other like Tatooine.'
    },
    timeline: [
      { step: '01', title: 'EARTH-TRAILING LAUNCH', desc: 'Launched on March 7, 2009, into an Earth-trailing heliocentric orbit to avoid Earth occultation and stray light.', classification: 'DOCUMENTED FACT' },
      { step: '02', title: 'THE EXOPLANET REVOLUTION', desc: 'Monitored 150,000 stars, revolutionizing astrophysics by confirming that rocky exoplanets are common throughout the galaxy.', classification: 'DOCUMENTED FACT' },
      { step: '03', title: 'FINAL GOODNIGHT COMMAND', desc: 'Transmitters permanently disabled on October 30, 2018, following hydrazine depletion; remains in a safe 372.5-day heliocentric orbit.', classification: 'DOCUMENTED FACT' }
    ],
    earthConnection: 'High-precision CCD noise-reduction and photometric transit algorithms developed for Kepler are now applied in terrestrial medical image processing and astronomical atmospheric correction.',
    sources: [
      {
        id: 'NSSDCA-KEPLER-CATALOG',
        title: 'Kepler Spacecraft Details (2009-011A)',
        publisher: 'NASA NSSDCA Master Catalog',
        url: 'https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=2009-011A',
        resourceType: 'spacecraft-record',
        supports: ['launch-date-2009', 'earth-trailing-orbit-372-days', 'schmidt-telescope-photometer', 'exoplanet-transit-method'],
        verificationStatus: 'VERIFIED'
      }
    ]
  }
];
