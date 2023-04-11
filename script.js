function toggleDiv() {
    const div = document.getElementById("my_div");

    // if (div.style.visibility === "hidden") {
    //     div.style.visibility = "visible";
    // } else {
    //     div.style.visibility = "hidden";
    // }
    if (div.style.display === "none") {
        div.style.display = "block";
    } else {
        div.style.display = "none";
    }
}

function sleep(ms) {
    return new Promise((r) => setTimeout(r, ms));
}

async function test() {
    const div = document.getElementById("my_div");
    if (div.style.opacity === "0") {
        div.style.display = "block";
        await sleep(300);
        div.style.opacity = "1";
    } else {
        div.style.opacity = "0";
        await sleep(300);
        div.style.display = "none";
    }
}

function chatbtnclick() {
    alert("채팅하기");
}
