# TopGSveikata
 
Projekto tikslas – suteikti galimybę vartotojams susirasti daktarą ir užsiregistruoti vizitui pas jį pasirinktoje sveiktos įstaigoje.
Veikimo principas – pačią kuriamą platformą sudaro dvi dalys: internetinė aplikacija, kuria naudosis vartotojai, administratorius bei aplikacijų programavimo sąsaja.
Lankytojas, norėdamas naudotis šia platforma, turės prisiregistruoti ir užpildyti asmeninius duomenis. Naujas vartotojas gali peržiūrėti sveikatos įstaigų arba specialistų sąrašą. Radęs tinkamą specialistą tinkamoje įstaigoje vartotojas gali užsidresiruoti vizitui užpildęs formą. Administratorius gali valdyti vartotojus, pridėti naujas įstaigas bei daktarus. 

## Funkciniai reikalavimai

Įstaiga -> Skyrius -> Specialistas
Vartotojas -> Vizitas

Neregistruotas sistemos naudotojas galės:
1.	Peržiūrėti platformos reprezentacinį puslapį;
2.	Prisiregistruoti prie internetinės aplikacijos.

Registruotas sistemos vartotojos galės:
1.	Atsijungti nuo internetinės aplikacijos;
2.	Prisijungti (užsiregistruoti) prie platformos;
3.	Peržiūrėti sveikatos įstaigas;
4.	Peržiūrėti sveikatos įstaigos skyrius;
5.	Peržiūrėti skyriuje esančių specialistų sąrašą;
6.	Užsiregistruoti vizitui;
7.	Peržiūrėti savo vizitus;
8.	Atšaukti vizitą;
9.	Redaguoti vizito informaciją;

Administratorius galės:
1.	Pridėti naują sveikatos įstaigą.
2.	Ištrinti sveikatos įstaigą.
3.	Redaguoti sveikatos įstaigą.
4.	Pridėti naują sektorių, kuris randasi įstaigoje.
5.	Ištrinti sektorių.
6.	Redaguoti sektorių.
7.	Pridėti naują specialistą dirbantį sektoriuje.
8.	Ištrinti specialistą.
9.	Redaguoti specialistą.
10.	Peržiūrėti visų vizitus.

## API specifikacija ir realizacija

API metodai bus aprašomi lentelėmis, kuriose bus nurodyta: pasirinktas metodas, aprašymas,  jo route, užklausa, atsakymas, atsakymo kodas, galimi klaidos kodai.
Norint peržiūrėti atskirtai metodus arba puslapio išvaizdą, žiūrėti projekto ataskaitos PDF failą.

## Reikalavimai 0 laboratorinam darbui (atsiskaitymas 2022.09.19 savaitę pagal pasirinktą laiką)
- Projekto pavadinimas;
- Sprendžiamo uždavinio aprašymas
- Sistemos paskirtis
	- Funkciniai reikalavimai
	- Pasirinktų technologijų aprašymas;
- Sistemos architektūra (pakanka UML deployment diagramos)
- Projekto uždavinys turi būti patalpintas projektui sukurtame wiki arba projekto kodo Git saugykloje (.readme).

## Reikalavimai 1 laboratorinam darbui (atsiskaitymas 2022.10.10 savaitę pagal pasirinktą laiką):
- Suprojektuoti ir realizuoti REST principais veikiančią API sąsają. Turi būti realizuoti visi užduotyje numatyti API sąsajos metodai!
- Paruošti programavimo aplinką leidžiančią atsiskaitymo metu patogiai paleisti ir pademonstruoti programą.
- Duomenų saugojimui turi būti panaudotas pasirinktas DB sprendimas. Gynimo metu DB turi būti užpildyta prasmingais (uždavinį atitinkančiais) duomenimis;
- Turi būti galimybė iškviesti sąsajos funkcijas (naudojantis naršykle, Postman ar kitu įrankiu) ir gauti teisingai suformuotą atsakymą: prasmingas turinys, teisingas turinio tipas (json, xml, atom, text ar kt.), teisingas atsako kodas (http reponse code);
- Projekto kodas turi būti laikomas Git saugykloje (github, bitbucket, gitlab ar kt.). Dokumentacija - projektui sukurtame wiki arba projekto kodo Git saugykloje (.readme).

## Reikalavimai 2 laboratorinam darbui (atsiskaitymas 2022.11.07 savaitę pagal pasirinktą laiką):
- Realizuotas produktas turi būti pasiekiamas saityne, tam panaudojant debesų technologijas (AWS, Azure, Google Cloud ir kt.);
- Turi būti realizuota autentifikacja ir autorizacija naudojant OAuth2 arba JWT technologinius sprendimus. Naudotojo rolė turi būti saugoma žetono (token) viduje.  
- Projekto kodas turi būti laikomas Git saugykloje (github, bitbucket, gitlab ar kt.). Dokumentacija - projektui sukurtame wiki arba projekto kodo Git saugykloje (.readme).
- 
## Reikalavimai 3 laboratorinam darbui (atsiskaitymas 2022.12.05 savaitę pagal pasirinktą laiką)
- Naudotojo sąsajos projektas (projektuojamos sąsajos langų wireframeai)
- Sukurti naudotojo sąsajos sprendimą realizuotam REST API
- Responsive layout (bent 1 breakpointas, pvz. ties 768px)
- Images prisitaikymas (max-width taisyklė, kad paveikslėlis mažėtų neišlipdamas iš savo konteinerio elemento)
- Header, Content, Footer srityse stilius turėtų būti skirtingas (specifiškas). Srityse turėtų būti bent po keletą skirtingų elementų. Analogiški elementai skirtingose srityse turėtų įgauti skirtingą išvaizdą.
- Realizuoti informacijos įvedimo sąsają, bent su keletu skirtingų tipų input elementų.
- Panaudoti transitions arba animacijas, pagyvinančius naudotojo sąsają (UI)
- Padarytas responsive meniu (desktop: horizontalūs punktai, mobile: hamburger)
- Panaudoti vektorines ikonas (webfont, svg).
- Panaudotas kitoks šriftas (google fonts arba savo sugeneruotas)
- Panaudoti modalinį langą, kuriame pateikiama aktuali/prasminga informacija.
- Parinkti tarpusavyje besiderinančias spalvas.
- UI elementai negali išsimėtyti, išdėstymas turi paklusti tinklelio horizontalioms ir vertikalioms linijoms.
- Elementų matomumas ir pasiekiamumas neturi būti apsunkintas.
- Įvedimo formos turi būti aiškios ir nuoseklios.
- Naudotojo sąsajos grafinis dizainas turi būti vientisas, atitikti projekto užduotį
- Projekto kodas turi būti laikomas Git saugykloje (github, bitbucket, gitlab ar kt.). Dokumentacija - projektui sukurtame wiki arba projekto kodo Git saugykloje (.readme).
