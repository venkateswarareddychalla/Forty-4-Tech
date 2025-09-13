import React from 'react';

const UserForm = ({ newUser, setNewUser, handleSubmitUser, isEditing, onCancel }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
        <h2 className="text-xl font-semibold mb-4">{isEditing ? 'Edit User' : 'Add New User'}</h2>
        <form id="add-user-form" onSubmit={handleSubmitUser}>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">Personal Details</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Name</label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Name"
                    value={newUser.name}
                    onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
                    className="p-3 border border-gray-300 dark:border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-gray-100"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="username" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Username</label>
                  <input
                    id="username"
                    type="text"
                    placeholder="Username"
                    value={newUser.username}
                    onChange={(e) => setNewUser({ ...newUser, username: e.target.value })}
                    className="p-3 border border-gray-300 dark:border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-gray-100"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
                  <input
                    id="email"
                    type="email"
                    placeholder="Email"
                    value={newUser.email}
                    onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
                    className="p-3 border border-gray-300 dark:border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-gray-100"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Phone</label>
                  <input
                    id="phone"
                    type="tel"
                    placeholder="Phone"
                    value={newUser.phone}
                    onChange={(e) => setNewUser({ ...newUser, phone: e.target.value })}
                    className="p-3 border border-gray-300 dark:border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-gray-100"
                  />
                </div>
                <div>
                  <label htmlFor="website" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Website</label>
                  <input
                    id="website"
                    type="url"
                    placeholder="Website"
                    value={newUser.website}
                    onChange={(e) => setNewUser({ ...newUser, website: e.target.value })}
                    className="p-3 border border-gray-300 dark:border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-gray-100"
                  />
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">Address</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="street" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Street</label>
                  <input
                    id="street"
                    type="text"
                    placeholder="Street"
                    value={newUser.address.street}
                    onChange={(e) => setNewUser({ ...newUser, address: { ...newUser.address, street: e.target.value } })}
                    className="p-3 border border-gray-300 dark:border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-gray-100"
                  />
                </div>
                <div>
                  <label htmlFor="suite" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Suite</label>
                  <input
                    id="suite"
                    type="text"
                    placeholder="Suite"
                    value={newUser.address.suite}
                    onChange={(e) => setNewUser({ ...newUser, address: { ...newUser.address, suite: e.target.value } })}
                    className="p-3 border border-gray-300 dark:border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-gray-100"
                  />
                </div>
                <div>
                  <label htmlFor="city" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">City</label>
                  <input
                    id="city"
                    type="text"
                    placeholder="City"
                    value={newUser.address.city}
                    onChange={(e) => setNewUser({ ...newUser, address: { ...newUser.address, city: e.target.value } })}
                    className="p-3 border border-gray-300 dark:border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-gray-100"
                  />
                </div>
                <div>
                  <label htmlFor="zipcode" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Zipcode</label>
                  <input
                    id="zipcode"
                    type="text"
                    placeholder="Zipcode"
                    value={newUser.address.zipcode}
                    onChange={(e) => setNewUser({ ...newUser, address: { ...newUser.address, zipcode: e.target.value } })}
                    className="p-3 border border-gray-300 dark:border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-gray-100"
                  />
                </div>
                <div>
                  <label htmlFor="latitude" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Latitude</label>
                  <input
                    id="latitude"
                    type="text"
                    placeholder="Latitude"
                    value={newUser.address.geo.lat}
                    onChange={(e) => setNewUser({ ...newUser, address: { ...newUser.address, geo: { ...newUser.address.geo, lat: e.target.value } } })}
                    className="p-3 border border-gray-300 dark:border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-gray-100"
                  />
                </div>
                <div>
                  <label htmlFor="longitude" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Longitude</label>
                  <input
                    id="longitude"
                    type="text"
                    placeholder="Longitude"
                    value={newUser.address.geo.lng}
                    onChange={(e) => setNewUser({ ...newUser, address: { ...newUser.address, geo: { ...newUser.address.geo, lng: e.target.value } } })}
                    className="p-3 border border-gray-300 dark:border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-gray-100"
                  />
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">Company Details</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="company-name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Company Name</label>
                  <input
                    id="company-name"
                    type="text"
                    placeholder="Company Name"
                    value={newUser.company.name}
                    onChange={(e) => setNewUser({ ...newUser, company: { ...newUser.company, name: e.target.value } })}
                    className="p-3 border border-gray-300 dark:border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-gray-100"
                  />
                </div>
                <div>
                  <label htmlFor="company-catch-phrase" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Company Catch Phrase</label>
                  <input
                    id="company-catch-phrase"
                    type="text"
                    placeholder="Company Catch Phrase"
                    value={newUser.company.catchPhrase}
                    onChange={(e) => setNewUser({ ...newUser, company: { ...newUser.company, catchPhrase: e.target.value } })}
                    className="p-3 border border-gray-300 dark:border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-gray-100"
                  />
                </div>
                <div>
                  <label htmlFor="company-bs" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Company BS</label>
                  <input
                    id="company-bs"
                    type="text"
                    placeholder="Company BS"
                    value={newUser.company.bs}
                    onChange={(e) => setNewUser({ ...newUser, company: { ...newUser.company, bs: e.target.value } })}
                    className="p-3 border border-gray-300 dark:border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-gray-100"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-end gap-4 mt-6">
            <button
              type="button"
              onClick={onCancel}
              className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition-colors cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-500 dark:bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-600 dark:hover:bg-blue-700 transition-colors cursor-pointer"
            >
              {isEditing ? 'Update User' : 'Add User'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserForm;
