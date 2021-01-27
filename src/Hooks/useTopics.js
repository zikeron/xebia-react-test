import React, { useState, useEffect } from 'react';
import { gql } from '@apollo/client';
import { CustomClient } from '../lib/apollo-client';

export const useTopics = (name, first = 10) => {
  const [topic, setTopic] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    if (name.length === 0) {
      setLoading(false);
      setTopic([]);
      return { topic, loading };
    }

    CustomClient()
      .query({
        query: gql`
            query {
                topic(name:"${name.toLowerCase()}"){
                    name
                    relatedTopics(first:${first}){
                        id
                        name,
                        stargazerCount
                    }
                }
            }
        `,
      })
      .then((data) => {
        if (data.data.topic !== null) {
          setTopic(data.data.topic.relatedTopics);
        } else {
          setTopic([]);
        }
        setLoading(false);
      });
  }, [name]);

  return { topic, loading };
};
