import { initializeApp } from 'firebase/app';
import { getDatabase, ref, push } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyApYPWhycMOpiSwkj36Be2S4Ota-R6XyqM",
  authDomain: "udemy-chat-app-84396.firebaseapp.com",
  databaseURL: "https://udemy-chat-app-84396-default-rtdb.firebaseio.com",
  projectId: "udemy-chat-app-84396",
  storageBucket: "udemy-chat-app-84396.appspot.com",
  messagingSenderId: "641927262693",
  appId: "1:641927262693:web:e2b807ec15c1f674567f0c"
};

const app = initializeApp(firebaseConfig);

export const pushMessage = ({name, text}) => {
  const database = getDatabase(app);
  push(ref(database, 'messages'),{name, text})
}
