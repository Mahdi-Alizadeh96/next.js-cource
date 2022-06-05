function HomePage(props) {

  const {products} = props;

  return (
    <ul>
      {
        products.map(item => <li key={item.id}>{item.data}</li>)
      }
    </ul>
  );
}

const data = [
  {
    id: 1,
    data: "Product 1",
    description: "This is product 1"
  },
  {
    id: 2,
    data: "Product 2",
    description: "This is product 2"
  },
  {
    id: 3,
    data: "Product 3",
    description: "This is product 3"
  },
  {
    id: 4,
    data: "Product 4",
    description: "This is product 4"
  },
]

export async function getStaticProps() {
  if(!data) {
    return {
      redirect : {
        destination : '/not-found'
      }
    }
  }

  // if(data.length === 0) {
  //   return {
  //     notFound : true
  //   }
  // }

  return {
    props : {
      products : data
    },
    revalidate : 10
  }
}

export default HomePage;
