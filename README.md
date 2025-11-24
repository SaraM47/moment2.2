# Movie Collection API – Fastify + MongoDB Atlas

Detta delmoment utvecklat som del av Laboration 2.2 i kursen DT193G och är en REST-baserad webbtjänst byggd med backend-ramverket Fastify, MongoDB Atlas och Mongoose. Detta hanterar en filmsamling med fokus på animerade filmer från exempelvis Studio Ghibli, Pixar, DreamWorks och Sony Animation. API:t erbjuder full CRUD-funktionalitet, tydlig validering och felmeddelanden.

---

## 1. Funktionalitet

hantera poster i en filmsamling. Du kan hämta alla filmer, film via ID, skapa ny fil, uppdatera och radera film. All data returneras i JSON-format. Validering utförs innan lagring.

---

## 2. Databasmodell (Movie)

Mongoose-modellen finns i `models/movie.model.js`.

| Fält        | Typ     | Krävs | Beskrivning            |
| ----------- | ------- | ----- | ---------------------- |
| title       | String  | Ja    | Namn på filmen         |
| studio      | String  | Ja    | Filmstudio             |
| releaseYear | Number  | Ja    | Utgivningsår 1900–2100 |
| rating      | Number  | Ja    | Betyg från 0 till 10   |
| animated    | Boolean | Ja    | Om filmen är animerad  |

---

### Exempel på en film

````json
{
  "title": "Spirited Away",
  "studio": "Studio Ghibli",
  "releaseYear": 2001,
  "rating": 10,
  "animated": true
}
````
---

## 3. API Endpoints

| Metod | Endpoint         | Beskrivning                         | Body krävs | 
|-------|------------------|--------------------------------------|------------
| GET   | /movies          | Hämtar alla filmer                   | Nej       |
| GET   | /movies/:id      | Hämtar en specifik film via ID       | Nej       |
| POST  | /movies          | Skapar en ny film                    | Ja        |
| PUT   | /movies/:id      | Uppdaterar en befintlig film         | Ja        |
| DELETE| /movies/:id      | Raderar en film via ID               | Nej       |


### Exempel på POST-body

```json
{
  "title": "Inside Out",
  "studio": "Pixar",
  "releaseYear": 2015,
  "rating": 9,
  "animated": true
}
````
