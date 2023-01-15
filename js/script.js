spot = "none"
Warzon2ALMAZRAH = ["Oasis", "Taraq Village", "Rohan Oil", "Quarry (Al Safwa Quarry)", "Al Mazrah City", "Hydroelectric (Zarqwa Hydroelectric)", "Marshlands (Mawizeh Marshlands)", "Caves (Sattiq Caves)", "Observatory (Zaya Observatory)", "Al Sharim Pass", "Ahkdar Village", "Sa’id City", "Port (Hafid Port)", "Sawah Village", "Cemetery (El Samman Cemetery)", "Sariff Bay", "Al Barga Fortress", "Airport (Al Malik Airport)"]
Warzon2ALMAZRAHNoDetails = ["Oasis", "Taraq Village", "Rohan Oil", "Quarry", "Al Mazrah City", "Hydroelectric", "Marshlands", "Caves", "Observatory", "Al Sharim Pass", "Ahkdar Village", "Sa’id City", "Port", "Sawah Village", "Cemetery", "Sariff Bay", "Al Barga Fortress", "Airport"]

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function shuffle() {
    oldspot = spot
    spot = Warzon2ALMAZRAHNoDetails[Math.floor(Math.random()*Warzon2ALMAZRAHNoDetails.length)]
    if (oldspot == spot) {
        shuffle()
        return
    } else {
        document.getElementById("location").innerHTML = Warzon2ALMAZRAHNoDetails[Math.floor(Math.random()*Warzon2ALMAZRAHNoDetails.length)];
        await sleep(100);
        document.getElementById("location").innerHTML = Warzon2ALMAZRAHNoDetails[Math.floor(Math.random()*Warzon2ALMAZRAHNoDetails.length)];
        await sleep(90);
        document.getElementById("location").innerHTML = Warzon2ALMAZRAHNoDetails[Math.floor(Math.random()*Warzon2ALMAZRAHNoDetails.length)];
        await sleep(80);
        document.getElementById("location").innerHTML = Warzon2ALMAZRAHNoDetails[Math.floor(Math.random()*Warzon2ALMAZRAHNoDetails.length)];
        await sleep(70);
        document.getElementById("location").innerHTML = Warzon2ALMAZRAHNoDetails[Math.floor(Math.random()*Warzon2ALMAZRAHNoDetails.length)];
        await sleep(60);
        document.getElementById("location").innerHTML = Warzon2ALMAZRAHNoDetails[Math.floor(Math.random()*Warzon2ALMAZRAHNoDetails.length)];
        await sleep(50);
        decodePath = `./img/Al Mazrah/${spot}.jpg`
        path = encodeURI(decodePath)
        $.get(path).done(function() { 
            document.getElementById("background").style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${path})`;
        }).fail(function() { 
            document.getElementById("background").style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(./img/dmz.jpg)`;
        })
        document.getElementById("location").innerHTML = spot;
    }
}

document.addEventListener('keydown', (event) => {
    if (event.key === ' ') {
        shuffle()
    }
});

shuffle();