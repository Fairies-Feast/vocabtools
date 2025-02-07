const vocabDiv = document.createElement("div");
Object.assign(vocabDiv.style, {
  zIndex: "1000",
  textAlign: "center",
  fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  position: "fixed",
  top: "0",
  right: "0",
  background: "#111",
  color: "#999",
  overflow: "hidden",
  height: "30px",
  width: "30px",
  transition: "0.5s",
  borderRadius: "10px"
});
vocabDiv.addEventListener("mouseenter", () => {
  vocabDiv.style.height = "300px";
  vocabDiv.style.width = "200px";
  contentDiv.style.opacity = "1";
});
vocabDiv.addEventListener("mouseleave", () => {
  vocabDiv.style.height = "30px";
  vocabDiv.style.width = "30px";
  contentDiv.style.opacity = "0";
});
const contentDiv = document.createElement("div");
contentDiv.style.opacity = "0"; 
contentDiv.style.transition = "inherit";

const heading = document.createElement("h3");
heading.textContent = "Vocabtools Jamchat";
heading.style.fontWeight = "100";

const para1 = document.createElement("p");
para1.textContent = "Joe: Hi guys";
para1.style.fontWeight = "100";

const para2 = document.createElement("p");
para2.style.fontWeight = "100";
const input = document.createElement("input");
input.type = "text";
para2.textContent = "John: ";
para2.appendChild(input);

contentDiv.appendChild(heading);
contentDiv.appendChild(para1);
contentDiv.appendChild(para2);
vocabDiv.appendChild(contentDiv);
document.body.appendChild(vocabDiv);
