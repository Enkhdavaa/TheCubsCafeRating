const challange = [
  {
    ch: "asasjdhf kjas dhf kasdf hklas hdflk kljah jkh df klahskdfh klash dfk askdfh kas hdfdf",
    deadline: "",
  },
  {
    ch: "as asdf alsd fkjzhxckvh ksjdh f jklhckjvh kashd fkl acjvh kasd f asdfh zkxjch v klzxh df",
    deadline: "",
  },
  {
    ch: "xz asjdhf klzxcjkvh kasjdh f kxh cv haskld fkh cv zxklch vklzjxch v kzx hcvk jhdfh akl hcvz",
    deadline: "",
  },
  {
    ch: "we asdjhf klzxc nv euiry fiozdrjfh sd fjh asxkfh asjkhj jkahj jasdfhasjdhfkash asdfrt",
    deadline: "",
  },
  {
    ch: "tyxgv lasdh flk jalkdj lkaswd jfkl jxclf jl;asd jfl; ajc;f ja;sldjf;lz jcvlksdhfrkhskdjvh kljxhkljhdf b",
    deadline: "",
  },
  {
    ch: "er5dklfja sl;kcv jklasd jfl kjxclkvj dlkfjflkrj  l;dc jvx jlej gl; xc;vbj xdjhg skldjfh klj thgx",
    deadline: "",
  },
  {
    ch: "56yhasd fkljas dfkh kdcvh kj fk jadckv hja hfjke fka hv jksdh g kljdh fg kshdclkv hsdkljfh dcgn",
    deadline: "",
  },
  {
    ch: "76khkasjxcv klerh f uhzdxcvh klsj hgkl jsklcjvh ejrh gisdjh vljkdh vb kljsh gkl jsdhfkljh jfg",
    deadline: "",
  },
  {
    ch: "ew5adcvj kc hvkl jsdflkj hsdklcjh xckljv bhklejhg klsjcvh  lksjhgvskljdfh rgsdf",
    deadline: "",
  },
  { ch: "xer3r", deadline: "" },
  { ch: "zxdfgfu7f", deadline: "" },
  { ch: "sergts45tg", deadline: "" },
];

const elements = [];

const day1Element = document.getElementById("day1");
elements.push(day1Element);
const day2Element = document.getElementById("day2");
elements.push(day2Element);
const day3Element = document.getElementById("day3");
elements.push(day3Element);
const day4Element = document.getElementById("day4");
elements.push(day4Element);
const day5Element = document.getElementById("day5");
elements.push(day5Element);
const day6Element = document.getElementById("day6");
elements.push(day6Element);
const day7Element = document.getElementById("day7");
elements.push(day7Element);
const day8Element = document.getElementById("day8");
elements.push(day8Element);
const day9Element = document.getElementById("day9");
elements.push(day9Element);
const day10Element = document.getElementById("day10");
elements.push(day10Element);
const day11Element = document.getElementById("day11");
elements.push(day11Element);
const day12Element = document.getElementById("day12");
elements.push(day12Element);

const popover = document.getElementById("ch-popover");
const popoverText = document.getElementById("popover-text");
const popoverButton = document.getElementById("popover-button");

popoverButton?.addEventListener("click", () => {
  if (popover != null) {
    popover.hidden = true;
  }
});

for (const [index, element] of elements.entries()) {
  element?.addEventListener("click", () => {
    const challangeText = challange[index].ch;
    if (popover != null) {
      if (popover.hidden) {
        if (popoverText != null) {
          popoverText.innerText = challangeText;
          popover.hidden = false;
        }
      } else {
        popover.hidden = true;
      }
    }
  });
}
