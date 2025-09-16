export function getDepartmentAndPriority(title) {
  if (!title) return { department: null, priority: "Low" };

  // Define mapping of title → department + priority
  const mapping = {
    Water: { department: "Water", priority: "High" },
    Electrical: { department: "Electrical", priority: "High" },
    Civil: { department: "Civil", priority: "Medium" },
    Sanitation: { department: "Sanitation", priority: "Medium" },
    "Animal Control": { department: "Animal Control", priority: "Low" },
  };

  // Normalize title (trim + match case-insensitive)
  const key = Object.keys(mapping).find(
    (k) => k.toLowerCase() === title.toLowerCase()
  );

  if (key) return mapping[key];

  // Default if title not found
  return { department: null, priority: "Low" };
}
