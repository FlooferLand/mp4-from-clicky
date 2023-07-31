// Moving to the URL
browser.runtime.onMessage.addListener(msg => {
	window.location.href = msg;
});
