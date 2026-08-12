# STYLEGUIDE — soudni-anglictina.cz

Verze: 1.2 · Datum: 9. 8. 2026 · Autor: Matěj Boška
Klient: Mgr. Daniela Vránová · Domény: soudni-anglictina.cz, czech-translator.eu
Nabídka: CN-2026-014

---

## 0. Designová teze (proč web vypadá takhle)

Web neprodává překlad. Prodává jistotu, že dokument projde na úřadě napoprvé.

Návštěvník přichází v momentě, kdy řeší svatbu s cizincem, nostrifikaci diplomu, pobyt nebo soudní spor. Je ve stresu a nezná pravidla. Design proto musí být klidný, čitelný a rychle zodpovědět tři otázky: co to stojí, jak dlouho to trvá, a jestli té paní může věřit.

**Signature prvek: pečeť.** Kulaté razítko soudního tlumočníka je jediný artefakt, který v tomhle oboru existuje a nikde jinde ne. Používá se jako tenký kruhový outline s textem po obvodu (badge u ověřených služeb, watermark v pozadí sekce cen, ikonický prvek v hero). Je to zároveň doporučený směr loga: silueta vrány uvnitř kruhového razítka spojí příjmení klientky s podstatou služby. Veškerá odvaha designu se utrácí tady. Zbytek je disciplinovaný a tichý.

Riziko, které beru vědomě: display font je serif s vysokým kontrastem. U "moderního webu" je reflex sáhnout po sansu, ale předmět podnikání je psané slovo a úřední dokument. Serif to říká dřív, než člověk přečte první větu. Playfair je přitom rozšířený font, takže veškerá odlišnost musí přijít z disciplíny jeho použití (jediná váha, velké velikosti, stažené prostrkání) a ze signature prvku, ne ze samotného výběru písma.

---

## 1. Brand základ

- **Název:** Překlady Vránová (Mgr. Daniela Vránová)
- **Tagline:** Soudní překlady a tlumočení z angličtiny. Praha, od roku 2003.
  Alternativa pro hero: "Dokumenty, které úřad přijme napoprvé." (návrh, k odsouhlasení klientkou)
- **Osobnost značky:** precizní, klidná, zkušená, lidská, věcná
- **Tone of voice:** vykání, první osoba jednotného čísla ("překládám", "ověřuji", nikdy "náš tým"). Krátké věty. Konkrétní čísla a termíny místo přídavných jmen. Nulový právnický žargon, protože klient ho neumí. Nic se neomlouvá a nic se nepřehání.
- **Klíčový pocit z webu v první vteřině:** "Tady je konečně někdo, kdo mi to vysvětlí a nezkomplikuje mi to."

**Zakázaná slovní zásoba:** komplexní řešení, individuální přístup, tým profesionálů, kvalita je naše priorita, těšíme se na spolupráci. Také nikde neuvádět členství v JTP (klientka již není členkou). Uvádí se výhradně: soudní tlumočnice jmenovaná soudem, členka Komory soudních tlumočníků ČR.

**Povinné pojmenování služeb:** listinný (svázaný) překlad a digitální (elektronicky ověřený) překlad jako dvě rovnocenné, jasně oddělené varianty. První kontakt se nikdy nejmenuje "Konzultace", vždy "Nezávazné nacenění (zdarma)". Překlady knih a literatury se na webu nevyskytují.

---

## 2. Logo

- **Primární varianta:** horizontální lockup, značka (kruhová pečeť s vránou) vlevo, dvouřádkový wordmark "PŘEKLADY / VRÁNOVÁ" vpravo, wordmark sázený v Playfair Display 500, verzálky, letter-spacing +6 %.
- **Sekundární / favicon:** samotná značka v kruhu, bez textu. Favicon 32 × 32 a 180 × 180 (apple-touch), na plné modré ploše `--accent` s bílou kresbou, aby byla čitelná na tmavém i světlém pozadí prohlížeče.
- **Ochranná zóna:** minimálně výška písmene "V" z wordmarku ze všech čtyř stran. Do zóny nesmí zasahovat text, obrázek ani hrana sekce.
- **Minimální velikost:** 140 px šířky u horizontálního lockupu, 28 px u samotné značky. Pod 140 px se vždy použije samotná značka.
- **Zakázané použití:** deformace poměru stran, stín, záře, obrys, gradient, otočení, rozklad na jednotlivé prvky, barvy mimo paletu, umístění na neklidnou fotografii bez podkladové plochy, přebarvení vrány na jinou barvu než `--ink`, `--accent` nebo bílou.
- **Barevné varianty (dodávka dle nabídky):** plná barevná, samostatný symbol, jednobarevná černá, jednobarevná bílá, zmenšená varianta pro malé velikosti, PNG s průhledností, vektory SVG a PDF, přehled HEX a CMYK pro tiskárnu.
- **Doporučený směr redesignu (návrh k odsouhlasení):** zachovat vránu, ale převést ji z ostré siluety na kresbu s jemnou texturou (rytina, hlubotisk), vsadit do tenkého kruhu s letterspaced textem po obvodu ve stylu úředního razítka. Stávající modrý čtverec a černý pruh odstranit, protože rozdělují logo na dva nesouvisející bloky a v malých velikostech se slévají.

---

## 3. Barvy (role, ne jen hexy)

| Role | HEX | Použití |
|---|---|---|
| Background | `#FFFFFF` | hlavní podklad, výchozí stav |
| Background alt | `#F4F7FB` | střídání sekcí, ceník, FAQ, klidové plochy |
| Background deep | `#0B1F3A` | overlay na hero videu, jedna kontrastní sekce, footer |
| Surface | `#FFFFFF` | karty, sticky header po scrollu, formulář |
| Border | `#E3E9F2` | hranice karet, oddělovače, tabulky |
| Border strong | `#CBD5E4` | inputy, sekundární tlačítko |
| Ink / Text primary | `#0C1626` | nadpisy a body text |
| Text secondary | `#55627A` | perex, popisky karet, dlouhé odstavce |
| Text muted | `#6B7789` | captions, metadata, popisky pod formulářem |
| Accent | `#0B57D0` | CTA, odkazy, aktivní stav, jediná akční barva |
| Accent hover | `#0A47A8` | hover a active stav accentu |
| Accent soft | `#E7EFFD` | podklad badge, zvýrazněný řádek v ceníku, ikonové plochy |
| Accent ink | `#083A8C` | text na `accent soft` |
| Sky (z loga) | `#29ABE2` | maximálně 5 % plochy: gradient na videu, hairline pod eyebrow, hover na ikoně. Nikdy jako barva tlačítka ani textu. |

**Inverzní sada (na `background deep`):**
text primary `#FFFFFF`, text secondary `#A9BBD4`, border `rgba(255,255,255,0.14)`, accent `#7FB0FF` (světlejší varianta, aby prošla kontrastem na navy).

**Feedback:** success `#067647` · warning `#B54708` · error `#B42318`. Používají se výhradně ve formuláři a v systémových hláškách, nikdy v marketingovém obsahu.

**Pravidlo kontrastu:** každý text minimálně WCAG AA 4.5 : 1. Ověřeno: `accent` na bílé 6,1 : 1, `text secondary` na bílé 6,2 : 1, bílá na `background deep` 15,8 : 1. Text přes video vždy leží na gradientovém overlay `linear-gradient(180deg, rgba(11,31,58,0.78), rgba(11,31,58,0.55))`, který drží minimálně 4,5 : 1 i na nejsvětlejším snímku.

**Rytmus sekcí:** bílá → světlá → bílá → navy → bílá. Navy se na stránce objeví maximálně dvakrát včetně footeru, jinak ztratí váhu.

---

## 4. Typografie

**Dva fonty, ne tři.** Utility roli (štítky, ceny, termíny) zvládne DM Sans Medium verzálkami s letter-spacingem, takže mono font je zbytečný. Méně souborů znamená rychlejší načtení, které je v nabídce garantované.

- **Display font: Playfair Display** (Claus Eggers Sørensen). Hero, H1, H2, pull quote. Nic jiného.
  Transitional serif s vysokým kontrastem, který dává nadpisům editorial váhu a odlišuje web od šablonových překladatelských stránek sázených systémovým Arialem.
- **Text font: DM Sans.** Body, UI, navigace, tlačítka, perex, štítky, ceny.
  Geometrický grotesk s otevřenými tvary a velkým x-heightem. Čitelný v dlouhém textu i v malých velikostech na mobilu.

**Licence:** obě písma jsou pod SIL Open Font License a jsou zdarma i pro komerční použití. Náklad projektu 0 Kč, klientka neřeší žádnou licenci a při případném převodu webu jinam nevzniká problém. Pro produkci se doporučuje self-hostovat woff2 subsetovaný na latin-ext místo načítání z Google CDN, kvůli rychlosti a GDPR.

Obě písma mají plnou českou diakritiku včetně ř, ě, ů, č, š, ž. Ověřeno před zařazením do systému.

### Pravidla pro Playfair, tohle je nejdůležitější část celé sekce

Playfair je nejrozšířenější „elegantní" serif na webu. Aby web nevypadal jako každá druhá šablona, používá se disciplinovaně:

- **Váha výhradně 400.** Na tmavém navy pozadí 500, protože tenké vlasové tahy by se jinak ztratily. Váha 600 a výš je zakázaná. Velký bold Playfair vypadá jako svatební oznámení, ne jako soudní tlumočník.
- **Minimální velikost 20 px.** Pod touto hranicí se vysoký kontrast rozpadá a text šedne. H3 proto jede v DM Sans, ne v Playfairu.
- **Letter-spacing −0,02em** u display a H2. Playfair má od přírody rozvolněné prostrkání a bez stažení působí měkce a nejistě.
- **Kurzíva pouze v pull quote.** Jedno místo na stránku, nikde jinde.
- **Nikdy** v běžném textu, tlačítku, navigaci, formuláři ani ceníku.

### České háčky, konkrétní past

Line-height nesmí klesnout pod 1,08 u display a 1,12 u H2. Háčky nad velkými Ř, Č, Š a Ž jsou v Playfairu vysoké a při těsnějším řádkování se u víceřádkových nadpisů sekají s dolními dotahy předchozího řádku. V anglické verzi problém nenastane, v české ano, proto se hodnota drží v obou mutacích stejná.

### Škála (fluid, poměr 1,25 na mobilu a 1,333 na desktopu)

| Role | Velikost | Line-height | Řez |
|---|---|---|---|
| Display (hero) | `clamp(40px, 6vw, 76px)` | 1,08 | Playfair Display 400 (na navy 500) |
| H1 (podstránky) | `clamp(34px, 4.6vw, 56px)` | 1,12 | Playfair Display 400 |
| H2 | `clamp(28px, 3.4vw, 44px)` | 1,18 | Playfair Display 400 |
| H3 | `clamp(20px, 2vw, 26px)` | 1,3 | DM Sans 700 |
| Body L (perex) | 19 px | 1,6 | DM Sans 400 |
| Body | 16 px | 1,65 | DM Sans 400 |
| Small | 14 px | 1,55 | DM Sans 400 |
| Caption / eyebrow | 12 px | 1,4 | DM Sans 500, verzálky |
| Pull quote | = H3 | 1,4 | Playfair Display 400 italic |

**Letter-spacing:** display a H1 až H2 `-0.02em` · H3 `-0.015em` · body `0` · eyebrow a štítky `+0.1em`.

**Povolené řezy:** Playfair Display 400 a 500, kurzíva 400 pouze v pull quote. DM Sans 400, 500, 700. Nic jiného.

**Číslice v ceníku:** DM Sans nemá spolehlivé tabulární číslice ve všech řezech. Sloupec cen se proto zarovnává pevnou šířkou 8,5 rem doprava, nikoli pouze přes `font-variant-numeric: tabular-nums`. Bez toho ceny „tancují" a tabulka vypadá amatérsky.

**Délka řádku:** body maximálně 68 znaků (`max-width: 68ch`), perex maximálně 58 znaků. Text se nikdy nesází na plnou šířku kontejneru.

**Dvojjazyčnost:** anglická verze používá stejnou škálu. Nadpisy se nepřelamují ručně, ale přes `text-wrap: balance`.

## 5. Grid & spacing

- **Návrhová šířka:** 1440 px
- **Max-width kontejneru:** 1240 px · úzký textový sloupec 720 px · full-bleed pro hero a video
- **Sloupce:** 12 · **Gutter:** 24 px · **Okraj stránky:** 20 px mobil, 40 px tablet, 80 px desktop
- **Spacing škála (base 4):** 4, 8, 12, 16, 24, 32, 48, 64, 96, 128, 160
- **Vertikální rytmus sekcí:** 96 px mobil, 128 px tablet, 160 px desktop. Mezi souvisejícími bloky uvnitř sekce 48 px, mezi nadpisem a obsahem 32 px.
- **Výška headeru:** 80 px výchozí, 64 px po scrollu (sticky, plynulá změna)
- **Breakpointy:** 480 (small) · 768 (tablet) · 1024 (laptop) · 1280 (desktop)
- **Asymetrie:** sekce Služby a O mně používají rozdělení 5/7 sloupců (nadpis vlevo, obsah vpravo) po vzoru editorial layoutu. Nikdy 6/6, které působí staticky.

---

## 6. Komponenty

**Primární tlačítko**
bg `--accent`, text bílá, výška 52 px (48 px mobil), padding `0 28px`, radius 8 px, font Plus Jakarta Sans 600 / 15 px, hover `--accent-hover` + posun `translateY(-1px)`, active bez posunu, focus-visible outline 2 px `--accent` s offsetem 3 px.

**Sekundární tlačítko**
bg transparent, border 1 px `--border-strong`, text `--ink`, stejná výška a radius, hover border `--accent` a text `--accent`. Na navy pozadí border `rgba(255,255,255,0.28)` a text bílá.

**Textový odkaz**
barva `--accent`, podtržení `1px` s offsetem 3 px, hover `--accent-hover` a plné podtržení. V body textu se odkazy nikdy neodlišují jen barvou.

**Input a textarea**
výška 52 px (textarea min 140 px), padding `14px 16px`, radius 8 px, border 1 px `--border-strong`, bg bílá, placeholder `--ink-muted`, focus border `--accent` + ring `0 0 0 3px rgba(11,87,208,0.14)`, error border `--error` a hláška 14 px pod polem. Label vždy nad polem, nikdy jen placeholder.

**Karta (služba, FAQ, reference)**
padding 32 px (24 px mobil), bg `--surface`, border 1 px `--border`, radius 12 px, bez stínu. Hover pouze u klikatelných karet: border `--accent` a posun `-2px`. Ikona 28 px nahoře, nadpis H3, popis Body, volitelný odkaz dole.

**Badge / tag (pečeť)**
IBM Plex Mono 500 / 12 px, verzálky, letter-spacing +0,08em, padding `6px 12px`, radius 999 px, bg `--accent-soft`, text `--accent-ink`. Varianta "ověřeno" nese vlevo 14px ikonu razítka.

**Ceníkový řádek**
dvousloupcový: název služby vlevo (Body 16 px), cena vpravo (IBM Plex Mono 500 / 16 px). Oddělovač 1 px `--border`. Zvýrazněný řádek má bg `--accent-soft`. Cena vždy s jednotkou (normostrana, hodina, půlden) a orientační termín ve `Small` pod názvem.

**Navigace**
Logo vlevo, menu vpravo, přepínač CZ / EN, primární CTA "Nezávazné nacenění (zdarma)". Nad hero je header průhledný s bílým textem, po odscrollování 40 px přepne na `--surface`, ink text a `border-bottom` 1 px `--border`. Mobil: full-screen overlay menu, položky Display 28 px, CTA přes celou šířku dole.

**Footer**
bg `--background-deep`. Čtyři sloupce: (1) logo v bílé variantě, jedna věta pozice, telefon a e-mail jako klikatelné odkazy; (2) Služby; (3) Informace, tedy ceník, FAQ, ochrana osobních údajů; (4) Kvalifikace, tedy soudní tlumočnice jmenovaná soudem a členka Komory soudních tlumočníků ČR. Spodní řádek: copyright, obě domény, odkaz na zásady zpracování osobních údajů.

---

## 7. Obrazový jazyk

- **Poměry stran:** hero video 16 : 9 (full-bleed, `object-fit: cover`) · portrét klientky 4 : 5 · sekce a služby 3 : 2 · thumbnail 1 : 1
- **Styl fotek:** portréty klientky černobíle nebo silně desaturované, přirozené světlo, tmavé neutrální pozadí (přímá inspirace referencí kolarova.legal). Detailové záběry dokumentární: razítko, podpis, svázaný překlad s šňůrkou, papír, ruce. Nikdy stock s úsměvem u notebooku, nikdy vlajky UK a USA jako ikony jazyků, nikdy fotky s viditelnými cizími obličeji.
- **Video v hero:** royalty free klipy bez obličejů (Pexels, Pixabay), zpomalené, desaturované, s navy overlay. Cílové vlastní záběry k pozdější výměně: paternoster, podepisování, razítkování. Video je `muted`, `loop`, `playsinline`, s poster obrázkem a fallbackem na statickou fotku pod 768 px a při `prefers-reduced-motion`.
- **Radius obrázků:** 12 px (shodně s kartou). Hero a full-bleed pásy bez radiusu.
- **Ikony:** Lucide, stroke 1,5 px, velikost 24 px v UI a 28 px v kartách, barva `--accent` nebo `--ink`. Nikdy vyplněné ikony, nikdy dva různé sety.

---

## 7b. Vrána jako custom prvek

Vrána je značka i strukturní prvek. Kreslí se jedním tahem, aby fungovala od 16px favikony po tisk na vizitce. Používá se **přesně na třech místech**, čtvrté je už dekorace.

**A · Oddělovač sekcí.** Tenká linka mezi sekcemi se uprostřed zvedne do dvou křídel. Dělá práci oddělovače a zároveň nese značku, takže to není prvek navíc. Stroke 1,5 px v `--accent`.

**B · Značka v pečeti.** Kruhové razítko s letterspaced textem po obvodu, uvnitř jednotahová vrána. Logo, favicon, razítko u ověřených položek v ceníku.

**C · Kresba v hero.** Tah se vykreslí jednou při načtení stránky přes `stroke-dasharray`, 900 ms, easing `--ease-enter`, pak se už nehýbe. Je to jediná animace tohoto typu na celém webu, proto funguje. Při `prefers-reduced-motion` se vykreslí rovnou hotová.

**Zakázáno:** vrána letící přes stránku při scrollu, vrána jako kurzor, vrána v každé kartě, vrána otočená, vyplněná nebo v jiné barvě než `--accent`, `--ink` a bílá, vrána a pečeť současně v jednom bloku.

**Poznámka k současnému logu:** silueta ve stávající značce je siluetou racka, ne vrány. Rozpětí a ostrý úhel křídel odpovídají mořskému ptáku; vrána má kratší zaoblená křídla a klínovitý ocas. Je to konkrétní, obhajitelný argument pro redesign, který se klientce vysvětluje mnohem lépe než „upravíme písmo“.

## 8. Motion

- **Easing:** vstupy a scroll reveal `cubic-bezier(0.22, 1, 0.36, 1)` · micro interakce `cubic-bezier(0.4, 0, 0.2, 1)`
- **Durations:** micro 150 ms · standard 320 ms · page 480 ms
- **Co se animuje:** jednorázová kresba vrány v hero (900 ms, jen při načtení); hover na tlačítkách, kartách a odkazech; scroll reveal (opacita 0 až 1 a posun 8 px nahoru, spouští se jednou, stagger 60 ms); přepnutí headeru po scrollu; velmi pomalý ken burns na hero videu (scale 1,0 až 1,06 přes 20 s); otevírání FAQ akordeonu.
- **Co se NEanimuje:** běžný text během čtení, ceny a čísla (žádné počítadla), layout, který by způsobil posun obsahu, žádný parallax na textu, žádné rotující nebo poskakující ikony.
- **prefers-reduced-motion:** video se zastaví a nahradí posterem, scroll reveal se vypne, zůstávají jen změny barvy.

---

## 9. Pravidla (do & don't)

1. Žádné barvy mimo paletu. Sky `#29ABE2` maximálně na 5 % plochy a nikdy na textu ani tlačítku.
2. Žádné hodnoty mimo spacing škálu. Když hodnota nesedí, mění se layout, ne číslo.
3. Jedno primární CTA na sekci a jedna accent barva na obrazovce. Dvě modrá tlačítka vedle sebe znamenají, že jedno z nich je sekundární.
4. Na webu jsou pouze dva fonty. Playfair výhradně na nadpisy a pull quote, ve váze 400 (na navy 500), nikdy pod 20 px, nikdy 600+.
5. Každý text přes fotku nebo video leží na overlay s kontrastem minimálně 4,5 : 1. Bez výjimky.
6. Web musí odpovědět na cenu a termín dřív, než uživatel klikne na kontakt. Kontaktní formulář není náhrada za chybějící informaci.
7. Nikde se neuvádí členství v JTP a nikde se nenabízí překlad knih a literatury.
8. Listinný a digitální ověřený překlad se vždy zobrazují jako dvě samostatné, rovnocenné varianty se samostatnou cenou a termínem.
9. První kontakt se vždy jmenuje "Nezávazné nacenění (zdarma)", nikdy "Konzultace".
10. Obě jazykové mutace mají shodnou strukturu a shodné komponenty. Anglická verze není zkrácená.
11. Vrána jen na třech místech: pečeť, oddělovač, hero. Čtvrté použití je dekorace a ruší se.
12. Nulové rozostření, žádné glassmorphism panely, žádné gradientové nadpisy, žádné dekorativní blur koule v pozadí. Jedna vědomá výjimka: rám kontaktního formuláře v sekci Kontakt nese liquid glass efekt (`backdrop-blur`, poloprůhledné bílé pozadí, jemný okrajový highlight) — schváleno zadáním, nerozšiřovat na další prvky.
13. Kvalitativní minimum: responzivita do 360 px, viditelný focus na každém interaktivním prvku, ovládání klávesnicí, načtení pod dvě sekundy dle nabídky.
