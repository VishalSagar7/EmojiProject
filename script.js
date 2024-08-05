const searchBtn = document.getElementById('search-btn');
const emojiDiv = document.getElementById('emoji-div');
const searchInput = document.getElementById('search-input');

const facebtn = document.getElementById('facebtn');
const heartbtn = document.getElementById('heartbtn');
const bookbtn = document.getElementById('bookbtn');
const handbtn = document.getElementById('handbtn');
const sportbtn = document.getElementById('sportbtn');
const allbtn = document.getElementById('allbtn');


bookbtn.addEventListener('click', () => {
    renderEmojis('book');
});
heartbtn.addEventListener('click', () => {
    renderEmojis('heart');
});
facebtn.addEventListener('click', () => {
    renderEmojis('face');
});
handbtn.addEventListener('click', () => {
    renderEmojis('hand');
});
sportbtn.addEventListener('click', () => {
    renderEmojis('sport');
});
allbtn.addEventListener('click', () => {
    renderEmojis();
});



searchInput.addEventListener('keyup', () => {
    const searchQuery = searchInput.value;
    renderEmojis(searchQuery);
});

function renderEmojis(searchQuery = '') {

    const filteredEmojis = emojiList.filter((emoji) => {
        return emoji.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
               emoji.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
               emoji.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    });

    // Clear existing emojis
    emojiDiv.innerHTML = '';

    filteredEmojis.forEach((emoji) => {
        const individualEmojiDiv = document.createElement('div');
        individualEmojiDiv.style.height = '100px';
        individualEmojiDiv.style.width = '100px';
        individualEmojiDiv.style.display = 'flex';
        individualEmojiDiv.style.justifyContent = 'center';
        individualEmojiDiv.style.alignItems = 'center';
        individualEmojiDiv.style.fontSize = '50px';
        individualEmojiDiv.style.borderRadius = '5px';
        individualEmojiDiv.style.cursor = 'pointer';
        individualEmojiDiv.style.backgroundColor = 'violet';
        individualEmojiDiv.style.transition = 'transform 200ms'; // Ensure transition is applied to transform

        individualEmojiDiv.addEventListener('mouseenter', () => {
            individualEmojiDiv.style.transform = 'scale(1.1)';
        });
        individualEmojiDiv.addEventListener('mouseleave', () => {
            individualEmojiDiv.style.transform = 'scale(1)';
        });
        individualEmojiDiv.addEventListener('click', (e) => {
            navigator.clipboard.writeText(emoji.emoji)
            console.log(e);
            alert("Copied to clipboard")
        })

        const eachEmoji = emoji.emoji;
        individualEmojiDiv.innerHTML = eachEmoji;

        emojiDiv.appendChild(individualEmojiDiv);
    });
}

// Call renderEmojis with an empty string initially to show all emojis
window.addEventListener('load', () => {
    renderEmojis('');
});
