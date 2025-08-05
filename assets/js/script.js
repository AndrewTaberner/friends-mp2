// Enable Bootstrap tooltips on all elements with data-bs-toggle="tooltip"
document.addEventListener("DOMContentLoaded", function () {
  const tooltipTriggerList = Array.from(
    document.querySelectorAll('[data-bs-toggle="tooltip"]')
  );
  tooltipTriggerList.forEach((tooltipTriggerEl) => {
    new bootstrap.Tooltip(tooltipTriggerEl, {
      trigger: "hover focus",
    });
  });
});
