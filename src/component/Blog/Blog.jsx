import React from 'react';
import useDynamicTitle from '../../DynamicTitle/DynamicTitle';

const Blog = () => {
  useDynamicTitle('Blog');
  return (
    <div className=" mx-auto px-20 mt-8">
      <h1 className="text-5xl font-bold mb-4">Blog</h1>

      <div className="mb-8 p-5 border-solid border-2 border-red-500 bg-red-200 rounded">
        <h2 className="text-lg  font-semibold mb-2">1. What is an access token and refresh token? How do they work and where should we store them on the client-side?</h2>
        <p>An access token is a credential that is used to authenticate and authorize a user when making requests to a server. It is typically sent with each request to validate the user's identity and permissions.</p>
        <p>A refresh token is a special token used to obtain a new access token when the current access token expires.</p>
        <p>Access tokens are usually stored in the client-side browser's memory or local storage, while refresh tokens should be securely stored on the server-side.</p>
      </div>

      <div className="mb-8 p-5 border-solid border-2 border-red-500 bg-red-200 rounded">
        <h2 className="text-lg font-semibold mb-2">2. Compare SQL and NoSQL databases?</h2>
        <p>SQL databases, also known as relational databases, store data in structured tables with predefined schemas. They use SQL (Structured Query Language) for defining and manipulating the data.</p>
        <p>NoSQL databases, on the other hand, are non-relational and do not use a fixed schema. They are more flexible and scalable, allowing for handling large amounts of unstructured data.</p>
        <p>SQL databases are suitable for complex relationships and structured data, while NoSQL databases are ideal for handling semi-structured and unstructured data with high scalability.</p>
      </div>

      <div className="mb-8 p-5 border-solid border-2 border-red-500 bg-red-200 rounded">
        <h2 className="text-lg font-semibold mb-2">3. What is Express.js? What is Nest.js?</h2>
        <p>Express.js is a popular web application framework for Node.js that simplifies the development of server-side applications. It provides a minimalistic and flexible approach for building web servers and APIs.</p>
        <p>Nest.js is a progressive Node.js framework for building efficient, scalable, and maintainable server-side applications. It is built with TypeScript and incorporates modern design patterns such as dependency injection and modular architecture.</p>
        <p>Nest.js is inspired by Angular and shares some similarities in its structure and concepts.</p>
      </div>

      <div className="mb-8 p-5 border-solid border-2 border-red-500 bg-red-200 rounded">
        <h2 className="text-lg font-semibold mb-2">4. What is MongoDB aggregate and how does it work?</h2>
        <p>MongoDB's aggregation framework is a powerful tool for processing and analyzing data within the database. It allows for performing complex operations like grouping, filtering, sorting, and transforming data.</p>
        <p>The aggregation pipeline in MongoDB consists of stages where each stage performs a specific operation on the input data. The output of one stage becomes the input of the next stage, allowing for a series of transformations.</p>
        <p>Aggregation pipelines can include stages like `$match`, `$group`, `$sort`, `$project`, and more, which enable data aggregation and manipulation based on the provided criteria.</p>
      </div>
    </div>
  );
};

export default Blog;
