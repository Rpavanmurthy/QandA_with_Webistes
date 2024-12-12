// Check if overlay already exists to avoid duplicates
if (!document.querySelector('.overlay')) {
    // Create overlay container
    const overlay = document.createElement('div');
    overlay.className = 'overlay';
  
    // Create overlay content
    const overlayContent = document.createElement('div');
    overlayContent.className = 'overlay-content';
    overlayContent.innerHTML = `
      <!-- The overlay -->
      <div class="overlay" id="overlay">
      <div class="overlay-content">
        <button class="close-btn" id="closeOverlayBtn">&times;</button>
        <h2 style="color: black">Ask for anything on this website<br><br>
        <input style="width: 80%; padding-top: 20px; padding-bottom: 20px;"type="input", placeholder="Ask Buddy"></input>
      </div>
      </div>
      <script>
        // Get references to elements
        const overlay = document.getElementById('overlay');
        const openOverlayBtn = document.getElementById('openOverlayBtn');
        const closeOverlayBtn = document.getElementById('closeOverlayBtn');

        // Show the overlay
        openOverlayBtn.addEventListener('click', () => {
        overlay.style.display = 'block';
        });

        // Hide the overlay
        closeOverlayBtn.addEventListener('click', () => {
        overlay.style.display = 'none';
        });

        // Close overlay when clicking outside of it
        overlay.addEventListener('click', (event) => {
        if (event.target === overlay) {
        overlay.style.display = 'none';
        }
        });
      </script>
    `;
  
    // Append content to overlay
    overlay.appendChild(overlayContent);
  
    // Append overlay to the body
    document.body.appendChild(overlay);
  
    // Close button functionality
    const closeButton = overlay.querySelector('.close-btn');
    closeButton.addEventListener('click', () => {
      overlay.style.display = 'none';
    });
  }
  