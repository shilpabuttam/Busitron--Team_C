import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
    apiKey: 'your-api-key',
    authDomain: 'your-auth-domain',
    databaseURL: 'your-database-url',
    projectId: 'your-project-id',
    storageBucket: 'your-storage-bucket',
    messagingSenderId: 'your-sender-id',
    appId: 'your-app-id'
};

firebase.initializeApp(firebaseConfig);
const database = firebase.database();

export const saveMessage = (message) => {
    database.ref('messages').push(message);
};

export const saveViewerStats = (stats) => {
    database.ref('viewerStats').set(stats);
};
