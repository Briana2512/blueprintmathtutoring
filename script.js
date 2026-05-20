function homeworkHelper() {
  let input = document.getElementById("homeworkInput").value;
  let response = document.getElementById("helperResponse");

  if (input.trim() === "") {
    response.innerHTML = "Type what you are stuck on first.";
    return;
  }

  response.innerHTML = `
    <h3>Here’s how to start:</h3>
    <p><strong>1. Identify the topic.</strong> Ask yourself: is this equation solving, graphing, factoring, functions, or word problems?</p>
    <p><strong>2. Write down what is given.</strong> List the numbers, variables, equations, or graph details you already have.</p>
    <p><strong>3. Choose the method.</strong> For equations, isolate the variable. For graphing, find slope/intercepts. For quadratics, look for factoring, vertex form, or the quadratic formula.</p>
    <p><strong>4. Try one step.</strong> Do not try to solve the whole problem at once. Focus on the next correct move.</p>
    <p><strong>5. Bring it to tutoring.</strong> We can work through this together step by step until it clicks.</p>
  `;
}