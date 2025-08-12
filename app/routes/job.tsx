import type { Route } from "./+types/job";

export const meta = ({}: Route.MetaArgs) => {
  return [
    { title: "Job Listings" },
    {
      name: "description",
      content: "Browse available job opportunities and listings",
    },
  ];
};

export default function job() {
  return (
    <div>
      <h1>Job Listings</h1>
      <p>Here are some job listings.</p>
    </div>
  );
}
