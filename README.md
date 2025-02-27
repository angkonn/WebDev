<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Flexbox Layout Example</title>
  <style>
    /* Reset some default margins */
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    /* Set up the body style */
    body {
      font-family:
      height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    /* Flex container */
    .container {
      display: flex;
      flex-wrap: wrap;
      height: 90vh;
      width: 90vw;
    }

    /* Navigation column on the left */
    .nav {
      background-color: #c5e1a5;
      padding: 20px;
      font-size: 24px;
      font-weight: bold;
      flex: 0 0 20%; /* 20% width for the nav */
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
    }

    /* Content column on the right */
    .content {
      display: flex;
      flex-direction: column;
      flex: 1; /* Take the remaining space (80%) */
    }

    /* The layout for header, article, and footer */
    .header {
      background-color: #a3d673;
      padding: 20px;
      text-align: center;
      font-size: 24px;
      font-weight: bold;
      flex: 0 1 100px;
    }

    .article {
      background-color: white;
      padding: 20px;
      flex: 1;
      font-size: 24px;
      text-align: center;
    }

    .footer {
      background-color: #a3d673;
      padding: 20px;
      text-align: center;
      font-size: 24px;
      font-weight: bold;
      flex: 0 1 50px;
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
</body>
</html>
