import React from 'react';
import { useParams } from 'react-router-dom';
// import useFetch from '../hooks/useFetch';
import { useQuery, gql } from '@apollo/client';

const REVIEW = gql`
    query GetReviews($id: ID!){
        review(id: $id){
            title,
            body,
            rating,
            id
        }
    }
`

const ReviewDetails = () => {
    const { id } = useParams()
    const { loading, error, data } = useQuery(REVIEW, {
        variables: {id: id}
    })
    // const {error, loading, data} = useFetch('http://localhost:1337/reviews/' + id)
    if(loading) return <p>Loading...</p>
    if(error) return <p>Error...</p>
    return (
        <div className="review-card">
            <div className="rating">{data.review.rating}</div>
            <h2>{data.review.title}</h2>
            <small>console list</small>
            <p>{data.review.body}</p>
        </div>
    );
}

export default ReviewDetails;
