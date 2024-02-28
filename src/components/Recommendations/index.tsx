import { useEffect, useState } from 'react';

export function Recommendations() {
    const [recommendations, setRecommendations] = useState([]);

    useEffect(() => {
        fetchRecommendations();
    }, []);

    async function fetchRecommendations() {
        try {
            const response = await fetch('https://api.linkedin.com/v2/recommendations', {
                headers: {
                    Authorization: 'Bearer YOUR_ACCESS_TOKEN',
                },
            });

            const data = await response.json();
            setRecommendations(data.elements);
        } catch (error) {
            console.error('Error fetching recommendations:', error);
        }
    }

    return (
        <div>
            <h1>Recommendations</h1>
            {recommendations.map((recommendation: { id: string, text: string, recommender: { firstName: string, lastName: string } }) => (
                <div key={recommendation.id}>
                    <p>{recommendation.text}</p>
                    <p>From: {recommendation.recommender.firstName} {recommendation.recommender.lastName}</p>
                </div>
            ))}
        </div>
    );
}