//Veritabanı İçin
import mongoose from "mongoose";
//Veritabanı Oluşturma
const conn = () =>{ 
    mongoose.set('strictQuery',true);
    mongoose
    .connect(process.env.MONGO_URL,{
     dbName:'Chat_App',
     useNewUrlParser:true,
     useUnifiedTopology:true,
    })
    .then(()=>{
     console.log('Veritabanına Bağlandı');
    })
    .catch((err)=>{
     console.log(`!!!!Veritabanına Bağlanmadı!!!!:,${err}`);
    });
};

//AppJste Kullanmak İçin Export ettim
export default conn;    