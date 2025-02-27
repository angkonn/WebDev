# Animated Flexbox Layout Demo

Check out the [Live Demo](https://<your-github-username>.github.io/<repo-name>/) of a super animated and movable flexbox layout.

Below is the complete HTML code used in the demo:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Flexbox Layout - Animated and Movable</title>
  <style>
    /* Reset some default margins */
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    body {
      font-family: Arial, sans-serif;
      background: #f0f0f0;
      height: 100vh;
      overflow: hidden;
    }
    /* Draggable container */
    .container {
      display: flex;
      flex-wrap: wrap;
      height: 90vh;
      width: 90vw;
      position: absolute;
      left: 5vw;
      top: 5vh;
      cursor: move;
      border: 2px solid #333;
    }
    /* Keyframes for various animations */
    @keyframes colorCycle {
      0% { background-color: #c5e1a5; }
      50% { background-color: #aed581; }
      100% { background-color: #c5e1a5; }
    }
    @keyframes bounce {
      0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
      40% { transform: translateY(-20px); }
      60% { transform: translateY(-10px); }
    }
    @keyframes pulse {
      0% { transform: scale(1); }
      50% { transform: scale(1.05); }
      100% { transform: scale(1); }
    }
    /* Navigation column on the left */
    .nav {
      padding: 20px;
      font-size: 24px;
      font-weight: bold;
      flex: 0 0 20%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      animation: colorCycle 3s infinite;
    }
    /* Content column on the right */
    .content {
      display: flex;
      flex-direction: column;
      flex: 1;
    }
    /* Header */
    .header {
      background-color: #a3d673;
      padding: 20px;
      text-align: center;
      font-size: 24px;
      font-weight: bold;
      flex: 0 1 100px;
      animation: bounce 2s infinite;
    }
    /* Article */
    .article {
      background-color: white;
      padding: 20px;
      flex: 1;
      font-size: 24px;
      text-align: center;
      animation: pulse 3s infinite;
    }
    /* Footer */
    .footer {
      background-color: #a3d673;
      padding: 20px;
      text-align: center;
      font-size: 24px;
      font-weight: bold;
      flex: 0 1 50px;
      animation: pulse 3s infinite;
    }
  </style>
</head>
<body>
  <div class="container">
    <nav class="nav">Nav</nav>
    <div class="content">
      <header class="header">Header</header>
      <article class="article">Article</article>
      <footer class="footer">Footer</footer>
    </div>
  </div>
  <script>
    // Make the container draggable
    const container = document.querySelector('.container');
    let isDragging = false;
    let offsetX = 0;
    let offsetY = 0;
    container.addEventListener('mousedown', (e) => {
      isDragging = true;
      offsetX = e.clientX - container.offsetLeft;
      offsetY = e.clientY - container.offsetTop;
    });
    document.addEventListener('mousemove', (e) => {
      if (isDragging) {
        container.style.left = (e.clientX - offsetX) + 'px';
        container.style.top = (e.clientY - offsetY) + 'px';
      }
    });
    document.addEventListener('mouseup', () => {
      isDragging = false;
    });
  </script>
</body>
</html>
