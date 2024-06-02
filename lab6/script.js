window.onload = function() {
    "use strict";

   // Get DOM elements
    const textArea = document.getElementById("text-area");
    const startBtn = document.getElementById("start");
    const stopBtn = document.getElementById("stop");
    const animationSlt = document.getElementById("animation");
    const fontSlt = document.getElementById("fontsize");
    const turboChk = document.getElementById("turbo");

    // Constants for intervals
    const DEFAULT_INTERVAL = 250;
    const TURBO_INTERVAL = 50;

    // Variables for animation state
    let animationInterval = null;
    let frameIndex = 0;
    let frames = [];

    // Function to start the animation
    function startAnimation() {
        frames = textArea.value.split("=====\n");
        frameIndex = 0;
        toggleControls(true);

        const interval = turboChk.checked ? TURBO_INTERVAL : DEFAULT_INTERVAL;
        animationInterval = setInterval(displayNextFrame, interval);
    }

    // Function to stop the animation
    function stopAnimation() {
        clearInterval(animationInterval);
        animationInterval = null;
        toggleControls(false);
        textArea.value = frames.join("=====\n");
    }

    // Function to display the next frame
    function displayNextFrame() {
        textArea.value = frames[frameIndex++];
        if (frameIndex === frames.length) frameIndex = 0;
    }

    // Function to toggle controls
    function toggleControls(isAnimating) {
        startBtn.disabled = isAnimating;
        stopBtn.disabled = !isAnimating;
        animationSlt.disabled = isAnimating;
    }

    // Event listeners
    startBtn.addEventListener("click", startAnimation);
    stopBtn.addEventListener("click", stopAnimation);

    animationSlt.addEventListener("change", () => {
        const selectedAnimation = animationSlt.value;
        textArea.value = ANIMATIONS[selectedAnimation] || "";
    });

    fontSlt.addEventListener("change", () => {
        textArea.style.fontSize = fontSlt.value;
    });

    turboChk.addEventListener("change", () => {
        if (animationInterval) {
            clearInterval(animationInterval);
            const interval = turboChk.checked ? TURBO_INTERVAL : DEFAULT_INTERVAL;
            animationInterval = setInterval(displayNextFrame, interval);
        }
    });
};
