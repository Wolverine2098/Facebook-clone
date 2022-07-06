import React, { useState } from 'react';

export const useProvideAuth = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(null);

  const login = (email, password) => {};

  const logout = () => {};

  return {
    user,
    login,
    logout,
    loading,
  };
};
