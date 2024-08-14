//props are the information that you passs to the jsx tag.For example className, src, width, and height are some props you can pass to <img>

//a simple example of props 

function Avatar({person, size}){
  return (
    <>
      <img
        className="avatar"
        src="https://i.imgur.com/1bX5QH6.jpg"
        width={size}
        height={size}
      />
      <p>{person.name}</p>
    </>
  );
}

export default function Profile(){
  return (
    <Avatar person={{ name: "Lin Lanying", imageId: "1bX5QH6" }} 
    size={200}
     />
  );
}