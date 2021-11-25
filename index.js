let config = {
    "lanyard": "https://api.lanyard.rest/v1/users/441666718507597834"
}

function gS() {
    $.getJSON(config.lanyard, (data) => {
        data = data.data;
        if (data.listening_to_spotify == true) {
            $("#spotify").html(`&bull; Listening to <b>${data.spotify.song}</b>`)
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
    })
}

gS();
setInterval(() => {gS()}, 5000)