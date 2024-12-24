document.addEventListener('DOMContentLoaded', function() {
    const body = document.querySelector('.body');
    for (let i = 0; i < 50; i++) { // Adjust the number of snowflakes as needed
        const snowflake = document.createElement('div');
        snowflake.className = 'snowflake';
        snowflake.style.left = Math.random() * 100 + '%';
        snowflake.style.animationDuration = (Math.random() * 5 + 5) + 's'; // Random duration between 5s and 10s
        snowflake.style.animationDelay = Math.random() * 5 + 's'; // Random delay up to 5s
        body.appendChild(snowflake);
    }

    const starsContainer = document.querySelector('.stars');
    const numStars = 100; // Adjust the number of stars as needed

    for (let i = 0; i < numStars; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.top = Math.random() * 100 + '%';
        star.style.left = Math.random() * 100 + '%';
        star.style.animationDuration = (Math.random() * 2 + 1) + 's'; // Random duration between 1s and 3s
        starsContainer.appendChild(star);
    }

    const mElement = document.querySelector('.merry .m');
    const erryElement = document.querySelector('.merry .erry');
    const christmasElement = document.querySelector('.christmas');
    const balloonElement = document.querySelector('.balloon');

    // Start the balloon animation
    balloonElement.style.animation = 'balloonFloat 4s forwards';
    
    // Start the "M" animation after the balloon animation
    setTimeout(() => {
        mElement.style.opacity = '1';
        mElement.style.animation = 'mAppear 2s forwards';
    }, 2000);

    // Make the balloon disappear after it brings the "M"
    setTimeout(() => {
        balloonElement.style.animation = 'balloonDisappear 2s forwards';
    }, 4000);

    // Start the "erry" and "Christmas" animations after the "M" animation
    setTimeout(() => {
        erryElement.style.opacity = '1';
        erryElement.style.animation = 'erryAppear 2s forwards';
        christmasElement.style.opacity = '1';
        christmasElement.style.animation = 'christmasAppear 2s forwards';
    }, 4000);

    // Removed code for displaying Santa images

    const gifts = document.querySelectorAll('.gift');
    gifts.forEach(gift => {
        gift.addEventListener('click', function() {
            displayWishMessage();
        });
    });

    const messageElement = document.querySelector('.message');
    messageElement.addEventListener('click', function() {
        displayWishMessage();
    });

    const merryChristmasElement = document.querySelector('.message');
    const clickHint = document.createElement('div');
    clickHint.className = 'click-hint';
    clickHint.textContent = 'Click here!';
    merryChristmasElement.appendChild(clickHint);

    merryChristmasElement.addEventListener('click', function() {
        displayWishMessage();
        // Remove the click hint after clicking
        if (clickHint) {
            clickHint.style.display = 'none';
        }
    });

    function displayWishMessage() {
        const wishMessage = document.createElement('div');
        wishMessage.className = 'wish-message';
        wishMessage.innerHTML = '<span class="word">Wishing</span> <span class="word">you</span> <span class="word">a</span> <span class="word">Merry</span> <span class="word">Christmas</span> <span class="word">and</span> <span class="word">a</span> <span class="word">Happy</span> <span class="word">New</span> <span class="word">Year</span><span class="word">!</span>';
        document.body.appendChild(wishMessage);

        setTimeout(() => {
            const words = document.querySelectorAll('.wish-message .word');
            words.forEach((word, index) => {
                word.style.animation = `flyAway 1s forwards ${index * 0.5}s`;
            });
        }, 2000);
    }

    // Add sway animation to Christmas trees
    const trees = document.querySelectorAll('.christmas-tree');
    trees.forEach(tree => {
        tree.style.animation = 'sway 2s infinite alternate';
    });
});