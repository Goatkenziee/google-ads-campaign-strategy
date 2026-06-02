import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    // Fetch campaign data or perform any setup actions here
    console.log('Google Ads Campaign strategy page loaded');
  }, []);

  return (
    <main className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-3xl font-bold">Welcome to the Google Ads Campaign Strategy!</h1>
      <section className="mt-4 p-4 rounded bg-white shadow-md">
        <h2 className="text-2xl font-semibold mb-2">Campaign Overview</h2>
        <p className="text-gray-700">This section will provide an overview of the campaign strategy, objectives, and target audience.</p>
      </section>
      <section className="mt-4 p-4 rounded bg-white shadow-md">
        <h2 className="text-2xl font-semibold mb-2">Target Audience</h2>
        <p className="text-gray-700">Details about the target audience for the Google Ads campaign will be displayed here.</p>
      </section>
      <section className="mt-4 p-4 rounded bg-white shadow-md">
        <h2 className="text-2xl font-semibold mb-2">Budget Allocation</h2>
        <p className="text-gray-700">Information about the budget allocation for different campaign strategies will be provided in this section.</p>
      </section>
    </main>
  );
}