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
    evidence: {
      engineering: 'Quad-leg landing gear with crushable aluminum honeycomb shock absorbers and throttleable hypergolic descent propulsion system (DPS).',
      telemetry: 'Served as Apollo lunar surface habitat base station, voice relay, and extravehicular equipment hub.',
      science: 'Carried early surface experiment packages, solar wind composition collection foils, and geologic sampling tools.',
      status: 'Six inactive monuments resting at verified landing sites across the lunar near side; ascent stages were jettisoned and intentionally impacted the Moon for seismic testing.'
    },
    timeline: [
      { step: '01', title: 'DESCENT & LANDING', desc: 'Throttleable hypergolic rocket engine guided touchdown on the Sea of Tranquility on July 20, 1969.' },
      { step: '02', title: 'CREW HABITAT & EVA', desc: 'Supported Neil Armstrong and Buzz Aldrin for 21.6 hours on the lunar surface during human history\'s first moonwalk.' },
      { step: '03', title: 'ASCENT & ETERNAL REST', desc: 'Ascent engine fired from top of stage. Descent platform remained behind as a permanent historical monument.' }
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
    evidence: {
      engineering: 'Non-rechargeable zinc-silver oxide batteries, four 0.25-hp DC series-wound electric motors (one per wheel), 80:1 harmonic drive, and woven zinc-coated steel wire mesh chevron tires.',
      telemetry: 'High-gain steerable dish antenna broadcasting live color television and voice communications to Houston Mission Control.',
      science: 'Traversed a cumulative 90 kilometers across Apollo 15, 16, and 17, transporting over 280 kg of lunar rock and core samples.',
      status: 'All three vehicles parked at designated standoff distances from LM ascent blast zones, facing the lunar horizons with batteries depleted.'
    },
    timeline: [
      { step: '01', title: 'SPRING-LOADED DEPLOYMENT', desc: 'Unfolded from the side quadrant of Apollo 15 LM in minutes using astronaut lanyards.' },
      { step: '02', title: 'TRAVERSING THE RILLES', desc: 'Cruised at up to 13 km/h over boulder fields, reaching distant volcanic craters and rilles.' },
      { step: '03', title: 'FINAL ASCENT BROADCAST', desc: 'Broadcast the Apollo 17 ascent stage blastoff in December 1972, then parked permanently under the stars.' }
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
    evidence: {
      engineering: 'Powered by ~70-Watt Plutonium-238 radioisotope thermoelectric generators (SNAP-27) designed for extreme day-night temperature swings.',
      telemetry: 'Continuous real-time scientific telemetry stream until transmitters were officially powered down on September 30, 1977, due to budget constraints.',
      science: 'Recorded moonquakes (deep, shallow, thermal, and artificial impacts), measured crustal thickness (30–40 km near side), and constrained deep mantle and core properties.',
      status: 'Electronic packages dormant; passive corner-cube Lunar Laser Ranging Retroreflectors remain 100% operational with no power required.'
    },
    timeline: [
      { step: '01', title: 'NUCLEAR DEPLOYMENT', desc: 'Astronauts extracted SNAP-27 fuel capsules from LM casks and aligned telemetry antennas toward Earth.' },
      { step: '02', title: 'SEISMIC NETWORK OPERATION', desc: 'Operated from 1969 until September 30, 1977, registering thousands of natural moonquakes and booster impacts.' },
      { step: '03', title: 'ENDURING LASER RANGING', desc: 'Earth-bound observatories in Texas, Hawaii, and France continue bouncing green laser pulses off passive retroreflectors.' }
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
    coordinates: '2.45° S, 316.79° E (43.21° W) (Surveyor 1, Flamsteed P)',
    lat: -2.45,
    lon: -43.21,
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
    evidence: {
      engineering: 'Three-legged tubular aluminum frame equipped with terminal descent radar altimeter, three throttleable vernier rocket engines, and surface sampling claw (Surveyor 3 & 7).',
      telemetry: 'Transmitted over 87,000 high-resolution television photographs of lunar soil, boulders, and horizons via planar high-gain antenna.',
      science: 'Alpha-scattering instruments (Surveyors 5, 6, 7) proved mare rock composition was basaltic, while surface samplers tested mechanical bearing strength.',
      status: 'Stationary inactive monuments at 5 distinct landing sites; Surveyor 2 and 4 crashed during descent.'
    },
    timeline: [
      { step: '01', title: 'FIRST AMERICAN SOFT LANDING', desc: 'Surveyor 1 executed closed-loop radar-controlled soft touchdown on June 2, 1966, in Oceanus Procellarum.' },
      { step: '02', title: 'TRENCHING THE REGOLITH', desc: 'Robotic scoop on Surveyor 3 scraped trenches, measuring soil bearing strength for human boot soles.' },
      { step: '03', title: 'APOLLO 12 RENDEZVOUS', desc: 'Apollo 12 astronauts visited Surveyor 3 in November 1969, retrieving its television camera for long-term space material analysis.' }
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
    evidence: {
      engineering: 'Six-wheel rocker-bogie mobility suspension, 16-watt solar array, and non-rechargeable lithium thionyl chloride backup battery.',
      telemetry: 'Communicated via 9600-baud UHF radio relay with the Carl Sagan Memorial Station base lander.',
      science: 'Alpha Proton X-ray Spectrometer (APXS) discovered high-silica volcanic rocks resembling terrestrial andesites.',
      status: 'Permanently parked in Ares Vallis beside the Pathfinder lander after communication ceased on September 27, 1997.'
    },
    timeline: [
      { step: '01', title: 'AIRBAG IMPACT & BOUNCE', desc: 'Bounced across Ares Vallis inside protective airbags on July 4, 1997, before uprighting automatically.' },
      { step: '02', title: 'WHEELED REVOLUTION', desc: 'Investigated Barnacle Bill and Yogi rocks, transmitting chemical analyses and 550 color photographs.' },
      { step: '03', title: 'THE SILENT SENTINEL', desc: 'After lander battery exhaustion on September 27, 1997, Sojourner executed pre-programmed search loops and parked.' }
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
    evidence: {
      engineering: 'Six-wheel rocker-bogie rovers with triple-junction solar panels generating up to 140 W, Rock Abrasion Tool (RAT), and Pancam mast.',
      telemetry: 'Over 342,000 raw images relayed to Earth via Mars Odyssey and Mars Reconnaissance Orbiter UHF links and direct X-band high-gain antenna.',
      science: 'Discovered sulfate salts, hematite concretions, jarosite, and pure silica deposits confirming hydrothermal activity and habitable liquid water in Mars\' past.',
      status: 'Spirit rests at Troy in Gusev Crater (final transmission March 22, 2010); Opportunity rests in Perseverance Valley on Endeavour Crater rim (final transmission June 10, 2018).'
    },
    timeline: [
      { step: '01', title: 'PARACHUTE & AIRBAG LANDING', desc: 'Bounced into Gusev Crater and Meridiani Planum in January 2004, landing directly in layered bedrock.' },
      { step: '02', title: 'OFF-WORLD MARATHON', desc: 'Opportunity crossed 45.16 km over nearly 15 years, completing humanity\'s first extraterrestrial marathon.' },
      { step: '03', title: 'GLOBAL DUST STORM', desc: 'A catastrophic 2018 dust storm darkened the skies over Perseverance Valley; Opportunity sent its final signal on June 10, 2018.' }
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
    evidence: {
      engineering: 'Three-legged platform powered by dual SNAP-19 Radioisotope Thermoelectric Generators (RTGs) producing ~70 W of electrical power.',
      telemetry: 'Direct S-band high-gain antenna link to Earth and UHF relay through orbiting Viking 1 and 2 orbiters.',
      science: 'Gas Chromatograph Mass Spectrometer (GCMS) found no organic compounds above detection threshold; biology experiments revealed complex oxidizing chemistry rather than living organisms.',
      status: 'Stationary inactive monuments in Chryse Planitia (Viking 1 / Thomas Mutch Memorial Station) and Utopia Planitia (Viking 2).'
    },
    timeline: [
      { step: '01', title: 'HISTORIC TOUCHDOWN', desc: 'Viking 1 soft-landed on July 20, 1976, on the 7th anniversary of Apollo 11; Viking 2 landed September 3, 1976.' },
      { step: '02', title: 'THE BIOLOGY INVESTIGATION', desc: 'Conducted labeled release, gas exchange, and pyrolytic release metabolic experiments in automated test chambers.' },
      { step: '03', title: 'FINAL TELEMETRY', desc: 'Viking 2 ended communications April 11, 1980; Viking 1 operated until November 13, 1982.' }
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
    evidence: {
      engineering: 'Equipped with robotic deployment arms; Phoenix used TEGA ovens and MECA microscopy; InSight deployed the SEIS seismometer and RISE radio science experiment.',
      telemetry: 'Maintained continuous telemetry via Mars Odyssey, MRO, and Mars Express relays until power loss.',
      science: 'Phoenix detected perchlorate salts and subsurface water ice; InSight mapped Mars’ crustal thickness, mantle velocity, and confirmed a liquid metallic core (~1,830 km radius).',
      status: 'Phoenix ceased transmissions November 2, 2008 due to winter darkness; InSight concluded operations December 21, 2022 after dust coated its solar panels.'
    },
    timeline: [
      { step: '01', title: 'DISCOVERING ARCTIC WATER ICE', desc: 'Phoenix scraped white ice trenches that vanished over four days in June 2008, confirming water ice sublimation.' },
      { step: '02', title: 'MAPPING MARS’ DEEP INTERIOR', desc: 'InSight deployed the SEIS dome on the surface in 2019, recording over 1,300 seismic events including a Magnitude 5 monster quake.' },
      { step: '03', title: 'POWER DEPLETION BY DUST', desc: 'Thick dust layers slowly reduced solar array output; InSight transmitted its final farewell data on December 15, 2022.' }
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
    evidence: {
      engineering: 'Twin counter-rotating coaxial carbon-fiber rotors (1.2m diameter spinning at ~2,800–2,900 rpm), solar panel charging lithium-ion batteries, and smartphone-class Qualcomm Snapdragon processor.',
      telemetry: 'Air-to-ground wireless radio link relaying flight telemetry through the Perseverance rover base station.',
      science: 'Proof-of-concept technology demonstration (no science instruments on board); aerial cameras scouted drive paths, river deltas, and hazards for Perseverance.',
      status: 'Stationary inactive artifact at Valinor Hills in Jezero Crater. Flight operations completed on January 18, 2024 (Sol 1042) following rotor blade damage; rover relay has moved on.'
    },
    timeline: [
      { step: '01', title: 'FIRST POWERED EXTRATERRESTRIAL FLIGHT', desc: 'Hovered 3 meters above the dust on April 19, 2021 (Sol 58), carrying a piece of fabric from the 1903 Wright Flyer.' },
      { step: '02', title: 'AERIAL RECONNAISSANCE SCOUT', desc: 'Transitioned from tech demo to operations scout, flying ahead of Perseverance across treacherous dunes and boulder fields.' },
      { step: '03', title: 'FLIGHT 72 MONUMENT', desc: 'Sustained rotor blade tip damage during touchdown on January 18, 2024 (Sol 1042); flight mission officially concluded.' }
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
    evidence: {
      engineering: 'Three high-efficiency electrostatic xenon ion thrusters providing 11 km/s total velocity change, two 8.3-meter solar arrays, and hydrazine attitude-control thrusters.',
      telemetry: 'Over 100,000 images and spectrometric data sets relayed to the Deep Space Network until hydrazine exhaustion on October 31, 2018.',
      science: 'Confirmed that Ceres is an active water-rich dwarf planet with buried brine reservoirs, sodium carbonate deposits, and cryovolcanism (Ahuna Mons).',
      status: 'Unpowered, stable high-altitude planetary protection orbit around Ceres. NSSDCA records document an orbital lifetime of several hundred years (exceeding planetary protection guidelines).'
    },
    timeline: [
      { step: '01', title: 'XENON ION CRUISE', desc: 'Continuous gentle thrust pushed Dawn past Mars and into the heart of the Asteroid Belt.' },
      { step: '02', title: 'VESTA & CERES DUAL ORBIT', desc: 'First human probe to enter and depart orbit around two distinct extraterrestrial bodies.' },
      { step: '03', title: 'HYDRAZINE EXHAUSTION', desc: 'Attitude control fuel ran out on October 31, 2018; parked safely in high unpowered quarantine orbit.' }
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
    evidence: {
      engineering: 'Fixed gallium arsenide solar panels in a windmill layout, hydrazine bipropellant propulsion, and fixed 1.5m X-band high-gain antenna.',
      telemetry: 'Transmitted close-up approach imagery down to ~1 cm/pixel resolution during its terminal descent to the saddle region of Eros.',
      science: 'Determined Eros mass, bulk density (2.67 g/cm³), and primitive undifferentiated chondritic composition, linking it to ordinary chondrite meteorites.',
      status: 'Resting permanently in the southern hemisphere saddle region of asteroid 433 Eros; final transmission received February 28, 2001.'
    },
    timeline: [
      { step: '01', title: 'RENDEZVOUS WITH EROS', desc: 'Inserted into orbit around the 33-kilometer tumbling asteroid in February 2000.' },
      { step: '02', title: 'IMPROMPTU TOUCHDOWN', desc: 'Gently braked during a 5-hour descent, surviving touchdown on February 12, 2001, at under 4 mph.' },
      { step: '03', title: 'SURFACE GAMMA-RAY SCIENCE', desc: 'Operated its gamma-ray spectrometer on the surface for two weeks until final contact on February 28, 2001.' }
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
    evidence: {
      engineering: 'Spin-stabilized platforms (4.8 rpm) powered by SNAP-19 Radioisotope Thermoelectric Generators with 2.74-meter parabolic high-gain antennas.',
      telemetry: 'Communicated across tens of astronomical units; Pioneer 10 signal was last detected on January 23, 2003, before RTG power fell below transmitter threshold.',
      science: 'Mapped Jupiter’s intense magnetic radiation belts, discovered Saturn’s F-ring, and measured the outer heliosphere boundary.',
      status: 'Pioneer 10 heading toward the star Aldebaran (Taurus); Pioneer 11 heading toward the constellation Aquila on unpowered escape trajectories.'
    },
    timeline: [
      { step: '01', title: 'ACROSS THE ASTEROID BELT', desc: 'First spacecraft to safely traverse the dense belt between Mars and Jupiter in 1972.' },
      { step: '02', title: 'JUPITER & SATURN FLYBYS', desc: 'Used gravitational assists to accelerate beyond the solar system\'s escape velocity (Jupiter 1973/1974, Saturn 1979).' },
      { step: '03', title: 'THE GOLDEN MESSAGE', desc: 'Carrying Carl Sagan\'s pictorial diagrams into the deep galaxy on escape trajectories.' }
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
    evidence: {
      engineering: '0.95-meter Schmidt telescope with 42-CCD photometer array (95 megapixels) in an Earth-trailing solar orbit free from Earth glare and gravitational torque.',
      telemetry: 'Downlinked light curves and high-precision stellar photometries for over 530,000 targets via high-gain X-band and Ka-band transmitters.',
      science: 'Discovered over 2,600 confirmed exoplanets, including the first Earth-size planet in a star\'s habitable zone (Kepler-186f) and multi-planet resonant systems.',
      status: 'Decommissioned on October 30, 2018, following fuel exhaustion; drifting peacefully in an Earth-trailing heliocentric orbit.'
    },
    timeline: [
      { step: '01', title: 'EARTH-TRAILING LAUNCH', desc: 'Launched on March 7, 2009, into an Earth-trailing heliocentric orbit to avoid Earth occultation and stray light.' },
      { step: '02', title: 'THE EXOPLANET REVOLUTION', desc: 'Monitored 150,000 stars, revolutionizing astrophysics by confirming that rocky exoplanets are common throughout the galaxy.' },
      { step: '03', title: 'FINAL GOODNIGHT COMMAND', desc: 'Transmitters permanently disabled on October 30, 2018, following hydrazine depletion; remains in a safe 372.5-day heliocentric orbit.' }
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
