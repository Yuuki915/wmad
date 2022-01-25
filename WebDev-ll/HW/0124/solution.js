// 01
const parag = document.querySelector("p");
parag.innerHTML = parag.innerText
  .split(" ")
  .map((word) =>
    word.length > 8
      ? `<span style="background-color: yellow">${word}</span>`
      : word
  )
  .join(" ");

//02
const link = document.createElement("a"); // <a> </a>
link.href = "https://officeipsum.com"; // <a href="..."></a>
link.innerText = "office ipsum"; // <a href="...">office ipsum</a>
document.body.appendChild(link);

// 03
parag.innerHTML = parag.innerHTML.split(".").join(".</p><p>") + "</p>";
// これでもおk ↓↓↓
// parag.innerHTML = parag.innerHTML.split(".").join(".<br>");

// 04
const wordCount = parag.textContent.trim().split(" ").length;
const wordCountEl = document.createElement("div");
wordCountEl.innerText = `${wordCount} words`;
document.body.insertBefore(wordCountEl, parag);

// 05
parag.innerHTML = parag.innerHTML.replaceAll("?", "🤔").replaceAll("!", "😲");
