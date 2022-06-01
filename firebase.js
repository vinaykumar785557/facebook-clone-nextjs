import firebase from 'firebase';
import 'firebase/storage';
const firebaseConfig = {
	apiKey: 'AIzaSyBh_YOVP03OgZzlfFHMU4v2gDTF4AkbFUY',
	authDomain: 'facebook-clone-99217.firebaseapp.com',
	projectId: 'facebook-clone-99217',
	storageBucket: 'facebook-clone-99217.appspot.com',
	messagingSenderId: '98866048461',
	appId: '1:98866048461:web:0ff175aac45e072854e884',
};

const app = !firebase.apps.length
	? firebase.initializeApp(firebaseConfig)
	: firebase.app();

const db = app.firestore();
const storage = firebase.storage();

export { db, storage };
