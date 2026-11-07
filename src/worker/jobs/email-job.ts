async function processEmail(data: JSON) {
  console.log("Email processing is starting");

  await new Promise((resolve, reject) => setTimeout(resolve, 2000));

  console.log("Email Processed");
}

export { processEmail };
