// const products = [
//   { title: "Cabbage", id: 1 },
//   { title: "Garlic", id: 2 },
//   { title: "Apple", id: 3 },
// ];

// const listItems =products.map(product =>
//   <li key={product.id}>
//     {product.title}
//   </li>
// );

// function ListFunction(){
//   return(
//     <ul>{listItems}</ul>
//   )
// }

// export default ListFunction;

const products = [
  { title: "Cabbage", isFruit: false, id: 1 },
  { title: "Garlic", isFruit: false, id: 2 },
  { title: "Apple", isFruit: true, id: 3 },
];

function ShoppingList(){
  const listitems =products.map(item =>
    <li key={products.id}
    style={{
      color: item.isFruit?'magenta' : 'darkgreen'
    }}
    >
      {item.title}

    </li>
  );

  return(
    <ul>{listitems}</ul>
  )
}

export default ShoppingList;