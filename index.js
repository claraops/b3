import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import 'dotenv/config';


console.log("start programme v1!");

const firebaseConfig = {
    apiKey: process.env.apiKey,
    authDomain: process.env.authDomain,
    projectId: process.env.projectId,
    storageBucket: process.env.storageBucket,
    messagingSenderId: process.env.messagingSenderId,
    appId: process.env.appId
  };
  

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

   const getFacture = async (db) => {
    const FacturesCol = collection(db, 'Factures');
    const FacturesSnapshot = await getDocs(FacturesCol);
    const FacturesList = FacturesSnapshot.docs.map(doc => ({...doc.data(), id: doc.id}));
    return FacturesList;
  }

  const Factures = await getFacture(db)
  console.log(Factures);
