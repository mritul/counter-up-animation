const counts = document.querySelectorAll(".follCount");

counts.forEach((count) => {
  const updateCount = () => {
    const capValue = +count.getAttribute("data-target");
    const currValue = +count.textContent;
    const increment = capValue / 200;

    if (currValue < capValue) {
      count.textContent = currValue + Math.ceil(increment);
    } else {
      count.textContent = capValue;
    }
  };
  setInterval(updateCount, 10);
});
