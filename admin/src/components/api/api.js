import axios from "axios";
const API_BASE_URL = process.env.API_BASE_URL || "http://localhost:5000";

export const updatePricing = async (pricingData) => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/contacts/prices`,
      pricingData
    );

    if (response.status !== 201) {
      throw new Error("Failed to update pricing");
    }

    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateContact = async (contactData) => {
  try {

    const response = await axios.post(
      `${API_BASE_URL}/contacts`,
      contactData
    );

    if (response.status !== 201) {
      throw new Error("Failed to update contact info");
    }

    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateCredentials = async (credentialsData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/reset`, credentialsData);

    if (response.status !== 201) {
      throw new Error("Failed to update credentials");
    }

    return response.data;
  } catch (error) {
    throw error;
  }
};
