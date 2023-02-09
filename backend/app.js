//Sunucu İmport
import  express  from "express";
// Çevre Değişkenleri İmport
import dotenv from "dotenv";
//Veritabanı İmport
import conn from "./db.js";
//Kökenler arası kaynak paylaşımı
import cors from "cors";

//Çevre Değişkenleri Çağırma
dotenv.config();

//Veritabanı Çağırma
conn();

//Sunucu Tanımlama
const app=express();
//Middleware
 app.use(cors());
 app.use(express.json());
//Sunucu Çalıştırma
app.listen(process.env.PORT,() => {
    console.log(`Server Şu Portta Çalişiyor,${process.env.PORT}`)
     });