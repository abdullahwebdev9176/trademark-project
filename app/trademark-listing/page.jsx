'use client'

import { useEffect, useState } from 'react';

export default function SearchClient() {
    const [query, setQuery] = useState('hello');
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchData = async () => {
        try {
            setLoading(true);
            setError(null);
            const response = await fetch(
                `http://18.221.188.64:3002/search/eu?q=${encodeURIComponent(query)}`
            );
            if (!response.ok) throw new Error('Network response was not ok');
            const data = await response.json();

            console.log("Abdullah", data)
            setResults(data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, [query]);

    return (
        <div className="max-w-5xl mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4 text-center">Trademark Search</h1>

            <div className="flex gap-2 mb-4">
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search..."
                    className="flex-1 border px-3 py-2 rounded"
                />
                <button
                    onClick={fetchData}
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                    Search
                </button>
            </div>

            {loading && <p>Loading...</p>}
            {error && <p className="text-red-500">Error: {error}</p>}

            {Array.isArray(results) && results.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {
                        results.map((item) => (
                            <div key={item._id} className="border p-4 rounded shadow mb-4">
                                <h2 className="text-xl font-bold mb-1">Number: {item.number}</h2>
                                <p>Basis: {item.basis}</p>
                                <p>Applicant Country: {item.applicantCountry}</p>
                                <p>Status: {item.applicantStatus}</p>

                                <p className="mt-2 font-semibold">Applicants:</p>
                                <ul className="list-disc list-inside">
                                    {item.applicants?.map((a, i) => (
                                        <li key={i}>{a.name}</li>
                                    ))}
                                </ul>

                                <p className="mt-2 font-semibold">Documents:</p>
                                <ul className="list-decimal list-inside">
                                    {item.documents?.slice(0, 3).map((d, i) => (
                                        <li key={i}>
                                            {d.type} — {d.date}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))

                    }
                </div>
            ) : (
                !loading && <p className="text-gray-500">No results found.</p>
            )}
        </div>
    );
}
