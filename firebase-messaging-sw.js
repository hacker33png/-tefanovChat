importScripts('https://www.gstatic.com/firebasejs/10.8.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.8.0/firebase-messaging-compat.js');

// Tvoja konfigurácia pre Service Worker
firebase.initializeApp({
  apiKey: "AIzaSyAdhUJoq7szgFbp8WN5bTKx3Ib6OR8Oh5o",
  authDomain: "stefanov-chat.firebaseapp.com",
  projectId: "stefanov-chat",
  messagingSenderId: "915409159507",
  appId: "1:915409159507:web:6150b7b7b91e665d68cda6"
});

const messaging = firebase.messaging();

// Spracovanie správy na pozadí (keď je karta zavretá)
messaging.onBackgroundMessage((payload) => {
  console.log('Notifikácia na pozadí prijatá:', payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: 'https://cdn-icons-png.flaticon.com/512/5968/5968771.png'
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
