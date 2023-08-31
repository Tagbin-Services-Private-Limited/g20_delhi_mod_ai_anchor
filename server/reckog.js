const AWS = require('aws-sdk');
const fs = require('fs');
const path = require('path');

// Configure AWS credentials
AWS.config.update({
    accessKeyId: "AKIAXJJIYLL3J7PUBPQW",
    secretAccessKey: "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",
    region: "ap-south-1",
});

const rekognition = new AWS.Rekognition();

async function createCollection(collectionId) {
  try {
    await rekognition.createCollection({ CollectionId: collectionId }).promise();
    console.log(`Collection "${collectionId}" created`);
  } catch (error) {
    console.error('Error creating collection:', error);
  }
}

async function indexImage(collectionId, imageFileName) {
  try {
    const imagePath = path.join(__dirname, 'images', imageFileName);
    const imageBytes = fs.readFileSync(imagePath);

    const params = {
      CollectionId: collectionId,
      Image: {
        Bytes: imageBytes,
      },
      ExternalImageId: imageFileName,
    };

    await rekognition.indexFaces(params).promise();
    console.log(`Image "${imageFileName}" indexed`);
  } catch (error) {
    console.error(`Error indexing image "${imageFileName}":`, error);
  }
}

async function main() {
  const collectionId = 'g20'; // Change to your desired collection name

//   // Create the collection
//   await createCollection(collectionId);

  // Index images
  const imageFolder = path.join(__dirname, 'images');
  const imageFiles = fs.readdirSync(imageFolder);

  for (const imageFile of imageFiles) {
    await indexImage(collectionId, imageFile);
  }
}

main();
