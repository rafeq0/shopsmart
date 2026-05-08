(function (global) {
  function isNonEmptyValue(value) {
    return String(value || "").trim() !== "";
  }

  function isValidPositivePrice(value) {
    return typeof value === "number" && Number.isFinite(value) && value > 0;
  }

  const api = {
    isNonEmptyValue,
    isValidPositivePrice
  };

  if (typeof module !== "undefined" && module.exports) {
    module.exports = api;
  }

  global.ShopSmartValidation = api;
})(typeof window !== "undefined" ? window : globalThis);
