// Define options for each category and subcategory
const gameData = {
    "YOU": {
        "Food": [
            { name : "Bacon", imageUrl: "https://images.immediate.co.uk/production/volatile/sites/30/2019/11/Bacon-rashers-in-a-pan-72c07f4.jpg?resize=700%2C366" },
            { name : "Pizza", imageUrl: "https://media.istockphoto.com/id/496546118/photo/slice-of-fresh-italian-classic-original-pepperoni-pizza-isolated.jpg?s=612x612&w=0&k=20&c=7aYapAwoe4fO5jRiNMIFiflIztcBAA8s-GLqAmBiSgA=" },
            { name : "Burgers", imageUrl: "https://media.istockphoto.com/id/520410807/photo/cheeseburger.jpg?s=612x612&w=0&k=20&c=fG_OrCzR5HkJGI8RXBk76NwxxTasMb1qpTVlEM0oyg4=" },
            { name : "Pastaroni", imageUrl: "https://target.scene7.com/is/image/Target/GUEST_5246ce80-e869-41fb-9f1a-9f55e122677d?wid=488&hei=488&fmt=pjpeg" },
            { name : "Cesar Salad", imageUrl: "https://www.jocooks.com/wp-content/uploads/2020/07/caesar-salad-1-12.jpg" },
            { name : "Tacos", imageUrl: "https://www.onceuponachef.com/images/2023/08/Beef-Tacos.jpg" },
            { name : "BBQ", imageUrl: "https://img.texasmonthly.com/2024/03/austin-bbq-guide-1.jpg?auto=compress&crop=faces&fit=fit&fm=pjpg&ixlib=php-3.3.1&q=45" },
            { name : "Steak", imageUrl: "https://natashaskitchen.com/wp-content/uploads/2020/03/Pan-Seared-Steak-4.jpg" },
            { name : "Fried Rice", imageUrl: "https://www.madewithlau.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F2r0kdewr%2Fproduction%2F2c90f6410d47972d8555dd5ddcbcc47346957d43-1000x668.jpg&w=3840&q=75" },
            { name : "Chicken Tenders", imageUrl: "https://www.barleyandsage.com/wp-content/uploads/2022/03/buttermilk-chicken-tenders-1200x1200-1.jpg" },
            { name : "Pizza Rolls", imageUrl: "https://midwestfoodieblog.com/wp-content/uploads/2022/06/FINAL-pizza-rolls-3-1-1200x1800.jpg" },
            { name : "Enchiladas", imageUrl: "https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_1:1/k%2FPhoto%2FRecipes%2F08-2023-turkey-enchiladas%2Fturkey-enchiladas-151-vertical" },
        ],
    },
    "ME": {
        "Drinks": [
            { name: "Wine", imageUrl: "https://t3.ftcdn.net/jpg/02/70/04/00/360_F_270040033_G5PQPgMwbQmyQlP5tHDCTEWWcSTBxCb3.jpg" },
            { name: "Bloody Mary", imageUrl: "https://static.wixstatic.com/media/2567e6_d9140a2715e4423fba3e1fc4b104389c~mv2.jpeg/v1/fill/w_1000,h_1000,al_c,q_85,usm_0.66_1.00_0.01/2567e6_d9140a2715e4423fba3e1fc4b104389c~mv2.jpeg" },
            { name: "Beer", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaUv1ZTUxUykrMdzx3yy16SaF4GUfGL9pqSw&s" },
            { name: "Tea", imageUrl: "https://media.istockphoto.com/id/95574723/photo/english-tea-in-a-bone-china-cup.jpg?s=612x612&w=0&k=20&c=ZSdzzGzTz5d5SWXl3Lm5AdRNLWqDmXbmzaO5sqcHiFg=" },
            { name: "Arnold Palmer", imageUrl: "https://media.istockphoto.com/id/483819371/photo/arnold-palmer.jpg?s=612x612&w=0&k=20&c=h3wOCU6aobCOii6t8Bks5Rrs5LBENDGE05RjF25gmpk=" },
            { name: "Matcha", imageUrl: "https://mariamarlowe.com/wp-content/uploads/2021/04/3.jpeg" },
            { name: "Coffee", imageUrl: "https://media.istockphoto.com/id/1409749018/photo/iced-latte-coffee-on-plastic-glass-and-tube-sucking-isolated-white-background-summer-drink.jpg?s=612x612&w=0&k=20&c=GMZsopCg-V6Ayu0puSuhwl6VcvfIoYwmzqVz5eJy9bw=" },
            { name: "Dr. Pepper", imageUrl: "https://images.pexels.com/photos/13599790/pexels-photo-13599790.jpeg?cs=srgb&dl=pexels-luke-landon-314916084-13599790.jpg&fm=jpg" },
            { name: "Coke", imageUrl: "https://t4.ftcdn.net/jpg/02/84/65/61/360_F_284656117_sPF8gVWaX627bq5qKrlrvCz1eFfowdBf.jpg" },
            { name: "Milk", imageUrl: "https://img.freepik.com/free-photo/fresh-milk-mug-jug-wooden-table_114579-18233.jpg" },
            { name: "Beez Kneez", imageUrl: "https://cdn.prod.website-files.com/60d29b6835d7d968e8cf95b5/670c0c72bb2420f892183e2b_61424151accb587092dd4e00_Ginger_Bees_Knees_5.jpeg" },
            { name: "Champagne", imageUrl: "https://vintus.com/wp-content/uploads/2018/08/07-25-26-2016_ayala-2939_-_blanc_de_blancs_by_the_glass.jpg" },
        ],
    },
    "US": {
        "Noteworthy Events": [ 
        { name: "Corn Maze", imageUrl: "https://drive.google.com/uc?export=view&id=1o1G_wCrCnv_jsm8LEGPaGK3mbujgxKOY" }, 
        { name: "Kate's Wedding", imageUrl: "https://drive.google.com/uc?export=view&id=1vbICPadIVDjJai8gDrVtRLSLp1IqjNVq" }, 
        { name: "Cailin's Wedding", imageUrl: "https://drive.google.com/uc?export=view&id=1mJVoKFFpsjZwck5RYSe2-jwOSqmyUbLe" }, 
        { name: "ISCO Anniversary", imageUrl: "https://drive.google.com/uc?export=view&id=1dwemr1X3rbNT1KseR8nR5k1ekGl1oa55" }, 
        { name: "Krooked Kings Concert", imageUrl: "https://drive.google.com/uc?export=view&id=1rAKGnWQzwxrETBGnItg1nZsIFd3QTwWH" }, 
        { name: "Royals Game", imageUrl: "https://drive.google.com/uc?export=view&id=14QsTcH6jpwBhGrj_7CMOmInLVrAO_op_" }, 
        { name: "Wilderado Concert", imageUrl: "https://drive.google.com/uc?export=view&id=1Dm_h6_cQ5qS5pgzdhBJueoMm8_e7Mona" }, 
        { name: "V-Day Dinner", imageUrl: "https://drive.google.com/uc?export=view&id=1yvU-Bi3eHPRMsez8qMxGssuMq6zjJ2Wu" }, 
        { name: "Float Trip", imageUrl: "https://drive.google.com/uc?export=view&id=1JGi49r4WhcQpnBewpjM8esEIVrcTE0oj" }, 
        { name: "Dallas Weekend", imageUrl: "https://drive.google.com/uc?export=view&id=1QeqRlplf8sBEZ4TmYG8PO3R0bFNjdLjv" } 
        ],
    }
};

const password = "11182023";
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

// Password verification
document.getElementById('verifyPassword').addEventListener('click', () => {
    const enteredPassword = document.getElementById('password').value;
    if (enteredPassword === password) {
        document.getElementById('passwordSection').style.display = 'none';
        document.getElementById('categorySelect').style.display = 'block';
    } else {
        alert('Incorrect password. Please try again.');
    }
});

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
    
    document.getElementById('categorySelect').style.display = 'none';
    document.getElementById('gameArea').style.display = 'block';

    rankings = {};
    currentOptionIndex = 0;
    document.getElementById('finalResults').innerHTML = '';
    document.getElementById('option').style.display = 'block';

    displayNextOption();
});

// Display the next option in the game
function displayNextOption() {
    if (currentOptionIndex < options.length) {
        const currentOption = options[currentOptionIndex];

        // Check if image URL is defined
        if (currentOption.imageUrl) {
            document.getElementById('optionImage').src = currentOption.imageUrl;
            document.getElementById('optionImage').alt = currentOption.name;
        } else {
            console.error(`Image URL not found for option: ${currentOption.name}`);
            document.getElementById('optionImage').src = ''; // Clear image if URL is missing
            document.getElementById('optionImage').alt = 'Image not available';
        }

        document.getElementById('option').innerText = currentOption.name;
    } else {
        displayResults();
    }
}

// Assign current option to selected rank and update box
document.querySelectorAll('.rankingBox').forEach(box => {
    box.addEventListener('click', () => {
        const rank = box.getAttribute('data-rank');
        const currentOption = options[currentOptionIndex];

        if (!rankings[rank]) {
            rankings[rank] = currentOption;
            box.innerText = `${rank}: ${currentOption.name}`;

            currentOptionIndex++;
            displayNextOption();

            checkAllAssigned();
        } else {
            alert("This rank is already assigned. Please choose an unassigned rank.");
        }
    });
});

// Check if all rankings are assigned and display results if done
function checkAllAssigned() {
    if (Object.keys(rankings).length === 10) {
        displayResults();
        document.getElementById('returnButton').style.display = 'block';
    }
}

// Display final results
function displayResults() {
    document.getElementById('option').style.display = 'none';

    let resultsHTML = '<h2>Your Final Rankings:</h2><ul>';
    for (let i = 1; i <= 10; i++) {
        const rankedItem = rankings[i] ? `${rankings[i].name}` : 'Unranked';
        resultsHTML += `<li>${i}: ${rankedItem}</li>`;
    }
    resultsHTML += '</ul>';
    document.getElementById('finalResults').innerHTML = resultsHTML;
}

// Reset game state when returning to category selection
document.getElementById('returnButton').addEventListener('click', () => {
    document.getElementById('gameArea').style.display = 'none';
    document.getElementById('categorySelect').style.display = 'block';
    document.getElementById('finalResults').innerHTML = '';
    document.getElementById('returnButton').style.display = 'none';

    rankings = {};
    document.querySelectorAll('.rankingBox').forEach(box => {
        const rank = box.getAttribute('data-rank');
        box.innerText = `${rank}`;
    });
});