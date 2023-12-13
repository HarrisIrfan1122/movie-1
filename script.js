const categories = {
  action: ["Mission Impossible", "San Andreas", "Death Race"],
  comedy: ["Carry on Jatta", "Angrej", "Chal Mera Putt"],
  drama: ["Kabli Paulo", "Jewan Nagar", "Ertugrual Ghazi"],
};

const recommendations = {
  action: ["Singham Returns", "Dhoom 3", "Dabangg"],
  comedy: ["Hera Pheri", "Gol Maal", "Idiots"],
  drama: ["Alif Allah", "Tere Bin", "Parizaad"],
};

function showMenu(categories) {
  console.log("Welcome to the Movie Recommendation System!");
  console.log("Available categories:");
  let counter = 1;
  for (const category in categories) {
    console.log(` ${counter++}. ${category}`);
  }
}

function recommendMovies(category, categories) {
  if (!categories.hasOwnProperty(category)) {
    console.log(`Invalid category: ${category}`);
    return;
  }

  console.log(`Movies in the ${category} category:`);
  for (const movie of categories[category]) {
    console.log(` ${movie}`);
  }
}

function showRecommendations(category, recommendations) {
  if (!recommendations.hasOwnProperty(category)) {
    console.log(`Invalid category: ${category}`);
    return;
  }

  const recommendationChoice = prompt(`Press 1 to see all recommendations, or choose a movie by number (1-${recommendations[category].length}): `).toLowerCase();

  if (recommendationChoice === "1") {
    for (const movie of recommendations[category]) {
      console.log(` ${movie}`);
    }
  } else if (!isNaN(parseInt(recommendationChoice)) && parseInt(recommendationChoice) > 0 && parseInt(recommendationChoice) <= recommendations[category].length) {
    const movieIndex = parseInt(recommendationChoice) - 1;
    console.log(`Recommended movie: ${recommendations[category][movieIndex]}`);
  } else {
    console.log("Invalid input. Please enter a valid option.");
  }
}

function showPopUp(categories) {
  let userChoice = prompt(`Choose a movie category by number: `).toLowerCase();

  while (userChoice !== "exit") {
    if (!isNaN(parseInt(userChoice))) {
      userChoice = parseInt(userChoice);
      if (userChoice > 0 && userChoice <= Object.keys(categories).length) {
        const categoryName = Object.keys(categories)[userChoice - 1];
        recommendMovies(categoryName, categories);

        const recommendationChoice = prompt("Would you like to see recommendations? (y/n): ").toLowerCase();
        if (recommendationChoice === "y") {
          showRecommendations(categoryName, recommendations);
        }
      } else {
        console.log("Invalid category number.");
      }
    } else {
      console.log("Invalid input. Please enter a number.");
    }

    userChoice = prompt("Choose another category or type 'exit': ").toLowerCase();
  }
}

showMenu(categories);
showPopUp(categories);
console.log("Thank you for using the Movie Recommendation System!");
