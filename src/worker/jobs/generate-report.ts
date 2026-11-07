async function generateReport(data: JSON) {
  console.log("report generation is starting");

  await new Promise((resolve, reject) => setTimeout(resolve, 2000));

  console.log("report generated");
}

export { generateReport };
