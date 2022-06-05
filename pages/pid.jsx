import { useEffect, useState } from "react";

import useSWR from "swr";

export default function ProductDetail() {

  // const fetcher = (url) => fetch(url).then((res) => res.json());

  const [state ,setState] = useState();

  // const {data2 , error} = useSWR("https://jsonplaceholder.typicode.com/users", fetcher);

  
  useEffect(() => {
    const fetching = fetch('https://jsonplaceholder.typicode.com/users')
                      .then(data => data.json())
                      .then(data => setState(data))
                      .catch(err => err);
  }, []);
  

  console.log(state);

  // console.log(data2);

  return (
    <>
    <head>
        <title>dynamic routes</title>
    </head>
    <body>
        <div>[pid]</div>
    </body>
    </>
  )
}

// const data = [
//   {
//     id: 1,
//     data: "Product 1",
//     description: "This is product 1"
//   },
//   {
//     id: 2,
//     data: "Product 2",
//     description: "This is product 2"
//   },
//   {
//     id: 3,
//     data: "Product 3",
//     description: "This is product 3"
//   },
//   {
//     id: 4,
//     data: "Product 4",
//     description: "This is product 4"
//   }
// ]

// export async function getStaticProps(context) {

//   const {params} = context;

//   const productId = params.pid;

//   console.log(productId);

//   const product = data.find(item => item.id === productId);

//   return {
//     prpos : {
//       value : 'ghgh'
//     }
//   }
// }