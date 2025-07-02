import { useState } from "react";

const useApiRequest = () => {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const makeApi = async ({ url, method = "GET", body = {}, headers = {} }) => {
    setLoading(true);
    setError(null);

    try {
      const options = {
        method: method.toUpperCase(),
        headers: {
          ...headers,
        },
      };
      if (body && method !== "GET") {
        if (body instanceof FormData) {
          options.body = body; // ✅ Don't stringify
        } else {
          options.body = JSON.stringify(body);
          options.headers["Content-Type"] = "application/json"; // ✅ Set content-type for JSON
        }
      }
      const response = await fetch(url, options);
      const result = await response.json();
      if (!response.ok) {
        throw new Error(result.message || "API error");
      }
      setData(result);
      setLoading(false);
      setError(null);
      return result;
    } catch (err) {
      setError(err.message);
      return null;
    } finally {
      setLoading(false);
    }
  };

  return { isLoading, data, error, makeApi };
};

export default useApiRequest;
