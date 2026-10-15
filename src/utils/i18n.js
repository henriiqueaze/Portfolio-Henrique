export const resolveLocalizedValue = (value, language) => {
  if (typeof value === "string") {
    return value;
  }

  if (!value || typeof value !== "object") {
    return "";
  }

  return value[language] ?? value.en ?? value.pt ?? "";
};