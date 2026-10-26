document.querySelectorAll(".stack").forEach((card, i) => {
	//ვეძებთ კლასს .stack, ვანიჭებთ card ცვლადს და loop ში ვაგრძელებთ
	const img = card.querySelector(".card-image").src; // ვპოულობთ .stack კონტეინერის შიგნით .card-image კლასს და ვწერთ ცვლადში img
	card.style.setProperty("--img-stack", `url(${img})`); // ვიღებთ img დან src და setProperty-თ ქარდს style პარამეტრით ვუმატებთ css ცვლადს --img-stack
});

//ვეძებთ კლასით გამხსნელ ღილაკს და ასევე დამხურავ ღილაკს და ვუმატებთ კლასს
const activity_button = document
	.querySelector(".top-nav .icon-users")
	.closest("a");
const close_button = document
	.querySelector(".slide-controls .icon-close")
	.closest("a");
const activity_sidebar = document.querySelector(".activity");

activity_button.addEventListener("click", (e) => {
	e.preventDefault();
	activity_sidebar.classList.toggle("open");
});

close_button.addEventListener("click", (e) => {
	e.preventDefault();
	activity_sidebar.classList.remove("open");
});

// Light mode logic here, added save in browser local storage
const changeTheme = document.getElementById("theme-toggle");
function toggleTheme() {
  const isLight = document.body.classList.toggle("light-mode");
  if (isLight) {
    changeTheme.classList.remove("dark");
    localStorage.setItem("theme", "light"); //set value for key theme (light)
  } else {
    changeTheme.classList.add("dark");
    localStorage.setItem("theme", "default"); //set value for key theme (default for default dark theme)
  }
}

changeTheme.addEventListener("click", toggleTheme); //get toggle bar by click event
const savedTheme = localStorage.getItem("theme"); //get key from local storage
if (savedTheme === "light") { //check if value of theme is light
  document.body.classList.add("light-mode"); //add class light-mode for body
  changeTheme.classList.remove("dark"); //remove dark class
} else {
  document.body.classList.remove("light-mode"); // if choosen or local storage is empty, remove light-mode
  changeTheme.classList.add("dark"); // and add dark class to toggle bar
}

const images = document.querySelectorAll(".card-image"); //ეძებს ყველა კლასს რომელსაც ააქვს სახელი .card-image
images.forEach((img) => {
	// ციკლი სადაც დანარჩენ ლოგიკას ასრულებს
	const applyColor = () => {
		// კონტსანტა რომლის მეშვეობითაც სურათიდან მიღებულ ფერს ადებს .browse-card -ზე
		const color = getAverageColor(img); // ვღებულობთ კონსტანტას ფერით, მიღებული ფუნქციიდან getAverageColor()
		const wrapper = img.closest(".browse-card"); // ვწვდებით სურათის მშობელ კონტეინერს .browse-card და ვწერთ კონსტანტაში wrapper

		if (wrapper) {
			//გადამოწმებაა თუ ნამდვილად არის wrapper კონსტანტა მაშინ ვანიჭებთ ბექგრაუნდ ფერს
			wrapper.style.backgroundColor = color;
		}
	};

	if (img.complete) {
		//დამატებითი გადამოწმებები
		applyColor();
	} else {
		img.addEventListener("load", applyColor);
	}
});

function getAverageColor(img) {
	//აკეთებს სურათიდან canvas და ძირითად ფერს იღებს, აბრუნებს შემდგომ მაგას rgb-ში
	const canvas = document.createElement("canvas");
	const ctx = canvas.getContext("2d");

	canvas.width = img.naturalWidth;
	canvas.height = img.naturalHeight;

	ctx.drawImage(img, 0, 0);

	const data = ctx.getImageData(0, 0, canvas.width, canvas.height).data;

	let r = 0;
	let g = 0;
	let b = 0;
	let count = 0;

	for (let i = 0; i < data.length; i += 80) {
		r += data[i];
		g += data[i + 1];
		b += data[i + 2];
		count++;
	}

	r = Math.floor(r / count);
	g = Math.floor(g / count);
	b = Math.floor(b / count);

	return `rgb(${r}, ${g}, ${b})`;
}

// <<<<<<<<<<<<<<<<<<<<<< Discover Page Scripts: >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>.
// ფუნქცია რომ ანიმაციები  ივსებოდეს ტანმიმდევრულად,
// მხოლოდ იმ  სექციაში, რომელიც ვიუპორტში ხვდება
// ფუნქცია რომ ანიმაციები  ივსებოდეს ტანმიმდევრულად,
// მხოლოდ იმ  სექციაში, რომელიც ვიუპორტში ხვდება

const scrollSections = document.querySelectorAll(".scrolls, .scrolls-desktop");

const observer = new IntersectionObserver(
	(entries) => {
		entries.forEach((entry) => {
			// visibility changer for image
			const container = entry.target.closest(".song-container");
			const img = container?.querySelector(".main-img");

			if (entry.isIntersecting) {
				img?.classList.add("visible");

				// scrollbar annimation
				const bars = entry.target.querySelectorAll(".scroll-bar");

				let index = 0;

				function animateBars() {
					bars[index].classList.add("active");

					bars[index].addEventListener(
						"animationend",
						() => {
							index++;
							if (index < bars.length) animateBars();
						},
						{ once: true },
					);
				}

				animateBars();
				observer.unobserve(entry.target);
			}
		});
	},
	{ threshold: 0.6 },
);

scrollSections.forEach((section) => observer.observe(section));