let config = {
    "lanyard": "https://api.lanyard.rest/v1/users/441666718507597834"
}

function gS() {
    $.getJSON(config.lanyard, (data) => {
        data = data.data;
        spotifyLink = "https://open.spotify.com/track/" + data.spotify.track_id;
        if (data.active_on_discord_mobile) {
            $("#status").html("Online On Mobile")
            $("#status_icon").css("color", "#abffbf")
        }
        else {
            if (data.listening_to_spotify == true) {
                $("#spotify").html(`&bull; Listening to:<b><u><a href="${spotifyLink}" target="_blank">${data.spotify.artist} - ${data.spotify.song}</a></u></b>`)
                $("#status_icon").css("color", "#abffbf")
            } else {
                $("#spotify").addClass("invis")
            }
            if (data.discord_status == "dnd" || data.discord_status == "online") {
                $("#status").html("Online")
                $("#status_icon").css("color", "#abffbf")
            } else if (data.discord_status == "idle") {
                $("#status").html("Away")
                $("#status_icon").css("color", "#F2A6AB")
            } else if(data.discord_status == "offline") {
                $("#status").html("Offline")
                $("#status_icon").css("color", "#d4d4d4")
            }
        }
    })
}

gS();
setInterval(() => {gS()}, 5000)
