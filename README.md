# Simple Products API (Node.js + Express)

Mashruucan waa **API fudud** oo lagu dhisay **Node.js** iyo **Express**, kaas oo kuu oggolaanaya inaad maamusho alaabo (Products) adigoo isticmaalaya **CRUD operations** (Create, Read, Update, Delete).

---

## Maxaa uu API-gani qabtaa?

- 📦 Hel dhammaan alaabada (GET)
- ➕ Ku dar alaab cusub (POST)
- ✏️ Wax ka beddel alaab jirta (PUT)
- 🗑️ Tirtir alaab (DELETE)
- 🧪 Route tijaabo ah (GET /test)

---

## Shuruudaha (Requirements)

- Node.js (v18 ama ka sareeya ayaa lagu talinayaa)
- npm (wuxuu la yimaadaa Node.js)

Hubi inaad marka hore ku rakibtay Node.js:

```bash
node -v
npm -v
```

---

## Sida Loo Socodsiiyo Mashruuca

### 1. Clone garee project-ka

```bash
git clone https://github.com/your-username/your-repo.git
```

### 2. Gal folder-ka project-ka

```bash
cd your-repo
```

### 3. Ku rakib dependencies

```bash
npm install
```

### 4. Orod server-ka

```bash
node app.js
```

Haddii uu si sax ah u shaqeeyo, waxaad arki doontaa:

```bash
app listening on port 8000
```

---

## API Endpoints

### 🟢 GET – Hel dhammaan Products

```http
GET http://localhost:8000/Products
```

---

### 🟢 POST – Ku dar Product cusub

```http
POST http://localhost:8000/register-product
```

**Body (JSON):**

```json
{
  "name": "saabun cusub",
  "dec": "saabun tayo sare leh",
  "price": 5,
  "image": "🧼",
  "qty": 100
}
```

---

### 🟢 PUT – Update Product

```http
PUT http://localhost:8000/update-product/1
```

**Body (JSON):**

```json
{
  "price": 8,
  "qty": 150
}
```

> Waxaad update-gareyn kartaa field kaliya aad rabto.

---

### 🟢 DELETE – Tirtir Product

```http
DELETE http://localhost:8000/delete-product/1
```



## Fiiro Gaar ah (Important Notes)

- Data-du waxay ku jirtaa **memory** (array), mana ku jirto database
- Marka server-ka la damiyo, data-du way lumi doontaa
- Ku tijaabi API-ga adigoo isticmaalaya:
  - Postman


---

## Author

👨‍💻 **Zakaria Elmi**  
📌 Simple Node.js & Express Practice API

---
#