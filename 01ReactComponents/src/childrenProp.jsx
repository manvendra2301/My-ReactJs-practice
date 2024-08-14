import { getImageUrl } from "./utlis";

function Avatar({ person, size }) {
  return (
    <img
      style={{ borderRadius: 80 }}
      className="avatar"
      src={getImageUrl(person)}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}

function Card({children}){
  return (
    <div className="card">
      {children}
    </div>
  )
}


export default function Profile() {
  return (
    <Card>
      <Avatar
        size={100}
        person={{
          name: "Katsuko Saruhashi",
          imageId: "YfeOqp2",
        }}
      />
    </Card>
  );
}
