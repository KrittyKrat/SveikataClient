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

## API specifikacija

API metodai bus aprašomi lentelėmis, kuriose bus nurodyta: pasirinktas metodas, aprašymas,  jo route, užklausa, atsakymas, atsakymo kodas, galimi klaidos kodai.

### Institucijos:

Metodas	GET Institutions
Aprašymas	Gauna visas institucija
Route	/api/institutions
Užklausa	-
Atsakymas	[
    {
        "_id": "6343cda07a8b2ede16c0f485",
        "name": "Kalnieciai",
        "adress": "Savanoriu g. 55",
        "__v": 0
    },
    {
        "_id": "6343cdf47a8b2ede16c0f48a",
        "name": "Kauno klinikos",
        "adress": "Vilniaus g. 5",
        "__v": 0
    },
    {
        "_id": "6343ce1a7a8b2ede16c0f48c",
        "name": "Dainavos poliklinika",
        "adress": "Barausko g. 31",
        "__v": 0
    }
]
Atsakymo kodas	200 - OK
Atsakymo klaidos	500 – problema su duomenų baze

Metodas	GET Institution
Aprašymas	Gauna veiną instituciją
Route	/api/institutions/:id
Užklausa	-
Atsakymas	{
    "name": "Šiaulių ligoninė",
    "adress": "Petro g. 101",
    "_id": "6394d1de1ad40923e55c3335",
    "__v": 0
}
Atsakymo kodas	200 - OK
Atsakymo klaidos	500 – problema su duomenų baze
404 – institucija neegzistuoja

Metodas	POST Institution
Aprašymas	Sukuria naują instituciją
Route	/api/institutions
Užklausa	{
    "name": "Kalnieciai ",
    "adress": " Savanoriu g. 55"
}
Atsakymas	{
    "_id": "6343cda07a8b2ede16c0f485",
    "name": "Kalnieciai",
    "adress": "Savanoriu g. 55",
    "__v": 0
}
Atsakymo kodas	201 - CREATED
Atsakymo klaidos	500 – problema su duomenų baze
400 – bloga užklausa
401 – JWT žetonas neteisingas
403 – neleidžiamas priėjimas

Metodas	PUT Institution
Aprašymas	Atnaujina instituciją
Route	/api/institutions/:id
Užklausa	{
    "name": "Telšių ligoninė",
    "adress": "Petro g. 101"
}
Atsakymas	{
    "_id": "6394d1de1ad40923e55c3335",
    "name": "Telšių ligoninė",
    "adress": "Petro g. 101",
    "__v": 0
}
Atsakymo kodas	200 - OK
Atsakymo klaidos	500 – problema su duomenų baze
400 – bloga užklausa
401 – JWT žetonas neteisingas
403 – neleidžiamas priėjimas
404 – institucija neegzistuoja

Metodas	DELETE Institution
Aprašymas	Naikina instituciją
Route	/api/institutions/:id
Užklausa	-
Atsakymas	{
    "message": "Institution deleted"
}
Atsakymo kodas	200 - OK
Atsakymo klaidos	500 – problema su duomenų baze
401 – JWT žetonas neteisingas
403 – neleidžiamas priėjimas
404 – institucija neegzistuoja

### Sektoriai:

Metodas	GET Departments
Aprašymas	Gauna visus departamentus
Route	/api/departments
Užklausa	-
Atsakymas	[
    {
        "_id": "6343ce527a8b2ede16c0f48f",
        "name": "Odontologijos sektorius",
        "description": "Dantim seni",
        "institutionID": "6343ce1a7a8b2ede16c0f48c",
        "__v": 0
    },
    {
        "_id": "6343ce6f7a8b2ede16c0f491",
        "name": "Kinizeterapijos vieta",
        "description": "Raumenai stipriai eina",
        "institutionID": "6343ce1a7a8b2ede16c0f48c",
        "__v": 0
    },
    {
        "_id": "6343cead7a8b2ede16c0f493",
        "name": "Seimos",
        "description": "Visai seimai",
        "institutionID": "6343cda07a8b2ede16c0f485",
        "__v": 0
    }
]
Atsakymo kodas	200 - OK
Atsakymo klaidos	500 – problema su duomenų baze

Metodas	GET Departments
Aprašymas	Gauna visus departamentus tam tikroje institucijoje
Route	/api/institutions/:id/departments
Užklausa	-
Atsakymas	[
    {
        "_id": "6343ce527a8b2ede16c0f48f",
        "name": "Odontologijos sektorius",
        "description": "Dantim seni",
        "institutionID": "6343ce1a7a8b2ede16c0f48c",
        "__v": 0
    },
    {
        "_id": "6343ce6f7a8b2ede16c0f491",
        "name": "Kinizeterapijos vieta",
        "description": "Raumenai stipriai eina",
        "institutionID": "6343ce1a7a8b2ede16c0f48c",
        "__v": 0
    }
]

Atsakymo kodas	200 - OK
Atsakymo klaidos	500 – problema su duomenų baze

Metodas	GET Department
Aprašymas	Gauna veiną sektorių iš institucijos
Route	/api/institutions/:id/departments/:id
Užklausa	
Atsakymas	{
    "_id": "6343ce527a8b2ede16c0f48f",
    "name": "Odontologijos sektorius",
    "description": "Dantim seni",
    "institutionID": "6343ce1a7a8b2ede16c0f48c",
    "__v": 0
}
Atsakymo kodas	200 - OK
Atsakymo klaidos	500 – problema su duomenų baze
404 – sektorius neegzistuoja

Metodas	POST Department
Aprašymas	Sukuria naują sektorių institucijoje
Route	/api/institutions/:id/departments
Užklausa	{
    "name": "Kardiologija",
    "description": "Not actualy cardio"
}
Atsakymas	{
    "name": "Kardiologija",
    "description": "Not actualy cardio",
    "institutionID": "6343ce1a7a8b2ede16c0f48c",
    "_id": "639612ca968a1fa3717d4e45",
    "__v": 0
}
Atsakymo kodas	201 - CREATED
Atsakymo klaidos	500 – problema su duomenų baze
400 – bloga užklausa
401 – JWT žetonas neteisingas
403 – neleidžiamas priėjimas

Metodas	PUT Department
Aprašymas	Atnaujina instituciją
Route	/api/institutions/:id
Užklausa	{
    "name": "Kardiologija",
    "description": "Or is it"
}
Atsakymas	{
    "_id": "639612ca968a1fa3717d4e45",
    "name": "Kardiologija",
    "description": "Or is it",
    "institutionID": "6343ce1a7a8b2ede16c0f48c",
    "__v": 0
}
Atsakymo kodas	200 - OK
Atsakymo klaidos	500 – problema su duomenų baze
400 – bloga užklausa
401 – JWT žetonas neteisingas
403 – neleidžiamas priėjimas
404 – sektorius neegzistuoja

Metodas	DELETE Department
Aprašymas	Naikina sektorių institucijoje
Route	/api/institutions/:id/departments/:id
Užklausa	-
Atsakymas	{
    "message": "Department deleted"
}
Atsakymo kodas	200 - OK
Atsakymo klaidos	500 – problema su duomenų baze
401 – JWT žetonas neteisingas
403 – neleidžiamas priėjimas
404 – sektorius neegzistuoja

### Specialistai:

Metodas	GET Specialists
Aprašymas	Gauna visus specialistus
Route	/api/specialists
Užklausa	-
Atsakymas	[
    {
        "_id": "6343cee87a8b2ede16c0f496",
        "name": "Brad",
        "surname": "Pitt",
        "age": 34,
        "departmentID": "6343ce527a8b2ede16c0f48f",
        "__v": 0
    },
    {
        "_id": "6343cf007a8b2ede16c0f498",
        "name": "Jason",
        "surname": "Woodman",
        "age": 41,
        "departmentID": "6343ce527a8b2ede16c0f48f",
        "__v": 0
    },
    {
        "_id": "6343cf547a8b2ede16c0f49a",
        "name": "Gordon",
        "surname": "Freeman",
        "age": 27,
        "departmentID": "6343ce6f7a8b2ede16c0f491",
        "__v": 0
    },
    {
        "_id": "6343cf7e7a8b2ede16c0f49c",
        "name": "Joe",
        "surname": "Mamas",
        "age": 54,
        "departmentID": "6343ce6f7a8b2ede16c0f491",
        "__v": 0
    },
    {
        "_id": "6396111f9e5cfd943ce0fe3b",
        "name": "Petras",
        "surname": "Jahunas",
        "age": 32,
        "departmentID": "6343cead7a8b2ede16c0f493",
        "__v": 0
    }
]
Atsakymo kodas	200 - OK
Atsakymo klaidos	500 – problema su duomenų baze

Metodas	GET Specialists
Aprašymas	Gauna visus specialistus tam tikrame sektoriuje
Route	/api/institutions/:id/departments/:id/specialists
Užklausa	-
Atsakymas	[
    {
        "_id": "6343cee87a8b2ede16c0f496",
        "name": "Brad",
        "surname": "Pitt",
        "age": 34,
        "departmentID": "6343ce527a8b2ede16c0f48f",
        "__v": 0
    },
    {
        "_id": "6343cf007a8b2ede16c0f498",
        "name": "Jason",
        "surname": "Woodman",
        "age": 41,
        "departmentID": "6343ce527a8b2ede16c0f48f",
        "__v": 0
    }
]
Atsakymo kodas	200 - OK
Atsakymo klaidos	500 – problema su duomenų baze

Metodas	GET Specialist
Aprašymas	Gauna vieną specialistą iš institucijos
Route	/api/institutions/:id/departments/:id/specialists/:id
Užklausa	-
Atsakymas	{
    "_id": "6343cee87a8b2ede16c0f496",
    "name": "Brad",
    "surname": "Pitt",
    "age": 34,
    "departmentID": "6343ce527a8b2ede16c0f48f",
    "__v": 0
}
Atsakymo kodas	200 - OK
Atsakymo klaidos	500 – problema su duomenų baze
404 – specialistas neegzistuoja

Metodas	POST Specialist
Aprašymas	Sukuria naują specialistą sektoriuje
Route	/api/institutions/:id/departments/:id/specialists
Užklausa	{
    "name": "Crane",
    "surname": "Brody",
    "age": "23"
}
Atsakymas	{
    "name": "Crane",
    "surname": "Brody",
    "age": 23,
    "departmentID": "6343ce527a8b2ede16c0f48f",
    "_id": "63961541968a1fa3717d4e5e",
    "__v": 0
}
Atsakymo kodas	201 - CREATED
Atsakymo klaidos	500 – problema su duomenų baze
400 – bloga užklausa
401 – JWT žetonas neteisingas
403 – neleidžiamas priėjimas

Metodas	PATCH Specialist
Aprašymas	Atnaujina specailistą sektoriuje
Route	/api/institutions/:id/departments/:id/specialists/:id
Užklausa	{
    "name": "Crane",
    "surname": "Drodey",
    "age": "40"
}
Atsakymas	{
    "_id": "63961541968a1fa3717d4e5e",
    "name": "Crane",
    "surname": "Drodey",
    "age": 40,
    "departmentID": "6343ce527a8b2ede16c0f48f",
    "__v": 0
}
Atsakymo kodas	200 - OK
Atsakymo klaidos	500 – problema su duomenų baze
400 – bloga užklausa
401 – JWT žetonas neteisingas
403 – neleidžiamas priėjimas
404 – specialistas neegzistuoja

Metodas	DELETE Specialist
Aprašymas	Naikina specialistą sektoriuje
Route	/api/institutions/:id/departments/:id/specialists/:id
Užklausa	-
Atsakymas	{
    "message": "Specialist deleted"
}
Atsakymo kodas	200 - OK
Atsakymo klaidos	500 – problema su duomenų baze
401 – JWT žetonas neteisingas
403 – neleidžiamas priėjimas
404 – specialistas neegzistuoja

### Vizitai:

Metodas	GET Visits
Aprašymas	Gauna visus vizitus
Route	/api/visits
Užklausa	-
Atsakymas	[
    {
        "_id": "6395e2d39e5cfd943ce0fd78",
        "description": "I want to heal please",
        "userID": "636631dee0314c895e00ae8e",
        "specialistID": "6343cf547a8b2ede16c0f49a",
        "__v": 0
    },
    {
        "_id": "639616469e5cfd943ce0fe63",
        "description": "Add description please",
        "userID": "63933155cc93740844c6cb9f",
        "specialistID": "6343cee87a8b2ede16c0f496",
        "__v": 0
    }
]
Atsakymo kodas	200 - OK
Atsakymo klaidos	500 – problema su duomenų baze

Metodas	GET Visits
Aprašymas	Gauna visus vartotojo vizitus
Route	/api/users/:id/visits
Užklausa	-
Atsakymas	[
    {
        "_id": "6395e2d39e5cfd943ce0fd78",
        "description": "I want to heal please",
        "userID": "636631dee0314c895e00ae8e",
        "specialistID": "6343cf547a8b2ede16c0f49a",
        "__v": 0
    }
]
Atsakymo kodas	200 - OK
Atsakymo klaidos	500 – problema su duomenų baze

Metodas	GET Visit
Aprašymas	Gauna veiną vartotojo vizitą
Route	/api/users/:id/visits/:id
Užklausa	-
Atsakymas	{
    "_id": "6395e2d39e5cfd943ce0fd78",
    "description": "I want to heal please",
    "userID": "636631dee0314c895e00ae8e",
    "specialistID": "6343cf547a8b2ede16c0f49a",
    "__v": 0
}
Atsakymo kodas	200 - OK
Atsakymo klaidos	500 – problema su duomenų baze
404 – vizitas neegzistuoja

Metodas	POST Visit
Aprašymas	Sukuria naują vizitą
Route	/api/users/:id/visits
Užklausa	{
    "description": "Another visit please",
    "specialistID": "6343cf547a8b2ede16c0f49a"
}
Atsakymas	{
    "description": "Another visit please",
    "userID": "636631dee0314c895e00ae8e",
    "specialistID": "6343cf547a8b2ede16c0f49a",
    "_id": "63961853968a1fa3717d4e6d",
    "__v": 0
}
Atsakymo kodas	201 - CREATED
Atsakymo klaidos	500 – problema su duomenų baze
400 – bloga užklausa
401 – JWT žetonas neteisingas
403 – neleidžiamas priėjimas

Metodas	PUT Visit
Aprašymas	Atnaujina vizitą
Route	/api/users/:id/visits/:id
Užklausa	{
    "description": "Or dont",
    "specialistID": "6343cf547a8b2ede16c0f49a"
}
Atsakymas	{
    "_id": "63961853968a1fa3717d4e6d",
    "description": "Or dont",
    "userID": "636631dee0314c895e00ae8e",
    "specialistID": "6343cf547a8b2ede16c0f49a",
    "__v": 0
}
Atsakymo kodas	200 - OK
Atsakymo klaidos	500 – problema su duomenų baze
400 – bloga užklausa
401 – JWT žetonas neteisingas
403 – neleidžiamas priėjimas
404 – vizitas neegzistuoja

Metodas	DELETE Visit
Aprašymas	Naikina vizitą
Route	/api/users/:id/visits/:id
Užklausa	-
Atsakymas	{
    "message": "Visit deleted"
}
Atsakymo kodas	200 - OK
Atsakymo klaidos	500 – problema su duomenų baze
401 – JWT žetonas neteisingas
403 – neleidžiamas priėjimas
404 – vizitas neegzistuoja

### Vartotojai:

Metodas	GET Users
Aprašymas	Gauna visus vartotojus
Route	/api/users
Užklausa	-
Atsakymas	[
    {
        "_id": "636631dee0314c895e00ae8e",
        "username": "matt",
        "password": "$2b$10$NVyJo7swF1v5eREQaCc5tuPEwBdW93wSt80b0lwc0as1qiNrHzu7W",
        "role": "User",
        "__v": 0
    },
    {
        "_id": "636f7aa8ca2d05dfb0d7438e",
        "username": "john",
        "password": "$2b$10$YfXkihln8xV.EMpyknp.6O.7pJZL0.9caTRkf9084F9BZz5OR/6MC",
        "role": "User",
        "__v": 0
    },
    {
        "_id": "636f7c0b68b8eefa7265c065",
        "username": "admin",
        "password": "$2b$10$AS3/AlZmEdAM/C6k5685dunID/PLOiScdStYN./UfGDdD8mZ.L/gu",
        "role": "Admin",
        "__v": 0
    },
    {
        "_id": "6391d6440d9b639d7d1eb61f",
        "username": "jonas",
        "password": "$2b$10$fkPssiALN94v7jhh3LrXU.f24aIyEPevOmkhhVo/Lw/vUiFB7uzOO",
        "role": "User",
        "__v": 0
    },
    {
        "_id": "63933155cc93740844c6cb9f",
        "username": "host",
        "password": "$2b$10$ARTc90Hw65nazpxUTVOlHuLT06q.VvVeM2mZFya74Ef.jxM/8W6Hq",
        "role": "Admin",
        "__v": 0
    }
]
Atsakymo kodas	200 - OK
Atsakymo klaidos	500 – problema su duomenų baze

Metodas	GET User
Aprašymas	Gauna vieną vartotoją
Route	/api/users/:id
Užklausa	-
Atsakymas	{
    "_id": "636631dee0314c895e00ae8e",
    "username": "matt",
    "password": "$2b$10$NVyJo7swF1v5eREQaCc5tuPEwBdW93wSt80b0lwc0as1qiNrHzu7W",
    "role": "User",
    "__v": 0
}
Atsakymo kodas	200 - OK
Atsakymo klaidos	500 – problema su duomenų baze
404 – vartotojas neegzistuoja

Metodas	POST User
Aprašymas	Sukuria naują vartotoją
Route	/api/users/register
Užklausa	{
    "username": "dog201",
    "password": "bones",
    "role": "User"
}
Atsakymas	{
    "username": "dog201",
    "password": "$2b$10$GOo/rzHYlm0MqyhdP/H5a.A9AfF4W61AwKQzK13F1AqTPaWYfbEx2",
    "role": "User",
    "_id": "63961a44968a1fa3717d4e78",
    "__v": 0
}
Atsakymo kodas	201 - CREATED
Atsakymo klaidos	500 – problema su duomenų baze
400 – bloga užklausa
401 – JWT žetonas neteisingas
403 – neleidžiamas priėjimas

### Tokenai:

Metodas	POST Tokens
Aprašymas	Sukuria tokenus ir prijungia vartotoją
Route	/api/tokens/login
Užklausa	{
    "username": "host",
    "password": "host"
}
Atsakymas	{
    "accessToken": "eyJhbGciOiJIUzI1NiIs
InR5cCI6IkpXVCJ9.eyJpZCI6IjYzOTMzMTU1Y2
M5Mzc0MDg0NGM2Y2I5ZiIsInVzZXJuYW1l
IjoiaG9zdCIsInJvbGUiOiJBZG1pbiIsImlhdCI6MTY3
MDc4MTYwNiwiZXhwIjoxNjcwNzgzNDA2f
Q.BDjhPuSPy1LqdcY4Ev_AqhqE8nv_RPToubNsfUbx2gU",
    "refreshToken": "eyJhbGciOiJIU
zI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzOTMzMTU1
Y2M5Mzc0MDg0NGM2Y2I5ZiIsInVzZXJuYW1lIjoiaG9
zdCIsInJvbGUiOiJBZG1pbiIsImlhdC
I6MTY3MDc4MTYwNn0.APD78_kfT-TaJFuAzNqtdO8yVeEdcbQXJE0nZbI351o"
}
Atsakymo kodas	201 - CREATED
Atsakymo klaidos	500 – problema su duomenų baze
400 – bloga užklausa

Metodas	DELETE Tokens
Aprašymas	Sunaikina refresh tokeną ir atjungia vartotoją
Route	/api/tokens/logout
Užklausa	{
    "token" : "eyJhbGciOiJIUzI1Ni
IsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzOTMzMTU1
Y2M5Mzc0MDg0NGM2Y2I5ZiIsInVzZXJuYW1lIjoiaG9zdCIsInJvbGU
iOiJBZG1pbiIsImlhdCI6MTY3MDc4MTYwNn0.APD78_kfT-TaJFuAzN
qtdO8yVeEdcbQXJE0nZbI351o"
}
Atsakymas	{
    "message": "Deleted"
}
Atsakymo kodas	200 - OK
Atsakymo klaidos	500 – problema su duomenų baze
404 – tokenas neegzistuoja

Metodas	PUT Tokens
Aprašymas	Atnaujina refresh tokeną
Route	/api/tokens/logout
Užklausa	{
    "token" : "eyJhbGciOiJIUzI1Ni
IsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzOTMzMTU1
Y2M5Mzc0MDg0NGM2Y2I5ZiIsInVzZXJuYW1lIjoiaG9zdCIsInJvbGU
iOiJBZG1pbiIsImlhdCI6MTY3MDc4MTYwNn0.APD78_kfT-TaJFuAzN
qtdO8yVeEdcbQXJE0nZbI351o"
}

Atsakymas	{
      "refreshToken": "eyJhbGciOiJIUzI1NiIs
InR5cCI6IkpXVCJ9.eyJpZCI6IjYzOTMzMTU1Y2
M5Mzc0MDg0NGM2Y2I5ZiIsInVzZXJuYW1l
IjoiaG9zdCIsInJvbGUiOiJBZG1pbi
IsImlhdCI6MTY3MDc4MjA3M30.m39ZuBvLuLGLRkfJ2v-1Fz7m7Qa6b55yuwqrDVkhek4
"
}
Atsakymo kodas	200 - OK
Atsakymo klaidos	500 – problema su duomenų baze
401 – tokenas neduotas
403 – tokenas netinkamas

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
