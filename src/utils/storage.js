export const saveFormData = (data) => {
  localStorage.setItem("formData", JSON.stringify(data));
};

export const getFormData = () => {
  return JSON.parse(localStorage.getItem("formData"));
};