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
  
  function showMenu() {
    console.log("Welcome to the Movie Recommendation System!");
    console.log("Available categories:");
    for (const category in categories) {
      console.log(` ${category}`);
    }
  }
  
  function recommendMovies(category) {
    if (!categories.hasOwnProperty(category)) {
      console.log(`Invalid category: ${category}`);
      return;
    }   
  
    console.log(`Movies in the ${category} category:`);
    for (const movie of categories[category]) {
      console.log(` ${movie}`);
    }
  }
  
  function recommendRecommendedMovies(category) {
    if (!recommendations.hasOwnProperty(category)) {
      console.log(`Invalid category: ${category}`);
      return;
    }
  
    console.log(`Recommended movies in the ${category} category:`);
    for (const movie of recommendations[category]) {
      console.log(` ${movie}`);
    }
  }
  showMenu();
  
  let userChoice = prompt("Choose a movie category: ").toLowerCase();
  while (userChoice !== "exit") {
    recommendMovies(userChoice);    
  
    let recommendationChoice = prompt("Would you like recommendations? (y/n): ").toLowerCase();
    if (recommendationChoice === "y") {
      recommendRecommendedMovies(userChoice);
    }
  
    userChoice = prompt("Choose another movie category or type 'exit': ").toLowerCase();
  }
  
  console.log("Thank you for using the Movie Recommendation System!");
  