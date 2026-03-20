const la = document.getElementById("larrow");
const ra = document.getElementById("rarrow");

const pg0 = document.getElementById("cover");
const pg1 = document.getElementById("pageone");
const pg2 = document.getElementById("pagetwo");
const pg3 = document.getElementById("pagethree");
const pg4 = document.getElementById("pagefour");

const pglist = [pg0, pg1, pg2, pg3, pg4];

let pgcount = 0;

function arrowupdater() {
	if (pgcount == 0) {
		la.style.display=`none`;
		ra.style.display=`block`;
	} else if (pgcount == 2) {
		ra.style.display=`none`;
		la.style.display=`block`;
	} else {
		ra.style.display=`block`;
		la.style.display=`block`;
	}
}

function pageupdater() {
	if (pgcount == 0) {
		for (const el of pglist) {
			console.log(el);
			el.style.display=`none`;
		}
		pg0.style.display=`flex`;
	} else if (pgcount == 1) {
		for (const el of pglist) {
			el.style.display=`none`;
		}
		pg1.style.display=`flex`;
		pg2.style.display=`flex`;
	} else if (pgcount == 2) {
		for (const el of pglist) {
			el.style.display=`none`;
		}
		pg3.style.display=`flex`;
		pg4.style.display=`flex`;
	}
}

arrowupdater()
pageupdater()

la.addEventListener("click", () => {
	pgcount--;
	arrowupdater()
	pageupdater()
});
ra.addEventListener("click", () => {
	pgcount++;
	arrowupdater()
	pageupdater()
});
