import { client, gql } from "@/helper/graph";

export default async function handler(req, res) {
  let responsesArray = [];
  const id = req.query.id;
  if (id == "lorem") {
    const query = gql`
      query MyQuery {
        responses(first: 100) {
          name
          instagram
          createdAt
          hintsUsed
        }
      }
    `;

    const { responses } = await client.request(query);
    responsesArray = responses;

    const query2 = gql`
      query MyQuery {
        responses(skip: 100, first: 100) {
          name
          instagram
          createdAt
          hintsUsed
        }
      }
    `;

    const { responses: responses2 } = await client.request(query2);
    responsesArray = [...responsesArray, ...responses2];

    // filter if createdAt after 12:30pm && before 5:30pm

    const filteredResponses = responsesArray.filter((response) => {
      const date = new Date(response.createdAt);
      const hours = date.getHours();
      const minutes = date.getMinutes();
      return hours >= 12 && hours <= 17 && minutes >= 30;
    });

    // pick 3 random responses

    const randomResponses = [];
    while (randomResponses.length < 3) {
      const randomResponse =
        filteredResponses[Math.floor(Math.random() * filteredResponses.length)];
      if (!randomResponses.includes(randomResponse)) {
        randomResponses.push(randomResponse);
      }
    }

    res.status(200).json({ responses: randomResponses });
  }
}
