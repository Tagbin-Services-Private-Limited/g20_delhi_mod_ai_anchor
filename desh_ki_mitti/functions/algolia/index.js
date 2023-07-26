const algoliasearch = require("algoliasearch");

// Initialize Algolia client
const algoliaClient = algoliasearch(
  "PV4X6Z10TL",
  "e814d4abcafd862388ed92cbf1925af8"
);
const algoliaIndex = algoliaClient.initIndex("villages");

exports.getAlgoliaRecords = async function (req, res) {
  try {
    const query = req.query.query; // Get the query parameter from the request URL
    const algoliaResponse = await algoliaIndex.search(query); // Fetch records from Algolia
    const records = algoliaResponse.hits.map((hit) => hit); // Extract the objectID of each record
    res.json(records); // Send the response with the record IDs
  } catch (error) {
    console.error(error);
    res.status(500).send("Error fetching Algolia records");
  }
};
