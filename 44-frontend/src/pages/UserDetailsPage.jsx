import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { fetchUserById } from "../api/userService";
import Header from "../components/Header";
import { IoArrowBack } from "react-icons/io5";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import { useUserContext } from "../context/UserContext";

const UserDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { updateUser, deleteUser } = useUserContext();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadUser = async () => {
      try {
        const response = await fetchUserById(id);
        setUser(response.data || response);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    loadUser();
  }, [id]);

  const handleEdit = () => {
    const newName = prompt("Enter new name:", user.name);
    if (newName && newName !== user.name) {
      updateUser(id, { name: newName }).then((updated) => setUser(updated));
    }
  };

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      deleteUser(id).then(() => navigate("/"));
    }
  };

  if (loading) return <div className="text-center py-8">Loading...</div>;
  if (error)
    return <div className="text-center py-8 text-red-500">Error: {error}</div>;
  if (!user) return <div className="text-center py-8">User not found</div>;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />
      <main
        id="main-content"
        className="container mx-auto p-5 md:p-8"
        role="main"
      >
        <nav aria-label="Breadcrumb" className="mb-4">
          <Link
            to="/"
            className="text-gray-600 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-colors flex items-center"
          >
            <IoArrowBack className="mr-2" /> Back to Dashboard
          </Link>
        </nav>
        <article
          className=" bg-white dark:bg-gray-800 rounded-lg shadow-md p-5 md:p-8 hover:shadow-lg transition-shadow outline-none focus-within:ring-2 focus-within:ring-blue-400"
          tabIndex="0"
        >
          <header className="flex justify-between items-center mb-4">
            <div className="flex items-center">
              <div className="w-16 h-16 rounded-full bg-black dark:bg-white text-white dark:text-black flex items-center justify-center font-bold text-xl mr-4">
                {user.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")
                  .toUpperCase()}
              </div>
              <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100">
                {user.name}
              </h1>
            </div>
            <div className="space-x-3">
              <button
                onClick={handleEdit}
                aria-label="Edit user"
                className="text-blue-500 hover:text-blue-700 focus:outline-none"
              >
                <FiEdit size={24} />
              </button>
              <button
                onClick={handleDelete}
                aria-label="Delete user"
                className="text-red-500 hover:text-red-700 focus:outline-none"
              >
                <FiTrash2 size={24} />
              </button>
            </div>
          </header>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <section aria-labelledby="personal-info" className="mt-3 mb-5">
                <h2 id="personal-info" className="sr-only">
                  Personal Information
                </h2>
                <p className="mb-2">
                  <span className="text-gray-800 dark:text-gray-100 ">
                    User Name:
                  </span>{" "}
                  <span className="text-green-500">{user.username}</span>
                </p>
                <p className="mb-2">
                  <span className="text-gray-800 dark:text-gray-100">
                    Email:
                  </span>{" "}
                  <a
                    href={`mailto:${user.email}`}
                    className="text-green-500 hover:underline"
                  >
                    {user.email}
                  </a>
                </p>
                <p className="mb-2">
                  <span className="text-gray-800 dark:text-gray-100">
                    Phone:
                  </span>{" "}
                  <a
                    href={`tel:${user.phone}`}
                    className="text-green-500 hover:underline"
                  >
                    {user.phone}
                  </a>
                </p>
                <p className="mb-2">
                  <span className="text-gray-800 dark:text-gray-100 ">
                    Website:
                  </span>{" "}
                  <span className="text-green-500">
                    {user.website ? (
                      <a
                        href={`http://${user.website}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                      >
                        {user.website}
                      </a>
                    ) : (
                      "N/A"
                    )}
                  </span>
                </p>
              </section>
              <section aria-labelledby="address-info" className="mt-3">
                <h2 id="address-info" className="text-xl font-semibold mb-2">
                  Address
                </h2>
                <p className="text-gray-600 dark:text-gray-300">
                  {user.address.street}, {user.address.suite}
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  {user.address.city}, {user.address.zipcode}
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  Lat: {user.address.geo.lat}, Lng: {user.address.geo.lng}
                </p>
              </section>
            </div>
            <div className="flex-1">
              <section aria-labelledby="company-info" className="mt-3">
                <h2 id="company-info" className="text-xl font-semibold mb-2">
                  Company
                </h2>
                <p className="text-gray-600 dark:text-gray-300">
                  {user.company.name}
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  {user.company.catchPhrase}
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  {user.company.bs}
                </p>
              </section>
            </div>
          </div>
        </article>
      </main>
    </div>
  );
};

export default UserDetailsPage;
