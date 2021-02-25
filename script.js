const randomWords = [
  "#Jesus",
  "#CustomBible",
  "#HandPainted",
  "#HandLettering",
  "#BibleJournaling",
  "#biblejournalingtools ",
  "#biblejournalingsupplies",
  " #biblejournalingcommuntiy ",
  "#biblejournalinglife",
  " #handlettering ",
  " #lettering",
  " #ipadlettering",
  " #digitallettering ",
  "#procreatelettering",
  " #bible",
  " #faith",
  " #bibleverse ",
  "#biblestudy",
  " #love",
  " #ipaintinmybible",
  " #illustratedfaith ",
  "#icolorinmybible",
  " #paintedbible ",
  "#painted",
  " #paintedbiblecover",
  " #bibleverseoftheday",
  " #mothersdaygifts",
  " #paintingvideo",
  " #likeforlikers",
  " #likeforlove ",
  "#etsyartist",
  " #smallbusinesses",
  " #localbrandid ",
  "#artistic_share",
  " #art_spotlight",
  " #biblejournaling ",
  "#biblestudy",
  " #christiangirl",
  " #christian",
  " #christiangifts ",
  "#artjournaling",
  " #calligraphy",
  "#handletter",
  " #brushlettered",
  " #calligrafriends ",
  "#calligrabasics ",
  "#nclocalbusiness ",
  "#smallbusinessowners ",
  "#localbusinessowners",
  "#gift",
  "#giftedbibles",
  "#paint",
  "#painter",
  "#bespokeart",
  "#paintedbible",
  "#bibleart",
  "#personalisedbible",
  "#journalingbible",
  "#biblejournaling",
  "#acrylicpaint",
  "#hosanna",
  "#wedding",
  "#marriage",
  "#weddingpresent",
  "#baptismpresent",
  "#artdaily",
  "#illustration",
  "#illustrator",
  "#handlettering",
  "#calligraphy",
  "#art",
  "#handpaintedbibles",
  "#paintedbibles",
  "#custombible",
  "#custombiblecover",
  "#paintedscripture",
];

function saveHashtags() {
  input = document.querySelector("input").value;
  localStorage.hashtags = JSON.stringify(input);
}

function randomNum() {
  const rand = randomWords[Math.floor(Math.random() * randomWords.length)];
  return rand;
}

function genHashtags() {
  localStorage.clear();

  const words = [];

  for (var i = 0; i < 30; i++) {
    if (words.indexOf(randomNum()) == -1) {
      words.push(randomNum());
    } else {
      i -= 1;
      continue;
    }
  }

  console.log(words.join(" "));
  hashtagText = document.querySelector(".hashtags");
  hashtagText.textContent = words.join(" ");
}