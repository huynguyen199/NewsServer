var admin = require("firebase-admin");
const cron = require("node-cron");
const { getFirestore } = require("firebase-admin/firestore");

var serviceAccount = require("../newsapp-eb14e-firebase-adminsdk-xe5so-1c9af1f839.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://newsapp-eb14e.firebaseio.com",
});

var db = getFirestore();

const articleRef = db.collection("article");

const deleteOldAticle = () => {
  const dateAfter15days = new Date();
  dateAfter15days.setDate(dateAfter15days.getDate() - 5);

  // const ref = articleRef.

  articleRef
    .where("publishedAt", "<", new Date(dateAfter15days))
    .get()
    .then((querySnapshot) => {
      Promise.all(querySnapshot.docs.map((d) => d.ref.delete()));
    });
};

module.exports = function () {
  cron.schedule("* * * * *", () => {
    console.log("delete every minute");
    deleteOldAticle();
  });
};
