import Layout from "../components/Layout";
import mockData from "../mockData";

const Feedback = () => {
  let feedbackPoints: string[] = [];
  mockData.map((job) => {
    feedbackPoints.push(job.feedback);
  });
  return (
    <Layout>
      <ul>
        {feedbackPoints.length > 0 &&
          feedbackPoints.map((item) => <li key={item}>{item}</li>)}
      </ul>
    </Layout>
  );
};

export default Feedback;
