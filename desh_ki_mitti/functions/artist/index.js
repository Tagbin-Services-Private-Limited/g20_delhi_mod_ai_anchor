//pagination has to be built
// 50 - 100 artist being fetched in one req

//get artist data without the userType
exports.getArtists = async function (req, res, admin) {
  try {
    const snapshot = await admin
      .firestore()
      .collection("users")
      .where("userType", "==", "artist")
      .get()
      .catch((err) => {
        console.log("err", err);
      });

    let artists = snapshot.docs.map((doc) => {
      let obj = doc.data();
      obj.userId = doc.id;
      delete obj.userType;
      return obj;
    });

    //sort by created date
    artists = artists.sort((a, b) => b.created - a.created);

    //remove unwanted values
    const artists_ = artists.map((doc) => {
      let obj = {
        userId: doc.userId,
        avatar: doc.avatar,
        values: {
          name: doc.values.name,
          city: doc.values.city,
          state: doc.values.state,
          arttype: doc.values.arttype,
          arttypeAny: doc.values.arttypeAny,
        },
      };
      return obj;
    });

    return res.status(200).send(artists_);
  } catch (error) {
    console.error(error);
    return res.status(500).send(error);
  }
};
