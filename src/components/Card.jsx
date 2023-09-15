import {Link} from 'react-router-dom'
function Card({ id, image, title, price }) {
  return (
    <Link
      className="card w-full shadow-xl hover:shadow-2xl transition duration-300"
      to={`/products/${id}`}
    >
      <figure className="px-4 pt-4">
        <img
          src={image}
          alt=""
          className="rounded-xl h-64 md:h-48 w-full object-cover"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title capitalize tracking-wider">{title}</h2>
        <span className="text-[#463aa1]">
          ${price.slice(0, price.length - 2)}.{price.slice(price.length - 2)}
        </span>
      </div>
    </Link>
  );
}

export default Card;
