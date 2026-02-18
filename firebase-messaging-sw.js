
// Importovanie skriptov potrebných pre Service Workera
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js');

// Tvoja konfigurácia z obrázka
const firebaseConfig = {
  apiKey: "AIzaSyAdhUjoq7szgFbp8WN5bTKx3...", 
  authDomain: "stefanov-chat.firebaseapp.com",
  projectId: "stefanov-chat",
  storageBucket: "stefanov-chat.firebasestorage.app",
  messagingSenderId: "915409159507",
  appId: "1:915409159507:web:6150b7b7b91..."
};

// Inicializácia
firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

// Spracovanie správ na pozadí (keď je prehliadač zatvorený)
messaging.onBackgroundMessage((payload) => {
  console.log('Prijatá správa na pozadí: ', payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/ikona.png' 
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
