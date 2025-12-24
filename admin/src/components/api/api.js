const API_BASE_URL = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1`;
const ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY;

const headers = {
  'Authorization': `Bearer ${ANON_KEY}`,
  'Content-Type': 'application/json',
};

export const updatePricing = async (pricingData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/update-pricing`, {
      method: 'POST',
      headers,
      body: JSON.stringify(pricingData),
    });

    if (!response.ok) {
      throw new Error('Failed to update pricing');
    }

    return await response.json();
  } catch (error) {
    throw error;
  }
};

export const updateContact = async (contactData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/update-contact`, {
      method: 'POST',
      headers,
      body: JSON.stringify(contactData),
    });

    if (!response.ok) {
      throw new Error('Failed to update contact info');
    }

    return await response.json();
  } catch (error) {
    throw error;
  }
};

export const updateCredentials = async (credentialsData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/update-credentials`, {
      method: 'POST',
      headers,
      body: JSON.stringify(credentialsData),
    });

    if (!response.ok) {
      throw new Error('Failed to update credentials');
    }

    return await response.json();
  } catch (error) {
    throw error;
  }
};
