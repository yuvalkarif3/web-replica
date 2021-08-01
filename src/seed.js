export function seedDatabase(firebase) {
  const users = [
    {
      userId: "bmxcUk2TvAYrbmvPisqMr8stjFG2",
      username: "yuval_karif",
      fullName: "Yuval Karif",
      emailAddress: "yuvalkarif3@gmail.com",
      following: ["2"],
      followers: ["2", "3", "4"],
      dateCreated: Date.now(),
    },
    {
      userId: "2",
      username: "tamar_kahanov",
      fullName: "Tamar Kahanov",
      emailAddress: "tamarkahanov@gmail.com",
      following: [],
      followers: ["bmxcUk2TvAYrbmvPisqMr8stjFG2"],
      dateCreated: Date.now(),
    },
    {
      userId: "3",
      username: "sambenjamin",
      fullName: "Sam Brink",
      emailAddress: "oxedom@gmail.com",
      following: [],
      followers: ["bmxcUk2TvAYrbmvPisqMr8stjFG2"],
      dateCreated: Date.now(),
    },
    {
      userId: "4",
      username: "orwell",
      fullName: "George Orwell",
      emailAddress: "george@orwell.com",
      following: [],
      followers: ["bmxcUk2TvAYrbmvPisqMr8stjFG2"],
      dateCreated: Date.now(),
    },
  ];

  // eslint-disable-next-line prefer-const
  for (let k = 0; k < users.length; k++) {
    firebase.firestore().collection("users").add(users[k]);
  }

  // eslint-disable-next-line prefer-const
  for (let i = 1; i <= 3; ++i) {
    firebase
      .firestore()
      .collection("photos")
      .add({
        photoId: i,
        userId: "2",
        imageSrc: `Components/Template/Photos/pic${i}.jpg`,
        caption: "sheesh",
        likes: [],
        comments: [
          {
            displayName: "sambenjamin",
            comment: "Love this place, looks like my animal farm!",
          },
          {
            displayName: "tamar_kahanov",
            comment: "Would you mind if I used this picture?",
          },
        ],
        userLatitude: "40.7128°",
        userLongitude: "74.0060°",
        dateCreated: Date.now(),
      });
  }
}
