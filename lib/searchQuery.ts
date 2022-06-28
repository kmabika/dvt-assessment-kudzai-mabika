import {useState} from 'react';
export const handleSearch = (query: string) => {
    fetch("/api/search", {
      method: "post",
      body: JSON.stringify({
        query,
      }),
    })
      .then((res) => res.json())
      .catch(console.log);
};