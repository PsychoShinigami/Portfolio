const onePiece= document.getElementById('button-1')
const naruto= document.getElementById('button-2')
const bleach= document.getElementById('button-3')

const hasVoted = localStorage.getItem('animeVoted');
if (hasVoted === 'true') {
    onePiece.disabled = true;
    naruto.disabled = true;
    bleach.disabled = true;
    onePiece.innerText = "Voted";
    naruto.innerText= "Voted";
    bleach.innerText= "Voted";
}

let choice

onePiece.addEventListener('click', () => {
    document.querySelector('.vote-overlay').style.display = 'flex';
    choice= "One Piece"
})

naruto.addEventListener('click', () => {
    document.querySelector('.vote-overlay').style.display = 'flex';
    choice= "Naruto"
})

bleach.addEventListener('click', () => {
    document.querySelector('.vote-overlay').style.display = 'flex';
    choice= "Bleach"
})

const regVote= document.getElementById('reg-vote')
regVote.addEventListener('click', () => {
    const username= document.getElementById('username').value   
    let voteElement = document.getElementById(choice);
    let currentCount = parseInt(voteElement.innerText.split(' ')[1]);

    fetch("https://PsychoShinigami.pythonanywhere.com/reg-vote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({name: username, anime: choice, currentCount: currentCount+1 })
    })
    .then(res => res.json())
    .then(data => {
        if(data.status === "success") {
            localStorage.setItem('animeVoted', 'true');
            alert("Vote Registered!");
            location.reload();
        }
    });
})

fetch("https://PsychoShinigami.pythonanywhere.com/results")
    .then(res => res.json())
    .then(data => {
        if(data.status === "success") {
            const counts = data.counts;
            const totalVotes = counts["One Piece"] + counts["Naruto"] + counts["Bleach"];

            document.getElementById("One Piece").innerText = `Votes: ${counts["One Piece"]}`;
            document.getElementById("Naruto").innerText = `Votes: ${counts["Naruto"]}`;
            document.getElementById("Bleach").innerText = `Votes: ${counts["Bleach"]}`;
            document.getElementById("total-votes").innerText = `Total votes: ${totalVotes}`;

            if (totalVotes > 0) {
                const opPer = (counts["One Piece"] / totalVotes * 100).toFixed(1);
                const narPer = (counts["Naruto"] / totalVotes * 100).toFixed(1);
                const blePer = (counts["Bleach"] / totalVotes * 100).toFixed(1);

                document.getElementById("One Piece%").innerText = `Votes percentage: ${opPer}%`;
                document.getElementById("Naruto%").innerText = `Votes percentage: ${narPer}%`;
                document.getElementById("Bleach%").innerText = `Votes percentage: ${blePer}%`;
            }
        }
    });
