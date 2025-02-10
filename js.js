const videos = [
    { title: "HTML Full Course", id: "qz0aGYrrlhU" },
    { title: "CSS Crash Course", id: "yfoY53QXEnI" },
    { title: "JavaScript Full Course", id: "PkZNo7MFNFg" },
    { title: "React.js Tutorial", id: "bMknfKXIFA8" },
    { title: "Node.js Crash Course", id: "Oe421EPjeBE" },
    { title: "Python for Beginners", id: "rfscVS0vtbw" },
    { title: "Django Tutorial", id: "F5mRW0jo-U4" },
    { title: "Flask Web Development", id: "Z1RJmh_OqeA" },
    { title: "PHP for Beginners", id: "OK_JCtrrv-c" },
    { title: "MySQL Full Course", id: "7S_tz1z_5bA" },
    { title: "Java Full Course", id: "grEKMHGYyns" },
    { title: "C++ Full Course", id: "vLnPwxZdW4Y" },
    { title: "C# Full Course", id: "GhQdlIFylQ8" },
    { title: "Flutter Full Course", id: "VPvVD8t02U8" },
    { title: "Kotlin Android Development", id: "fis26HvvDII" },
    { title: "Dart Programming", id: "5xlVP04905w" },
    { title: "GoLang for Beginners", id: "YS4e4q9oBaU" },
    { title: "Rust Programming", id: "zF34dRivLOw" },
    { title: "TypeScript Tutorial", id: "BwuLxPH8IDs" },
    { title: "GraphQL Crash Course", id: "ed8SzALpx1Q" },
    { title: "MongoDB Tutorial", id: "-56x56UppqQ" },
    { title: "SQL for Beginners", id: "HXV3zeQKqGY" },
    { title: "Firebase Tutorial", id: "9kRgVxULbag" },
    { title: "TensorFlow Machine Learning", id: "tPYj3fFJGjk" },
    { title: "Artificial Intelligence Course", id: "JMUxmLyrhSk" },
    { title: "Data Structures & Algorithms", id: "8hly31xKli0" },
    { title: "Linux Command Line for Beginners", id: "wBp0Rb-ZJak" }, // ✅ NEW VIDEO
    { title: "Git & GitHub Crash Course", id: "RGOj5yH7evk" }, // ✅ NEW VIDEO

];

function loadVideos(videoList = videos) {
    const container = document.getElementById("video-container");
    container.innerHTML = "";

    videoList.forEach(video => {
        container.innerHTML += `
            <div class="video">
                <iframe src="https://www.youtube.com/embed/${video.id}" frameborder="0" allowfullscreen></iframe>
                <div class="video-info">
                    <h3>${video.title}</h3>
                    
                    <button class="btn" onclick="downloadVideo('${video.id}')">Download</button>
                </div>
            </div>
        `;
    });
}

function searchVideos() {
    const query = document.getElementById("search-box").value.toLowerCase();
    const filteredVideos = videos.filter(video => video.title.toLowerCase().includes(query));
    loadVideos(filteredVideos);
}

function playVideo(videoId) {
    window.open(`https://www.youtube.com/watch?v=${videoId}`, "_blank");
}

function downloadVideo(videoId) {
    window.open(`https://www.y2mate.com/youtube/${videoId}`, "_blank");
}

function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}

function startVoiceSearch() {
    const recognition = new(window.SpeechRecognition || window.webkitSpeechRecognition)();

    recognition.onstart = function() {
        console.log("Voice recognition started...");
    };

    recognition.onspeechend = function() {
        console.log("Voice recognition ended.");
        recognition.stop();
    };

    recognition.onresult = function(event) {
        const transcript = event.results[0][0].transcript;
        document.getElementById("search-box").value = transcript;
        searchVideos(); // Perform search immediately
    };

    recognition.start();
}


// Load videos on page load
window.onload = () => loadVideos();