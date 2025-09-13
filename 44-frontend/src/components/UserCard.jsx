import { Link } from 'react-router-dom';
import { FiTrash2, FiEdit } from 'react-icons/fi';

const UserCard = ({ user, onDelete, onEdit }) => {
  return (
    <article
      className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow relative group"
      tabIndex="0"
      aria-labelledby={`user-name-${user.id}`}
    >
      <button
        onClick={() => onEdit(user)}
        aria-label={`Edit user ${user.name}`}
        className="absolute top-3 right-12 text-blue-500 hover:text-blue-700 focus:outline-none rounded opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
      >
        <FiEdit size={20} />
      </button>
      <button
        onClick={() => onDelete(user.id)}
        aria-label={`Delete user ${user.name}`}
        className="absolute top-3 right-3 text-red-500 hover:text-red-700 focus:outline-none rounded opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
      >
        <FiTrash2 size={20} />
      </button>
      <h3
        id={`user-name-${user.id}`}
        className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2"
      >
        {user.name}
      </h3>
      <p className="text-gray-600 dark:text-gray-300 mb-1"><span className="font-semibold">Username:</span> {user.username || 'N/A'}</p>
      <p className="text-gray-600 dark:text-gray-300 mb-1"><span className="font-semibold">Email:</span> {user.email}</p>
      <p className="text-gray-600 dark:text-gray-300 mb-4"><span className="font-semibold">Phone:</span> {user.phone}</p>
      <Link
        to={`/user/${user.id}`}
        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 transition-colors"
        aria-label={`View details for ${user.name}`}
      >
        View Details
      </Link>
    </article>
  );
};

export default UserCard;
