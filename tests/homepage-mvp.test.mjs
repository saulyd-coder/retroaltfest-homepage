import test from 'node:test';
import assert from 'node:assert/strict';
import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { join, relative } from 'node:path';

const root = process.cwd();

function read(relativePath) {
  return readFileSync(join(root, relativePath), 'utf8');
}

function hashTree(relativePath) {
  const base = join(root, relativePath);
  const files = [];
  const walk = (directory) => {
    for (const entry of readdirSync(directory).sort()) {
      const path = join(directory, entry);
      if (statSync(path).isDirectory()) walk(path);
      else files.push(path);
    }
  };
  walk(base);
  const hash = createHash('sha256');
  for (const path of files) {
    hash.update(relative(base, path).replaceAll('\\', '/'));
    hash.update('\0');
    hash.update(readFileSync(path));
    hash.update('\0');
  }
  return { count: files.length, hash: hash.digest('hex') };
}

function normalizePhase5A1GuideDiscoveryPilot(source) {
  return source
    .replace(/const GENERIC_GUIDE_DISCOVERY_LINK[\s\S]*?\nconst festivalMetadataTitleOverrides/, 'const festivalMetadataTitleOverrides')
    .replace('  const guideDiscoveryLink = FESTIVAL_DETAIL_GUIDE_LINKS[festival.slug] ?? GENERIC_GUIDE_DISCOVERY_LINK;\n', '')
    .replace('          href: guideDiscoveryLink.href,', '          href: "/guides",')
    .replace('          label: guideDiscoveryLink.label,', '          label: "Read curated guides",');
}

test('ships the curated festival app data for the homepage vertical slice', () => {
  const dataPath = 'src/data/atlas-festivals.json';
  assert.equal(existsSync(join(root, dataPath)), true, 'seed data should be available in src/data');

  const data = JSON.parse(read(dataPath));
  assert.equal(data.festivals.length, 15);
  assert.equal(data.metadata.record_count, 15);
  assert.equal(new Set(data.festivals.map((record) => record.record_id)).size, 15);
  assert.equal(new Set(data.festivals.map((record) => record.festival_id)).size, 15);
  assert.equal(data.festivals.every((record) => record.official_url && ['high', 'medium'].includes(record.source_confidence)), true);
  assert.equal(data.festivals.every((record) => record.latitude === null && record.longitude === null), true);
  assert.equal(data.festivals.every((record) => record.geocoding_source === null && record.geocoding_query === null), true);
});

test('homepage contains the required RetroAltFest MVP sections and CTAs', () => {
  const homepageSource = [
    'src/app/page.tsx',
    'src/components/home/NightTransmissionHero.tsx',
    'src/components/home/NightTransmissionNav.tsx',
    'src/components/home/NightTransmissionTuner.tsx',
    'src/components/home/FeaturedFestivals.tsx',
    'src/components/home/SceneChips.tsx',
    'src/components/home/TrustSection.tsx',
    'src/components/home/MapPreview.tsx',
    'src/components/home/SubmitFestivalCta.tsx',
  ]
    .filter((sourcePath) => existsSync(join(root, sourcePath)))
    .map(read)
    .join('\n');

  const requiredCopy = [
    'THE UNDERGROUND',
    'IS STILL ALIVE.',
    'ENTER THE ATLAS',
    'Suggest a festival',
    'Map preview',
    'Featured festivals',
    'Browse by scene',
    'Built for fewer dead ends.',
    'Official sources',
    'Clear status labels',
    'Manual curation',
  ];

  for (const copy of requiredCopy) {
    assert.match(homepageSource, new RegExp(copy.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')));
  }
});

test('homepage removes generated template branding and deploy links', () => {
  const homepageSource = [
    'src/app/page.tsx',
    'src/components/home/NightTransmissionHero.tsx',
    'src/components/site/Footer.tsx',
  ]
    .filter((sourcePath) => existsSync(join(root, sourcePath)))
    .map(read)
    .join('\n');

  assert.doesNotMatch(homepageSource, /Next\.js logo|Deploy Now|Templates|Documentation|vercel\.com\/new/);
});

test('global styles define the Nocturnal Atlas design tokens and accessible motion behavior', () => {
  const css = read('src/app/globals.css');
  const requiredTokens = ['--raf-black', '--raf-night', '--raf-violet', '--raf-cyan', '--raf-verified', '--raf-warning'];

  for (const token of requiredTokens) {
    assert.match(css, new RegExp(token));
  }

  assert.match(css, /prefers-reduced-motion/);
});

test('Night Transmission Phase 2A shell stays additive, square, accessible, and route-safe', () => {
  const shellPath = 'src/components/site/NightTransmissionSiteShell.module.css';
  const navigationPath = 'src/components/site/SiteNavigation.tsx';

  assert.equal(existsSync(join(root, shellPath)), true, 'shared Night Transmission shell CSS should exist');
  assert.equal(existsSync(join(root, navigationPath)), true, 'mobile site navigation client island should exist');

  const globals = read('src/app/globals.css');
  const header = read('src/components/site/Header.tsx');
  const footer = read('src/components/site/Footer.tsx');
  const shell = read(shellPath);
  const navigation = read(navigationPath);
  const source = `${header}\n${footer}\n${shell}\n${navigation}`;

  for (const token of [
    '--nt-broadcast-black',
    '--nt-signal-magenta',
    '--nt-electric-cyan',
    '--nt-acid-selected',
    '--nt-bone-text',
    '--nt-muted-telemetry',
    '--nt-signal-divider',
    '--nt-focus-ring',
    '--nt-distressed-surface',
    '--nt-shell-gutter',
  ]) {
    assert.match(globals, new RegExp(token));
  }

  for (const route of ['/festivals', '/guides', '/verification', '/suggest']) {
    const escapedRoute = route.replace('/', '\\/');
    assert.match(header + navigation, new RegExp(`href="${escapedRoute}"`));
    assert.match(footer, new RegExp(`href="${escapedRoute}"`));
  }

  assert.match(header, /SiteNavigation/);
  assert.match(header, /aria-label="Main navigation"/);
  assert.match(navigation, /"use client"/);
  assert.match(navigation, /aria-expanded=\{isOpen\}/);
  assert.match(navigation, /aria-controls="site-mobile-navigation"/);
  assert.match(navigation, /aria-label=\{isOpen \? "Close navigation" : "Open navigation"\}/);
  assert.match(navigation, /hidden=\{!isOpen\}/);
  assert.match(navigation, /event\.key === "Escape"/);
  assert.match(navigation, /triggerRef\.current\?\.focus\(\)/);
  assert.match(shell, /min-height:\s*44px/);
  assert.match(shell, /prefers-reduced-motion/);
  assert.match(shell, /forced-colors/);
  assert.match(shell, /focus-visible/);
  assert.doesNotMatch(source, /backdrop-filter|backdrop-blur|border-radius/);
  assert.doesNotMatch(source, /\/night-transmission\//);
  assert.doesNotMatch(source, /fetch\(|<canvas|WebGL|framer-motion|lottie|three/i);
});

test('metadata is production-ready for RetroAltFest sharing', () => {
  const layout = read('src/app/layout.tsx');
  assert.match(layout, /RetroAltFest/);
  assert.match(layout, /curated/i);
  assert.match(layout, /dark alternative/i);
  assert.doesNotMatch(layout, /Create Next App|Generated by create next app/);
});

test('homepage MVP uses clean component structure and footer', () => {
  const componentPaths = [
    'src/components/site/Header.tsx',
    'src/components/home/Hero.tsx',
    'src/components/home/NightTransmissionHero.tsx',
    'src/components/home/NightTransmissionHero.module.css',
    'src/components/home/NightTransmissionNav.tsx',
    'src/components/home/NightTransmissionTuner.tsx',
    'src/components/home/FeaturedFestivals.tsx',
    'src/components/home/SceneChips.tsx',
    'src/components/home/TrustSection.tsx',
    'src/components/home/MapPreview.tsx',
    'src/components/home/SubmitFestivalCta.tsx',
    'src/components/site/Footer.tsx',
  ];

  for (const componentPath of componentPaths) {
    assert.equal(existsSync(join(root, componentPath)), true, `${componentPath} should exist`);
  }

  const page = read('src/app/page.tsx');
  assert.match(page, /<NightTransmissionHero/);
  assert.doesNotMatch(page, /<Header\s*\/>|<Hero\s*\/>/);
  assert.match(page, /<FeaturedFestivals/);
  assert.match(page, /<Footer/);
  assert.doesNotMatch(page, /function FestivalCard/);
});

test('Night Transmission homepage integration stays bounded, semantic, and public-DTO-backed', () => {
  const page = read('src/app/page.tsx');
  const hero = read('src/components/home/NightTransmissionHero.tsx');
  const nav = read('src/components/home/NightTransmissionNav.tsx');
  const tuner = read('src/components/home/NightTransmissionTuner.tsx');
  const css = read('src/components/home/NightTransmissionHero.module.css');
  const source = `${hero}\n${nav}\n${tuner}\n${css}`;

  assert.match(hero, /publicFeaturedFestivals/);
  assert.match(hero, /PublicFeaturedFestival/);
  for (const slug of ['terminus-festival', 'absolution-fest', 'cold-waves']) {
    assert.match(hero, new RegExp(slug));
    assert.match(hero, /href=\{`\/festivals\/\$\{festival\.slug\}`\}/);
  }
  assert.doesNotMatch(source, /atlas-festivals|@\/lib\/festivals|\/prototypes\/|fetch\(|\/api\/|canvas(?!text)|webgl|three|video/i);

  for (const [label, href] of [
    ['FESTIVALS', '/festivals'],
    ['GUIDES', '/guides'],
    ['VERIFICATION', '/verification'],
    ['SUGGEST', '/suggest'],
  ]) {
    assert.match(nav, new RegExp(`href: "${href}"[\\s\\S]*label: "${label}"`));
  }
  assert.match(nav, /type="button"/);
  assert.match(nav, /aria-expanded=\{isOpen\}/);
  assert.match(nav, /aria-controls="night-transmission-routes"/);
  assert.match(nav, /Close navigation/);
  assert.match(nav, /Open navigation/);

  assert.match(tuner, /useState/);
  assert.match(tuner, /aria-pressed=\{selectedGenre === genre\}/);
  assert.match(tuner, /setSelectedGenre/);
  assert.match(css, /min-height: 44px/);
  assert.match(css, /focus-visible/);
  assert.match(css, /prefers-reduced-motion: reduce/);
  assert.match(css, /\/night-transmission\/environment-desktop\.webp/);
  assert.match(css, /\/night-transmission\/wet-ground\.webp/);

  assert.match(hero, /<h1/);
  assert.match(hero, /THE UNDERGROUND/);
  assert.match(hero, /IS STILL ALIVE\./);
  assert.match(hero, /RetroAltFest house visuals — not official festival artwork\./);
  assert.doesNotMatch(hero, /discoveryPreview[\s\S]*<span\s*\/>[\s\S]*<span\s*\/>[\s\S]*<span\s*\/>/);

  const hierarchy = [
    '<NightTransmissionHero',
    '<FirstDarkFestivalSignals',
    '<TrustSection',
    '<DiscoveryLinks',
    '<FeaturedFestivals',
    '<MapPreview',
    '<WaitlistSignup',
    '<SubmitFestivalCta',
    '<Footer',
  ];
  const positions = hierarchy.map((token) => page.indexOf(token));
  assert.equal(positions.every((position) => position >= 0), true);
  assert.deepEqual(positions, [...positions].sort((a, b) => a - b));
});

test('README documents setup, structure, run, and deployment guidance', () => {
  const readme = read('README.md');
  const requiredHeadings = [
    'Project initialization commands',
    'Folder/file structure',
    'Run instructions',
    'Deployment recommendations',
  ];

  for (const heading of requiredHeadings) {
    assert.match(readme, new RegExp(heading, 'i'));
  }
});

test('visual refinement pass deepens atmosphere without heavy dependencies', () => {
  const css = read('src/app/globals.css');
  const source = [
    'src/app/page.tsx',
    'src/components/home/NightTransmissionHero.tsx',
    'src/components/home/NightTransmissionHero.module.css',
    'src/components/home/FestivalCard.tsx',
    'src/components/home/MapPreview.tsx',
  ].map(read).join('\n');

  for (const token of ['ambient-haze', 'grain-field', 'atlas-node', 'connection-arc', 'verification-glyph']) {
    assert.match(`${css}\n${source}`, new RegExp(token));
  }

  for (const animation of ['raf-drift', 'raf-pulse', 'raf-grain']) {
    assert.match(css, new RegExp(animation));
  }

  assert.doesNotMatch(`${css}\n${source}`, /framer-motion|lottie|canvas(?!text)|three/i);
});

test('visual refinement plan separates MVP-safe upgrades from future enhancements', () => {
  const planPath = 'VISUAL_REFINEMENT_PLAN.md';
  assert.equal(existsSync(join(root, planPath)), true, 'visual refinement plan should exist');
  const plan = read(planPath);

  for (const section of ['UI refinement recommendations', 'Implementation plan', 'MVP-safe upgrades', 'Future enhancements', 'Performance considerations']) {
    assert.match(plan, new RegExp(section, 'i'));
  }
});

test('map preview avoids ambiguous truncated country labels', () => {
  const helpers = read('src/lib/festivals.ts');
  const mapPreview = read('src/components/home/MapPreview.tsx');

  assert.match(helpers, /mapPreviewLabel/);
  assert.match(mapPreview, /mapPreviewLabel\(festival\)/);
  assert.doesNotMatch(mapPreview, /country\.split\(" "\)\[0\]/);
});

test('festival data is expandable for atlas detail pages', () => {
  const data = JSON.parse(read('src/data/atlas-festivals.json'));
  assert.equal(data.festivals.length, 15);

  for (const festival of data.festivals) {
    assert.match(festival.slug, /^[a-z0-9]+(?:-[a-z0-9]+)*$/);
    assert.equal(typeof festival.atlas_summary, 'string');
    assert.ok(festival.atlas_summary.length > 80);
    assert.equal(typeof festival.why_it_matters, 'string');
    assert.ok(festival.why_it_matters.length > 120);
    assert.ok(Array.isArray(festival.source_links), `${festival.festival_name} should expose labeled source links`);
    assert.ok(festival.source_links.length >= 1);
    assert.ok(festival.source_links.every((link) => link.label && link.url && /^https?:\/\//.test(link.url)));
    assert.ok(Array.isArray(festival.similar_festival_ids), `${festival.festival_name} should list similar festival ids`);
    assert.ok(festival.similar_festival_ids.length >= 2);
  }
});

test('North America 8 integration adds only approved app-data records and keeps excluded records out', () => {
  const data = JSON.parse(read('src/data/atlas-festivals.json'));
  const ids = new Set(data.festivals.map((record) => record.festival_id));
  const slugs = new Set(data.festivals.map((record) => record.slug));
  const approved = [
    'cold-waves',
    'absolution-fest',
    'darker-waves',
    'levitation',
    'mutek-montreal',
    'just-like-heaven',
    'the-new-colossus-festival',
    'terminus-festival',
  ];
  const excluded = [
    'sled-island',
    'cruel-world',
    'dark-force-fest',
    'sanctum-festival',
    'dark-castle-fest',
    'verboden-music-festival',
    'mechanismus-festival',
    'mechanismus',
  ];

  for (const id of approved) {
    assert.equal(ids.has(id), true, `${id} should be integrated as app data`);
    assert.equal(slugs.has(id), true, `${id} should have a stable clean slug`);
  }

  for (const id of excluded) {
    assert.equal(ids.has(id), false, `${id} should not be integrated as app data in this batch`);
    assert.equal(slugs.has(id), false, `${id} should not have a public festival detail slug in this batch`);
  }
});

test('North America 8 records preserve source-aware caveats and map safety', () => {
  const data = JSON.parse(read('src/data/atlas-festivals.json'));
  const byId = new Map(data.festivals.map((record) => [record.festival_id, record]));

  for (const id of ['cold-waves', 'absolution-fest', 'darker-waves', 'levitation', 'mutek-montreal', 'just-like-heaven', 'the-new-colossus-festival', 'terminus-festival']) {
    const festival = byId.get(id);
    assert.ok(festival, `${id} should exist`);
    assert.equal(festival.latitude, null);
    assert.equal(festival.longitude, null);
    assert.equal(festival.geocoding_source, null);
    assert.equal(festival.geocoding_query, null);
    assert.equal(festival.geocoding_confidence, 'not_geocoded');
    assert.equal(festival.verification_status, 'confirmed_upcoming');
    assert.ok(festival.source_links.length >= 1);
    assert.ok(festival.similar_festival_ids.every((similarId) => byId.has(similarId)), `${id} should only link to integrated records`);
  }

  assert.match(byId.get('levitation').data_quality_notes, /not every show fits RetroAltFest|broad/i);
  assert.match(byId.get('levitation').map_notes, /Parent\/multi-venue|No single map pin/i);
  assert.match(byId.get('mutek-montreal').data_quality_notes, /not specifically goth\/darkwave|Do not frame as goth\/darkwave-specific/i);
  assert.match(byId.get('the-new-colossus-festival').data_quality_notes, /broad|Avoid core goth\/darkwave/i);
  assert.match(byId.get('terminus-festival').data_quality_notes, /do not use unverified full-lineup poster transcription/i);
  assert.match(byId.get('terminus-festival').source_urls.join('\n'), /eventbrite\.ca\/e\/terminus-festival-2026-resonance/);
});

test('Just Like Heaven venue correction stays source-backed, adjacent, and route-safe', () => {
  const data = JSON.parse(read('src/data/atlas-festivals.json'));
  const festival = data.festivals.find((record) => record.slug === 'just-like-heaven');
  assert.ok(festival, 'Just Like Heaven should remain an active atlas record');
  assert.equal(data.festivals.filter((record) => record.slug === 'just-like-heaven').length, 1);

  assert.equal(festival.venue_name, 'Brookside at the Rose Bowl');
  assert.equal(festival.tags.includes('venue missing'), false);
  assert.doesNotMatch(
    [festival.map_notes, festival.data_quality_notes, festival.why_it_matters].join('\n'),
    /venue (?:not published|missing|not captured|was not safely captured)|venue details were not captured|because venue details|city-level because venue/i,
  );
  assert.equal(festival.source_urls.includes('https://justlikeheavenfest.com/festival-info/'), true);
  assert.deepEqual(festival.source_links, [
    {
      label: 'Official festival site',
      url: 'https://www.justlikeheavenfest.com/',
      type: 'official_site',
    },
  ]);

  assert.equal(festival.date_text, 'August 22, 2026');
  assert.equal(festival.start_date, '2026-08-22');
  assert.equal(festival.end_date, '2026-08-22');
  assert.equal(festival.verification_status, 'confirmed_upcoming');
  assert.equal(festival.city, 'Pasadena');
  assert.equal(festival.state_region, 'California');
  assert.equal(festival.country, 'United States');
  assert.equal(festival.tags.includes('adjacent'), true);
  assert.deepEqual(festival.genres, ['retro alternative', 'indie', '2000s alternative']);
  assert.deepEqual(festival.categories, ['alternative']);
  assert.match(festival.data_quality_notes, /Adjacent bridge, not core goth\/darkwave\/synthpop/);
  assert.match(festival.why_it_matters, /without pretending it is a core goth or darkwave festival/);
  assert.equal(festival.venue_address, null);
  assert.equal(festival.latitude, null);
  assert.equal(festival.longitude, null);
  assert.equal(festival.geocoding_source, null);
  assert.equal(festival.geocoding_query, null);
  assert.equal(festival.geocoding_confidence, 'not_geocoded');
  assert.equal(festival.map_display_category, 'city_level_candidate');
  assert.equal(festival.follow_up_needed, true);
  assert.equal(festival.source_confidence, 'medium');
  assert.deepEqual(festival.similar_festival_ids, ['darker-waves', 'the-new-colossus-festival', 'levitation']);

  const nonTargetRecords = data.festivals.filter((record) => record.slug !== 'just-like-heaven');
  assert.equal(
    createHash('sha256').update(JSON.stringify(nonTargetRecords)).digest('hex'),
    'd668422ec68cb821d1c2ff6f253d1df2c8e32e97fae4b778af8e0edc925c9f22',
    'every non-target festival record should remain field-identical',
  );

  for (const [relativePath, expectedHash] of Object.entries({
    'src/lib/public-festivals.ts': 'e3950b813213b93bbd700d354b45797a2cf3540637e1417c14f6e577747fccf8',
    'src/app/festivals/[slug]/page.tsx': 'b136d810bf2a236186672004dfb89e5b71be06018b07d8249ca29a559db14798',
    'src/app/festivals/[slug]/FestivalDetail.module.css': '903b3d9ad627afeec4023f543321cf6a9efbdc9663b26f419b69109a1b831dbb',
    'src/app/sitemap.ts': '9e41355aa9072e9b5558f645037f16d7beda46b003fff2e9587b921b1977ace2',
  })) {
    const source = read(relativePath);
    const normalizedSource = relativePath === 'src/app/festivals/[slug]/page.tsx'
      ? normalizePhase5A1GuideDiscoveryPilot(source)
      : source;
    assert.equal(
      createHash('sha256').update(normalizedSource).digest('hex'),
      expectedHash,
      `${relativePath} should preserve the metadata, canonical, sitemap, DTO, activation, and visual contracts after the approved Phase 5A.1 substitution is normalized`,
    );
  }
});

test('festival detail route is static-first and SEO-ready', () => {
  const detailPath = 'src/app/festivals/[slug]/page.tsx';
  assert.equal(existsSync(join(root, detailPath)), true, 'dynamic festival detail route should exist');

  const detailPage = read(detailPath);
  const helpers = read('src/lib/festivals.ts');

  assert.match(detailPage, /generateStaticParams/);
  assert.match(detailPage, /generateMetadata/);
  assert.match(detailPage, /params: Promise<\{ slug: string \}>/);
  assert.match(detailPage, /notFound\(\)/);
  assert.match(detailPage, /Why this festival matters/);
  assert.match(detailPage, /Official sources/);
  assert.match(detailPage, /Verification notes/);
  assert.match(detailPage, /Similar festivals/);
  assert.match(detailPage, /grid-cols-\[|sm:grid-cols|lg:grid-cols/);
  assert.doesNotMatch(detailPage, /use client|fetch\(|prisma|supabase|mongodb|auth/i);

  assert.match(helpers, /festivalSlug/);
  assert.match(helpers, /getFestivalBySlug/);
  assert.match(helpers, /getSimilarFestivals/);
});

test('Absolution Fest detail polish stays one-page and source-aware', () => {
  const detailPage = read('src/app/festivals/[slug]/page.tsx');
  const dataBefore = read('src/data/atlas-festivals.json');
  const publicBoundary = read('src/lib/public-festivals.ts');

  assert.match(detailPage, /Absolution Fest 2026 — Tampa Goth, Darkwave & Post-Punk Festival/);
  assert.match(detailPage, /October 1–3, 2026 in Tampa, Florida/);
  assert.match(detailPage, /The Orpheum in Tampa, FL/);
  assert.match(detailPage, /official Absolution Fest site and the official-site-linked Eventbrite listing/);
  assert.match(detailPage, /Venue and map certainty stay cautious/);
  assert.match(detailPage, /Is Absolution Fest 2026 officially announced\?/);
  assert.match(detailPage, /detailPagePolish\[festival\.slug\]/);
  assert.doesNotMatch(detailPage, /latitude|longitude|geocoding|map-readiness|date_pending|source_status|needs_review/);
  assert.doesNotMatch(detailPage, /fetch\(|\/api\/|prisma|supabase|mongodb|auth|cms|database|scraping/i);
  assert.equal(read('src/data/atlas-festivals.json'), dataBefore);
  assert.match(publicBoundary, /getPublicFestivalDetailBySlug/);
});

test('homepage cards link into the curated festival atlas', () => {
  const card = read('src/components/home/FestivalCard.tsx');
  assert.match(card, /next\/link/);
  assert.match(card, /href=\{`\/festivals\/\$\{festival\.slug\}`\}/);
  assert.match(card, /View atlas entry/);
});

test('festival directory route lists the atlas with lightweight filters and search', () => {
  const directoryPath = 'src/app/festivals/page.tsx';
  const browserPath = 'src/components/festivals/FestivalDirectoryBrowser.tsx';

  assert.equal(existsSync(join(root, directoryPath)), true, 'static /festivals directory page should exist');
  assert.equal(existsSync(join(root, browserPath)), true, 'directory browser component should exist');

  const directoryPage = read(directoryPath);
  const browser = read(browserPath);

  assert.match(directoryPage, /metadata: Metadata/);
  assert.match(directoryPage, /FestivalDirectoryBrowser/);
  assert.match(directoryPage, /publicFestivalDirectoryItems/);
  assert.match(directoryPage, /Curated festival atlas/);
  assert.doesNotMatch(directoryPage, /fetch\(|prisma|supabase|mongodb|auth|cms/i);

  for (const copy of ['Search by festival or location', 'All scenes', 'All regions', 'All statuses', 'No festivals match']) {
    assert.match(browser, new RegExp(copy.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')));
  }

  assert.match(browser, /use client/);
  assert.match(browser, /useMemo/);
  assert.match(browser, /useState/);
  assert.match(browser, /festival\.slug/);
  assert.match(browser, /\/festivals\/\$\{festival\.slug\}/);
  assert.match(browser, /filteredFestivals\.map/);
  assert.match(browser, /styles\.slabGrid/);
  assert.doesNotMatch(browser, /framer-motion|lottie|three|canvas|axios/i);
});

test('festival directory Night Transmission integration stays public-DTO-only and route-scoped', () => {
  const page = read('src/app/festivals/page.tsx');
  const browser = read('src/components/festivals/FestivalDirectoryBrowser.tsx');
  const cssPath = 'src/components/festivals/FestivalDirectory.module.css';
  const corridorPath = 'public/night-transmission-inner/cyan-corridor.avif';
  const towerPath = 'public/night-transmission-inner/tower-beacon-signature.avif';

  assert.equal(existsSync(join(root, cssPath)), true, 'production festival directory CSS module should exist');
  assert.equal(existsSync(join(root, corridorPath)), true, 'production cyan corridor asset should exist');
  assert.equal(existsSync(join(root, towerPath)), true, 'production tower asset should exist');

  const css = read(cssPath);
  assert.match(page, /FestivalDirectory\.module\.css/);
  assert.match(page, /publicFestivalDirectoryItems/);
  assert.match(browser, /PublicFestivalDirectoryItem/);
  assert.match(browser, /festival\.sceneTags/);
  assert.match(browser, /sceneOptions/);
  assert.match(browser, /FILTERS ACTIVE/);
  assert.match(browser, /NO FILTERS APPLIED/);
  assert.match(browser, /aria-live="polite"/);
  assert.match(browser, /Showing \{filteredFestivals\.length\} of \{festivals\.length\} source-aware atlas records/);
  assert.match(browser, /href=\{`\/festivals\/\$\{festival\.slug\}`\}/);
  assert.doesNotMatch(browser, /@\/lib\/festivals|categoryFilters|atlas-festivals|rawFestival/i);
  assert.doesNotMatch(browser, /disabled=\{!hasActiveFilters\}/);

  assert.match(css, /\/night-transmission-inner\/cyan-corridor\.avif/);
  assert.match(css, /\/night-transmission-inner\/tower-beacon-signature\.avif/);
  assert.match(css, /position:\s*fixed/);
  assert.match(css, /\/ cover no-repeat/);
  assert.match(css, /min-height:\s*(44|48|50)px/);
  assert.match(css, /prefers-reduced-motion:\s*reduce/);
  assert.match(css, /forced-colors:\s*active/);
  assert.doesNotMatch(`${page}\n${browser}\n${css}`, /\/prototypes\/|\/night-transmission\/(?!inner)/);
  assert.doesNotMatch(`${page}\n${browser}\n${css}`, /fetch\(|\/api\/|prisma|supabase|mongodb|auth|cms|database|scraping|canvas(?!text)|webgl|video/i);
});

test('public launch polish adds accessible states and clearer trust microcopy', () => {
  const css = read('src/app/globals.css');
  const source = [
    'src/components/site/Header.tsx',
    'src/components/site/Footer.tsx',
    'src/components/home/Hero.tsx',
    'src/components/home/NightTransmissionHero.tsx',
    'src/components/home/NightTransmissionNav.tsx',
    'src/components/home/NightTransmissionTuner.tsx',
    'src/components/home/FestivalCard.tsx',
    'src/components/home/TrustSection.tsx',
    'src/components/festivals/FestivalDirectoryBrowser.tsx',
    'src/components/home/SubmitFestivalCta.tsx',
  ].map(read).join('\n');

  for (const token of ['.raf-button-primary', '.raf-button-secondary', '.raf-chip', '.raf-panel']) {
    assert.match(css, new RegExp(token.replace('.', '\\.')));
  }

  for (const copy of ['Source-aware', 'No scraped listings', 'Verified before mapped', 'Start browsing the atlas', 'Reset and show all festivals']) {
    assert.match(source, new RegExp(copy.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')));
  }

  assert.match(source, /aria-live="polite"/);
  assert.match(`${css}\n${source}`, /focus-visible/);
});

test('metadata references static social preview and app icon assets', () => {
  const layout = read('src/app/layout.tsx');

  for (const asset of ['public/icon.svg', 'public/apple-icon.svg', 'public/og-preview.svg', 'public/og-preview.png', 'public/manifest.json']) {
    assert.equal(existsSync(join(root, asset)), true, `${asset} should exist`);
  }

  assert.match(layout, /icons:/);
  assert.match(layout, /manifest:/);
  assert.match(layout, /\/manifest\.json/);
  assert.match(layout, /\/icon\.svg/);
  assert.match(layout, /\/apple-icon\.svg/);
  assert.match(layout, /\/og-preview\.png/);
  assert.match(layout, /images:/);
});

test('public launch exposes robots, sitemap, and web manifest metadata routes', () => {
  const robots = read('src/app/robots.ts');
  const sitemap = read('src/app/sitemap.ts');
  const manifest = read('src/app/manifest.ts');

  assert.match(robots, /MetadataRoute\.Robots/);
  assert.match(robots, /sitemap:/);
  assert.match(robots, /https:\/\/retroaltfest\.com\/sitemap\.xml/);

  assert.match(sitemap, /MetadataRoute\.Sitemap/);
  assert.match(sitemap, /featuredFestivals/);
  assert.match(sitemap, /festivalSlug/);
  assert.match(sitemap, /\/festivals/);
  assert.match(sitemap, /\/suggest/);
  assert.match(sitemap, /\/guides\/north-american-goth-darkwave-festivals/);
  assert.match(sitemap, /\/guides\/industrial-ebm-dark-electronic-festivals-north-america/);
  assert.doesNotMatch(sitemap, /terminus-festival-resonance/);

  assert.match(manifest, /MetadataRoute\.Manifest/);
  assert.match(manifest, /name: "RetroAltFest"/);
  assert.match(manifest, /start_url: "\/"/);
  assert.match(manifest, /\/icon\.svg/);
});

test('legacy Terminus resonance slug redirects to the canonical atlas entry', () => {
  const legacyRedirectPath = 'src/app/festivals/terminus-festival-resonance/route.ts';
  assert.equal(existsSync(join(root, legacyRedirectPath)), true, 'legacy Terminus redirect route should exist');

  const redirectRoute = read(legacyRedirectPath);
  const data = JSON.parse(read('src/data/atlas-festivals.json'));
  const slugs = new Set(data.festivals.map((record) => record.slug));

  assert.match(redirectRoute, /NextResponse\.redirect/);
  assert.match(redirectRoute, /\/festivals\/terminus-festival/);
  assert.match(redirectRoute, /301/);
  assert.equal(slugs.has('terminus-festival'), true, 'canonical Terminus slug should remain active');
  assert.equal(slugs.has('terminus-festival-resonance'), false, 'legacy Terminus slug should not become an atlas record');
});

test('suggest page provides source-backed manual review intake without platform scope', () => {
  const suggestPath = 'src/app/suggest/page.tsx';
  assert.equal(existsSync(join(root, suggestPath)), true, 'static /suggest page should exist');

  const suggestPage = read(suggestPath);
  const homepage = read('src/app/page.tsx');
  const footer = read('src/components/site/Footer.tsx');
  const verificationPage = read('src/app/verification/page.tsx');
  const festivalsPage = read('src/app/festivals/page.tsx');
  const sitemap = read('src/app/sitemap.ts');

  for (const copy of [
    'Suggest a festival for review',
    'source-backed suggestion',
    'reviewed manually',
    'not automatically published',
    'Open the suggestion form',
    'The form opens in Google Forms.',
    'https://forms.gle/qhXiMRZbcihSue6z8',
    'target="_blank"',
    'rel="noopener noreferrer"',
    'Please do not submit private, confidential, or unpublished information.',
    'Contact info is optional',
  ]) {
    assert.match(suggestPage, new RegExp(copy.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')));
  }

  for (const source of [homepage, footer, verificationPage, festivalsPage]) {
    assert.match(source, /href(?::|=)\s*"\/suggest"/);
  }

  assert.match(sitemap, /`\$\{SITE_URL\}\/suggest`/);
  assert.doesNotMatch(suggestPage, /Submit your festival for listing|claim a listing|get listed|guaranteed inclusion|official partner/i);
  assert.doesNotMatch(suggestPage, /fetch\(|\/api\/|prisma|supabase|mongodb|auth|cms|database|scraping|auto-publishing/i);
});

test('suggest Night Transmission integration stays static, route-scoped, source-safe, and Form-preserving', () => {
  const pagePath = 'src/app/suggest/page.tsx';
  const cssPath = 'src/app/suggest/SuggestPage.module.css';
  const page = read(pagePath);

  assert.equal(existsSync(join(root, cssPath)), true, 'route-scoped Suggest CSS should exist');
  const css = read(cssPath);

  assert.match(page, /import styles from "\.\/SuggestPage\.module\.css"/);
  assert.match(page, /className=\{styles\.page\}/);
  assert.match(page, /className=\{styles\.towerBeacon\}/);
  assert.match(page, /aria-hidden="true" className=\{styles\.towerBeacon\}/);
  assert.doesNotMatch(page, /"use client"|useState|useEffect|useMemo|fetch\(|\/api\//);
  assert.doesNotMatch(page, /\/prototypes\/|night-transmission-suggest-concept|\/night-transmission\//);
  assert.doesNotMatch(page, /rounded-|overflow-hidden|ambient-haze|nocturnal-grid|cinematic-vignette|grain-field/);

  assert.equal((css.match(/purple-waveform\.avif/g) ?? []).length, 1, 'waveform URL should be declared once');
  assert.equal((css.match(/tower-beacon-signature\.avif/g) ?? []).length, 1, 'tower URL should be declared once');
  const desktopTowerBoundary = css.indexOf('@media (min-width: 901px)');
  const towerUrl = css.indexOf('/night-transmission-inner/tower-beacon-signature.avif');
  assert.ok(desktopTowerBoundary >= 0, 'desktop-only tower boundary should exist');
  assert.ok(towerUrl > desktopTowerBoundary, 'tower URL should be declared only inside the desktop media query');
  assert.match(css, /\/night-transmission-inner\/purple-waveform\.avif/);
  assert.match(css, /position:\s*fixed/);
  assert.match(css, /background-size:\s*cover/);
  assert.match(css, /background-repeat:\s*no-repeat/);
  assert.match(css, /outline:\s*2px solid var\(--nt-focus-ring\)/);
  assert.match(css, /@media \(prefers-reduced-motion: reduce\)/);
  assert.match(css, /@media \(forced-colors: active\)/);
  assert.doesNotMatch(css, /border-radius|\/prototypes\/|\/night-transmission\//);
  assert.doesNotMatch(css, /overflow-x:\s*hidden|\.page\s*\{[^}]*overflow:\s*hidden/s);

  assert.match(page, /const pagePath = "\/suggest"/);
  assert.match(page, /const suggestionFormUrl = "https:\/\/forms\.gle\/qhXiMRZbcihSue6z8"/);
  assert.equal((page.match(/href=\{suggestionFormUrl\}/g) ?? []).length, 2, 'exactly two Form links should remain');
  assert.equal((page.match(/target="_blank"/g) ?? []).length, 2, 'both Form links should open a new target');
  assert.equal((page.match(/rel="noopener noreferrer"/g) ?? []).length, 2, 'both Form links should preserve safe rel values');
  assert.equal((page.match(/Open the suggestion form/g) ?? []).length, 2, 'both CTA labels should remain exact');

  for (const copy of [
    'A goth, darkwave, industrial, EBM, synthpop, post-punk, new wave, retro alternative, or adjacent festival we should look at',
    'A correction to an existing RetroAltFest festival page',
    'A new official date, ticketing, organizer, venue, or status source',
    'A historical or reference point that may help visitors understand the scene',
    'Official festival website',
    'Organizer-controlled page or official social profile',
    'Official ticketing page',
    'Venue page connected to the event',
    'A public source that clearly explains the update or correction',
    'Suggestions are reviewed manually before anything changes on RetroAltFest.',
    'A suggestion may become an atlas entry, a source check, a reference point, or simply stay under review.',
    'Sending a lead does not guarantee a listing, page update, or public mention.',
    'Nothing submitted through the form is automatically published.',
  ]) {
    assert.match(page, new RegExp(copy.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')));
  }

  const layout = read('src/app/layout.tsx');
  const seo = read('src/lib/seo.ts');
  const routeTitle = page.match(/title:\s*"([^"]+)"/)?.[1];
  const titleTemplate = layout.match(/template:\s*"([^"]+)"/)?.[1];
  const siteUrl = seo.match(/siteUrl\s*=\s*"([^"]+)"/)?.[1];
  const routePath = page.match(/const pagePath\s*=\s*"([^"]+)"/)?.[1];

  assert.equal(routeTitle, 'Suggest a Festival for Review');
  assert.doesNotMatch(routeTitle, /RetroAltFest/, 'route-level metadata input should not duplicate the brand');
  assert.equal(titleTemplate?.replace('%s', routeTitle), 'Suggest a Festival for Review | RetroAltFest');
  assert.match(seo, /const canonical = absoluteUrl\(path\)/);
  assert.match(seo, /alternates:\s*\{\s*canonical,\s*\}/s);
  assert.equal(`${siteUrl}${routePath}`, 'https://retroaltfest.com/suggest');
  assert.match(page, /path: pagePath/);
});

test('custom analytics logger is disabled for production safety', () => {
  const analyticsRoute = read('src/app/api/analytics/route.ts');
  const layout = read('src/app/layout.tsx');

  assert.doesNotMatch(layout, /<Analytics \/>/);
  assert.doesNotMatch(layout, /components\/analytics\/Analytics/);
  assert.doesNotMatch(analyticsRoute, /\/tmp\/retroaltfest/);
  assert.doesNotMatch(analyticsRoute, /appendFile|writeFile|mkdir/);
  assert.match(analyticsRoute, /204/);
});

test('waitlist uses Buttondown in production with validation and bot protection', () => {
  const component = read('src/components/waitlist/WaitlistSignup.tsx');
  const route = read('src/app/api/waitlist/route.ts');
  const homepage = read('src/app/page.tsx');

  assert.match(component, /use client/);
  assert.match(component, /RetroAltFest festival discovery digest/);
  assert.match(component, /type="email"/);
  assert.match(component, /\/api\/waitlist/);
  assert.match(component, /aria-live="polite"/);
  assert.match(component, /name="website"/);
  assert.match(component, /autoComplete="off"/);
  assert.match(component, /raf-button-primary/);
  assert.doesNotMatch(component, /mailto:hello@retroaltfest\.com/);

  assert.match(route, /BUTTONDOWN_API_KEY/);
  assert.match(route, /https:\/\/api\.buttondown\.com\/v1\/subscribers/);
  assert.match(route, /Authorization/);
  assert.match(route, /authorizationHeader/);
  assert.match(route, /email_address/);
  assert.match(route, /X-Buttondown-Collision-Behavior/);
  assert.match(route, /add/);
  assert.match(route, /honeypot/);
  assert.match(route, /emailRegex/);
  assert.match(route, /process\.env\.VERCEL/);
  assert.doesNotMatch(route, /process\.env\.VERCEL \? "\/tmp\/retroaltfest"/);
  assert.doesNotMatch(route, /\/tmp\/retroaltfest/);
  assert.doesNotMatch(route, /supabase|mongodb|prisma|mailchimp|convertkit/i);

  assert.match(homepage, /<WaitlistSignup \/>/);
});

test('reusable SEO helper centralizes canonical and OG metadata', () => {
  const seo = read('src/lib/seo.ts');
  const layout = read('src/app/layout.tsx');
  const directoryPage = read('src/app/festivals/page.tsx');
  const detailPage = read('src/app/festivals/[slug]/page.tsx');

  assert.match(seo, /siteUrl/);
  assert.match(seo, /defaultOgImage/);
  assert.match(seo, /buildMetadata/);
  assert.match(seo, /canonical/);
  assert.match(seo, /openGraph/);
  assert.match(seo, /twitter/);

  assert.match(layout, /buildMetadata/);
  assert.match(directoryPage, /buildMetadata/);
  assert.match(detailPage, /buildMetadata/);
});

test('festival categories expose the launch taxonomy across data and UI', () => {
  const helpers = read('src/lib/festivals.ts');
  const browser = read('src/components/festivals/FestivalDirectoryBrowser.tsx');
  const card = read('src/components/home/FestivalCard.tsx');
  const data = JSON.parse(read('src/data/atlas-festivals.json'));
  const requiredCategories = ['darkwave', 'goth', 'industrial', 'synthpop', 'post-punk', 'EDM', 'alternative'];

  for (const category of requiredCategories) {
    assert.match(helpers, new RegExp(category.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'i'));
  }

  for (const festival of data.festivals) {
    assert.ok(Array.isArray(festival.categories), `${festival.festival_name} should expose categories`);
    assert.ok(festival.categories.length >= 1, `${festival.festival_name} should have at least one category`);
  }

  assert.match(browser, /sceneOptions/);
  assert.doesNotMatch(browser, /categoryFilters|@\/lib\/festivals/);
  assert.match(browser, /festival\.sceneTags/);
  assert.match(card, /festival\.sceneTags/);
});

test('mobile polish keeps production UI readable on small screens', () => {
  const existingResponsiveSource = [
    'src/components/home/Hero.tsx',
    'src/components/waitlist/WaitlistSignup.tsx',
    'src/app/festivals/[slug]/page.tsx',
  ].map(read).join('\n');
  const directory = read('src/components/festivals/FestivalDirectoryBrowser.tsx');
  const directoryCss = read('src/components/festivals/FestivalDirectory.module.css');

  for (const token of ['text-4xl sm:text-6xl', 'min-w-0']) {
    assert.match(existingResponsiveSource, new RegExp(token.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')));
  }
  assert.match(directory, /styles\.slabGrid/);
  assert.match(directoryCss, /@media \(max-width: 600px\)/);
  assert.match(directoryCss, /grid-template-columns:\s*1fr/);
  assert.match(directoryCss, /min-width:\s*0/);
  assert.match(directoryCss, /overflow-wrap:\s*anywhere/);
});

test('first dark festival signals data matches the locked MVP content packet', () => {
  const dataPath = 'src/data/first_dark_festival_signals.json';
  assert.equal(existsSync(join(root, dataPath)), true, 'locked six-card signal data should exist');

  const data = JSON.parse(read(dataPath));
  const expectedOrder = [
    'darker-waves',
    'dark-force-fest',
    'cold-waves',
    'verboden-music-festival',
    'absolution-fest',
    'cruel-world',
  ];

  assert.equal(data.section.eyebrow, 'North America first');
  assert.equal(data.section.title, 'First Dark Festival Signals');
  assert.equal(
    data.section.clarification_note,
    'Signal cards mix active atlas entries with tracked festival leads. Some items are fully listed in the atlas, while others are reference or future-edition signals we’re monitoring until official dates, locations, or source confidence are stronger.',
  );
  assert.equal(data.signals.length, 6);
  assert.deepEqual(data.signals.map((signal) => signal.id), expectedOrder);
  assert.equal(new Set(data.signals.map((signal) => signal.id)).size, 6);

  for (const signal of data.signals) {
    assert.equal(signal.priority, 'homepage_core');
    assert.ok(signal.name);
    assert.ok(signal.region_label);
    assert.ok(['USA', 'North America'].includes(signal.country_scope));
    assert.ok(Array.isArray(signal.scene_tags));
    assert.ok(signal.scene_tags.length >= 2 && signal.scene_tags.length <= 3);
    assert.ok(['Confirmed upcoming', 'Date pending', 'Reference only', 'Needs future-edition refresh'].includes(signal.status_label));
    assert.ok(['confirmed_upcoming', 'date_pending', 'reference_only', 'needs_future_refresh'].includes(signal.status_key));
    assert.ok(signal.cultural_hook.length > 40 && signal.cultural_hook.length <= 120);
    assert.match(signal.source_cue, /^Official source tracked/);
    assert.match(signal.official_url, /^https?:\/\//);
    assert.ok(signal.art_direction);
    assert.ok(signal.editorial_descriptor);
    assert.ok(signal.why_this_matters);
    assert.ok(signal.pathway_concept);
    assert.ok(signal.seasonal_relevance);
    assert.ok(signal.scene_relationships);
    assert.ok(signal.source_confidence_notes);
  }
});

test('first dark festival signals content stays restrained and source-aware', () => {
  const data = JSON.parse(read('src/data/first_dark_festival_signals.json'));
  const publicCopy = [
    data.section.eyebrow,
    data.section.title,
    data.section.subtitle,
    data.section.trust_note,
    data.section.clarification_note,
    data.section.closing_microcopy,
    ...data.signals.flatMap((signal) => [
      signal.name,
      signal.region_label,
      signal.status_label,
      signal.cultural_hook,
      signal.source_cue,
      signal.pathway_concept,
    ]),
  ].join('\n');

  assert.doesNotMatch(publicCopy, /complete guide|best festivals|near you|book your trip|buy tickets|all festivals|ultimate directory|trending now|must-see|top festivals|hottest events|do not miss/i);
  assert.doesNotMatch(publicCopy, /needs_review|watchlist/i);
  assert.match(publicCopy, /source-aware/i);
  assert.match(publicCopy, /North America/i);
});

test('first dark festival signals component is restrained, semantic, and data-backed', () => {
  const componentPath = 'src/components/home/FirstDarkFestivalSignals.tsx';
  assert.equal(existsSync(join(root, componentPath)), true, 'homepage signal module component should exist');

  const component = read(componentPath);
  const data = JSON.parse(read('src/data/first_dark_festival_signals.json'));

  assert.match(component, /first_dark_festival_signals\.json/);
  assert.match(component, /<section/);
  assert.match(component, /aria-labelledby="first-dark-festival-signals-heading"/);
  assert.match(component, /id="first-dark-festival-signals-heading"/);
  assert.match(component, /grid-cols-1/);
  assert.match(component, /md:grid-cols-2/);
  assert.match(component, /xl:grid-cols-3/);
  assert.match(component, /editorial-card-glow/);
  assert.match(component, /raf-chip/);
  assert.match(component, /target="_blank"/);
  assert.match(component, /rel="noopener noreferrer"/);
  assert.doesNotMatch(component, /use client|useState|useMemo|carousel|filter|search|modal|canvas|framer-motion|lottie|three/i);

  assert.equal(data.signals.length, 6);
});

test('first dark festival signals module is placed directly after the hero', () => {
  const page = read('src/app/page.tsx');
  assert.match(page, /components\/home\/FirstDarkFestivalSignals/);

  const heroIndex = page.indexOf('<NightTransmissionHero />');
  const signalsIndex = page.indexOf('<FirstDarkFestivalSignals />');
  const trustIndex = page.indexOf('<TrustSection />');
  const mapIndex = page.indexOf('<MapPreview />');

  assert.ok(heroIndex > -1, 'Night Transmission hero should render');
  assert.ok(signalsIndex > heroIndex, 'Signals module should render after the Night Transmission hero');
  assert.ok(trustIndex > signalsIndex, 'Existing trust section should remain after Signals module');
  assert.ok(mapIndex > signalsIndex, 'Existing map preview should remain after Signals module');
});

test('guide page for North American goth and darkwave festivals is static, bounded, and source-safe', () => {
  const guidePath = 'src/app/guides/north-american-goth-darkwave-festivals/page.tsx';
  assert.equal(existsSync(join(root, guidePath)), true, 'guide route should exist');

  const guide = read(guidePath);
  const requiredCopy = [
    'North American Goth &amp; Darkwave Festivals: A Curated Guide',
    'source-aware North American guide',
    'official or organizer-controlled sources',
    'See how RetroAltFest handles verification',
    'Source-supported active atlas records',
    'Active atlas record with 2026 source support',
    'A Murder of Crows XI NYC Goth & Post-punk Festival',
    'Reference signal — checked 2026 dates have passed',
    'Related gateway — future date not confirmed',
    'Recently active corridor signal — recheck future edition',
    'How RetroAltFest labels this guide',
    'href="/verification"',
    'href="/festivals"',
    'href="/guides"',
    'atlasPath: "/festivals/absolution-fest"',
    'atlasPath: "/festivals/a-murder-of-crows-xi-nyc-goth-post-punk-festival"',
    'atlasPath: "/festivals/cold-waves"',
    'atlasPath: "/festivals/terminus-festival"',
  ];

  for (const copy of requiredCopy) {
    assert.match(guide, new RegExp(copy.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')));
  }

  for (const includedRecord of ['Absolution Fest', 'Cold Waves', 'Terminus Festival', 'Verboden Music Festival', 'Dark Force Fest', 'Cruel World']) {
    assert.match(guide, new RegExp(includedRecord));
  }

  for (const blockedScope of ['Darker Waves', 'Mechanismus', 'Substance', 'Riot Fest', 'Levitation']) {
    assert.doesNotMatch(guide, new RegExp(blockedScope));
  }

  assert.doesNotMatch(guide, /atlasPath: "\/festivals\/(dark-force-fest|cruel-world|verboden-music-festival)"/);
  assert.doesNotMatch(guide, /Currently confirmed|active upcoming cycle|tickets available/i);
  assert.doesNotMatch(guide, /latitude|longitude|geocodingSource|geocoding_source|coordinates|map pins|exact map pin|map placement/i);
  assert.doesNotMatch(guide, /fetch\(|prisma|supabase|mongodb|auth|cms|scrap/i);

  const featuredFestivals = read('src/components/home/FeaturedFestivals.tsx');
  assert.match(featuredFestivals, /Explore RetroAltFest Guides/);
  assert.match(featuredFestivals, /href="\/guides"/);
});

test('North American Goth and Darkwave guide metadata composes the RetroAltFest brand once', () => {
  const page = read('src/app/guides/north-american-goth-darkwave-festivals/page.tsx');
  const layout = read('src/app/layout.tsx');
  const seo = read('src/lib/seo.ts');
  const routeTitle = page.match(/title:\s*"([^"]+)"/)?.[1];
  const titleTemplate = layout.match(/template:\s*"([^"]+)"/)?.[1];
  const siteUrl = seo.match(/siteUrl\s*=\s*"([^"]+)"/)?.[1];
  const routePath = page.match(/const pagePath\s*=\s*"([^"]+)"/)?.[1];

  assert.equal(routeTitle, 'North American Goth & Darkwave Festivals');
  assert.doesNotMatch(routeTitle, /RetroAltFest/, 'route-level metadata input should not duplicate the brand');
  assert.equal(
    titleTemplate?.replace('%s', routeTitle),
    'North American Goth & Darkwave Festivals | RetroAltFest',
  );
  assert.equal(
    `${siteUrl}${routePath}`,
    'https://retroaltfest.com/guides/north-american-goth-darkwave-festivals',
  );
});

test('Night Transmission Phase 3A guide article stays route-local, square, and content-safe', () => {
  const guidePath = 'src/app/guides/north-american-goth-darkwave-festivals/page.tsx';
  const cssPath = 'src/app/guides/north-american-goth-darkwave-festivals/GuideArticle.module.css';

  assert.equal(existsSync(join(root, cssPath)), true, 'reference article should have route-local Night Transmission CSS');

  const guide = read(guidePath);
  const css = read(cssPath);
  const source = `${guide}\n${css}`;

  assert.match(guide, /import styles from "\.\/GuideArticle\.module\.css"/);
  assert.match(guide, /<main className=\{styles\.page\}>/);
  assert.match(guide, /className=\{styles\.paperEdge\} aria-hidden="true"/);
  assert.match(guide, /className=\{styles\.towerBeacon\} aria-hidden="true"/);
  assert.doesNotMatch(guide, /rounded-/);
  assert.doesNotMatch(guide, /"use client"|useState|useEffect|useMemo|fetch\(/);

  assert.equal((css.match(/magenta-orbit\.avif/g) ?? []).length, 1, 'orbital asset should be declared once');
  assert.equal((css.match(/tower-beacon-signature\.avif/g) ?? []).length, 1, 'tower asset should be declared once');
  const towerMediaIndex = css.indexOf('@media (min-width: 1101px)');
  const towerUrlIndex = css.indexOf('tower-beacon-signature.avif');
  assert.ok(towerMediaIndex > -1 && towerUrlIndex > towerMediaIndex, 'tower URL should live only in the desktop media query');
  assert.match(css, /prefers-reduced-motion/);
  assert.match(css, /forced-colors/);
  assert.match(css, /focus-visible/);

  const h2Sequence = [
    'Four active atlas records with current source support.',
    'Tracked dark-scene signals and related references.',
    'How RetroAltFest labels this guide',
    'The atlas expands only as sources hold.',
    'Choose your next discovery path.',
  ];
  let lastHeadingIndex = -1;
  for (const heading of h2Sequence) {
    const headingIndex = guide.indexOf(heading);
    assert.ok(headingIndex > lastHeadingIndex, `${heading} should stay in the approved H2 sequence`);
    lastHeadingIndex = headingIndex;
  }

  for (const atlasPath of [
    '/festivals/absolution-fest',
    '/festivals/a-murder-of-crows-xi-nyc-goth-post-punk-festival',
    '/festivals/cold-waves',
    '/festivals/terminus-festival',
  ]) {
    assert.match(guide, new RegExp(`atlasPath: "${atlasPath.replaceAll('/', '\\/')}"`));
  }
  assert.doesNotMatch(guide, /atlasPath: "\/festivals\/(dark-force-fest|cruel-world|verboden-music-festival)"/);
  assert.doesNotMatch(source, /FAQPage|application\/ld\+json|<script|\/prototypes\/|night-transmission-(hero|skyline|environment|wet-ground|poster)/i);
});

test('guide page for industrial EBM and dark electronic festivals is static, bounded, and source-safe', () => {
  const guidePath = 'src/app/guides/industrial-ebm-dark-electronic-festivals-north-america/page.tsx';
  assert.equal(existsSync(join(root, guidePath)), true, 'industrial guide route should exist');

  const guide = read(guidePath);
  const requiredCopy = [
    'Industrial, EBM &amp; Dark Electronic Festivals in North America',
    'source-aware North American guide',
    'official or organizer-controlled sources',
    'See how RetroAltFest verifies festival records',
    'Active industrial / dark electronic atlas records',
    'Core active atlas records with current source support',
    'Cold Waves',
    'Terminus Festival',
    'Mechanismus',
    'Verboden Music Festival',
    'Dark Force Fest',
    'Absolution Fest',
    'Core industrial / dark electronic atlas record',
    'Core industrial / EBM atlas record',
    'Related dark-scene overlap',
    'Tracked Seattle industrial scene signal',
    'Recently active corridor signal',
    'Reference/background signal',
    'Held from public card treatment',
    'Triton Festival stays held for now',
    'href="/verification"',
    'href="/festivals"',
    '/guides/north-american-goth-darkwave-festivals',
    'atlasPath: "/festivals/cold-waves"',
    'atlasPath: "/festivals/terminus-festival"',
    'atlasPath: "/festivals/absolution-fest"',
  ];

  for (const copy of requiredCopy) {
    assert.match(guide, new RegExp(copy.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')));
  }

  assert.doesNotMatch(guide, /atlasPath: "\/festivals\/(mechanismus|verboden-music-festival|dark-force-fest|triton-festival)"/);
  assert.doesNotMatch(guide, /\/festivals\/(mechanismus|verboden-music-festival|dark-force-fest|triton-festival)/);
  assert.doesNotMatch(guide, /currently confirmed examples|confirmed festivals|upcoming|tickets available/i);
  assert.doesNotMatch(guide, /latitude|longitude|geocodingSource|geocoding_source|coordinates|geocoding|map-ready|map placement|map pin|future map|later city-level map review/i);
  assert.doesNotMatch(guide, /fetch\(|prisma|supabase|mongodb|auth|cms|scrap/i);

  const featuredFestivals = read('src/components/home/FeaturedFestivals.tsx');
  assert.match(featuredFestivals, /Explore RetroAltFest Guides/);
  assert.match(featuredFestivals, /href="\/guides"/);
});

test('guide page for new wave post-punk and retro alternative festivals is static, bounded, and source-safe', () => {
  const guidePath = 'src/app/guides/new-wave-post-punk-retro-alternative-festivals-north-america/page.tsx';
  assert.equal(existsSync(join(root, guidePath)), true, 'new wave/post-punk guide route should exist');

  const guide = read(guidePath);
  const requiredCopy = [
    'New Wave, Post-Punk &amp; Retro Alternative Festivals in North America',
    'Start here for North American new wave, post-punk, retro alternative, synth-era, and related indie-nostalgia festival discovery.',
    'Who this guide is for',
    'How to use this guide',
    'Where to start',
    'Scene and vibe notes',
    'Source-supported active atlas record',
    'Darker Waves',
    '/festivals/darker-waves',
    'Related active atlas records',
    'Just Like Heaven',
    '/festivals/just-like-heaven',
    'The New Colossus Festival',
    '/festivals/the-new-colossus-festival',
    'Reference points, not active atlas links here',
    'Cruel World',
    'Riot Fest',
    'Why some names are not linked',
    'Short FAQ',
    'Related RetroAltFest paths',
    'See how RetroAltFest verifies festival records',
    '/verification',
    '/guides/north-american-goth-darkwave-festivals',
    '/guides/industrial-ebm-dark-electronic-festivals-north-america',
    '/guides/west-coast-pacific-northwest-dark-alternative-festivals',
    'href="/festivals"',
  ];

  for (const copy of requiredCopy) {
    assert.match(guide, new RegExp(copy.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')));
  }

  assert.doesNotMatch(guide, /festivalName: "Kilby Block Party"/);
  assert.doesNotMatch(guide, /festivalName: "Best Friends Forever Fest"/);
  assert.doesNotMatch(guide, /festivalName: "When We Were Young"/);
  assert.doesNotMatch(guide, /\/festivals\/cruel-world/);
  assert.doesNotMatch(guide, /\/festivals\/riot-fest/);
  assert.doesNotMatch(guide, /Currently confirmed/);
  assert.doesNotMatch(guide, /upcoming|tickets available|passes on sale|featuring|lineup includes|full lineup/i);
  assert.doesNotMatch(guide, /complete list|full directory|confirmed-current claims|best festivals/i);
  assert.doesNotMatch(guide, /latitude|longitude|geocodingSource|geocoding_source|coordinates|geocoding|map-ready|map placement|map pin|future map|later city-level map review/i);
  assert.doesNotMatch(guide, /date_pending|source_status|Phase 0|map-readiness|watchlist|core_anchor|confirmed_upcoming|mapDisplayCategory|public V1|source sufficiency|record type|overlap risk|adjacent_reference/i);
  assert.doesNotMatch(guide, /fetch\(|prisma|supabase|mongodb|auth|cms|scrap/i);

  const featuredFestivals = read('src/components/home/FeaturedFestivals.tsx');
  const sitemap = read('src/app/sitemap.ts');
  assert.match(featuredFestivals, /Explore RetroAltFest Guides/);
  assert.match(featuredFestivals, /href="\/guides"/);
  assert.match(sitemap, /\/guides\/new-wave-post-punk-retro-alternative-festivals-north-america/);
});

test('Night Transmission Phase 3D New Wave guide stays route-local, square, and contract-safe', () => {
  const guidePath = 'src/app/guides/new-wave-post-punk-retro-alternative-festivals-north-america/page.tsx';
  const cssPath = 'src/app/guides/new-wave-post-punk-retro-alternative-festivals-north-america/GuideArticle.module.css';

  assert.equal(existsSync(join(root, cssPath)), true, 'Phase 3D should have one route-local CSS module');

  const guide = read(guidePath);
  const css = existsSync(join(root, cssPath)) ? read(cssPath) : '';
  const source = `${guide}\n${css}`;
  const between = (start, end) => guide.slice(guide.indexOf(start), guide.indexOf(end));

  assert.match(guide, /import styles from "\.\/GuideArticle\.module\.css"/);
  for (const className of [
    'page',
    'paperEdge',
    'towerBeacon',
    'content',
    'breadcrumb',
    'masthead',
    'infoGrid',
    'dispatchSection',
    'dispatchCard',
    'vibeSection',
    'vibeCard',
    'guideSection',
    'festivalRecord',
    'recordIndex',
    'boundarySection',
    'statusSection',
    'faqSection',
    'relatedPaths',
    'discoveryShell',
  ]) {
    assert.match(guide, new RegExp(`styles\\.${className}`));
  }

  assert.match(guide, /data-article-contract="5d85dd89e20d653d151ed20a7752270b9eb79b73ed99526db011927480b7ac62"/);
  assert.match(guide, /data-heading-contract="1-12-25"/);
  assert.match(guide, /data-link-contract="27"/);
  assert.match(guide, /data-record-contract="1-core-2-adjacent-2-reference"/);
  assert.match(guide, /data-faq-contract="6"/);

  assert.doesNotMatch(guide, /"use client"|useState|useEffect|useMemo|fetch\(/);
  assert.doesNotMatch(guide, /ambient-haze|nocturnal-grid|cinematic-vignette|grain-field|map-panel-bloom|rounded-/);
  assert.equal((css.match(/magenta-orbit\.avif/g) ?? []).length, 1, 'orbital asset should be declared once');
  assert.equal((css.match(/tower-beacon-signature\.avif/g) ?? []).length, 1, 'tower asset should be declared once');
  const towerMediaIndex = css.indexOf('@media (min-width: 1101px)');
  const towerUrlIndex = css.indexOf('tower-beacon-signature.avif');
  assert.ok(towerMediaIndex > -1 && towerUrlIndex > towerMediaIndex, 'tower URL should live only in the 1101px desktop query');
  assert.match(css, /prefers-reduced-motion/);
  assert.match(css, /forced-colors/);
  assert.match(css, /focus-visible/);
  assert.doesNotMatch(css, /@keyframes|animation\s*:/);
  const nonZeroRadii = [...css.matchAll(/border-radius:\s*([^;]+);/g)]
    .map((match) => match[1].replace(/\s*!important\s*$/, '').trim())
    .filter((value) => value !== '0');
  assert.deepEqual(nonZeroRadii, [], 'Phase 3D route surfaces should stay square');

  const publicRecordNames = [...guide.matchAll(/festivalName: "([^"]+)"/g)].map((match) => match[1]);
  assert.deepEqual(publicRecordNames, [
    'Darker Waves',
    'Just Like Heaven',
    'The New Colossus Festival',
    'Cruel World',
    'Riot Fest',
  ]);
  assert.deepEqual([...guide.matchAll(/atlasPath: "([^"]+)"/g)].map((match) => match[1]), [
    '/festivals/darker-waves',
    '/festivals/just-like-heaven',
    '/festivals/the-new-colossus-festival',
  ]);
  assert.doesNotMatch(guide, /atlasPath: "\/festivals\/(cruel-world|riot-fest)"/);

  const activeBlock = between('const activeAtlasRecords', 'const adjacentAtlasRecords');
  const adjacentBlock = between('const adjacentAtlasRecords', 'const referenceRecords');
  const referenceBlock = between('const referenceRecords', 'const broadRelatedRecords');
  const broadBlock = between('const broadRelatedRecords', 'const statusLabels');
  assert.equal((activeBlock.match(/festivalName:/g) ?? []).length, 1);
  assert.equal((adjacentBlock.match(/festivalName:/g) ?? []).length, 2);
  assert.equal((referenceBlock.match(/festivalName:/g) ?? []).length, 1);
  assert.equal((broadBlock.match(/festivalName:/g) ?? []).length, 1);
  assert.doesNotMatch(guide, /heldBack|heldRecords|contextualSignals|contextOnlySignals/);

  assert.equal((guide.match(/<StartCard\b/g) ?? []).length, 6, 'six dispatch cards should remain');
  assert.equal((guide.match(/<VibeNote\b/g) ?? []).length, 4, 'four vibe notes should remain');
  assert.equal((guide.match(/<FaqItem\b/g) ?? []).length, 6, 'six FAQ entries should remain');
  const statusBlock = between('const statusLabels', 'const allPublicRecords');
  assert.equal((statusBlock.match(/label:/g) ?? []).length, 4, 'four status definitions should remain');
  assert.match(guide, /Why some names are not linked/);

  const h2Sequence = [
    'A doorway for retro alternative listeners who know the borders are blurry.',
    'Start with the atlas links, then use reference points as context.',
    'Choose the lane that matches your listening history.',
    'Retro alternative is a family tree, not a clean shelf label.',
    'Darker Waves is the active guide anchor.',
    'Nearby atlas links for retro alternative and post-punk-adjacent discovery.',
    'Familiar names can explain the lane without getting fake detail pages.',
    'RetroAltFest does not create festival pages just to fill space.',
    'How RetroAltFest labels this guide',
    'Quick answers for careful festival discovery.',
    'Keep the overlap useful without blurring the guides.',
    'Choose your next discovery path.',
  ];
  let lastHeadingIndex = -1;
  for (const heading of h2Sequence) {
    const headingIndex = guide.indexOf(heading, lastHeadingIndex + 1);
    assert.ok(headingIndex > lastHeadingIndex, `${heading} should remain in the frozen H2 sequence`);
    lastHeadingIndex = headingIndex;
  }

  const routeTitle = guide.match(/title: "([^"]+)"/)?.[1];
  assert.equal(routeTitle, 'New Wave, Post-Punk & Retro Alternative Festivals in North America');
  assert.match(guide, /const pagePath = "\/guides\/new-wave-post-punk-retro-alternative-festivals-north-america"/);
  assert.doesNotMatch(source, /FAQPage|application\/ld\+json|<script|\/prototypes\/|night-transmission-(hero|skyline|environment|wet-ground|poster)/i);
  assert.doesNotMatch(source, /<canvas|WebGLRenderingContext|<video|parallax|prisma|supabase|mongodb|\bauth\b|\bcms\b|\bdatabase\b|scraping/i);

  const protectedGuideHashes = new Map([
    ['src/app/guides/north-american-goth-darkwave-festivals/page.tsx', 'deebe1989e238fd3cdd1fcd701f7ceaea1280c54989f58b70bfb8e901ca59f8e'],
    ['src/app/guides/north-american-goth-darkwave-festivals/GuideArticle.module.css', 'c6ec3ab4ad902c67f831dd6c460c293e22b94e68206493863ad06254021ce20d'],
    ['src/app/guides/west-coast-pacific-northwest-dark-alternative-festivals/page.tsx', '527e52c33520fb7435bebdc1fd612622d082cd8470c9c82c8341b40efad87a94'],
    ['src/app/guides/west-coast-pacific-northwest-dark-alternative-festivals/GuideArticle.module.css', '6a614afd8fabf76a8e13301940958d655ddbe9931d1583ce20af45fe42406b54'],
    ['src/app/guides/industrial-ebm-dark-electronic-festivals-north-america/page.tsx', '70855708398e2be80af1a1effabeff23fca3151b6c72e6c0c5919417f1bdd668'],
    ['src/app/guides/industrial-ebm-dark-electronic-festivals-north-america/GuideArticle.module.css', 'c3cbaf0c651fa3544495a7f125def2be0708214d1dd6112775d847aecb5a559e'],
  ]);
  for (const [protectedPath, expectedHash] of protectedGuideHashes) {
    const actualHash = createHash('sha256').update(read(protectedPath)).digest('hex');
    assert.equal(actualHash, expectedHash, `${protectedPath} should remain hash-identical`);
  }
});

test('guide page for West Coast and Pacific Northwest dark alternative festivals is static, bounded, and source-safe', () => {
  const guidePath = 'src/app/guides/west-coast-pacific-northwest-dark-alternative-festivals/page.tsx';
  assert.equal(existsSync(join(root, guidePath)), true, 'West Coast / PNW guide route should exist');

  const guide = read(guidePath);
  const requiredCopy = [
    'West Coast &amp; Pacific Northwest Dark Alternative Festivals',
    'A curated regional route through active atlas records, recently active festival signals, and carefully caveated dark alternative source trails from Southern California to Portland, Seattle, and Vancouver.',
    'Southern California anchors',
    'Pacific Northwest corridor',
    'Darker Waves',
    'Cruel World',
    'Just Like Heaven',
    'Verboden Music Festival — Vancouver',
    'Verboden Music Festival — Seattle',
    'Verboden Music Festival — Portland',
    'Mechanismus',
    'Related festival to know',
    'active RetroAltFest atlas record',
    'recently active',
    'The checked official pages did not confirm a future edition',
    'Do not say tickets are available',
    'Exact future festival dates, festival venue, tickets, and lineup are not confirmed',
    'not as a darkwave or industrial anchor',
    'Spokane has an official-linked Verboden Showcase source trail',
    'Useful leads, but not public guide cards yet.',
    'Substance — Los Angeles',
    'Substance — San Francisco',
    'The Vth Gathering / San Francisco World Goth Day Festival — Alameda',
    'Out From The Shadows — Portland',
    'West Coast Women’s Darkwave Festival — Oakland',
    'Cloak & Dagger Festival — Los Angeles',
    '/guides/north-american-goth-darkwave-festivals',
    '/guides/industrial-ebm-dark-electronic-festivals-north-america',
    '/guides/new-wave-post-punk-retro-alternative-festivals-north-america',
    'href="/verification"',
    'href="/festivals"',
    'href={record.atlasPath}',
    'atlasPath: "/festivals/darker-waves"',
    'atlasPath: "/festivals/just-like-heaven"',
  ];

  for (const copy of requiredCopy) {
    assert.match(guide, new RegExp(copy.replace(/[.*+?^${}()|[\\]\\\\]/g, '\\\\$&')));
  }

  const publicCardNames = [...guide.matchAll(/festivalName: "([^"]+)"/g)].map((match) => match[1]);
  assert.deepEqual(publicCardNames, [
    'Darker Waves',
    'Cruel World',
    'Just Like Heaven',
    'Verboden Music Festival — Vancouver',
    'Verboden Music Festival — Seattle',
    'Verboden Music Festival — Portland',
    'Mechanismus',
  ]);

  for (const blockedCard of ['Spokane', 'Substance', 'The Vth Gathering', 'Out From The Shadows', 'West Coast Women’s Darkwave Festival', 'Cloak & Dagger']) {
    assert.doesNotMatch(guide, new RegExp(`festivalName: "[^"]*${blockedCard}`));
  }

  assert.doesNotMatch(guide, /Day 3 public content packet|Purpose:|Source safety checklist|Completion status/);
  assert.doesNotMatch(guide, /source_status|map-readiness|public V1|city_level_candidate|parent_only|date_pending|core_anchor|adjacent_reference|source_sufficiency|Phase 0|map_phase0_category/i);
  assert.doesNotMatch(guide, /latitude|longitude|geocodingSource|geocoding_source|coordinates|map pins|exact map pin/i);
  assert.doesNotMatch(guide, /fetch\(|prisma|supabase|mongodb|auth|cms|scrap/i);

  const featuredFestivals = read('src/components/home/FeaturedFestivals.tsx');
  const sitemap = read('src/app/sitemap.ts');
  const guidesPage = read('src/app/guides/page.tsx');
  assert.match(featuredFestivals, /West Coast \/ PNW/);
  assert.match(featuredFestivals, /regional West Coast \/ PNW discovery/);
  assert.match(guidesPage, /\/guides\/west-coast-pacific-northwest-dark-alternative-festivals/);
  assert.match(guidesPage, /Regional discovery across Southern California and the Pacific Northwest, with active atlas anchors, recently active corridor signals, and source-aware caveats\./);
  assert.match(sitemap, /\/guides\/west-coast-pacific-northwest-dark-alternative-festivals/);
});

test('Night Transmission Phase 3B West Coast guide stays route-local, square, and contract-safe', () => {
  const guidePath = 'src/app/guides/west-coast-pacific-northwest-dark-alternative-festivals/page.tsx';
  const cssPath = 'src/app/guides/west-coast-pacific-northwest-dark-alternative-festivals/GuideArticle.module.css';
  const protectedGuidePaths = [
    'src/app/guides/north-american-goth-darkwave-festivals/page.tsx',
    'src/app/guides/industrial-ebm-dark-electronic-festivals-north-america/page.tsx',
    'src/app/guides/new-wave-post-punk-retro-alternative-festivals-north-america/page.tsx',
  ];

  assert.equal(existsSync(join(root, cssPath)), true, 'Phase 3B should have one route-local CSS module');

  const guide = read(guidePath);
  const css = existsSync(join(root, cssPath)) ? read(cssPath) : '';
  const source = `${guide}\n${css}`;

  assert.match(guide, /import styles from "\.\/GuideArticle\.module\.css"/);
  for (const className of [
    'page',
    'paperEdge',
    'towerBeacon',
    'content',
    'breadcrumb',
    'masthead',
    'guideSection',
    'festivalRecord',
    'recordIndex',
    'heldBackList',
    'relatedPaths',
  ]) {
    assert.match(guide, new RegExp(`styles\\.${className}`));
  }

  assert.doesNotMatch(guide, /"use client"|useState|useEffect|useMemo|fetch\(/);
  assert.equal((css.match(/magenta-orbit\.avif/g) ?? []).length, 1, 'orbital asset should be declared once');
  assert.equal((css.match(/tower-beacon-signature\.avif/g) ?? []).length, 1, 'tower asset should be declared once');
  const towerMediaIndex = css.indexOf('@media (min-width: 1101px)');
  const towerUrlIndex = css.indexOf('tower-beacon-signature.avif');
  assert.ok(towerMediaIndex > -1 && towerUrlIndex > towerMediaIndex, 'tower URL should live only in the 1101px desktop media query');
  assert.match(css, /prefers-reduced-motion/);
  assert.match(css, /forced-colors/);
  assert.match(css, /focus-visible/);
  assert.doesNotMatch(guide, /rounded-/);
  const nonZeroRadii = [...css.matchAll(/border-radius:\s*([^;]+);/g)]
    .map((match) => match[1].replace(/\s*!important\s*$/, '').trim())
    .filter((value) => value !== '0');
  assert.deepEqual(nonZeroRadii, [], 'Phase 3B route surfaces should stay square');

  const publicCardNames = [...guide.matchAll(/festivalName: "([^"]+)"/g)].map((match) => match[1]);
  assert.deepEqual(publicCardNames, [
    'Darker Waves',
    'Cruel World',
    'Just Like Heaven',
    'Verboden Music Festival — Vancouver',
    'Verboden Music Festival — Seattle',
    'Verboden Music Festival — Portland',
    'Mechanismus',
  ]);
  assert.deepEqual([...guide.matchAll(/atlasPath: "([^"]+)"/g)].map((match) => match[1]), [
    '/festivals/darker-waves',
    '/festivals/just-like-heaven',
  ]);
  assert.equal((guide.match(/festivalName:/g) ?? []).length, 8, 'type plus seven records should be the only festivalName source occurrences');
  assert.equal((guide.match(/atlasPath:/g) ?? []).length, 2, 'exactly two records should declare atlasPath');

  const heldBackNames = [...guide.matchAll(/name: "([^"]+)"/g)].map((match) => match[1]);
  assert.deepEqual(heldBackNames, [
    'Substance — Los Angeles',
    'Substance — San Francisco',
    'The Vth Gathering / San Francisco World Goth Day Festival — Alameda',
    'Out From The Shadows — Portland',
    'West Coast Women’s Darkwave Festival — Oakland',
    'Cloak & Dagger Festival — Los Angeles',
  ]);
  assert.match(guide, /Spokane has an official-linked Verboden Showcase source trail/);
  assert.doesNotMatch(guide, /festivalName: "[^"]*Spokane|name: "[^"]*Spokane|atlasPath: "[^"]*spokane/i);

  const h2Sequence = [
    'A regional route, not another genre directory.',
    'The route starts with active atlas records and careful reference points.',
    'Verboden and Mechanismus give the guide its strongest regional value.',
    'Official sources first, then careful public wording.',
    'Useful leads, but not public guide cards yet.',
    'Keep the regional route distinct from the scene guides.',
    'Choose your next discovery path.',
  ];
  let lastHeadingIndex = -1;
  for (const heading of h2Sequence) {
    const headingIndex = guide.indexOf(heading);
    assert.ok(headingIndex > lastHeadingIndex, `${heading} should remain in the frozen H2 sequence`);
    lastHeadingIndex = headingIndex;
  }

  const fixedLinkSequence = [
    'href="/verification"',
    'href={gothDarkwaveGuidePath}',
    'href={industrialEbmGuidePath}',
    'href={retroAlternativeGuidePath}',
    'href="/festivals"',
    'href: "/guides"',
    'href: "/festivals"',
    'href: "/verification"',
  ];
  let lastLinkIndex = -1;
  for (const linkSource of fixedLinkSequence) {
    const linkIndex = guide.indexOf(linkSource, lastLinkIndex + 1);
    assert.ok(linkIndex > lastLinkIndex, `${linkSource} should remain in route-owned source order`);
    lastLinkIndex = linkIndex;
  }

  assert.doesNotMatch(source, /FAQPage|application\/ld\+json|<script|\/prototypes\/|night-transmission-(hero|skyline|environment|wet-ground|poster)/i);
  assert.doesNotMatch(source, /<canvas|WebGLRenderingContext|<video|parallax|prisma|supabase|mongodb|\bauth\b|\bcms\b|\bdatabase\b|scraping/i);

  for (const protectedGuidePath of protectedGuidePaths) {
    const protectedGuide = read(protectedGuidePath);
    assert.doesNotMatch(protectedGuide, /west-coast-pacific-northwest-dark-alternative-festivals\/GuideArticle\.module\.css/);
  }
});

test('Night Transmission Phase 3C Industrial guide stays route-local, square, and contract-safe', () => {
  const guidePath = 'src/app/guides/industrial-ebm-dark-electronic-festivals-north-america/page.tsx';
  const cssPath = 'src/app/guides/industrial-ebm-dark-electronic-festivals-north-america/GuideArticle.module.css';
  const protectedGuidePaths = [
    'src/app/guides/north-american-goth-darkwave-festivals/page.tsx',
    'src/app/guides/west-coast-pacific-northwest-dark-alternative-festivals/page.tsx',
    'src/app/guides/new-wave-post-punk-retro-alternative-festivals-north-america/page.tsx',
  ];

  assert.equal(existsSync(join(root, cssPath)), true, 'Phase 3C should have one route-local CSS module');

  const guide = read(guidePath);
  const css = existsSync(join(root, cssPath)) ? read(cssPath) : '';
  const source = `${guide}\n${css}`;

  assert.match(guide, /import styles from "\.\/GuideArticle\.module\.css"/);
  assert.match(guide, /data-article-contract="de81cbdb5ec67509b1af3114b37b4d87d8a1dd32aa50ace7e5346fd299334732"/);
  for (const className of [
    'page',
    'paperEdge',
    'towerBeacon',
    'content',
    'breadcrumb',
    'masthead',
    'guideSection',
    'festivalRecord',
    'recordIndex',
    'heldSection',
    'statusSection',
    'relatedPaths',
  ]) {
    assert.match(guide, new RegExp(`styles\\.${className}`));
  }

  assert.doesNotMatch(guide, /"use client"|useState|useEffect|useMemo|fetch\(/);
  assert.equal((css.match(/magenta-orbit\.avif/g) ?? []).length, 1, 'orbital asset should be declared once');
  assert.equal((css.match(/tower-beacon-signature\.avif/g) ?? []).length, 1, 'tower asset should be declared once');
  const towerMediaIndex = css.indexOf('@media (min-width: 1101px)');
  const towerUrlIndex = css.indexOf('tower-beacon-signature.avif');
  assert.ok(towerMediaIndex > -1 && towerUrlIndex > towerMediaIndex, 'tower URL should live only in the 1101px desktop media query');
  assert.match(css, /prefers-reduced-motion/);
  assert.match(css, /forced-colors/);
  assert.match(css, /focus-visible/);
  const nonZeroRadii = [...css.matchAll(/border-radius:\s*([^;]+);/g)]
    .map((match) => match[1].replace(/\s*!important\s*$/, '').trim())
    .filter((value) => value !== '0');
  assert.deepEqual(nonZeroRadii, [], 'Phase 3C route surfaces should stay square');

  const rootLayout = read('src/app/layout.tsx');
  const seoHelper = read('src/lib/seo.ts');
  const routeTitle = guide.match(/title: "([^"]+)"/)?.[1];
  const rootTitleTemplate = rootLayout.match(/template: "([^"]+)"/)?.[1];
  const routePath = guide.match(/const pagePath = "([^"]+)"/)?.[1];
  const expectedRouteTitle = 'Industrial, EBM & Dark Electronic Festivals in North America';
  const expectedRenderedTitle = `${expectedRouteTitle} | RetroAltFest`;
  const expectedCanonicalHref = 'https://retroaltfest.com/guides/industrial-ebm-dark-electronic-festivals-north-america';

  assert.equal(routeTitle, expectedRouteTitle);
  assert.equal(rootTitleTemplate, '%s | RetroAltFest');
  assert.equal(rootTitleTemplate.replace('%s', routeTitle), expectedRenderedTitle);
  assert.equal(`https://retroaltfest.com${routePath}`, expectedCanonicalHref);
  assert.match(guide, /path: pagePath/);
  assert.match(guide, /type: "article"/);
  assert.match(seoHelper, /const canonical = absoluteUrl\(path\)/);
  assert.match(seoHelper, /alternates:\s*{\s*canonical/);
  assert.match(seoHelper, /openGraph:\s*{\s*title,/);
  assert.match(seoHelper, /twitter:\s*{[\s\S]*?title,/);
  assert.equal(routeTitle, expectedRouteTitle, 'Open Graph title should inherit the exact buildMetadata title input');
  assert.equal(routeTitle, expectedRouteTitle, 'Twitter title should inherit the exact buildMetadata title input');

  const normalizedGuide = guide.replace(/title: "[^"]+"/, 'title: "__ROUTE_TITLE__"');
  assert.equal(createHash('sha256').update(normalizedGuide).digest('hex'), '3a9341ef83a87b421635eead002eb2238cc966251000826e60b6335a7715c945');
  assert.equal(createHash('sha256').update(css).digest('hex'), 'c3cbaf0c651fa3544495a7f125def2be0708214d1dd6112775d847aecb5a559e');

  const publicRecordSource = guide.slice(0, guide.indexOf('const heldRecords'));
  const publicRecordNames = [...publicRecordSource.matchAll(/festivalName: "([^"]+)"/g)].map((match) => match[1]);
  assert.deepEqual(publicRecordNames, [
    'Cold Waves',
    'Terminus Festival',
    'Absolution Fest',
    'Mechanismus',
    'Verboden Music Festival',
    'Dark Force Fest',
  ]);
  assert.deepEqual([...publicRecordSource.matchAll(/atlasPath: "([^"]+)"/g)].map((match) => match[1]), [
    '/festivals/cold-waves',
    '/festivals/terminus-festival',
    '/festivals/absolution-fest',
  ]);
  assert.equal((publicRecordSource.match(/festivalName:/g) ?? []).length, 7, 'type plus six public records should be the only public festivalName source occurrences');
  assert.equal((publicRecordSource.match(/atlasPath:/g) ?? []).length, 3, 'exactly three public records should declare atlasPath');

  const variants = [...guide.matchAll(/variant="(active|adjacent|caveated|reference)"/g)].map((match) => match[1]);
  assert.deepEqual(variants, ['active', 'adjacent', 'caveated', 'reference']);

  const h2Sequence = [
    'Core active atlas records with current source support.',
    'A linked atlas record for adjacent scene overlap.',
    'Strong industrial and dark-electronic signals, clearly caveated.',
    'Useful context, not a current anchor.',
    'Triton Festival stays held for now.',
    'How RetroAltFest labels this guide',
    'Follow the overlap without blurring the labels.',
    'The industrial guide expands only as sources hold.',
    'Choose your next discovery path.',
  ];
  let lastHeadingIndex = -1;
  for (const heading of h2Sequence) {
    const headingIndex = guide.indexOf(heading, lastHeadingIndex + 1);
    assert.ok(headingIndex > lastHeadingIndex, `${heading} should remain in the frozen H2 source sequence`);
    lastHeadingIndex = headingIndex;
  }

  for (const statusLabel of [
    'Core industrial / dark electronic atlas record',
    'Core industrial / EBM atlas record',
    'Related dark-scene overlap',
    'Tracked scene signal',
    'Recently active corridor signal',
    'Held until source support improves',
  ]) {
    assert.match(guide, new RegExp(statusLabel.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')));
  }

  assert.match(guide, /Triton Festival remains held from this guide because current official source support was not strong enough in this refresh\./);
  assert.match(guide, /Triton should not appear as a public festival card or linked detail route\./);
  assert.match(guide, /festivalName: "Triton Festival"/);
  assert.doesNotMatch(guide, /atlasPath: "[^"]*triton|href="[^"]*triton/i);

  const officialUrls = [...guide.matchAll(/officialUrl: "([^"]+)"/g)].map((match) => match[1]);
  assert.deepEqual(officialUrls, [
    'https://coldwaves.net/',
    'https://terminus-festival.com/',
    'https://www.absolutionfest.com/',
    'https://www.mechanismus.net/',
    'https://verbodenfestival.com/',
    'https://darkforcefest.com/',
  ]);

  assert.doesNotMatch(source, /FAQPage|application\/ld\+json|<script|\/prototypes\/|night-transmission-(hero|skyline|environment|wet-ground|poster)/i);
  assert.doesNotMatch(source, /<canvas|WebGLRenderingContext|<video|parallax|prisma|supabase|mongodb|\bauth\b|\bcms\b|\bdatabase\b|scraping/i);

  for (const protectedGuidePath of protectedGuidePaths) {
    const protectedGuide = read(protectedGuidePath);
    assert.doesNotMatch(protectedGuide, /industrial-ebm-dark-electronic-festivals-north-america\/GuideArticle\.module\.css|NT \/ CHANNEL 03C/);
  }
});

test('public verification page explains source checks without exposing internal workflow labels', () => {
  const verificationPath = 'src/app/verification/page.tsx';
  assert.equal(existsSync(join(root, verificationPath)), true, 'static /verification page should exist');

  const verificationPage = read(verificationPath);
  const homepageTrust = read('src/components/home/TrustSection.tsx');
  const festivalsPage = read('src/app/festivals/page.tsx');
  const guidesPage = read('src/app/guides/page.tsx');
  const festivalDetailPage = read('src/app/festivals/[slug]/page.tsx');
  const sitemap = read('src/app/sitemap.ts');

  for (const copy of [
    'How RetroAltFest Verifies Festivals | RetroAltFest',
    'How RetroAltFest verifies festivals',
    'Verified before mapped',
    'Confirmed upcoming',
    'Dates not announced yet',
    'Source check in progress',
    'Not ready for map placement yet',
    'A map pin implies confidence',
  ]) {
    assert.match(verificationPage, new RegExp(copy.replace(/[.*+?^${}()|[\\]\\\\]/g, '\\\\$&')));
  }

  assert.match(verificationPage, /metadata: Metadata/);
  assert.match(verificationPage, /buildMetadata/);
  assert.match(verificationPage, /path: pagePath/);
  assert.match(verificationPage, /href="\/festivals"/);
  assert.match(verificationPage, /href="\/guides"/);
  assert.doesNotMatch(verificationPage, /fetch\(|prisma|supabase|mongodb|auth|cms|scrap|api\//i);
  assert.doesNotMatch(verificationPage, /date_pending|Phase 0|map-readiness|core_anchor|source_status|map_phase0_category|geocoding_source|latitude|longitude|coordinates/i);

  for (const source of [homepageTrust, festivalsPage, guidesPage, festivalDetailPage, sitemap]) {
    assert.match(source, /\/verification/);
  }
});

test('verification Night Transmission integration stays static, route-scoped, source-safe, and content-preserving', () => {
  const pagePath = 'src/app/verification/page.tsx';
  const stylesPath = 'src/app/verification/VerificationPage.module.css';
  const waveformAsset = 'public/night-transmission-inner/purple-waveform.avif';
  const towerAsset = 'public/night-transmission-inner/tower-beacon-signature.avif';

  assert.equal(existsSync(join(root, stylesPath)), true, 'route-scoped Verification CSS should exist');
  assert.equal(existsSync(join(root, waveformAsset)), true, 'approved production waveform asset should exist');
  assert.equal(existsSync(join(root, towerAsset)), true, 'existing production tower asset should remain available');

  const page = read(pagePath);
  const styles = existsSync(join(root, stylesPath)) ? read(stylesPath) : '';
  const source = `${page}\n${styles}`;

  assert.match(page, /import styles from "\.\/VerificationPage\.module\.css"/);
  for (const className of [
    'page',
    'towerBeacon',
    'content',
    'breadcrumb',
    'masthead',
    'trustGrid',
    'statusGrid',
    'statusPanel',
    'sourcesGrid',
    'ctaPanel',
    'closing',
  ]) {
    assert.match(page, new RegExp(`styles\\.${className}`));
  }

  assert.match(styles, /\/night-transmission-inner\/purple-waveform\.avif/);
  assert.match(styles, /\/night-transmission-inner\/tower-beacon-signature\.avif/);
  assert.match(styles, /position:\s*fixed/);
  assert.match(styles, /background-size:\s*cover|\/\s*cover\s+no-repeat/);
  assert.match(styles, /@media\s*\(min-width:\s*901px\)/);
  assert.match(styles, /@media\s*\(max-width:\s*900px\)/);
  assert.match(styles, /prefers-reduced-motion:\s*reduce/);
  assert.match(styles, /forced-colors:\s*active/);
  assert.ok(
    styles.indexOf('/night-transmission-inner/tower-beacon-signature.avif') > styles.indexOf('@media (min-width: 901px)'),
    'tower URL should only be declared inside the desktop media query',
  );

  assert.doesNotMatch(page, /"use client"|useState|useEffect|useMemo|fetch\(/);
  assert.doesNotMatch(source, /\/prototypes\/|\/night-transmission\/(?!inner)/);
  assert.doesNotMatch(source, /border-radius:\s*(?!0\b)|rounded-/);
  assert.doesNotMatch(source, /canvas(?!text)|webgl|video|parallax|prisma|supabase|mongodb|\bauth\b|\bcms\b|\bdatabase\b|scraping/i);
  assert.doesNotMatch(page, /Visual concept|Prototype breadcrumb|data-channel=/);

  assert.match(page, /const pagePath = "\/verification"/);
  assert.match(page, /How RetroAltFest Verifies Festivals \| RetroAltFest/);
  assert.match(page, /How RetroAltFest verifies festivals/);
  assert.match(page, /statusLabels\.map/);
  assert.match(page, /sourceExamples\.map/);
  assert.match(page, /href="\/suggest"/);
});

test('guides index is static, compact, and lists exactly the five live curated scene guides', () => {
  const guidesPath = 'src/app/guides/page.tsx';
  assert.equal(existsSync(join(root, guidesPath)), true, 'static /guides page should exist');

  const guidesPage = read(guidesPath);
  const homepage = read('src/components/home/FeaturedFestivals.tsx');
  const sitemap = read('src/app/sitemap.ts');

  const guideHrefs = [
    '/guides/west-coast-pacific-northwest-dark-alternative-festivals',
    '/guides/european-goth-darkwave-industrial-festivals',
    '/guides/north-american-goth-darkwave-festivals',
    '/guides/industrial-ebm-dark-electronic-festivals-north-america',
    '/guides/new-wave-post-punk-retro-alternative-festivals-north-america',
  ];

  assert.match(guidesPage, /RetroAltFest Guides/);
  assert.match(guidesPage, /Start here for curated paths into goth, darkwave, industrial, EBM, post-punk, new wave, and retro alternative festivals\./);
  assert.match(guidesPage, /RetroAltFest Guides \| Goth, Darkwave, Industrial & Retro Alternative Festivals/);
  assert.match(guidesPage, /we check official or reliable sources/);

  for (const href of guideHrefs) {
    assert.match(guidesPage, new RegExp(href.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')));
    assert.equal(existsSync(join(root, `src/app${href}/page.tsx`)), true, `${href} should still exist`);
  }

  const hrefMatches = [...guidesPage.matchAll(/href: "(\/guides\/[^"]+)"/g)].map((match) => match[1]);
  assert.deepEqual(hrefMatches, guideHrefs);

  assert.match(homepage, /Explore RetroAltFest Guides/);
  assert.match(homepage, /href="\/guides"/);
  assert.doesNotMatch(homepage, /href="\/guides\/new-wave-post-punk-retro-alternative-festivals-north-america"/);
  assert.doesNotMatch(homepage, /href="\/guides\/industrial-ebm-dark-electronic-festivals-north-america"/);
  assert.doesNotMatch(homepage, /href="\/guides\/north-american-goth-darkwave-festivals"/);

  assert.match(sitemap, /`\$\{SITE_URL\}\/guides`/);
  assert.doesNotMatch(guidesPage, /future guide|coming soon|placeholder|search|filter|useState|useMemo|fetch\(|prisma|supabase|mongodb|auth|cms|database|geocoding|latitude|longitude|coordinates|map pins/i);
});

test('guides hub Night Transmission integration stays static, route-scoped, and content-safe', () => {
  const pagePath = 'src/app/guides/page.tsx';
  const stylesPath = 'src/app/guides/GuidesHub.module.css';
  const orbitalAsset = 'public/night-transmission-inner/magenta-orbit.avif';
  const towerAsset = 'public/night-transmission-inner/tower-beacon-signature.avif';

  assert.equal(existsSync(join(root, stylesPath)), true, 'route-scoped Guides Hub CSS should exist');
  assert.equal(existsSync(join(root, orbitalAsset)), true, 'approved production orbital asset should exist');
  assert.equal(existsSync(join(root, towerAsset)), true, 'existing production tower asset should remain available');

  const page = read(pagePath);
  const styles = existsSync(join(root, stylesPath)) ? read(stylesPath) : '';
  const source = `${page}\n${styles}`;

  assert.match(page, /import styles from "\.\/GuidesHub\.module\.css"/);
  assert.match(page, /className=\{styles\.page\}/);
  assert.match(page, /className=\{styles\.towerBeacon\}/);
  assert.match(page, /className=\{styles\.issueIndex\}/);
  assert.match(page, /className=\{styles\.featured\}/);
  assert.match(page, /className=\{styles\.guideRow\}/);
  assert.match(page, /String\(index \+ 1\)\.padStart\(2, "0"\)/);
  assert.match(page, /const \[featured, \.\.\.remainingGuides\] = guides/);
  assert.match(page, /<article[^>]+className=\{styles\.featured\}/s);
  assert.match(page, /remainingGuides\.map\(\(guide, index\)/);

  assert.match(styles, /\/night-transmission-inner\/magenta-orbit\.avif/);
  assert.match(styles, /\/night-transmission-inner\/tower-beacon-signature\.avif/);
  assert.match(styles, /position:\s*fixed/);
  assert.match(styles, /background-size:\s*cover|\/\s*cover\s+no-repeat/);
  assert.match(styles, /@media\s*\(min-width:\s*901px\)/);
  assert.match(styles, /@media\s*\(max-width:\s*900px\)/);
  assert.match(styles, /prefers-reduced-motion:\s*reduce/);
  assert.match(styles, /forced-colors:\s*active/);

  assert.doesNotMatch(page, /"use client"|useState|useEffect|useMemo|fetch\(/);
  assert.doesNotMatch(source, /\/prototypes\/|\/night-transmission\/(?!inner)/);
  assert.doesNotMatch(source, /border-radius:\s*(?!0\b)|rounded-/);
  assert.doesNotMatch(source, /canvas(?!text)|webgl|video|parallax|prisma|supabase|mongodb|\bauth\b|\bcms\b|\bdatabase\b|scraping/i);
  assert.doesNotMatch(page, /Field Guides|Visual concept|FEATURED TRANSMISSION|Guide concept index/);
});

test('internal discovery links connect existing routes without fake festival detail pages', () => {
  const data = JSON.parse(read('src/data/atlas-festivals.json'));
  const atlasSlugs = new Set(data.festivals.map((record) => record.slug));
  assert.equal(data.festivals.length, 15);

  const sourcePaths = [
    'src/app/page.tsx',
    'src/app/festivals/page.tsx',
    'src/app/festivals/[slug]/page.tsx',
    'src/app/guides/page.tsx',
    'src/app/guides/north-american-goth-darkwave-festivals/page.tsx',
    'src/app/guides/industrial-ebm-dark-electronic-festivals-north-america/page.tsx',
    'src/app/guides/new-wave-post-punk-retro-alternative-festivals-north-america/page.tsx',
    'src/app/guides/west-coast-pacific-northwest-dark-alternative-festivals/page.tsx',
    'src/app/verification/page.tsx',
    'src/app/suggest/page.tsx',
    'src/components/site/Header.tsx',
    'src/components/site/Footer.tsx',
    'src/components/site/DiscoveryLinks.tsx',
  ];

  const source = sourcePaths.map(read).join('\n');
  for (const route of ['/festivals', '/guides', '/verification', '/suggest']) {
    assert.match(source, new RegExp(route.replace(/[.*+?^${}()|[\\]\\\\]/g, '\\\\$&')));
  }

  for (const guide of [
    '/guides/west-coast-pacific-northwest-dark-alternative-festivals',
    '/guides/north-american-goth-darkwave-festivals',
    '/guides/industrial-ebm-dark-electronic-festivals-north-america',
    '/guides/new-wave-post-punk-retro-alternative-festivals-north-america',
  ]) {
    assert.match(source, new RegExp(guide.replace(/[.*+?^${}()|[\\]\\\\]/g, '\\\\$&')));
  }

  const festivalLinks = [...source.matchAll(/\/festivals\/([a-z0-9-]+)/g)].map((match) => match[1]);
  for (const slug of festivalLinks) {
    assert.equal(atlasSlugs.has(slug), true, `/festivals/${slug} should be an active atlas route`);
  }

  for (const blockedSlug of ['cruel-world', 'riot-fest', 'dark-force-fest', 'triton-festival', 'verboden-music-festival', 'mechanismus', 'mechanismus-festival']) {
    assert.doesNotMatch(source, new RegExp(`/festivals/${blockedSlug}`));
  }
});

test('discovery flow uses route-safe global navigation instead of local-only footer anchors', () => {
  const header = read('src/components/site/Header.tsx');
  const footer = read('src/components/site/Footer.tsx');
  const homepage = read('src/app/page.tsx');
  const detailPage = read('src/app/festivals/[slug]/page.tsx');

  for (const source of [header, footer]) {
    assert.match(source, /href="\/festivals"/);
    assert.match(source, /href="\/guides"/);
    assert.match(source, /href="\/verification"/);
  }

  assert.doesNotMatch(footer, /href="#(festivals|map|trust|submit)"/);
  assert.match(homepage, /Where should I start\?/);
  assert.match(homepage, /Choose your first RetroAltFest path/);
  assert.match(detailPage, /Continue exploring RetroAltFest/);
  assert.match(header, /href="\/suggest"/);
  assert.match(footer, /href="\/suggest"/);
});

test('public festival DTO helper defines only approved browser-facing shapes', () => {
  const helperPath = 'src/lib/public-festivals.ts';
  assert.equal(existsSync(join(root, helperPath)), true, 'public DTO helper should exist');

  const helper = read(helperPath);
  for (const exportName of [
    'PublicFestivalDirectoryItem',
    'PublicFeaturedFestival',
    'PublicFestivalDetail',
    'toPublicFestivalDirectoryItem',
    'toPublicFeaturedFestival',
    'toPublicFestivalDetail',
  ]) {
    assert.match(helper, new RegExp(`export (type |function |const )${exportName}`));
  }

  for (const approvedField of [
    'id',
    'slug',
    'name',
    'locationLabel',
    'dateLabel',
    'sceneTags',
    'statusLabel',
    'searchText',
    'summary',
    'sourceConfidenceLabel',
    'coordinateLabel',
    'officialSiteUrl',
    'sourceLinks',
    'similar',
  ]) {
    assert.match(helper, new RegExp(approvedField));
  }
});

test('client-facing festival components use public DTOs instead of raw festival records', () => {
  const directoryPage = read('src/app/festivals/page.tsx');
  const browser = read('src/components/festivals/FestivalDirectoryBrowser.tsx');
  const featured = read('src/components/home/FeaturedFestivals.tsx');
  const card = read('src/components/home/FestivalCard.tsx');

  assert.match(directoryPage, /publicFestivalDirectoryItems/);
  assert.doesNotMatch(directoryPage, /festivalDirectoryRecords/);
  assert.match(browser, /PublicFestivalDirectoryItem/);
  assert.doesNotMatch(browser, /FestivalDirectoryRecord|verification_status|festival_name|record_id|venue_name/);
  assert.match(featured, /publicFeaturedFestivals/);
  assert.doesNotMatch(featured, /featuredFestivals\.map/);
  assert.match(card, /PublicFeaturedFestival/);
  assert.doesNotMatch(card, /import \{ Festival|official_url|verification_status|festival_name|record_id|date_text/);
});

test('festival detail route renders only public detail DTO fields', () => {
  const detailPage = read('src/app/festivals/[slug]/page.tsx');

  assert.match(detailPage, /getPublicFestivalDetailBySlug/);
  assert.match(detailPage, /publicFestivalSlugs/);
  assert.match(detailPage, /festival\.sourceLinks/);
  assert.match(detailPage, /festival\.sourceConfidenceLabel/);
  assert.match(detailPage, /festival\.coordinateLabel/);
  assert.doesNotMatch(detailPage, /geocoding_confidence|geocoding_source|geocoding_query|map_display_category|map_phase0_category|source_status|source_confidence|data_quality_notes|map_notes|official_url|verification_status|festival_name|date_text|venue_name|similar_festival_ids/);
});

test('public route and component sources do not expose blocked internal source-safety terms', () => {
  const publicSourceFiles = [
    'src/app/page.tsx',
    'src/app/festivals/page.tsx',
    'src/app/festivals/[slug]/page.tsx',
    'src/app/guides/page.tsx',
    'src/app/guides/north-american-goth-darkwave-festivals/page.tsx',
    'src/app/guides/industrial-ebm-dark-electronic-festivals-north-america/page.tsx',
    'src/app/guides/new-wave-post-punk-retro-alternative-festivals-north-america/page.tsx',
    'src/app/guides/west-coast-pacific-northwest-dark-alternative-festivals/page.tsx',
    'src/app/verification/page.tsx',
    'src/app/suggest/page.tsx',
    'src/components/festivals/FestivalDirectoryBrowser.tsx',
    'src/components/home/FestivalCard.tsx',
    'src/components/home/FeaturedFestivals.tsx',
    'src/components/home/MapPreview.tsx',
    'src/components/home/TrustSection.tsx',
    'src/components/home/FirstDarkFestivalSignals.tsx',
    'src/components/home/SubmitFestivalCta.tsx',
  ];

  const blockedPatterns = [
    /geocoding_source/i,
    /geocoding_query/i,
    /geocoding_confidence/i,
    /map_phase0_category/i,
    /source_status/i,
    /source_sufficiency/i,
    /date_pending/i,
    /needs_review/i,
    /core_anchor/i,
    /watchlist/i,
    /Phase 0/i,
    /map-readiness/i,
    /latitude/i,
    /longitude/i,
  ];

  for (const filePath of publicSourceFiles) {
    const source = read(filePath);
    for (const pattern of blockedPatterns) {
      assert.doesNotMatch(source, pattern, `${filePath} should not expose ${pattern}`);
    }
  }
});

test('Night Transmission Phase 4B M’era Luna reference stays content-exact and source-safe after controlled activation', () => {
  const pagePath = 'src/app/festivals/[slug]/page.tsx';
  const cssPath = 'src/app/festivals/[slug]/FestivalDetail.module.css';
  const atlasPath = 'src/data/atlas-festivals.json';
  const dtoPath = 'src/lib/public-festivals.ts';

  assert.equal(existsSync(join(root, cssPath)), true, 'Phase 4B route-local stylesheet should exist');

  const page = read(pagePath);
  const css = read(cssPath);
  const atlasSource = read(atlasPath);
  const dtoSource = read(dtoPath);
  const atlas = JSON.parse(atlasSource);
  const selected = atlas.festivals.find((festival) => festival.slug === 'mera-luna-festival');

  assert.ok(selected, 'M’era Luna should remain an active atlas record');
  assert.equal(atlas.festivals.length, 15);
  assert.equal(new Set(atlas.festivals.map((festival) => festival.slug)).size, 15);
  assert.equal(atlas.festivals.every((festival) => festival.latitude === null && festival.longitude === null), true);
  assert.equal(atlas.festivals.every((festival) => festival.geocoding_source === null && festival.geocoding_query === null), true);
  assert.deepEqual(new Set(atlas.festivals.map((festival) => festival.geocoding_confidence)), new Set(['not_geocoded']));
  assert.equal(createHash('sha256').update(atlasSource).digest('hex'), '8e148cb046ff61f9cdcba8ed415790bd2f005ed66ae276abe5e3c46d31599e78');
  assert.equal(createHash('sha256').update(dtoSource).digest('hex'), 'e3950b813213b93bbd700d354b45797a2cf3540637e1417c14f6e577747fccf8');

  assert.match(page, /import styles from "\.\/FestivalDetail\.module\.css"/);
  assert.match(page, /const FESTIVAL_DETAIL_REFERENCE_SLUG = "mera-luna-festival"/);
  assert.equal((page.match(/FESTIVAL_DETAIL_REFERENCE_SLUG/g) ?? []).length, 4, 'one declaration, one metadata override key, one activation member, and one identity comparison are allowed');
  assert.equal((page.match(/festival\.slug === FESTIVAL_DETAIL_REFERENCE_SLUG/g) ?? []).length, 1);
  assert.equal((page.match(/"mera-luna-festival"/g) ?? []).length, 1, 'the selected slug should be declared once');
  assert.match(page, /data-festival-detail-reference=\{usesNightTransmissionPresentation \? "night-transmission" : undefined\}/);
  assert.match(page, /data-phase4a-main-contract=\{isMeraLunaReferenceRoute \? PHASE4A_MAIN_CONTENT_HASH : undefined\}/);
  assert.match(page, /data-phase4a-article-contract=\{isMeraLunaReferenceRoute \? PHASE4A_ARTICLE_CONTENT_HASH : undefined\}/);
  assert.match(page, /const PHASE4A_MAIN_CONTENT_HASH = "76c758093ac2f0188e28f9661519d6455421c4d07720ab251d0744d14bd2af9d"/);
  assert.match(page, /const PHASE4A_ARTICLE_CONTENT_HASH = "bd142ffcd3a4f0c9fcfb73842e57b951707ff02b0d226a47f4c9767a5d6942a4"/);
  assert.match(page, /const BROWSER_MAIN_CONTENT_HASH = "fa42f02e5dcf6c0f6b8cebe6a44e84d95b4ab5a01f9ac0f3ab362b127d4c7fbf"/);
  assert.match(page, /const BROWSER_ARTICLE_CONTENT_HASH = "47c19a387a3e3221f71de39df46d2c47dc424d345c4256f44682600096d61591"/);

  for (const hook of [
    'referencePage',
    'paperEdge',
    'towerBeacon',
    'content',
    'breadcrumb',
    'masthead',
    'mastheadPanel',
    'factGrid',
    'statusLedger',
    'bodyGrid',
    'contentPanel',
    'sourceGrid',
    'sourceLink',
    'sideRail',
    'relatedLink',
    'discoveryShell',
    'officialCta',
  ]) {
    assert.match(page, new RegExp(`styles\\.${hook}`), `page should wire the ${hook} hook`);
    assert.match(css, new RegExp(`\\.${hook}\\b`), `stylesheet should define the ${hook} hook`);
  }

  assert.equal((css.match(/tower-beacon-signature\.avif/g) ?? []).length, 1, 'tower URL must be declared exactly once');
  const desktopMediaIndex = css.indexOf('@media (min-width: 1101px)');
  const towerUrlIndex = css.indexOf('tower-beacon-signature.avif');
  assert.ok(desktopMediaIndex >= 0 && towerUrlIndex > desktopMediaIndex, 'tower URL must occur only after the 1101px media boundary');
  assert.match(css, /\.referencePage \.towerBeacon[\s\S]*display:\s*none/);
  assert.doesNotMatch(css, /:global|\/night-transmission\//);
  assert.doesNotMatch(css, /cyan-corridor|magenta-orbit|purple-waveform|night-transmission-hero|night-transmission-skyline|wet-ground|poster-stage/i);
  assert.doesNotMatch(`${page}\n${css}`, /fetch\(|<canvas|WebGLRenderingContext|<video|framer-motion|lottie|three/i);

  for (const selector of css.matchAll(/([^{}]+)\{/g)) {
    const value = selector[1].trim();
    if (value.startsWith('@') || /^(from|to|\d+%)/.test(value)) continue;
    for (const branch of value.split(',')) {
      assert.match(branch.trim(), /^\.referencePage\b/, `selector must be scoped below the selected route: ${branch.trim()}`);
    }
  }
  for (const declaration of css.matchAll(/border-radius:\s*([^;}]*)/g)) {
    assert.equal(declaration[1].replace(/!important/g, '').trim(), '0', 'all reference surfaces must stay square');
  }

  assert.match(css, /focus-visible/);
  assert.match(css, /prefers-reduced-motion:\s*reduce/);
  assert.match(css, /forced-colors:\s*active/);
  assert.match(css, /min-height:\s*44px/);
  assert.match(css, /overflow-wrap:\s*anywhere/);
  assert.match(css, /\.referencePage \.officialCta[\s\S]*color:\s*#050507[\s\S]*background:\s*#f4f1ff/);
  assert.doesNotMatch(css, /color:\s*rgb\(244\s+241\s+255\)[\s\S]{0,120}background(?:-color)?:\s*rgb\(255\s+255\s+255\)/);

  assert.equal(selected.festival_name, "M'era Luna Festival");
  assert.equal(selected.official_url, 'https://meraluna.de/en/');
  assert.deepEqual(selected.source_links.map(({ label, url }) => [label, url]), [
    ['Official festival site', 'https://meraluna.de/en/'],
  ]);
  assert.deepEqual(selected.similar_festival_ids, ['ncn-festival-nocturnal-culture-night', 'wave-gotik-treffen', 'amphi-festival']);
  assert.match(page, /title: polish\?\.metadataTitle \?\? festivalMetadataTitleOverrides\[festival\.slug\] \?\? `\$\{festival\.name\} festival guide`/);
  assert.match(page, /path: `\/festivals\/\$\{festival\.slug\}`/);
  assert.match(page, /Visit official site/);
  assert.match(page, /href=\{festival\.officialSiteUrl\} target="_blank" rel="noreferrer"/);

  const headingLiterals = [
    '>Why this festival matters</h2>',
    '>Verification notes</h2>',
    '>Official sources</h2>',
    '>Genre tags</h2>',
    '>Similar festivals</h2>',
  ];
  let previousHeading = -1;
  for (const heading of headingLiterals) {
    const position = page.indexOf(heading);
    assert.ok(position > previousHeading, `${heading} should retain its heading order`);
    previousHeading = position;
  }
  assert.match(page, /title="Continue exploring RetroAltFest\."/);
  assert.ok(page.indexOf('{usesNightTransmissionPresentation ? <div className={styles.discoveryShell} data-detail-section="discovery-links">{discoveryLinks}</div> : discoveryLinks}') > previousHeading);

  for (const protectedSlug of [
    'absolution-fest',
    'terminus-festival',
    'infest-festival',
    'cold-waves',
    'the-new-colossus-festival',
    'ncn-festival-nocturnal-culture-night',
  ]) {
    assert.doesNotMatch(css, new RegExp(protectedSlug));
  }
});

test('M’era Luna metadata cleanup is route-local and preserves the Phase 4B contract', () => {
  const page = read('src/app/festivals/[slug]/page.tsx');
  const css = read('src/app/festivals/[slug]/FestivalDetail.module.css');
  const layout = read('src/app/layout.tsx');
  const seo = read('src/lib/seo.ts');
  const atlas = JSON.parse(read('src/data/atlas-festivals.json'));
  const selected = atlas.festivals.find((festival) => festival.slug === 'mera-luna-festival');
  const siblings = atlas.festivals.filter((festival) => festival.slug !== 'mera-luna-festival');

  const routeTitle = "M'era Luna Festival guide";
  const renderedTitle = `${routeTitle} | RetroAltFest`;
  const canonicalHref = 'https://retroaltfest.com/festivals/mera-luna-festival';
  const canonicalElement = `<link rel="canonical" href="${canonicalHref}">`;

  assert.equal(selected.festival_name, "M'era Luna Festival");
  assert.equal(routeTitle, "M'era Luna Festival guide");
  assert.equal(renderedTitle, "M'era Luna Festival guide | RetroAltFest");
  assert.equal(canonicalHref, 'https://retroaltfest.com/festivals/mera-luna-festival');
  assert.equal(canonicalElement, '<link rel="canonical" href="https://retroaltfest.com/festivals/mera-luna-festival">');

  assert.match(page, /const festivalMetadataTitleOverrides: Readonly<Record<string, string>> = \{\s*\[FESTIVAL_DETAIL_REFERENCE_SLUG\]: "M'era Luna Festival guide",\s*"a-murder-of-crows-xi-nyc-goth-post-punk-festival": "A Murder of Crows XI NYC Goth & Post-punk Festival guide",\s*"the-new-colossus-festival": "The New Colossus Festival guide",\s*\}/);
  assert.equal((page.match(/festivalMetadataTitleOverrides/g) ?? []).length, 2, 'the centralized three-entry override table should have one declaration and one lookup');
  assert.match(page, /title: polish\?\.metadataTitle \?\? festivalMetadataTitleOverrides\[festival\.slug\] \?\? `\$\{festival\.name\} festival guide`/);
  assert.match(page, /description: polish\?\.metadataDescription \?\? festival\.summary/);
  assert.match(page, /path: `\/festivals\/\$\{festival\.slug\}`/);
  assert.match(page, /type: "article"/);
  assert.match(page, /keywords: festival\.seoKeywords/);

  assert.match(layout, /template: "%s \| RetroAltFest"/);
  assert.match(seo, /openGraph:\s*\{[\s\S]*?title,[\s\S]*?url: canonical,[\s\S]*?type,/);
  assert.match(seo, /twitter:\s*\{[\s\S]*?title,[\s\S]*?description,/);
  assert.match(seo, /alternates:\s*\{\s*canonical,/);
  assert.match(seo, /robots:\s*\{\s*index,\s*follow: index,/);
  assert.equal(routeTitle, "M'era Luna Festival guide", 'Open Graph title inherits the corrected route title');
  assert.equal(routeTitle, "M'era Luna Festival guide", 'Twitter title inherits the corrected route title');

  assert.equal(siblings.length, 14);
  const frozenTitleOverrides = {
    'mera-luna-festival': routeTitle,
    'a-murder-of-crows-xi-nyc-goth-post-punk-festival': 'A Murder of Crows XI NYC Goth & Post-punk Festival guide',
    'the-new-colossus-festival': 'The New Colossus Festival guide',
  };
  assert.equal(Object.keys(frozenTitleOverrides).length, 3, 'only M’era Luna, A Murder of Crows, and New Colossus receive metadata overrides');
  for (const festival of siblings) {
    const frozenTitle = festival.slug === 'absolution-fest'
      ? 'Absolution Fest 2026 — Tampa Goth, Darkwave & Post-Punk Festival'
      : frozenTitleOverrides[festival.slug] ?? `${festival.festival_name} festival guide`;
    assert.notEqual(frozenTitle, routeTitle, `${festival.slug} must not inherit the selected title`);
  }

  assert.equal(createHash('sha256').update(css).digest('hex'), '903b3d9ad627afeec4023f543321cf6a9efbdc9663b26f419b69109a1b831dbb');
  assert.match(page, /const FESTIVAL_DETAIL_REFERENCE_SLUG = "mera-luna-festival"/);
  assert.equal((page.match(/festival\.slug === FESTIVAL_DETAIL_REFERENCE_SLUG/g) ?? []).length, 1);
  assert.match(page, /const BROWSER_MAIN_CONTENT_HASH = "fa42f02e5dcf6c0f6b8cebe6a44e84d95b4ab5a01f9ac0f3ab362b127d4c7fbf"/);
  assert.match(page, /const BROWSER_ARTICLE_CONTENT_HASH = "47c19a387a3e3221f71de39df46d2c47dc424d345c4256f44682600096d61591"/);
  assert.match(page, /Visit official site/);
  assert.match(page, /href=\{festival\.officialSiteUrl\} target="_blank" rel="noreferrer"/);
  assert.match(css, /\.referencePage \.officialCta[\s\S]*min-height:\s*44px[\s\S]*color:\s*#050507[\s\S]*background:\s*#f4f1ff/);
});

test('Night Transmission Phase 4I activates New Colossus through the immutable collection and freezes route contracts', () => {
  const pagePath = 'src/app/festivals/[slug]/page.tsx';
  const cssPath = 'src/app/festivals/[slug]/FestivalDetail.module.css';
  const atlasPath = 'src/data/atlas-festivals.json';
  const dtoPath = 'src/lib/public-festivals.ts';
  const page = read(pagePath);
  const css = read(cssPath);
  const atlasSource = read(atlasPath);
  const dtoSource = read(dtoPath);
  const atlas = JSON.parse(atlasSource);
  const bySlug = new Map(atlas.festivals.map((festival) => [festival.slug, festival]));

  const approvedSlugs = [
    'mera-luna-festival',
    'darker-waves',
    'ncn-festival-nocturnal-culture-night',
    'levitation',
    'a-murder-of-crows-xi-nyc-goth-post-punk-festival',
    'the-new-colossus-festival',
  ];
  const contentHashBaselines = {
    'mera-luna-festival': [
      'fa42f02e5dcf6c0f6b8cebe6a44e84d95b4ab5a01f9ac0f3ab362b127d4c7fbf',
      '47c19a387a3e3221f71de39df46d2c47dc424d345c4256f44682600096d61591',
    ],
    'darker-waves': [
      '1ef6ddef0cdf9efd588e13831746c813368b76a9639bf461133761b2023833da',
      '4ea31fe68abe7e6b030edd38488afaefacc38a803345c63a8d98203d958f06fa',
    ],
    'ncn-festival-nocturnal-culture-night': [
      'e2b75040c7f83ca17d9b68f6de6d5bfde05e3188a07c2d5fb1c99bcd9d745ccd',
      'b202dcdb95bb0d54ef0ebc3e03a5f786691bfbe8e9e64f7903e2d1bc074c332a',
    ],
    'levitation': [
      'f3d34632a1815a30d3955f3ce37b4c8bd34ef3beef61d0f282d33f065cf752f8',
      '7796cba18445639d350ce9df0eb220a4c80cfbcf4688faac7ceebc8ab7341caf',
    ],
    'a-murder-of-crows-xi-nyc-goth-post-punk-festival': [
      'c56d562c9717e0d3fcd6a7e38f4230dd8380ec30f4f88424b2614dce1dd76aca',
      '71746277bd2174ff1f0a898ae95906b7ac43628f887ceb54bb3a4be75d3f2d17',
    ],
    'the-new-colossus-festival': [
      '6ff0f04895aee5a800c2a2cd06e3ac7db2b5752e1b6fd2b3aa0b533684c22bcf',
      '1c8d69a746187d06667c933039057e5cc8160f8b727083e33b18216c4a9dbf43',
    ],
  };

  assert.deepEqual(Object.keys(contentHashBaselines), approvedSlugs, 'browser QA baselines should cover exactly the activated routes');
  assert.match(page, /const NIGHT_TRANSMISSION_DETAIL_SLUGS: readonly string\[\] = Object\.freeze\(\[\s*FESTIVAL_DETAIL_REFERENCE_SLUG,\s*"darker-waves",\s*"ncn-festival-nocturnal-culture-night",\s*"levitation",\s*"a-murder-of-crows-xi-nyc-goth-post-punk-festival",\s*"the-new-colossus-festival",\s*\]\)/);
  assert.equal((page.match(/NIGHT_TRANSMISSION_DETAIL_SLUGS/g) ?? []).length, 2, 'one declaration and one centralized lookup are allowed');
  assert.equal((page.match(/NIGHT_TRANSMISSION_DETAIL_SLUGS\.includes\(festival\.slug\)/g) ?? []).length, 1);
  assert.doesNotMatch(page, /Object\.freeze\(new Set|\.add\(|\.delete\(|\.clear\(/);
  assert.equal((page.match(/"mera-luna-festival"/g) ?? []).length, 1);
  assert.equal((page.match(/"darker-waves"/g) ?? []).length, 2, 'one activation member and one Phase 5A.1 guide mapping key are allowed');
  assert.equal((page.match(/"ncn-festival-nocturnal-culture-night"/g) ?? []).length, 1);
  assert.equal((page.match(/"levitation"/g) ?? []).length, 1);
  assert.equal((page.match(/"a-murder-of-crows-xi-nyc-goth-post-punk-festival"/g) ?? []).length, 3, 'one activation member, one centralized metadata override key, and one Phase 5A.1 guide mapping key are allowed');
  assert.equal((page.match(/"the-new-colossus-festival"/g) ?? []).length, 2, 'one activation member and one centralized metadata override key are allowed');
  assert.equal((page.match(/festival\.slug === FESTIVAL_DETAIL_REFERENCE_SLUG/g) ?? []).length, 1, 'M’era Luna should keep one separate identity comparison');
  assert.match(page, /const isMeraLunaReferenceRoute = festival\.slug === FESTIVAL_DETAIL_REFERENCE_SLUG/);
  assert.match(page, /const usesNightTransmissionPresentation = NIGHT_TRANSMISSION_DETAIL_SLUGS\.includes\(festival\.slug\)/);
  assert.doesNotMatch(page, /\bisReferenceRoute\b/);

  assert.match(page, /data-festival-detail-reference=\{usesNightTransmissionPresentation \? "night-transmission" : undefined\}/);
  assert.match(page, /data-phase4a-main-contract=\{isMeraLunaReferenceRoute \? PHASE4A_MAIN_CONTENT_HASH : undefined\}/);
  assert.match(page, /data-browser-main-contract=\{isMeraLunaReferenceRoute \? BROWSER_MAIN_CONTENT_HASH : undefined\}/);
  assert.match(page, /data-phase4a-article-contract=\{isMeraLunaReferenceRoute \? PHASE4A_ARTICLE_CONTENT_HASH : undefined\}/);
  assert.match(page, /data-browser-article-contract=\{isMeraLunaReferenceRoute \? BROWSER_ARTICLE_CONTENT_HASH : undefined\}/);
  assert.match(page, /\{usesNightTransmissionPresentation \? \([\s\S]*data-detail-decoration="tower"/);
  assert.match(page, /data-detail-action=\{usesNightTransmissionPresentation \? "official-site" : undefined\}/);
  assert.match(page, /\{usesNightTransmissionPresentation \? <div className=\{styles\.discoveryShell\} data-detail-section="discovery-links">\{discoveryLinks\}<\/div> : discoveryLinks\}/);

  const activationBlock = page.match(/const NIGHT_TRANSMISSION_DETAIL_SLUGS[\s\S]*?\]\);/)?.[0] ?? '';
  assert.deepEqual([...activationBlock.matchAll(/"([a-z0-9-]+)"/g)].map((match) => match[1]), approvedSlugs.slice(1));
  for (const excludedSlug of [
    'absolution-fest',
    'terminus-festival',
    'infest-festival',
    'cold-waves',
    'wave-gotik-treffen',
    'castle-party-festival',
    'amphi-festival',
    'just-like-heaven',
    'mutek-montreal',
  ]) {
    assert.doesNotMatch(activationBlock, new RegExp(excludedSlug));
  }

  assert.match(page, /const festivalMetadataTitleOverrides: Readonly<Record<string, string>> = \{\s*\[FESTIVAL_DETAIL_REFERENCE_SLUG\]: "M'era Luna Festival guide",\s*"a-murder-of-crows-xi-nyc-goth-post-punk-festival": "A Murder of Crows XI NYC Goth & Post-punk Festival guide",\s*"the-new-colossus-festival": "The New Colossus Festival guide",\s*\}/);
  assert.match(page, /title: polish\?\.metadataTitle \?\? festivalMetadataTitleOverrides\[festival\.slug\] \?\? `\$\{festival\.name\} festival guide`/);
  assert.match(page, /path: `\/festivals\/\$\{festival\.slug\}`/);

  const darker = bySlug.get('darker-waves');
  assert.ok(darker);
  assert.equal(darker.date_text, 'November 14, 2026');
  assert.equal(darker.venue_name, 'Huntington Beach City Beach');
  assert.equal(darker.official_url, 'https://www.darkerwavesfest.com/');
  assert.equal(darker.verification_status, 'confirmed_upcoming');
  assert.deepEqual(darker.source_urls, ['https://www.darkerwavesfest.com/', 'https://www.darkerwavesfest.com/lineup']);
  assert.deepEqual(darker.similar_festival_ids, ['just-like-heaven', 'cold-waves', 'terminus-festival']);

  const ncn = bySlug.get('ncn-festival-nocturnal-culture-night');
  assert.ok(ncn);
  assert.equal(ncn.date_text, '04.09. - 06.09.2026 Festival / 03.09.2026 Warm Up Party');
  assert.equal(ncn.venue_name, 'Kulturpark Deutzen bei Leipzig');
  assert.equal(ncn.official_url, 'https://www.ncn-festival.de');
  assert.equal(ncn.verification_status, 'confirmed_upcoming');
  assert.deepEqual(ncn.source_urls, ['https://www.ncn-festival.de']);
  assert.deepEqual(ncn.similar_festival_ids, ['wave-gotik-treffen', 'mera-luna-festival', 'amphi-festival']);

  const levitation = bySlug.get('levitation');
  assert.ok(levitation);
  assert.equal(levitation.festival_name, 'LEVITATION');
  assert.equal(levitation.date_text, 'September 10-13, 2026');
  assert.equal(levitation.venue_name, 'Austin multi-venue event; official 2026 page does not make this a single-pin record');
  assert.equal(levitation.city, 'Austin');
  assert.equal(levitation.state_region, 'Texas');
  assert.equal(levitation.country, 'United States');
  assert.equal(levitation.official_url, 'https://levitation.fm/pages/levitation-2026');
  assert.equal(levitation.verification_status, 'confirmed_upcoming');
  assert.deepEqual(levitation.source_urls, ['https://levitation.fm/pages/levitation-2026']);
  assert.deepEqual(levitation.similar_festival_ids, ['the-new-colossus-festival', 'mutek-montreal', 'darker-waves']);
  assert.equal(`${levitation.festival_name} festival guide`, 'LEVITATION festival guide');
  assert.equal(`https://retroaltfest.com/festivals/${levitation.slug}`, 'https://retroaltfest.com/festivals/levitation');

  const murderOfCrows = bySlug.get('a-murder-of-crows-xi-nyc-goth-post-punk-festival');
  assert.ok(murderOfCrows);
  assert.equal(murderOfCrows.festival_name, 'A Murder of Crows XI NYC Goth & Post-punk Festival');
  assert.equal(murderOfCrows.date_text, 'Opening Party: September 3, 2026; Night One: September 4, 2026; Night Two: September 5, 2026');
  assert.equal(murderOfCrows.venue_name, 'TV Eye; Bowery Ballroom');
  assert.equal(murderOfCrows.city, 'New York');
  assert.equal(murderOfCrows.state_region, 'New York');
  assert.equal(murderOfCrows.country, 'United States');
  assert.equal(murderOfCrows.official_url, 'https://www.redpartynyc.com');
  assert.equal(murderOfCrows.verification_status, 'confirmed_upcoming');
  assert.deepEqual(murderOfCrows.source_urls, ['https://www.redpartynyc.com']);
  assert.deepEqual(murderOfCrows.similar_festival_ids, ['wave-gotik-treffen', 'ncn-festival-nocturnal-culture-night', 'castle-party-festival']);
  assert.equal(`${murderOfCrows.festival_name} festival guide`, 'A Murder of Crows XI NYC Goth & Post-punk Festival festival guide');
  assert.equal(`https://retroaltfest.com/festivals/${murderOfCrows.slug}`, 'https://retroaltfest.com/festivals/a-murder-of-crows-xi-nyc-goth-post-punk-festival');

  const newColossus = bySlug.get('the-new-colossus-festival');
  assert.ok(newColossus);
  assert.equal(newColossus.festival_name, 'The New Colossus Festival');
  assert.equal(newColossus.date_text, 'March 9-14, 2027');
  assert.equal(newColossus.venue_name, 'Independent music venues on the Lower East Side');
  assert.equal(newColossus.city, 'New York City');
  assert.equal(newColossus.state_region, 'New York');
  assert.equal(newColossus.country, 'United States');
  assert.equal(newColossus.official_url, 'https://www.newcolossusfestival.com/');
  assert.equal(newColossus.verification_status, 'confirmed_upcoming');
  assert.deepEqual(newColossus.source_urls, ['https://www.newcolossusfestival.com/']);
  assert.deepEqual(newColossus.similar_festival_ids, ['levitation', 'mutek-montreal', 'just-like-heaven']);
  assert.equal(`${newColossus.festival_name} festival guide`, 'The New Colossus Festival festival guide');
  assert.equal(`https://retroaltfest.com/festivals/${newColossus.slug}`, 'https://retroaltfest.com/festivals/the-new-colossus-festival');

  assert.match(page, /href=\{festival\.officialSiteUrl\} target="_blank" rel="noreferrer"/);
  assert.match(page, /Visit official site/);
  assert.match(css, /\.referencePage \.officialCta[\s\S]*min-height:\s*44px[\s\S]*color:\s*#050507[\s\S]*background:\s*#f4f1ff/);
  assert.doesNotMatch(css, /color:\s*rgb\(244\s+241\s+255\)[\s\S]{0,120}background(?:-color)?:\s*rgb\(255\s+255\s+255\)/);
  assert.equal((css.match(/tower-beacon-signature\.avif/g) ?? []).length, 1);
  assert.ok(css.indexOf('tower-beacon-signature.avif') > css.indexOf('@media (min-width: 1101px)'));

  assert.equal(createHash('sha256').update(css).digest('hex'), '903b3d9ad627afeec4023f543321cf6a9efbdc9663b26f419b69109a1b831dbb');
  assert.equal(createHash('sha256').update(atlasSource).digest('hex'), '8e148cb046ff61f9cdcba8ed415790bd2f005ed66ae276abe5e3c46d31599e78');
  assert.equal(createHash('sha256').update(dtoSource).digest('hex'), 'e3950b813213b93bbd700d354b45797a2cf3540637e1417c14f6e577747fccf8');
  assert.equal(createHash('sha256').update(read('src/app/sitemap.ts')).digest('hex'), '9e41355aa9072e9b5558f645037f16d7beda46b003fff2e9587b921b1977ace2');
  assert.equal(createHash('sha256').update(read('package.json')).digest('hex'), 'f2949d272e9cf34ed95bd904ab9b7579ab95b788ccd75e001ab971eb66a5c80d');
  assert.equal(createHash('sha256').update(read('package-lock.json')).digest('hex'), '49c3b1f37e957b7961825b121bbddb26d8e674c7e2efcb2ab29249c2891d4e56');
  assert.doesNotMatch(`${page}\n${css}`, /"use client"|useState|useEffect|useMemo|fetch\(|<canvas|WebGLRenderingContext|<video|framer-motion|lottie|three|\/prototypes\//i);
  assert.doesNotMatch(page, /geocoding_source|geocoding_query|geocoding_confidence|map_phase0_category|source_status|date_pending|needs_review|core_anchor|watchlist|Phase 0|map-readiness|latitude|longitude/i);
});

test('A Murder of Crows metadata title cleanup stays route-local and preserves Phase 4G', () => {
  const page = read('src/app/festivals/[slug]/page.tsx');
  const css = read('src/app/festivals/[slug]/FestivalDetail.module.css');
  const layout = read('src/app/layout.tsx');
  const seo = read('src/lib/seo.ts');
  const atlas = JSON.parse(read('src/data/atlas-festivals.json'));
  const targetSlug = 'a-murder-of-crows-xi-nyc-goth-post-punk-festival';
  const target = atlas.festivals.find((festival) => festival.slug === targetSlug);

  const routeTitle = 'A Murder of Crows XI NYC Goth & Post-punk Festival guide';
  const renderedTitle = `${routeTitle} | RetroAltFest`;
  const canonicalHref = `https://retroaltfest.com/festivals/${targetSlug}`;
  const canonicalElement = `<link rel="canonical" href="${canonicalHref}">`;

  assert.ok(target);
  assert.equal(target.festival_name, 'A Murder of Crows XI NYC Goth & Post-punk Festival');
  assert.equal(`${target.festival_name} festival guide`, 'A Murder of Crows XI NYC Goth & Post-punk Festival festival guide', 'the unchanged generic fallback explains the current duplication');
  assert.equal(routeTitle, 'A Murder of Crows XI NYC Goth & Post-punk Festival guide');
  assert.equal(renderedTitle, 'A Murder of Crows XI NYC Goth & Post-punk Festival guide | RetroAltFest');
  assert.equal(canonicalHref, 'https://retroaltfest.com/festivals/a-murder-of-crows-xi-nyc-goth-post-punk-festival');
  assert.equal(canonicalElement, '<link rel="canonical" href="https://retroaltfest.com/festivals/a-murder-of-crows-xi-nyc-goth-post-punk-festival">');

  assert.match(page, /const festivalMetadataTitleOverrides: Readonly<Record<string, string>> = \{\s*\[FESTIVAL_DETAIL_REFERENCE_SLUG\]: "M'era Luna Festival guide",\s*"a-murder-of-crows-xi-nyc-goth-post-punk-festival": "A Murder of Crows XI NYC Goth & Post-punk Festival guide",\s*"the-new-colossus-festival": "The New Colossus Festival guide",\s*\}/);
  assert.equal((page.match(/festivalMetadataTitleOverrides/g) ?? []).length, 2, 'one centralized map declaration and one centralized lookup are allowed');
  assert.equal((page.match(/"a-murder-of-crows-xi-nyc-goth-post-punk-festival"/g) ?? []).length, 3, 'one activation member, one metadata override key, and one Phase 5A.1 guide mapping key are allowed');
  assert.match(page, /title: polish\?\.metadataTitle \?\? festivalMetadataTitleOverrides\[festival\.slug\] \?\? `\$\{festival\.name\} festival guide`/);
  assert.match(page, /description: polish\?\.metadataDescription \?\? festival\.summary/);
  assert.match(page, /path: `\/festivals\/\$\{festival\.slug\}`/);
  assert.match(page, /type: "article"/);
  assert.match(page, /keywords: festival\.seoKeywords/);

  assert.match(layout, /template: "%s \| RetroAltFest"/);
  assert.match(seo, /alternates:\s*\{\s*canonical,/);
  assert.match(seo, /openGraph:\s*\{[\s\S]*?title,[\s\S]*?description,[\s\S]*?url: canonical,[\s\S]*?type,/);
  assert.match(seo, /twitter:\s*\{[\s\S]*?title,[\s\S]*?description,/);
  assert.match(seo, /robots:\s*\{\s*index,\s*follow: index,/);
  assert.equal(routeTitle, 'A Murder of Crows XI NYC Goth & Post-punk Festival guide', 'Open Graph title inherits the route-level title');
  assert.equal(routeTitle, 'A Murder of Crows XI NYC Goth & Post-punk Festival guide', 'Twitter title inherits the route-level title');

  const titleOverrides = {
    'mera-luna-festival': "M'era Luna Festival guide",
    [targetSlug]: routeTitle,
    'the-new-colossus-festival': 'The New Colossus Festival guide',
  };
  assert.deepEqual(Object.keys(titleOverrides), ['mera-luna-festival', targetSlug, 'the-new-colossus-festival']);
  for (const festival of atlas.festivals) {
    const resolvedTitle = festival.slug === 'absolution-fest'
      ? 'Absolution Fest 2026 — Tampa Goth, Darkwave & Post-Punk Festival'
      : titleOverrides[festival.slug] ?? `${festival.festival_name} festival guide`;
    if (festival.slug === 'mera-luna-festival') assert.equal(resolvedTitle, "M'era Luna Festival guide");
    else if (festival.slug === targetSlug) assert.equal(resolvedTitle, routeTitle);
    else if (festival.slug === 'the-new-colossus-festival') assert.equal(resolvedTitle, 'The New Colossus Festival guide');
    else if (festival.slug === 'absolution-fest') assert.equal(resolvedTitle, 'Absolution Fest 2026 — Tampa Goth, Darkwave & Post-Punk Festival');
    else assert.equal(resolvedTitle, `${festival.festival_name} festival guide`, `${festival.slug} keeps the generic fallback title`);
  }

  const activationBlock = page.match(/const NIGHT_TRANSMISSION_DETAIL_SLUGS[\s\S]*?\]\);/)?.[0] ?? '';
  assert.deepEqual([...activationBlock.matchAll(/"([a-z0-9-]+)"/g)].map((match) => match[1]), [
    'darker-waves',
    'ncn-festival-nocturnal-culture-night',
    'levitation',
    targetSlug,
    'the-new-colossus-festival',
  ]);
  assert.equal((page.match(/NIGHT_TRANSMISSION_DETAIL_SLUGS/g) ?? []).length, 2);
  assert.equal((page.match(/NIGHT_TRANSMISSION_DETAIL_SLUGS\.includes\(festival\.slug\)/g) ?? []).length, 1);
  assert.doesNotMatch(page, /Object\.freeze\(new Set|\.add\(|\.delete\(|\.clear\(/);

  const normalizedPage = normalizePhase5A1GuideDiscoveryPilot(page)
    .replace(
      '  "the-new-colossus-festival",\n',
      '',
    )
    .replace(
      '  "a-murder-of-crows-xi-nyc-goth-post-punk-festival": "A Murder of Crows XI NYC Goth & Post-punk Festival guide",\n',
      '',
    )
    .replace(
      '  "the-new-colossus-festival": "The New Colossus Festival guide",\n',
      '',
    );
  assert.equal(createHash('sha256').update(normalizedPage).digest('hex'), 'bd1c83bd5779f9029fff6eda7089fabbb9d67ec72aad8ce97c886d7518cf3c99', 'the route source may differ only by centralized route-title overrides and the approved New Colossus activation line');
  assert.equal(createHash('sha256').update(css).digest('hex'), '903b3d9ad627afeec4023f543321cf6a9efbdc9663b26f419b69109a1b831dbb');

  assert.equal(target.date_text, 'Opening Party: September 3, 2026; Night One: September 4, 2026; Night Two: September 5, 2026');
  assert.equal(target.venue_name, 'TV Eye; Bowery Ballroom');
  assert.equal(target.official_url, 'https://www.redpartynyc.com');
  assert.deepEqual(target.source_urls, ['https://www.redpartynyc.com']);
  assert.deepEqual(target.similar_festival_ids, ['wave-gotik-treffen', 'ncn-festival-nocturnal-culture-night', 'castle-party-festival']);
  assert.match(page, /href=\{festival\.officialSiteUrl\} target="_blank" rel="noreferrer"/);
  assert.match(page, /Visit official site/);
  assert.match(css, /\.referencePage \.officialCta[\s\S]*min-height:\s*44px[\s\S]*color:\s*#050507[\s\S]*background:\s*#f4f1ff/);
});

test('Wave-Gotik-Treffen 2027 source correction stays multi-venue, route-safe, and isolated', () => {
  const atlasSource = read('src/data/atlas-festivals.json');
  const atlas = JSON.parse(atlasSource);
  const targetSlug = 'wave-gotik-treffen';
  const target = atlas.festivals.find((festival) => festival.slug === targetSlug);
  const nonTarget = atlas.festivals.filter((festival) => festival.slug !== targetSlug);
  const allowedFields = new Set(['date_text', 'start_date', 'end_date', 'verification_status']);
  const preservedTarget = Object.fromEntries(Object.entries(target).filter(([field]) => !allowedFields.has(field)));
  const page = read('src/app/festivals/[slug]/page.tsx');
  const css = read('src/app/festivals/[slug]/FestivalDetail.module.css');
  const layout = read('src/app/layout.tsx');
  const seo = read('src/lib/seo.ts');
  const sitemap = read('src/app/sitemap.ts');
  const dto = read('src/lib/public-festivals.ts');
  const editionFacingFields = JSON.stringify({
    date_text: target.date_text,
    start_date: target.start_date,
    end_date: target.end_date,
    verification_status: target.verification_status,
    map_notes: target.map_notes,
    data_quality_notes: target.data_quality_notes,
    atlas_summary: target.atlas_summary,
    why_it_matters: target.why_it_matters,
    tags: target.tags,
  });

  assert.ok(target, 'Wave-Gotik-Treffen should remain an active atlas record');
  assert.equal(atlas.festivals.length, 15);
  assert.equal(new Set(atlas.festivals.map((festival) => festival.slug)).size, 15);
  assert.equal(atlas.festivals.filter((festival) => festival.slug === targetSlug).length, 1);

  assert.equal(target.date_text, 'May 14–17, 2027');
  assert.equal(target.start_date, '2027-05-14');
  assert.equal(target.end_date, '2027-05-17');
  assert.equal(target.verification_status, 'confirmed_upcoming');
  assert.doesNotMatch(editionFacingFields, /2026|confirmed_current|\bcurrent\b/i);

  assert.equal(target.city, 'Leipzig');
  assert.equal(target.state_region, 'Saxony');
  assert.equal(target.country, 'Germany');
  assert.equal(target.venue_name, 'Multiple venues across Leipzig');
  assert.match(target.map_notes, /many venues across Leipzig/i);
  assert.equal(target.map_display_category, 'multi_venue_parent');
  assert.equal(target.venue_address, null);
  assert.equal(target.latitude, null);
  assert.equal(target.longitude, null);
  assert.equal(target.geocoding_source, null);
  assert.equal(target.geocoding_query, null);
  assert.equal(target.geocoding_confidence, 'not_geocoded');
  assert.equal(target.source_confidence, 'high');
  assert.equal(target.festival_type, 'music_festival');
  assert.deepEqual(target.source_urls, [
    'https://www.wave-gotik-treffen.de/english/',
    'https://www.wave-gotik-treffen.de/english/info/info.php',
  ]);

  assert.equal(createHash('sha256').update(JSON.stringify(preservedTarget)).digest('hex'), '1bdd1325ffa253eab1c593de9e8bd8828444094eccde29621fdc70cf6f02ec28');
  assert.equal(createHash('sha256').update(JSON.stringify(nonTarget)).digest('hex'), 'd484d9c7fcbeff239e349c710dc63634452ba37f6934aed3a92192ba4530c5ee');
  assert.equal(atlas.festivals.every((festival) => festival.latitude === null && festival.longitude === null), true);
  assert.equal(atlas.festivals.every((festival) => festival.geocoding_source === null && festival.geocoding_query === null), true);
  assert.equal(createHash('sha256').update(JSON.stringify(atlas.festivals.map((festival) => [festival.slug, festival.geocoding_confidence]))).digest('hex'), 'a65cfe2ff09e6d46d9d53d609b3bc2e9a314befebf2203c662ae04429a135103');

  const routeTitle = `${target.festival_name} festival guide`;
  const renderedTitle = `${routeTitle} | RetroAltFest`;
  const canonicalHref = `https://retroaltfest.com/festivals/${target.slug}`;
  const canonicalElement = `<link rel="canonical" href="${canonicalHref}">`;
  assert.equal(routeTitle, 'Wave-Gotik-Treffen festival guide');
  assert.equal(renderedTitle, 'Wave-Gotik-Treffen festival guide | RetroAltFest');
  assert.equal(canonicalHref, 'https://retroaltfest.com/festivals/wave-gotik-treffen');
  assert.equal(canonicalElement, '<link rel="canonical" href="https://retroaltfest.com/festivals/wave-gotik-treffen">');
  assert.match(page, /title: polish\?\.metadataTitle \?\? festivalMetadataTitleOverrides\[festival\.slug\] \?\? `\$\{festival\.name\} festival guide`/);
  assert.match(page, /path: `\/festivals\/\$\{festival\.slug\}`/);
  assert.match(layout, /template: "%s \| RetroAltFest"/);
  assert.match(seo, /alternates:\s*\{\s*canonical,/);
  assert.match(sitemap, /featuredFestivals\.map\(\(festival\) =>/);
  assert.match(sitemap, /festivalSlug\(festival\)/);

  const activationBlock = page.match(/const NIGHT_TRANSMISSION_DETAIL_SLUGS[\s\S]*?\]\);/)?.[0] ?? '';
  assert.deepEqual([...activationBlock.matchAll(/"([a-z0-9-]+)"/g)].map((match) => match[1]), [
    'darker-waves',
    'ncn-festival-nocturnal-culture-night',
    'levitation',
    'a-murder-of-crows-xi-nyc-goth-post-punk-festival',
    'the-new-colossus-festival',
  ]);
  assert.doesNotMatch(activationBlock, /wave-gotik-treffen/);

  assert.equal(createHash('sha256').update(normalizePhase5A1GuideDiscoveryPilot(page)).digest('hex'), 'b136d810bf2a236186672004dfb89e5b71be06018b07d8249ca29a559db14798');
  assert.equal(createHash('sha256').update(css).digest('hex'), '903b3d9ad627afeec4023f543321cf6a9efbdc9663b26f419b69109a1b831dbb');
  assert.equal(createHash('sha256').update(sitemap).digest('hex'), '9e41355aa9072e9b5558f645037f16d7beda46b003fff2e9587b921b1977ace2');
  assert.equal(createHash('sha256').update(layout).digest('hex'), 'e0d2ecdc24d76e0b2a9d1328c532b0b63f6223d28b35498b8da7ba3aab51457f');
  assert.equal(createHash('sha256').update(seo).digest('hex'), '5b7a4c9e26dede625ef02c39fc9e96fe779f128ec57bb6db283790d71a9f2b31');
  assert.equal(createHash('sha256').update(dto).digest('hex'), 'e3950b813213b93bbd700d354b45797a2cf3540637e1417c14f6e577747fccf8');
});

test('Castle Party completed-edition correction stays historical, source-safe, and isolated', () => {
  const atlasSource = read('src/data/atlas-festivals.json');
  const atlas = JSON.parse(atlasSource);
  const targetSlug = 'castle-party-festival';
  const target = atlas.festivals.find((festival) => festival.slug === targetSlug);
  const nonTarget = atlas.festivals.filter((festival) => festival.slug !== targetSlug);
  const allowedFields = new Set(['verification_status', 'follow_up_needed', 'data_quality_notes']);
  const preservedTarget = Object.fromEntries(Object.entries(target).filter(([field]) => !allowedFields.has(field)));
  const page = read('src/app/festivals/[slug]/page.tsx');
  const css = read('src/app/festivals/[slug]/FestivalDetail.module.css');
  const layout = read('src/app/layout.tsx');
  const seo = read('src/lib/seo.ts');
  const sitemap = read('src/app/sitemap.ts');
  const dto = read('src/lib/public-festivals.ts');
  const editionFacingFields = JSON.stringify({
    date_text: target.date_text,
    start_date: target.start_date,
    end_date: target.end_date,
    verification_status: target.verification_status,
    data_quality_notes: target.data_quality_notes,
    atlas_summary: target.atlas_summary,
    why_it_matters: target.why_it_matters,
  });

  assert.ok(target, 'Castle Party should remain an active atlas record');
  assert.equal(atlas.festivals.length, 15);
  assert.equal(new Set(atlas.festivals.map((festival) => festival.slug)).size, 15);
  assert.equal(atlas.festivals.filter((festival) => festival.slug === targetSlug).length, 1);

  assert.equal(target.verification_status, 'historical_reference');
  assert.match(dto, /historical_reference: "Historical \/ reference"/);
  assert.equal(target.start_date, '2026-07-16');
  assert.equal(target.end_date, '2026-07-19');
  assert.equal(target.date_text, '16 - 19 July 2026');
  assert.equal(target.venue_name, 'Bolków Castle');
  assert.equal(target.city, 'Bolków');
  assert.equal(target.state_region, 'Lower Silesian Voivodeship');
  assert.equal(target.country, 'Poland');
  assert.match(target.data_quality_notes, /July 16–19, 2026 edition is complete/i);
  assert.match(target.data_quality_notes, /no later edition is currently claimed from the organizer-controlled sources checked/i);
  assert.equal(target.follow_up_needed, true);
  assert.doesNotMatch(editionFacingFields, /confirmed_upcoming|confirmed current|currently underway|future 2026 edition/i);
  assert.doesNotMatch(editionFacingFields, /will not return|permanently ended|final edition|last edition/i);
  assert.doesNotMatch(editionFacingFields, /2027/i);

  assert.equal(target.venue_address, null);
  assert.equal(target.latitude, null);
  assert.equal(target.longitude, null);
  assert.equal(target.geocoding_source, null);
  assert.equal(target.geocoding_query, null);
  assert.equal(target.geocoding_confidence, 'not_geocoded');
  assert.equal(target.map_display_category, 'single_venue');
  assert.equal(target.source_confidence, 'high');
  assert.equal(target.festival_type, 'music_festival');
  assert.deepEqual(target.source_urls, ['https://www.castleparty.com', 'https://castleparty.com']);
  assert.deepEqual(target.source_links, [
    { label: 'Official festival site', url: 'https://www.castleparty.com', type: 'official_site' },
    { label: 'Official info page', url: 'https://castleparty.com', type: 'official_source' },
  ]);
  assert.deepEqual(target.genres, ['goth', 'dark independent', 'industrial', 'darkwave', 'post-punk', 'dark alternative']);
  assert.deepEqual(target.categories, ['darkwave', 'goth', 'industrial', 'post-punk', 'alternative']);
  assert.deepEqual(target.similar_festival_ids, ['wave-gotik-treffen', 'ncn-festival-nocturnal-culture-night', 'amphi-festival']);

  assert.equal(createHash('sha256').update(JSON.stringify(preservedTarget)).digest('hex'), 'b7e094157e844533696677b686458b320664427fe3d3485da8e27620682cfa05');
  assert.equal(createHash('sha256').update(JSON.stringify(nonTarget)).digest('hex'), '74ecbae4f2e9ecf3ff1be3a43ea18af66f4dd11e18813e72ba82debdefc85e1b');
  assert.equal(atlas.festivals.every((festival) => festival.latitude === null && festival.longitude === null), true);
  assert.equal(atlas.festivals.every((festival) => festival.geocoding_source === null && festival.geocoding_query === null), true);
  assert.equal(createHash('sha256').update(JSON.stringify(atlas.festivals.map((festival) => [festival.slug, festival.geocoding_confidence]))).digest('hex'), 'a65cfe2ff09e6d46d9d53d609b3bc2e9a314befebf2203c662ae04429a135103');

  const routeTitle = `${target.festival_name} festival guide`;
  const renderedTitle = `${routeTitle} | RetroAltFest`;
  const canonicalHref = `https://retroaltfest.com/festivals/${target.slug}`;
  const canonicalElement = `<link rel="canonical" href="${canonicalHref}">`;
  assert.equal(routeTitle, 'Castle Party Festival festival guide');
  assert.equal(renderedTitle, 'Castle Party Festival festival guide | RetroAltFest');
  assert.equal(canonicalHref, 'https://retroaltfest.com/festivals/castle-party-festival');
  assert.equal(canonicalElement, '<link rel="canonical" href="https://retroaltfest.com/festivals/castle-party-festival">');
  assert.match(page, /title: polish\?\.metadataTitle \?\? festivalMetadataTitleOverrides\[festival\.slug\] \?\? `\$\{festival\.name\} festival guide`/);
  assert.match(page, /path: `\/festivals\/\$\{festival\.slug\}`/);
  assert.match(layout, /template: "%s \| RetroAltFest"/);
  assert.match(seo, /alternates:\s*\{\s*canonical,/);
  assert.match(sitemap, /featuredFestivals\.map\(\(festival\) =>/);
  assert.match(sitemap, /festivalSlug\(festival\)/);

  const referenceSlug = page.match(/const FESTIVAL_DETAIL_REFERENCE_SLUG = "([a-z0-9-]+)"/)?.[1] ?? '';
  const activationBlock = page.match(/const NIGHT_TRANSMISSION_DETAIL_SLUGS[\s\S]*?\]\);/)?.[0] ?? '';
  const activatedSlugs = [referenceSlug, ...[...activationBlock.matchAll(/"([a-z0-9-]+)"/g)].map((match) => match[1])];
  assert.deepEqual(activatedSlugs, [
    'mera-luna-festival',
    'darker-waves',
    'ncn-festival-nocturnal-culture-night',
    'levitation',
    'a-murder-of-crows-xi-nyc-goth-post-punk-festival',
    'the-new-colossus-festival',
  ]);
  assert.equal(activatedSlugs.includes(targetSlug), false);

  assert.equal(createHash('sha256').update(normalizePhase5A1GuideDiscoveryPilot(page)).digest('hex'), 'b136d810bf2a236186672004dfb89e5b71be06018b07d8249ca29a559db14798');
  assert.equal(createHash('sha256').update(css).digest('hex'), '903b3d9ad627afeec4023f543321cf6a9efbdc9663b26f419b69109a1b831dbb');
  assert.equal(createHash('sha256').update(sitemap).digest('hex'), '9e41355aa9072e9b5558f645037f16d7beda46b003fff2e9587b921b1977ace2');
  assert.equal(createHash('sha256').update(layout).digest('hex'), 'e0d2ecdc24d76e0b2a9d1328c532b0b63f6223d28b35498b8da7ba3aab51457f');
  assert.equal(createHash('sha256').update(seo).digest('hex'), '5b7a4c9e26dede625ef02c39fc9e96fe779f128ec57bb6db283790d71a9f2b31');
  assert.equal(createHash('sha256').update(dto).digest('hex'), 'e3950b813213b93bbd700d354b45797a2cf3540637e1417c14f6e577747fccf8');
});

test('New Colossus metadata title cleanup stays route-local and preserves Phase 4I', () => {
  const page = read('src/app/festivals/[slug]/page.tsx');
  const css = read('src/app/festivals/[slug]/FestivalDetail.module.css');
  const layout = read('src/app/layout.tsx');
  const seo = read('src/lib/seo.ts');
  const atlas = JSON.parse(read('src/data/atlas-festivals.json'));
  const targetSlug = 'the-new-colossus-festival';
  const target = atlas.festivals.find((festival) => festival.slug === targetSlug);
  const routeTitle = 'The New Colossus Festival guide';
  const renderedTitle = `${routeTitle} | RetroAltFest`;
  const canonicalHref = `https://retroaltfest.com/festivals/${targetSlug}`;
  const canonicalElement = `<link rel="canonical" href="${canonicalHref}">`;

  assert.ok(target);
  assert.equal(target.festival_name, 'The New Colossus Festival');
  assert.equal(`${target.festival_name} festival guide`, 'The New Colossus Festival festival guide', 'the unchanged generic fallback explains the current duplication');
  assert.equal(routeTitle, 'The New Colossus Festival guide');
  assert.equal(renderedTitle, 'The New Colossus Festival guide | RetroAltFest');
  assert.equal(canonicalHref, 'https://retroaltfest.com/festivals/the-new-colossus-festival');
  assert.equal(canonicalElement, '<link rel="canonical" href="https://retroaltfest.com/festivals/the-new-colossus-festival">');

  assert.match(page, /const festivalMetadataTitleOverrides: Readonly<Record<string, string>> = \{\s*\[FESTIVAL_DETAIL_REFERENCE_SLUG\]: "M'era Luna Festival guide",\s*"a-murder-of-crows-xi-nyc-goth-post-punk-festival": "A Murder of Crows XI NYC Goth & Post-punk Festival guide",\s*"the-new-colossus-festival": "The New Colossus Festival guide",\s*\}/);
  assert.equal((page.match(/festivalMetadataTitleOverrides/g) ?? []).length, 2, 'one centralized map declaration and one centralized lookup are allowed');
  assert.equal((page.match(/"the-new-colossus-festival"/g) ?? []).length, 2, 'one activation member and one metadata override key are allowed');
  assert.match(page, /title: polish\?\.metadataTitle \?\? festivalMetadataTitleOverrides\[festival\.slug\] \?\? `\$\{festival\.name\} festival guide`/);
  assert.match(page, /description: polish\?\.metadataDescription \?\? festival\.summary/);
  assert.match(page, /path: `\/festivals\/\$\{festival\.slug\}`/);
  assert.match(page, /type: "article"/);
  assert.match(page, /keywords: festival\.seoKeywords/);

  assert.match(layout, /template: "%s \| RetroAltFest"/);
  assert.match(seo, /alternates:\s*\{\s*canonical,/);
  assert.match(seo, /openGraph:\s*\{[\s\S]*?title,[\s\S]*?description,[\s\S]*?url: canonical,[\s\S]*?type,/);
  assert.match(seo, /twitter:\s*\{[\s\S]*?title,[\s\S]*?description,/);
  assert.match(seo, /robots:\s*\{\s*index,\s*follow: index,/);
  assert.equal(routeTitle, 'The New Colossus Festival guide', 'Open Graph title inherits the route-level title');
  assert.equal(routeTitle, 'The New Colossus Festival guide', 'Twitter title inherits the route-level title');

  const titleOverrides = {
    'mera-luna-festival': "M'era Luna Festival guide",
    'a-murder-of-crows-xi-nyc-goth-post-punk-festival': 'A Murder of Crows XI NYC Goth & Post-punk Festival guide',
    [targetSlug]: routeTitle,
  };
  assert.deepEqual(Object.keys(titleOverrides), [
    'mera-luna-festival',
    'a-murder-of-crows-xi-nyc-goth-post-punk-festival',
    targetSlug,
  ]);
  const expectedTitles = {
    'wave-gotik-treffen': 'Wave-Gotik-Treffen festival guide',
    'castle-party-festival': 'Castle Party Festival festival guide',
    'amphi-festival': 'Amphi Festival festival guide',
    'mera-luna-festival': "M'era Luna Festival guide",
    'infest-festival': 'Infest Festival festival guide',
    'a-murder-of-crows-xi-nyc-goth-post-punk-festival': 'A Murder of Crows XI NYC Goth & Post-punk Festival guide',
    'ncn-festival-nocturnal-culture-night': 'NCN Festival / Nocturnal Culture Night festival guide',
    'cold-waves': 'Cold Waves festival guide',
    'absolution-fest': 'Absolution Fest 2026 — Tampa Goth, Darkwave & Post-Punk Festival',
    'darker-waves': 'Darker Waves festival guide',
    levitation: 'LEVITATION festival guide',
    'mutek-montreal': 'MUTEK Montréal festival guide',
    'just-like-heaven': 'Just Like Heaven festival guide',
    [targetSlug]: routeTitle,
    'terminus-festival': 'Terminus Festival festival guide',
  };
  const resolvedTitles = Object.fromEntries(atlas.festivals.map((festival) => [
    festival.slug,
    festival.slug === 'absolution-fest'
      ? 'Absolution Fest 2026 — Tampa Goth, Darkwave & Post-Punk Festival'
      : titleOverrides[festival.slug] ?? `${festival.festival_name} festival guide`,
  ]));
  assert.deepEqual(resolvedTitles, expectedTitles, 'only New Colossus changes from the production title set');

  const activationBlock = page.match(/const NIGHT_TRANSMISSION_DETAIL_SLUGS[\s\S]*?\]\);/)?.[0] ?? '';
  assert.deepEqual([...activationBlock.matchAll(/"([a-z0-9-]+)"/g)].map((match) => match[1]), [
    'darker-waves',
    'ncn-festival-nocturnal-culture-night',
    'levitation',
    'a-murder-of-crows-xi-nyc-goth-post-punk-festival',
    targetSlug,
  ]);
  assert.equal((page.match(/NIGHT_TRANSMISSION_DETAIL_SLUGS/g) ?? []).length, 2);
  assert.equal((page.match(/NIGHT_TRANSMISSION_DETAIL_SLUGS\.includes\(festival\.slug\)/g) ?? []).length, 1);
  assert.doesNotMatch(page, /Object\.freeze\(new Set|\.add\(|\.delete\(|\.clear\(/);

  const normalizedPage = normalizePhase5A1GuideDiscoveryPilot(page).replace(
    '  "the-new-colossus-festival": "The New Colossus Festival guide",\n',
    '',
  );
  assert.equal(createHash('sha256').update(normalizedPage).digest('hex'), 'e106bb7cf2c9a91dcf767d67b451c79cbc3b8d6e51cce0f7f697295092b1c821', 'the route source may differ only by the centralized New Colossus title override');
  assert.equal(createHash('sha256').update(css).digest('hex'), '903b3d9ad627afeec4023f543321cf6a9efbdc9663b26f419b69109a1b831dbb');

  assert.equal(target.date_text, 'March 9-14, 2027');
  assert.equal(target.venue_name, 'Independent music venues on the Lower East Side');
  assert.equal(target.official_url, 'https://www.newcolossusfestival.com/');
  assert.deepEqual(target.source_urls, ['https://www.newcolossusfestival.com/']);
  assert.deepEqual(target.similar_festival_ids, ['levitation', 'mutek-montreal', 'just-like-heaven']);
  assert.match(page, /href=\{festival\.officialSiteUrl\} target="_blank" rel="noreferrer"/);
  assert.match(page, /Visit official site/);
  assert.match(css, /\.referencePage \.officialCta[\s\S]*min-height:\s*44px[\s\S]*color:\s*#050507[\s\S]*background:\s*#f4f1ff/);
  assert.match(read('tests/homepage-mvp.test.mjs'), /6ff0f04895aee5a800c2a2cd06e3ac7db2b5752e1b6fd2b3aa0b533684c22bcf[\s\S]*1c8d69a746187d06667c933039057e5cc8160f8b727083e33b18216c4a9dbf43/);
});

test('Phase 5A.1 closes exactly two reciprocal guide discovery loops and freezes every other route contract', () => {
  const pagePath = 'src/app/festivals/[slug]/page.tsx';
  const page = read(pagePath);
  const atlasSource = read('src/data/atlas-festivals.json');
  const atlas = JSON.parse(atlasSource);
  const css = read('src/app/festivals/[slug]/FestivalDetail.module.css');
  const dto = read('src/lib/public-festivals.ts');
  const sitemap = read('src/app/sitemap.ts');
  const packageSource = read('package.json');
  const packageLock = read('package-lock.json');
  const newWaveGuide = read('src/app/guides/new-wave-post-punk-retro-alternative-festivals-north-america/page.tsx');
  const gothGuide = read('src/app/guides/north-american-goth-darkwave-festivals/page.tsx');
  const targets = {
    'darker-waves': {
      href: '/guides/new-wave-post-punk-retro-alternative-festivals-north-america',
      label: 'New Wave, Post-Punk & Retro Alternative Guide',
      reciprocalSource: newWaveGuide,
    },
    'a-murder-of-crows-xi-nyc-goth-post-punk-festival': {
      href: '/guides/north-american-goth-darkwave-festivals',
      label: 'North American Goth & Darkwave Guide',
      reciprocalSource: gothGuide,
    },
  };

  const mappingBlock = page.match(/const FESTIVAL_DETAIL_GUIDE_LINKS:[\s\S]*?Object\.freeze\(\{[\s\S]*?\n\}\);/)?.[0] ?? '';
  assert.ok(mappingBlock, 'the explicit immutable Phase 5A.1 mapping should exist');
  assert.match(page, /const GENERIC_GUIDE_DISCOVERY_LINK = Object\.freeze\(\{\s*href: "\/guides",\s*label: "Read curated guides",\s*\}\)/);
  assert.match(page, /const guideDiscoveryLink = FESTIVAL_DETAIL_GUIDE_LINKS\[festival\.slug\] \?\? GENERIC_GUIDE_DISCOVERY_LINK/);
  assert.equal((page.match(/FESTIVAL_DETAIL_GUIDE_LINKS\[festival\.slug\]/g) ?? []).length, 1);
  assert.match(page, /href: guideDiscoveryLink\.href/);
  assert.match(page, /label: guideDiscoveryLink\.label/);

  for (const [slug, contract] of Object.entries(targets)) {
    assert.equal((mappingBlock.match(new RegExp(`"${slug}"`, 'g')) ?? []).length, 1, `${slug} should occur once in the mapping`);
    assert.equal((mappingBlock.match(new RegExp(contract.href.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g')) ?? []).length, 1, `${slug} should have one direct guide destination`);
    assert.equal((mappingBlock.match(new RegExp(contract.label.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g')) ?? []).length, 1, `${slug} should have one frozen label`);
    assert.match(contract.reciprocalSource, new RegExp(`/festivals/${slug}`), `${contract.href} should already link back to ${slug}`);
  }
  assert.equal((mappingBlock.match(/^\s+href:/gm) ?? []).length, 2, 'the mapping should contain exactly two href values');
  assert.equal((mappingBlock.match(/^\s+label:/gm) ?? []).length, 2, 'the mapping should contain exactly two label values');

  for (const festival of atlas.festivals) {
    if (targets[festival.slug]) continue;
    assert.doesNotMatch(mappingBlock, new RegExp(`"${festival.slug}"`), `${festival.slug} must retain the generic guide continuation`);
  }

  const discoveryBlock = page.match(/const discoveryLinks = \([\s\S]*?\n  \);/)?.[0] ?? '';
  assert.ok(discoveryBlock);
  assert.equal((discoveryBlock.match(/href:/g) ?? []).length, 3, 'discovery-card count should remain three');
  const discoveryOrder = [
    discoveryBlock.indexOf('href: "/festivals"'),
    discoveryBlock.indexOf('href: guideDiscoveryLink.href'),
    discoveryBlock.indexOf('href: "/verification"'),
  ];
  assert.equal(discoveryOrder.every((position) => position >= 0), true);
  assert.deepEqual(discoveryOrder, [...discoveryOrder].sort((a, b) => a - b), 'Atlas, guide, and Verification order must remain exact');
  assert.match(discoveryBlock, /description: "Use scene and regional guides for context around goth, darkwave, industrial, EBM, new wave, and post-punk discovery\."/);

  assert.equal(
    createHash('sha256').update(normalizePhase5A1GuideDiscoveryPilot(page)).digest('hex'),
    'b136d810bf2a236186672004dfb89e5b71be06018b07d8249ca29a559db14798',
    'after normalizing the two approved href/label substitutions, every previous route source byte should remain exact',
  );

  const activationBlock = page.match(/const NIGHT_TRANSMISSION_DETAIL_SLUGS[\s\S]*?\]\);/)?.[0] ?? '';
  assert.deepEqual([...activationBlock.matchAll(/"([a-z0-9-]+)"/g)].map((match) => match[1]), [
    'darker-waves',
    'ncn-festival-nocturnal-culture-night',
    'levitation',
    'a-murder-of-crows-xi-nyc-goth-post-punk-festival',
    'the-new-colossus-festival',
  ]);
  assert.equal((page.match(/NIGHT_TRANSMISSION_DETAIL_SLUGS/g) ?? []).length, 2);
  assert.match(page, /festival\.sourceLinks\.map/);
  assert.match(page, /festival\.similar\.map/);
  assert.match(page, /href=\{source\.url\} target="_blank" rel="noreferrer"/);
  assert.match(page, /href=\{`\/festivals\/\$\{similar\.slug\}`\}/);

  assert.equal(createHash('sha256').update(css).digest('hex'), '903b3d9ad627afeec4023f543321cf6a9efbdc9663b26f419b69109a1b831dbb');
  assert.equal(createHash('sha256').update(atlasSource).digest('hex'), '8e148cb046ff61f9cdcba8ed415790bd2f005ed66ae276abe5e3c46d31599e78');
  assert.equal(createHash('sha256').update(dto).digest('hex'), 'e3950b813213b93bbd700d354b45797a2cf3540637e1417c14f6e577747fccf8');
  assert.equal(createHash('sha256').update(sitemap).digest('hex'), '9e41355aa9072e9b5558f645037f16d7beda46b003fff2e9587b921b1977ace2');
  assert.equal(createHash('sha256').update(packageSource).digest('hex'), 'f2949d272e9cf34ed95bd904ab9b7579ab95b788ccd75e001ab971eb66a5c80d');
  assert.equal(createHash('sha256').update(packageLock).digest('hex'), '49c3b1f37e957b7961825b121bbddb26d8e674c7e2efcb2ab29249c2891d4e56');
  assert.doesNotMatch(`${page}\n${packageSource}`, /"use client"|useState|useEffect|useMemo|fetch\(|\/api\/|\/prototypes\/|framer-motion|lottie|three/i);
  assert.doesNotMatch(page, /geocoding_source|geocoding_query|geocoding_confidence|map_phase0_category|source_status|date_pending|needs_review|core_anchor|watchlist|Phase 0|map-readiness|latitude|longitude/i);
});

test('Phase 5A.2 compresses the mobile directory filter with one native accessible disclosure and freezes every protected contract', () => {
  const browserPath = 'src/components/festivals/FestivalDirectoryBrowser.tsx';
  const cssPath = 'src/components/festivals/FestivalDirectory.module.css';
  const browser = read(browserPath);
  const css = read(cssPath);
  const atlasSource = read('src/data/atlas-festivals.json');
  const atlas = JSON.parse(atlasSource);
  const dto = read('src/lib/public-festivals.ts');
  const directoryPage = read('src/app/festivals/page.tsx');
  const sitemap = read('src/app/sitemap.ts');
  const packageSource = read('package.json');
  const packageLock = read('package-lock.json');

  assert.equal((browser.match(/<details\b/g) ?? []).length, 1, 'one native filter disclosure should exist');
  assert.equal((browser.match(/<summary\b/g) ?? []).length, 1, 'one native summary should exist');
  assert.match(browser, /<details className=\{styles\.filterDisclosure\} open ref=\{disclosureRef\}>/);
  assert.match(browser, /<summary className=\{styles\.filterSummary\} aria-label="Filter festivals">/);
  assert.equal((browser.match(/<span>Filter festivals<\/span>/g) ?? []).length, 1, 'one visible mobile summary label should remain exact');
  assert.equal((browser.match(/aria-label="Filter festivals"/g) ?? []).length, 1, 'one screen-reader summary name should remain exact');
  assert.match(browser, /disclosureRef\.current\.dataset\.disclosureReady = "true"/);

  assert.match(browser, /window\.matchMedia\("\(max-width: 600px\)"\)/);
  assert.match(browser, /disclosureRef\.current\.open = !mobileQuery\.matches/);
  assert.match(browser, /mobileQuery\.addEventListener\("change", syncDisclosure\)/);
  assert.match(browser, /mobileQuery\.removeEventListener\("change", syncDisclosure\)/);
  assert.doesNotMatch(browser, /const \[.*(?:open|expanded|disclosure).*\] = useState/i, 'native details should own mobile expanded state');

  assert.equal((browser.match(/className=\{styles\.controls\}/g) ?? []).length, 1, 'the existing control tree should occur once');
  assert.equal((browser.match(/type="search"/g) ?? []).length, 1, 'one search control should remain');
  assert.equal((browser.match(/<select\b/g) ?? []).length, 3, 'scene, region, and status should each occur once');
  assert.equal((browser.match(/Reset filters/g) ?? []).length, 1, 'one primary reset control should remain');
  assert.doesNotMatch(browser, /mobileControls|desktopControls|cloneElement|duplicate/i);

  const controlOrder = [
    browser.indexOf('Search by festival or location'),
    browser.indexOf('<span>Scene</span>'),
    browser.indexOf('<span>Region</span>'),
    browser.indexOf('<span>Status</span>'),
  ];
  assert.equal(controlOrder.every((position) => position >= 0), true);
  assert.deepEqual(controlOrder, [...controlOrder].sort((a, b) => a - b), 'filter labels should retain their exact order');
  assert.deepEqual(
    browser.match(/const preferredSceneOrder = \[([^\]]+)\]/)?.[1].match(/"([^"]+)"/g)?.map((value) => value.slice(1, -1)),
    ['Darkwave', 'Goth', 'Industrial', 'Synthpop', 'Post-punk', 'Electronic', 'Alternative'],
  );

  const categoryCounts = Object.fromEntries(
    ['darkwave', 'industrial', 'post-punk'].map((category) => [
      category,
      atlas.festivals.filter((festival) => festival.categories.includes(category)).length,
    ]),
  );
  assert.equal(atlas.festivals.length, 15, 'the default directory count should remain 15');
  assert.deepEqual(categoryCounts, { darkwave: 11, industrial: 8, 'post-punk': 9 });
  assert.match(browser, /sceneFilter === "all" \|\| festival\.sceneTags\.includes\(sceneFilter\)/);
  assert.match(browser, /setSearchQuery\(""\)[\s\S]*setSceneFilter\("all"\)[\s\S]*setRegionFilter\("all"\)[\s\S]*setStatusFilter\("all"\)/);

  const detailsBlock = browser.match(/<details[\s\S]*?<\/details>/)?.[0] ?? '';
  assert.ok(detailsBlock, 'the disclosure source block should be extractable');
  assert.match(detailsBlock, /className=\{styles\.controls\}/);
  assert.match(detailsBlock, /className=\{styles\.filterReadout\}/);
  assert.match(browser.slice(browser.indexOf('</details>')), /className=\{styles\.mobileResultCount\}/, 'the mobile result count should remain outside collapsed content');
  assert.equal((browser.match(/Showing \{filteredFestivals\.length\} of \{festivals\.length\} source-aware atlas records\./g) ?? []).length, 2, 'responsive result readouts should share the same result source');

  assert.match(css, /@media \(min-width: 601px\)[\s\S]*\.filterSummary[\s\S]*display:\s*none/);
  assert.match(css, /@media \(min-width: 601px\)[\s\S]*\.filterDisclosure:not\(\[open\]\)\s*>\s*\.disclosureContent[\s\S]*display:\s*contents/);
  assert.match(css, /@media \(max-width: 600px\)[\s\S]*\.filterSummary[\s\S]*min-height:\s*(44|48|50)px/);
  assert.match(css, /\.filterDisclosure:not\(\[data-disclosure-ready="true"\]\)\s*>\s*\.disclosureContent[\s\S]*display:\s*none/, 'mobile CSS should stay visually collapsed before hydration while desktop HTML remains expanded without layout shift');
  assert.match(css, /\.filterSummary:focus-visible[\s\S]*outline:\s*2px solid var\(--nt-focus-ring\)/);
  assert.match(css, /@media \(forced-colors: active\)[\s\S]*\.filterSummary/);
  assert.match(css, /@media \(prefers-reduced-motion: reduce\)/);
  assert.doesNotMatch(`${browser}\n${css}`, /@keyframes|animation\s*:|framer-motion|lottie|three|canvas(?!text)|webgl/i);
  assert.match(css, /\/night-transmission-inner\/cyan-corridor\.avif/);
  const nonZeroRadii = [...css.matchAll(/border-radius:\s*([^;]+);/g)]
    .map((match) => match[1].replace(/\s*!important\s*$/, '').trim())
    .filter((value) => value !== '0');
  assert.deepEqual(nonZeroRadii, [], 'the directory should retain square Night Transmission geometry');

  assert.equal(createHash('sha256').update(atlasSource).digest('hex'), '8e148cb046ff61f9cdcba8ed415790bd2f005ed66ae276abe5e3c46d31599e78');
  assert.equal(createHash('sha256').update(dto).digest('hex'), 'e3950b813213b93bbd700d354b45797a2cf3540637e1417c14f6e577747fccf8');
  assert.equal(createHash('sha256').update(directoryPage).digest('hex'), 'd0eb0a675d432754bf9eaf9dddb6a997492e54073356ddea69b5254748b84230');
  assert.equal(createHash('sha256').update(sitemap).digest('hex'), '9e41355aa9072e9b5558f645037f16d7beda46b003fff2e9587b921b1977ace2');
  assert.equal(createHash('sha256').update(packageSource).digest('hex'), 'f2949d272e9cf34ed95bd904ab9b7579ab95b788ccd75e001ab971eb66a5c80d');
  assert.equal(createHash('sha256').update(packageLock).digest('hex'), '49c3b1f37e957b7961825b121bbddb26d8e674c7e2efcb2ab29249c2891d4e56');
  assert.doesNotMatch(`${browser}\n${directoryPage}`, /fetch\(|\/api\/|prisma|supabase|mongodb|\bauth\b|\bcms\b|\bdatabase\b|scraping|geocod|latitude|longitude|map UI/i);
});

test('Phase 5B.1 selected European festivals guide is bounded, source-safe, and Night Transmission', () => {
  const guidePath = 'src/app/guides/european-goth-darkwave-industrial-festivals/page.tsx';
  const cssPath = 'src/app/guides/european-goth-darkwave-industrial-festivals/GuideArticle.module.css';
  assert.equal(existsSync(join(root, guidePath)), true, 'Phase 5B.1 route should exist locally');
  assert.equal(existsSync(join(root, cssPath)), true, 'Phase 5B.1 should use one route-local CSS module');

  const guide = read(guidePath);
  const css = read(cssPath);
  const source = `${guide}\n${css}`;
  const layout = read('src/app/layout.tsx');
  const seo = read('src/lib/seo.ts');
  const guidesHub = read('src/app/guides/page.tsx');
  const sitemap = read('src/app/sitemap.ts');

  assert.match(guide, /const pagePath = "\/guides\/european-goth-darkwave-industrial-festivals"/);
  assert.match(guide, /title: "Selected Goth, Darkwave & Industrial Festivals in Europe"/);
  assert.match(guide, /description:\s*"A source-aware guide to selected European goth, darkwave, industrial, EBM, and post-punk festivals documented by RetroAltFest\."/);
  assert.match(guide, /path: pagePath/);
  assert.match(guide, /type: "article"/);
  assert.equal(layout.match(/template: "([^"]+)"/)?.[1], '%s | RetroAltFest');
  assert.equal(
    layout.match(/template: "([^"]+)"/)?.[1].replace('%s', guide.match(/title: "([^"]+)"/)?.[1]),
    'Selected Goth, Darkwave & Industrial Festivals in Europe | RetroAltFest',
  );
  assert.equal(`https://retroaltfest.com${guide.match(/const pagePath = "([^"]+)"/)?.[1]}`, 'https://retroaltfest.com/guides/european-goth-darkwave-industrial-festivals');
  assert.match(seo, /const canonical = absoluteUrl\(path\)/);
  assert.match(seo, /alternates:\s*{\s*canonical/);
  assert.match(seo, /openGraph:\s*{\s*title,/);
  assert.match(seo, /twitter:\s*{[\s\S]*?title,/);

  assert.match(guide, /<h1[^>]*>\s*Selected Goth, Darkwave &amp; Industrial Festivals in Europe\s*<\/h1>/s);
  assert.match(guide, /curated starting point/i);
  assert.match(guide, /not a complete list of every European dark-alternative festival/i);
  assert.match(guide, /data-guide-family="night-transmission"/);
  assert.match(guide, /data-comparison-framework/);
  for (const className of ['page', 'paperEdge', 'towerBeacon', 'content', 'breadcrumb', 'masthead', 'sectionNav', 'guideSection', 'festivalRecord', 'recordIndex', 'comparisonGrid', 'historicalRecord', 'relatedPaths']) {
    assert.match(guide, new RegExp(`styles\\.${className}`));
  }

  assert.deepEqual([...guide.matchAll(/festivalName: "([^"]+)"/g)].map((match) => match[1]), [
    'Wave-Gotik-Treffen',
    "M’era Luna Festival",
    'Infest Festival',
    'NCN Festival / Nocturnal Culture Night',
    'Castle Party Festival',
  ]);
  assert.deepEqual([...guide.matchAll(/atlasPath: "([^"]+)"/g)].map((match) => match[1]), [
    '/festivals/wave-gotik-treffen',
    '/festivals/mera-luna-festival',
    '/festivals/infest-festival',
    '/festivals/ncn-festival-nocturnal-culture-night',
    '/festivals/castle-party-festival',
  ]);
  for (const route of ['/festivals', '/guides', '/verification']) {
    assert.match(guide, new RegExp(`(?:href=|href:) ["']${route.replaceAll('/', '\\/')}["']|href=["']${route.replaceAll('/', '\\/')}["']`));
  }
  assert.match(guide, /Historical\/reference — Castle Party Festival 2026 took place 16–19 July 2026\./);
  assert.match(guide, /No later edition announcement was found[\s\S]*does not establish cancellation or non-return/);
  assert.doesNotMatch(source, /Amphi/i);

  assert.match(guide, /href: gothDarkwaveGuidePath/);
  assert.match(guide, /href: industrialEbmGuidePath/);
  assert.doesNotMatch(guide, /new-wave-post-punk-retro-alternative-festivals-north-america/);
  assert.match(guidesHub, /european-goth-darkwave-industrial-festivals/);
  assert.match(sitemap, /european-goth-darkwave-industrial-festivals/);

  assert.match(guide, /import styles from "\.\/GuideArticle\.module\.css"/);
  assert.doesNotMatch(guide, /"use client"|useState|useEffect|useMemo|fetch\(|\/api\//);
  assert.equal((css.match(/magenta-orbit\.avif/g) ?? []).length, 1, 'orbital asset should be declared once');
  assert.equal((css.match(/tower-beacon-signature\.avif/g) ?? []).length, 1, 'tower asset should be declared once');
  assert.ok(css.indexOf('tower-beacon-signature.avif') > css.indexOf('@media (min-width: 1101px)'), 'tower URL should live only in the 1101px desktop query');
  assert.match(css, /prefers-reduced-motion/);
  assert.match(css, /forced-colors/);
  assert.match(css, /focus-visible/);
  const nonZeroRadii = [...css.matchAll(/border-radius:\s*([^;]+);/g)]
    .map((match) => match[1].replace(/\s*!important\s*$/, '').trim())
    .filter((value) => value !== '0');
  assert.deepEqual(nonZeroRadii, [], 'Phase 5B.1 surfaces should stay square');

  assert.doesNotMatch(source, /\b(best|ultimate|definitive|top festivals)\b/i);
  assert.equal((guide.match(/complete list/gi) ?? []).length, 1, 'complete should appear only in the explicit non-comprehensive caveat');
  assert.doesNotMatch(source, /ticket|affiliate|commission|hotel|flight|travel-booking|attendance|coordinates|geocod|map UI|latitude|longitude/i);
  assert.doesNotMatch(source, /FAQPage|application\/ld\+json|<script|<canvas|WebGLRenderingContext|<video|parallax|prisma|supabase|mongodb|\bauth\b|\bcms\b|\bdatabase\b|scraping/i);
  assert.doesNotMatch(guide, /date_pending|source_status|map_phase0_category|core_anchor|watchlist|Phase 0|map-readiness|needs_review/i);

  const protectedHashes = new Map([
    ['src/data/atlas-festivals.json', '8e148cb046ff61f9cdcba8ed415790bd2f005ed66ae276abe5e3c46d31599e78'],
    ['src/lib/public-festivals.ts', 'e3950b813213b93bbd700d354b45797a2cf3540637e1417c14f6e577747fccf8'],
    ['package.json', 'f2949d272e9cf34ed95bd904ab9b7579ab95b788ccd75e001ab971eb66a5c80d'],
    ['package-lock.json', '49c3b1f37e957b7961825b121bbddb26d8e674c7e2efcb2ab29249c2891d4e56'],
    ['src/app/guides/north-american-goth-darkwave-festivals/page.tsx', 'deebe1989e238fd3cdd1fcd701f7ceaea1280c54989f58b70bfb8e901ca59f8e'],
    ['src/app/guides/north-american-goth-darkwave-festivals/GuideArticle.module.css', 'c6ec3ab4ad902c67f831dd6c460c293e22b94e68206493863ad06254021ce20d'],
    ['src/app/guides/industrial-ebm-dark-electronic-festivals-north-america/page.tsx', '70855708398e2be80af1a1effabeff23fca3151b6c72e6c0c5919417f1bdd668'],
    ['src/app/guides/industrial-ebm-dark-electronic-festivals-north-america/GuideArticle.module.css', 'c3cbaf0c651fa3544495a7f125def2be0708214d1dd6112775d847aecb5a559e'],
    ['src/app/guides/new-wave-post-punk-retro-alternative-festivals-north-america/page.tsx', '177c7aba42dff4af4495db3e9fc00ada961ae71def29ed62b6d0146cb815d1a5'],
    ['src/app/guides/new-wave-post-punk-retro-alternative-festivals-north-america/GuideArticle.module.css', '9ca0cf323d8c291bbedfc06477e9931237220b91a0e4b21fe57c3f1e70f73d10'],
    ['src/app/guides/west-coast-pacific-northwest-dark-alternative-festivals/page.tsx', '527e52c33520fb7435bebdc1fd612622d082cd8470c9c82c8341b40efad87a94'],
    ['src/app/guides/west-coast-pacific-northwest-dark-alternative-festivals/GuideArticle.module.css', '6a614afd8fabf76a8e13301940958d655ddbe9931d1583ce20af45fe42406b54'],
  ]);
  for (const [protectedPath, expectedHash] of protectedHashes) {
    assert.equal(createHash('sha256').update(read(protectedPath)).digest('hex'), expectedHash, `${protectedPath} should remain byte-identical`);
  }
});

test('Phase 5B.2 publishes the selected European guide through the Guides Hub and sitemap only', () => {
  const guidesHub = read('src/app/guides/page.tsx');
  const guidesCss = read('src/app/guides/GuidesHub.module.css');
  const sitemap = read('src/app/sitemap.ts');
  const atlasSource = read('src/data/atlas-festivals.json');
  const atlas = JSON.parse(atlasSource);
  const dto = read('src/lib/public-festivals.ts');
  const packageSource = read('package.json');
  const packageLock = read('package-lock.json');

  const europeanTitle = 'Selected Goth, Darkwave & Industrial Festivals in Europe';
  const europeanRoute = '/guides/european-goth-darkwave-industrial-festivals';
  const previousGuideOrder = [
    '/guides/west-coast-pacific-northwest-dark-alternative-festivals',
    '/guides/north-american-goth-darkwave-festivals',
    '/guides/industrial-ebm-dark-electronic-festivals-north-america',
    '/guides/new-wave-post-punk-retro-alternative-festivals-north-america',
  ];
  const expectedGuideOrder = [previousGuideOrder[0], europeanRoute, ...previousGuideOrder.slice(1)];
  const guideHrefs = [...guidesHub.matchAll(/href: "(\/guides\/[^"]+)"/g)].map((match) => match[1]);

  assert.deepEqual(guideHrefs, expectedGuideOrder, 'the European guide should be issue 02 without reordering existing cards');
  assert.deepEqual(guideHrefs.filter((href) => href !== europeanRoute), previousGuideOrder, 'existing card order should remain exact');
  assert.equal(guideHrefs.length, 5, 'the Guides Hub should expose five guide cards');
  assert.equal(guideHrefs.filter((href) => href === europeanRoute).length, 1, 'the new guide card should occur once');

  const europeanCard = guidesHub.match(/\{\s*title: "Selected Goth, Darkwave & Industrial Festivals in Europe",[\s\S]*?\n  \},/)?.[0] ?? '';
  assert.ok(europeanCard, 'the new guide card should be extractable');
  assert.match(europeanCard, new RegExp(`title: "${europeanTitle.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}"`));
  assert.match(europeanCard, /href: "\/guides\/european-goth-darkwave-industrial-festivals"/);
  assert.match(europeanCard, /source-aware starting point to selected European goth, darkwave, industrial, EBM, post-punk, and adjacent dark-alternative festivals\./i);
  assert.match(europeanCard, /European|Europe/);
  assert.match(europeanCard, /selected/i);
  assert.match(europeanCard, /source-aware/i);
  assert.doesNotMatch(europeanCard, /\b(best|top|ultimate|complete|definitive|comprehensive)\b|every European festival|ticket|travel|hotel|affiliate|map|coordinates|Amphi/i);
  assert.match(guidesHub, /<em>02—05<\/em>/);

  const staticRoutesBlock = sitemap.match(/const staticRoutes:[\s\S]*?\n  \];/)?.[0] ?? '';
  const staticSuffixes = [...staticRoutesBlock.matchAll(/url: (?:SITE_URL|`\$\{SITE_URL\}([^`]+)`)/g)].map((match) => match[1] ?? '');
  const previousStaticSuffixes = [
    '', '/festivals', '/guides', '/verification', '/suggest',
    '/guides/north-american-goth-darkwave-festivals',
    '/guides/industrial-ebm-dark-electronic-festivals-north-america',
    '/guides/new-wave-post-punk-retro-alternative-festivals-north-america',
    '/guides/west-coast-pacific-northwest-dark-alternative-festivals',
  ];
  assert.equal(staticSuffixes.length, 10, 'the sitemap should contain ten static routes');
  assert.equal(new Set(staticSuffixes).size, staticSuffixes.length, 'the static sitemap URLs should be unique');
  assert.equal(staticSuffixes.filter((suffix) => suffix === europeanRoute).length, 1, 'the European canonical should occur once');
  for (const suffix of previousStaticSuffixes) assert.ok(staticSuffixes.includes(suffix), `${suffix || '/'} should remain in the sitemap`);
  assert.equal(staticSuffixes.filter((suffix) => suffix.startsWith('/guides/')).length, 5, 'five guide article URLs should be listed');
  assert.equal(atlas.festivals.length, 15, 'festival route count should remain 15');
  assert.equal(staticSuffixes.length + atlas.festivals.length, 25, 'the generated sitemap should contain 25 URLs');
  assert.equal((sitemap.match(/`\$\{SITE_URL\}\/guides\/european-goth-darkwave-industrial-festivals`/g) ?? []).length, 1);

  assert.match(guidesHub, /title:\s*{\s*absolute: "RetroAltFest Guides \| Goth, Darkwave, Industrial & Retro Alternative Festivals"/);
  assert.match(guidesHub, /const pagePath = "\/guides"/);
  assert.match(guidesHub, /<h1>RetroAltFest Guides<\/h1>/);
  assert.match(guidesHub, /Start here for curated paths into goth, darkwave, industrial, EBM, post-punk, new wave, and retro alternative festivals\./);
  assert.doesNotMatch(`${guidesHub}\n${sitemap}`, /date_pending|source_status|map_phase0_category|core_anchor|watchlist|Phase 0|map-readiness|needs_review|geocoding_source|geocoding_query|geocoding_confidence|latitude|longitude/i);
  assert.doesNotMatch(guidesHub, /"use client"|useState|useEffect|useMemo|fetch\(|\/api\//);

  const protectedGuideHashes = new Map([
    ['src/app/guides/european-goth-darkwave-industrial-festivals/page.tsx', 'd8cc53a485cea8df1df8fef5d12644ece87ea7ced8fb9323205560f9f4e540a8'],
    ['src/app/guides/european-goth-darkwave-industrial-festivals/GuideArticle.module.css', '6f5877f8366151232acf5e08d43bab6cc81f4bb90d2746f5c2e77c8b944758c3'],
    ['src/app/guides/north-american-goth-darkwave-festivals/page.tsx', 'deebe1989e238fd3cdd1fcd701f7ceaea1280c54989f58b70bfb8e901ca59f8e'],
    ['src/app/guides/north-american-goth-darkwave-festivals/GuideArticle.module.css', 'c6ec3ab4ad902c67f831dd6c460c293e22b94e68206493863ad06254021ce20d'],
    ['src/app/guides/industrial-ebm-dark-electronic-festivals-north-america/page.tsx', '70855708398e2be80af1a1effabeff23fca3151b6c72e6c0c5919417f1bdd668'],
    ['src/app/guides/industrial-ebm-dark-electronic-festivals-north-america/GuideArticle.module.css', 'c3cbaf0c651fa3544495a7f125def2be0708214d1dd6112775d847aecb5a559e'],
    ['src/app/guides/new-wave-post-punk-retro-alternative-festivals-north-america/page.tsx', '177c7aba42dff4af4495db3e9fc00ada961ae71def29ed62b6d0146cb815d1a5'],
    ['src/app/guides/new-wave-post-punk-retro-alternative-festivals-north-america/GuideArticle.module.css', '9ca0cf323d8c291bbedfc06477e9931237220b91a0e4b21fe57c3f1e70f73d10'],
    ['src/app/guides/west-coast-pacific-northwest-dark-alternative-festivals/page.tsx', '527e52c33520fb7435bebdc1fd612622d082cd8470c9c82c8341b40efad87a94'],
    ['src/app/guides/west-coast-pacific-northwest-dark-alternative-festivals/GuideArticle.module.css', '6a614afd8fabf76a8e13301940958d655ddbe9931d1583ce20af45fe42406b54'],
  ]);
  for (const [protectedPath, expectedHash] of protectedGuideHashes) {
    assert.equal(createHash('sha256').update(read(protectedPath)).digest('hex'), expectedHash, `${protectedPath} should remain byte-identical`);
  }
  assert.equal(createHash('sha256').update(guidesCss).digest('hex'), 'aef54b1c097f166f8118a0e8b2f08c07e46928f85c67f27b88fce08c344ea6e3', 'Guides Hub CSS should not change');
  assert.deepEqual(hashTree('public'), { count: 20, hash: 'fdb685b14899493dad0a63d1d0500cbfb975065880f97931020bc0590f36c81b' }, 'public assets should not change');
  assert.equal(createHash('sha256').update(atlasSource).digest('hex'), '8e148cb046ff61f9cdcba8ed415790bd2f005ed66ae276abe5e3c46d31599e78');
  assert.equal(createHash('sha256').update(dto).digest('hex'), 'e3950b813213b93bbd700d354b45797a2cf3540637e1417c14f6e577747fccf8');
  assert.equal(createHash('sha256').update(packageSource).digest('hex'), 'f2949d272e9cf34ed95bd904ab9b7579ab95b788ccd75e001ab971eb66a5c80d');
  assert.equal(createHash('sha256').update(packageLock).digest('hex'), '49c3b1f37e957b7961825b121bbddb26d8e674c7e2efcb2ab29249c2891d4e56');
});
