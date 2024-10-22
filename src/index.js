import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore';
 



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
  //console.log(Factures);

 const afficherFacture = (Factures) => {
    const rootE1 = document.querySelector('#root');
     const ulE1 = document.createElement('ul');
    Factures.forEach(Facture => {
      const liE1 = document.createElement('li'); 
          liE1.innerHTML = Facture.id + " <button class='deleteFacture' data-id= '"+ Facture.id+"'>supprimer</button>"
          ulE1.appendChild(liE1); 

          const buttonsDelete = document.querySelectorAll('.deleteFacture');
          buttonsDelete.forEach(button => {
            button.addEventListener('click',(event) =>{

              console.log('click');
                console.log(event.target.getAttr('data-id'));
            })
          })
    });
    rootE1.appendChild(ulE1);
  }

  

  afficherFacture(Factures)
  
  const formE1 = document.querySelector('#formAdd form');
  formE1.addEventListener('submit', (event) =>{
    event.preventDefault();

    console.log('submit add form', event.target[0].value, event.target[1].value);
  });






  

   

  /*Factures.forEach(Facture => {
    console.log(Facture);
  });
  Factures.forEach(Facture => {
    if (Facture.totalttc){
      console.log(typeof Facture.id);
    }
  });*

 Factures.forEach(Facture => {
    if (isNaN(Facture.totalttc) && parseFloat(Facture.totalttc) > -10){
      console.log(Facture.id);
    }
  })*/

      /*const afficherFacture = (Factures) => {
      const rootE1 = document.querySelector('#root');
      rootE1.innerHTML = ""; // Efface le contenu précédent
      const ul = document.createElement('ul'); // Crée un élément <ul>
  
      Factures.forEach(Facture => {
          const li = document.createElement('li'); // Crée un élément <li>
          li.textContent = Facture.id; // Définit le texte du <li>
          ul.appendChild(li); // Ajoute le <li> à l'élément <ul>
      });
  
      rootE1.appendChild(ul); // Ajoute le <ul> au rootE1
  }*/