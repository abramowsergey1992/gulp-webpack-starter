// import html2canvas from "html2canvas";
// import pixelmatch from "pixelmatch";
import Draggabilly from "draggabilly";
document
	.querySelector(".test-bottom__lock")
	.addEventListener("click", function (event) {
		html.classList.toggle("_test-lock");
	});
document
	.querySelector(".test-bottom__invert")
	.addEventListener("click", function (event) {
		html.classList.toggle("_test-invert");
	});

let visibleRange = document.querySelector(".test-bottom__opacity");
visibleRange.addEventListener("input", function (event) {
	html.style.setProperty("--test-opacity", visibleRange.value / 100);
});

document.querySelectorAll(".test__item").forEach((item) => {
	// let visibleRange = item.querySelector(".test__item-opacity");
	let maket = item.querySelector(".test__item-maket");
	// let shotBtn = item.querySelector(".test__item-shot");
	let iframe = item.querySelector(".test__item-iframe");
	// let diff = item.querySelector(".test__item-diff");
	// let lock = item.querySelector(".test__item-lock");

	iframe.onload = function () {
		setTimeout(function () {
			iframe.height =
				iframe.contentWindow.document.documentElement.offsetHeight;
		}, 1000);
	};

	new Draggabilly(maket, {
		// options...
	});

	// diff.addEventListener("click", function (event) {
	// 	item.classList.add("diff-hidden");
	// });
	// shotBtn.addEventListener("click", function (event) {
	// 	item.classList.remove("diff-hidden");
	// 	let w =
	// 		maket.naturalWidth > parseInt(iframe.getAttribute("width"))
	// 			? maket.naturalWidth
	// 			: parseInt(iframe.getAttribute("width"));
	// 	let h =
	// 		maket.naturalHeight > parseInt(iframe.getAttribute("height"))
	// 			? maket.naturalHeight
	// 			: parseInt(iframe.getAttribute("height"));
	// 	console.log(iframe.contentWindow.document.documentElement);
	// 	html2canvas(item.querySelector(".test__item-body"), {
	// 		scale: 1,
	// 		allowTaint: true,
	// 		logging: true,
	// 		profile: true,
	// 		useCORS: true,
	// 	}).then((canvas) => {
	// 		canvas1.width = w;
	// 		canvas1.height = h;
	// 		canvas2.width = w;
	// 		canvas2.height = h;
	// 		let ctx = canvas.getContext("2d");

	// 		let imgData = ctx.getImageData(0, 0, w, h);
	// 		let booferTemplate = imgData;

	// 		let canvasImg = document.createElement("canvas");
	// 		canvasImg.width = w;
	// 		canvasImg.height = h;
	// 		const ctx2 = canvasImg.getContext("2d");
	// 		ctx2.drawImage(maket, 0, 0);
	// 		const bufferImg = ctx2.getImageData(0, 0, w, h);

	// 		diff.width = w;
	// 		diff.height = h;
	// 		let diffContext = diff.getContext("2d");
	// 		diff = diffContext.createImageData(w, h);
	// 		let sss = pixelmatch(
	// 			booferTemplate.data,
	// 			bufferImg.data,
	// 			diff.data,
	// 			w,
	// 			h,
	// 			{
	// 				threshold: 0.4,
	// 			}
	// 		);

	// 		diffContext.putImageData(diff, 0, 0);
	// 		canvas1.getContext("2d").putImageData(booferTemplate, 0, 0);
	// 		canvas2.getContext("2d").putImageData(bufferImg, 0, 0);
	// 	});
	// });
});
