import html2canvas from "html2canvas";
import pixelmatch from "pixelmatch";

document.querySelectorAll(".test__item").forEach((item) => {
	let visibleRange = item.querySelector(".test__item-opacity");
	let maket = item.querySelector(".test__item-maket");
	let shotBtn = item.querySelector(".test__item-shot");
	let iframe = item.querySelector(".test__item-iframe");

	iframe.onload = function () {
		iframe.height =
			iframe.contentWindow.document.documentElement.offsetHeight;
	};
	maket.style.opacity = visibleRange.value / 100;
	visibleRange.addEventListener("change", function (event) {
		maket.style.opacity = visibleRange.value / 100;
	});
	shotBtn.addEventListener("click", function (event) {
		console.log("x", iframe);
		let w =
			maket.naturalWidth > parseInt(iframe.getAttribute("width"))
				? maket.naturalWidth
				: parseInt(iframe.getAttribute("width"));
		let h =
			maket.naturalHeight > parseInt(iframe.getAttribute("height"))
				? maket.naturalHeight
				: parseInt(iframe.getAttribute("height"));
		console.log(
			maket.naturalHeight,
			parseInt(iframe.getAttribute("height"))
		);
		console.log(w, h);
		html2canvas(
			document.querySelector("iframe").contentWindow.document
				.documentElement
		).then((canvas) => {
			let ctx = canvas.getContext("2d");
			canvas.width = w;
			canvas.height = h;
			let imgData = ctx.getImageData(0, 0, w, h);
			let booferTemplate = imgData.data;
			ctx.clearRect(0, 0, canvas.width, canvas.height);
			ctx.drawImage(maket, 0, 0);

			let canvasImg = document.createElement("canvas");
			canvasImg.width = w;
			canvasImg.height = h;
			const ctx2 = canvasImg.getContext("2d");
			ctx2.drawImage(maket, 0, 0);
			const bufferImg = ctx2.getImageData(0, 0, w, h).data;

			let diff = img;
			diff.width = w;
			diff.height = h;
			let diffContext = diff.getContext("2d");
			diff = diffContext.createImageData(w, h);
			pixelmatch(booferTemplate, bufferImg, diff.data, w, h, {
				threshold: 0.1,
			});
			console.log("diff", diff);
			diffContext.putImageData(diff, 0, 0);
		});
	});
});
