// Define options for each category and subcategory
const gameData = {
    "YOU": {
        "Food": ["Bacon", "Pizza", "Burgers", "Pastaroni", "Cesar Salad", "Tacos", "BBQ", "Steak", 
            "Enchiladas", "Fried Rice", "Chicken Tenders", "Pizza Rolls"],
        "Drinks": ["Water", "Pre Workout", "Chocolate Milk", "Apple Juice", "Dr. Pepper", 
            "Root Beer", "Smoothie", "Orange Juice", "Beer", "Wine", "DTS"],
        "Beers": ["Any IPA", "Miller Lite", "Michelob Ultra", "Yeungling Lite","Lager", 
            "Blue Moon", "Bluewing", "Boulevard Wheat", "Dos Equis", "Corona", "Modelo", "Pacifico",
            "Coors Lite"],
        "Fast Food Spots": ["McDonald's", "Taco Bell", "Subway", "Wendy's", "Chick-fil-A", 
            "Zaxbys", "Chipotle", "Panda Express", "Feltner Brothers", "Five Guys", "In-N-Out", 
            "Shake Shack", "In-N-Out", "KFC", "Culvers"],
        "Snacks": ["Doritos", "Oreos", "Nerds Gummy Clusters", "Cheeze Itz", "Granola Bars",
            "Animal Crackers", "Wheat Thins", "Chips Ahoy", "Pop Tarts", "Goldsish", 
            "Popcorn", "Pringles"],
        "TV Shows": ["Friends", "Breaking Bad", "The Office", "Game of Thrones", "Stranger Things",
            "The Boys", "The Bear", "House of the Dragon", "Demon Slayer", "Attack on Titan",
            "Love Island", "Secret Lives of MW"],
        "Friends": ["Ryan", "Clayton", "Billy", "Glava", "Tim", "Ben", "Cole", "Will","Gavin",
            "Caden", "Blake", "Matthew", "Drew"],
        "Sports to Watch": ["Soccer", "Basketball", "Tennis", "Baseball", "Hockey", "Track & Field",
            "Football", "College Basketball", "College Football", "College Baseball"],
        "Football Teams": ["Chiefs","Patriots", "Cowboys", "Packers", "Steelers", "49ers",
            "Texans", "Bills", "Eagles", "Saints", "Dolphins", "Broncos", "Cardinals",
            "Vikings", "Jets"],
        "NFL Running Backs": ["S. Barkley", "A. Jones", "D. Henry", "J. Jacobs", "B. Robinson", 
            "K. Willaims", "R. Stevenson", "J. Gibbs", "A. Kamara", "D. Montgomery", "D. Swift",
            "D. Achane", "K. Walker III", "R. Dowdle", "B. Irving", "A. Mattison"],
        "NFL Quarterbacks": ["K. Murray", "J. Allen", "J. Hurts", "P. Mahomes", "A. Richardson",
            "J. Burrow", "L. Jackson", "B. Mayfield", "B. Nix", "G. Smith", "A. Rodgers", 
            "J. Herbert", "T. Tagovailoa", "R. Wilson", "T. Lawrence"],
        "Star Wars Characters" : ["C-3PO", "R2-D2", "Chewbacca", "Darth Vader", "Emperor Palpatine",
            "Grand Moff Tarkin", "Greedo", "Han Solo", "Luke Skywalker", "Padme", "Princess Leia",
            "Yoda", "Obi-Wan Kenobi", "Jar Jar Binks", "Anakin Skywalker"]
    },
    "ME": {
        "Food": ["Sushi", "Pasta", "Tacos", "Burger", "Steak", "Crawfish", "Butter Chicken",
            "Ramen", "Club Sandwhich", "Soup Dumplings"],
        "Drinks": ["Wine", "Bloody Mary", "Beer", "Tea", "Arnold Palmer", "Matcha", "Coffee",
            "Dr. Pepper", "Coke", "Milk", "Bees Kneez", "Water", "Champagne"],
        "Fast Food": ["Subway", "In-N-Out", "Shake Shack", "McDonald's", "Taco Bell", 
            "Wendy's", "Chick-fil-A", "Chipotle", "Cava", "Culvers", "Chilantro",
            "Feltner Brothers", "Five Guys", "Panera"],
        "Snacks": ["Doritos", "Oreos", "Nerds Gummy Clusters", "Cheeze Itz", "Pickles",
            "Animal Crackers", "Club Crackers", "Chips Ahoy", "Pop Tarts", "Goldsish", 
            "Popcorn", "Pringles", "Kimchi"],
        "Outfits": ["FP White Romper", "Blue Tennis Dress", "Tennis Skirt", "Halloween Costume", "Nightie",
            "Corset Top", "Cargo Skirt", "Bikini", "ACL Fit", "Red PJS"]
    },
    "US": {
        "Noteworthy Dates": ["Drinks at Maxines", "Your Birthday Dinner", "First Date at MM", "Drinks at Vault",
            "Oysters in Austin", "Saltgrass", "Picnic at Wilson", "Homemade Playdoh", "Pumpkin Carving",
            "Juliet", "Moonshine", "Midnight Cowboy"],
        "Date Night Activities": ["Movie Night", "Dinner Out", "Bubble Bath", "Cooking at Home", "Concert",
            "Crafts", "Puzzling", "Board Games", "Polaroids", "Cuddling", "Legos", "Brewery"],
        "Noteworthy Events": ["Corn Maze", "Kate's Wedding", "Cailin's Wedding", "ISCO Anniversary",
            "Krooked Kings Concert", "Royals Game", "Wilderado Concert", "V-Day Dinner", 
            "Float Trip", "Dallas Weekend"],
        "Meals Together": ["Veggie Bowls", "Pastaroni", "Steak Salad", "Homemade Pizza", "Stir-fry",
            "Breakfast", "Soup", "Steak and Potatoes", "Taco Night", "Oven Baked Ribs"],
        "Pizza Spots": ["Mellow Mushroom", "Pizzeria Ruby", "Woodstone", "Mojos", "Smokin Oak",
            "Waystone", "US Pizza", "Tiny Tim's", "Dam Goode Pies", "MJ Pizzeria", "Wicked Wood Fired"],
        "Fayetteville Bars" : ["DSP", "21st Ammendment", "Yee Hawg", "Kingfish", "Shotz", 
            "Halo", "BIG", "Tin Roof", "Piano Bar", "Ryleigh's", "Sideways", "Infusion", "Pinpoint", "Maxines"]
    }
};

let options = [];
let rankings = {};
let currentOptionIndex = 0;

// Shuffle the options array
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Populate subcategories based on selected category
document.getElementById('category').addEventListener('change', () => {
    const selectedCategory = document.getElementById('category').value;
    const subcategorySelect = document.getElementById('subcategory');
    
    subcategorySelect.innerHTML = ''; // Clear current options

    if (gameData[selectedCategory]) {
        const subcategories = Object.keys(gameData[selectedCategory]);
        subcategories.forEach(subcat => {
            const optionElement = document.createElement('option');
            optionElement.value = subcat;
            optionElement.text = subcat;
            subcategorySelect.appendChild(optionElement);
        });
    }
});

// Start the game based on the selected category and subcategory
document.getElementById('startGame').addEventListener('click', () => {
    const selectedCategory = document.getElementById('category').value;
    const selectedSubcategory = document.getElementById('subcategory').value;
    
    if (selectedCategory && selectedSubcategory && gameData[selectedCategory][selectedSubcategory]) {
        options = shuffle([...gameData[selectedCategory][selectedSubcategory]]);
    } else {
        alert("Please select a valid category and subcategory.");
        return;
    }
    
    // Hide category selection and show the game area
    document.getElementById('categorySelect').style.display = 'none';
    document.getElementById('gameArea').style.display = 'block';

    // Reset rankings and start the game
    rankings = {};
    currentOptionIndex = 0;
    displayNextOption();
});

// Display the next option in the game
function displayNextOption() {
    if (currentOptionIndex < options.length) {
        document.getElementById('option').innerText = options[currentOptionIndex];
        document.getElementById('ranking').style.display = 'block';
    } else {
        displayResults();
    }
}

document.getElementById('submitRank').addEventListener('click', () => {
    const rank = parseInt(document.getElementById('rankInput').value);
    const currentOption = options[currentOptionIndex];

    if (rank >= 1 && rank <= 10 && !rankings[rank]) {
        rankings[rank] = currentOption;

        // Update the ranked list display
        updateRankedList();

        currentOptionIndex++;
        document.getElementById('rankInput').value = '';
        displayNextOption();
    } else {
        alert('Invalid rank or rank already taken. Please try again.');
    }
});

// Update the ranked list display
function updateRankedList() {
    const rankedList = document.getElementById('rankedList');
    rankedList.innerHTML = ''; // Clear the existing list

    for (let i = 1; i <= 10; i++) {
        const listItem = document.createElement('li');
        listItem.textContent = `${i}: ${rankings[i] || 'Unranked'}`;
        rankedList.appendChild(listItem);
    }
}

// Display final results
function displayResults() {
    document.getElementById('option').style.display = 'none';
    document.getElementById('ranking').style.display = 'none';

    let resultsHTML = '<h2>Your Final Rankings:</h2><ul>';
    for (let i = 1; i <= 10; i++) {
        resultsHTML += `<li>${i}: ${rankings[i] || 'Unranked'}</li>`;
    }
    resultsHTML += '</ul>';
    document.getElementById('finalResults').innerHTML = resultsHTML;
}
