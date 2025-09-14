import React from 'react';

const UserForm = ({ newUser, setNewUser, handleSubmitUser, isEditing, onCancel, users, editingUser, errors, setErrors }) => {

  const validatePhone = (phone) => {
    return phone.length === 10;
  };

  const handleBlur = (e) => {
    const { id, value } = e.target;
    if (!value.trim()) {
      setErrors(prev => ({ ...prev, [id]: 'This field is required' }));
    } else {
      let error = '';
      if (id === 'phone') {
        if (!validatePhone(value)) {
          error = 'Phone number must be 10 digits';
        } else {
          const existingUser = users.find(u => u.phone === value);
          if (existingUser && (!isEditing || existingUser.id !== editingUser.id)) {
            error = 'This phone number is already taken';
          }
        }
      } else if (id === 'email') {
        const existingUser = users.find(u => u.email.toLowerCase() === value.toLowerCase());
        if (existingUser && (!isEditing || existingUser.id !== editingUser.id)) {
          error = 'This email is already taken';
        }
      } else if (id === 'username') {
        const existingUser = users.find(u => u.username.toLowerCase() === value.toLowerCase());
        if (existingUser && (!isEditing || existingUser.id !== editingUser.id)) {
          error = 'This username is already taken';
        }
      }
      setErrors(prev => ({ ...prev, [id]: error }));
    }
  };
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
        <h2 className="text-xl text-center font-semibold mb-4">{isEditing ? 'Edit User' : 'Add New User'}</h2>
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
                    placeholder="Ex: John Doe"
                    value={newUser.name}
                    onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
                    onBlur={handleBlur}
                    className="p-3 border border-gray-300 dark:border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-gray-100"
                    required
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                </div>
                <div>
                  <label htmlFor="username" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Username</label>
                  <input
                    id="username"
                    type="text"
                    placeholder="Ex: johndoe123"
                    value={newUser.username}
                    onChange={(e) => setNewUser({ ...newUser, username: e.target.value })}
                    onBlur={handleBlur}
                    className="p-3 border border-gray-300 dark:border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-gray-100"
                    required
                  />
                  {errors.username && <p className="text-red-500 text-sm mt-1">{errors.username}</p>}
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
                  <input
                    id="email"
                    type="email"
                    placeholder="Ex: john@example.com"
                    value={newUser.email}
                    onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
                    onBlur={handleBlur}
                    className="p-3 border border-gray-300 dark:border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-gray-100"
                    required
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Phone</label>
                  <input
                    id="phone"
                    type="number"
                    placeholder="1234567890"
                    value={newUser.phone}
                    onChange={(e) => {
                      const val = e.target.value.replace(/\D/g, '').slice(0,10);
                      setNewUser({ ...newUser, phone: val });
                    }}
                    onBlur={handleBlur}
                    className="p-3 border border-gray-300 dark:border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-gray-100"
                    required
                  />
                  {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                </div>
                <div>
                  <label htmlFor="website" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Website</label>
                  <input
                    id="website"
                    type="url"
                    placeholder="Ex: https://example.com"
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
                    placeholder="Ex: 123 Main St"
                    value={newUser.address.street}
                    onChange={(e) => setNewUser({ ...newUser, address: { ...newUser.address, street: e.target.value } })}
                    onBlur={handleBlur}
                    className="p-3 border border-gray-300 dark:border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-gray-100"
                    required
                  />
                  {errors.street && <p className="text-red-500 text-sm mt-1">{errors.street}</p>}
                </div>
                <div>
                  <label htmlFor="suite" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Apartment Address</label>
                  <input
                    id="suite"
                    type="text"
                    placeholder="Ex: Apt 4B"
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
                    placeholder="Ex: New York"
                    value={newUser.address.city}
                    onChange={(e) => setNewUser({ ...newUser, address: { ...newUser.address, city: e.target.value } })}
                    onBlur={handleBlur}
                    className="p-3 border border-gray-300 dark:border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-gray-100"
                    required
                  />
                  {errors.city && <p className="text-red-500 text-sm mt-1">{errors.city}</p>}
                </div>
                <div>
                  <label htmlFor="zipcode" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Zipcode</label>
                  <input
                    id="zipcode"
                    type="text"
                    placeholder="Ex: 10001"
                    value={newUser.address.zipcode}
                    onChange={(e) => setNewUser({ ...newUser, address: { ...newUser.address, zipcode: e.target.value } })}
                    onBlur={handleBlur}
                    className="p-3 border border-gray-300 dark:border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-gray-100"
                    required
                  />
                  {errors.zipcode && <p className="text-red-500 text-sm mt-1">{errors.zipcode}</p>}
                </div>
                <div>
                  <label htmlFor="latitude" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Latitude</label>
                  <input
                    id="latitude"
                    type="text"
                    placeholder="Ex: 40.7128"
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
                    placeholder="Ex: -74.0060"
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
                    placeholder="Ex: Acme Corp"
                    value={newUser.company.name}
                    onChange={(e) => setNewUser({ ...newUser, company: { ...newUser.company, name: e.target.value } })}
                    onBlur={handleBlur}
                    className="p-3 border border-gray-300 dark:border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-gray-100"
                    required
                  />
                  {errors['company-name'] && <p className="text-red-500 text-sm mt-1">{errors['company-name']}</p>}
                </div>
                <div>
                  <label htmlFor="company-catch-phrase" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Company Catch Phrase - Slogan</label>
                  <input
                    id="company-catch-phrase"
                    type="text"
                    placeholder="Ex: Innovative Solutions"
                    value={newUser.company.catchPhrase}
                    onChange={(e) => setNewUser({ ...newUser, company: { ...newUser.company, catchPhrase: e.target.value } })}
                    onBlur={handleBlur}
                    className="p-3 border border-gray-300 dark:border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-gray-100"
                    required
                  />
                  {errors['company-catch-phrase'] && <p className="text-red-500 text-sm mt-1">{errors['company-catch-phrase']}</p>}
                </div>
                <div>
                  <label htmlFor="company-bs" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Company BS - Tagline</label>
                  <input
                    id="company-bs"
                    type="text"
                    placeholder="Ex: Leading the industry"
                    value={newUser.company.bs}
                    onChange={(e) => setNewUser({ ...newUser, company: { ...newUser.company, bs: e.target.value } })}
                    onBlur={handleBlur}
                    className="p-3 border border-gray-300 dark:border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-gray-100"
                    required
                  />
                  {errors['company-bs'] && <p className="text-red-500 text-sm mt-1">{errors['company-bs']}</p>}
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
