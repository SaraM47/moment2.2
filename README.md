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

## 3. API Endpoints

| Metod  | Endpoint         | Body (JSON)                                              | Headers                                   | Beskrivning                              |
|--------|------------------|-----------------------------------------------------------|---------------------------------------------|-------------------------------------------|
| GET    | /movies          | Nej                                                      | Nej                                         | Hämtar alla filmer                        |
| GET    | /movies/:id      | Nej                                                      | Nej                                         | Hämtar en specifik film via ID            |
| POST   | /movies          | title, studio, releaseYear, rating, animated             | "Content-Type": "application/json"          | Skapar en ny film                         |
| PUT    | /movies/:id      | title, studio, releaseYear, rating, animated             | "Content-Type": "application/json"          | Uppdaterar en befintlig film via ID       |
| DELETE | /movies/:id      | Nej                                                      | Nej                                         | Raderar en film via ID                    |


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
