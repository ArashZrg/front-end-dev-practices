async function checkPerformance(requestCount) {
  try {
    const re = await fetch("./request.json"); // Assuming the file is JSON
    const response = await re.json(); // Parse JSON data
    console.log(response);
  } catch (error) {
    console.error("Error fetching or parsing data:", error);
  }
}

checkPerformance();

checkPerformance();
