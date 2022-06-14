var admin = require("firebase-admin");
const cron = require("node-cron");
const { getFirestore } = require("firebase-admin/firestore");

var serviceAccount = require("../testproject-5e51e-firebase-adminsdk-6z8ru-09931b8ac1.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://testproject-5e51e.firebaseio.com",
});

var db = getFirestore();

const docRef = db.collection("users");

const deleteOldAticle = () => {
  const dateAfter15days = new Date();
  const day = 15;

  dateAfter15days.setDate(dateAfter15days.getDate() - day);
  const ref = articleRef.where("publishedAt", "<", dateAfter15days);

  ref.get().then((querySnapshot) => {
    Promise.all(querySnapshot.docs.map((d) => d.ref.delete()));
  });
};

module.exports = function () {
  cron.schedule("* * * * *", () => {
    console.log("delete every minute");
    deleteOldAticle();
  });
};
