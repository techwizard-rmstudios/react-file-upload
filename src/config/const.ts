export const baseUrl = "http://localhost:3003";
export const activeTab = {
  link: "inline-flex items-center justify-center p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500 group animate-jump",
  svg: "w-6 h-6 me-2 text-blue-600 dark:text-blue-500",
};

export const inactiveTab = {
  link: "inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group",
  svg: "w-6 h-6 me-2 text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300",
};

export const dateString = () => {
  const date = new Date();
  const month = date.toLocaleString("en-US", { month: "long" });
  const year = date.getFullYear().toString().slice(-2);

  return `${month} ${year}`;
};
